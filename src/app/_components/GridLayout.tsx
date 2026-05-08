"use client";

import React from "react";
import GridItems from "./GridItems";
import { FaGlobeAmericas, FaCompass, FaInfoCircle } from "react-icons/fa";
import { motion } from "motion/react";

const gridContent = [
  {
    logo: <FaGlobeAmericas className="text-2xl text-white" />,
    heading: "Worldwide Picks",
    description: "Explore the best spots across continents.",
  },
  {
    logo: <FaCompass className="text-2xl text-white" />,
    heading: "Local Gems",
    description: "Hidden spots only locals know about.",
  },
  {
    logo: <FaInfoCircle className="text-2xl text-white" />,
    heading: "Tips & Reviews",
    description: "Get real advice from real travelers.",
  },
  {
    logo: "🏞️",
    heading: "Scenic Views",
    description: "Find Instagram-worthy landscapes.",
  },
  {
    logo: "🍽️",
    heading: "Food Spots",
    description: "Top-rated eats and street food finds.",
  },
  {
    logo: "🎭",
    heading: "Cultural Vibes",
    description: "Museums, street art, and festivals.",
  },
  {
    logo: "🛍️",
    heading: "Shopping",
    description: "Markets, fashion, and souvenirs.",
  },
  {
    logo: "🌅",
    heading: "Sunsets & Skylines",
    description: "Best places for golden hour moments.",
  },
  {
    logo: "📸",
    heading: "Photo Hotspots",
    description: "Most photographed locations nearby.",
  },
];

function GridLayout() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-16 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl"
      >
        What can you find here?
      </motion.h2>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gridContent.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: index * 0.05 }}
            key={index}
            className="flex h-auto min-h-[160px] cursor-pointer flex-col rounded-xl border border-neutral-700 bg-neutral-900 ring-[#fecaca] hover:shadow-lg hover:ring-2"
          >
            <GridItems
              logo={item.logo}
              heading={item.heading}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default GridLayout;
