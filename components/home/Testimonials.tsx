import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "CSE Student",
    review:
      "StudyMate AI helped me organize my study routine and improved my productivity significantly.",
  },
  {
    name: "Rakib Hasan",
    role: "Engineering Student",
    review:
      "The AI Study Planner saved me a lot of time before my semester final exams.",
  },
  {
    name: "Nusrat Jahan",
    role: "Diploma Student",
    review:
      "The AI Chat Assistant explains difficult topics in a very simple way.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="What Students Say"
          description="Thousands of students trust StudyMate AI every day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="mb-5 text-4xl">⭐️⭐️⭐️⭐️⭐️</div>

              <p className="leading-7 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold">{item.name}</h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}