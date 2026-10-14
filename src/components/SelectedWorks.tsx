import React, { useState } from 'react';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, Camera, Sparkles, ExternalLink } from 'lucide-react';

export interface WorkProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  liveUrl: string;
  githubUrl?: string;
  description: string;
  techStack: string[];
  features: string[];
  accentColor: string;
  status: string;
}

export const PROJECTS_DATA: WorkProject[] = [
  {
    id: 'mytoolsapi',
    title: 'MyToolsAPI',
    subtitle: 'All-in-One Online Utilities & Live APIs Hub',
    category: 'Web Utility & Live APIs',
    liveUrl: 'https://www.mytoolsapi.com/',
    githubUrl: 'https://github.com/aashishtiwary',
    description: 'A free online tools hub powered by live APIs — weather forecast, currency conversion, real-time crypto and gold prices, a calculator, QR and password generators, IP/DNS lookup, and live news, all in one place.',
    techStack: ['Live APIs', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'REST Integrations', 'DNS/Network Tools', 'Web Standards'],
    features: [
      'Real-time weather & multi-currency conversion',
      'Live crypto & gold spot rate feeds',
      'Secure QR & cryptographic password generators',
      'IP address & DNS lookup diagnostics',
      'Zero-bloat instant response architecture'
    ],
    accentColor: '#4F7CFF',
    status: 'LIVE PRODUCTION'
  },
  {
    id: 'aureusexchange',
    title: 'Aureus Exchange',
    subtitle: 'Real-Time Crypto, Precious Metals & Currency Tracker',
    category: 'Finance, Crypto & Market Rates',
    liveUrl: 'https://aureusexchange.netlify.app/',
    githubUrl: 'https://github.com/aashishtiwary',
    description: 'A live market value tracker covering spot gold, silver, and platinum, Bitcoin and Ethereum, and major sovereign currency pairs — laid out as one clean, continuously refreshed financial dashboard.',
    techStack: ['Market Data APIs', 'Real-Time Rates', 'JavaScript', 'CSS Grid & Modern UI', 'Netlify Hosting', 'Financial Data'],
    features: [
      'Continuous spot prices for gold, silver & platinum',
      'Live tracking for Bitcoin, Ethereum & top cryptos',
      'Sovereign fiat currency exchange rates',
      'High-density dark cockpit dashboard',
      'Automated rate refresh with zero page reloads'
    ],
    accentColor: '#EAB308',
    status: 'LIVE DASHBOARD'
  },
  {
    id: 'clouds-beauty',
    title: "Cloud's Beauty",
    subtitle: 'Fine Art Photography & Atmospheric Gallery',
    category: 'Visual Photography & Arts',
    liveUrl: 'https://akt121.wixsite.com/clouds-beauty',
    description: "When I'm not building software, I'm behind a lens. Cloud's Beauty is an online gallery showcasing high-contrast cloud formations, golden hour moods, and environmental compositions.",
    techStack: ['Visual Storytelling', 'Color Grading', 'High-Dynamic Framing', 'Wix Gallery', 'Instagram'],
    features: [
      'Atmospheric landscape and cloudscape photography',
      'Natural light and high-contrast shadow studies',
      'Narrative composition of rural and urban Bengal',
      'Integrated Instagram creative community feed'
    ],
    accentColor: '#EC4899',
    status: 'ACTIVE GALLERY'
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    subtitle: 'Precision Prompt Engineering & Research Pipelines',
    category: 'AI Integration & Workflows',
    liveUrl: 'https://www.mytoolsapi.com/',
    description: 'Automated pipelines for converting raw research notes and technical data into structured formats, boosting turnaround time and operational efficiency.',
    techStack: ['Generative AI', 'Prompt Engineering', 'Data Cleaning', 'Automation', 'Workflows'],
    features: [
      'Automated technical notes normalization',
      'Prompt-engineered synthesis pipelines',
      'Data verification & duplicate removal protocols'
    ],
    accentColor: '#8B5CF6',
    status: 'SYSTEM PIPELINE'
  }
];

export const SelectedWorks: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<WorkProject | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<WorkProject | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const renderMockup = (project: WorkProject) => {
    if (project.id === 'mytoolsapi') {
      return (
        <div className="w-full h-full bg-[#07090E] p-4 text-white flex flex-col justify-between font-mono text-xs select-none border border-white/20 shadow-2xl rounded-xl overflow-hidden">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[10px] text-neutral-400 font-sans">mytoolsapi.com</span>
            </div>
            <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
              ● 18ms LIVE
            </span>
          </div>

          {/* Interactive Utilities Preview */}
          <div className="grid grid-cols-2 gap-2 my-2 text-[10px]">
            <div className="p-2 rounded bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <span className="text-neutral-400 text-[9px]">WEATHER &amp; FX</span>
              <div className="flex justify-between items-center mt-1">
                <span className="text-white font-bold">24°C Sunny</span>
                <span className="text-emerald-400 font-mono">USD/INR 86.8</span>
              </div>
            </div>

            <div className="p-2 rounded bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <span className="text-neutral-400 text-[9px]">CRYPTO &amp; GOLD</span>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[#EAB308] font-bold">Gold $2,748</span>
                <span className="text-cyan-400 font-mono">BTC $68.9K</span>
              </div>
            </div>

            <div className="p-2 rounded bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <span className="text-neutral-400 text-[9px]">SECURITY GENERATOR</span>
              <span className="text-neutral-200 font-mono text-[9px] truncate mt-1">x8F9#k2!pQ0z</span>
            </div>

            <div className="p-2 rounded bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <span className="text-neutral-400 text-[9px]">IP / DNS LOOKUP</span>
              <span className="text-emerald-400 font-mono text-[9px] truncate mt-1">104.21.64.120</span>
            </div>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[9px] text-neutral-400">
            <span>Free Online Utilities &amp; REST APIs</span>
            <span className="text-[#4F7CFF] font-bold">EXPLORE HUB →</span>
          </div>
        </div>
      );
    }

    if (project.id === 'aureusexchange') {
      return (
        <div className="w-full h-full bg-[#0D0B05] p-4 text-white flex flex-col justify-between font-mono text-xs select-none border border-amber-500/30 shadow-2xl rounded-xl overflow-hidden">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[10px] text-amber-200/60 font-sans">aureusexchange.netlify.app</span>
            </div>
            <span className="text-[9px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 font-bold animate-pulse">
              ● REAL-TIME STREAM
            </span>
          </div>

          {/* Live Market Rates Grid */}
          <div className="grid grid-cols-2 gap-2 my-2 text-[10px]">
            <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30">
              <span className="text-neutral-400 block text-[9px]">SPOT GOLD (XAU)</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-amber-300 font-bold text-xs">$2,748.20</span>
                <span className="text-emerald-400 text-[9px]">+1.42%</span>
              </div>
            </div>

            <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30">
              <span className="text-neutral-400 block text-[9px]">SPOT SILVER (XAG)</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-neutral-200 font-bold text-xs">$32.40</span>
                <span className="text-emerald-400 text-[9px]">+2.05%</span>
              </div>
            </div>

            <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30">
              <span className="text-neutral-400 block text-[9px]">BITCOIN (BTC)</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-emerald-400 font-bold text-xs">$68,920</span>
                <span className="text-emerald-400 text-[9px]">+3.18%</span>
              </div>
            </div>

            <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30">
              <span className="text-neutral-400 block text-[9px]">ETHEREUM (ETH)</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-cyan-400 font-bold text-xs">$3,485</span>
                <span className="text-emerald-400 text-[9px]">+1.85%</span>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between pt-1 border-t border-amber-500/20 text-[9px] text-neutral-400">
            <span>Metals, Cryptos &amp; Sovereign Currencies</span>
            <span className="text-amber-400 font-bold">VIEW COCKPIT →</span>
          </div>
        </div>
      );
    }

    if (project.id === 'clouds-beauty') {
      return (
        <div className="w-full h-full bg-[#140810] p-5 text-white flex flex-col justify-between select-none border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between border-b border-pink-500/20 pb-2 font-mono text-xs">
            <span className="text-pink-400 font-bold">Cloud's Beauty</span>
            <Camera className="w-3.5 h-3.5 text-pink-400" />
          </div>
          <div className="my-auto text-center py-2">
            <h4 className="font-condensed text-2xl text-white tracking-wider">FINE ART GALLERY</h4>
            <p className="text-[11px] text-neutral-300 font-sans mt-0.5">Atmospheric clouds &amp; lighting</p>
          </div>
          <div className="text-[10px] font-mono text-neutral-400">Curated exhibition series</div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-[#0D0A14] p-5 text-white flex flex-col justify-between font-mono text-xs select-none border border-white/20 shadow-2xl">
        <div className="flex justify-between border-b border-purple-500/20 pb-2">
          <span className="text-purple-400 font-bold">AI Pipelines</span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        </div>
        <p className="my-auto text-neutral-300 text-xs font-sans">Prompt engineering &amp; document synthesis</p>
        <span className="text-[10px] text-neutral-400">Structured data operations</span>
      </div>
    );
  };

  return (
    <section 
      id="work" 
      onMouseMove={handleMouseMove} 
      className="my-8 sm:my-14 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#FFFFFF] text-[#111111] py-20 sm:py-32 px-6 sm:px-14 border border-black/5 select-none shadow-sm relative overflow-hidden"
    >
      {/* Section Header (video 00:09) */}
      <div className="flex items-center justify-between mb-16 pb-6 border-b border-black/10 text-xs font-mono uppercase tracking-widest text-neutral-500">
        <span className="text-[#111111] font-bold">SELECTED WORKS</span>
        <span>03/05</span>
      </div>

      {/* Editorial Row List with Large Typography & Dashed Dividers (video 00:09 - 00:11) */}
      <div className="divide-y divide-black/10 border-t border-b border-black/10">
        {PROJECTS_DATA.map((project, idx) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group py-10 sm:py-14 px-2 sm:px-4 transition-all duration-300 hover:bg-black/[0.02]"
          >
            {/* Top row: Number, Title, Category and Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-mono text-sm text-neutral-400 w-8">0{idx + 1}</span>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-4xl sm:text-6xl md:text-7xl font-condensed font-bold tracking-tight text-[#111111] group-hover:opacity-70 transition-opacity uppercase text-left leading-none"
                >
                  {project.title}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono pl-12 md:pl-0">
                <span className="text-neutral-500 uppercase tracking-wider hidden sm:inline-block">
                  {project.category}
                </span>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors text-xs font-mono font-semibold"
                  title="View project architectural specs & details"
                >
                  <span>Specs</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-black/20 text-[#111111] hover:bg-[#050505] hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
                >
                  <span>Visit Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Description & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pl-12 sm:pl-16 pt-3">
              <div className="md:col-span-8">
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl font-sans">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="md:col-span-4 flex flex-wrap gap-1.5 items-start">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Floating Interactive Hover Preview (video 00:10 / 00:11) */}
      {hoveredProject && (
        <div 
          className="hidden lg:block pointer-events-none fixed w-[380px] h-[240px] rounded-2xl overflow-hidden shadow-2xl border border-black/20 z-50 transition-transform duration-75 ease-out backdrop-blur-md"
          style={{
            left: `${typeof window !== 'undefined' ? Math.min(window.innerWidth - 410, mousePos.x + 28) : mousePos.x + 28}px`,
            top: `${typeof window !== 'undefined' ? Math.max(16, Math.min(window.innerHeight - 260, mousePos.y - 120)) : mousePos.y - 120}px`,
          }}
        >
          {renderMockup(hoveredProject)}
        </div>
      )}

      {/* Detail Modal */}
      <ProjectDetailModal 
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
