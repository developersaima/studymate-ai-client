import Container from "@/components/shared/Container";
import ExploreClient from "@/components/explore/ExploreClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

async function getInitialPlans() {
  try {
    const res = await fetch(`${API_URL}/api/plans`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function ExplorePage() {
  const initialPlans = await getInitialPlans();

  return (
    <Container>
      <div className="py-16">
        <h1 className="text-4xl font-bold">Explore Study Plans</h1>
        <ExploreClient initialPlans={initialPlans} />
      </div>
    </Container>
  );
}