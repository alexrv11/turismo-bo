"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "Destinos",         href: "#destinations", expandable: true  },
  { label: "Paquetes",         href: "#packages",     expandable: true  },
  { label: "Experiencias",     href: "#explore",      expandable: true  },
  { label: "Transporte",       href: "#explore",      expandable: false },
  { label: "Nosotros",         href: "#about",        expandable: true  },
  { label: "Contacto",         href: "#contact",      expandable: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-5 flex items-center justify-between">

        {/* Menu button — icon circle on mobile, pill on desktop */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center w-11 h-11 md:w-auto md:h-auto rounded-full border border-[#c9a227]/40 bg-[#1a1a4e] md:gap-3 md:px-5 md:py-3.5 text-white text-sm tracking-[0.25em] uppercase font-medium hover:border-[#c9a227] hover:bg-[#12123a] transition-colors duration-300"
        >
          <svg width="20" height="14" viewBox="0 0 22 16" fill="none" className="flex-shrink-0">
            <line x1="0" y1="2"  x2="22" y2="2"  stroke="#c9a227" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="0" y1="8"  x2="22" y2="8"  stroke="#c9a227" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="0" y1="14" x2="22" y2="14" stroke="#c9a227" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <span className="hidden md:inline">MENÚ</span>
        </button>

        {/* Center logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo_v1.png"
            alt="Amazona Travel"
            width={120}
            height={80}
            className="w-25 md:w-[120px] object-contain drop-shadow-lg"
            priority
          />
        </a>

        {/* Reserve button — icon circle on mobile, pill on desktop */}
        <a
          href="#contact"
          className="flex items-center justify-center w-11 h-11 md:w-auto md:h-auto rounded-full bg-[#c9a227] md:gap-3 md:px-5 md:py-3.5 text-[#1a1a4e] text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#b8911f] transition-colors duration-300"
        >
          <span className="hidden md:inline">RESERVAR</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a1a4e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </header>

      {/* ── Drawer + backdrop ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — clicking outside closes the menu */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[90] bg-black/55 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />

            {/* Left drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 left-0 bottom-0 z-[100] bg-[#1a1a4e] flex flex-col px-10 md:px-14 pt-5 pb-12"
              style={{ width: "min(420px, 65vw)" }}
            >
              {/* Close button — top-left inside drawer, same pill style */}
              <div className="flex items-center justify-start mb-12">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-[#12123a] text-white pl-4 pr-5 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium border border-[#c9a227]/30 hover:border-[#c9a227] transition-colors duration-300"
                >
                  <span className="text-lg leading-none font-light">×</span>
                  CERRAR
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-5 md:gap-6 justify-center flex-1">
                {menuLinks.map((link, i) => (
                  <motion.a
                    key={link.href + link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-4 group"
                  >
                    <span
                      className={`text-white font-light text-2xl leading-none w-5 flex-shrink-0 transition-opacity ${
                        link.expandable ? "opacity-60" : "opacity-0 pointer-events-none"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span
                      className="font-[family-name:var(--font-bodoni)] text-white uppercase tracking-tight leading-none group-hover:text-[#c9a227] transition-colors duration-300"
                      style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
                    >
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
