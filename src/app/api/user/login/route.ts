import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

const generateRefreshAndAccessToken = async (userId: any) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const refreshToken = await user.generateRefreshToken();
  const accessToken = await user.generateAccessToken();
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });
  return { refreshToken, accessToken };
};

dbConnect();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      NextResponse.json({ status: 404, body: { message: "User not found" } });
    }
    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
      NextResponse.json({ status: 400, body: { message: "Invalid password" } });
    }
    const { refreshToken, accessToken } = await generateRefreshAndAccessToken(
      user._id
    );
    const loggedInUser = await User.findById(user._id).select("-password");
    NextResponse.json({
      status: 200,
      body: { message: "Login successful", refreshToken, accessToken },
      user: loggedInUser,
    });

    console.log(reqBody);
  } catch (error) {
    console.log(error);
  }
}
