import { cookie } from "cookie-parser";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
// import Cookie from "js-cookie";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
dbConnect();

const comparePassword = async (password: string, hashedPassword: string) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.log(error);
  }
};

const generateAccessToken = async (user: any) => {
  return jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1d",
  });
};

const generateRefreshToken = async (user: any) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "7d",
    }
  );
};

const generateRefreshAndAccessToken = async (userId: any) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const refreshToken = await generateRefreshToken(user);
  const accessToken = await generateAccessToken(user);
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });
  return { refreshToken, accessToken };
};

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    console.log(email, password);
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        status: 404,
        body: { message: "User not found" },
      });
    }
    console.log(user);
    const isValidPassword = password === user.password;
    if (!isValidPassword) {
      NextResponse.json({ status: 400, body: { message: "Invalid password" } });
    }
    const { refreshToken, accessToken } = await generateRefreshAndAccessToken(
      user._id
    );
    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: true,
    };

    cookies().set("refreshToken", refreshToken, options);
    cookies().set("accessToken", accessToken, options);

    return NextResponse.json({
      status: 200,
      success: true,
      message: "Login successful",
      refreshToken,
      accessToken,
      user: loggedInUser,
    });
  } catch (error) {
    console.log(error);
  }
}
