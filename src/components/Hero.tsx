import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const photoUrl = './aashish-portrait.jpg';
  const fallbackUrl = 'https://i.ibb.co/0jqN5Z9J/Whats-App-Image-2026-10-06-at-1-18-23-AM.jpg';

  return (
    <section 
      id="hero" 
      className="relative min-h-[94vh] sm:min-h-[98vh] rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#F3F3F1] text-[#111111] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 px-5 sm:px-12 lg:px-16 border border-black/5 select-none shadow-sm"
    >
      {/* Decorative Hairline Grid / Circular Line Graphics (video 00:04) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Large partial circular arc */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full border border-black/[0.08]" />
        
        {/* Secondary concentric orbital ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] sm:w-[900px] sm:h-[900px] rounded-full border border-black/[0.06] animate-spin-slow pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-black absolute -top-1 left-1/2" />
        </div>

        {/* Fine technical crosshairs / guides */}
        <div className="absolute top-1/4 right-12 w-32 h-[1px] bg-black/10 hidden md:block" />
        <div className="absolute bottom-1/3 left-12 w-28 h-[1px] bg-black/10 hidden md:block" />
        
        {/* Subtle coordinate stamp */}
        <div className="absolute top-28 right-12 text-[10px] font-mono tracking-widest text-black/30 hidden lg:block uppercase">
          22° 34' 22" N · 88° 21' 50" E // CAL
        </div>
      </div>

      {/* Top Info Strip: Freelancer, Designer & Web Development + Location */}
      <div className="relative z-20 flex items-start justify-between text-xs font-mono tracking-wider uppercase text-neutral-500 px-1 sm:px-0">
        <div>
          <span className="font-bold text-[#111111] block text-[13px] sm:text-sm font-sans tracking-tight">
            Freelancer
          </span>
          <span className="text-neutral-500 font-mono text-[10px] sm:text-xs">
            Designer &amp; Web Development
          </span>
        </div>

        {/* Center editorial stamp */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/[0.03] text-[10px] font-mono tracking-widest text-[#111111]">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span>AKT · EDITORIAL ARCHIVE</span>
        </div>

        <div className="text-right">
          <span className="font-bold text-[#111111] block text-[13px] sm:text-sm font-sans tracking-tight">
            Kolkata, India
          </span>
          <span className="text-neutral-500 font-mono text-[10px] sm:text-xs">
            IST · Available for Hire
          </span>
        </div>
      </div>

      {/* Main Editorial Hero Composition: Monumental Typography BEHIND, Portrait Cutout Overlapping Seamlessly (NO BOX) */}
      <div className="relative my-auto flex-1 flex items-end justify-center min-h-[480px] sm:min-h-[580px] md:min-h-[640px] w-full">
        
        {/* LAYER 1 (BEHIND): Monumental condensed display typography spanning across the entire hero */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
          <h1 className="text-[15vw] sm:text-[16.5vw] md:text-[17.5vw] lg:text-[18vw] font-condensed font-black uppercase tracking-[-0.04em] text-[#050505] leading-none whitespace-nowrap text-center opacity-95">
            AASHISH TIWARI
          </h1>
        </div>

        {/* Flanking Editorial Metadata (Left Flank) - Asymmetric art direction */}
        <div className="absolute left-0 bottom-16 z-10 hidden xl:flex flex-col space-y-4 max-w-[220px] text-left pointer-events-none">
          <div className="w-8 h-[1px] bg-black/30" />
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
              01 // CORE PROFILE
            </span>
            <p className="text-xs font-sans font-bold text-[#111111] uppercase tracking-tight">
              Aashish Tiwari
            </p>
            <p className="text-[11px] font-mono text-neutral-500 leading-snug">
              Creative Builder &amp; Full-Stack API Architect
            </p>
          </div>
          <div className="text-[10px] font-mono text-neutral-400">
            BCA CANDIDATE · '29
          </div>
        </div>

        {/* Flanking Editorial Metadata (Right Flank) */}
        <div className="absolute right-0 bottom-16 z-10 hidden xl:flex flex-col space-y-4 max-w-[240px] text-right pointer-events-none">
          <div className="w-8 h-[1px] bg-black/30 ml-auto" />
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
              SELECTED INDEX
            </span>
            <p className="text-[11px] font-mono text-neutral-700 leading-relaxed">
              • 01 MyToolsAPI.com<br />
              • 02 Aureus Exchange<br />
              • 03 Cloud's Beauty
            </p>
          </div>
          <div className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
            ● READY FOR PROJECTS
          </div>
        </div>

        {/* LAYER 2 (CENTER FOREGROUND): Organic Portrait Cutout rising from the base, overlapping the text seamlessly (NO BOX WORK) */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full max-h-[84vh] pointer-events-none">
          
          {/* Subtle atmospheric ambient glow behind the portrait */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-black/[0.04] blur-3xl pointer-events-none -z-10" />

          {/* Portrait Image with organic bottom gradient mask & zero box borders */}
          <div 
            className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[490px] max-w-[92vw] h-[450px] sm:h-[550px] md:h-[620px] lg:h-[680px] overflow-hidden pointer-events-auto"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
            }}
          >
            <img 
              src={photoUrl} 
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackUrl;
              }}
              alt="Aashish Tiwari" 
              className="w-full h-full object-cover object-[center_14%] filter contrast-[1.05] brightness-[1.0] select-none pointer-events-none transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Seamless feathered blend at bottom into #F3F3F1 canvas */}
            <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#F3F3F1] via-[#F3F3F1]/80 to-transparent pointer-events-none" />
          </div>

          {/* LAYER 3: Sleek Floating Monogram Anchor Tag in front of the base */}
          <div className="absolute bottom-4 sm:bottom-6 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-xl text-[#050505] pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="font-condensed font-extrabold text-sm sm:text-base tracking-widest uppercase">
              AKT · AASHISH TIWARI
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider pl-2 border-l border-black/15">
              CREATIVE BUILDER
            </span>
          </div>

        </div>

      </div>

      {/* Bottom Row: Status Badge & Animated Scroll Down Indicator (video 00:04) */}
      <div className="relative z-20 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-600 pt-4 border-t border-black/10 px-1 sm:px-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#111111] font-semibold text-[11px] sm:text-xs">Available for freelance &amp; internships</span>
        </div>

        <a 
          href="#about" 
          className="flex items-center gap-2 text-[#111111] hover:opacity-60 transition-opacity font-bold group"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

    </section>
  );
};
