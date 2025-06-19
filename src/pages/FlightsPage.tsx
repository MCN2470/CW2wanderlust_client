import React, { useState } from "react";
import * as FlightService from "../services/flight.service";

interface Flight {
  id: string;
  price: {
    total: string;
  };
  itineraries: {
    segments: {
      departure: { iataCode: string; at: string };
      arrival: { iataCode: string; at: string };
      carrierCode: string;
      number: string;
    }[];
  }[];
}

const FlightsPage: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setFlights([]);
    try {
      const response = await FlightService.searchFlights({
        origin,
        destination,
        date,
      });
      setFlights(response.data.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Could not fetch flights. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search for Flights</h1>
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-end space-x-4"
      >
        <div className="flex-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="origin"
          >
            Origin
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="origin"
            type="text"
            placeholder="e.g., LHR"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>
        <div className="flex-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="destination"
          >
            Destination
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="e.g., JFK"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="flex-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {loading && <p className="text-center mt-8">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-8">{error}</p>}

      <div className="mt-8">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white shadow-md rounded-lg p-6 mb-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">
                  {flight.itineraries[0].segments[0].departure.iataCode} →{" "}
                  {
                    flight.itineraries[0].segments[
                      flight.itineraries[0].segments.length - 1
                    ].arrival.iataCode
                  }
                </p>
                <p className="text-sm text-gray-600">
                  {flight.itineraries[0].segments.length - 1} stop(s)
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">
                  €{flight.price.total}
                </p>
                <p className="text-sm text-gray-600">Total Price</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightsPage;
