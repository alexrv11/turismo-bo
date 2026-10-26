"use client";

import { motion } from "framer-motion";

const items = [
  "CHAPARE",
  "RÍOS",
  "NATURALEZA",
  "AVENTURA",
  "SELVA",
  "HOTELES",
  "TRANSPORTE",
  "COMUNIDADES",
  "EXPERIENCIAS",
];

const ticker = items.map((item) => `${item} ✦`).join("  ");

export default function AboutSection() {
  return (
    <section className="relative bg-[#1a1a4e] overflow-hidden py-32">
      {/* Script overlay — centered, floats above marquee */}
      <motion.div
        className="relative z-10 text-center mb-4 pointer-events-none select-none"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p
          className="font-[family-name:var(--font-script)] text-[#c9a227] leading-none"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          Confía en
        </p>
      </motion.div>

      {/* Marquee ticker */}
      <div className="relative z-0 flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-bodoni)] text-white uppercase tracking-tight flex-shrink-0 px-8"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 1 }}
            >
              {ticker}&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
