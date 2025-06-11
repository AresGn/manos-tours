"use client";

import React, { useState } from "react";
import Link from "next/link";
import LanguageSelector from "@/components/ui/LanguageSelector";

interface MenuItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menu: MenuItem[];
}

export default function MobileMenu({ isOpen, onClose, menu }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="mobile-menu-overlay fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu mobile */}
      <div className="mobile-menu-container fixed top-16 left-0 right-0 footer-professional z-50 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="px-6 py-8">
          
          {/* Sélecteur de langue en haut */}
          <div className="mb-8 pb-6 border-b-2 border-gray-600">
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-4">
              Langue / Language
            </h3>
            <LanguageSelector className="w-full mobile-dark" />
          </div>

          {/* Menu de navigation */}
          <nav className="space-y-2">
            {menu.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    {/* Bouton avec sous-menu */}
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="mobile-menu-item w-full flex items-center justify-between py-4 px-4 text-white hover:bg-blue-600 hover:text-white rounded-lg font-medium text-lg"
                      aria-expanded={openDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Sous-menu */}
                    {openDropdown === item.label && (
                      <div className="mobile-submenu ml-4 mt-2 space-y-1 border-l-2 border-blue-400 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={handleLinkClick}
                            className="mobile-menu-item block py-3 px-4 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-lg font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Lien simple */
                  <Link
                    href={item.href!}
                    onClick={handleLinkClick}
                    className="mobile-menu-item block py-4 px-4 text-white hover:bg-blue-600 hover:text-white rounded-lg font-medium text-lg"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Section contact rapide */}
          <div className="mt-8 pt-6 border-t-2 border-gray-600">
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-4">
              Contact Rapide
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+22997123456"
                className="mobile-contact-item flex items-center gap-3 py-3 px-4 bg-gray-700 hover:bg-blue-600 rounded-lg"
                onClick={handleLinkClick}
              >
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="font-medium text-white">+229 97 12 34 56</span>
              </a>

              <a
                href="mailto:contact@manostours.bj"
                className="mobile-contact-item flex items-center gap-3 py-3 px-4 bg-gray-700 hover:bg-blue-600 rounded-lg"
                onClick={handleLinkClick}
              >
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="font-medium text-white">contact@manostours.bj</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
