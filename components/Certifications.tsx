"use client";

import { certificationsData } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-6xl mx-auto px-4"
    >
      <h2 className="text-center text-3xl font-bold mb-12">
        Licenses & Certifications
      </h2>

      {/* ✅ Flex row: wraps if screen is too small */}
      <ul className="flex flex-wrap justify-center gap-6">
        {certificationsData.map((cert, index) => (
          <li
            key={index}
            className="w-64 rounded-xl bg-white p-6 shadow-md dark:bg-gray-800 dark:text-white
                       transition hover:-translate-y-1 hover:shadow-lg text-center"
          >
            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400"
              >
                {cert.title}
              </a>
            ) : (
              <span className="block font-semibold text-gray-800 dark:text-white">
                {cert.title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
