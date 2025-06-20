import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/api/users";

export const getUserById = (id: number) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateUserProfile = (id: number, photo: File) => {
  const formData = new FormData();
  formData.append("profile_photo", photo);

  return axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      ...authHeader(),
      "Content-Type": "multipart/form-data",
    },
  });
};
