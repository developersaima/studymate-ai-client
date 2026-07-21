export interface StudyPlan {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  author: string;
  createdAt: string;
}

export const studyPlans: StudyPlan[] = [
  {
    id: "1",
    title: "Complete Web Development Roadmap 2026",
    category: "Web Development",
    description: "Master HTML, CSS, JavaScript, React, and Next.js from scratch to build full-stack web applications.",
    duration: "6 Months",
    author: "Saima Akter",
    createdAt: "2026-01-15",
  },
  {
    id: "2",
    title: "Data Structures & Algorithms in C++",
    category: "Computer Science",
    description: "Comprehensive guide for mastering DSA, recursion, dynamic programming, and solving LeetCode problems.",
    duration: "4 Months",
    author: "Saima Akter",
    createdAt: "2026-02-10",
  },
  {
    id: "3",
    title: "Machine Learning & AI Foundations",
    category: "Data Science",
    description: "Learn Python, Pandas, NumPy, Scikit-Learn, and Neural Networks with practical hands-on projects.",
    duration: "5 Months",
    author: "Alex Johnson",
    createdAt: "2026-03-01",
  },
  {
    id: "4",
    title: "Database Management Systems (DBMS) & SQL",
    category: "Database",
    description: "Master relational databases, ER diagrams, normalization, and advanced SQL querying Techniques.",
    duration: "2 Months",
    author: "Saima Akter",
    createdAt: "2026-03-20",
  },
  {
    id: "5",
    title: "UI/UX Design Essentials with Figma",
    category: "Design",
    description: "Understand design principles, wireframing, interactive prototyping, and modern UI systems.",
    duration: "3 Months",
    author: "Sarah Chen",
    createdAt: "2026-04-05",
  },
];