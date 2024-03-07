import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/TestPage";
import Login from "./pages/Login";
import Overview from "./components/Dashboard/Overview/Overview";
import Appointment from "./components/Dashboard/Appointment";
import Doctor from "./components/Dashboard/Doctor/Doctor";
import Message from "./components/Dashboard/Message/Message";
import Setting from "./components/Dashboard/Setting/Setting";

function App() {
  return (
    <>
      <div className=" overflow-hidden px-2 sm:px-4  md:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard/*" element={<Overview />} />
          <Route path="/dashboard/task" element={<Appointment />} />
          <Route path="/dashboard/doctor" element={<Doctor />} />
          <Route path="/dashboard/message" element={<Message />} />
          <Route path="/setting" element={<Setting />} />
          {/* Add a default route in case none of the above matches */}
          <Route path="*" element={<Overview />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
