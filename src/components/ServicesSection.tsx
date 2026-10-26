"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
});

/* ── Photo card ── */
function PhotoCard({
  title,
  gradient,
  delay = 0,
}: {
  title: string;
  gradient: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Photo — swap div for <Image> when assets are ready */}
      <div
        className={`w-full ${gradient}`}
        style={{ aspectRatio: "4/3" }}
      >
        {/*
          <Image src={`/images/${slug}.jpg`} alt={title} fill className="object-cover" />
        */}
      </div>
      {/* Title below photo */}
      <h3
        className="font-[family-name:var(--font-bodoni)] text-[#1a3040] uppercase tracking-tight mt-5"
        style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
      >
        {title}
      </h3>
    </motion.div>
  );
}

/* ── Teal text card ── */
function TealCard({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#1a1a4e] flex flex-col items-center justify-center text-center px-10 py-20 md:py-28"
    >
      <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-sm">
        {text}
      </p>
      <a
        href="#contact"
        className="mt-10 text-white text-sm font-semibold tracking-wide border-b border-white/60 pb-0.5 hover:border-white transition-colors duration-300"
      >
        Saber más
      </a>
    </motion.div>
  );
}

/* ── Section ── */
export default function ServicesSection() {
  return (
    <section
      id="explore"
      className="bg-[#ede9e3] px-8 md:px-16 lg:px-24 pt-16 pb-32"
    >
      {/* Two-column masonry layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-7xl mx-auto">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-10 flex-1">

          <TealCard
            delay={0}
            text="De parejas a familias y grupos. En Amazona Travel diseñamos experiencias en el Trópico de Cochabamba: río, selva, aventura y cultura para todos los presupuestos y gustos."
          />


          <PhotoCard
            title="Tours en Río"
            gradient="bg-gradient-to-br from-[#0e4060] to-[#0a2a3a]"
            delay={0.1}
          />

          <PhotoCard
            title="Gastronomía Tropical"
            gradient="bg-gradient-to-br from-[#c8a882] to-[#a07850]"
            delay={0.1}
          />

        </div>

        {/* ── Right column — offset downward ── */}
        <div className="flex flex-col gap-10 flex-1 md:mt-32">

          <PhotoCard
            title="Hoteles"
            gradient="bg-gradient-to-br from-[#2a3a4a] to-[#1a2535]"
            delay={0.08}
          />

          <PhotoCard
            title="Transporte"
            gradient="bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a]"
            delay={0.12}
          />

          <TealCard
            delay={0.06}
            text="Cada paquete incluye traslados, alojamiento y experiencias en el Trópico como estándar — con extras como guías naturalistas, canoas privadas y gastronomía local bajo pedido."
          />

          <PhotoCard
            title="Turismo Comunitario"
            gradient="bg-gradient-to-br from-[#5a7a60] to-[#3a5a40]"
            delay={0.1}
          />

        </div>
      </div>
    </section>
  );
}
