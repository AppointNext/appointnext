import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/TestPage";
function App() {
  return (
    <>
      <div className=" overflow-hidden px-2 sm:px-4  md:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
