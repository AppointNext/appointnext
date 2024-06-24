import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import Doctor from "../models/doctorModel";


const JWT_SECRET =  process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret';

export const registerDoctor = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('password').isString().notEmpty().withMessage('Password is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('firstName').isString().notEmpty().withMessage('First name is required'),
    body('lastName').isString().notEmpty().withMessage('Last name is required'),
    body('dob').isISO8601().toDate().withMessage('Valid date of birth is required'),
    body('gender').isString().notEmpty().withMessage('Gender is required'),
    body('phone').isString().notEmpty().withMessage('Phone number is required'),

    async (req: Request, res: Response) => {
        // Validate incoming request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
    
        const { username, password, email, firstName, lastName, dob, gender, phone } = req.body;
    
        try {
        // Check if the doctor already exists
        let doctor = await Doctor.findOne({ email });
        if (doctor) {
            return res.status(400).json({ message: 'Doctor already exists with this email' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new doctor instance
        doctor = new Doctor({
            username,
            password: hashedPassword,
            email,
            firstName,
            lastName,
            dob,
            gender,
            phone,
        });
    
        // Save the doctor to the database
        await doctor.save();
    
        res.status(201).json({ message: 'Doctor registered successfully', doctor });
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        }
    }
];

export const loginDoctor = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isString().notEmpty().withMessage('Password is required'),

    async (req: Request, res: Response) => {
    // Validate incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if the doctor exists
        const doctor = await Doctor.findOne({ email });
        if (!doctor) {
        return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate an access token
        const accessToken = jwt.sign(
        { userId: doctor._id, email: doctor.email },
        JWT_SECRET,
        { expiresIn: '15m' }
        );

        // Generate a refresh token
        const refreshToken = jwt.sign(
        { userId: doctor._id, email: doctor.email },
        JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
        );

        // Store the refresh token in the doctor's record
        doctor.refreshToken = refreshToken;
        await doctor.save();

        res.status(200).json({ message: 'Login successful', accessToken, refreshToken, doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    }
];

export const logoutDoctor = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
  
    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token is required' });
    }
  
    try {
      // Verify the refresh token
      const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
      if (!decoded) {
        return res.status(401).json({ message: 'Invalid refresh token' });
      }
  
      // Find the doctor by refresh token
      const doctor = await Doctor.findOne({ refreshToken });
      if (!doctor) {
        return res.status(401).json({ message: 'Invalid refresh token' });
      }
  
      // Invalidate the refresh token
      doctor.refreshToken = '';
      await doctor.save();
  
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };