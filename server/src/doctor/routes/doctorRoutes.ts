import { Router } from "express";
import { getDoctors } from "../controllers/doctorController";
import isUser from "../../user/middlewares/verifyUser";

const doctorRoute = Router();

doctorRoute.get("/doctor", isUser, getDoctors);

export default doctorRoute;
