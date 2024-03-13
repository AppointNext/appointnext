import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = [];
  const startDate = startOfWeek(currentDate);

  // Generate dates for the current week
  for (let i = 0; i < 7; i++) {
    const date = addDays(startDate, i);
    const dayInitial = format(date, "E")[0];
    const dayOfMonth = format(date, "d");
    days.push({ dayInitial, dayOfMonth });
  }

  const goToPreviousWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, -7));
  };

  const goToNextWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 7));
  };

  return (
    <div className="container  md:w-auto xl:w-auto m-2 bg-white px-4 py-4 rounded-lg ">
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-2 py-1 rounded  text-black"
          onClick={goToPreviousWeek}
        >
          <GrFormPrevious />
        </button>
        <h2 className="text-sm">{format(startDate, "MMMM yyyy")}</h2>
        <button className="px-2 py-1 rounded text-black" onClick={goToNextWeek}>
          <MdNavigateNext />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map(({ dayInitial, dayOfMonth }) => (
          <div
            key={dayInitial + dayOfMonth}
            className={` rounded-3xl p-1 text-center flex flex-col justify-center items-center hover:cursor-pointer ${
              new Date().getDate() === parseInt(dayOfMonth)
                ? "bg-black text-white"
                : "text-black bg-gray-200"
            }`}
          >
            <div className="font-bold">{dayInitial}</div>
            <div
              className={`${
                new Date().getDate() === parseInt(dayOfMonth)
                  ? "bg-blue-400 text-white rounded-full w-full "
                  : ""
              }`}
            >
              {dayOfMonth}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
