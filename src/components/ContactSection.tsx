"use client";

import { useState } from "react";

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-[family-name:var(--font-bodoni)] text-[#1a3040] uppercase tracking-widest text-xs">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b border-[#1a3040]/25 pb-3 text-[#1a3040]/70 text-sm placeholder:text-[#1a3040]/40 focus:outline-none focus:border-[#c9a227] transition-colors duration-300"
      />
    </div>
  );
}

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/59170000000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <section id="contact" className="flex flex-col md:flex-row">

      {/* ── LEFT: Sticky teal panel ── */}
      <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen bg-[#1a1a4e] flex flex-col justify-center px-10 lg:px-16 py-16 md:py-0">

        {/* Script + caps heading */}
        <div className="mb-8">
          <p
            className="font-[family-name:var(--font-script)] text-[#c9a227] leading-none -mb-2"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
          >
            Hola,
          </p>
          <h2
            className="font-[family-name:var(--font-bodoni)] text-white uppercase tracking-tight leading-[1.0]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}
          >
            Contáctanos
          </h2>
        </div>

        {/* Body */}
        <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-xs">
          Para sacar el máximo provecho de tu viaje, contacta a nuestro equipo
          hoy y descubre todo lo que podemos hacer por ti.
        </p>

        {/* WhatsApp pill button */}
        <a
          href="https://wa.me/59170000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/70 text-white text-sm hover:bg-[#c9a227] hover:border-[#c9a227] hover:text-[#1a1a4e] transition-colors duration-300 mb-12 w-fit"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat por WhatsApp
        </a>

        {/* Phone */}
        <p className="font-[family-name:var(--font-bodoni)] text-white text-2xl lg:text-3xl mb-2">
          +591 700 00 000
        </p>

        {/* Email */}
        <p className="font-[family-name:var(--font-bodoni)] text-white uppercase text-lg lg:text-2xl mb-8 tracking-wide">
          INFO@VIAJESBO.COM
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Scrollable form ── */}
      <div className="w-full md:w-1/2 bg-[#ede9e3] relative overflow-hidden">

        {/* Faint palm watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-8 w-2/3 h-full opacity-[0.06] select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 700'%3E%3Cellipse cx='200' cy='680' rx='18' ry='260' fill='%231a3040'/%3E%3Cellipse cx='200' cy='340' rx='190' ry='65' transform='rotate(-30 200 340)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='300' rx='180' ry='58' transform='rotate(22 200 300)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='265' rx='165' ry='52' transform='rotate(-52 200 265)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='235' rx='155' ry='48' transform='rotate(56 200 235)' fill='%231a3040'/%3E%3Cellipse cx='200' cy='310' rx='170' ry='55' transform='rotate(82 200 310)' fill='%231a3040'/%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
          }}
        />

        {/* Form */}
        <form
          className="relative z-10 px-10 lg:px-16 pt-28 pb-24 flex flex-col gap-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField label="Dinos tu nombre" placeholder="Nombre completo..." />
          <FormField label="¿Cuál es tu email?" placeholder="Dirección de email..." type="email" />

          {/* Phone with flag prefix */}
          <div className="flex flex-col gap-3">
            <label className="font-[family-name:var(--font-bodoni)] text-[#1a3040] uppercase tracking-widest text-xs">
              ¿Cuál es tu número de teléfono?
            </label>
            <div className="flex items-center gap-2 border-b border-[#1a3040]/25 pb-3 focus-within:border-[#c9a227] transition-colors duration-300">
              <span className="text-sm">🇧🇴</span>
              <span className="text-[#1a3040]/50 text-sm">▾</span>
              <input
                type="tel"
                placeholder="Número de teléfono..."
                className="bg-transparent flex-1 text-[#1a3040]/70 text-sm placeholder:text-[#1a3040]/40 focus:outline-none"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-3">
            <label className="font-[family-name:var(--font-bodoni)] text-[#1a3040] uppercase tracking-widest text-xs">
              ¿Qué fecha planeas viajar?
            </label>
            <div className="flex items-center border-b border-[#1a3040]/25 pb-3 focus-within:border-[#c9a227] transition-colors duration-300">
              <input
                type="date"
                className="bg-transparent flex-1 text-[#1a3040]/50 text-sm focus:outline-none"
              />
            </div>
          </div>

          <FormField label="¿Cuántas personas viajan?" placeholder="Número de personas" type="number" />
          <FormField label="¿Cuántos días planeas visitar?" placeholder="Número de días" type="number" />

          {/* Message textarea */}
          <div className="flex flex-col gap-3">
            <label className="font-[family-name:var(--font-bodoni)] text-[#1a3040] uppercase tracking-widest text-xs">
              ¿Cómo podemos ayudarte?
            </label>
            <textarea
              rows={4}
              placeholder="Tu mensaje..."
              className="bg-transparent border-b border-[#1a3040]/25 pb-3 text-[#1a3040]/70 text-sm placeholder:text-[#1a3040]/40 focus:outline-none focus:border-[#c9a227] transition-colors duration-300 resize-none"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 border border-[#1a3040]/40 accent-[#c9a227]"
              />
              <span className="text-[#1a3040]/70 text-sm leading-relaxed">
                Acepto la{" "}
                <a href="#" className="underline hover:text-[#c9a227]">
                  Política de Privacidad
                </a>{" "}
                de ViajesBO
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="mt-0.5 w-4 h-4 border border-[#1a3040]/40 accent-[#c9a227]"
              />
              <span className="text-[#1a3040]/70 text-sm leading-relaxed">
                Quiero suscribirme al newsletter de ViajesBO
              </span>
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="px-10 py-3 rounded-full border border-[#1a3040] text-[#1a3040] text-sm tracking-wide hover:bg-[#1a3040] hover:text-white transition-all duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}
