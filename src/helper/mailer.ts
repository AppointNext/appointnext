import { generateRefreshAndAccessToken } from "@/app/api/user/login/route";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const sendMail = async ({ email, emailType, userId }: any) => {
  try {
    // console.log(userId, emailType, email);
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    const user = await User.findById(userId);
    const { refreshToken, accessToken }: any =
      await generateRefreshAndAccessToken(userId);
    // console.log("refreshToken: ", refreshToken, "accessToken: ", accessToken);
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });

      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      });

      const mailOptions = {
        from: "unknowncoder705@gmail.com",
        to: email,
        subject: "Account Verification",
        html: `Please click on the link to verify your account: <a href="${process.env.DOMAIN}/verify/refreshToken=${refreshToken}/accessToken=${accessToken}">${process.env.DOMAIN}/refreshToken=${refreshToken}/accessToken=${accessToken}</a>`,
      };

      const mailResponse = await transport.sendMail(mailOptions);
      return mailResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
