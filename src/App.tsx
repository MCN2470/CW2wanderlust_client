import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FlightsPage from "./pages/FlightsPage";
import AddHotelPage from "./pages/AddHotelPage";
import HotelsPage from "./pages/HotelsPage";
import Navbar from "./components/Navbar";
import OperatorRoute from "./components/auth/OperatorRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-hotel" element={<OperatorRoute />}>
            <Route path="/add-hotel" element={<AddHotelPage />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
