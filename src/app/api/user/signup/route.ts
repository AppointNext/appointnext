import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model.js";
import { dbConnect } from "@/dbConfig/dbConfig";
import ApiError from "@/helper/ApiError";
import ApiResponse from "@/helper/ApiResponse";
import bcrypt from "bcrypt";
import uploadToCloudinary from "@/helper/uploadToCloudinary";
import { sendMail } from "@/helper/mailer";

dbConnect();
const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password, phone } = reqBody;
    // console.log(reqBody);
    console.log("email: ", email, "password: ", password, "phone: ", phone);

    if ([email, password, phone].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
      email,
    });

    if (existedUser) {
      throw new ApiError(409, "User with email or username already exists");
    }
    // console.log(reqBody.profileImage);

    // let profileImageLocalPath;
    // if (
    //   reqBody.profileImage &&
    //   Array.isArray(reqBody.profileImage) &&
    //   reqBody.profileImage > 0
    // ) {
    //   profileImageLocalPath = reqBody.profileImage;
    // }
    // console.log(profileImageLocalPath);
    // if (!profileImageLocalPath) {
    //   throw new ApiError(400, "profileImage file is required");
    // }

    // const profileImage = await uploadToCloudinary(profileImageLocalPath);
    // if (!profileImage) {
    //   throw new ApiError(400, "profileImage file is required");
    // }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      phone,
      // profileImage: profileImage.url,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }

    const response = await sendMail({
      email,
      emailType: "VERIFY",
      userId: createdUser._id,
    });
    console.log(response);
    return NextResponse.json(
      new ApiResponse(200, createdUser, "User registered Successfully")
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
