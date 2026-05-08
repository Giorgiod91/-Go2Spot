"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#475569]/90 shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-1">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-neutral-100"
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

        {/* Desktop nav */}
        <nav className="hidden items-center space-x-8 sm:flex">
          {["Info", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-pointer"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-lg text-neutral-100 transition-colors duration-300 group-hover:text-[#fecaca]"
              >
                {item}
              </motion.span>
            </motion.div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="text-neutral-100 sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#475569] px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4">
            {["Info", "Contact"].map((item) => (
              <li key={item}>
                <span
                  className="block cursor-pointer text-lg text-neutral-100 hover:text-[#fecaca]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
