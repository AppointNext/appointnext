import React from 'react'
import { BiCategory } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const AppointmentNav = () => {
  return (
    
      <div className=" flex justify-between m-5 my-8">
        <div className=" flex justify-center items-center gap-2">
          <CiSearch />
          <input type="text" placeholder="Search Appointment" className=" outline-blue-400 rounded-lg w-[300px] px-2 p-2" />
        </div>
        <div className=" flex gap-10">
          <div className=" flex justify-center items-center">
            <BiCategory />
            <p>Category</p>
          </div>
          <div className=" flex justify-center items-center">
            <MdSort />
            <p>SortBy : Deadline</p>
          </div>
        </div>
      </div>
    
    )
}

export default AppointmentNav;
