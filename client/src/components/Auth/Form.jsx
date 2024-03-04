import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // Example events data
  const events = [
    {
      title: "Event 1",
      start: new Date(2024, 2, 7),
      end: new Date(2024, 2, 10),
    },
    {
      title: "Event 2",
      start: new Date(2024, 2, 15),
      end: new Date(2024, 2, 17),
    },
    // Add more events as needed
  ];

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
      />
    </div>
  );
};

export default MyCalendar;
