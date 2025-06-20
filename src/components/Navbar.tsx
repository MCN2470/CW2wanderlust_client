import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as AuthService from "../services/auth.service";
import { UserIcon } from "@heroicons/react/24/solid";

interface User {
  username: string;
  role: string;
}

const Navbar: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setIsDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Wanderlust
        </Link>
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/hotels" className="mr-4">
            Hotels
          </Link>
          <Link to="/flights" className="mr-4">
            Flights
          </Link>
          {currentUser && currentUser.role === "operator" && (
            <Link to="/booking-records" className="mr-4">
              Booking Record
            </Link>
          )}
          {currentUser && currentUser.role === "operator" && (
            <Link
              to="/operator"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Operator Panel
            </Link>
          )}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="mr-4 focus:outline-none flex items-center"
              >
                <UserIcon className="h-6 w-6 mr-1" />
                {currentUser.username}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 text-black">
                  <Link
                    to="/favorites"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Favorites
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="mr-4">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-blue-600 font-bold py-2 px-4 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
