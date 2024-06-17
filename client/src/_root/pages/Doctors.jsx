import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import AppointmentNav from "../../components/shared/AppointmentNav";
import DoctorCard from "../../components/shared/DoctorCard";
import axios from "axios";
const Doctors = () => {
  const [doctors, setDoctors] = React.useState([]);
  const BACKEND_BASE_URL = import.meta.env.BACKEND_BASE_URL;
  useEffect(() => {
    const getAllDoctors = async () => {
      try {
        const res = await axios.get(`${BACKEND_BASE_URL}/api/getAllDoctors`);
        console.log(res.data);
        setDoctors(res.data.doctors);
        console.log(doctors);
      } catch (error) {
        console.log(error);
      }
    };
    getAllDoctors();
  }, []);

  return (
    <div className="mt-20 doctor-container">
      <AppointmentNav />

      <div className="flex flex-col gap-y-5">
        <div>
          <div className="">
            <h1 className="font-bold text-[23px]">Recent Doctors</h1>
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
            {doctors.map((doctor) => {
              console.log(doctor.first_name + " " + doctor.last_name);
              return (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  doctor={doctor}
                  first_name={doctor.first_name}
                  last_name={doctor.last_name}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="">
            <h1 className="font-bold text-[23px]">Doctors</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
            <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
            <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
