import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [cookies] = useCookies(["token"]);

  return (
    <Route
      {...rest}
      render={(props) =>
        cookies.token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
