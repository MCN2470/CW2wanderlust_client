import React, { useState, useEffect } from "react";
import * as BookingService from "../services/booking.service";
import * as AuthService from "../services/auth.service";
import { Booking } from "../types/types";

const BookingRecordPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const currentUser = AuthService.getCurrentUser();
      if (!currentUser || !currentUser.token) {
        setError("You must be logged in to view booking records.");
        return;
      }

      try {
        const data = await BookingService.getAllBookings(currentUser.token);
        setBookings(data);
      } catch (err) {
        setError("Could not fetch booking records.");
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Records</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking ID
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User ID
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Special Requests
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Add-on Flight
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Add-on Car
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Add-on Taxi
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-100">
                <td className="py-4 px-6 whitespace-nowrap">{booking.id}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {booking.user_id}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">Hotel</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  Hotel ID: {booking.hotel_id}, Check-in:{" "}
                  {new Date(booking.check_in_date).toLocaleDateString()}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {booking.special_requests}
                </td>
                <td className="py-4 px-6 text-center">
                  {booking.add_on_flight && <span>&#10003;</span>}
                </td>
                <td className="py-4 px-6 text-center">
                  {booking.add_on_car && <span>&#10003;</span>}
                </td>
                <td className="py-4 px-6 text-center">
                  {booking.add_on_taxi && <span>&#10003;</span>}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {new Date(booking.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRecordPage;
