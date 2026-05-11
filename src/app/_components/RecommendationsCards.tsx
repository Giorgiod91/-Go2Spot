"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Vibe = "Adventure" | "Relaxation" | "Nightlife";
type GroupSize = "Solo" | "Small Group" | "Large Group";

const VIBES: Array<{ id: Vibe; label: string; description: string; img: string; emoji: string }> = [
  {
    id: "Adventure",
    label: "Adventure",
    description: "Hiking, outdoor activities & thrill",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    emoji: "🥾",
  },
  {
    id: "Relaxation",
    label: "Relaxation",
    description: "Beaches, spas & peaceful escapes",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    emoji: "🌅",
  },
  {
    id: "Nightlife",
    label: "Nightlife",
    description: "Bars, clubs & late-night vibes",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    emoji: "🎉",
  },
];

const GROUP_SIZES: Array<{ id: GroupSize; label: string; description: string; img: string; emoji: string }> = [
  {
    id: "Solo",
    label: "Solo",
    description: "Just you and the city",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    emoji: "🚶",
  },
  {
    id: "Small Group",
    label: "Small Group",
    description: "2–4 people, the perfect crew",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    emoji: "👫",
  },
  {
    id: "Large Group",
    label: "Large Group",
    description: "5+ people, party mode on",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    emoji: "🎊",
  },
];

const RESULTS: Record<Vibe, Record<GroupSize, { title: string; body: string }>> = {
  Adventure: {
    Solo: {
      title: "The Lone Explorer",
      body: "Head out solo — discover hidden trails, challenge yourself, and find the best panoramic viewpoints no one else knows about.",
    },
    "Small Group": {
      title: "Crew of Adventurers",
      body: "Hit the trails together — perfect for outdoor hikes, spontaneous detours, and sharing the best views with the people you love.",
    },
    "Large Group": {
      title: "The Pack",
      body: "Organise a group expedition through parks, forests, and elevated city-escape viewpoints. The more the merrier.",
    },
  },
  Relaxation: {
    Solo: {
      title: "Solo Retreat",
      body: "Me-time is the best time — find peaceful cafés, quiet parks, and unhurried neighbourhood walks at your own pace.",
    },
    "Small Group": {
      title: "Easy Evenings",
      body: "Enjoy relaxed city strolls, wine bars, cosy restaurants, and sunset spots with your favourite people.",
    },
    "Large Group": {
      title: "Group Getaway",
      body: "Book a rooftop terrace or organise a beautiful park picnic — unwind together in style without the rush.",
    },
  },
  Nightlife: {
    Solo: {
      title: "Night Owl Solo",
      body: "Dive into the bar scene alone — the best way to meet locals, discover hidden spots, and dance till the city sleeps.",
    },
    "Small Group": {
      title: "Night Crew",
      body: "Bar hop through the best neighbourhoods — pre-drinks at a craft-beer spot, cocktails, then the clubs.",
    },
    "Large Group": {
      title: "Party Mode",
      body: "Reserve a table at the hottest club or rooftop bar — the whole crew is here, and the city is your playground.",
    },
  },
};

const VIBE_ICONS: Record<Vibe, string> = {
  Adventure: "🥾",
  Relaxation: "🌅",
  Nightlife: "🎉",
};

export default function RecommendationsCards() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [vibe, setVibe] = useState<Vibe | null>(null);
  const [groupSize, setGroupSize] = useState<GroupSize | null>(null);

  const result = vibe && groupSize ? RESULTS[vibe][groupSize] : null;

  const handleVibeSelect = (v: Vibe) => {
    setVibe(v);
    setStep(2);
  };

  const handleGroupSelect = (g: GroupSize) => {
    setGroupSize(g);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setVibe(null);
    setGroupSize(null);
  };

  return (
    <div className="w-full">
      {/* Step progress */}
      <div className="mb-10 flex items-center justify-center gap-3">
        {([1, 2, 3] as const).map((s) => (
          <React.Fragment key={s}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                s < step
                  ? "bg-[#7F5AF0] text-white"
                  : s === step
                    ? "bg-[#7F5AF0] text-white ring-4 ring-[#7F5AF0]/20"
                    : "bg-slate-100 text-slate-400"
              }`}
            >
              {s < step ? "✓" : s}
            </div>
            {s < 3 && (
              <div
                className={`h-0.5 w-16 rounded-full transition-all duration-500 ${s < step ? "bg-[#7F5AF0]" : "bg-slate-100"}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1 — Vibe */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#7F5AF0]">
              Step 1 of 2 — Choose Your Vibe
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {VIBES.map((v) => (
                <button
                  key={v.id}
                  onClick={() => handleVibeSelect(v.id)}
                  className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F5AF0]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={v.img}
                      alt={v.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                      <p className="mb-0.5 text-2xl">{v.emoji}</p>
                      <p className="text-lg font-bold text-white">{v.label}</p>
                      <p className="text-xs text-white/70">{v.description}</p>
                    </div>
                    {/* Hover ring */}
                    <div className="absolute inset-0 rounded-2xl ring-0 ring-[#7F5AF0] transition-all duration-300 group-hover:ring-2" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2 — Group Size */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#7F5AF0]">
              Step 2 of 2 — Who Are You Traveling With?
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {GROUP_SIZES.map((g) => (
                <button
                  key={g.id}
                  onClick={() => handleGroupSelect(g.id)}
                  className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F5AF0]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={g.img}
                      alt={g.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                      <p className="mb-0.5 text-2xl">{g.emoji}</p>
                      <p className="text-lg font-bold text-white">{g.label}</p>
                      <p className="text-xs text-white/70">{g.description}</p>
                    </div>
                    <div className="absolute inset-0 rounded-2xl ring-0 ring-[#7F5AF0] transition-all duration-300 group-hover:ring-2" />
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-5 text-center">
              <button
                onClick={() => setStep(1)}
                className="text-sm text-slate-400 transition-colors hover:text-slate-600"
              >
                ← Back
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3 — Result */}
        {step === 3 && result && vibe && groupSize && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-lg"
          >
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#7F5AF0] to-[#5b3dbf] p-[2px] shadow-2xl shadow-[#7F5AF0]/30">
              <div className="rounded-[calc(1.5rem-2px)] bg-white px-8 py-10 text-center">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7F5AF0]/10 text-3xl">
                  {VIBE_ICONS[vibe]}
                </div>
                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-[#7F5AF0]/10 px-3 py-1 text-xs font-semibold text-[#7F5AF0]">
                    {vibe}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {groupSize}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-800">
                  {result.title}
                </h3>
                <p className="leading-relaxed text-slate-500">{result.body}</p>

                <button
                  onClick={() =>
                    document
                      .getElementById("explore")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7F5AF0] to-[#5b3dbf] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#7F5AF0]/30 transition hover:opacity-90 active:scale-[0.97]"
                >
                  Explore matching spots ✨
                </button>

                <div className="mt-5">
                  <button
                    onClick={handleReset}
                    className="text-sm text-slate-400 transition-colors hover:text-slate-600"
                  >
                    Start over
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
