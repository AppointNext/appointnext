"use client";

import React, { useState } from "react";
import { format, addDays, subDays, startOfWeek, endOfWeek } from "date-fns";
import { Button } from "@mui/material";

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
        <Button
          onClick={prevWeek}
          className="text-gray-600 bg-gray-200 rounded-full w-8 h-8"
          sx={{ minWidth: 0 }}
        >
          &lt;
        </Button>
        <h2 className="text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <Button
          onClick={nextWeek}
          sx={{ minWidth: 0 }}
          className="text-gray-600 bg-gray-200 rounded-full w-8 h-8"
        >
          &gt;
        </Button>
      </div>
      <div className="flex justify-between">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-sm text-gray-600">{format(day, "E")}</span>

            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full ${
                format(day, "d") === format(currentDate, "d")
                  ? "bg-gray-200 text-white"
                  : "bg-gray-200"
              }`}
            >
              <Button
                sx={{ minWidth: 0, margin: 0, minHeight: 0, padding: 0 }}
                variant="text"
                className="text-primary"
              >
                {format(day, "d")}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
