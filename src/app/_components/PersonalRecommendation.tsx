"use client";

import React from "react";
import { motion } from "motion/react";
import RecommendationsCards from "./RecommendationsCards";

function PersonalRecommendation() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center text-4xl font-bold leading-tight text-neutral-800 sm:text-5xl dark:text-slate-200"
      >
        Personalize Your{" "}
        <span className="text-[#fecaca]">Experience</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 max-w-xl text-center text-lg text-neutral-600 dark:text-neutral-400"
      >
        Answer a few questions to get tailored recommendations just for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 w-full max-w-3xl"
      >
        <RecommendationsCards />
      </motion.div>
    </section>
  );
}

export default PersonalRecommendation;
