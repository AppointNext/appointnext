import "./App.css";
import DrSignup from "./components/DrSignup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/signup" element={<DrSignup />} />
      </Routes>
    </>
  );
}

export default App;
