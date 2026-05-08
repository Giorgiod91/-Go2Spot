"use client";
import React from "react";
import { motion } from "motion/react";

const highlights = [
  {
    emoji: "🗺️",
    title: "Plan at Your Own Pace",
    text: "No group decisions. Build your itinerary around what you actually want to see.",
  },
  {
    emoji: "📍",
    title: "Find Solo-Friendly Spots",
    text: "Curated places that are easy to navigate, safe, and worth every step.",
  },
  {
    emoji: "🤝",
    title: "Meet Like-Minded Travelers",
    text: "Connect with others who are exploring the same city at the same time.",
  },
];

function SoloTravel() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#fecaca]/30 bg-[#fecaca]/10 px-4 py-1.5 text-sm font-medium text-[#fecaca]"
      >
        ✈️ Solo Travel Mode
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl text-center text-4xl font-bold leading-tight text-neutral-800 sm:text-5xl dark:text-slate-200"
      >
        Travel on your terms.{" "}
        <span className="text-[#fecaca]">No compromises.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-center text-lg text-neutral-600 dark:text-neutral-400"
      >
        Go2Spot is built for solo explorers — get personalized recommendations
        based on your vibe, not anyone else&apos;s.
      </motion.p>

      <div className="mt-14 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
          >
            <span className="text-4xl">{h.emoji}</span>
            <h3 className="mt-4 text-lg font-semibold text-neutral-800 dark:text-neutral-100">
              {h.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {h.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SoloTravel;
