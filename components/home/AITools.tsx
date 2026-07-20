"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaComments,
  FaFileAlt,
} from "react-icons/fa";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";

const aiTools = [
  {
    icon: <FaRobot size={28} />,
    title: "AI Study Planner",
    description:
      "Generate a personalized study roadmap based on your goals, available time, and skill level.",
    badge: "Most Popular",
  },
  {
    icon: <FaComments size={28} />,
    title: "AI Chat Assistant",
    description:
      "Ask study-related questions, get explanations, and receive follow-up guidance instantly.",
    badge: "24/7 Assistant",
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "AI Notes Generator",
    description:
      "Turn any topic into clean, structured, and easy-to-understand study notes in seconds.",
    badge: "Fast",
  },
];

export default function AITools() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="AI Tools That Make Learning Easier"
          description="StudyMate AI combines powerful AI features to help you learn faster, stay organized, and improve your productivity."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  {tool.icon}
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {tool.badge}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {tool.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {tool.description}
              </p>

              <button
                className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Try Now
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}