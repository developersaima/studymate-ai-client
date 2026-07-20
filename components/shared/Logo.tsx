import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="bg-blue-600 p-2 rounded-xl text-white">
<FaGraduationCap size={22} />      </div>

      <div>
        <h2 className="font-bold text-xl">
          StudyMate
        </h2>

        <p className="text-xs text-gray-500">
          AI
        </p>
      </div>
    </Link>
  );
}