"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <Container>
        <div className="grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 AI Powered Study Platform
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Study Smarter
              <span className="block text-blue-600">
                With StudyMate AI
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Generate AI study plans, create smart notes, chat with an AI
              assistant, and organize your learning journey in one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                href="/explore"
                className="rounded-xl border border-blue-600 px-7 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Explore
              </Link>
            </div>

            <div className="mt-10 flex gap-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-600">5K+</h2>
                <p className="text-gray-600">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">12K+</h2>
                <p className="text-gray-600">AI Plans</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">98%</h2>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  AI Study Planner
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Active
                </span>
              </div>

              <div className="space-y-4">

                <div className="rounded-xl bg-slate-100 p-4">
                  📘 Learn React.js
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  🤖 AI Generated Notes
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  📅 Weekly Study Plan
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  📝 Practice Quiz
                </div>

              </div>

              <button
                className="
                mt-8
                w-full
                rounded-xl
                bg-blue-600
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                "
              >
                Generate New Plan
              </button>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}