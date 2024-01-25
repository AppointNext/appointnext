// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     toLowerCase: true,
//   },
//   profileImage: {
//     type: String,
//     requierd: true,
//   },

//   password: String,
//   role: String,
// });

// userSchema.pre("save", async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password!, salt);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// });

// userSchema.methods.isValidPassword = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     console.log(error);
//   }
// };

// userSchema.methods.generateRefreshToken = async function () {
//   try {
//     return await jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
//       expiresIn: "7d",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// userSchema.methods.generateAccessToken = async function () {
//   try {
//     return await jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: "1d",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const User = mongoose.models.users || mongoose.model("users", userSchema);

// //Next js reloads many a time so we need to check if the model is already loaded or not
// // if (mongoose.models.users) {
// //   User = mongoose.models.users;
// // } else {
// //   User = mongoose.model("users", userSchema);
// // }

// export default User;
