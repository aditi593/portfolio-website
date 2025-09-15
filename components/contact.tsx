"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 mt-4 text-lg dark:text-white/80">
        I’d love to connect!  
        Reach me directly at{" "}
        <a
          className="underline text-purple-600 dark:text-purple-400 hover:text-purple-500"
          href="mailto:aditi13thakre@gmail.com"
        >
          aditi13thakre@gmail.com
        </a>
      </p>
    </motion.section>
  );
}
