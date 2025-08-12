"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    {
      title: "Destination",
      links: [
        { label: "Histoire & Culture", href: "/grand-popo/histoire" },
        { label: "Plages & Nature", href: "/grand-popo/plages" },
        { label: "Gastronomie", href: "/grand-popo/gastronomie" },
        { label: "Hébergements", href: "/grand-popo/hebergements" },
      ]
    },
    {
      title: "Expériences",
      links: [
        { label: "Tous les Circuits", href: "/experiences" },
        { label: "Nature & Biodiversité", href: "/experiences/nature-biodiversite" },
        { label: "Culture & Spiritualité", href: "/experiences/culture-spiritualite" },
        { label: "Artisanat & Traditions", href: "/experiences/artisanat-traditions" },
        { label: "Histoire & Patrimoine", href: "/experiences/histoire-patrimoine" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Réservation", href: "/planifier/reservation" },
        { label: "Conseils Voyage", href: "/planifier/conseils" },
        { label: "Calendrier", href: "/planifier/calendrier" },
        { label: "Contact", href: "/contact" },
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/manostours",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/22997123456",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@manostours",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="footer-professional text-white">
      {/* Section À propos - Séparée en haut */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.jpg"
              alt="Logo Manos Tours"
              width={100}
              height={100}
              className="rounded-full object-cover shadow-xl border-3 border-white"
            />
          </div>
          <p className="footer-text mb-8 max-w-2xl mx-auto">
            Votre guide expert pour découvrir les merveilles cachées de Grand-Popo.
            Expériences authentiques et tourisme responsable au cœur du Bénin.
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-container text-gray-300 hover:text-white p-4 rounded-full transition-all duration-300 focus:outline-none"
                aria-label={`Suivez-nous sur ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 4 colonnes principales */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-16">
        <div className="footer-4-columns grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Sections de navigation */}
          {navigationLinks.map((section) => (
            <div key={section.title} className="footer-column">
              <h4 className="footer-heading">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link block focus:outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Section Contact */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <svg className="footer-contact-icon mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="footer-text">Grand-Popo, Mono<br />République du Bénin</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="footer-contact-icon flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+22997123456" className="footer-link focus:outline-none">
                  +229 97 12 34 56
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="footer-contact-icon flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contact@manostours.bj" className="footer-link focus:outline-none">
                  contact@manostours.bj
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="footer-text">
              © {currentYear} Manos Tours. Tous droits réservés.
            </p>
            <div className="flex gap-8">
              <Link href="/mentions-legales" className="footer-link focus:outline-none">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="footer-link focus:outline-none">
                Confidentialité
              </Link>
              <Link href="/conditions-utilisation" className="footer-link focus:outline-none">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
