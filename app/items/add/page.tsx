"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputs {
  title: string;
  description: string;
  goal: string;
  duration: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AddItemPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    setServerError(null);

    try {
      const response = await fetch(`${API_URL}/api/plans`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          goal: formData.goal,
          duration: formData.duration,
          userEmail: session?.user?.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create study plan");
      }

      router.push("/items/manage");
    } catch (err) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred");
      }
    }
  };

  if (isPending) {
    return (
      <div className="py-20 text-center">
        Checking authentication...
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-bold">Add Study Plan</h1>

      {serverError && (
        <div className="mt-4 rounded-xl bg-red-100 p-4 text-red-700">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">
        <div>
          <input
            {...register("title", { required: "Title is required" })}
            placeholder="Title"
            className="w-full rounded-xl border p-4"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("description", { required: "Short description is required" })}
            placeholder="Short Description"
            className="w-full rounded-xl border p-4"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("goal", { required: "Goal / Full description is required" })}
            placeholder="Goal / Full Description"
            className="h-40 w-full rounded-xl border p-4"
          />
          {errors.goal && (
            <p className="mt-1 text-sm text-red-500">{errors.goal.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("duration", { required: "Duration is required" })}
            placeholder="Duration (e.g., 4 Weeks)"
            className="w-full rounded-xl border p-4"
          />
          {errors.duration && (
            <p className="mt-1 text-sm text-red-500">{errors.duration.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-blue-600 px-8 py-4 text-white disabled:opacity-50"
        >
          {isSubmitting ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
}