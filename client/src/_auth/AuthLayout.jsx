import React, { useState } from "react";
import { Outlet, Navigate } from "react-router";

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState("");

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
