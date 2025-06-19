import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import * as AuthService from "../../services/auth.service";

const OperatorRoute: React.FC = () => {
  const currentUser = AuthService.getCurrentUser();

  if (!currentUser || currentUser.role !== "operator") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default OperatorRoute;
