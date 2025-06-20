import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHotelById } from "../services/hotel.service";
import { Hotel } from "../types/types";

const HotelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await getHotelById(id);
        // The API returns an array, we take the first element.
        if (response.data && response.data.length > 0) {
          setHotel(response.data[0]);
        } else {
          setHotel(null); // Set to null if no hotel is found
        }
        setError(null);
      } catch (err) {
        setError("Failed to fetch hotel details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  if (!hotel) {
    return <div className="text-center mt-8">Hotel not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src={hotel.image_url}
          alt={hotel.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
          <p className="text-lg text-gray-600 mb-4">
            {hotel.city}, {hotel.country}
          </p>
          <p className="text-gray-800 mb-6">{hotel.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-800">
              <span className="text-lg font-normal">Price per night:</span> HK${" "}
              {Number(hotel.price_per_night).toFixed(2)}
            </p>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;
