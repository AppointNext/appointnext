import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const DrSignup = () => {
  const navigate = useNavigate();
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
    console.log(form);
  };

  const togglePasswordVisibility = (setState) => {
    setState((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(form);
    const response = await axios.post("http://localhost:8000/api/signup", {
      username: form.Name,
      password: form.pass,
      phone: form.phone,
      email: form.email,
    });
    console.log(response.data);
    if (response.data.success) {
      toast.success("Login successfully");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      toast.error("cannot login");
    }
  };

  return (
    <div className="flex flex-row  h-screen">
      <div className="flex flex-col w-full md:w-1/2 xl:w-1/2 2xl: h-screen  items-center ">
        <div className="bg-[#003cd8] rounded-3xl md:w-[12rem] xl:w-[12rem] 2xl:w-[12rem] w-50 text-white py-2 flex items-center justify-center md:h-[80px] xl:h-[80px] 2xl:h-[80px] h-10 text-[10px]">
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
        <h1 className="font-bold text-sm md:text-md xl:text-xl 2xl:text-2xl">
          Doctor Signup
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex item-center flex-col justify-center gap-4 mt-4 w-[200px]  md:h-full  xl:h-full 2xl:h-full h-1/2 2xl:w-[800px] "
        >
          <label htmlFor="Name" className="flex justify-start">
            Name
          </label>
          <input
            className="w-[15rem] rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
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
                className="w-[15rem] rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
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
            className="w-[15rem] rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
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
              className="w-[15rem] rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
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
          <div className="flex items-center gap-2 justify-between w-screen">
            <input
              className="w-[15rem] rounded-md py-2 px-1 text-start bg-[#F3F4F6]"
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

      <div className="hidden md:w-1/2 xl:w-1/2 2xl:w-1/2 h-screen md:flex xl:flex 2xl:flex items-center justify-center flex-col bg-[#003cd8]">
        <img
          src="/Doctors-cuate.svg"
          alt="signup image"
          className="w-[500px] h-[500px]"
        />
        <p className="text-white">We are here to serve the best to community</p>
      </div>
      <Toaster />
    </div>
  );
};

export default DrSignup;
