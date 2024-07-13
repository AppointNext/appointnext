import React, { useState } from "react";

const DoctorSidebar = ({ doctors, onSelectDoctor }) => {
  return (
    <div className="ml-[60px] pt-[64px] w-64 bg-gray-800 text-white h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold">Doctors</h2>
        <ul className="mt-4">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="mb-2">
              <button
                onClick={() => onSelectDoctor(doctor)}
                className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded"
              >
                {doctor.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorSidebar;
