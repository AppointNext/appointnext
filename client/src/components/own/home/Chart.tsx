"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const ActivityChart = () => {
  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Tasks",
        data: [1, 2, 1, 1.5, 2, 1, 1],
        borderColor: "#000",
        backgroundColor: "#6366F1",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw;
            label += " Task";
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
      },
    },
  };

  return (
    <div className="w-full h-full max-w-md mx-auto p-2 md:p-6 bg-gray-100 rounded-xl shadow-md sm:max-w-xs md:max-w-xl lg:max-w-md md:h-full">
      <Line
        data={data}
        options={options}
        className="w-full min-w-full min-h-full"
      />
    </div>
  );
};

export default ActivityChart;
