"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menu = [
  { label: "Accueil", href: "/" },
  {
    label: "Grand-Popo",
    children: [
      { label: "Histoire & Culture", href: "/grand-popo/histoire" },
      { label: "Plages & Nature", href: "/grand-popo/plages" },
      { label: "Gastronomie Locale", href: "/grand-popo/gastronomie" },
      { label: "Hébergements", href: "/grand-popo/hebergements" },
    ],
  },
  {
    label: "Expériences",
    children: [
      { label: "Tours Privés & Groupes", href: "/experiences" },
      { label: "Expériences Sur-Mesure", href: "/experiences/sur-mesure" },
      { label: "Écotourisme & Éthique", href: "/experiences/ecotourisme" },
      { label: "Packages Complets", href: "/experiences/packages" },
    ],
  },
  {
    label: "Planifier",
    children: [
      { label: "Réservation Express", href: "/planifier/reservation" },
      { label: "Conseils Voyage", href: "/planifier/conseils" },
      { label: "Calendrier Disponibilités", href: "/planifier/calendrier" },
    ],
  },
  {
    label: "Manos",
    children: [
      { label: "Qui suis-je ?", href: "/manos" },
      { label: "Témoignages", href: "/manos/temoignages" },
      { label: "Galerie Photos/Vidéos", href: "/manos/galerie" },
    ],
  },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-300 shadow-lg fixed top-0 left-0 z-50 navbar-fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16 navbar-container">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl text-white tracking-tight">
          <Image
            src="/images/logo.jpeg"
            alt="Logo Manos Tours"
            width={56}
            height={56}
            className="rounded-full object-cover navbar-logo"
            priority
          />
        </Link>
        <div className="hidden md:flex gap-6 items-center h-full navbar-desktop navbar-menu">
          {menu.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="navbar-link py-2 px-3 flex items-center gap-1 transition-colors duration-200">
                  {item.label}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`navbar-dropdown absolute left-0 top-full mt-2 rounded-lg min-w-[220px] py-2 transition-all duration-200 z-50 ${openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="navbar-dropdown-link block px-4 py-3 whitespace-nowrap transition-colors duration-150"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="navbar-link py-2 px-3 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        {/* Burger menu */}
        <button
          className="md:hidden flex items-center p-2 rounded-lg navbar-hamburger transition-colors duration-200 hidden-desktop"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {/* Menu mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-6 space-y-3 animate-in slide-in-from-top duration-200">
          {menu.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button className="w-full text-left font-medium text-gray-800 flex items-center justify-between py-2" onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}>
                  {item.label}
                  <svg className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === item.label && (
                  <div className="pl-4 border-l border-blue-100 space-y-1">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block py-1 text-gray-700 hover:text-blue-700">{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="block font-medium text-gray-800 py-2 hover:text-blue-700">{item.label}</Link>
            )
          )}
        </div>
      )}
    </nav>
  );
} 