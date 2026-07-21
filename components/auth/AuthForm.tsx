"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);

    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          toast.dismiss();
          toast.success("Login successful!");
        },
        onError: (ctx) => {
          toast.dismiss();
          toast.error(ctx.error.message || "Failed to login");
        },
      },
    );

    setLoading(false);
  };

  const handleDemoLogin = () => {
    setValue("email", "demo@studymate.com");
    setValue("password", "demo@123");
    handleSubmit(onSubmit)();
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-blue-600 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-blue-600 outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <button
        type="button"
        disabled={loading}
        onClick={handleDemoLogin}
        className="w-full rounded-xl bg-emerald-600 py-4 text-white font-semibold hover:bg-emerald-700 transition disabled:opacity-50"
      >
        Demo User Login
      </button>

      <div className="relative my-4 text-center text-sm text-gray-500">OR</div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full rounded-xl border py-4 font-semibold hover:bg-gray-50 transition"
      >
        Continue With Google
      </button>
    </form>
  );
}