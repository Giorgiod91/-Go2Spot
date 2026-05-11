"use client";

import React from "react";
import { motion } from "motion/react";
import { LandingPageCards } from "./LandingPageCards";

const cards = [
  {
    title: "Pick a Vibe",
    src: "/vibe.png",
    desc: "Choose an activity — hiking, bars, museums, food, nightlife and more.",
  },
  {
    title: "Browse Spots",
    src: "/cards1.png",
    desc: "See top-rated places with images, tags, and ratings across 5 cities.",
  },
  {
    title: "See on Map",
    src: "/map.png",
    desc: "Pin any spot and instantly see it on an interactive Google Map.",
  },
];

function LandingPage() {
  const scrollToExplore = () =>
    document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-6 py-24 text-slate-800">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#7F5AF0]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#FF49DB]/6 blur-3xl" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7F5AF0]/20 bg-[#7F5AF0]/8 px-4 py-1.5 text-xs font-semibold text-[#7F5AF0] uppercase tracking-widest"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#7F5AF0] animate-pulse" />
        5 Cities · 25+ Spots · Live Map
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="max-w-3xl text-center text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl"
      >
        Discover the{" "}
        <span className="bg-gradient-to-r from-[#7F5AF0] to-[#FF49DB] bg-clip-text text-transparent">
          best spots
        </span>{" "}
        in any city.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="mt-6 max-w-xl text-center text-lg leading-relaxed text-slate-500"
      >
        Go2Spot finds beautiful places, hidden gems, and photo-worthy views — filtered by your vibe, pinned on a live map.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          onClick={scrollToExplore}
          className="rounded-xl bg-[#7F5AF0] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#7F5AF0]/25 transition hover:bg-[#6d46e8] hover:-translate-y-0.5"
        >
          Start Exploring →
        </button>
        <button
          onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
          className="rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:border-[#7F5AF0]/40 hover:text-[#7F5AF0]"
        >
          🗺️ Open Map
        </button>
      </motion.div>

      {/* Activity pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-8 flex flex-wrap justify-center gap-2"
      >
        {[
          { e: "🥾", l: "Hiking" },
          { e: "🍺", l: "Bar & Beer" },
          { e: "🍕", l: "Food" },
          { e: "🏛️", l: "Museums" },
          { e: "🌿", l: "Parks" },
          { e: "🎉", l: "Nightlife" },
          { e: "📸", l: "Photo Spots" },
          { e: "🏰", l: "Sightseeing" },
        ].map((v) => (
          <span
            key={v.l}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
          >
            {v.e} {v.l}
          </span>
        ))}
      </motion.div>

      {/* How it works */}
      <section className="mt-28 w-full max-w-5xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-700">
          How It Works
        </h2>
        <LandingPageCards cards={cards} />
      </section>
    </div>
  );
}

export default LandingPage;
