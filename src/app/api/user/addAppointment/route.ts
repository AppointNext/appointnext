import { NextRequest, NextResponse } from "next/server";
import Appointment from "@/models/appointment.model.js";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { userId, date, time } = reqBody;
    const isAppointmentExistAtThisTime = await Appointment.findOne({
      date,
      time,
    });
    if (isAppointmentExistAtThisTime) {
      return NextResponse.json({
        status: 400,
        body: { message: "Appointment already exists at this time" },
      });
    }
    const appointment = await Appointment.create({
      userId,
      date,
      time,
    });
  } catch (error) {
    console.log(error);
  }
}
