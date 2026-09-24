"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "Nosotros",         href: "#about",        expandable: true  },
  { label: "Dónde Hospedarse", href: "#destinations", expandable: true  },
  { label: "Calendario",       href: "#explore",      expandable: false },
  { label: "Explorar",         href: "#explore",      expandable: true  },
  { label: "Transporte",       href: "#explore",      expandable: true  },
  { label: "Ocasiones",        href: "#explore",      expandable: true  },
  { label: "Contacto",         href: "#contact",      expandable: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 p-5 md:p-6 flex items-center justify-between">

        {/* Menu pill — left */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 bg-[#4d7f85] text-white px-5 py-3.5 rounded-full text-sm tracking-[0.25em] uppercase font-medium hover:bg-[#3d6e72] transition-colors duration-300"
        >
          {/* Wave SVG icon */}
          <svg width="32" height="18" viewBox="0 0 32 18" fill="none" className="flex-shrink-0">
            <path d="M1 3 Q5.5 0.5 9 3 Q12.5 5.5 16 3 Q19.5 0.5 23 3 Q26.5 5.5 31 3"
              stroke="#7cd9d0" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
            <path d="M1 9 Q5.5 6.5 9 9 Q12.5 11.5 16 9 Q19.5 6.5 23 9 Q26.5 11.5 31 9"
              stroke="#7cd9d0" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
            <path d="M1 15 Q5.5 12.5 9 15 Q12.5 17.5 16 15 Q19.5 12.5 23 15 Q26.5 17.5 31 15"
              stroke="#7cd9d0" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>
          MENÚ
        </button>

        {/* Center logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-script)] text-white text-4xl leading-none drop-shadow-md"
        >
          ViajesBO
        </a>

        {/* Reserve pill — right */}
        <a
          href="#contact"
          className="flex items-center gap-3 bg-[#4d7f85] text-white px-5 py-3.5 rounded-full text-sm tracking-[0.25em] uppercase font-medium hover:bg-[#3d6e72] transition-colors duration-300"
        >
          RESERVAR
          <svg width="32" height="18" viewBox="0 0 32 18" fill="none" className="flex-shrink-0">
            <path d="M1 3 Q5.5 0.5 9 3 Q12.5 5.5 16 3 Q19.5 0.5 23 3 Q26.5 5.5 31 3"
              stroke="#7cd9d0" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
            <path d="M1 9 Q5.5 6.5 9 9 Q12.5 11.5 16 9 Q19.5 6.5 23 9 Q26.5 11.5 31 9"
              stroke="#7cd9d0" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
            <path d="M1 15 Q5.5 12.5 9 15 Q12.5 17.5 16 15 Q19.5 12.5 23 15 Q26.5 17.5 31 15"
              stroke="#7cd9d0" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
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
              className="fixed top-0 left-0 bottom-0 z-[100] bg-[#4d7f85] flex flex-col px-10 md:px-14 pt-5 pb-12"
              style={{ width: "min(420px, 65vw)" }}
            >
              {/* Close button — top-left inside drawer, same pill style */}
              <div className="flex items-center justify-start mb-12">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-[#3d6e72] text-white pl-4 pr-5 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2d5e62] transition-colors duration-300"
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
                      className="font-[family-name:var(--font-bodoni)] text-white uppercase tracking-tight leading-none group-hover:text-[#7cd9d0] transition-colors duration-300"
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
