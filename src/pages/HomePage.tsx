import React from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Hong Kong",
    country: "HK",
    image: "/photo/HongKong.jpg",
    gridClass: "col-span-2 row-span-2",
    code: "HKG",
  },
  {
    name: "Tokyo",
    country: "JP",
    image: "/photo/tokyo.jpg",
    gridClass: "col-span-1 row-span-1",
    code: "TYO",
  },
  {
    name: "Osaka",
    country: "JP",
    image: "/photo/Osaka_Itineraries-L.jpg",
    gridClass: "col-span-1 row-span-1",
    code: "OSA",
  },
  {
    name: "Taipei",
    country: "TW",
    image: "/photo/taipei-101_standard.jpg",
    gridClass: "col-span-1 row-span-1",
    code: "TPE",
  },
  {
    name: "Seoul",
    country: "KR",
    image: "/photo/Seoul1.jpg",
    gridClass: "col-span-2 row-span-1",
    code: "SEL",
  },
];

const HomePage: React.FC = () => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getSearchUrl = (destinationCode: string) => {
    const checkIn = new Date();
    const checkOut = new Date();
    checkOut.setDate(checkIn.getDate() + 2); // Default 2-night stay
    const adults = 2;
    const children = 0;
    const rooms = 1;

    return `/hotels?destinationCode=${destinationCode}&checkIn=${formatDate(
      checkIn
    )}&checkOut=${formatDate(
      checkOut
    )}&adults=${adults}&children=${children}&rooms=${rooms}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Trending destinations</h1>
        <p className="text-lg text-gray-600">
          Most popular choices for travellers from Hong Kong
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[700px]">
        {destinations.map((dest) => (
          <Link
            to={getSearchUrl(dest.code)}
            key={dest.name}
            className={`${dest.gridClass} relative rounded-lg overflow-hidden group shadow-lg`}
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">
                {dest.name}{" "}
                <span className="font-normal text-xl">{dest.country}</span>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
