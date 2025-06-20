import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFavorites } from "../services/favorite.service";
import { Hotel } from "../types/types";

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

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleBookNow = (hotel: Hotel) => {
    navigate("/booking", { state: { hotel } });
  };

  if (loading) {
    return (
      <div className="text-center py-10">Loading your favorite hotels...</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any hotels to your favorites yet.</p>
      ) : (
        <div className="space-y-6">
          {favorites.map((hotel) => (
            <div
              key={hotel.id}
              className="flex bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden"
            >
              <div className="w-1/3">
                <img
                  src={hotel.image_url}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{hotel.address}</p>
                </div>
                <div className="self-end mt-4 flex items-center space-x-4">
                  <Link
                    to={getHotelLink(hotel)}
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleBookNow(hotel)}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
