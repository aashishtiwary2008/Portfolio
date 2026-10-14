import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatementProps {
  onOpenContact: () => void;
}

export const StatementAndGetInTouch: React.FC<StatementProps> = ({ onOpenContact }) => {
  const marqueeItems = [
    "DESIGN BY AASHISH",
    "✦",
    "DIGITAL PRODUCT AND WEB",
    "✦",
    "LIVE APIS & UTILITIES",
    "✦",
    "FINE ART PHOTOGRAPHY",
    "✦",
    "DATA ANALYTICS & PRECISION",
    "✦",
  ];

  return (
    <div className="w-full my-8 sm:my-14 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#FFFFFF] text-[#111111] overflow-hidden border border-black/5 select-none shadow-sm">
      
      {/* 1. Large Kinetic Scrolling Marquee (video 00:08) */}
      <div className="py-5 sm:py-6 border-b border-black/10 bg-[#050505] text-[#F3F3F1] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 text-base sm:text-lg md:text-xl font-condensed font-bold tracking-widest uppercase">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className={item === "✦" ? "text-white/60 text-xs" : "hover:text-white transition-colors"}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Statement + Circular "GET IN TOUCH" Button (video 00:08/00:09) */}
      <div className="py-20 sm:py-28 px-6 sm:px-14 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 sm:gap-16">
        
        {/* Left: Statement with editorial typography */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111111] leading-snug max-w-2xl font-sans">
          Aashish brings immense value to every project, consistently exceeding client expectations and setting new standards in the world of web utilities and creative development.
        </p>

        {/* Right: Large Circular CTA Button (video 00:09) */}
        <button
          onClick={onOpenContact}
          className="group relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-black/20 hover:border-black flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:bg-[#050505] hover:text-white shrink-0 shadow-sm"
          aria-label="Open contact form"
        >
          <span className="font-condensed font-bold text-lg sm:text-xl tracking-wider uppercase text-center leading-tight">
            GET IN<br />TOUCH
          </span>
          <ArrowUpRight className="w-5 h-5 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

      </div>

    </div>
  );
};
