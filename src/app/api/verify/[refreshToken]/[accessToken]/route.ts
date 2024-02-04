import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
export default async function get(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { refreshToken, accessToken } = reqBody;
    console.log("refreshToken: ", refreshToken, "accessToken: ", accessToken);
    NextResponse.json({ status: 200, body: { message: "User verified" } });
  } catch (error) {
    console.log(error);
  }
}
