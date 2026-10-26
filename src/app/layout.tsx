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
  metadataBase: new URL("https://amazonas.ventulab.com"),
  title: "Amazona Travel — Agencia de Viajes de Lujo en Bolivia",
  description:
    "Amazona Travel es tu agencia de viajes de lujo en Bolivia. Diseñamos experiencias exclusivas a los destinos más extraordinarios: vuelos, hoteles boutique, paquetes turísticos y transporte VIP.",
  keywords: [
    "agencia de viajes Bolivia",
    "turismo Bolivia",
    "viajes de lujo",
    "Amazona Travel",
    "paquetes turísticos Bolivia",
    "Salar de Uyuni",
    "Lago Titicaca",
    "turismo aventura Bolivia",
  ],
  authors: [{ name: "Amazona Travel" }],
  creator: "Amazona Travel",
  openGraph: {
    title: "Amazona Travel — Agencia de Viajes de Lujo en Bolivia",
    description:
      "Amazona Travel: agencia de viajes de lujo en Bolivia. Experiencias extraordinarias para los viajeros más exigentes.",
    url: "https://amazonas.ventulab.com",
    siteName: "Amazona Travel",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/hero/cupe.jpg",
        width: 1200,
        height: 630,
        alt: "Amazona Travel — Viajes de Lujo en Bolivia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazona Travel — Agencia de Viajes de Lujo en Bolivia",
    description:
      "Amazona Travel: agencia de viajes de lujo en Bolivia. Experiencias extraordinarias para los viajeros más exigentes.",
    images: ["/hero/cupe.jpg"],
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
