import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllHotels } from "../services/hotel.service";
import { Hotel } from "../types/types";
import { getCurrentUser } from "../services/auth.service";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../services/favorite.service";

const destinations = [
  {
    name: "Hong Kong",
    country: "HK",
    image: "/photo/HongKong.jpg",
    gridClass: "col-span-2 row-span-2",
    code: "HKG",
  },
  {
    name: "Tokyo",
    country: "JP",
    image: "/photo/tokyo.jpg",
    gridClass: "col-span-1 row-span-1",
    code: "TYO",
  },
  {
    name: "Osaka",
    country: "JP",
    image: "/photo/Osaka_Itineraries-L.jpg",
    gridClass: "col-span-1 row-span-1",
    code: "OSA",
  },
  {
    name: "Taipei",
    country: "TW",
    image: "/photo/taipei-101_standard.jpg",
    gridClass: "col-span-1 row-span-1",
    code: "TPE",
  },
  {
    name: "Seoul",
    country: "KR",
    image: "/photo/Seoul1.jpg",
    gridClass: "col-span-2 row-span-1",
    code: "SEL",
  },
];

// Temporarily moved getHotelLink inside HomePage.tsx to avoid import issues
const getHotelLink = (hotel: Hotel): string => {
  switch (hotel.name) {
    case "Mokkoan":
      return "/hotels/mokkoan";
    case "The Langham Hong Kong":
      return "/hotels/the-langham-hong-kong";
    case "Star Hostel Taipei Main Station":
      return "/hotels/star-hostel-taipei-main-station";
    case "Original Backpackers":
      return "/hotels/original-backpackers";
    case "Osaka Ukiyoe Ryokan":
      return "/hotels/osaka-ukiyoe-ryokan";
    default:
      return `/hotels/${hotel.id}`;
  }
};

const HomePage: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const hotelResponse = await getAllHotels();
        setHotels(hotelResponse.data);

        const user = getCurrentUser();
        if (user) {
          const favoritesResponse = await getFavorites();
          setFavorites(favoritesResponse.data.map((fav: Hotel) => fav.id));
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getSearchUrl = (destinationCode: string) => {
    const checkIn = new Date();
    const checkOut = new Date();
    checkOut.setDate(checkIn.getDate() + 2); // Default 2-night stay
    const adults = 2;
    const children = 0;
    const rooms = 1;

    return `/hotels?destinationCode=${destinationCode}&checkIn=${formatDate(
      checkIn
    )}&checkOut=${formatDate(
      checkOut
    )}&adults=${adults}&children=${children}&rooms=${rooms}`;
  };

  const handleFavoriteClick = async (hotelId: number) => {
    const user = getCurrentUser();
    if (!user) {
      alert("Please log in to add hotels to your favorites.");
      navigate("/login");
      return;
    }

    try {
      if (favorites.includes(hotelId)) {
        await removeFavorite(hotelId);
        setFavorites(favorites.filter((id) => id !== hotelId));
      } else {
        await addFavorite(hotelId);
        setFavorites([...favorites, hotelId]);
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
      alert("There was an error updating your favorites. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Trending destinations</h1>
        <p className="text-lg text-gray-600">
          Most popular choices for travellers from Hong Kong
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[700px]">
        {destinations.map((dest) => (
          <Link
            to={getSearchUrl(dest.code)}
            key={dest.name}
            className={`${dest.gridClass} relative rounded-lg overflow-hidden group shadow-lg`}
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">
                {dest.name}{" "}
                <span className="font-normal text-xl">{dest.country}</span>
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-2">Featured Hotels</h2>
        <p className="text-lg text-gray-600 mb-8">
          Hand-picked selection of quality places to stay
        </p>
        <div className="space-y-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-1/3">
                <img
                  src={hotel.image_url}
                  alt={hotel.name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <button
                  className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition-colors"
                  onClick={() => handleFavoriteClick(hotel.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill={
                      favorites.includes(hotel.id) ? "currentColor" : "none"
                    }
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </button>
              </div>

              {/* Details Section */}
              <div className="w-3/4 p-4 flex">
                {/* Left Column */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-700">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-blue-600 underline cursor-pointer mt-2">
                      {hotel.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {hotel.distance_from_downtown}
                    </p>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="w-1/3 px-4 flex flex-col justify-start pt-1">
                  <p className="font-bold leading-tight">{hotel.room_type}</p>
                  {hotel.room_beds !== "000" && (
                    <p className="text-sm text-gray-600 mt-1">
                      {hotel.room_beds}
                    </p>
                  )}
                  {Boolean(
                    hotel.breakfast_included ||
                      hotel.free_cancellation ||
                      hotel.no_prepayment_needed
                  ) && (
                    <div className="mt-2 space-y-1">
                      {hotel.breakfast_included && (
                        <p className="flex items-center text-sm text-green-600">
                          <CheckIcon /> Breakfast included
                        </p>
                      )}
                      {hotel.free_cancellation && (
                        <p className="flex items-center text-sm text-green-600">
                          <CheckIcon /> Free cancellation
                        </p>
                      )}
                      {hotel.no_prepayment_needed && (
                        <p className="flex items-center text-sm text-green-600">
                          <CheckIcon /> No prepayment needed
                        </p>
                      )}
                    </div>
                  )}
                  {hotel.promo_message && (
                    <p className="text-xs text-red-600 font-bold mt-2">
                      {hotel.promo_message}
                    </p>
                  )}
                </div>

                {/* Right Column */}
                <div className="text-right mt-4 lg:mt-0 lg:flex lg:flex-col lg:justify-between lg:h-full">
                  <div>
                    <div className="flex items-center justify-end">
                      <p className="font-bold text-lg text-gray-800 mr-2">
                        {hotel.rating_text}
                      </p>
                      <span className="bg-blue-800 text-white font-bold p-2 rounded">
                        {hotel.rating_score}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 text-right mt-1">
                      Location: {hotel.location_score}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">1 night, 2 adults</p>
                    <p className="text-2xl font-bold text-gray-900">
                      HK$ {Number(hotel.price_per_night).toFixed(0)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Additional charges may apply
                    </p>
                    <Link
                      to={getHotelLink(hotel)}
                      className="mt-2 inline-block w-full text-center bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Detail &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default HomePage;
