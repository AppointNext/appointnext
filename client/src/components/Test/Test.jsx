import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = [];
  const startDate = startOfWeek(currentDate);

  // Generate dates for the current week
  for (let i = 0; i < 7; i++) {
    const date = addDays(startDate, i);
    days.push(format(date, "EEE dd"));
  }

  const goToPreviousWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, -7));
  };

  const goToNextWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 7));
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={goToPreviousWeek}
        >
          Prev
        </button>
        <h2 className="text-xl font-bold">{format(startDate, "MMMM yyyy")}</h2>
        <button
          className="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={goToNextWeek}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div key={day} className="bg-gray-200 p-2 text-center">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
