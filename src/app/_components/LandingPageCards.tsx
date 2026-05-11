"use client";

import React from "react";
import { motion } from "motion/react";
import { SlidersHorizontal, LayoutGrid, MapPin } from "lucide-react";

type Card = {
  title: string;
  src: string;
  desc: string;
};

const ICONS = [
  <SlidersHorizontal key="1" className="h-6 w-6" />,
  <LayoutGrid key="2" className="h-6 w-6" />,
  <MapPin key="3" className="h-6 w-6" />,
];

export function LandingPageCards({ cards }: { cards: Card[] }) {
  return (
    <div className="relative mx-auto w-full max-w-4xl px-4">
      {/* Connector line — desktop only */}
      <div className="absolute left-[calc(50%/3+16.67%)] right-[calc(50%/3+16.67%)] top-8 hidden h-0.5 bg-gradient-to-r from-[#7F5AF0]/20 via-[#7F5AF0]/50 to-[#7F5AF0]/20 md:block" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Step circle */}
            <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F5AF0] to-[#5b3dbf] text-white shadow-lg shadow-[#7F5AF0]/30">
              {ICONS[index]}
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#7F5AF0] shadow-sm ring-1 ring-[#7F5AF0]/20">
                {index + 1}
              </span>
            </div>

            {/* Card body */}
            <div className="w-full rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold text-slate-800">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
