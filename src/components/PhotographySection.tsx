import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Camera, ExternalLink, Instagram, ArrowUpRight } from 'lucide-react';

export const PhotographySection: React.FC = () => {
  const { photographyGalleries, socials } = PORTFOLIO_CONFIG;

  return (
    <section 
      id="photography" 
      className="my-8 sm:my-14 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#FFFFFF] text-[#111111] py-20 sm:py-32 px-6 sm:px-14 border border-black/5 select-none shadow-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Creative Discipline · Hobby</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-condensed font-extrabold tracking-tight text-[#111111] uppercase leading-none">
              Cloud's Beauty
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl font-sans">
              When I'm not writing code or analyzing data, I'm behind a lens. Exploring natural skies, high-contrast shadows, and atmospheric moods.
            </p>
          </div>

          {/* External links to Wix Gallery and Instagram */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={socials.photographySite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#050505] text-white hover:bg-neutral-800 transition-colors font-mono"
            >
              <span>Visit Gallery Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={socials.photographyPost || "https://www.instagram.com/cloud._.beauty/p/C3avKWGPbGz/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-pink-500/30 bg-pink-500/10 text-pink-700 hover:bg-pink-600 hover:text-white transition-all font-mono"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Featured Shot</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={socials.instagramPhotography}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-black/20 text-[#111111] hover:bg-black hover:text-white transition-colors font-mono"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@cloud._.beauty</span>
            </a>
          </div>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photographyGalleries.map((item) => (
            <div 
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-black/10 bg-[#141518] p-6 flex flex-col justify-between aspect-[3/4] hover:border-black/30 transition-all duration-300 text-white"
            >
              {/* Subtle monochrome gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-neutral-900 opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="uppercase tracking-widest">{item.tag}</span>
                <Camera className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </div>

              {/* Bottom Caption & Title */}
              <div className="relative z-10 space-y-1">
                <h3 className="text-2xl font-condensed font-bold uppercase text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 font-sans">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F3F3F1] border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <div>
            <span className="font-bold text-[#111111] uppercase font-condensed text-base block">Cloud's Beauty Exhibition</span>
            <span className="font-sans">Explore full-resolution albums and aerial compositions on the official gallery.</span>
          </div>
          <a 
            href={socials.photographySite} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:opacity-60 font-mono uppercase tracking-wider inline-flex items-center gap-1 font-bold"
          >
            <span>Open Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
