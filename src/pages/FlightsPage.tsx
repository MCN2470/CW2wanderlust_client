import React, { useState } from "react";
import * as FlightService from "../services/flight.service";
import { format } from "date-fns";

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
    duration: string;
  }[];
}

interface Dictionaries {
  carriers: {
    [key: string]: string;
  };
}

const formatDuration = (duration: string) => {
  const hours = parseInt(duration.match(/(\d+)H/)?.[1] || "0");
  const minutes = parseInt(duration.match(/(\d+)M/)?.[1] || "0");
  return `${hours} hr ${minutes} min`;
};

const FlightsPage: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [airline, setAirline] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [dictionaries, setDictionaries] = useState<Dictionaries | null>(null);
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
        airline,
      });
      setFlights(response.data.data);
      setDictionaries(response.data.dictionaries);
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
        <div className="flex-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="airline"
          >
            Airline (optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="airline"
            type="text"
            placeholder="e.g., BA"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
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
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="col-span-1">
                <p className="text-sm font-semibold text-gray-800">
                  {
                    dictionaries?.carriers[
                      flight.itineraries[0].segments[0].carrierCode
                    ]
                  }
                </p>
                <p className="text-lg font-semibold">
                  {formatDuration(flight.itineraries[0].duration)}
                </p>
                <p className="text-sm text-gray-600">
                  {flight.itineraries[0].segments[0].departure.iataCode} →{" "}
                  {
                    flight.itineraries[0].segments[
                      flight.itineraries[0].segments.length - 1
                    ].arrival.iataCode
                  }
                </p>
              </div>
              <div className="col-span-2 text-center">
                <p>
                  <span className="font-semibold">Depart:</span>{" "}
                  {format(
                    new Date(flight.itineraries[0].segments[0].departure.at),
                    "dd-MM-yyyy hh:mm a"
                  )}
                </p>
                <p>
                  <span className="font-semibold">Arrive:</span>{" "}
                  {format(
                    new Date(
                      flight.itineraries[0].segments[
                        flight.itineraries[0].segments.length - 1
                      ].arrival.at
                    ),
                    "dd-MM-yyyy hh:mm a"
                  )}
                </p>
              </div>
              <div className="col-span-1 text-right">
                <p className="text-2xl font-bold text-blue-600">
                  ${flight.price.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightsPage;
