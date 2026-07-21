"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface StudyPlan {
  _id: string;
  title: string;
  description: string;
  goal: string;
  duration: string;
  userEmail: string;
  createdAt: string;
}

interface ExploreClientProps {
  initialPlans?: StudyPlan[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ExploreClient({ initialPlans = [] }: ExploreClientProps) {
  const [search, setSearch] = useState("");
  const [plans, setPlans] = useState<StudyPlan[]>(initialPlans);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const query = search ? `?search=${encodeURIComponent(search)}` : "";
        const res = await fetch(`${API_URL}/api/plans${query}`);
        if (res.ok) {
          const data: StudyPlan[] = await res.json();
          setPlans(data);
        }
      } catch (error) {
        console.error("Failed to fetch study plans:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchPlans();
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Search study plan by title or goal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading && (
        <div className="mt-8 text-center text-gray-500">
          Searching study plans...
        </div>
      )}

      {!loading && plans.length === 0 && (
        <div className="mt-8 rounded-xl border p-8 text-center text-gray-500">
          No study plans found matching your search.
        </div>
      )}

      {!loading && plans.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className="flex flex-col justify-between rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h2 className="text-xl font-bold">{plan.title}</h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {plan.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {plan.duration}
                  </span>
                </div>
              </div>

              <Link
                href={`/explore/${plan._id}`}
                className="mt-6 inline-block font-medium text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}