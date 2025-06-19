import React, { useState, useEffect } from "react";
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

  const handleSearch = async () => {
    if (!searchTerm.trim() || !checkInDate || !checkOutDate) {
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
      const formatDate = (date: Date) => date.toISOString().split("T")[0];

      const response = await HotelService.getHotels(
        searchTerm,
        formatDate(checkInDate),
        formatDate(checkOutDate),
        adults,
        children,
        rooms
      );
      if (response.data && response.data.hotels) {
        setHotels(response.data.hotels);
      } else {
        setHotels([]);
      }
    } catch (err) {
      setError("Could not fetch hotels. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Hotels</h1>
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
                onChange={(date) => setCheckInDate(date || undefined)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholderText="Check-in"
              />
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date || undefined)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate}
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
              onClick={handleSearch}
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
        <p>Please enter a destination to search for hotels.</p>
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
