import React from "react";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";
// import Cookie from "js-cookie";
const RootLayout = () => {
  // const refreshToken = Cookie.get("refreshToken");
  // const accessToken = Cookie.get("accessToken");

  // if (!refreshToken && !accessToken) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
