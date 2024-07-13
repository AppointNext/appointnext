import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const isUser = async (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.cookies["access-token"] || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid access token" });
    }
    // @ts-ignore
    const user = await User.findById(decoded.id);

    // @ts-ignore
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default isUser;
