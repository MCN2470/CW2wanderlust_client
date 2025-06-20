import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

interface FlightSearchParams {
  origin: string;
  destination: string;
  date: string;
  airline?: string;
}

const searchFlights = async (params: FlightSearchParams) => {
  const response = await axios.get(`${API_URL}/flights/search`, {
    params,
  });
  return response.data;
};

const FlightService = {
  searchFlights,
};

export default FlightService;
