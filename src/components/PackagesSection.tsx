"use client";

import { motion } from "framer-motion";

const packages = [
  {
    id: 1,
    duration: "1 Día",
    name: "Cupe & Río Ichilo",
    description: "El plan perfecto para familias y grupos. Disfruta del parque acuático más grande del Chapare y un paseo al atardecer por el río Ichilo.",
    highlights: [
      "Acceso completo a Cupe Mundo Acuático",
      "Toboganes, tirolesas y dinosaurios gigantes",
      "Almuerzo con surubí o pacú a la parrilla",
      "Paseo en bote al atardecer — Río Ichilo",
      "Transfer desde Cochabamba incluido",
    ],
    price: "Bs 350",
    priceNote: "por persona",
    tag: "Más popular",
    tagColor: "bg-[#c9a227] text-[#1a1a4e]",
    href: "#contact",
  },
  {
    id: 2,
    duration: "2 Días / 1 Noche",
    name: "Trópico Chapare Completo",
    description: "Conoce Ivirgazama y Puerto Villarroel a fondo: aventura acuática, río, playa fluvial y gastronomía tropical.",
    highlights: [
      "Cupe Mundo Acuático (full day)",
      "Alojamiento Hotel Integración",
      "Lancha privada — playas río Ichilo",
      "Avistamiento de caimanes y tortugas",
      "Visita a Islas Flotantes del lago",
      "Cena típica y desayuno incluidos",
    ],
    price: "$85",
    priceNote: "por persona (USD)",
    tag: "Recomendado",
    tagColor: "bg-[#1a3040] text-white",
    href: "#contact",
  },
  {
    id: 3,
    duration: "2 Días / 1 Noche",
    name: "Comunidades Yuracaré",
    description: "Una experiencia cultural única: internarse en la selva con guías indígenas y vivir la Amazonia boliviana desde adentro.",
    highlights: [
      "Llegada a Majo Pampa (comunidad Yuracaré)",
      "Caminata guiada por senderos de selva",
      "Canoa por el río con guía indígena",
      "Taller de artesanías y bambú",
      "Observación de fauna (monos, aves, caimanes)",
      "Alojamiento comunitario + todas las comidas",
    ],
    price: "$95",
    priceNote: "por persona (USD)",
    tag: "Cultural",
    tagColor: "bg-[#5a7a60] text-white",
    href: "#contact",
  },
  {
    id: 4,
    duration: "4 Días / 3 Noches",
    name: "Chapare Premium",
    description: "La experiencia completa del Trópico: parque acuático, río en lancha privada, selva con guía naturalista y cultura local. Todo incluido.",
    highlights: [
      "Transfer privado Cochabamba ↔ Chapare",
      "Cupe Mundo Acuático VIP",
      "Lancha privada Ichilo-Mamoré (avistamiento delfines)",
      "Visita comunidad Yuracaré + artesanías",
      "Trekking Parque Nacional Carrasco",
      "Hotel Boutique Romandia (3 noches)",
      "Guía especializado + todas las comidas",
    ],
    price: "$220",
    priceNote: "por persona (USD)",
    tag: "Premium",
    tagColor: "bg-[#6b2fa0] text-white",
    href: "#contact",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-[#1a1a4e] py-28 px-6 md:px-16 lg:px-24">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <p className="text-[#c9a227] text-xs tracking-[0.4em] uppercase mb-4">
          Amazona Travel — Chapare
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2
              className="font-[family-name:var(--font-bodoni)] text-white uppercase leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
            >
              Paquetes
            </h2>
            <p
              className="font-[family-name:var(--font-script)] text-[#c9a227] leading-none -mt-2"
              style={{ fontSize: "clamp(2.4rem, 6.5vw, 5.5rem)" }}
            >
              Turísticos
            </p>
          </div>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs md:text-right">
            Paquetes diseñados para vivir el Trópico de Cochabamba al máximo.
            Transporte, alojamiento y guía incluidos.
          </p>
        </div>
        <div className="mt-8 h-px bg-white/10" />
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-500 flex flex-col"
          >
            {/* Card top */}
            <div className="p-8 flex-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">{pkg.duration}</p>
                  <h3
                    className="font-[family-name:var(--font-bodoni)] text-white uppercase leading-tight"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}
                  >
                    {pkg.name}
                  </h3>
                </div>
                <span className={`text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full flex-shrink-0 ml-4 ${pkg.tagColor}`}>
                  {pkg.tag}
                </span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {pkg.description}
              </p>

              <ul className="flex flex-col gap-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-white/70 text-sm">
                    <span className="text-[#c9a227] mt-0.5 flex-shrink-0">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card bottom */}
            <div className="border-t border-white/10 px-8 py-5 flex items-center justify-between">
              <div>
                <p className="text-[#c9a227] font-[family-name:var(--font-bodoni)] text-2xl leading-none">
                  {pkg.price}
                </p>
                <p className="text-white/35 text-[10px] tracking-wide mt-0.5">{pkg.priceNote}</p>
              </div>
              <a
                href={pkg.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c9a227] text-[#1a1a4e] text-xs font-bold tracking-widest uppercase hover:bg-[#b8911f] transition-colors duration-300"
              >
                Reservar
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Corporate CTA */}
      <div className="max-w-7xl mx-auto mt-10 border border-[#c9a227]/30 bg-[#c9a227]/5 px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#c9a227] text-xs tracking-widest uppercase mb-1">¿Grupo o empresa?</p>
          <p className="text-white font-[family-name:var(--font-bodoni)] text-lg uppercase tracking-wide">
            Diseñamos paquetes corporativos y grupales a medida
          </p>
        </div>
        <a
          href="#contact"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-[#c9a227] text-[#c9a227] text-xs font-bold tracking-widest uppercase hover:bg-[#c9a227] hover:text-[#1a1a4e] transition-colors duration-300"
        >
          Solicitar cotización
        </a>
      </div>
    </section>
  );
}
