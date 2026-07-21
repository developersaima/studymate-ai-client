import Container from "@/components/shared/Container";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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

async function getPlan(id: string): Promise<StudyPlan | null> {
  try {
    const res = await fetch(`${API_URL}/api/plans/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function StudyPlanDetails({ params }: Props) {
  const { id } = await params;
  const plan = await getPlan(id);

  if (!plan) {
    return (
      <Container>
        <div className="mx-auto max-w-4xl py-16">
          <Link href="/explore" className="text-blue-600 hover:underline">
            ← Back to Explore
          </Link>
          <div className="mt-8 rounded-2xl border p-8 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-red-600">
              Study Plan Not Found
            </h1>
            <p className="mt-2 text-gray-600">
              The study plan you are looking for does not exist or was removed.
            </p>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mx-auto max-w-4xl py-16">
        <Link href="/explore" className="text-blue-600 hover:underline">
          ← Back to Explore
        </Link>

        <div className="mt-8 rounded-2xl border p-8 shadow-sm">
          <h1 className="text-4xl font-bold">{plan.title}</h1>

          <p className="mt-5 text-gray-600">{plan.description}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-5">
              <p className="text-gray-500">Goal</p>
              <h3 className="mt-2 font-semibold">{plan.goal}</h3>
            </div>

            <div className="rounded-xl border p-5">
              <p className="text-gray-500">Duration</p>
              <h3 className="mt-2 font-semibold">{plan.duration}</h3>
            </div>

            <div className="rounded-xl border p-5">
              <p className="text-gray-500">Created By</p>
              <h3 className="mt-2 font-semibold">{plan.userEmail}</h3>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Goal Details</h2>
            <p className="mt-4 whitespace-pre-wrap leading-8 text-gray-700">
              {plan.goal}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}