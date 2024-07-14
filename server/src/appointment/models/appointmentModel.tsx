import mongoose, { Schema, Document, model } from "mongoose";

interface IAppointment extends Document {
  user: mongoose.Types.ObjectId;
  doctor: mongoose.Types.ObjectId;
  dateTime: Date;
  description: string;
  treatmentFor: string;
  previouslyVisited: boolean;
  anyReport: string;
  status: string;
}

const AppointmentSchema: Schema<IAppointment> = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  doctor: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
  dateTime: { type: Date, required: true },
  description: { type: String, default: "" },
  treatmentFor: { type: String, default: "" },
  previouslyVisited: { type: Boolean, default: false },
  anyReport: { type: String, default: "" },
  status: {
    type: String,
    enum: ["BOOKED", "CANCELLED", "COMPLETED", "PENDING"],
    default: "PENDING",
  },
});

const Appointment = model<IAppointment>("Appointment", AppointmentSchema);
export default Appointment;
