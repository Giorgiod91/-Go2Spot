"use client";

import React, { useState } from "react";
import { cn } from "../../../lib/utils";
import { motion } from "motion/react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "border-6 relative aspect-[16/9] h-60 w-[280px] overflow-hidden rounded-lg border-gray-500 bg-gray-100 transition-all duration-300 ease-out md:h-96 dark:bg-neutral-900",
        hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className={cn(
          "absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-medium text-transparent md:text-2xl">
          {card.title}
        </div>
      </div>
    </motion.div>
  ),
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function LandingPageCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-3 md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
