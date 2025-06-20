import axios from "axios";
import { getCurrentUser } from "./auth.service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

const getAuthHeaders = () => {
  const user = getCurrentUser();
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
};

export const getFavorites = () => {
  return axios.get(`${API_URL}/favorites`, { headers: getAuthHeaders() });
};

export const addFavorite = (hotelId: number) => {
  return axios.post(
    `${API_URL}/favorites`,
    { hotelId },
    { headers: getAuthHeaders() }
  );
};

export const removeFavorite = (hotelId: number) => {
  return axios.delete(`${API_URL}/favorites/${hotelId}`, {
    headers: getAuthHeaders(),
  });
};
