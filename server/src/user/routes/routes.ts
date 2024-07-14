import Router from "express";
import { login, logout, register } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/auth/login", login);
authRoutes.post("/auth/register", register);
authRoutes.post("/auth/logout", logout);

export default authRoutes;
