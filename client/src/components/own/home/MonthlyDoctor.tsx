"use client";

import { useState } from "react";
import DoctorCard from "./DoctorCard";
import ProfileImage from "../../../../public/assets/home/profile.png";

export default function MonthlyDoctor() {
  const [doctors, setDoctors] = useState([
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      noa: 25,
      rating: 4.9,
    },
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. John Smith",
      specialization: "Dermatologist",
      noa: 30,
      rating: 4.7,
    },
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. Emily Davis",
      specialization: "Neurologist",
      noa: 15,
      rating: 4.8,
    },
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. Michael Brown",
      specialization: "Orthopedic",
      noa: 20,
      rating: 4.6,
    },
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. Jessica Wilson",
      specialization: "Pediatrician",
      noa: 22,
      rating: 4.7,
    },
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. William Martinez",
      specialization: "Oncologist",
      noa: 18,
      rating: 4.9,
    },
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. Jennifer Taylor",
      specialization: "Psychiatrist",
      noa: 27,
      rating: 4.8,
    },
    {
      profileImg: "/assets/home/profile.png",
      fullName: "Dr. Robert Anderson",
      specialization: "General Practitioner",
      noa: 35,
      rating: 4.5,
    },
  ]);

  return (
    <div className="bg-[#F5F5F7] ">
      <div className="m-2">
        <div>
          <h1>Monthly Doctors</h1>
        </div>
        <div className="flex flex-col gap-2 overflow-scroll items-center py-10 md:flex-row  w-full md:py-4">
          {doctors.map((doctor, index) => {
            return (
              <DoctorCard
                key={index}
                fullName={doctor.fullName}
                profileImg={doctor.profileImg}
                specialization={doctor.specialization}
                noa={doctor.noa}
                rating={doctor.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
