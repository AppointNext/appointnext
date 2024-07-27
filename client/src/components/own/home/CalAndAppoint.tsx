"use client";
import AppointmentCard from "../AppointmentCard";
import WeeklyCalendar from "./WeeklyCalender";

export default function CalAndAppoint() {
  return (
    <div className="flex flex-col bg-bg_primary  gap-4 mx-4 my-2">
      <WeeklyCalendar />
      <AppointmentCard />
    </div>
  );
}
