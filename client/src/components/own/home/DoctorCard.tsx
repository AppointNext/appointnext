"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
import StarIcon from "@mui/icons-material/Star";

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
    <div className="flex flex-col p-3  max-w-72 w-full  shadow-md rounded-xl bg-white hover:shadow-xl transition-all md:min-h-[100px] md:h-full md:min-w-[250px] md:justify-between lg:min-h-[130px]">
      <div className="flex flex-row items-center gap-2 ">
        <div>
          <Image
            src={profileImg}
            alt="Doctor Profile Image"
            height={40}
            width={40}
          />
        </div>
        <div className="flex flex-row w-full  items-center justify-between">
          <div>
            <h1 className="text-sm font-bold"> {fullName} </h1>
            <p className="text-xs"> {specialization} </p>
          </div>
          <Button
            className="flex items-center justify-center"
            sx={{ textTransform: "none" }}
          >
            <FaPlus size={10} />
            <p>Appoint</p>
          </Button>
        </div>
      </div>
      <div className="flex  items-center justify-between flex-row">
        <div className="flex items-center justify-center gap-1">
          <TiDocumentText />
          <p className="text-xs">{noa} Appointments</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <StarIcon sx={{ color: "#FDEE00" }} />
          <p className="text-xs">{rating}</p>
        </div>
      </div>
    </div>
  );
}
