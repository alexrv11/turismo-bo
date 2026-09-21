"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function PolaroidCard({
  caption,
  gradient,
}: {
  caption: string;
  gradient: string;
}) {
  return (
    <div
      className="bg-white shadow-2xl flex-shrink-0"
      style={{ padding: "10px 10px 48px 10px", width: "280px" }}
    >
      <div
        className={`w-full ${gradient}`}
        style={{ aspectRatio: "4/3" }}
      >
        {/* Replace with <Image> when real photos are available */}
      </div>
      <p className="font-[family-name:var(--font-script)] text-[#1a3040]/55 text-xl mt-2 ml-1">
        {caption}
      </p>
    </div>
  );
}

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 2: slides up from below between 20%–48% of section scroll
  const card2y = useTransform(scrollYProgress, [0.2, 0.48], ["320px", "0px"]);
  const card2opacity = useTransform(scrollYProgress, [0.2, 0.38], [0, 1]);

  // Card 3: slides up from below between 52%–78% of section scroll
  const card3y = useTransform(scrollYProgress, [0.52, 0.78], ["320px", "0px"]);
  const card3opacity = useTransform(scrollYProgress, [0.52, 0.68], [0, 1]);

  return (
    // Tall container — 3× viewport height creates the scroll budget
    <div ref={containerRef} style={{ height: "300vh" }}>
      {/* Sticky inner — locks to screen while user scrolls through budget */}
      <div className="sticky top-0 h-screen bg-[#4d7f85] flex overflow-hidden">

        {/* ── LEFT: Polaroid stack ── */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">

          {/* Card 1 — always visible, tilted right */}
          <div
            className="absolute"
            style={{ transform: "rotate(4deg)", zIndex: 1 }}
          >
            <PolaroidCard
              caption="el equipo"
              gradient="bg-gradient-to-br from-[#3a6a78] to-[#1e3a4a]"
            />
          </div>

          {/* Card 2 — slides in from below on scroll, tilted left, in front */}
          <motion.div
            className="absolute"
            style={{
              y: card2y,
              opacity: card2opacity,
              rotate: -9,
              zIndex: 2,
            }}
          >
            <PolaroidCard
              caption="con pasión"
              gradient="bg-gradient-to-br from-[#5a8870] to-[#3a6050]"
            />
          </motion.div>

          {/* Card 3 — slides in from below on scroll, slightly tilted, on top */}
          <motion.div
            className="absolute"
            style={{
              y: card3y,
              opacity: card3opacity,
              rotate: 6,
              zIndex: 3,
            }}
          >
            <PolaroidCard
              caption="con confianza"
              gradient="bg-gradient-to-br from-[#7aa8b0] to-[#4a7885]"
            />
          </motion.div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div className="hidden md:flex w-1/2 flex-col justify-center px-12 lg:px-20 text-center">

          {/* Intro paragraphs */}
          <p className="text-white/85 text-base lg:text-lg leading-relaxed mb-5">
            Nuestro nombre lo dice todo, y estamos 100% comprometidos a brindarte
            un servicio de conserjería de viajes en el que puedas confiar plenamente.
          </p>
          <p className="text-white/85 text-base lg:text-lg leading-relaxed mb-14">
            Nuestro equipo tiene un conocimiento local inigualable y estamos
            asociados solo con los mejores proveedores de servicios para ofrecerte
            una experiencia única e irrepetible en cada destino.
          </p>

          {/* Script + caps layered heading */}
          <div className="mb-6 text-left">
            <p
              className="font-[family-name:var(--font-script)] text-[#7cd9d0] leading-none -mb-2"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)" }}
            >
              Confiable
            </p>
            <h3
              className="font-[family-name:var(--font-bodoni)] text-white uppercase tracking-tight leading-[1.05] text-center"
              style={{ fontSize: "clamp(1.6rem, 3vw, 3rem)" }}
            >
              En ViajesBO, la confianza es todo
            </h3>
          </div>

          {/* Supporting paragraph */}
          <p className="text-white/80 text-base leading-relaxed">
            Nuestros clientes reservan con total confianza, sabiendo que cada
            recomendación y reserva es auténtica, segura y del más alto nivel.
            Sin estafas, sin atajos — solo servicio confiable y de primer nivel,
            cada vez.
          </p>
        </div>

      </div>
    </div>
  );
}
