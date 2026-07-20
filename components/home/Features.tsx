"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaBookOpen,
  FaComments,
  FaChartLine,
  FaRoute,
  FaCloud,
} from "react-icons/fa";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";

const features = [
  {
    icon: <FaRobot size={30} />,
    title: "AI Study Planner",
    description:
      "Generate personalized study plans based on your learning goals.",
  },
  {
    icon: <FaBookOpen size={30} />,
    title: "AI Notes Generator",
    description:
      "Create clean and organized notes from any study topic instantly.",
  },
  {
    icon: <FaComments size={30} />,
    title: "AI Chat Assistant",
    description:
      "Ask questions and receive smart answers from your AI tutor.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Progress Tracking",
    description:
      "Monitor your study progress with visual analytics and insights.",
  },
  {
    icon: <FaRoute size={30} />,
    title: "Learning Roadmap",
    description:
      "Build a structured roadmap to achieve your learning objectives.",
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud Sync",
    description:
      "Access your study plans and notes securely from anywhere.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Powerful AI Features"
          description="Everything you need to plan, organize and accelerate your learning journey with AI."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}