"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/services/validation/login";
import "@/app/globals.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { backendUrl } from "@/app/page";
import { useState, useEffect } from "react";
import Loader from "@/components/own/Loader";
import { LabelInputContainer } from "@/app/test/page";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setErrorMessage(null); // Reset error message

    try {
      const res = await axios.post(`${backendUrl}/api/customers/login`, data);
      if (res.data.success) {
        localStorage.setItem("isAdmin", res.data.customer.isAdmin);
        router.push(res.data.customer.isAdmin ? "/admin/overview" : "/");
      }
    } catch (error: any) {
      console.error("Login error:", error.message);
      setErrorMessage("Login failed. Please check your credentials.");
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

  return loading ? (
    <Loader />
  ) : (
    <div className="max-w-md mx-auto mt-20 p-2 rounded-lg bg-transparent md:p-5 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 my-4">
          <LabelInputContainer>
            <Label htmlFor="name">Email</Label>
            <Input
              id="Email"
              placeholder="youremail@gmail.com"
              type="text"
              {...register("email")}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              {...register("password")}
            />
          </LabelInputContainer>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded hover:bg-blue-500"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an Account?
        <Link className="text-primary px-2" href="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
