import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as BookingService from "../services/booking.service";
import GuestSelector from "../components/GuestSelector";
import { Hotel } from "../types/types";
import { PaperAirplaneIcon, TruckIcon } from "@heroicons/react/24/outline";

const BookingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = (location.state as { hotel: Hotel }) || {};

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [addToStay, setAddToStay] = useState({
    flight: false,
    car: false,
    taxi: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const totalNights = useMemo(() => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  }, [checkInDate, checkOutDate]);

  if (!hotel) {
    return (
      <div>
        No hotel selected for booking. Please go back and select a hotel.
      </div>
    );
  }

  const handleBooking = async () => {
    if (!checkInDate || !checkOutDate || !firstName || !lastName || !email) {
      setError("Please fill in all required fields and select dates.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const bookingData = {
        hotel_id: hotel.id,
        check_in_date: checkInDate.toISOString().split("T")[0],
        check_out_date: checkOutDate.toISOString().split("T")[0],
        special_requests: specialRequests,
        arrival_time: arrivalTime,
        add_on_flight: addToStay.flight,
        add_on_car: addToStay.car,
        add_on_taxi: addToStay.taxi,
      };
      await BookingService.createBooking(bookingData);
      alert("Booking successful!");
      navigate("/");
    } catch (err) {
      setError("There was an error creating your booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Book {hotel.name}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Enter your details</h2>
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name*
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name*
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address*
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Add to your stay */}
            <div className="border-t border-b py-6 my-6">
              <h3 className="text-xl font-bold mb-4">Add to your stay</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    id="flight"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-1"
                    onChange={(e) =>
                      setAddToStay({ ...addToStay, flight: e.target.checked })
                    }
                  />
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="flight"
                      className="font-medium text-gray-700"
                    >
                      I'll need a flight for my trip
                    </label>
                    <p className="text-gray-500">
                      Skip the stress of searching – we'll add flight options
                      (provided by Booking.com) to your destination in your
                      booking confirmation.
                    </p>
                  </div>
                  <PaperAirplaneIcon className="h-6 w-6 text-gray-500 ml-auto" />
                </div>
                <div className="flex items-start">
                  <input
                    id="car"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-1"
                    onChange={(e) =>
                      setAddToStay({ ...addToStay, car: e.target.checked })
                    }
                  />
                  <div className="ml-3 text-sm">
                    <label htmlFor="car" className="font-medium text-gray-700">
                      I'm interested in renting a car
                    </label>
                    <p className="text-gray-500">
                      Make the most of your trip – check out car rental options
                      in your booking confirmation.
                    </p>
                  </div>
                  <TruckIcon className="h-6 w-6 text-gray-500 ml-auto" />
                </div>
                <div className="flex items-start">
                  <input
                    id="taxi"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-1"
                    onChange={(e) =>
                      setAddToStay({ ...addToStay, taxi: e.target.checked })
                    }
                  />
                  <div className="ml-3 text-sm">
                    <label htmlFor="taxi" className="font-medium text-gray-700">
                      Want to book a taxi or shuttle ride in advance?
                    </label>
                    <p className="text-gray-500">
                      Avoid surprises – get from the airport to your
                      accommodations without any hassle. We'll add taxi options
                      to your booking confirmation.
                    </p>
                  </div>
                  <span className="ml-auto text-gray-600 font-bold text-sm">
                    TAXI
                  </span>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Special requests</h3>
              <p className="text-sm text-gray-600 mb-2">
                Special requests can't be guaranteed, but the property will do
                its best to meet your needs. You can always make a special
                request after your booking is complete.
              </p>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Please write your requests in English or Japanese. (optional)"
              ></textarea>
            </div>

            {/* Arrival Time */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Your arrival time</h3>
              <p className="text-sm text-gray-600 mb-2">
                Your room will be ready for check-in between 3:00 PM and 10:00
                PM
              </p>
              <select
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option>Please select</option>
                <option>I don't know</option>
                {[...Array(24)].map((_, i) => (
                  <option key={i} value={`${i}:00 - ${i + 1}:00`}>{`${i
                    .toString()
                    .padStart(2, "0")}:00 - ${(i + 1)
                    .toString()
                    .padStart(2, "0")}:00`}</option>
                ))}
              </select>
            </div>

            {/* House Rules */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Review House Rules</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>No smoking</li>
                <li>Pets are not allowed</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                By continuing to the next step, you agree to these house rules.
              </p>
            </div>

            <button
              onClick={handleBooking}
              disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {loading ? "Processing..." : "Pay & Transcript"}
            </button>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Your booking details</h2>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="font-semibold">Check-in</p>
                    <p>
                      {checkInDate
                        ? checkInDate.toLocaleDateString()
                        : "Select date"}
                    </p>
                    <p className="text-sm text-gray-500">3:00 PM – 10:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Check-out</p>
                    <p>
                      {checkOutDate
                        ? checkOutDate.toLocaleDateString()
                        : "Select date"}
                    </p>
                    <p className="text-sm text-gray-500">7:00 AM – 12:00 PM</p>
                  </div>
                </div>
                <hr className="my-2" />
                <p>Total length of stay:</p>
                <p className="font-semibold">
                  {totalNights} night{totalNights !== 1 && "s"}
                </p>
              </div>
              <hr className="my-4" />
              <div>
                <p>You selected</p>
                <p className="font-bold text-lg">
                  {rooms} room for {adults} adults
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="font-bold text-lg mb-4">Select Dates & Guests</h3>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Check-in
                  </label>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    selectsStart
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={new Date()}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholderText="Select date"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Check-out
                  </label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    selectsEnd
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={checkInDate || new Date()}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholderText="Select date"
                  />
                </div>
              </div>
              <GuestSelector
                adults={adults}
                setAdults={setAdults}
                children={children}
                setChildren={setChildren}
                rooms={rooms}
                setRooms={setRooms}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
