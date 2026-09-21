import type { Metadata } from "next";
import { Bodoni_Moda, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ViajesBO — Experiencias de Viaje Exclusivas",
  description:
    "ViajesBO es tu agencia de viajes de lujo en Bolivia. Diseñamos experiencias exclusivas a los destinos más extraordinarios del mundo: vuelos, hoteles boutique, yates privados y transporte VIP.",
  openGraph: {
    title: "ViajesBO — Experiencias de Viaje Exclusivas",
    description:
      "Agencia de viajes de lujo. Diseñamos experiencias extraordinarias para los viajeros más exigentes.",
    url: "https://turismo.ventulab.com",
    siteName: "ViajesBO",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${bodoni.variable} ${greatVibes.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-[#faf9f7] font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
