import { Hotel } from "../types/types";

export const getHotelLink = (hotel: Hotel): string => {
  switch (hotel.name) {
    case "Mokkoan":
      return "/hotels/mokkoan";
    case "The Langham Hong Kong":
      return "/hotels/the-langham-hong-kong";
    case "Star Hostel Taipei Main Station":
      return "/hotels/star-hostel-taipei-main-station";
    case "Original Backpackers":
      return "/hotels/original-backpackers";
    case "Osaka Ukiyoe Ryokan":
      return "/hotels/osaka-ukiyoe-ryokan";
    default:
      return `/hotels/${hotel.id}`;
  }
};
