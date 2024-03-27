import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";


const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { userIsAuthenticated } = useAuth();

  useEffect(() => {
    if (!userIsAuthenticated()) {
      throw new Error("Unauthorized");
    }
  }, [navigate, userIsAuthenticated]);

  return (
    <>
      <Outlet />
    </>
  );
};
export default ProtectedRoutes;
