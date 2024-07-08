import React from "react";
import { FaUser } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Feature = () => {
  return (
    <>
      {/* px-40 my-8 py-12 shadow-2xl shadow-gray-300 flex flex-row justify-between items-center rounded-lg overflow-hidden sm:p-0 md:p-0 */}
      {/*   <div className="w-full flex flex-row sm:text-[15px] md:text-[15px] text-[12px]  my-2  rounded-xl justify-between px-2 md:py-6 md:px-8">
        <div className="flex flex-row items-center justify-between md:w-[190px] xl:w-[190px] gap-1 w-auto ">
          <FaUser className="bg-[#C2D0F5] rounded-full md:h-10 md:w-10 text-[#003cd8] md:p-2 p-1 h-5 w-auto " />
          <p className="">Manage Patients</p>
        </div>
       <div className="flex flex-row items-center justify-between gap-1 w-auto">
          <FaUser className="bg-[#C2D0F5] rounded-full md:h-10 md:w-10 text-[#003cd8] md:p-2 p-1 h-5 w-auto" />

          <p>Manage Patients</p>
        </div> 
       <div className="flex flex-row items-center justify-between md:w-[190px] xl:w-[190px] w-auto gap-1 ">
          <FaUser className="bg-[#C2D0F5] rounded-full md:h-10 md:w-10 text-[#003cd8] md:p-2 p-1 h-5 w-auto" />
          <p>Manage Patients</p>
        </div>
     </div> */}

      {/* ABout section */}
      <h2 className=" mt-2 text-center text-4xl sm:text-2xl md:text-6xl text-blue-800 font-black ">
        About
      </h2>
      <div className="p-5 flex">
        <div className="md:w-1/2 sm:w-full">
          <div className="flex mt-5 justify-around  ">
            <p className="flex flex-col">
              <span className="text-blue-700 text-xl  md:text-3xl font-black">
                2000+{" "}
              </span>{" "}
              satisfied patients
            </p>
            <p className="flex flex-col">
              <span className="text-blue-700 text-xl  md:text-3xl font-black">
                50+{" "}
              </span>{" "}
              specialized medical services
            </p>
          </div>
          <p className="mt-5">
            Seamlessly book appointments with doctors at clinics and hospitals.
            Our platform revolutionizes medical care, offering a user-centric
            interface for easy navigation. Explore the future of healthcare with
            our technologically advanced and accessible medical website.
          </p>
          <div className=" mt-3">
            <div className="flex flex-col justify-between">
              <h1 className=" text-blue-700 text-xl  md:text-3xl font-semibold">
                Features
              </h1>
              {/* <p className="text-[12px] md:text-[15px] xl:text-[15px] ">
            You can explore the features that we provide with <br /> fun and
            have their own functions each feature.
          </p> */}
              <ul>
                <li className="flex flex-row items-center gap-2 mt-2">
                  <RiCheckboxCircleFill className="text-[#2FAB73] " />
                  <p className="inline  text-[15px]  ">
                    24/7 chat and phone support for users.
                  </p>
                </li>
                <li className="flex flex-row items-center gap-2">
                  <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
                  <p className="inline text-[15px]">
                    Secure registration and login process.
                  </p>
                </li>
                <li className="flex flex-row items-center gap-2 ">
                  <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
                  <p className="inline text-[15px]">
                    Access to personal medical history and records.
                  </p>
                </li>
                <li className="flex flex-row items-center gap-2">
                  <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
                  <p className="inline text-[15px]">
                    Search for doctors by specialty, location, availability.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" md:flex hidden w-1/2">
          <img src="./feature.svg" alt="feature image" className="" />
        </div>
      </div>
    </>
  );
};

export default Feature;
