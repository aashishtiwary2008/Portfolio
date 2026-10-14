import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { number: '01', name: 'ABOUT', href: '#about' },
    { number: '02', name: 'WORK', href: '#work' },
    { number: '03', name: 'PROCESS', href: '#process' },
    { number: '04', name: 'PHOTOGRAPHY', href: '#photography' },
    { number: '05', name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-6 sm:top-8 inset-x-0 z-50 px-4 sm:px-8 max-w-5xl mx-auto">
        <nav 
          className={`flex items-center justify-between px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-xl border border-black/10 text-[#111111]' 
              : 'bg-white/90 backdrop-blur-sm shadow-md border border-black/10 text-[#111111]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Left: Minimal Monogram + Identity (as in video 00:04) */}
          <div className="flex items-center gap-2.5">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-condensed font-bold text-base hover:scale-105 transition-transform"
            >
              {PORTFOLIO_CONFIG.personal.shortMark}
            </a>
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="text-xs sm:text-sm font-bold tracking-wider font-condensed uppercase hover:opacity-70 transition-opacity"
            >
              DESIGN BY AASHISH
            </a>
          </div>

          {/* Center: Navigation Links (as in video 00:04) */}
          <div className="hidden md:flex items-center gap-7 text-[12px] font-semibold tracking-wider text-[#111111]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="hover:opacity-50 transition-opacity uppercase font-mono"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Changed from Hire Me to "LET'S TALK" */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenContact}
              type="button"
              className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-black bg-black text-white hover:bg-transparent hover:text-black transition-all font-mono"
            >
              LET'S TALK
            </button>

            {/* Mobile hamburger icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full border border-black/15 text-black hover:bg-black hover:text-white transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Animated Mobile Menu Overlay with Large Typography */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-[#050505] text-[#F3F3F1] flex flex-col justify-between p-6 sm:p-10 select-none animate-in fade-in zoom-in-95 duration-200 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar inside Fullscreen Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-condensed font-bold text-base">
                {PORTFOLIO_CONFIG.personal.shortMark}
              </span>
              <span className="text-xs font-bold tracking-wider font-condensed uppercase text-white">
                DESIGN BY AASHISH
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items with Large Typography */}
          <div className="my-auto py-8 flex flex-col space-y-4 sm:space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-white hover:text-white/70 transition-colors"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm font-mono text-neutral-500">
                    {link.number}
                  </span>
                  <span className="text-5xl sm:text-6xl md:text-7xl font-condensed font-extrabold uppercase tracking-tight leading-none">
                    {link.name}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>

          {/* Bottom Bar: Action CTA + Direct Email + Photo Access */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div>
                <span className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                  Direct Contact
                </span>
                <a 
                  href={`mailto:${PORTFOLIO_CONFIG.personal.email}`}
                  className="text-xs sm:text-sm font-mono text-white hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_CONFIG.personal.email}</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-condensed font-bold text-sm tracking-wider uppercase hover:bg-neutral-200 transition-colors text-center"
            >
              LET'S TALK / GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </>
  );
};
