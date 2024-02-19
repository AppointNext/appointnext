import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const DrSignup = () => {
  const [form, setForm] = useState({
    Name: "",
    email: "",
    specs: "",
    cnfpass: "",
    pass: "",
    phone: 1234,
  });

  const [seepass, setSeepass] = useState(false);
  const [seeCpass, setSeeCpass] = useState(false);
  const [page, setPage] = useState(true);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (setState) => {
    setState((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/doctorSignUp",
        {
          username: form.Name,
          password: form.pass,
          phone: form.phone,
          email: form.email,
        }
      );
      if (response.data.success) {
        toast.success("Login successfully");
      } else {
        toast.error("Cannot login");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col xl:flex-row justify-between h-screen">
      <div className="flex flex-col justify-center items-center w-full xl:w-1/2 bg-[#003cd8]">
        <div className="bg-[#003cd8] rounded-3xl w-[12rem] text-white py-2 flex items-center justify-center h-[80px]">
          <button
            className={`hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white transition-all ${
              page === false ? "bg-white text-black rounded-2xl" : "text-white"
            }`}
            onClick={() => setPage(false)}
          >
            Patient
          </button>
          <button
            className={`hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white ${
              page === false ? "text-white" : "bg-white text-black rounded-2xl"
            }`}
            onClick={() => setPage(true)}
          >
            Doctor
          </button>
        </div>
        <h1 className="font-bold text-xl">Doctor Signup</h1>
        <form
          onSubmit={handleSubmit}
          className="flex item-center flex-col justify-center gap-4 mt-4 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]"
        >
          <label htmlFor="Name" className="flex justify-start">
            Name
          </label>
          <input
            className="w-full rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
            value={form.Name}
            type="text"
            name="Name"
            required
            id="Name"
            onChange={changeHandler}
            placeholder="Enter Your Name"
          />

          {page && (
            <>
              <label htmlFor="specialization" className="flex justify-start">
                Specialization
              </label>
              <input
                className="w-full rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
                value={form.specs}
                type="text"
                name="specs"
                required
                id="specialization"
                onChange={changeHandler}
                placeholder="Enter Your Specialities"
              />
            </>
          )}

          <label htmlFor="Email" className="flex justify-start">
            Email
          </label>
          <input
            className="w-full rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
            value={form.email}
            type="email"
            name="email"
            required
            id="Email"
            onChange={changeHandler}
            placeholder="Enter Your Email"
          />

          <label htmlFor="Password" className="text-start">
            Password
          </label>
          <div className="flex gap-2 items-center">
            <input
              className="w-full rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
              value={form.pass}
              type={seepass ? "text" : "password"}
              name="pass"
              required
              id="Password"
              onChange={changeHandler}
              placeholder="Set Your Password"
            />
            <span onClick={() => togglePasswordVisibility(setSeepass)}>
              {seepass ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </span>
          </div>

          <label htmlFor="cnfPass" className="flex justify-start">
            Confirm Password
          </label>
          <div className="flex items-center gap-2 justify-between w-full">
            <input
              className="w-full rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
              value={form.cnfpass}
              type={seeCpass ? "text" : "password"}
              name="cnfpass"
              required
              id="cnfPass"
              onChange={changeHandler}
              placeholder="Confirm Password"
            />
            <span onClick={() => togglePasswordVisibility(setSeeCpass)}>
              {seeCpass ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </span>
          </div>

          <button
            className="bg-[#003CD8] text-white font-bold px-2 py-2 rounded-lg text-center text-sm hover:bg-[#4874e2]"
            onClick={(e) => handleSubmit(e)}
          >
            SignUp
          </button>
        </form>
      </div>

      <div className="flex items-center justify-center flex-col bg-[#003cd8] w-full xl:w-1/2">
        <img
          src="/Doctors-cuate.svg"
          alt="signup image"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px]"
        />
        <p className="text-white">We are here to serve the best to community</p>
      </div>
      <Toaster />
    </div>
  );
};

export default DrSignup;
