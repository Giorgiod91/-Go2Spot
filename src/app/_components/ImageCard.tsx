"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useChoose } from "context/ChooseContext";
import { ACTIVITY_META, type Spot } from "./HardCodedData";
import { MapPin, ExternalLink, Info } from "lucide-react";

type Props = { spot: Spot };

export default function ImageCard({ spot }: Props) {
  const [expanded, setExpanded] = useState(false);
  const { setChosenSpot } = useChoose();

  const handleShowOnMap = () => {
    setChosenSpot({ title: spot.title, lat: spot.lat, lng: spot.lng });
    document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGoLink = () =>
    window.open(`https://www.google.com/search?q=${encodeURIComponent(spot.title + " " + spot.location)}`);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={spot.img}
          alt={spot.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Rating badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <span className="text-amber-400">★</span>
          {spot.rating}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-slate-800">{spot.title}</h3>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
          <MapPin className="h-3 w-3" /> {spot.location}
        </p>

        {/* Activity tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {spot.activities.map((a) => (
            <span
              key={a}
              className={`flex items-center gap-0.5 rounded-full border px-2 py-0.5 text-[11px] font-medium ${ACTIVITY_META[a].color}`}
            >
              {ACTIVITY_META[a].emoji} {ACTIVITY_META[a].label}
            </span>
          ))}
        </div>

        {/* Description (expandable) */}
        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 text-sm leading-relaxed text-slate-500"
          >
            {spot.description}
          </motion.p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-100 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
          >
            <Info className="h-4 w-4" />
            {expanded ? "Less Info" : "More Info"}
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleGoLink}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Let&apos;s Go
            </button>
            <button
              onClick={handleShowOnMap}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-[#7F5AF0] bg-[#7F5AF0]/8 py-2 text-sm font-semibold text-[#7F5AF0] transition hover:bg-[#7F5AF0]/15"
            >
              <MapPin className="h-4 w-4" />
              On Map
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
