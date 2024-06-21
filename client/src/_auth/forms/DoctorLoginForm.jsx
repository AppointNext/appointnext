import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/userSlice";
const DoctorLoginForm = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const user = useSelector((state) => state.user);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    await axios
      .post(`${BACKEND_BASE_URL}/api/doctorLogin`, formData)
      .then((res) => {
        console.log(res.data);
        const { username, email } = res.data;
        dispatch(setUser({ username, email, isDoctor: true }));
        localStorage.setItem("username", username);
        if (res.data.access_token && res.data.refresh_token) {
          Cookie.set("refreshToken", res.data.refresh_token);
          Cookie.set("accessToken", res.data.access_token);
          navigate("/doctor/doctorOverview");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(formData);
  };

  return (
    <div className="flex items-center justify-evenly h-screen gap-2 overflow-auto flex-row w-screen">
      <div className="flex-col gap-2 w-1/2 p-20">
        <div className="bg-[#4F46E5] rounded-3xl w-[12rem] text-white py-2 flex flex-row justify-center ml-[90px]">
          <button className="hover:text-black p-1 m-0.5 hover:rounded-2xl py-1 hover:bg-white">
            Patient
          </button>
          <button className="hover:text-black p-1 m-0.5 hover:rounded-2xl py-1 hover:bg-white">
            Doctor
          </button>
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
              className="transition-transform text-[15px]"
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
            <div className="flex flex-row justify-between items-center">
              <label
                htmlFor="password"
                className="transition-transform text-[15px]"
              >
                Password
              </label>
              <Link
                to="/forgotpassword"
                className="text-[10px] text-blue-500 hover:cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-1 px-3 mt-1 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="input-group flex flex-row items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked={formData.remember}
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
            Login
          </button>
        </form>
        <br />
        <br />
        <div className="text-center">
          <p className="text-[15px]">
            Don’t have an account yet? Register now, for free!
          </p>
        </div>
      </div>
      <div className="bg-[#003CD8] h-screen justify-center flex items-center w-1/2">
        <img src="./public/image.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default DoctorLoginForm;
