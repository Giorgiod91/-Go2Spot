"use client";

import React from "react";
import { array } from "zod";
import GridItems from "./GridItems";
import { FaGlobeAmericas, FaCompass, FaInfoCircle } from "react-icons/fa";
import { div } from "motion/react-client";
import { motion } from "motion/react";

type Props = {};

const Grid = new Array(9).fill("");
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
// border-gray-300/50

function GridLayout({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-xl text-white">kdkdkdkd</h1>
      <div className="grid grid-cols-3 gap-4">
        {gridContent.map((item, index) => (
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ ease: "easeOut", duration: 1 }}
            key={index}
            className="border-bg-gradient-to-r flex h-[250px] w-[400px] cursor-pointer flex-col rounded-xl border border-gray-300/50 bg-[#161616] ring-[#fecaca] hover:shadow-lg hover:ring-4"
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
