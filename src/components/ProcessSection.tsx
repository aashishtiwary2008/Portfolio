import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Layout, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const pillars = PORTFOLIO_CONFIG.pillars;

  return (
    <section 
      id="process" 
      className="my-8 sm:my-14 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#050505] text-[#F3F3F1] py-20 sm:py-32 px-6 sm:px-14 border border-white/10 select-none shadow-2xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-white/15 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <span className="text-white font-semibold">METHODOLOGY &amp; EXECUTION</span>
          <span className="text-base font-bold text-white">04/05</span>
        </div>

        {/* 2-Column Process: Stacked Typography (video 00:13) + Dynamic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-12 items-center">
          
          {/* Left: Giant Stacked Words (DEFINE, DESIGN, DELIVER) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {pillars.map((pillar, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={pillar.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer transition-all duration-300 pb-6 border-b border-white/10 ${
                    isActive ? 'opacity-100' : 'opacity-30 hover:opacity-70'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-6xl sm:text-7xl md:text-8xl font-condensed font-extrabold tracking-tighter uppercase leading-none">
                      {pillar.step}
                    </h3>
                    <span className="font-mono text-sm sm:text-base text-neutral-400">
                      {pillar.number}
                    </span>
                  </div>

                  {isActive && (
                    <div className="mt-4 space-y-2 animate-in fade-in duration-300">
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                        {pillar.tag}
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-neutral-300 leading-relaxed max-w-lg font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Showcase Card (video 00:13 - 00:15) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0e0f14] p-5 sm:p-8 min-h-[350px] sm:aspect-[4/3] flex flex-col justify-between shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
                <span className="uppercase text-white font-bold">Phase {pillars[activeStep].number} Specification</span>
                <span>Aashish Tiwari</span>
              </div>

              {/* Dynamic Graphics for each phase */}
              <div className="my-auto py-6">
                {activeStep === 0 && (
                  <div className="space-y-3 font-mono text-xs text-neutral-300">
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                      <span>API Schema &amp; Endpoints Audit</span>
                      <span className="text-white font-bold">100% Validated</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                      <span>Dataset Normalization</span>
                      <span className="text-white font-bold">Zero Duplicates</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                      <span>Data Structures &amp; Complexity</span>
                      <span className="text-white font-bold">O(1) Hash Map</span>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
                      <Layout className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-condensed font-bold uppercase text-white tracking-wide">
                      MONOCHROME EDITORIAL DISCIPLINE
                    </h4>
                    <p className="text-xs text-neutral-400 max-w-sm mx-auto font-sans">
                      High black/white contrast, generous whitespace, accessible touch targets, and balanced typographic hierarchy.
                    </p>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/15 text-white">
                      <div className="flex justify-between items-center mb-1 font-bold">
                        <span>Production Deployment</span>
                        <span className="text-emerald-400">ONLINE</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 font-sans">MyToolsAPI + Aureus Exchange live global availability</p>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-neutral-400 px-2">
                      <ShieldCheck className="w-4 h-4 text-white" />
                      <span>Strict semantic HTML5 markup &amp; WCAG AA contrast standards</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                <span className="text-neutral-500 font-mono">Phase 0{activeStep + 1} of 03</span>
                <div className="flex gap-2">
                  {pillars.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeStep === i ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to phase ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
