"use client";

import { motion } from "framer-motion";

interface Destination {
  name: string;
  subtitle: string;
  tagline: string;
  gradient: string;
  animation: { x?: number; y?: number; opacity: number };
}

const destinations: Destination[] = [
  {
    name: "Caribe",
    subtitle: "Islas & Playas",
    tagline:
      "Aguas cristalinas, arenas blancas y resorts ultra-exclusivos en las islas más privilegiadas.",
    gradient: "from-[#0a2a3a] via-[#0e4060] to-[#0a2a3a]",
    animation: { x: -40, opacity: 0 },
  },
  {
    name: "Europa",
    subtitle: "Cultura & Historia",
    tagline:
      "Palacios, ciudades históricas y experiencias gastronómicas en los destinos más refinados del viejo continente.",
    gradient: "from-[#1a0a2a] via-[#2a1040] to-[#1a0a2a]",
    animation: { y: 40, opacity: 0 },
  },
  {
    name: "Asia",
    subtitle: "Misterio & Lujo",
    tagline:
      "Templos milenarios, playas vírgenes y hoteles de diseño en los rincones más fascinantes de Oriente.",
    gradient: "from-[#1a1a0a] via-[#2a2010] to-[#1a1a0a]",
    animation: { x: 40, opacity: 0 },
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="bg-[#f0ede8] py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            Alrededor del mundo
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[#1a1a2e] text-5xl md:text-6xl font-light tracking-wide mb-6">
            Destinos Exclusivos
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#c9a96e]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
            <div className="h-px w-16 bg-[#c9a96e]" />
          </div>
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={dest.animation}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ minHeight: "480px" }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} transition-all duration-700 group-hover:scale-105 group-hover:brightness-125`}
              />

              {/* Decorative corner accent */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#c9a96e]/40 transition-all duration-500 group-hover:border-[#c9a96e]/80 group-hover:w-16 group-hover:h-16" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#c9a96e]/40 transition-all duration-500 group-hover:border-[#c9a96e]/80 group-hover:w-16 group-hover:h-16" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-10" style={{ minHeight: "480px" }}>
                <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3 font-[family-name:var(--font-inter)]">
                  {dest.subtitle}
                </p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-white text-5xl font-light tracking-wide mb-4">
                  {dest.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-[family-name:var(--font-inter)] max-w-xs transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mb-6">
                  {dest.tagline}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#c9a96e] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                >
                  Explorar
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
