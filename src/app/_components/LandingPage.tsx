"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { LandingPageCards } from "./LandingPageCards";
import { div, h1 } from "motion/react-client";

type Props = {};

function LandingPage({}: Props) {
  const cards = [
    {
      title: "Pick a Vibe",
      src: "/sagrada.png",
      desc: "Choose a vibe or a city to explore.",
    },
    {
      title: "Browse Spots",
      src: "/cards1.png",
      desc: "See top-rated places with images and tips.",
    },
    {
      title: "See on Map",
      src: "/onetwo.png",
      desc: "Visualize your picks and plan your trip.",
    },
  ];
  //:TODO: create a function that will use an intervall to activate the hover affect on the cards by its own for visual effect
  // const changeHoverState =() =>{
  //   setHovered={setHovered}
  // }
  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-20 text-base-content">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center text-4xl font-bold leading-tight text-neutral-800 md:text-6xl dark:text-slate-200"
      >
        Discover the most loved spots —
        <span className="text-[#fecaca]"> powered by real reviews</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400"
      >
        Go2Spot finds beautiful places, hidden gems, and photo-worthy views —
        fast and effortlessly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10"
      >
        {" "}
        <button className="relative p-[3px]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
          <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-[#475569] hover:text-[#fecaca]">
            Start Exploring
          </div>
        </button>
      </motion.div>

      <section className="mt-24 w-full max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          How It Works
        </h2>
        <LandingPageCards cards={cards} />
      </section>
    </div>
  );
}

export default LandingPage;
