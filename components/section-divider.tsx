"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    // ✅ Keep the spacing (my-24) but remove the thin vertical bar
    <motion.div
      className="my-24 hidden sm:block"   // only margin, no bg/width/height
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
