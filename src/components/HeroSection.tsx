"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — replace this div with a <video> once you have the file */}
      {/*
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src="/videos/hero.mp4"
        />
      */}
      <div className="absolute inset-0 bg-[#1e3a4a]" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* All-caps Bodoni headline */}
        <motion.h1
          variants={itemVariants}
          className="font-[family-name:var(--font-bodoni)] text-white uppercase leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
        >
          Para la Mejor
          <br />
          Experiencia de Viaje...
        </motion.h1>

        {/* Script / cursive line in mint */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-script)] text-[#7cd9d0] leading-[1.1] -mt-2"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          Reserva con ViajesBO
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-white/75 text-sm md:text-base tracking-wide max-w-md mx-auto leading-relaxed mt-6"
        >
          Conocimiento excepcional de los destinos para asegurarnos
          <br />
          de que tu viaje sea verdaderamente inolvidable.
        </motion.p>
      </motion.div>

      {/* Circular "SCROLL TO DISCOVER" indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="animate-spin-slow w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <defs>
              <path
                id="scrollCirclePath"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text
              fill="white"
              fontSize="7.2"
              letterSpacing="3"
              fontFamily="var(--font-inter)"
              opacity="0.75"
            >
              <textPath href="#scrollCirclePath">
                SCROLL TO DISCOVER · SCROLL TO DISCOVER ·
              </textPath>
            </text>
          </svg>
        </div>
        {/* Inner circle with dot — static, not spinning */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
        </div>
      </div>

      {/* Bottom-left badge */}
      <div className="absolute bottom-8 left-6 md:left-10">
        <p className="text-white/50 text-[9px] tracking-[0.2em] uppercase leading-5">
          Agencia de Viajes de Lujo
          <br />
          Bolivia
        </p>
      </div>
    </section>
  );
}
