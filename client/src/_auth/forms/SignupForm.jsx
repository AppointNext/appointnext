import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setUser } from "../../store/userSlice";
// import { useSelector } from "react-redux";

const SignupForm = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  // useEffect(() => {
  //   const handleSearch = async () => {
  //     try {
  //       const { coords } = await getCurrentLocation();
  //       const { latitude, longitude } = coords;
  //       setLocation({ latitude, longitude });
  //     } catch (error) {
  //       console.error("Error searching:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const getCurrentLocation = async () => {
  //     return new Promise((resolve, reject) => {
  //       navigator.geolocation.getCurrentPosition(resolve, reject);
  //     });
  //   };

  //   handleSearch();
  // }, []); // Empty dependency array ensures the effect runs only once

  console.log(location, position);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confpassword: "",
    remember: false,
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // formData.latitude = position.latitude;
    // formData.longitude = position.longitude;
    const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    await axios
      .post(`${BACKEND_BASE_URL}/api/auth/register`, formData)
      .then((res) => {
        console.log(res.data);
        const { username, email } = res.data;
        console.log(username, email);
        // // dispatch(setUser({ username, email }));
        // localStorage.setItem("username", username);
        // console.log(localStorage.getItem("username"));
        // console.log(res.data.refresh_token, res.data.access_token);
        if (res.data.success) {
          //   Cookie.set("refreshToken", res.data.refresh_token);
          //   Cookie.set("accessToken", res.data.access_token);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(formData);
  };

  return (
    <div className="flex items-center justify-evenly h-screen gap-2 overflow-auto flex-col lg:flex-row w-screen">
      <div className=" flex-col gap-2 md:w-1/2 p-20">
        <div className="bg-[#4F46E5] rounded-3xl w-[12rem] text-white py-2 flex flex-row justify-center md:ml-[90px]">
          <button className="hover:text-black p-1 m-0.5 hover:rounded-2xl py-1 bg-white rounded-2xl px-3 text-black">
            Patient
          </button>
          <Link to="/doctorSignup"><button type="button" className="hover:text-black p-1 m-0.5 hover:rounded-2xl py-1 hover:bg-white">
            Doctor
          </button></Link>
        </div>
        <br />
        <p className="text-[11px]">
          Simplify appointments with AppointNext.io for efficient healthcare
          scheduling.
        </p>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="input-group font-semibold">
            <label
              htmlFor="username"
              className={`transition-transform ${
                formData.email ? "-translate-y-6 text-sm" : ""
              } text-[15px]`}
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="input-group font-semibold">
            <label
              htmlFor="email"
              className={`transition-transform ${
                formData.email ? "-translate-y-6 text-sm" : ""
              } text-[15px]`}
            >
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
          <div className="input-group font-semibold">
            <label
              htmlFor="phone"
              className={`transition-transform ${
                formData.email ? "-translate-y-6 text-sm" : ""
              } text-[15px]`}
            >
              Contact
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
              required
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="input-group font-semibold">
            <div className="flex flex-row justify-between items-center">
              <label
                htmlFor="password"
                className={`transition-transform ${
                  formData.password ? "text-sm" : ""
                } text-[15px] `}
              >
                Password
              </label>
            </div>
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
          <div className="input-group font-semibold">
            <div className="flex flex-row justify-between items-center">
              <label
                htmlFor="confpassword"
                className={`transition-transform ${
                  formData.password ? "text-sm" : ""
                } text-[15px] `}
              >
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="confpassword"
              id="confpassword"
              value={formData.confpassword}
              onChange={handleChange}
              className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Confirm Password"
              required
            />
          </div>
          <div className="input-group flex flex-row items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              value={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember" className="px-2 text-[15px]">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#4F46E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <br />
        <br />
        <div className=" text-center">
          <p className="text-[15px]">
            Already have an account? <Link to="/login">Login</Link>
            <br />
            or
            <br />
            register as a <Link to="/doctorSignup">Doctor</Link>
          </p>
        </div>
      </div>
      <div className=" bg-[#003CD8] h-screen justify-center flex items-center w-full md:w-1/2 m-2">
        <img src="./public/image.png" alt="" className=" w-full" />
      </div>
    </div>
  );
};

export default SignupForm;
