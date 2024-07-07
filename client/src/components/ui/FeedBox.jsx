import React from "react";

// const FeedBox = ({ user }) => {
//   return (
//     <div className="border-[#DDDDDD] border-2 rounded-md w-screen">
//       <div className="flex flex-row gap-2 items-center justify-between px-2 py-2">
//         <div className="flex flex-row items-center gap-2">
//           <div className="w-10">
//             <img src="./TestUserImg.png" alt="" />
//           </div>
//           <div>
//             <h3 className=" text-[13px] font-bold ">{user.name}</h3>
//             <p className=" text-[10px] ">{user.address}</p>
//           </div>
//         </div>
//         <div className="flex flex-row items-center">
//           <p className=" text-[12px] ">2.5</p>
//           <img src="./star.png" alt="" />
//         </div>
//       </div>
//       <div className=" text-[12px] px-2 pb-4">
//         {/* Wow!... I am very happy to use this Appointment app it turned out to be
//         more than my expectations and so fac there have been no
//         problems.AppointNext always the best */}
//         {user.feedback}
//       </div>
//     </div>
//   );
// };

const FeedBox = ({ user }) => {
  return (
    <div className=" flex-row border-gray-300 border-2 rounded-md w-full max-w-lg mx-auto my-4 shadow-xl mx-2">
      <div className="flex flex-row gap-10 items-center justify-between px-4 py-3 bg-[#17a2b8] rounded-t-md">
        <div className="flex flex-row items-center gap-2">
          <div className="w-14 h-14 rounded-t-xl">
            <img
              src="./TestUserImg.png"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="gap-2">
            <h3 className="text-m font-bold text-white-1000 text-[18px]">{user.name}</h3>
            <p className="flex h-8 font-semibold text-[15px] text-gray-900">{user.address}</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-[19px] text-gray-800 mr-1 font-m">2.5</p>
          <img src="./star.png" alt="Star" className="w-7 h-7" />
        </div>
      </div>
      <div className="text-sm h-100 text-gray-700 px-4 py-4 bg-[white] rounded-b-md">
        <p style={{ height: "120px" }} className="leading-relaxed text-[18px]">{user.feedback}</p>
      </div>
    </div>
  );
};
export default FeedBox;
