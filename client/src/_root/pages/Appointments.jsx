import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppointmentNav from "../../components/shared/AppointmentNav";
import AppointsCard from "../../components/shared/Appointments";
import axios from "axios";
import Cookie from "js-cookie";

const Appointments = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const accessToken = Cookie.get("accessToken");
  useEffect(() => {
    const getUpcomingAppointments = async () => {
      const res = await axios.post(
        "http://localhost:8000/api/getUpcomingAppointments",
        { id: 13 },
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
    <div className=" my-20 h-full">
      <AppointmentNav />
      <div className="flex flex-col gap-4 bg-gray-200 h-full">
        <h1>Upcoming Appointments</h1>
        <div className="flex flex-col items-center m-2 lg:flex-row overflow-x-auto gap-3">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((upcomingappointment) => (
              <Link
                key={upcomingappointment.id}
                to={`/dappointments/:id${upcomingappointment.id}`}
              >
                <AppointsCard
                  dname={upcomingappointment.doctor.first_name}
                  description={upcomingappointment.description}
                  time={upcomingappointment.date_time}
                  specialization={upcomingappointment.doctor.specialization}
                />
              </Link>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <h1>No upcoming appointments</h1>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 bg-gray-200">
          {" "}
          {/*lg:flex-row*/}
          <h1>Past Appointments</h1>
          {pastAppointments.length > 0 ? (
            pastAppointments.map((pastappointment) => (
              <Link
                key={pastappointment.id}
                to={`/dappointments/:id${pastappointment.id}`}
              >
                <AppointsCard
                  dname={
                    pastappointment.doctor.first_name +
                    pastappointment.doctor.last_name
                  }
                  description={pastappointment.description}
                  time={pastappointment.date_time}
                  specialization={pastappointment.doctor.specialization}
                />
              </Link>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <h1>No past appointments</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
