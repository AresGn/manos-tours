import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 