import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },

    profileImage: {
      type: String, // cloudinary url
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      default: "user",
    }, //we have three roles: user ,company ,admin
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPassword: {
      data: String,
      default: "",
    },
    verfiyToken: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
