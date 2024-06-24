import { Router } from "express";
import { loginDoctor,registerDoctor,logoutDoctor } from "../controllers/authDoctor.controller";

const authDoctorRoute= Router();

authDoctorRoute.post("/login", loginDoctor);
authDoctorRoute.post("/register", registerDoctor);
authDoctorRoute.post("/logout", logoutDoctor);

export default authDoctorRoute;
