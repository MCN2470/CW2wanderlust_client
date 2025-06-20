import React from "react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1 text-green-500 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const StarHostelTaipeiMainStationPage: React.FC = () => {
  const hotel = {
    name: "Star Hostel Taipei Main Station",
    images: [
      "/photo/Star Hostel Taipei Main StationOverview.jpg",
      "/photo/Star Hostel Taipei Main StationRoom.jpg",
    ],
    about:
      "Star Hostel Taipei Main Station offers simple but comfortable accommodations near Taipei Main Station. It is only a 5-minute walk from Airport MRT Taipei Main Station (A1) and 7-minute walk from Taipei Main Station, where guest can easily take public transport to explore the city. Free Wi-Fi access is provided.\n\nHostel Star Taipei Main Station is a 15-minute MRT ride from Ximending and a 23-minute MRT ride from Huashan 1914 Creative Park.\n\nRooms here are all soundproofing and air-conditioned. Private rooms will provide a flat-screen TV, a work desk and a private bathroom. A hairdryer is included also.\n\nYou will find a shared lounge and kitchen. Staff at tour desk will help with trip plans and luggage storage. A hearty breakfast and freshly brewed coffee are served in the green lounge. This property hosts activities and provides tourist information.",
    popular_facilities: [
      "Non-smoking rooms",
      "Free Wifi",
      "Family rooms",
      "24-hour front desk",
      "Terrace",
      "Laundry",
      "Elevator",
      "Baggage storage",
      "Daily housekeeping",
      "Wonderful Breakfast",
    ],
    rating_score: 9.3,
    rating_text: "Wonderful",
    review_count: 4505,
    review_categories: [
      { name: "Staff", score: 9.6 },
      { name: "Facilities", score: 9.5 },
      { name: "Cleanliness", score: 9.6 },
      { name: "Comfort", score: 9.5 },
      { name: "Value for money", score: 9.3 },
      { name: "Location", score: 9.6 },
      { name: "Free Wifi", score: 9.0 },
    ],
    area_info: {
      "what's nearby": [
        { name: "Museum of Contemporary Art Taipei", distance: "450 m" },
        { name: "Railway Department Park", distance: "550 m" },
        { name: "Taipei Prefecture Capital North Gate", distance: "650 m" },
        { name: "National Taiwan Museum", distance: "1.1 km" },
        { name: "Taipei Zhongshan Hall", distance: "1.2 km" },
        { name: "2/28 Memorial Peace Park", distance: "1.3 km" },
        { name: "Yanping Riverside Park", distance: "1.4 km" },
        { name: "Taipei", distance: "1.5 km" },
        { name: "2/28 Memorial Museum", distance: "1.5 km" },
        { name: "Evergreen Maritime Museum", distance: "1.8 km" },
      ],
      "top attractions": [
        { name: "Taipei Botanical Garden", distance: "2.4 km" },
        { name: "Bopilao Old Street", distance: "2.5 km" },
        { name: "National Chiang Kai-Shek Memorial Hall", distance: "2.6 km" },
        { name: "Children's Recreation Center", distance: "3.2 km" },
        { name: "Taipei Youth Park", distance: "3.9 km" },
        { name: "Daan Park", distance: "4 km" },
        { name: "Taipei 101", distance: "6 km" },
        { name: "Zhishan Cultural and Ecological Garden", distance: "6 km" },
        { name: "National Palace Museum", distance: "8 km" },
        { name: "Yangmingshan National Park", distance: "17 km" },
      ],
      "public transit": [
        { name: "Bus - Taipei Bus Station", distance: "300 m" },
        { name: "Train - Taipei Main Station", distance: "650 m" },
        { name: "Subway - Taipei Main Station", distance: "800 m" },
        { name: "Subway - MRT Beimen Station", distance: "600 m" },
        { name: "Train - NTU Hospital Station", distance: "1.3 km" },
      ],
      "closest airports": [
        { name: "Taipei Songshan Airport", distance: "3.9 km" },
        { name: "Taiwan Taoyuan International Airport", distance: "35 km" },
      ],
      "restaurants & cafes": [
        { name: "Cafe/Bar - Yi Jiu Mu Xiang Ka Fei", distance: "100 m" },
        { name: "Cafe/Bar - Feng Pu Tea House", distance: "150 m" },
        { name: "Cafe/Bar - 50 Lan", distance: "150 m" },
      ],
      "natural beauty": [] as { name: string; distance: string }[],
    },
    all_facilities: {
      great_for_your_stay: [
        "Air conditioning",
        "Free Wifi",
        "Kitchen",
        "Family rooms",
        "Non-smoking rooms",
        "Washing machine",
        "Tour desk",
        "Shower",
        "Hiking",
        "Evening entertainment",
      ],
      bathroom: ["Toilet paper", "Slippers", "Toilet", "Hairdryer", "Shower"],
      bedroom: ["Linens", "Extra long beds (> 6.5 ft)"],
      outdoors: ["Barbecue", "Terrace", "Garden"],
      kitchen: [
        "Shared kitchen",
        "Toaster",
        "Stovetop",
        "Dryer",
        "Kitchenware",
        "Kitchen",
        "Washing machine",
        "Microwave",
        "Kitchenette",
      ],
      room_amenities: ["Drying rack for clothing", "Clothes rack"],
      activities: [
        "Cooking class",
        "Tour or class about local culture",
        "Bike tours (Additional charge)",
        "Walking tours",
        "Movie nights (Off-site)",
        "Evening entertainment",
        "Hiking (Additional charge, Off-site)",
      ],
      living_area: ["Dining area", "Sitting area"],
      media_and_technology: ["Laptop", "Video games"],
      food_and_drink: [
        "Coffee house on site",
        "Wine/Champagne (Additional charge)",
        "Special diet meals (on request)",
        "Snack bar",
      ],
      internet: ["Wifi is available in all areas and is free of charge."],
      parking: ["No parking available."],
      front_desk_services: [
        "Concierge",
        "Baggage storage (Additional charge)",
        "Tour desk",
        "24-hour front desk",
      ],
      entertainment_and_family_services: ["Board games/Puzzles"],
      cleaning_services: [
        "Daily housekeeping (Additional charge)",
        "Laundry (Additional charge)",
      ],
      business_facilities: ["Fax/Photocopying"],
      safety_and_security: [
        "Fire extinguishers",
        "CCTV outside property",
        "CCTV in common areas",
        "Smoke alarms",
        "Security alarm",
        "Key card access",
        "Key access",
        "24-hour security",
      ],
      general: [
        "Convenience store on site",
        "Shared lounge/TV area",
        "Vending machine (snacks)",
        "Vending machine (drinks)",
        "Designated smoking area",
        "Air conditioning",
        "Smoke-free property",
        "Heating",
        "Soundproof",
        "Car rental",
        "Carpeted",
        "Elevator",
        "Family rooms",
        "Ironing facilities",
        "Non-smoking rooms",
      ],
      languages_spoken: ["English", "Japanese", "Korean", "Chinese"],
    },
  };

  const renderAreaInfo = () => {
    const icons: { [key: string]: React.FC } = {
      "what's nearby": () => <span>📍</span>,
      "top attractions": () => <span>⭐</span>,
      "public transit": () => <span>🚆</span>,
      "closest airports": () => <span>✈️</span>,
      "restaurants & cafes": () => <span>🍽️</span>,
      "natural beauty": () => <span>🌳</span>,
    };
    const columns: (keyof typeof hotel.area_info)[] = [
      "what's nearby",
      "top attractions",
      "public transit",
    ];
    const bottom_rows: (keyof typeof hotel.area_info)[] = [
      "restaurants & cafes",
      "closest airports",
    ];

    return (
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Area info</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {columns.map((col) => {
            const Icon = icons[col];
            return (
              <div key={col}>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Icon /> <span className="ml-2 capitalize">{col}</span>
                </h3>
                {hotel.area_info[col].map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between text-sm text-gray-700 py-1"
                  >
                    <span>{item.name}</span>
                    <span className="font-bold">{item.distance}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 pt-4 border-t">
          {bottom_rows.map((col) => {
            if (!hotel.area_info[col] || hotel.area_info[col].length === 0)
              return null;
            const Icon = icons[col];
            return (
              <div key={col}>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Icon /> <span className="ml-2 capitalize">{col}</span>
                </h3>
                {hotel.area_info[col].map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between text-sm text-gray-700 py-1"
                  >
                    <span>{item.name}</span>
                    <span className="font-bold">{item.distance}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
        {hotel.images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`${hotel.name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">About this property</h2>
        <p className="text-gray-700 whitespace-pre-line">{hotel.about}</p>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Most popular facilities</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {hotel.popular_facilities.map((facility) => (
            <span key={facility} className="text-green-700 flex items-center">
              <CheckIcon />
              {facility}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="flex items-center mb-4">
          <span className="bg-blue-800 text-white font-bold text-lg p-2 rounded mr-2">
            {hotel.rating_score}
          </span>
          <p className="font-bold text-lg text-gray-700 mr-2">
            {hotel.rating_text}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {hotel.review_categories.map((category) => (
            <div key={category.name}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-700">
                  {category.name}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {category.score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${category.score * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        {renderAreaInfo()}
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Facilities of {hotel.name}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Facilities! Review score: 9.5</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(hotel.all_facilities).map(
            ([category, facilities]) => (
              <div key={category}>
                <h3 className="text-lg font-bold capitalize mb-2">
                  {category.replace(/_/g, " ")}
                </h3>
                <ul className="space-y-1">
                  {(facilities as string[]).map((facility) => (
                    <li
                      key={facility}
                      className="flex items-start text-gray-700"
                    >
                      <CheckIcon /> <span className="ml-2">{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default StarHostelTaipeiMainStationPage;
