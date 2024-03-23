import React, { useEffect, useState } from "react";
import Hero from "../../components/ui/Dashboard/Hero";
import Calendar from "../../components/ui/Dashboard/Calender";
import DoctorCard from "../../components/shared/DoctorCard";
import TaskTodayCard from "../../components/shared/TaskTodayCard";
import UpcomingAppointCard from "../../components/shared/UpcomingAppointCard";
import axios from "axios";
import Cookie from "js-cookie";

const Overview = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const accessToken = Cookie.get("accessToken");
  console.log(accessToken);
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

      setUpcomingAppointments(res.data);
    };

    getUpcomingAppointments();
  }, []);
  return (
    <div className="cotainer md:ml-[200px] bg-[#f5f5f7]">
      <div className="flex flex-row">
        <div className="w-full">
          <div className="flex xl:flex-row xl:justify-between md:justify-between bg-[#F5F5F7] w-full">
            <Hero />
          </div>
          <div className="w-[800px]">
            <div className="flex flex-row justify-between">
              <div>Monthly Doctors</div>
              <div>&lt; &gt;</div>
            </div>
            <div className="flex flex-row overflow-x-auto   gap-3 ">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
          </div>
          <div className="w-[800px]">
            <div className="flex flex-row justify-between">
              <div>Upcoming Appointments</div>
              <div>&lt; &gt;</div>
            </div>
            <div className="flex flex-row overflow-x-auto gap-3">
              <UpcomingAppointCard />
              <UpcomingAppointCard />
              <UpcomingAppointCard />
              <UpcomingAppointCard />
              <UpcomingAppointCard />
              <UpcomingAppointCard />
              <UpcomingAppointCard />
              <UpcomingAppointCard />
            </div>
          </div>
        </div>
        <div>
          <Calendar />
          <TaskTodayCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
