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

const OsakaUkiyoeRyokanPage: React.FC = () => {
  const hotel = {
    name: "Osaka Ukiyoe Ryokan",
    images: [
      "/photo/Osaka Ukiyoe Ryokanwindow.jpg",
      "/photo/Osaka Ukiyoe Ryokan1.jpg",
    ],
    about:
      "Comfortable Accommodations: Osaka Ukiyoe Ryokan in Osaka offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a kitchenette, washing machine, and free WiFi.\n\nConvenient Facilities: Guests benefit from private check-in and check-out, a elevator, concierge service, entertainment staff, luggage storage, and free toiletries. Additional features include a city view, shower, and stovetop.\n\nPrime Location: Located 12 mi from Itami Airport, the hotel is near Nanba Betsuin Temple (4-minute walk), OSTEC Exhibition Hall (1640 feet), and Namba Shrine (1969 feet). Guests appreciate the host, kitchen, and family-friendly environment.",
    popular_facilities: [
      "Non-smoking rooms",
      "Free Wifi",
      "Family rooms",
      "Elevator",
      "Baggage storage",
      "Heating",
      "Air conditioning",
    ],
    rating_score: 9.8,
    rating_text: "Exceptional",
    review_count: 185,
    review_categories: [
      { name: "Staff", score: 9.9 },
      { name: "Facilities", score: 9.9 },
      { name: "Cleanliness", score: 9.8 },
      { name: "Comfort", score: 9.9 },
      { name: "Value for money", score: 9.7 },
      { name: "Location", score: 9.7 },
      { name: "Free Wifi", score: 10 },
    ],
    area_info: {
      "what's nearby": [
        { name: "OSTEC Exhibition Hall", distance: "500 m" },
        { name: "Utsubo Park", distance: "800 m" },
        { name: "Sujikai Bridge Monument", distance: "800 m" },
        { name: "Monument of Kitagumi Office", distance: "900 m" },
        { name: "Konko Church of Tamamizu", distance: "900 m" },
        { name: "Monument of Kajimaya Head House", distance: "1.1 km" },
        { name: "Daido Life Osaka Head Office Building", distance: "1.2 km" },
        { name: "Kokoni Sunaba Ariki Monument", distance: "1.2 km" },
      ],
      "top attractions": [
        {
          name: "Tsunami and Storm Surge Disaster Prevention Station",
          distance: "1.3 km",
        },
        { name: "Kusuri no Doshomachi Archive", distance: "1.4 km" },
        { name: "Stage Ku", distance: "1.4 km" },
        { name: "Octopus Pine", distance: "1.5 km" },
        { name: "Dojima Rice Exchange Monument", distance: "1.6 km" },
        { name: "Dojima Avanza Entrance Porch", distance: "1.7 km" },
        {
          name: "Fukuzawa Yukichi Birthplace Monument & Nakatsu-han Old Site",
          distance: "1.7 km",
        },
        { name: "Sakaro no Matsu Monument", distance: "1.8 km" },
        { name: "Glico Man Sign", distance: "1.8 km" },
        { name: "Nakanoshima Park", distance: "2.1 km" },
      ],
      "public transit": [
        { name: "Subway - Hommachi", distance: "200 m" },
        { name: "Train - Hommachi Station", distance: "400 m" },
        { name: "Subway - Sakaisuji-Hommachi", distance: "900 m" },
        { name: "Train - Higobashi Station", distance: "950 m" },
      ],
      "closest airports": [
        { name: "Itami Airport", distance: "12 km" },
        { name: "Kobe Airport", distance: "40 km" },
        { name: "Kansai International Airport", distance: "45 km" },
      ],
      "restaurants & cafes": [
        { name: "Cafe/Bar - 狐狸庫", distance: "30 m" },
        { name: "Restaurant - RAJA", distance: "150 m" },
        { name: "Restaurant - 魅走庵", distance: "200 m" },
      ],
      "natural beauty": [] as { name: string; distance: string }[],
    },
    all_facilities: {
      great_for_your_stay: [
        "Private bathroom",
        "Air conditioning",
        "Free Wifi",
        "Kitchenette",
        "Bathtub",
        "Family rooms",
        "Flat-screen TV",
        "Washing machine",
        "Baggage storage",
      ],
      bathroom: [
        "Toilet paper",
        "Towels",
        "Bidet",
        "Bathtub or shower",
        "Slippers",
        "Private bathroom",
        "Toilet",
        "Free toiletries",
        "Hairdryer",
      ],
      bedroom: ["Linens", "Wardrobe or closet"],
      kitchen: [
        "Dining table",
        "Cleaning products",
        "Dryer",
        "Kitchenware",
        "Electric kettle",
        "Washing machine",
        "Microwave",
        "Refrigerator",
      ],
      room_amenities: [
        "Tatami (traditional Japanese flooring)",
        "Socket near the bed",
        "Clothes rack",
      ],
      activities: [
        "Tour or class about local culture (Additional charge)",
        "Entertainment staff",
      ],
      living_area: ["Dining area", "Sitting area"],
      media_and_technology: [
        "Streaming service (like Netflix)",
        "Flat-screen TV",
        "TV",
      ],
      internet: ["Wifi is available in all areas and is free of charge."],
      parking: ["No parking available."],
      services: [
        "Strollers",
        "Private check-in/out",
        "Concierge",
        "Baggage storage",
      ],
      entertainment_and_family_services: ["Board games/Puzzles"],
      safety_and_security: [
        "Fire extinguishers",
        "CCTV outside property",
        "CCTV in common areas",
        "Smoke alarms",
        "Security alarm",
        "Key access",
        "Safe",
      ],
      general: [
        "Air conditioning",
        "Smoke-free property",
        "Heating",
        "Carpeted",
        "Soundproof rooms",
        "Elevator",
        "Family rooms",
        "Non-smoking rooms",
      ],
      accessibility: [
        "Entire unit wheelchair accessible",
        "Upper floors accessible by elevator",
      ],
      languages_spoken: ["English", "Japanese"],
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
        <h2 className="text-2xl font-bold mb-4">Guest reviews</h2>
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
          <p className="text-lg">Great facilities! Review score: 9.9</p>
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

export default OsakaUkiyoeRyokanPage;
