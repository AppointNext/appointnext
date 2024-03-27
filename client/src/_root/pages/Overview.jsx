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
  const [todayAppointment, setTodayAppointment] = useState({});
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

      console.log(res.data.appointments);

      setUpcomingAppointments(res.data.appointments);
    };

    getUpcomingAppointments();
  }, []);
  console.log(todayAppointment);

  return (
    <div className="cotainer    bg-[#f5f5f7] m-2">
      <div className="flex flex-col lg:flex-row mt-20 ">
        <div className=" w-full xl:w-[900px] 2xl:w-[1100px]">
          <div className="flex xl:flex-row xl:justify-between md:justify-between bg-[#F5F5F7] w-full  lg:w-[600px] xl:w-full ">
            <Hero />
          </div>
          <div className="w-full lg:w-[500px] xl:w-full 2xl:w-full">
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
          <div className="w-full  lg:w-[500px] xl:w-full 2xl:w-full">
            <div className="flex flex-row justify-between">
              <div>Upcoming Appointments</div>
              <div>&lt; &gt;</div>
            </div>
            <div className="flex flex-row overflow-x-auto gap-3">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map((appointment) => (
                  <UpcomingAppointCard
                    title={`${appointment.doctor.first_name} ${appointment.doctor.last_name}`}
                    key={appointment.id}
                    description={appointment.description}
                    time={appointment.date_time}
                  />
                ))
              ) : (
                <div className="flex h-full w-full justify-center items-center">
                  <h1 className="text-center">No Upcoming Appoinments</h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <Calendar setTodayAppointment={setTodayAppointment} />
          {todayAppointment.length > 0 ? (
            todayAppointment.map((appointment) => (
              <TaskTodayCard
                key={appointment.id}
                title={
                  appointment.doctor.first_name + appointment.doctor.last_name
                }
                description={appointment.description}
                dateTime={appointment.date_time}
              />
            ))
          ) : (
            <div>
              <h1>No Appointments Today</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
