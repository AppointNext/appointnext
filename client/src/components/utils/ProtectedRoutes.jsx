import React from "react";
import { Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["refreshToken"]);

  return (
    <Route
      {...rest}
      render={(props) =>
        cookies.refreshToken ? <Element {...props} /> : navigate("/login")
      }
    />
  );
};

export default ProtectedRoute;
