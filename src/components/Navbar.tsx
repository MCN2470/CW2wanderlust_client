import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as AuthService from "../services/auth.service";

interface User {
  username: string;
  role: string;
}

const Navbar: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
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
            <Link to="/add-hotel" className="mr-4">
              Add Hotel
            </Link>
          )}
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
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
