import { Request,Response } from "express";
import {body,validationResult} from "express-validator";
import bcrypt from "bcrypt";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

// JWT secret key (ensure you set this in your environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';


export const register = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('password').isString().notEmpty().withMessage('Password is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').isString().notEmpty().withMessage('Phone number is required'),
    
    async (req: Request, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { username, password, email, phone } = req.body;
  
      try {
        // Check if the user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
          return res.status(400).json({ message: 'Username or email already exists' });
        }
  
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Create a new user
        const newUser = new User({
          username,
          password: hashedPassword,
          email,
          phone,
          history: "",
          refreshToken: "",
          groups: [],
          userPermissions: []
        });
  
        // Save the new user
        await newUser.save();
  
        res.status(201).json(newUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    }
  ];

export const login = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isString().notEmpty().withMessage('Password is required'),

  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      // If the credentials are correct, you can generate a token (e.g., JWT) and return it
      // Here, we are just sending a success message for simplicity
      res.status(200).json({ message: 'Login successful', token , user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
];

export const logout = (req:any,res:any)=>{
    console.log("logout endpoint")
}
