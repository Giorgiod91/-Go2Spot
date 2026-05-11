"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "./ImageCard";
import { CityData, ACTIVITY_META, CITIES, type Activity } from "./HardCodedData";
import { useChoose } from "context/ChooseContext";

const FILTERS: Array<{ id: "all" | Activity; emoji: string; label: string }> = [
  { id: "all",         emoji: "✨", label: "All"         },
  { id: "hiking",      emoji: "🥾", label: "Hiking"      },
  { id: "bar",         emoji: "🍺", label: "Bar & Beer"  },
  { id: "food",        emoji: "🍕", label: "Food"        },
  { id: "museum",      emoji: "🏛️", label: "Museum"      },
  { id: "park",        emoji: "🌿", label: "Parks"       },
  { id: "nightlife",   emoji: "🎉", label: "Nightlife"   },
  { id: "photo",       emoji: "📸", label: "Photo Spots" },
  { id: "sightseeing", emoji: "🏰", label: "Sightseeing" },
];

export default function ShowCards() {
  const { activeCity, setActiveCity } = useChoose();
  const [activeFilter, setActiveFilter] = useState<"all" | Activity>("all");

  const allSpots = CityData[activeCity] ?? [];
  const spots =
    activeFilter === "all"
      ? allSpots
      : allSpots.filter((s) => s.activities.includes(activeFilter));

  return (
    <div className="flex flex-col items-center space-y-8 px-4 py-16">
      {/* Section heading */}
      <div className="text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7F5AF0]">
          Discover
        </p>
        <h2 className="max-w-2xl text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
          Explore Spots
        </h2>
        <p className="mt-3 text-slate-500">
          Pick a city and vibe — we&apos;ll show you the best places.
        </p>
      </div>

      {/* City selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {CITIES.map((city) => (
          <button
            key={city}
            onClick={() => {
              setActiveCity(city);
              setActiveFilter("all");
            }}
            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              activeCity === city
                ? "bg-[#7F5AF0] text-white shadow-md shadow-[#7F5AF0]/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {activeCity === city && (
              <motion.span
                layoutId="city-active"
                className="absolute inset-0 rounded-full bg-[#7F5AF0]"
                style={{ zIndex: -1 }}
              />
            )}
            {city}
          </button>
        ))}
      </div>

      {/* Activity filter chips */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === f.id
                  ? f.id === "all"
                    ? "border-[#7F5AF0] bg-[#7F5AF0] text-white shadow-sm"
                    : `border-transparent shadow-sm ${ACTIVITY_META[f.id]?.color ?? ""} !bg-opacity-100`
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              <span>{f.emoji}</span>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-slate-400">
        {spots.length === 0 ? "No spots match this filter." : `${spots.length} spot${spots.length !== 1 ? "s" : ""} found`}
      </p>

      {/* Cards grid */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {spots.map((spot) => (
            <motion.div
              key={`${activeCity}-${spot.id}`}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImageCard spot={spot} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
