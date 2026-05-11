"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Explore",    href: "#explore"        },
  { label: "Map",        href: "#map"             },
  { label: "For Solo",   href: "#solo"            },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-1.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7F5AF0]">
            <MapPin className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-800">
            go2<span className="text-[#7F5AF0]">spot</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden sm:flex">
          <button
            onClick={() => scrollTo("#explore")}
            className="rounded-xl bg-[#7F5AF0] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6d46e8]"
          >
            Start Exploring →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-md sm:hidden"
          >
            <ul className="flex flex-col px-5 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => scrollTo("#explore")}
                  className="w-full rounded-xl bg-[#7F5AF0] py-2.5 text-sm font-semibold text-white"
                >
                  Start Exploring →
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
