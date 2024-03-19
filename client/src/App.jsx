import { Routes, Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import LoginForm from "./_auth/forms/LoginForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import Overview from "./_root/pages/Overview";
import Appointments from "./_root/pages/Appointments";
import Doctors from "./_root/pages/Doctors";
import Message from "./_root/pages/Messages";
import Messages from "./_root/pages/Messages";
import Detailedappointment from "./_root/pages/Detailedappointment";
import AppointForm from "./_root/pages/AppointForm";
import DoctorLoginForm from "./_auth/forms/DoctorLoginForm";
import DoctorSignupForm from "./_auth/forms/DoctorSignupForm";
import Emergency from "./_root/pages/Emergency";
import UpAppointments from "./_root/pages/DoctorSite/UpAppointments";

function App() {
  const location = useLocation();

  // Check if the current route is the Emergency page
  const isEmergencyPage = location.pathname === "/emergency";

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/doctorSignup" element={<DoctorSignupForm />} />
          <Route path="/doctorLogin" element={<DoctorLoginForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointmentForm" element={<AppointForm />} />
          <Route path="/dappointments" element={<Detailedappointment />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Message />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/upappointments" element={<UpAppointments/>} />
        </Route>
      </Routes>
      {/* Render the Emergency button only if the current page is not the Emergency page */}
      {!isEmergencyPage && (
        <Link
          to="/emergency"
          className="fixed bottom-8 right-8 hover:bg-red-700 hover:scale-110 transition-all bg-red-500 text-white font-semibold rounded-full w-21 h-21 flex items-center justify-center text-[17px] p-2  hover:text-[20px]"
        >
          Emergency
        </Link>
      )}
    </div>
  );
}

export default App;
