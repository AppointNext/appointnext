import { useState } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentImage from "/assets/home/AppointmentImage.png";
interface Appointment {
  image: string;
  title: string;
  topic: string;
  daysLeft: number;
}

export default function UpComingAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Doctor's Appointment",
      topic: "General Checkup",
      daysLeft: 2,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Business Meeting",
      topic: "Quarterly Review",
      daysLeft: 5,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Dentist Visit",
      topic: "Teeth Cleaning",
      daysLeft: 1,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Parent-Teacher Conference",
      topic: "Progress Discussion",
      daysLeft: 3,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Car Service",
      topic: "Oil Change",
      daysLeft: 4,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Webinar",
      topic: "Digital Marketing Strategies",
      daysLeft: 7,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Yoga Class",
      topic: "Stress Relief Techniques",
      daysLeft: 6,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Interview",
      topic: "Software Developer Position",
      daysLeft: 2,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Financial Planning Meeting",
      topic: "Investment Portfolio Review",
      daysLeft: 10,
    },
    {
      image: "/assets/home/AppointmentImage.png",
      title: "Wedding Anniversary",
      topic: "Dinner Reservation",
      daysLeft: 8,
    },
  ]);
  return (
    <div>
      {/* Web div */}
      <div></div>
      {/* Mobile div */}
      <div className="bg-[#F5F5F7]">
        <div className="m-2">
          <div>
            <h1>Upcoming Appointments</h1>
          </div>
          <div className="flex flex-col gap-2 overflow-scroll items-center py-10 md:flex-row md:py-4">
            {appointments.map((appointment: Appointment, index: number) => {
              return (
                <AppointmentCard
                  key={index}
                  AppImage={appointment.image}
                  title={appointment.title}
                  topic={appointment.topic}
                  daysLeft={appointment.daysLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
