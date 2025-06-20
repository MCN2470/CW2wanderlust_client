import axios from "axios";
import { getCurrentUser } from "./auth.service";

const API_URL = "http://localhost:3001/api/bookings";

interface BookingData {
  hotel_id: number;
  check_in_date: string;
  check_out_date: string;
  special_requests: string;
  arrival_time: string;
  add_on_flight: boolean;
  add_on_car: boolean;
  add_on_taxi: boolean;
}

export const getAllBookings = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createBooking = (bookingData: BookingData) => {
  const user = getCurrentUser();
  const token = user?.token;

  return axios.post(API_URL, bookingData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
