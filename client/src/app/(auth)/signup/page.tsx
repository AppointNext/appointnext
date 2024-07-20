"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "@/app/globals.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { backendUrl } from "@/app/page";
import { useState } from "react";
import Loader from "@/components/own/Loader";
import { motion } from "framer-motion";
import { LabelInputContainer } from "@/app/test/page";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupValidationSchema } from "@/services/validation/signup";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupValidationSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/customers/login`, data);
      if (res.data.success) {
        localStorage.setItem("isAdmin", res.data.customer.isAdmin);
        if (res.data.customer.isAdmin) {
          router.push("/admin/overview");
        } else {
          router.push("/");
        }
      }
    } catch (error: any) {
      console.error("Login error:", error.message);
      // Optionally display error message to user
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (error: any) => {
    if (typeof error === "string") {
      return error;
    }
    if (error && error.message) {
      return error.message;
    }
    return "Invalid value";
  };

  return (
    <div
      className={
        loading
          ? ""
          : "max-w-md mx-auto mt-20 p-2 rounded-lg bg-transparent md:p-5 flex flex-col gap-4"
      }
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="overflow-scroll flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-3">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2 ">
                <LabelInputContainer>
                  <Label htmlFor="name" className="pl-2">
                    Name
                  </Label>
                  <Input
                    className="rounded-lg"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage(errors.name)}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="phone" className="pl-2">
                    Phone
                  </Label>
                  <Input
                    className="rounded-lg"
                    id="text"
                    placeholder="1234567890"
                    type="text"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage(errors.phone)}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Email" className="pl-2">
                    Email
                  </Label>
                  <Input
                    className="rounded-lg"
                    id="Email"
                    placeholder="youremail@gmail.com"
                    type="text"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage(errors.email)}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="password" className="pl-2">
                    Password
                  </Label>
                  <Input
                    className="rounded-lg"
                    id="password"
                    placeholder="********"
                    type="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage(errors.password)}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="address" className="pl-2">
                    Address
                  </Label>
                  <Input
                    className="rounded-lg"
                    id="address"
                    placeholder="44 st. Appolo Hospital"
                    type="text"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {getErrorMessage(errors.address)}
                    </p>
                  )}
                </LabelInputContainer>
                <div className="flex flex-row gap-2">
                  <LabelInputContainer>
                    <Label htmlFor="city" className="pl-2">
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="Chennai"
                      type="text"
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">
                        {getErrorMessage(errors.city)}
                      </p>
                    )}
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="state" className="pl-2">
                      State
                    </Label>
                    <Input
                      id="state"
                      placeholder="Tamil Nadu"
                      type="text"
                      {...register("state")}
                    />
                    {errors.state && (
                      <p className="text-red-500 text-xs mt-1">
                        {getErrorMessage(errors.state)}
                      </p>
                    )}
                  </LabelInputContainer>
                </div>
                <div className="flex flex-row gap-2">
                  <LabelInputContainer>
                    <Label htmlFor="pincode" className="pl-2">
                      Pincode
                    </Label>
                    <Input
                      id="pincode"
                      placeholder="404040"
                      type="text"
                      {...register("pincode")}
                    />
                    {errors.pincode && (
                      <p className="text-red-500 text-xs mt-1">
                        {getErrorMessage(errors.pincode)}
                      </p>
                    )}
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="country" className="pl-2">
                      Country
                    </Label>
                    <Input
                      id="country"
                      placeholder="India"
                      defaultValue={"India"}
                      type="text"
                      {...register("country")}
                    />
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-1">
                        {getErrorMessage(errors.country)}
                      </p>
                    )}
                  </LabelInputContainer>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white p-2 rounded hover:bg-blue-600 mt-4"
              >
                Submit
              </button>
            </form>
            <p>
              Already have an Account
              <Link className="text-primary px-2" href="/login">
                Login
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
