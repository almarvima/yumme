import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { userIsAuthenticated } = useAuth();

  useEffect(() => {
    !userIsAuthenticated() && navigate("/");
  }, [navigate, userIsAuthenticated]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
