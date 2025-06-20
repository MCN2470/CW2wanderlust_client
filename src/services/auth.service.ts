import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const register = (userData: any) => {
  return axios.post(`${API_URL}/users/register`, userData);
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/login`, {
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
    window.dispatchEvent(new Event("authChange"));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("authChange"));
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (!userStr) {
    return null;
  }

  try {
    const user = JSON.parse(userStr);
    if (!user || !user.token) {
      return null;
    }

    const decodedToken: any = jwtDecode(user.token);

    // Check if token is expired
    if (decodedToken.exp * 1000 < Date.now()) {
      logout(); // Use logout function to also dispatch event
      return null;
    }

    // The token is the source of truth for id and role
    return {
      ...user,
      id: decodedToken.id,
      role: decodedToken.role,
    };
  } catch (error) {
    console.error(
      "Failed to parse user from localStorage or decode token",
      error
    );
    return null;
  }
};
