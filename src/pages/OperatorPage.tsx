import React, { useState, useEffect } from "react";
import * as HotelService from "../services/hotel.service";
import { Hotel } from "../types/types";
import * as AuthService from "../services/auth.service";

const initialHotelState: Partial<Hotel> = {
  name: "",
  address: "",
  city: "",
  country: "",
  description: "",
  price_per_night: 0,
  image_url: "",
  availability: false,
  star_rating: 0,
  rating_text: "",
  rating_score: 0,
  review_count: 0,
  location_score: 0,
  distance_from_downtown: "",
  room_type: "",
  room_beds: "",
  breakfast_included: false,
  free_cancellation: false,
  no_prepayment_needed: false,
  promo_message: "",
};

const OperatorPage: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHotel, setCurrentHotel] = useState<Partial<Hotel> | null>(null);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await HotelService.getAllHotels();
      setHotels(response.data);
    } catch (err) {
      setError("Could not fetch hotels.");
    }
  };

  const handleOpenModal = (hotel: Partial<Hotel> | null = null) => {
    setCurrentHotel(hotel ? { ...hotel } : initialHotelState);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentHotel(null);
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    if (!currentHotel) return;

    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.token) {
      setError("You must be logged in to perform this action.");
      return;
    }

    try {
      if (currentHotel.id) {
        const response = await HotelService.updateHotel(
          currentHotel.id,
          currentHotel,
          currentUser.token
        );
        const updatedHotel = response.data;
        setHotels(
          hotels.map((h) => (h.id === updatedHotel.id ? updatedHotel : h))
        );
      } else {
        const hotelDataToSend = { ...initialHotelState, ...currentHotel };
        console.log("Sending hotel data:", hotelDataToSend);
        const response = await HotelService.addHotel(
          hotelDataToSend,
          currentUser.token
        );
        const newHotel = response.data;
        setHotels([...hotels, newHotel]);
      }
      handleCloseModal();
    } catch (err) {
      setError("Could not save hotel.");
    }
  };

  const handleDelete = async (id: number) => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.token) {
      setError("You must be logged in to perform this action.");
      return;
    }

    try {
      await HotelService.deleteHotel(id, currentUser.token);
      setHotels(hotels.filter((h) => h.id !== id));
    } catch (err) {
      setError("Could not delete hotel.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (currentHotel) {
      const { name, value, type } = e.target;
      let processedValue: any = value;

      // Convert numeric fields to numbers
      if (type === "number" && value !== "") {
        processedValue = parseFloat(value);
      }

      setCurrentHotel({
        ...currentHotel,
        [name]: processedValue,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Operator Panel - Manage Hotels
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <button
          onClick={() => handleOpenModal()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Hotel
        </button>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price/Night
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {hotels.map((hotel) => (
              <tr key={hotel.id} className="hover:bg-gray-100">
                <td className="py-4 px-6 whitespace-nowrap">{hotel.id}</td>
                <td className="py-4 px-6 whitespace-nowrap">{hotel.name}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {hotel.price_per_night}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {hotel.star_rating}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <button
                    onClick={() => handleOpenModal(hotel)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(hotel.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && currentHotel && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {currentHotel.id ? "Edit Hotel" : "Add New Hotel"}
            </h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={currentHotel.name || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={currentHotel.address || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={currentHotel.city || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={currentHotel.country || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={currentHotel.description || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm md:col-span-2"
              />
              <input
                type="number"
                name="price_per_night"
                placeholder="Price per night"
                value={currentHotel.price_per_night || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="image_url"
                placeholder="Image URL"
                value={currentHotel.image_url || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="number"
                name="star_rating"
                placeholder="Star Rating"
                value={currentHotel.star_rating || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="rating_text"
                placeholder="Rating Text (e.g., 'Excellent')"
                value={currentHotel.rating_text || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="number"
                step="0.1"
                name="rating_score"
                placeholder="Rating Score"
                value={currentHotel.rating_score || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="number"
                name="review_count"
                placeholder="Review Count"
                value={currentHotel.review_count || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="number"
                step="0.1"
                name="location_score"
                placeholder="Location Score"
                value={currentHotel.location_score || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="distance_from_downtown"
                placeholder="Distance from Downtown"
                value={currentHotel.distance_from_downtown || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="room_type"
                placeholder="Room Type"
                value={currentHotel.room_type || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="room_beds"
                placeholder="Room Beds"
                value={currentHotel.room_beds || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="promo_message"
                placeholder="Promo Message"
                value={currentHotel.promo_message || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="availability"
                  checked={Boolean(currentHotel.availability)}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      availability: e.target.checked,
                    })
                  }
                />
                <span>Available</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="breakfast_included"
                  checked={Boolean(currentHotel.breakfast_included)}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      breakfast_included: e.target.checked,
                    })
                  }
                />
                <span>Breakfast Included</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="free_cancellation"
                  checked={Boolean(currentHotel.free_cancellation)}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      free_cancellation: e.target.checked,
                    })
                  }
                />
                <span>Free Cancellation</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="no_prepayment_needed"
                  checked={Boolean(currentHotel.no_prepayment_needed)}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      no_prepayment_needed: e.target.checked,
                    })
                  }
                />
                <span>No Prepayment Needed</span>
              </label>
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="mt-2 px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OperatorPage;
