import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

/**
 * PrivateRoutes component.
 * 
 * This component is responsible for rendering the private routes of the application.
 * It checks if the user is authenticated and throws an error if not.
 * 
 * @returns {JSX.Element} The rendered PrivateRoutes component.
 */
const PrivateRoutes = () => {
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
export default PrivateRoutes;
