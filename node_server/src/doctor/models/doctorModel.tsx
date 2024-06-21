import mongoose, { Schema, Document, model } from "mongoose";

interface IDoctor extends Document {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  dob: Date;
  gender: string;
  phone: string;
  history: string;
  refreshToken: string;
  medicalLicense: string;
  specialization: string;
  clinic: mongoose.Types.ObjectId;
  yearsOfExperience: number;
  medicalQualifications: string;
  profilePicture: string;
  groups: mongoose.Types.ObjectId[];
  userPermissions: mongoose.Types.ObjectId[];
  addToHistory(appointmentId: string): void;
}

const DoctorSchema: Schema<IDoctor> = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, default: "male" },
  phone: { type: String, required: true },
  history: { type: String, default: "" },
  refreshToken: { type: String, default: "" },
  medicalLicense: { type: String, default: "" },
  specialization: { type: String, default: "" },
  clinic: { type: Schema.Types.ObjectId, ref: "Hospital", required: false },
  yearsOfExperience: { type: Number, default: 0 },
  medicalQualifications: { type: String, default: "" },
  profilePicture: { type: String, default: "" },
  groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
  userPermissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
});

DoctorSchema.methods.addToHistory = function (appointmentId: string) {
  if (!this.history) {
    this.history = appointmentId;
  } else {
    this.history += "," + appointmentId;
  }
  this.save();
};

const Doctor = model<IDoctor>("Doctor", DoctorSchema);
export default Doctor;
