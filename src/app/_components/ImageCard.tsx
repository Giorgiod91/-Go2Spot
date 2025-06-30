"use client";
import { useState } from "react";
import { useChoose } from "context/ChooseContext";
import { motion } from "framer-motion";

type ImageCardProps = {
  title: string;
  img: string;
  description: string;
  location: string;
};

function ImageCard({ title, img, description, location }: ImageCardProps) {
  const [clicked, setClicked] = useState(false);
  const { setChoose } = useChoose();

  const ShowRightText = () => setClicked(true);
  const OpenLinkOnClick = (title: string) =>
    window.open(`https://www.google.com/search?q=${encodeURIComponent(title)}`);
  const ShowOnMap = () => setChoose(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)" }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="w-full max-w-sm rounded-xl bg-[#1f2937] p-6 shadow-md ring-1 ring-white/10 backdrop-blur-md"
    >
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt={title}
          className="h-48 w-full rounded-lg object-cover shadow-lg"
          loading="lazy"
        />
        <h3 className="mt-4 text-center text-xl font-semibold text-[#fecaca]">
          {title}
        </h3>
        <p className="mt-1 text-center text-sm text-gray-300">{location}</p>

        <p className="mt-4 min-h-[3rem] text-center text-gray-400">
          {clicked ? description : ""}
        </p>

        <div className="mt-6 flex w-full flex-col gap-3">
          <motion.button
            onClick={ShowRightText}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 py-2 text-white shadow-sm transition"
          >
            More Info
          </motion.button>

          <motion.button
            onClick={() => OpenLinkOnClick(title)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full bg-gradient-to-r from-pink-400 to-rose-400 py-2 text-gray-900 shadow-sm transition"
          >
            Let’s Go
          </motion.button>

          <motion.button
            onClick={ShowOnMap}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full bg-gray-700 py-2 text-[#fecaca] transition hover:bg-gray-600"
          >
            Show on Map
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ImageCard;
