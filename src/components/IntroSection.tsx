"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function IntroSection() {
  return (
    <section
      id="services"
      className="relative bg-[#ede9e3] overflow-hidden pt-24 pb-32 px-8 md:px-16 lg:px-24"
    >
      {/* Faint palm watermark — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 w-[55%] h-[110%] opacity-[0.07] select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Cellipse cx='200' cy='580' rx='18' ry='220' fill='%231a3040'/%3E%3Cellipse cx='200' cy='300' rx='180' ry='60' transform='rotate(-30 200 300)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='260' rx='170' ry='55' transform='rotate(20 200 260)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='230' rx='155' ry='50' transform='rotate(-50 200 230)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='200' rx='145' ry='45' transform='rotate(55 200 200)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='280' rx='160' ry='52' transform='rotate(80 200 280)' fill='%231a3040'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      />

      {/* ── Headline block ── */}
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-[family-name:var(--font-bodoni)] text-[#1a3040] uppercase leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
        >
          Ven por el Trópico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-[family-name:var(--font-script)] text-[#c9a227] -mt-3 ml-4 leading-[1.1]"
          style={{ fontSize: "clamp(2.6rem, 7.5vw, 6.5rem)" }}
        >
          Quédate por la experiencia
        </motion.p>
      </div>

      {/* ── Two-column body ── */}
      <div className="relative mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center max-w-6xl">

        {/* Left — text */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Region badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-[#1a3040]/50 text-xs tracking-[0.25em] uppercase font-medium">
              Trópico de Cochabamba
            </span>
            {["Chapare", "Ivirgazama", "Puerto Villarroel"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center justify-center px-2 py-1 bg-[#c9a227]/15 text-[#c9a227] text-[10px] tracking-widest font-bold rounded-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Body text */}
          <motion.p
            variants={fadeUp}
            className="text-[#1a3040]/75 text-base md:text-lg leading-relaxed max-w-sm"
          >
            El Trópico de Cochabamba te espera: ríos amazónicos, selva
            exuberante, comunidades indígenas Yuracaré y el parque acuático
            más grande del Chapare. Amazona Travel se encarga de toda la
            logística — tú solo disfruta la aventura.
          </motion.p>

          {/* CTA link */}
          <motion.a
            variants={fadeUp}
            href="#packages"
            className="mt-8 text-[#1a1a4e] text-sm font-semibold tracking-wide border-b border-[#1a1a4e] pb-0.5 hover:border-[#c9a227] hover:text-[#c9a227] transition-colors duration-300"
          >
            Ver paquetes turísticos
          </motion.a>
        </motion.div>

        {/* Right — polaroid photo */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center md:justify-end"
        >
          <div
            className="bg-white shadow-2xl"
            style={{ padding: "12px 12px 52px 12px", maxWidth: "380px", width: "100%" }}
          >
            <div className="w-full relative" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/puerto/puerto-villarroel.jpg"
                alt="Puerto Villarroel, Chapare"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>

            {/* Polaroid caption */}
            <p className="font-[family-name:var(--font-script)] text-[#1a3040]/60 text-xl mt-3 ml-1">
              Puerto Villarroel, Chapare
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
