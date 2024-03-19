import React, { useState } from 'react';

const Emergency = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, age, phoneNumber, emergencyType, description });
  };

  return (
    <div className=' p-4 border-1 border-blue-100 shadow-2xl shadow-sky-400 rounded-xl w-[700px] m-auto'>
      <h2 className="text-lg font-semibold mb-4">Emergency Patient Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block font-medium">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border rounded-md px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-medium">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border rounded-md px-2 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emergencyType" className="block font-medium">Emergency Type:</label>
          <select
            id="emergencyType"
            value={emergencyType}
            onChange={(e) => setEmergencyType(e.target.value)}
            className="border rounded-md px-2 py-1 w-full"
            required
          >
            <option value="">Select emergency type</option>
            <option value="Heart Attack">Heart Attack</option>
            <option value="Accident">Accident</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md px-2 py-1 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Emergency;
