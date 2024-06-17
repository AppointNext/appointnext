import Router from "express";

const authRoutes = Router();

authRoutes.post("/login", (req, res) => {
  res.send("Login route");
});

authRoutes.post("/register", (req, res) => {
  res.send("Register route");
});

export default authRoutes;
