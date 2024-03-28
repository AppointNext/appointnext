/* eslint-disable react/prop-types */
import React from "react";
import { TiBusinessCard } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor, first_name, last_name, id }) => {
  const navigate = useNavigate();
  console.log(id);

  const handleClick = () => {
    navigate(`/drDetail/${id}`);
  };
  return (
    <div className="doctor-card-container container border-2 border-[#F5F5F7] rounded-xl hover:shadow-xl ">
      <div className="doctor-card-content bg-white p-2 py-4 rounded-lg w-[320px] gap-2">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2 ">
            <img
              src="./assets/doctorImg.png"
              alt="DoctorProfileImg"
              className="rounded-full w-8 h-8 cursor-pointer"
            />
            <h1 className="text-sm md:text-base">{`${first_name} ${last_name}`}</h1>
            {console.log(doctor, first_name, last_name)}
          </div>
          <button onClick={handleClick} className="text-base">
            Show more
          </button>
        </div>
        <div className="flex flex-row items-center justify-between text-sm md:text-base">
          <div className="flex flex-row items-center gap-1">
            <TiBusinessCard />
            40 Appointments
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaStar />
            4.5 Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
