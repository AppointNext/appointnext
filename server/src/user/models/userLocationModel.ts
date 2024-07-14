import mongoose, { Schema, Document, model } from "mongoose";

interface IUserLocation extends Document {
  user: mongoose.Types.ObjectId;
  latitude: number;
  longitude: number;
  createdAt: Date;
}

const UserLocationSchema: Schema<IUserLocation> = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const UserLocation = model<IUserLocation>("UserLocation", UserLocationSchema);
export default UserLocation;
