import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    NextResponse.json({ success: false });
  }
}
