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
  return axios.get(`${API_URL}/search`, {
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

export const getAllHotels = () => {
  return axios.get(API_URL);
};

export const getHotelById = (id: string) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addHotel = (hotelData: any, token: string) => {
  return axios.post(API_URL, hotelData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateHotel = (id: number, hotelData: any, token: string) => {
  return axios.put(`${API_URL}/${id}`, hotelData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteHotel = (id: number, token: string) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getFeaturedHotels = () => {
  return axios.get(`${API_URL}/featured`);
};
