import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const photoUrl = './aashish-portrait.jpg';
  const fallbackUrl = 'https://i.ibb.co/0jqN5Z9J/Whats-App-Image-2026-10-06-at-1-18-23-AM.jpg';

  return (
    <section 
      id="about" 
      className="my-8 sm:my-14 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#050505] text-[#F3F3F1] py-16 sm:py-24 px-6 sm:px-14 overflow-hidden border border-white/10 select-none shadow-2xl"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top bar with index 02/05 (as in video 00:07) */}
        <div className="flex items-center justify-between pb-8 border-b border-white/15 text-xs sm:text-sm font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-widest text-neutral-400 font-sans">
              BIOGRAPHY &amp; CAPABILITIES
            </span>
            <span className="hidden sm:inline-block text-white/20">/</span>
            <span className="hidden sm:inline-block text-neutral-500 font-mono text-xs">
              AASHISH TIWARI
            </span>
          </div>
          <span className="tracking-widest font-bold text-white text-base">02/05</span>
        </div>

        {/* Asymmetric Editorial Grid (video 00:06 / 00:07) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-12 sm:pt-16 items-start">
          
          {/* Left Column: Oversized cropped `/ABOUT` heading & Editorial Portrait Artwork */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="flex items-baseline justify-between">
              <h2 className="text-6xl sm:text-8xl md:text-9xl font-condensed font-extrabold uppercase tracking-tight text-white leading-none">
                / ABOUT
              </h2>
              <ArrowUpRight className="w-12 h-12 sm:w-20 sm:h-20 text-white/80 stroke-[1.2]" />
            </div>

            {/* Editorial Portrait Artwork (Authentic Photo with cinematic gradient and monogram tag) */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0e0f14] p-3 shadow-2xl group">
              <div className="relative aspect-[3.6/4.4] rounded-2xl overflow-hidden">
                <img 
                  src={photoUrl} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackUrl;
                  }}
                  alt="Aashish Tiwari" 
                  className="w-full h-full object-cover object-[center_12%] filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                {/* Bottom Tag inside card */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[11px] font-mono text-neutral-300 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-bold">
                    AKT · ARCHIVE
                  </span>
                  <span className="text-neutral-400 font-mono">KOLKATA, IN</span>
                </div>
              </div>
            </div>

            <p className="text-xs font-mono text-neutral-400 leading-relaxed uppercase tracking-wider">
              FIGURE 01 // INDEPENDENT DEVELOPER &amp; SYSTEMS CREATOR
            </p>
          </div>

          {/* Right Column: Authentic CV Biography + Key Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10 pt-2 sm:pt-4">
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
              "{PORTFOLIO_CONFIG.personal.bio}"
            </p>

            <div className="space-y-4 pt-8 border-t border-white/15 text-xs sm:text-sm font-mono">
              <div className="flex items-center justify-between text-neutral-400 py-1">
                <span className="uppercase tracking-wider">ACADEMIC PATH</span>
                <span className="text-white font-semibold">BCA · Expected Graduation 2029</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 py-1">
                <span className="uppercase tracking-wider">LOCATION</span>
                <span className="text-white font-semibold">Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 py-1">
                <span className="uppercase tracking-wider">CREATIVE ENDEAVOR</span>
                <a 
                  href="https://akt121.wixsite.com/clouds-beauty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:underline underline-offset-4 flex items-center gap-1 font-semibold"
                >
                  <span>Cloud's Beauty Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="flex items-center justify-between text-neutral-400 py-1">
                <span className="uppercase tracking-wider">CORE FOCUS</span>
                <span className="text-white font-semibold">Live APIs · Currency &amp; Metal Trackers · Modern UI</span>
              </div>
            </div>

            {/* Current status banner */}
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-300 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-white font-bold block mb-0.5">CURRENT FOCUS</span>
                <span className="text-neutral-400">PURSUING BCA · BUILDING PRODUCTION WEB INTERFACES &amp; LIVE DATA SYSTEMS</span>
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold">
                ● OPEN TO ROLES
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
