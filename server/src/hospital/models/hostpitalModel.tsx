import mongoose, { Schema, Document, model } from "mongoose";

interface IHospital extends Document {
  clinicName: string;
  clinicAddress: string;
  clinicPhone: string;
  description: string;
}

const HospitalSchema: Schema<IHospital> = new Schema({
  clinicName: { type: String, required: true },
  clinicAddress: { type: String, required: true },
  clinicPhone: { type: String, required: true },
  description: { type: String, required: true },
});

const Hospital = model<IHospital>("Hospital", HospitalSchema);
export default Hospital;
