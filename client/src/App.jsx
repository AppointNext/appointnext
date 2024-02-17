import "./App.css";
import DrSignup from "./components/Form";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DoctorSignup from "./pages/DoctorSignup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/signup" element={<DoctorSignup />} />
      </Routes>
    </>
  );
}

export default App;
