import { generateRefreshToken } from "@/app/api/user/login/route";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
export const sendMail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    const user = await User.findById(userId);
    generateRefreshToken(user);
  } catch (error) {}
};
