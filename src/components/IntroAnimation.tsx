import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1100; // ms

    const step = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        setFading(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-[#F3F3F1] transition-all duration-500 select-none ${
        fading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center space-y-6 text-center animate-in fade-in duration-300">
        
        {/* Monogram Badge (AKT) */}
        <div className="w-16 h-16 rounded-2xl bg-white text-black font-condensed font-extrabold text-3xl tracking-widest flex items-center justify-center shadow-2xl border border-white/20">
          AKT
        </div>

        {/* Brand Title */}
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-condensed font-bold uppercase tracking-widest text-white">
            DESIGN BY AASHISH
          </h1>
          <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            Developer · Live APIs · Fine Art Photography
          </p>
        </div>

        {/* Loading Progress Bar & Percentage */}
        <div className="w-48 sm:w-60 space-y-2 pt-2">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-neutral-400">
            <span>INITIALIZING</span>
            <span className="text-white font-bold tabular-nums">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
