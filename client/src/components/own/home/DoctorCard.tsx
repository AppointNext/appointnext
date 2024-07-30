"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";
import { CiStar } from "react-icons/ci";

interface DoctorProps {
  profileImg: string;
  fullName: string;
  specialization: string;
  noa: number;
  rating: number;
}

export default function DoctorCard({
  profileImg,
  fullName,
  specialization,
  noa,
  rating,
}: DoctorProps) {
  return (
    <div className="flex flex-col p-3  max-w-72 w-full  shadow-md rounded-xl bg-white hover:shadow-xl">
      <div className="flex flex-row items-center gap-2 ">
        <div>
          <Image
            src={profileImg}
            alt="Doctor Profile Image"
            height={10}
            width={10}
          />
        </div>
        <div className="flex flex-row w-full  items-center justify-between">
          <div>
            <h1> {fullName} </h1>
            <p className="text-sm"> {specialization} </p>
          </div>
          <Button className="flex items-center justify-center">
            <FaPlus />
            <p>Appoint</p>
          </Button>
        </div>
      </div>
      <div className="flex  items-center justify-between flex-row">
        <div className="flex items-center justify-center">
          <TiDocumentText />
          <p>{noa} Appointments</p>
        </div>
        <div className="flex items-center justify-center">
          <CiStar />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
}
