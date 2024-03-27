// import React from "react";
// import UpcomingAppointCard from "../../../components/shared/UpcomingAppointCard";
// import UpcomingAppointDoctorCard from "../../../components/shared/SharedDoctors/UpcommingAppointments";
// const UpAppointments = () => {
//   return (
//     <div className=" ml-[200px] mt-4 px-4">
//       <h1 className=" font-semibold text-[23px]">Upcomming Appointments</h1>
//       <div className=" overflow-auto flex">
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//       </div>
//       <div className=" overflow-auto flex">
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//         <UpcomingAppointDoctorCard />
//       </div>
//     </div>
//   );
// };

// export default UpAppointments;

import React from "react";
import UpcomingAppointDoctorCard from "../../../components/shared/SharedDoctors/UpcommingAppointments";

const UpAppointments = () => {
  return (
    <div className="ml-[200px] mt-4 px-4 relative">
      <h1 className="font-semibold text-[23px]">Upcoming Appointments</h1>
      <div className="overflow-x-auto flex flex-no-wrap h-[310px] overflow-hidden">
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
      </div>
      <div className="overflow-x-auto flex flex-no-wrap">
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
        <UpcomingAppointDoctorCard />
      </div>
    </div>
  );
};

export default UpAppointments;
