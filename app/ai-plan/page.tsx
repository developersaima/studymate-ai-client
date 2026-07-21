"use client";

import { useState } from "react";
import {
  FaMagic,
  FaBookOpen,
  FaClock,
  FaCalendarAlt,
  FaBullseye,
  FaCheckCircle,
  FaSpinner,
  FaLightbulb,
  FaExclamationTriangle,
  FaTasks,
} from "react-icons/fa";

interface AIWeekPlan {
  week: number;
  topics: string[];
  tasks: string[];
}

interface AIPlanResponse {
  subject: string;
  goal: string;
  duration: string;
  weeks: AIWeekPlan[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AiPlanPage() {
  const [subject, setSubject] = useState("");
  const [goal, setGoal] = useState("");
  const [dailyStudyTime, setDailyStudyTime] = useState("2 Hours");
  const [duration, setDuration] = useState("4 Weeks");

  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [generatedPlan, setGeneratedPlan] = useState<AIPlanResponse | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim()) return;

    setIsGenerating(true);
    setErrorMsg(null);

    try {
      // Calls Express backend API route
      const response = await fetch(`${API_BASE_URL}/api/ai/generate-plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          goal,
          dailyStudyTime,
          duration,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate AI plan from backend");
      }

      setGeneratedPlan(data as AIPlanResponse);
    } catch (err: any) {
      setErrorMsg(
        err.message || "An unexpected error occurred. Make sure your Express server is running."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 border border-blue-100">
            <FaMagic /> StudyMate AI Generator
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Generate Your AI Study Plan
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
            Enter what you want to study and your schedule — our Groq-powered AI will map out your weekly breakdown.
          </p>
        </div>

        {/* Input Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <FaBookOpen className="text-blue-600" /> Subject or Topic
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Next.js 15, Organic Chemistry, Data Structures"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Goal */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <FaBullseye className="text-blue-600" /> Target Goal
                </label>
                <input
                  type="text"
                  required
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Pass semester exam, Build fullstack projects"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Daily Study Time */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <FaClock className="text-blue-600" /> Daily Study Time
                </label>
                <select
                  value={dailyStudyTime}
                  onChange={(e) => setDailyStudyTime(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option value="1 Hour">1 Hour / day</option>
                  <option value="2 Hours">2 Hours / day</option>
                  <option value="3 Hours">3 Hours / day</option>
                  <option value="4+ Hours">4+ Hours / day</option>
                </select>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-600" /> Total Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option value="1 Week">1 Week</option>
                  <option value="2 Weeks">2 Weeks</option>
                  <option value="4 Weeks">4 Weeks (1 Month)</option>
                  <option value="8 Weeks">8 Weeks (2 Months)</option>
                </select>
              </div>
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-xs text-red-600 border border-red-100">
                <FaExclamationTriangle className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isGenerating || !subject.trim() || !goal.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 disabled:opacity-50 transition cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <FaSpinner className="animate-spin" /> Generating Plan...
                </>
              ) : (
                <>
                  <FaMagic /> Generate AI Plan
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Display */}
        {generatedPlan && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-100 pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {generatedPlan.subject} Study Plan
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Goal: <strong>{generatedPlan.goal}</strong>
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-700 border shadow-sm">
                    ⏱️ {generatedPlan.duration}
                  </span>
                </div>
              </div>

              {/* Weekly Breakdown */}
              <div className="grid gap-4 mt-6">
                {generatedPlan.weeks.map((weekItem) => (
                  <div
                    key={weekItem.week}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-lg bg-blue-600 text-white px-2.5 py-1 text-xs font-bold">
                        Week {weekItem.week}
                      </span>
                    </div>

                    {/* Key Topics */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <FaLightbulb className="text-amber-500" /> Key Topics
                      </p>
                      <ul className="space-y-1.5 pl-2 text-sm text-slate-700">
                        {weekItem.topics.map((topic, tidx) => (
                          <li key={tidx} className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1 text-blue-500 shrink-0" size={12} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Tasks */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <FaTasks className="text-blue-500" /> Weekly Tasks
                      </p>
                      <ul className="space-y-1.5 pl-2 text-sm text-slate-600">
                        {weekItem.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}