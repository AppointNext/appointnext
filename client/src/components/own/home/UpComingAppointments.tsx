import { useState } from "react";
import AppointmentCard from "../AppointmentCard";

interface Appointment {
  image: string;
  title: string;
  topic: string;
  daysLeft: number;
}

export default function UpComingAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      image: "https://example.com/images/appointment1.jpg",
      title: "Doctor's Appointment",
      topic: "General Checkup",
      dayLeft: 2,
    },
    {
      image: "https://example.com/images/appointment2.jpg",
      title: "Business Meeting",
      topic: "Quarterly Review",
      dayLeft: 5,
    },
    {
      image: "https://example.com/images/appointment3.jpg",
      title: "Dentist Visit",
      topic: "Teeth Cleaning",
      dayLeft: 1,
    },
    {
      image: "https://example.com/images/appointment4.jpg",
      title: "Parent-Teacher Conference",
      topic: "Progress Discussion",
      dayLeft: 3,
    },
    {
      image: "https://example.com/images/appointment5.jpg",
      title: "Car Service",
      topic: "Oil Change",
      dayLeft: 4,
    },
    {
      image: "https://example.com/images/appointment6.jpg",
      title: "Webinar",
      topic: "Digital Marketing Strategies",
      dayLeft: 7,
    },
    {
      image: "https://example.com/images/appointment7.jpg",
      title: "Yoga Class",
      topic: "Stress Relief Techniques",
      dayLeft: 6,
    },
    {
      image: "https://example.com/images/appointment8.jpg",
      title: "Interview",
      topic: "Software Developer Position",
      dayLeft: 2,
    },
    {
      image: "https://example.com/images/appointment9.jpg",
      title: "Financial Planning Meeting",
      topic: "Investment Portfolio Review",
      dayLeft: 10,
    },
    {
      image: "https://example.com/images/appointment10.jpg",
      title: "Wedding Anniversary",
      topic: "Dinner Reservation",
      dayLeft: 8,
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
            <h1>Monthly Doctors</h1>
          </div>
          <div className="flex flex-col gap-2 overflow-scroll items-center py-10">
            {appointments.map((appointment: Appointment, index: number) => {
              return (
                <AppointmentCard
                  key={index}
                  image={appointment.image}
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
