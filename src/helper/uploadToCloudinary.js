import { v2 as cloudinary } from "cloudinary";

const uploadToCloudinary = async (file) => {
  try {
    if (!file) return;
    const uploadedImage = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return uploadedImage;
  } catch (error) {
    console.log(error);
  }
};

export default uploadToCloudinary;
