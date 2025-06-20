import React from "react";
import { useLocation, Link } from "react-router-dom";

const BookingConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { bookingDetails, hotel } = location.state || {};

  if (!bookingDetails || !hotel) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Booking information not found.
        </h1>
        <p>Please go back to the homepage to start a new booking.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Go to Homepage
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Booking Successful!
          </h1>
          <p className="text-gray-600 mb-6">
            Your booking transcript is below. A confirmation has been sent to{" "}
            {bookingDetails.email}.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Booking ID: {bookingDetails.bookingId}
          </p>

          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">{hotel.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-bold text-gray-700">Check-in</h3>
                <p>
                  {new Date(bookingDetails.check_in_date).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Check-out</h3>
                <p>
                  {new Date(bookingDetails.check_out_date).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Guest Information</h3>
            <p>
              <strong>Name:</strong> {bookingDetails.firstName}{" "}
              {bookingDetails.lastName}
            </p>
            <p>
              <strong>Guests:</strong> {bookingDetails.adults} Adults,{" "}
              {bookingDetails.children > 0 &&
                `${bookingDetails.children} Children`}
            </p>
            <p>
              <strong>Rooms:</strong> {bookingDetails.rooms}
            </p>
          </div>

          {bookingDetails.special_requests && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Special Requests</h3>
              <p className="text-gray-700 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">
                {bookingDetails.special_requests}
              </p>
            </div>
          )}

          {bookingDetails.arrival_time &&
            bookingDetails.arrival_time !== "Please select" && (
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">
                  Estimated Arrival Time
                </h3>
                <p>{bookingDetails.arrival_time}</p>
              </div>
            )}

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Add-ons Selected</h3>
            <ul className="list-disc list-inside text-gray-700">
              {bookingDetails.add_on_flight && (
                <li>Flight information will be sent to your email.</li>
              )}
              {bookingDetails.add_on_car && (
                <li>Car rental options will be sent to your email.</li>
              )}
              {bookingDetails.add_on_taxi && (
                <li>Taxi and shuttle options will be sent to your email.</li>
              )}
              {!bookingDetails.add_on_flight &&
                !bookingDetails.add_on_car &&
                !bookingDetails.add_on_taxi && (
                  <li>No add-ons were selected.</li>
                )}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors mr-4"
            >
              Print Transcript
            </button>
            <Link to="/" className="text-blue-600 hover:underline">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
