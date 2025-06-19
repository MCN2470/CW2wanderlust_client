import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const register = (userData: any) => {
  return axios.post(`${API_URL}/users/register`, userData);
};

export const login = async (userData: any) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (!userStr) {
    return null;
  }
  const user = JSON.parse(userStr);
  const decodedToken: any = jwtDecode(user.token);

  return {
    ...user,
    role: decodedToken.role,
  };
};
