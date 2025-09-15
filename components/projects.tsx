"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      {/* 👉 Use a responsive grid */}
      <div
        className="
          grid gap-6 mt-8
          sm:grid-cols-2      /* 2 cards per row on small screens */
          lg:grid-cols-4      /* 4 cards per row on large screens */
        "
      >
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
