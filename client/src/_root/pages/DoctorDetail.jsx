import React, { useEffect } from "react";
import { CiClock2 } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
// import AppointForm from "./AppointForm";
import axios from "axios";

const DoctorDetail = () => {
  // i want to get the doctor id from the url and then fetch the doctor details from the server
  const { id } = useParams();
  console.log(id);
  const [doctor, setDoctor] = React.useState({});

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/getDoctorById`,
          { id }
        );
        const data = response.data;
        setDoctor(data.doctor);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctorDetails();
  }, [id]);

  return (
    <div className=" ml-[200px] flex flex-col justify-center items-center mt-5 p-10">
      <div className=" w-[200px] h-[200px]">
        <img src="./TestUserImg.png" alt="" className=" h-full" />
      </div>
      <div className=" px-20">
        <h1 className=" font-bold text-[23px] text-center">
          {doctor.first_name + " " + doctor.last_name}
        </h1>
        <br />
        <div className=" flex gap-2">
          <h1 className=" border-r-2 border-blue-500 px-2">
            {doctor.specialization}
          </h1>
          <h1 className=" text-blue-600">cagc</h1>
        </div>
        <div className=" flex gap-2">
          <h1 className=" border-r-2 border-blue-500 px-2 flex items-center justify-center font-semibold">
            {" "}
            <MdOutlinePeople /> 1,00,00+ patient treated
          </h1>
          <h1 className=" text-blue-600 flex justify-center items-center font-semibold">
            <CiClock2 /> 1Hr
          </h1>
        </div>

        <div>
          <h1 className=" font-bold text-[23px] ">Description</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            veniam dolorem recusandae. Fugit, quis iusto adipisci blanditiis ut
            doloremque odit voluptas natus. Architecto labore fugit eaque
            necessitatibus accusamus, quidem officia consectetur praesentium
            consequuntur libero explicabo minus suscipit quo tempore vero nemo
            maiores. Et tempora voluptate sed exercitationem placeat ut omnis.
          </p>
        </div>
        <div className=" mt-8 flex flex-col gap-y-4">
          <h1 className=" font-bold text-[23px]">Essence of Assesment</h1>
          <div className="flex justify-start items-center gap-2">
            <FaCheckCircle />
            Understanding the tools in Figma
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaCheckCircle />
            Understanding the tools in Figma
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaCheckCircle />
            Understanding the tools in Figma
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaCheckCircle />
            Understanding the tools in Figma
          </div>
        </div>
      </div>
      <NavLink to="/appointmentForm">
        <button className=" bg-blue-500 p-2 rounded-lg text-white font-semibold hover:shadow-xl hover:bg-blue-600 hover:scale-105 transition-all">
          Book Now
        </button>
      </NavLink>
    </div>
  );
};

export default DoctorDetail;
