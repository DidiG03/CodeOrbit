"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Get a Quote", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="text-2xl font-bold text-white hover:text-indigo-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('hero');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Code Orbit
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-indigo-300 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.replace('#', '');
                  
                  // Handle contact link specially - open modal instead of scrolling
                  if (targetId === 'contact') {
                    if ((window as any).openContactModal) {
                      (window as any).openContactModal();
                    }
                    return;
                  }
                  
                  const target = document.getElementById(targetId);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-black/40 backdrop-blur-md rounded-lg mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 text-white hover:text-indigo-300 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const targetId = link.href.replace('#', '');
                  
                  // Handle contact link specially - open modal instead of scrolling
                  if (targetId === 'contact') {
                    if ((window as any).openContactModal) {
                      (window as any).openContactModal();
                    }
                    return;
                  }
                  
                  const target = document.getElementById(targetId);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

