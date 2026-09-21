"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "Destinos", href: "#destinations" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-5 md:p-6 flex items-center justify-between">
        {/* Menu pill — left */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 bg-[#4d7f85] text-white pl-4 pr-5 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#3d6e72] transition-colors duration-300"
        >
          <span className="text-lg leading-none">≈</span>
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
          className="flex items-center gap-2 bg-[#4d7f85] text-white pl-5 pr-4 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#3d6e72] transition-colors duration-300"
        >
          RESERVAR
          <span className="text-lg leading-none">≈</span>
        </a>
      </header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#1a3040] flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-8 text-white/70 text-xs tracking-[0.3em] uppercase hover:text-white transition-colors"
            >
              CERRAR ×
            </button>

            <nav className="flex flex-col items-center gap-6 md:gap-8">
              {menuLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-[family-name:var(--font-bodoni)] text-white text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest hover:text-[#7cd9d0] transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
