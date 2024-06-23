import Router from "express";
import { login, logout, register } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/register", register);
authRoutes.post("/logout", logout);

export default authRoutes;
