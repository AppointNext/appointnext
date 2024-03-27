import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedDoctorRoute = () => {
  const isDoctor = useSelector((state) => state.user.isDoctor);
  return <div>{isDoctor ? <Navigate to={"/doctorLogin"} /> : <Outlet />}</div>;
};

export default ProtectedDoctorRoute;
