"use client";

import React, { useState } from "react";
import { format, addDays, subDays, startOfWeek, endOfWeek } from "date-fns";

const WeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const start = startOfWeek(currentDate, { weekStartsOn: 0 });
  const end = endOfWeek(currentDate, { weekStartsOn: 0 });
  const days = [];

  let day = start;
  while (day <= end) {
    days.push(day);
    day = addDays(day, 1);
  }

  const prevWeek = () => {
    setCurrentDate(subDays(currentDate, 7));
  };

  const nextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  return (
    <div className="w-full max-w-md mx-auto  p-4 bg-gray-100 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevWeek} className="text-gray-600">
          &lt;
        </button>
        <h2 className="text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button onClick={nextWeek} className="text-gray-600">
          &gt;
        </button>
      </div>
      <div className="flex justify-between">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-sm text-gray-600">{format(day, "E")}</span>
            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full ${
                format(day, "d") === format(currentDate, "d")
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {format(day, "d")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
