import React from "react";
import { Link } from "react-router-dom";
import AppointmentNav from "../../components/shared/AppointmentNav";
import AppointsCard from "../../components/shared/Appointments";

const Appointments = () => {
  return (
    <div className="ml-[200px]">
      <AppointmentNav />
      <div className="gap-y-4">
        <p>Time Limit</p>
        <div className="flex flex-row overflow-x-auto gap-3">
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
        </div>
        <div className="flex flex-row overflow-x-auto gap-3">
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
          <Link to="/dappointments">
            <AppointsCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
