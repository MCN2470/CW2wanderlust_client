import React, { useState, useRef, useEffect } from "react";

interface GuestSelectorProps {
  adults: number;
  setAdults: (adults: number) => void;
  children: number;
  setChildren: (children: number) => void;
  rooms: number;
  setRooms: (rooms: number) => void;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const renderControl = (
    label: string,
    value: number,
    setter: (value: number) => void,
    min: number = 1
  ) => (
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700">{label}</span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setter(Math.max(min, value - 1))}
          className="w-8 h-8 border rounded-full text-lg font-bold text-blue-600 border-blue-600"
          disabled={value <= min}
        >
          -
        </button>
        <span className="text-lg">{value}</span>
        <button
          onClick={() => setter(value + 1)}
          className="w-8 h-8 border rounded-full text-lg font-bold text-blue-600 border-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative" ref={ref}>
      <label className="block text-sm font-medium text-gray-700">Guests</label>
      <input
        type="text"
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md cursor-pointer"
        value={`${adults} adults · ${children} children · ${rooms} room(s)`}
      />
      {isOpen && (
        <div className="absolute z-10 top-full mt-1 w-full bg-white shadow-lg rounded-md border p-4">
          {renderControl("Adults", adults, setAdults)}
          {renderControl("Children", children, setChildren, 0)}
          {renderControl("Rooms", rooms, setRooms)}
        </div>
      )}
    </div>
  );
};

export default GuestSelector;
