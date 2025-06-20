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

const TheLanghamHongKongPage: React.FC = () => {
  const hotel = {
    name: "The Langham Hong Kong",
    images: ["/photo/The Langham Hong KongSwimmingPool.jpg"],
    about:
      "Standing in Central Kowloon, the Langham Hong Kong features a 3 Michelin-star restaurant, T'ang Court and a rooftop pool. It is a 5-minute walk from Tsim Sha Tsui MTR.\n\nEach stylish room at The Langham Hong Kong is equipped with a 37-inch flat-screen TV and a gourmet mini-bar. Some rooms feature an iHome docking station.\n\nGuests can make use of the well-appointed business center and enjoy luxurious massages. Other facilities include a 24-hour gym. The Langham Hong Kong also provides car rental, laundry and babysitting services.\n\nPalm Court is also serving Set Lunch and Dinner menu now apart from the famous Afternoon Tea Set and snacks.\n\nCantonese specialties are served at the multi-awarded T'ang Court Restaurant. Tea and light snacks are available at Palm Court.\n\nThe hotel is a 40-minute drive from Hong Kong International Airport. Famous attractions like Temple Street and Avenue of Stars are about 0.6 mi away. Clock Tower and Harbor City are also nearby tourist place.",
    popular_facilities: [
      "Outdoor swimming pool",
      "Non-smoking rooms",
      "Fitness center",
      "Facilities for disabled guests",
      "Room service",
      "Free Wifi",
      "Private Parking",
      "3 restaurants",
      "Bar",
      "Very Good Breakfast",
    ],
    rating_score: 8.6,
    rating_text: "Excellent",
    review_count: 1634,
    review_categories: [
      { name: "Staff", score: 9.0 },
      { name: "Facilities", score: 8.8 },
      { name: "Cleanliness", score: 9.1 },
      { name: "Comfort", score: 9.2 },
      { name: "Value for money", score: 8.2 },
      { name: "Location", score: 9.4 },
      { name: "Free Wifi", score: 8.7 },
    ],
    area_info: {
      "what's nearby": [
        {
          name: "Site Directory of Peking Road Sitting-out Area",
          distance: "150 m",
        },
        { name: "Haiphong Road Childrens Playground", distance: "250 m" },
        { name: "Hong Kong Space Museum", distance: "350 m" },
        { name: "Star Ferry Concourse Fountain", distance: "350 m" },
        { name: "Clock Tower", distance: "400 m" },
        { name: "Kowloon Park W Gate", distance: "400 m" },
        { name: "Salisbury Garden", distance: "450 m" },
        { name: "Hong Kong Heritage Discovery Centre", distance: "450 m" },
        { name: "Hong Kong Museum of Art", distance: "650 m" },
        { name: "Kowloon Park Banyan Court", distance: "650 m" },
      ],
      "top attractions": [
        { name: "Kowloon Park", distance: "700 m" },
        { name: "Signal Hill Garden", distance: "700 m" },
        { name: "International Commerce Center", distance: "1.7 km" },
        { name: "sky100 Hong Kong Observation Deck", distance: "1.8 km" },
        { name: "Central Plaza", distance: "2.7 km" },
        {
          name: "Hong Kong Zoological And Botanical Gardens",
          distance: "3.1 km",
        },
        { name: "Hong Kong Park", distance: "3.1 km" },
        { name: "Victoria Park", distance: "3.6 km" },
        { name: "Madame Tussauds Hong Kong", distance: "4.7 km" },
        { name: "Nan Lian Garden", distance: "7 km" },
      ],
      "public transit": [
        { name: "Subway - MTR Tsim Sha Tsui Station", distance: "350 m" },
        {
          name: "Subway - MTR East Tsim Sha Tsui Metro Station",
          distance: "650 m",
        },
        { name: "Train - Hong Kong West Kowloon Station", distance: "1.6 km" },
        { name: "Train - MTR Kowloon Station", distance: "1.8 km" },
      ],
      "closest airports": [
        { name: "Shun Tak Heliport", distance: "2.6 km" },
        { name: "Hong Kong International Airport", distance: "32 km" },
        { name: "Shenzhen Bao'an International Airport", distance: "65 km" },
      ],
      "restaurants & cafes": [
        { name: "Restaurant - Artesian", distance: "10 m" },
        { name: "Restaurant - T'ang Court Restaurant", distance: "100 m" },
        { name: "Cafe/Bar - Aqua Spirit", distance: "30 m" },
      ],
      "natural beauty": [{ name: "Mountain - Mount Davis", distance: "7 km" }],
    },
    all_facilities: {
      great_for_your_stay: [
        "3 restaurants",
        "Parking",
        "Free Wifi",
        "Family rooms",
        "Pet friendly",
        "Fitness center",
        "Non-smoking rooms",
        "Room service",
        "Facilities for disabled guests",
        "Valet parking",
      ],
      pets: ["Pets are allowed. Charges may apply."],
      activities: [
        "Tour or class about local culture (Additional charge)",
        "Themed dinners (Additional charge)",
        "Movie nights (Additional charge, Off-site)",
      ],
      food_and_drink: ["Breakfast in the room", "Bar", "Restaurant"],
      internet: ["Wifi is available in all areas and is free of charge."],
      parking: [
        "Private parking is available on site (reservation is needed) and costs HK$ 350 per day.",
        "Valet parking",
      ],
      front_desk_services: [
        "Concierge",
        "Baggage storage",
        "Tour desk",
        "Currency exchange",
        "Express check-in/out",
        "24-hour front desk",
      ],
      entertainment_and_family_services: ["Babysitting/Child services"],
      cleaning_services: [
        "Ironing service (Additional charge)",
        "Dry cleaning (Additional charge)",
        "Laundry (Additional charge)",
      ],
      business_facilities: [
        "Fax/photocopying (Additional charge)",
        "Business center",
        "Meeting/Banquet facilities (Additional charge)",
      ],
      safety_and_security: [
        "Fire extinguishers",
        "CCTV outside property",
        "CCTV in common areas",
        "Smoke alarms",
        "Security alarm",
        "24-hour security",
        "Safe",
      ],
      general: [
        "Air conditioning",
        "Car rental",
        "Elevator",
        "Family rooms",
        "Facilities for disabled guests",
        "Non-smoking rooms",
        "Room service",
      ],
      outdoor_swimming_pool: ["Free!", "Open all year", "Pool is on rooftop"],
      spa: [
        "Massage (Additional charge)",
        "Fitness center",
        "Sauna (Additional charge)",
      ],
      languages_spoken: ["Mandarin", "English", "Cantonese"],
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
      "natural beauty",
      "closest airports",
    ];

    return (
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Hotel area info</h2>
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
        <h2 className="text-2xl font-bold mb-4">
          Get the celebrity treatment with world-class service at The Langham
          Hong Kong
        </h2>
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
        <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>
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
                  className="bg-blue-600 h-2.5 rounded-full"
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
          <p className="text-lg">
            Great facilities! Review score: {hotel.rating_score}
          </p>
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

export default TheLanghamHongKongPage;
