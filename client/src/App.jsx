import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/TestPage";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
function App() {
  return (
    <>
      <div className=" overflow-hidden px-2 sm:px-4  md:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <ProtectedRoute
            path="/dashboard"
            component={<Dashboard />}
            redirectPath={"/login"}
          />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
