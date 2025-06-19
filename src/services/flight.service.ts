import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const searchFlights = (params: {
  origin: string;
  destination: string;
  date: string;
}) => {
  return axios.get(`${API_URL}/flights/search`, { params });
};
