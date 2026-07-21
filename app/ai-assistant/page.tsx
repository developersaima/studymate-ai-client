import Container from "@/components/shared/Container";
import ChatBox from "@/components/ai/ChatBox";
import { FaRobot, FaGraduationCap, FaBrain } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function AIChatPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/50 py-10 sm:py-12">
      <Container>
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 border border-blue-100">
              <FaRobot className="text-blue-600" />
              <span>24/7 Academic Support</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              AI Study Assistant
            </h1>

            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Ask questions, clarify tricky concepts, summarize study materials, or get instant help tailored to your learning pace.
            </p>
          </div>

          {/* Quick Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaStar size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-800">Instant Answers</p>
                <p className="text-[11px] text-slate-500">Solve doubts in seconds</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <FaBrain size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-800">Step-by-Step</p>
                <p className="text-[11px] text-slate-500">Detailed explanations</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <FaGraduationCap size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-800">Subject Adaptive</p>
                <p className="text-[11px] text-slate-500">Tailored to your goal</p>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden min-h-[550px]">
            <ChatBox />
          </div>
        </div>
      </Container>
    </div>
  );
}