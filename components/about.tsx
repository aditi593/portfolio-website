"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-40 sm:mb-56 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-6 text-lg sm:text-xl">
        I’m a <span className="font-semibold">Data-driven Software Engineer</span>{' '}
        currently pursuing a <span className="font-semibold">Master’s in Data Science</span>{' '}
        at <span className="font-semibold">Arizona State University</span>.{' '}
        Over <span className="font-semibold">2+ years at FIS</span>, I engineered
        secure, high-performance applications—optimizing CI/CD pipelines,
        hardening code against vulnerabilities, and building analytics features
        that scaled to enterprise traffic.
      </p>

      <p className="mb-6 text-lg sm:text-xl">
        My toolbox includes <span className="font-semibold">Python, R, SQL</span>,{' '}
        and machine learning frameworks like
        <span className="font-semibold"> TensorFlow, Keras, and PyTorch</span>.{' '}
        I’ve delivered projects spanning
        <span className="font-semibold"> predictive modeling, deep learning,
        data visualization, and full-stack web apps</span>—turning complex datasets
        into actionable insights and production-ready solutions.
      </p>

      <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
        Fun fact: I debug faster with a strong cup of coffee ☕ fueling the next big idea.
      </p>
    </motion.section>
  );
}
