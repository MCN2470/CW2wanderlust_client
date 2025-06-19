import axios from "axios";

const API_URL = "http://localhost:3001/api/hotels";

export const getHotels = (
  destinationCode: string,
  checkInDate: string,
  checkOutDate: string,
  adults: number,
  children: number,
  rooms: number
) => {
  return axios.get(API_URL, {
    params: {
      destinationCode,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      adults,
      children,
      rooms,
    },
  });
};

export const addHotel = (hotelData: any, token: string) => {
  return axios.post(`${API_URL}/hotels`, hotelData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
