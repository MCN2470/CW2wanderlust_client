import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FlightsPage from "./pages/FlightsPage";
import HotelsPage from "./pages/HotelsPage";
import Navbar from "./components/Navbar";
import OperatorRoute from "./components/auth/OperatorRoute";
import HotelDetailPage from "./pages/HotelDetailPage";
import MokkoanPage from "./pages/hotels/MokkoanPage";
import TheLanghamHongKongPage from "./pages/hotels/TheLanghamHongKongPage";
import StarHostelTaipeiMainStationPage from "./pages/hotels/StarHostelTaipeiMainStationPage";
import OriginalBackpackersPage from "./pages/hotels/OriginalBackpackersPage";
import OsakaUkiyoeRyokanPage from "./pages/hotels/OsakaUkiyoeRyokanPage";
import FavoritesPage from "./pages/FavoritesPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import BookingPage from "./pages/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import OperatorPage from "./pages/OperatorPage";
import BookingRecordPage from "./pages/BookingRecordPage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import OperatorMessagesPage from "./pages/OperatorMessagesPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/hotels/:id" element={<HotelDetailPage />} />

          {/* Protected Routes */}
          <Route path="/favorites" element={<PrivateRoute />}>
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="/booking" element={<PrivateRoute />}>
            <Route path="/booking" element={<BookingPage />} />
          </Route>
          <Route path="/booking-confirmation" element={<PrivateRoute />}>
            <Route
              path="/booking-confirmation"
              element={<BookingConfirmationPage />}
            />
          </Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/messages" element={<PrivateRoute />}>
            <Route path="/messages" element={<MessagesPage />} />
          </Route>
          <Route path="/operator" element={<OperatorRoute />}>
            <Route path="/operator" element={<OperatorPage />} />
          </Route>

          {/* Operator Routes */}
          <Route element={<OperatorRoute />}>
            <Route path="/booking-records" element={<BookingRecordPage />} />
            <Route
              path="/operator-messages"
              element={<OperatorMessagesPage />}
            />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/hotels/mokkoan" element={<MokkoanPage />} />
          <Route
            path="/hotels/the-langham-hong-kong"
            element={<TheLanghamHongKongPage />}
          />
          <Route
            path="/hotels/star-hostel-taipei-main-station"
            element={<StarHostelTaipeiMainStationPage />}
          />
          <Route
            path="/hotels/original-backpackers"
            element={<OriginalBackpackersPage />}
          />
          <Route
            path="/hotels/osaka-ukiyoe-ryokan"
            element={<OsakaUkiyoeRyokanPage />}
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
