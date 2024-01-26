import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model.js";
import { dbConnect } from "@/dbConfig/dbConfig";
import ApiError from "@/helper/ApiError";
import ApiResponse from "@/helper/ApiResponse";
import bcrypt from "bcrypt";
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
    //console.log("email: ", email);

    if ([email, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
      email,
    });

    if (existedUser) {
      throw new ApiError(409, "User with email or username already exists");
    }
    //console.log(req.files);

    // const avatarLocalPath = req.files?.avatar[0]?.path;
    //const coverImageLocalPath = req.files?.coverImage[0]?.path;

    // let coverImageLocalPath;
    // if (
    //   req.files &&
    //   Array.isArray(req.files.coverImage) &&
    //   req.files.coverImage.length > 0
    // ) {
    //   coverImageLocalPath = req.files.coverImage[0].path;
    // }

    // if (!avatarLocalPath) {
    //   throw new ApiError(400, "Avatar file is required");
    // }

    // const avatar = await uploadOnCloudinary(avatarLocalPath);
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    // if (!avatar) {
    //   throw new ApiError(400, "Avatar file is required");
    // }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      phone,
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

    return NextResponse.json(
      new ApiResponse(200, createdUser, "User registered Successfully")
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
