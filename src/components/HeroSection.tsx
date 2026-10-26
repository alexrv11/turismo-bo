"use client";

import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const PHOTOS = [
  {
    src: "/hero/cupe.jpg",
    caption: "Cupe Mundo Acuático, Ivirgazama",
  },
  {
    src: "/hero/cupe-02.jpg",
    caption: "Cupe Mundo Acuático, Chapare",
  },
  {
    src: "/cupe/cupe-dino.JPG",
    caption: "Dinosaurios Gigantes — Cupe, Chapare",
  },
  {
    src: "/cupe/cupe-dino-02.JPG",
    caption: "Parque Cretácico — Cupe, Ivirgazama",
  },
  {
    src: "/cupe/cupe0dino--001.jpg",
    caption: "Cupe Mundo Acuático, Ivirgazama",
  },
  {
    src: "/cupe/cupe03.JPG",
    caption: "Cupe Mundo Acuático, Chapare",
  },
  {
    src: "/cupe/parque-acuatico.JPG",
    caption: "Parque Acuático Cupe, Ivirgazama",
  },
  {
    src: "/cupe/cupe-piscina.JPG",
    caption: "Piscinas Naturales — Cupe, Chapare",
  },
  {
    src: "/cupe/cupe-piscina-2.JPG",
    caption: "Lagunas — Cupe Mundo Acuático",
  },
  {
    src: "/cupe/cupe-king-kong.JPG",
    caption: "Cupe Mundo Acuático, Ivirgazama",
  },
  {
    src: "/cupe/cupe-king-kong-2.JPG",
    caption: "Cupe Mundo Acuático, Chapare",
  },
  {
    src: "/cupe/cupe-barco.jpg",
    caption: "Tours en Lancha — Cupe, Chapare",
  },
  {
    src: "/puerto/puerto-villarroel.jpg",
    caption: "Puerto Villarroel, Río Ichilo",
  },
  {
    src: "/puerto/puerto-01.jpg",
    caption: "Puerto Villarroel, Chapare",
  },
  {
    src: "/puerto/puerto-02.jpg",
    caption: "Puerto Villarroel, Trópico de Cochabamba",
  },
  {
    src: "/hero/oficina-informacion-ivirgazama.png",
    caption: "Ivirgazama, Cochabamba",
  },
  {
    src: "/ivirgazama-centro/ivi-iglesia.JPG",
    caption: "Iglesia de Ivirgazama, Chapare",
  },
  {
    src: "/ivirgazama-centro/patio-iglesia.JPG",
    caption: "Centro de Ivirgazama, Cochabamba",
  },
  {
    src: "/ivirgazama-centro/radio-carrasco.JPG",
    caption: "Radio Carrasco, Ivirgazama",
  },
  {
    src: "/ivirgazama-centro/ivi-radio.JPG",
    caption: "Ivirgazama, Trópico de Cochabamba",
  },
];

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
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Fade out and slide up between 0% and 35% of the section scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -40]);

  // Auto-hide after 3.5s
  const autoHide = useMotionValue(1);
  const combinedOpacity = useTransform(
    [textOpacity, autoHide],
    (values) => (values[0] as number) * (values[1] as number)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      animate(autoHide, 0, { duration: 1.2, ease: "easeInOut" });
    }, 3500);
    return () => clearTimeout(timer);
  }, [autoHide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PHOTOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PHOTOS[current].src})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: combinedOpacity, y: textY }}
      >
        {/* All-caps Bodoni headline */}
        <motion.h1
          variants={itemVariants}
          className="font-[family-name:var(--font-bodoni)] text-white uppercase leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(1.8rem, 5vw, 4.5rem)" }}
        >
          Para la Mejor
          <br />
          Experiencia de Viaje...
        </motion.h1>

        {/* Script / cursive line in mint */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-script)] text-[#c9a227] leading-[1.1] -mt-2"
          style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
        >
          Reserva con Amazona Travel
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

      {/* Bottom-left: caption + dot indicators */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-10 flex flex-col gap-3"
        style={{ opacity: combinedOpacity }}
      >
        <p className="text-white/50 text-[9px] tracking-[0.2em] uppercase leading-5">
          Agencia de Viajes de Lujo
          <br />
          Bolivia
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            className="text-white/60 text-[10px] tracking-widest uppercase"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5 }}
          >
            {PHOTOS[current].caption}
          </motion.p>
        </AnimatePresence>
        <div className="flex gap-1.5">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === current ? "w-6 bg-white" : "w-3 bg-white/35"
              }`}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
