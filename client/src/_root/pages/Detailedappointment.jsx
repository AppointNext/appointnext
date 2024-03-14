import React from 'react'
import AppointmentNav from '../../components/shared/AppointmentNav'
const Detailedappointment = () => {
  return (
    <div className=' ml-[200px]'>
      <AppointmentNav/>
      <div>
        <div>
            <img src="./upcoming.png" alt="" />
        </div>
        <h1 className=' font-bold'></h1>
      </div>
    </div>
  )
}

export default Detailedappointment
