import React from "react";

const MokkoanPage: React.FC = () => {
  const hotel = {
    name: "Mokkoan",
    images: ["/photo/mokkoanRoom.jpg"],
    address: "Kita, Tokyo (Akabane)",
    distance_from_downtown: "9.6 km from downtown",
    rating_text: "Exceptional",
    rating_score: 9.9,
    review_count: 300,
    location_score: 9.3,
    price_per_night: 1372.0,
    about:
      "Featuring free WiFi and a hot tub, Mokkoan offers accommodations in Kita Ward, Tokyo. Private parking is available on site.\n\nEvery room comes with a flat-screen TV with cable channels. Certain units have a seating area where you can relax. For your comfort, you will find slippers and free toiletries.\n\nYou will find a shared kitchen at the property.\n\nThe guest house also offers free use of bicycles. Yokohama is 23 mi from Mokkoan, while Chiba is 25 mi away. The nearest airport is Tokyo Haneda International Airport, 15 mi from Mokkoan.",
    popular_facilities: [
      "Non-smoking rooms",
      "Private Parking",
      "Free Wifi",
      "Laundry",
      "Daily housekeeping",
      "Heating",
      "Baggage storage",
      "Garden",
      "Hot tub/Jacuzzi",
      "Exceptional Breakfast",
    ],
    review_categories: [
      { name: "Staff", score: 10 },
      { name: "Facilities", score: 9.9 },
      { name: "Cleanliness", score: 9.9 },
      { name: "Comfort", score: 9.9 },
      { name: "Value for money", score: 9.9 },
      { name: "Location", score: 9.3 },
      { name: "Free Wifi", score: 9.9 },
    ],
    area_info: {
      "what's nearby": [
        { name: "Inatsuke Castle Ruins", distance: "800 m" },
        { name: "Shizen Freai Johokan Museum", distance: "800 m" },
        { name: "Shimizuzaka Park", distance: "850 m" },
        { name: "Akabane Park", distance: "1.3 km" },
        { name: "Dagashiya Game Museum", distance: "1.8 km" },
        { name: "Enkiri Enoki Site", distance: "2 km" },
        { name: "Tonoyama-No-Saka Stairs", distance: "2.1 km" },
      ],
      "top attractions": [
        { name: "Museum of Tokyo Kasei University", distance: "2.5 km" },
        { name: "Arakawa Museum of Aqua", distance: "2.6 km" },
        { name: "Narushinostok Park", distance: "2.6 km" },
        { name: "Target of Ballistic Test Tube", distance: "2.7 km" },
        { name: "Kaga Maeda House Shimoyashiki Site", distance: "2.7 km" },
        { name: "Hirao Yatsuko Honjin Monument", distance: "2.9 km" },
        { name: "Yanagida Park", distance: "3.1 km" },
        { name: "Shinden Sakura Park", distance: "3.5 km" },
        { name: "Arakawa Undo Park", distance: "4.5 km" },
      ],
      "public transit": [
        { name: "Train - Akabane Station", distance: "1.2 km" },
        { name: "Subway - Motohasunuma", distance: "1.3 km" },
        { name: "Train - Higashi-Jujo", distance: "1.7 km" },
        { name: "Subway - Itabashihoncho", distance: "1.8 km" },
      ],
      "closest airports": [
        { name: "Tokyo Haneda Airport", distance: "29 km" },
        { name: "Narita International Airport", distance: "73 km" },
        { name: "Ibaraki Airport", distance: "88 km" },
      ],
      "restaurants & cafes": [
        { name: "Restaurant - 明かり富士", distance: "1 km" },
        { name: "Cafe/Bar - ODEON Shokudo&Cafe", distance: "1.2 km" },
        { name: "Restaurant - Tokyo Chigeya", distance: "1.2 km" },
      ],
      "natural beauty": [{ name: "Lake - Shinobazu Pond", distance: "9 km" }],
    },
    all_facilities: {
      great_for_your_stay: [
        "Parking",
        "Private bathroom",
        "Air conditioning",
        "Free Wifi",
        "Flat-screen TV",
        "Non-smoking rooms",
        "Shower",
        "Private Parking",
        "Baggage storage",
        "Laundry",
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
        "Bathrobe",
        "Hairdryer",
        "Shower",
      ],
      bedroom: ["Linens", "Wardrobe or closet", "Alarm clock"],
      view: ["Garden view"],
      outdoors: ["Garden"],
      kitchen: ["Shared kitchen", "Electric kettle", "Refrigerator"],
      room_amenities: ["Socket near the bed", "Clothes rack"],
      activities: ["Bicycle rental"],
      living_area: ["Desk"],
      media_and_technology: [
        "Flat-screen TV",
        "Cable channels",
        "Satellite channels",
        "TV",
      ],
      internet: ["Wifi is available in all areas and is free of charge."],
      parking: [
        "Private parking is available on site (reservation is needed) and costs ¥800 per day.",
      ],
      services: ["Daily housekeeping", "Baggage storage", "Laundry"],
      front_desk_services: ["Invoice provided"],
      safety_and_security: [
        "Fire extinguishers",
        "CCTV outside property",
        "Smoke alarms",
        "Security alarm",
        "Key access",
        "Safe",
      ],
      general: [
        "Air conditioning",
        "Smoke-free property",
        "Heating",
        "Soundproof",
        "Laptop safe",
        "Ironing facilities",
        "Non-smoking rooms",
      ],
      spa: ["Hot tub/jacuzzi"],
      languages_spoken: ["English", "French", "Japanese"],
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
      {/* Image Gallery */}
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

      {/* About Section */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">About this property</h1>
        <p className="text-gray-700 whitespace-pre-line">{hotel.about}</p>
      </div>

      {/* Popular Facilities Section */}
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

      {/* Guest Reviews Section */}
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

      {/* Area Info Section */}
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

export default MokkoanPage;
