import Container from "@/components/shared/Container";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function getPlan(id: string) {
  const res = await fetch(`http://localhost:5000/api/plans/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch study plan");
  }

  return res.json();
}

export default async function StudyPlanDetails({ params }: Props) {
  const { id } = await params;

  const plan = await getPlan(id);

  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">

        <Link
          href="/explore"
          className="text-blue-600 hover:underline"
        >
          ← Back to Explore
        </Link>

        <div className="mt-8 rounded-2xl border p-8 shadow-sm">

          <h1 className="text-4xl font-bold">
            {plan.title}
          </h1>

          <p className="mt-5 text-gray-600">
            {plan.description}
          </p>

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
              <h3 className="mt-2 font-semibold">
                {plan.userEmail}
              </h3>
            </div>

          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">
              Description
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              {plan.description}
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
}