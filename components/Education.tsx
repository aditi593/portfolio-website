"use client";

import Image from "next/image";
import { educationData } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-6xl mx-auto px-4"
    >
      <h2 className="text-center text-3xl font-bold mb-12">Education</h2>

      {/* Responsive grid */}
      <ul className="grid gap-10 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <li
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* School logo + name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {edu.school}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.degree}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {edu.period} • {edu.grade}
                </p>
              </div>
            </div>

            {/* Key Courses */}
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                Key Courses
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                {edu.courses.slice(0, 4).map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
