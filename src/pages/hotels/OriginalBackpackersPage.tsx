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

const OriginalBackpackersPage: React.FC = () => {
  const hotel = {
    name: "Original Backpackers",
    images: ["/photo/Original Backpackers.jpg", "/photo/Seoul1.jpg"],
    about:
      "Comfortable Accommodations: Original Backpackers in Seoul offers a terrace and free Wifi. Guests enjoy air-conditioning, a lounge, shared kitchen, outdoor seating area, and culture classes.\n\nBreakfast and Amenities: A continental, American, and Asian breakfast is served with juice, cheese, and fruits. Additional facilities include a washing machine, bidet, hairdryer, coffee machine, dining table, and outdoor furniture.\n\nPrime Location: Located 13 mi from Gimpo International Airport, the hostel is an 8-minute walk from Dongdaemun Market and 0.6 mi from Gwangjang Market. Nearby attractions include Jongmyo Shrine and Changdeokgung Palace.\n\nGuest Satisfaction: Highly rated for its host, bathroom comfort, and breakfast provided by the property.",
    popular_facilities: [
      "Free Wifi",
      "Terrace",
      "Heating",
      "Baggage storage",
      "Air conditioning",
      "Excellent Breakfast",
    ],
    rating_score: 9.7,
    rating_text: "Exceptional",
    review_count: 231,
    review_categories: [
      { name: "Staff", score: 9.9 },
      { name: "Facilities", score: 9.8 },
      { name: "Cleanliness", score: 9.9 },
      { name: "Comfort", score: 9.8 },
      { name: "Value for money", score: 9.9 },
      { name: "Location", score: 9.7 },
      { name: "Free Wifi", score: 9.7 },
    ],
    area_info: {
      "what's nearby": [
        { name: "Seoul City Wall Museum", distance: "350 m" },
        { name: "Dongdaemun Gate", distance: "450 m" },
        { name: "Dongdaemun History & Culture Park", distance: "800 m" },
        { name: "Statue of Jeon Tae Il", distance: "800 m" },
        { name: "Dongdaemun History Museum 1398", distance: "1.1 km" },
        { name: "Naksan Park", distance: "1.2 km" },
        { name: "Lock Museum", distance: "1.4 km" },
        { name: "Gwanghuimun", distance: "1.4 km" },
        { name: "Jongmyo Square Park", distance: "1.6 km" },
        { name: "Arko Art Center", distance: "1.6 km" },
      ],
      "top attractions": [
        { name: "Jongienara Paper Art Museum", distance: "2 km" },
        { name: "Jangchungdan Park", distance: "2 km" },
        { name: "Changgyeonggung Palace", distance: "2.2 km" },
        { name: "Changdeokgung Palace", distance: "2.3 km" },
        { name: "Hagajae Museum", distance: "2.4 km" },
        {
          name: "Agalmatolite Reliquary from the Three-story Stone Pagoda at Biroam Hermitage of Donghwasa Temple, Daegu",
          distance: "2.6 km",
        },
        { name: "Gyeongbokgung Palace", distance: "3.9 km" },
        { name: "N Seoul Tower", distance: "4.9 km" },
        { name: "National Museum of Korea", distance: "8 km" },
        { name: "COEX Aquarium", distance: "9 km" },
      ],
      "public transit": [
        { name: "Subway - Dongmyo", distance: "350 m" },
        { name: "Subway - Dongdaemun Station", distance: "350 m" },
        { name: "Train - Changsin", distance: "1.3 km" },
        { name: "Train - Cheonggu", distance: "1.9 km" },
      ],
      "closest airports": [
        { name: "Gimpo International Airport", distance: "21 km" },
        { name: "Incheon International Airport", distance: "60 km" },
      ],
      "restaurants & cafes": [
        { name: "Cafe/Bar - Cafe 275", distance: "400 m" },
        { name: "Cafe/Bar - 테스카페", distance: "700 m" },
        { name: "Cafe/Bar - Cafe de Fessonia", distance: "850 m" },
      ],
      "natural beauty": [{ name: "Peak - Namsan", distance: "4.7 km" }],
    },
    all_facilities: {
      great_for_your_stay: [
        "Air conditioning",
        "Free Wifi",
        "Kitchenette",
        "Terrace",
        "Washing machine",
        "Shower",
        "Live sports events (broadcast)",
        "Baggage storage",
        "Lockers",
        "Designated smoking area",
      ],
      bathroom: [
        "Toilet paper",
        "Towels",
        "Bidet",
        "Slippers",
        "Shared bathroom",
        "Hairdryer",
        "Shower",
      ],
      bedroom: ["Linens", "Wardrobe or closet"],
      outdoors: ["Outdoor furniture", "Outdoor dining area", "Terrace"],
      kitchen: [
        "Shared kitchen",
        "Dining table",
        "Coffee machine",
        "Toaster",
        "Oven",
        "Dryer",
        "Kitchenware",
        "Washing machine",
        "Microwave",
        "Refrigerator",
        "Kitchenette",
      ],
      room_amenities: ["Socket near the bed", "Clothes rack"],
      activities: [
        "Live sports events (broadcast)",
        "Tour or class about local culture",
      ],
      living_area: ["Dining area", "Sofa", "Sitting area", "Desk"],
      food_and_drink: ["Fruit"],
      internet: ["Wifi is available in all areas and is free of charge."],
      parking: ["No parking available."],
      services: [
        "Shared lounge/TV area",
        "Lockers",
        "Baggage storage",
        "Fax/Photocopying",
        "Express check-in/out",
      ],
      front_desk_services: ["Invoice provided"],
      safety_and_security: [
        "Fire extinguishers",
        "CCTV outside property",
        "CCTV in common areas",
        "Smoke alarms",
        "Security alarm",
        "24-hour security",
      ],
      general: [
        "Carbon monoxide detector",
        "Designated smoking area",
        "Air conditioning",
        "Smoke-free property",
        "Heating",
        "Private entrance",
        "Suit press",
        "Iron",
      ],
      spa: ["Beach umbrellas", "Beach chairs/Loungers"],
      languages_spoken: ["English", "Korean", "Chinese"],
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
          <p className="text-lg">Great facilities! Review score: 9.8</p>
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

export default OriginalBackpackersPage;
