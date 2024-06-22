import mongoose, { Schema, Document, model } from "mongoose";

  interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    phone: string;
    history: string;
    refreshToken: string;
  groups: mongoose.Types.ObjectId[];
  userPermissions: mongoose.Types.ObjectId[];
  addToHistory(appointmentId: string): void;
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  history: { type: String, default: "" },
  refreshToken: { type: String, default: "" },
  groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
  userPermissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
});

UserSchema.methods.addToHistory = function (appointmentId: string) {
  if (!this.history) {
    this.history = appointmentId;
  } else {
    this.history += "," + appointmentId;
  }
  this.save();
};

const User = model<IUser>("User", UserSchema);
export default User;
