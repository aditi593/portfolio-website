"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  githubUrl,
  imageUrl,   // ✅ make sure your projectsData has imageUrl
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[20rem] border border-black/5 rounded-lg
                   overflow-hidden p-4 flex flex-col justify-between
                   hover:bg-gray-200 transition
                   dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        {/* ✅ Project Image (shorter height) */}
        {imageUrl && (
          <div className="relative w-full h-36 mb-4 rounded-md overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20rem"
            />
          </div>
        )}

        {/* Text content */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-white/70 mb-3">
            {description}
          </p>

          {/* Skill Tags */}
          <ul className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem]
                           uppercase tracking-wider text-white rounded-full
                           dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ GitHub Icon at bottom-right */}
        {githubUrl && (
          <div className="flex justify-end mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full
                         bg-gray-300/70 hover:bg-gray-400
                         dark:bg-white/20 dark:hover:bg-white/30 transition"
            >
              <FaGithub size={18} className="text-black dark:text-white" />
            </a>
          </div>
        )}
      </section>
    </motion.div>
  );
}
