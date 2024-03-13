import React from "react";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
