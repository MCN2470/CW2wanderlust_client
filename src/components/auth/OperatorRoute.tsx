import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import * as AuthService from "../../services/auth.service";

const OperatorRoute: React.FC = () => {
  const currentUser = AuthService.getCurrentUser();

  if (!currentUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  if (currentUser.role !== "operator") {
    // not an operator so redirect to home page
    return <Navigate to="/" />;
  }

  // authorized so return outlet for nested routes
  return <Outlet />;
};

export default OperatorRoute;
