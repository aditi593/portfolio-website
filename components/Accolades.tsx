"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { accoladesData } from "@/lib/data";       // <-- make sure accoladesData is exported from lib/data.ts
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Accolades() {
  const { ref } = useSectionInView("Accolades");

  return (
    <section
      ref={ref}
      id="accolades"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      {/* ✅ Heading */}
      <SectionHeading>Accolades</SectionHeading>

      {/* ✅ Horizontal layout with scroll on smaller screens */}
      <ul className="flex flex-row justify-center gap-6 overflow-x-auto no-scrollbar mt-6">
        {accoladesData.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center min-w-[150px] rounded-xl bg-white p-4 shadow-md dark:bg-gray-800"
          >
            {item.imageUrl && (
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={100}
                height={100}
                className="mb-3 object-contain"
              />
            )}
            <h3 className="font-semibold text-center text-sm">
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
