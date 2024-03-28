import React, { useState } from "react";
import Calendar from "react-calendar"; // Example calendar library
import "react-calendar/dist/Calendar.css";

const AppointForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableAppointments, setAvailableAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Make API request to fetch available appointments for the selected date
    fetchAvailableAppointments(date);
  };

  const fetchAvailableAppointments = async (date) => {
    // Example API call, replace with your actual API endpoint
    const response = await fetch(
      `/api/appointments?doctorId=123&date=${date.toISOString()}`
    );
    if (response.ok) {
      const data = await response.json();
      setAvailableAppointments(data.appointments);
    } else {
      console.error("Failed to fetch available appointments");
    }
  };

  const bookAppointment = (appointment) => {
    // Implement booking logic here
    console.log("Booked appointment:", appointment);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <div>
          <h2>Available Appointments for {selectedDate.toDateString()}</h2>
          <ul>
            {availableAppointments.map((appointment, index) => (
              <li key={index}>
                {appointment.time} -{" "}
                <button onClick={() => bookAppointment(appointment)}>
                  Book
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppointForm;
