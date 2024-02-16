import React from "react";
import { useState } from "react";

const DrSignup = () => {
  const [form, setForm] = useState({
    Name: "",
    email: "",
    specs: "",
    cnfpass: "",
    pass: "",
  });
  const [seepass, setSeepass] = useState(false);
  const [seeCpass, setSeeCpass] = useState(false);
  function changeHandler(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(form);
  }

  return (
    <div>
      <div className="bg-blue-500 rounded-3xl w-[12rem] text-white py-2">
        <button className="hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white">
          Patient
        </button>
        <button className="hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white">
          Doctor
        </button>
      </div>

      <div className="flex flex-row">
        <div className=" flex-col  w-[420px] border-2 border-black">
          <h1 className=" font-bold text-xl">Doctor Signup</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" flex item-center flex-col justify-center gap-4 mt-4"
          >
            <label htmlFor="Name" className="flex justify-start">
              Name
            </label>
            <input
              className=" w-[15rem] rounded-md py-2 px-1 text-start"
              value={form.Name}
              type="text"
              name="Name"
              required
              id="Name"
              onChange={changeHandler}
              placeholder="Enter Your Name"
            />

            <label htmlFor="specialization" className="flex justify-start">
              specialization
            </label>
            <input
              className=" w-[15rem] rounded-md py-2 px-1 text-start"
              value={form.specs}
              type="text"
              name="specs"
              required
              id="specialization"
              onChange={changeHandler}
              placeholder="Enter Your spcialities"
            />

            <label htmlFor="Email" className="flex justify-start">
              Email
            </label>
            <input
              className=" w-[15rem] rounded-md py-2 px-1 text-start"
              value={form.email}
              type="email"
              name="email"
              required
              id="Email"
              onChange={changeHandler}
              placeholder="Enter Your Email"
            />

            <label htmlFor="Password" className=" text-start">
              Password
            </label>
            <div className="flex gap-2 items-center">
              <input
                className=" w-[15rem] rounded-md py-2 px-1 text-start"
                value={form.pass}
                type={seepass ? "text" : "password"}
                name="pass"
                required
                id="Password"
                onChange={changeHandler}
                placeholder="Set Your Password"
              />
              <span onClick={() => setSeepass((prev) => !prev)}>
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
                className=" w-[15rem] rounded-md py-2 px-1 text-start"
                value={form.cnfpass}
                type={seeCpass ? "text" : "password"}
                name="cnfpass"
                required
                id="cnfPass"
                onChange={changeHandler}
                placeholder="confirm Password"
              />
              <span onClick={() => setSeeCpass((prev) => !prev)}>
                {seeCpass ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </span>
            </div>

            <button className=" bg-[#003CD8] text-white font-bold px-2 py-2 rounded-lg text-center text-sm">
              SignUp
            </button>
          </form>
        </div>
        <div>
          <img
            src="../../public/Doctors-cuate.svg"
            alt="signup image"
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DrSignup;
