"use client";

import { CircularProgress } from "@mui/material";
import CircularWithValueLabel from "../CircularProgressLabel";
import { useState } from "react";

export default function StatsComp() {
  const [progress, setProgress] = useState(10);
  return (
    <div>
      <div>
        <div>
          <h1>Running Appointment</h1>
        </div>
        <div>
          <h1>65</h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div>
            <CircularWithValueLabel
              progress={progress}
              setProgress={setProgress}
            />
          </div>
          <div className="flex flex-col">
            <h1>100</h1>
            <p className="text-xs">Task</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
