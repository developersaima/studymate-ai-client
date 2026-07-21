# 🎓 StudyMate AI Client

The frontend web application for **StudyMate AI** — an AI-powered smart study planner. Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, it lets students create, manage, and explore study plans, with AI-generated weekly roadmaps.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 + [Shadcn UI](https://ui.shadcn.com/)
* **Animation:** Framer Motion
* **Auth:** [Better Auth](https://www.better-auth.com/) (Google login + Email/Password) with MongoDB adapter
* **Data Fetching:** TanStack Query + Axios
* **Forms & Validation:** React Hook Form + Zod
* **Charts:** Recharts
* **Icons:** Lucide React, React Icons
* **Notifications:** Sonner
* **Theming:** next-themes (Dark Mode support)

---

## 📂 Project Structure

```text
.
├── app/                # Next.js App Router pages
├── components/
│   ├── common/         # Shared reusable UI components
│   ├── shared/
│   └── home/           # Home page sections (Hero, Features, FAQ, etc.)
├── auth/                # Better Auth configuration
├── providers/           # React context / query providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions, API clients
├── data/                 # Static/mock data
├── types/                # Shared TypeScript types
├── .env.local            # Environment configuration (not committed)
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* The **StudyMate AI Server** running (see the server's README) — or its deployed URL
* A MongoDB connection string (used by the Better Auth Mongo adapter)
* Google OAuth credentials (for Google Login)

### 2. Installation

Clone the repository and install dependencies:

```bash
cd studymate-ai-client
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:5000

# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# MongoDB (used by the Better Auth Mongo adapter)
MONGODB_URI=your_mongodb_connection_string_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 🏃 Running the App

### Development Mode

```bash
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## 📄 Key Pages

| Route | Access | Description |
| --- | --- | --- |
| `/` | Public | Home — Hero, Features, Stats, Testimonials, FAQ, Newsletter |
| `/explore` | Public | Browse public study plans, search & filter |
| `/blog` | Public | Study tips & articles |
| `/about` | Public | About the project |
| `/contact` | Public | Contact form |
| `/login`, `/register` | Public | Authentication (Email/Password + Google) |
| `/add-plan` | Protected | Create a new study plan |
| `/manage` | Protected | View, edit, and delete your own study plans |

---

## 📄 License

This project is private and intended for internal use only.