"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";

const data = [
  {
    month: "Jan",
    users: 120,
  },
  {
    month: "Feb",
    users: 260,
  },
  {
    month: "Mar",
    users: 430,
  },
  {
    month: "Apr",
    users: 650,
  },
  {
    month: "May",
    users: 880,
  },
  {
    month: "Jun",
    users: 1200,
  },
];

export default function Statistics() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Our Growing Community"
          description="StudyMate AI continues to help thousands of students improve their learning experience every month."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-3xl border bg-blue-50 p-8">
              <h2 className="text-4xl font-bold text-blue-600">
                12K+
              </h2>

              <p className="mt-2 text-gray-600">
                Registered Students
              </p>
            </div>

            <div className="rounded-3xl border bg-green-50 p-8">
              <h2 className="text-4xl font-bold text-green-600">
                35K+
              </h2>

              <p className="mt-2 text-gray-600">
                AI Study Plans
              </p>
            </div>

            <div className="rounded-3xl border bg-orange-50 p-8">
              <h2 className="text-4xl font-bold text-orange-600">
                96%
              </h2>

              <p className="mt-2 text-gray-600">
                Success Rate
              </p>
            </div>

            <div className="rounded-3xl border bg-purple-50 p-8">
              <h2 className="text-4xl font-bold text-purple-600">
                24/7
              </h2>

              <p className="mt-2 text-gray-600">
                AI Assistant
              </p>
            </div>

          </div>

          {/* Right */}

          <div className="h-[420px] rounded-3xl border bg-white p-6 shadow-sm">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={data}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="users"
                  radius={[8, 8, 0, 0]}
                  fill="#2563eb"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>
      </Container>
    </section>
  );
}