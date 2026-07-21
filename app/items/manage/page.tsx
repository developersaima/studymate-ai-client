"use client";

import Container from "@/components/shared/Container";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface StudyPlan {
  _id: string;
  title: string;
  description: string;
  goal: string;
  duration: string;
  userEmail: string;
  createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ManagePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [plans, setPlans] = useState<StudyPlan[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedPlan, setSelectedPlan] = useState<StudyPlan | null>(null);
  const [deletePlanId, setDeletePlanId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user?.email) {
      fetchPlans();
    }
  }, [session]);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/plans/user/${session?.user?.email}`);
      if (!res.ok) {
        throw new Error("Failed to fetch study plans");
      }
      const data: StudyPlan[] = await res.json();
      setPlans(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while fetching plans";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deletePlanId) return;

    const toastId = toast.loading("Deleting study plan...");

    try {
      setIsDeleting(true);
      const res = await fetch(`${API_URL}/api/plans/${deletePlanId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete study plan");
      }

      setPlans((prev) => prev.filter((plan) => plan._id !== deletePlanId));
      setDeletePlanId(null);
      toast.success("Study plan deleted successfully!", { id: toastId });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while deleting";
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsDeleting(false);
    }
  };

  if (isPending || loading) {
    return (
      <Container>
        <div className="py-20 text-center">Loading study plans...</div>
      </Container>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <Container>
      <div className="py-16">
        <h1 className="text-4xl font-bold">Manage Study Plans</h1>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 text-left font-semibold">Title</th>
                <th className="p-4 text-center font-semibold">Duration</th>
                <th className="p-4 text-center font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {plans.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-500">
                    No study plans found.
                  </td>
                </tr>
              ) : (
                plans.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{item.title}</td>

                    <td className="p-4 text-center">{item.duration}</td>

                    <td className="p-4 text-center space-x-3">
                      <button
                        onClick={() => setSelectedPlan(item)}
                        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                      >
                        View
                      </button>

                      <button
                        onClick={() => setDeletePlanId(item._id)}
                        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-bold">{selectedPlan.title}</h2>
            <div className="mt-4 space-y-3">
              <div>
                <span className="font-semibold text-gray-700">Duration:</span>{" "}
                {selectedPlan.duration}
              </div>
              <div>
                <span className="font-semibold text-gray-700">Short Description:</span>
                <p className="mt-1 text-gray-600">{selectedPlan.description}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Goal / Details:</span>
                <p className="mt-1 whitespace-pre-wrap text-gray-600">
                  {selectedPlan.goal}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedPlan(null)}
                className="rounded-xl bg-gray-200 px-6 py-2.5 text-gray-800 hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {deletePlanId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900">Confirm Deletion</h2>
            <p className="mt-2 text-gray-600">
              Are you sure you want to delete this study plan? This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setDeletePlanId(null)}
                disabled={isDeleting}
                className="rounded-xl bg-gray-200 px-5 py-2.5 text-gray-800 hover:bg-gray-300 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-white hover:bg-red-700 disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}