export interface Hotel {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  description: string;
  price_per_night: number;
  image_url: string;
  availability: boolean;
  created_at: string;
  updated_at: string;
  star_rating: number;
  rating_text: string;
  rating_score: number;
  review_count: number;
  location_score: number;
  distance_from_downtown: string;
  room_type: string;
  room_beds: string;
  breakfast_included: boolean;
  free_cancellation: boolean;
  no_prepayment_needed: boolean;
  promo_message: string;
}

export interface Booking {
  id: number;
  user_id: number;
  hotel_id: number;
  check_in_date: string;
  check_out_date: string;
  special_requests: string;
  arrival_time: string;
  add_on_flight: boolean;
  add_on_car: boolean;
  add_on_taxi: boolean;
  created_at: string;
}
