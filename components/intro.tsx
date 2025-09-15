"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // subtle floating dots for background
  const dots = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    delay: Math.random() * 3,
  }));

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* ✨ floating dots */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {dots.map((dot) => (
          <motion.span
            key={dot.id}
            className="absolute block h-[3px] w-[3px] rounded-full bg-white/20"
            style={{ top: dot.top, left: dot.left }}
            animate={{
              y: [0, -6, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Profile Image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="relative cursor-pointer"
          >
            <div className="p-[6px] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              <Image
                src="/aditi.jpg"
                alt="Aditi portrait"
                width={400}
                height={400}
                quality={95}
                priority
                className="h-64 w-64 sm:h-80 sm:w-80 object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Intro Text */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I’m Aditi Thakre</span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">
          <Typewriter
            words={["Software Developer", "Data Enthusiast"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </motion.h1>

      {/* Buttons / Links */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
                     focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
                     hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        {/* LinkedIn */}
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full
                     focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
                     borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/aditi-thakre/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* GitHub */}
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
                     focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
                     transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/aditi593"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        {/* Email */}
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full
                     focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
                     borderBlack dark:bg-white/10 dark:text-white/60"
          href="mailto:aditi13thakre@gmail.com"
          aria-label="Email Aditi"
        >
          <BsEnvelope />
        </a>

        {/* Location */}
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full
                     focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
                     borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.google.com/maps?q=Tempe,+Arizona"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tempe, Arizona"
        >
          <BsGeoAlt />
        </a>
      </motion.div>
    </section>
  );
}
