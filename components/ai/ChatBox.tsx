"use client";

import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaRobot, FaUser, FaSpinner, FaTrashAlt, FaLightbulb, FaExclamationTriangle } from "react-icons/fa";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

const suggestedPrompts = [
  "How do I create a study schedule for finals?",
  "Explain the difference between SQL and NoSQL.",
  "What are effective techniques for active recall?",
];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chat, setChat] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "ai",
      text: "Hello! I'm your AI Study Assistant. What topic or concept would you like help with today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, isLoading]);

  const handleSend = async (inputMessage?: string) => {
    const textToSend = inputMessage || message;
    if (!textToSend.trim() || isLoading) return;

    setError(null);
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // 1. Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: time,
    };

    const updatedHistory = [...chat, userMsg];
    setChat(updatedHistory);
    if (!inputMessage) setMessage("");
    setIsLoading(true);

    try {
      // 2. Send Request directly to Express Backend API
      const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          // Sending history context formatted as expected by Express endpoint
          history: updatedHistory.slice(-6).map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned error status: ${response.status}`);
      }

      const data = await response.json();

      // 3. Add AI Response
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: data.reply || "Sorry, I couldn't process that request.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setChat((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please check if your Express backend server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setError(null);
    setChat([
      {
        id: "welcome-reset",
        sender: "ai",
        text: "Chat cleared! How else can I assist your study session?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[520px] w-full bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b px-6 py-3 bg-slate-50/50">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
            AI Assistant Active
          </span>
        </div>

        {chat.length > 1 && (
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition cursor-pointer"
            title="Clear Chat History"
          >
            <FaTrashAlt size={12} />
            <span>Clear Chat</span>
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {chat.map((msg) => {
          const isUser = msg.sender === "user";

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                isUser ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isUser
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-blue-600 border border-slate-200"
                }`}
              >
                {isUser ? <FaUser size={12} /> : <FaRobot size={14} />}
              </div>

              <div
                className={`group relative max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  isUser
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/60"
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <span
                  className={`block text-[10px] mt-1.5 ${
                    isUser ? "text-blue-200 text-right" : "text-slate-400"
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {/* Loading */}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-600 border border-slate-200">
              <FaRobot size={14} />
            </div>
            <div className="rounded-2xl rounded-tl-none bg-slate-100 border border-slate-200/60 px-4 py-3 text-slate-500 flex items-center gap-2 text-xs font-medium">
              <FaSpinner className="animate-spin text-blue-600" />
              <span>AI is thinking...</span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-100">
            <FaExclamationTriangle className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts */}
      {chat.length <= 2 && (
        <div className="px-6 pb-2">
          <p className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1">
            <FaLightbulb className="text-amber-500" /> Suggested prompts:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="text-xs bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5 transition text-left cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask AI anything about your studies..."
            disabled={isLoading}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50"
          />

          <button
            onClick={() => handleSend()}
            disabled={!message.trim() || isLoading}
            className="flex items-center justify-center h-11 px-5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition cursor-pointer shrink-0"
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <FaPaperPlane size={14} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}