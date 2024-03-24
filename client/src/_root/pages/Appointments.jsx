import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppointmentNav from "../../components/shared/AppointmentNav";
import AppointsCard from "../../components/shared/Appointments";
import axios from "axios";

const Appointments = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  useEffect(() => {
    const getUpcomingAppointments = async () => {
      const res = await axios.post(
        "http://localhost:8000/api/getUpcomingAppointments",
        { id: 6 },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res.data);
      setUpcomingAppointments(res.data.appointments);
    };
    getUpcomingAppointments();
    const getPastAppointments = async () => {
      const res = await axios.post(
        "http://localhost:8000/api/getPastAppointments",
        { id: 6 },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res.data);
      setPastAppointments(res.data.appointments);
    };
    getPastAppointments();
  }, []);
  return (
    <div className="lg:ml-[200px] my-20">
      <AppointmentNav />
      <div className="flex flex-col gap-4 bg-gray-200">
        <h1>Upcoming Appointments</h1>
        <div className="flex flex-col items-center lg:flex-row overflow-x-auto gap-3">
          {upcomingAppointments.map((appointment) => (
            <Link
              key={appointment.id}
              to={`/dappointments/:id${appointment.id}`}
            >
              <AppointsCard />
            </Link>
          ))}
        </div>
        <div className="flex lg:flex-row overflow-x-auto gap-3 flex-col items-center">
          <h1>Past Appointments</h1>
          {pastAppointments.map((appointment) => (
            <Link
              key={appointment.id}
              to={`/dappointments/:id${appointment.id}`}
            >
              <AppointsCard />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
