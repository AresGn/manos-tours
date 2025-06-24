import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manos Tours - Guide Expert à Grand-Popo, Bénin",
  description: "Découvrez Grand-Popo avec Manos, votre guide expert local. Expériences authentiques, tours personnalisés et tourisme responsable au cœur du Bénin.",
  keywords: "Grand-Popo, Bénin, guide touristique, tours, voyage, écotourisme, culture, plages",
  authors: [{ name: "Manos Tours" }],
  openGraph: {
    title: "Manos Tours - Guide Expert à Grand-Popo",
    description: "Expériences authentiques et tourisme responsable à Grand-Popo, Bénin",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 