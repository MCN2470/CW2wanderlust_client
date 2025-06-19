import React, { useState, useEffect } from "react";
import * as HotelService from "../services/hotel.service";
import { Link } from "react-router-dom";

// This should match the interface in HotelsPage.tsx
interface HotelbedsHotel {
  code: number;
  name: string;
  zoneName: string;
  destinationName: string;
  minRate: number;
  currency: string;
  images?: { path: string }[];
}

const HomePage: React.FC = () => {
  const [hotels, setHotels] = useState<HotelbedsHotel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const checkInDate = new Date();
        const checkOutDate = new Date();
        checkOutDate.setDate(checkInDate.getDate() + 2);
        const formatDate = (date: Date) => date.toISOString().split("T")[0];

        const response = await HotelService.getHotels(
          "PMI", // Default destination
          formatDate(checkInDate),
          formatDate(checkOutDate),
          2, // Default adults
          0, // Default children
          1 // Default rooms
        );
        if (response.data && response.data.hotels) {
          // Take only the first 6 hotels for the feature section
          setHotels(response.data.hotels.slice(0, 6));
        }
      } catch (err) {
        setError("Could not fetch hotels. Please try again later.");
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to Wanderlust</h1>
        <p className="text-xl text-gray-600">
          Your ultimate travel companion. Find the best hotels and flights for
          your next adventure.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Featured Hotels</h2>
        {error && <p className="text-red-500">{error}</p>}
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
      </div>
    </div>
  );
};

export default HomePage;
