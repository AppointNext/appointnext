"use client";
import { LuClock5 } from "react-icons/lu";

import Image from "next/image";

interface AppointmentCardProps {
  AppImage: string;
  title: string;
  topic: string;
  daysLeft: number;
}

export default function AppoinmentCard({
  AppImage,
  title,
  topic,
  daysLeft,
}: AppointmentCardProps) {
  return (
    <div className="flex flex-col items-start bg-white px-4 py-2 rounded-xl gap-2 md:min-h-[150px] md:min-w-[250px] md:h-full md:justify-between xl:min-h-[230px]">
      <div className="flex flex-col gap-2">
        <div>
          <Image
            src={AppImage}
            alt="Appointment Image"
            height={120}
            width={285}
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-sm">{title}</h1>
          <p className="text-xs">{topic}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-1">
        <LuClock5 />
        <p className="text-xs">{daysLeft} DaysLeft</p>
      </div>
    </div>
  );
}
