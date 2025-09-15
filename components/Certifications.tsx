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

      <ul className="flex flex-wrap justify-center gap-8">
        {certificationsData.map((cert, index) => (
          <li
            key={index}
            className="w-72 sm:w-64 group"
          >
            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-xl bg-white dark:bg-gray-800 shadow-md 
                           p-6 text-center transition-all duration-300
                           hover:scale-105 hover:shadow-xl dark:text-white"
              >
                <span className="block font-semibold text-gray-800 dark:text-white 
                                  group-hover:text-purple-500 dark:group-hover:text-purple-400">
                  {cert.title}
                </span>
              </a>
            ) : (
              <div
                className="block h-full rounded-xl bg-white dark:bg-gray-800 shadow-md 
                           p-6 text-center dark:text-white"
              >
                <span className="block font-semibold text-gray-800 dark:text-white">
                  {cert.title}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
