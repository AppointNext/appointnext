import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const DoctorSignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
    medicalLicense: "",
    specialization: "",
    clinic: "",
    yearsOfExperience: "",
    medicalQualifications: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const BACKEND_BASE_URL = import.meta.env.BACKEND_BASE_URL;
    try {
      const res = await axios.post(
        `${BACKEND_BASE_URL}/api/doctorSignup`,
        formData
      );
      console.log(res.data);
      // Redirect to dashboard or any other page upon successful signup
      navigate("/doctorLogin");
    } catch (err) {
      console.log(err);
      // Handle errors, show error messages to the user
    }
  };

  return (
    <div className="flex justify-between h-screen">
      <div className="flex flex-col justify-center items-center gap-2 w-1/2">
        <h1 className="text-center font-bold text-[23px]">Doctor SignUp</h1>
        <div className="flex flex-col items-center justify-center p-4 gap-2 w overflow-auto h-auto mx-[300px] font-semibold w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full p-4"
          >
            <div className="flex flex-row gap-4">
              <div className="input-group">
                <label htmlFor="firstName" className="text-[15px]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="lastName" className="text-[15px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your Last Name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="input-group">
                <label htmlFor="userName" className="text-[15px]">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="userName"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your User Name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="dob" className="text-[15px]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email" className="text-[15px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="text-[15px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="gender" className="text-[15px]">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-row gap-4">
              <div className="input-group">
                <label htmlFor="phone" className="text-[15px]">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your Phone Number"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="yearsOfExperience" className="text-[15px]">
                  Years of Experience
                </label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  id="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your Years of Experience"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="medicalLicense" className="text-[15px]">
                Medical License
              </label>
              <input
                type="text"
                name="medicalLicense"
                id="medicalLicense"
                value={formData.medicalLicense}
                onChange={handleChange}
                className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Medical License Number"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="specialization" className="text-[15px]">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                id="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Specialization"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="clinic" className="text-[15px]">
                Clinic
              </label>
              <input
                type="text"
                name="clinic"
                id="clinic"
                value={formData.clinic}
                onChange={handleChange}
                className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Clinic Name"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="medicalQualifications" className="text-[15px]">
                Medical Qualifications
              </label>
              <textarea
                name="medicalQualifications"
                id="medicalQualifications"
                value={formData.medicalQualifications}
                onChange={handleChange}
                className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Medical Qualifications"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              Signup
            </button>
          </form>
          <p className="text-[10px]">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <div className="bg-[#003CD8] h-screen justify-center flex items-center w-1/2">
        <img src="./public/image.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default DoctorSignupForm;
