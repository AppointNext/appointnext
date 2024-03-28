import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import Cookies from "js-cookie";

const localizer = momentLocalizer(moment);

const AppointForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch doctor's appointments for the selected date from backend
    fetchAppointments(selectedDate);
  }, [selectedDate]);

  // const fetchAppointments = async (date) => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8000/api/getAppointments"
  //     );
  //     console.log(response.data);

  //     // Format appointments for the Calendar component
  //     const formattedAppointments = response.data.appointments.map(
  //       (appointment) => ({
  //         id: appointment.id,
  //         title: "Appointment Booked by Patient",
  //         start: new Date(appointment.date_time),
  //         end: moment(appointment.date_time).add(1, "hour").toDate(), // Assuming appointments are 1 hour long
  //       })
  //     );

  //     setAppointments(formattedAppointments);
  //   } catch (error) {
  //     console.error("Error fetching appointments:", error);
  //   }
  // };
  // const fetchAppointments = async (date) => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/api/getAppointments");
  //     console.log(response.data);

  //     // Format appointments for the Calendar component
  //     const formattedAppointments = response.data.appointments.map((appointment) => ({
  //       id: appointment.id,
  //       title: "Appointment Booked by Patient",
  //       start: new Date(appointment.date_time),
  //       end: moment(appointment.date_time).add(1, "hour").toDate(), // Assuming appointments are 1 hour long
  //     }));

  //     setAppointments(formattedAppointments);
  //   } catch (error) {
  //     console.error("Error fetching appointments:", error);
  //   }
  // };

  //   const fetchAppointments = async (date) => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/api/getAppointments");
  //       console.log(response.data);

  //       // Format appointments for the Calendar component
  //       const formattedAppointments = response.data.appointments.map((appointment) => ({
  //         id: appointment.id,
  //         title: "Appointment Booked by Patient",
  //         start: moment.utc(appointment.date_time).toDate(), // Parse date-time string as UTC
  //         end: moment.utc(appointment.date_time).add(1, "hour").toDate(), // Add 1 hour to the start time
  //       }));

  //       setAppointments(formattedAppointments);
  //     } catch (error) {
  //       console.error("Error fetching appointments:", error);
  //     }
  //   };

  //   const fetchAppointments = async (date) => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/api/getAppointments");
  //     console.log(response.data);

  //     // Format appointments for the Calendar component
  //     const formattedAppointments = response.data.appointments.map((appointment) => ({
  //       id: appointment.id,
  //       title: "Appointment Booked by Patient",
  //       start: moment.utc(appointment.date_time).toDate(), // Parse date-time string as UTC
  //       end: moment.utc(appointment.date_time).add(1, "hour").toDate(), // Add 1 hour to the start time
  //     }));

  //     setAppointments(formattedAppointments);
  //   } catch (error) {
  //     console.error("Error fetching appointments:", error);
  //   }
  // };

  const fetchAppointments = async (date) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/getAppointments"
      );
      console.log(response.data);

      // Format appointments for the Calendar component
      const formattedAppointments = response.data.appointments.map(
        (appointment) => ({
          id: appointment.id,
          title: "Appointment Booked by Patient",
          start: moment
            .utc(appointment.date_time)
            .local()
            .subtract(5.5, "hours")
            .toDate(), // Convert UTC time to local time
          end: moment
            .utc(appointment.date_time)
            .local()
            .subtract(4.5, "hour")
            .toDate(), // Add 1 hour to the start time
        })
      );

      setAppointments(formattedAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    if (selectedTime) {
      // Perform booking logic here, such as making an API call to book the appointment
      console.log("Appointment booked for:", selectedTime, selectedDate);

      const isoFormattedDate = moment(selectedDate).format("YYYY-MM-DD");
      const formattedTime = moment(selectedTime, "HH:mm").format("HH:mm"); // Properly format the time
      const combinedDateTime = `${isoFormattedDate}T${formattedTime}`;
      console.log(combinedDateTime);
      const accessToken = Cookies.get("accessToken");

      try {
        const response = await axios.post(
          "http://localhost:8000/api/bookappointment",
          {
            id: 6,
            doctor_id: 3,
            description: "Appointment booked by patient",
            date_time: combinedDateTime,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(response.data);
        // Reset selected time after booking
        setSelectedTime(null);
      } catch (error) {
        console.error("Error booking appointment:", error);
      }
    } else {
      console.log("Please select a time slot.");
    }
  };

  return (
    <div className="flex  justify-center items-center h-screen flex-col mt-44 md:mt-20  ">
      <div className="flex flex-row">
        <div className=" p-2">
          <h2 className="text-2xl mb-4">Select Date:</h2>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className=" p-2">
          <h2 className="text-2xl mb-4">Select Time:</h2>
          <select
            value={selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Time</option>
            {[...Array(24)].map((_, index) => (
              <option key={index} value={`${index}:00`}>
                {moment().startOf("day").hour(index).format("hh:mm A")}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleBooking}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Book Appointment
      </button>
      <div className="w-full p-2">
        <h2 className="text-2xl mb-4">Doctors Appointments:</h2>
        <Calendar
          localizer={localizer}
          events={appointments}
          date={selectedDate}
          startAccessor="start"
          endAccessor="end"
          views={["day"]}
          defaultView="day"
          style={{ height: 500 }}
          className="border border-gray-300 rounded p-4"
        />
      </div>
    </div>
  );
};

export default AppointForm;
