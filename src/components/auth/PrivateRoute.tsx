import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../services/auth.service";

const PrivateRoute: React.FC = () => {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
