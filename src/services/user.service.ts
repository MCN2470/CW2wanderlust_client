import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/api/users/";

export const createStaff = (data: any) => {
  return axios.post(API_URL + "staff", data, { headers: authHeader() });
};
