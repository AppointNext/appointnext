// Settings.jsx

import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    username: "Previous Username  ",
    email: "previous@example.com",
    password: "",
    confirmPassword: "",
    address: "Akonwonjo, Lagos, Nigeria",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the form data (e.g., send API request)
    console.log("Form submitted:", formData);
    setIsEditing(false); // Exit editing mode after submission
  };

  return (
    <div className="mt-20 px-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex  flex-col">
          <label className="block text-sm font-semibold mb-1">Username:</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
          ) : (
            <div className="flex items-center justify-between">
              <span className="mr-2">{formData.username}</span>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-semibold mb-1">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
          ) : (
            <div className="flex justify-between">
              <span className="mr-2">{formData.email}</span>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-semibold mb-1">Address:</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
          ) : (
            <div className="flex justify-between">
              <span className="mr-2">{formData.address}</span>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-semibold mb-1">
            New Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-between">
          <label className="block text-sm font-semibold mb-1">
            Confirm New Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
