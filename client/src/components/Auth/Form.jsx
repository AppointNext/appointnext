import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await axios
      .post("http://localhost:8000/api/login", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="" alt="" />
      <div className="bg-blue-500 rounded-3xl w-[12rem] text-white py-2 flex flex-row justify-center">
        <button className="hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white">
          Patient
        </button>
        <button className="hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white">
          Doctor
        </button>
      </div>
      <p>
        Seamlessly manage your appointments with AppointNext.io. Say goodbye to
        scheduling hassles and hello to efficient, organized healthcare!
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <label
            htmlFor="username"
            className={`transition-transform ${
              formData.email ? "-translate-y-6 text-sm" : ""
            }`}
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full py-2 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Username"
          />
        </div>
        <div className="input-group">
          <label
            htmlFor="password"
            className={`transition-transform ${
              formData.password ? "-translate-y-6 text-sm" : ""
            }`}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full py-2 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Password"
          />
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            value={formData.remember}
            onChange={handleChange}
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
      <p>Don’t have an account yet? Register now, for free!</p>
    </div>
  );
};

export default Form;
