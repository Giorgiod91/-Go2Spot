"use client";

import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { CityData } from "./HardCodedData";
import InputField from "./InputField";
import Arrow from "./Arrow";
import { motion } from "motion/react";
type Props = {};

function LandingPage({}: Props) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const cityData = CityData[selectedCity];
  // adding transition values for the framer motion div
  const transition = {
    duration: 0.4,
  };

  return (
    <div className="flex min-h-screen max-w-7xl flex-col items-center bg-base-100 px-4 text-base-content">
      <h1 className="mt-10 font-serif text-7xl text-neutral">
        Find places with go2spot
      </h1>
      <p className="mb-6 text-lg text-secondary">
        Find cool locations in your destination area
      </p>

      <div className="mt-16 flex w-full max-w-6xl flex-col items-center space-y-12">
        <h2 className="text-center text-3xl font-semibold text-white">
          How It Works
        </h2>

        <div className="relative flex flex-col items-center justify-between gap-12 sm:flex-row">
          {[
            {
              title: "1. Pick a City",
              img: "/images/select-city.png",
              desc: "Choose your destination from the dropdown or quick picks.",
            },
            {
              title: "2. Explore Spots",
              img: "/images/show-cards.png",
              desc: "See curated locations, each with images and descriptions.",
            },
            {
              title: "3. View on Map",
              img: "/images/show-map.png",
              desc: "Visualize your picks on a map and plan your journey.",
            },
          ].map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              key={index}
              className="flex max-w-xs flex-col items-center text-center"
            >
              <div className="relative">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-44 w-72 rounded-2xl border border-gray-700 object-cover shadow-lg"
                />

                {index < 2 && (
                  <div className="absolute right-[-70px] top-1/2 hidden sm:block">
                    <div className="h-1 w-36 rounded-full bg-[#a760ff]"></div>
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#a760ff]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center border pt-10">
        <button> Lets Go</button>
      </div>
    </div>
  );
}

export default LandingPage;
