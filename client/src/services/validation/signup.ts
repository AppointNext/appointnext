import * as z from "zod";

export const signupValidationSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.number().min(10).max(10),
  email: z.string().email(),
  password: z.string().min(6),
  address: z.string().min(2).max(50),
  city: z.string().min(2),
  state: z.string().min(2),
  pincode: z.number().min(6).max(6),
  country: z.string(),
});
