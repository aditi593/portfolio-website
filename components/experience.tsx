"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-5xl mx-auto px-4"
    >
      <SectionHeading>Work Experience</SectionHeading>

      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-8 mt-12">
        {experiencesData.map((item, index) => (
          <div key={index} className="relative flex gap-8 mb-16">
            {/* Left column: role / date / location */}
            <div className="w-[14rem] text-right pr-6 shrink-0">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.date}
              </p>
              <p className="text-xs italic text-gray-400 dark:text-gray-500">
                {item.location}
              </p>
            </div>

            {/* Timeline icon with embedded logo */}
            <div className="absolute left-[-1.75rem] top-1/2 -translate-y-1/2">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 shadow-md
                  ${theme === "light" ? "bg-white border-gray-300" : "bg-gray-800 border-gray-600"}`}
              >
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right column: company + bullet points */}
            <div className="flex-1">
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:underline"
                >
                  {item.company}
                </a>
              ) : (
                <p className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {item.company}
                </p>
              )}

              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {item.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
