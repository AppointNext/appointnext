import mongoose, { Schema, Document, model } from "mongoose";

interface IHospitalLocation extends Document {
  hospital: mongoose.Types.ObjectId;
  latitude: number;
  longitude: number;
  createdAt: Date;
}

const HospitalLocationSchema: Schema<IHospitalLocation> = new Schema({
  hospital: { type: Schema.Types.ObjectId, ref: "Hospital", required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const HospitalLocation = model<IHospitalLocation>(
  "HospitalLocation",
  HospitalLocationSchema
);
export default HospitalLocation;
