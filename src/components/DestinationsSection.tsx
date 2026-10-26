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
    name: "Cupe Mundo Acuático",
    subtitle: "Aventura & Familia",
    tagline:
      "El parque acuático más grande del Chapare: +20 hectáreas de lagunas, toboganes, tirolesas, dinosaurios gigantes y refugio de animales en plena selva tropical.",
    gradient: "from-[#0a2a1a] via-[#0e5030] to-[#0a2a1a]",
    animation: { x: -40, opacity: 0 },
  },
  {
    name: "Puerto Villarroel",
    subtitle: "Ríos & Naturaleza",
    tagline:
      "Navega el río Ichilo, avista caimanes y delfines de río, visita playas de arena blanca y comunidades Yuracaré en el puerto fluvial más importante del Trópico.",
    gradient: "from-[#0a1a2a] via-[#0e304a] to-[#0a1a2a]",
    animation: { y: 40, opacity: 0 },
  },
  {
    name: "Parque Carrasco",
    subtitle: "Selva & Biodiversidad",
    tagline:
      "622.600 hectáreas de biodiversidad única: jaguares, osos andinos, +850 especies de aves y más de 300 variedades de orquídeas en el corazón de la Amazonia boliviana.",
    gradient: "from-[#1a1a0a] via-[#2a2a10] to-[#1a1a0a]",
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
            Trópico de Cochabamba
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[#1a1a2e] text-5xl md:text-6xl font-light tracking-wide mb-6">
            Nuestros Destinos
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
