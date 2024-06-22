import { Request,Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel";
import mongoose from "mongoose";

export const register = async (req:Request,res:Response)=>{
    const{ username, email, phone, password } = req.body;
    console.log(req.body);
     
    const hashedPassword = await bcrypt.hash(password,10);

    console.log(hashedPassword);

    const newUser = await User.create({
        data:{
            username:'',
            password:'',
            email:'',
            phone:'',
        }
    })

    console.log(newUser);
    await newUser.save();
}

export const login = (req:Request,res:Response)=>{
    console.log("login endpoint")
}

export const logout = (req:any,res:any)=>{
    console.log("logout endpoint")
}
