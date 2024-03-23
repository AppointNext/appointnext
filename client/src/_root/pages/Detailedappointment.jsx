import React, { useState } from 'react';
import AppointmentNav from '../../components/shared/AppointmentNav';
import { FiClock } from 'react-icons/fi';

const Detailedappointment = () => {
  const [showMore, setShowMore] = useState(false);

  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus! Deleniti consequuntur dolorem labore vitae veniam omnis est error rerum odit, voluptas quos vero perspiciatis asperiores ad, commodi ex laborum reiciendis necessitatibus iste sapiente dignissimos.";

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='ml-[200px]'>
      <AppointmentNav />
      <div className='flex flex-col items-center mt-8'>
        <div className="max-w-[600px] rounded-lg overflow-hidden shadow-md">
          <img src="./upcoming.png" alt="Doctor" className='w-full' />
          <div className='px-6 py-4'>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className='font-bold text-2xl'>Dr. Mishra</h1>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-1" />
                <p className="text-gray-600 text-sm">Afternoon 3:00 pm</p>
              </div>
            </div>
            <div className='mb-4'>
              <h1 className='font-semibold text-lg'>Description</h1>
              <p>{showMore ? description : description.slice(0, 100) + '...'}</p>
              <button className="text-blue-500 underline mt-2" onClick={toggleDescription}>
                {showMore ? "View less" : "View more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailedappointment;
