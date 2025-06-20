import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as HotelService from "../services/hotel.service";
import GuestSelector from "../components/GuestSelector";

// Interface for the hotel data coming from the Hotelbeds API
interface HotelbedsHotel {
  code: number;
  name: string;
  zoneName: string;
  destinationName: string;
  minRate: number;
  currency: string;
  images?: { path: string }[];
}

const HotelsPage: React.FC = () => {
  const [hotels, setHotels] = useState<HotelbedsHotel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const destinationCode = searchParams.get("destinationCode");
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");
    const adultsParam = searchParams.get("adults");
    const childrenParam = searchParams.get("children");
    const roomsParam = searchParams.get("rooms");

    if (destinationCode && checkIn && checkOut) {
      // Create a temporary state to avoid race conditions
      const newSearchParams = {
        destination: destinationCode,
        checkInDate: new Date(checkIn.replace(/-/g, "/")),
        checkOutDate: new Date(checkOut.replace(/-/g, "/")),
        adults: adultsParam ? parseInt(adultsParam, 10) : 2,
        children: childrenParam ? parseInt(childrenParam, 10) : 0,
        rooms: roomsParam ? parseInt(roomsParam, 10) : 1,
      };

      // Set the state
      setSearchTerm(newSearchParams.destination);
      setCheckInDate(newSearchParams.checkInDate);
      setCheckOutDate(newSearchParams.checkOutDate);
      setAdults(newSearchParams.adults);
      setChildren(newSearchParams.children);
      setRooms(newSearchParams.rooms);

      // Trigger search with the new state
      handleSearch(newSearchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearch = async (params?: {
    destination: string;
    checkInDate: Date;
    checkOutDate: Date;
    adults: number;
    children: number;
    rooms: number;
  }) => {
    const searchDestination = params ? params.destination : searchTerm;
    const searchCheckIn = params ? params.checkInDate : checkInDate;
    const searchCheckOut = params ? params.checkOutDate : checkOutDate;
    const searchAdults = params ? params.adults : adults;
    const searchChildren = params ? params.children : children;
    const searchRooms = params ? params.rooms : rooms;

    if (!searchDestination.trim() || !searchCheckIn || !searchCheckOut) {
      setError(
        "Please enter a destination and select check-in/check-out dates."
      );
      return;
    }
    setLoading(true);
    setHasSearched(true);
    setError(null);
    setHotels([]);

    try {
      const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      const response = await HotelService.getHotels(
        searchDestination,
        formatDate(searchCheckIn),
        formatDate(searchCheckOut),
        searchAdults,
        searchChildren,
        searchRooms
      );
      if (response.data && response.data.hotels) {
        setHotels(response.data.hotels);
      } else {
        setHotels([]);
      }
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 503) {
        setError(
          "Hotel search service is temporarily unavailable. The external hotel booking API is currently down. Please try again later."
        );
      } else if (err.response?.status >= 500) {
        setError(
          "Hotel search service is temporarily unavailable. Please try again later."
        );
      } else {
        setError("Could not search for hotels. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Hotels</h1>
      <p className="text-gray-600 mb-6">
        Search for hotels worldwide using our external booking service
      </p>
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Where are you going?
            </label>
            <input
              type="text"
              placeholder="e.g., NYC"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Check-in — Check-out
            </label>
            <div className="flex gap-2">
              <DatePicker
                selected={checkInDate}
                onChange={(date: Date | null) => {
                  const newCheckIn = date || new Date();
                  setCheckInDate(newCheckIn);
                  if (checkOutDate && newCheckIn >= checkOutDate) {
                    const newCheckOut = new Date(newCheckIn);
                    newCheckOut.setDate(newCheckIn.getDate() + 1);
                    setCheckOutDate(newCheckOut);
                  }
                }}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholderText="Check-in"
              />
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date || undefined)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={
                  checkInDate
                    ? new Date(checkInDate.getTime() + 86400000)
                    : new Date()
                }
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholderText="Check-out"
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <GuestSelector
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
              rooms={rooms}
              setRooms={setRooms}
            />
          </div>
          <div className="md:col-span-1 flex items-end">
            <button
              onClick={() => handleSearch()}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">I'm looking for flights</span>
          </label>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !hasSearched && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-700 mb-2">
            Please enter a destination to search for hotels.
          </p>
          <p className="text-sm text-gray-500">
            We'll search our external booking partners to find you the best
            deals.
          </p>
        </div>
      )}

      {loading && <p>Loading hotels...</p>}

      {!loading && hasSearched && hotels.length === 0 && (
        <p>No hotels found for this destination. Try another search.</p>
      )}

      {!loading && hotels.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.code}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {hotel.images && hotel.images.length > 0 ? (
                <img
                  src={`http://photos.hotelbeds.com/giata/${hotel.images[0].path}`}
                  alt={hotel.name || "Hotel image"}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {hotel.name || "Hotel Name Not Available"}
                </h3>
                <p className="text-gray-700">
                  {hotel.zoneName || "N/A"}, {hotel.destinationName || "N/A"}
                </p>
                <p className="text-lg font-bold text-blue-600 mt-4">
                  From ${hotel.minRate} / night ({hotel.currency})
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelsPage;
