import React from "react";
import MyCalendar from "../Auth/LoginForm";

const Test = () => {
  return (
    <div>
      <MyCalendar selectedDate={new Date(2023, 3, 7)} />
    </div>
  );
};

export default Test;
