"use client";
import React from "react";
import { motion } from "motion/react";

type Props = {};

function NavBar({}: Props) {
  return (
    <motion.nav
      whileTap={{ scale: 0.99 }}
      className="mx-auto flex w-full items-center justify-between bg-[#475569] px-6 py-4 shadow-md"
    >
      <div className="flex items-center space-x-1">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-neutral"
        >
          go2
        </motion.h2>
        <motion.h2
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold text-[#fecaca]"
        >
          spot
        </motion.h2>
      </div>

      <div className="flex items-center space-x-8">
        {["Info", "Contact"].map((item, index) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative cursor-pointer"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-lg text-neutral transition-colors duration-300 group-hover:text-[#fecaca]"
            >
              {item}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}

export default NavBar;
