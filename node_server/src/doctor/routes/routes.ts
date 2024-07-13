import { Router } from "express";
import {
  loginDoctor,
  registerDoctor,
  logoutDoctor,
  getDoctors,
} from "../controllers/doctorController";
import isUser from "../../user/middlewares/verifyUser";

const doctorRoute = Router();

doctorRoute.post("/auth/login", loginDoctor);
doctorRoute.post("/auth/register", registerDoctor);
doctorRoute.post("/auth/logout", logoutDoctor);
doctorRoute.get("/doctors", isUser, getDoctors);

export default doctorRoute;
