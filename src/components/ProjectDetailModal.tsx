import React, { useEffect } from 'react';
import { WorkProject } from './SelectedWorks';
import { X, ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: WorkProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-[#0B0C10] border border-white/15 p-6 sm:p-10 text-white shadow-2xl my-8 text-left">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#EAB308]">
              {project.category}
            </span>
            <h2 id="project-title" className="text-3xl sm:text-5xl font-condensed font-bold uppercase tracking-tight text-white mt-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="my-8 space-y-6 text-sm text-neutral-300 leading-relaxed font-sans">
          <div>
            <h3 className="text-xs font-mono uppercase text-neutral-400 mb-2">Overview</h3>
            <p className="text-base text-neutral-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase text-neutral-400 mb-3">Key Capabilities &amp; Architecture</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
              {project.features.map((feature, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase text-neutral-400 mb-2.5">Technical Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              <span>Launch Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/aashishtiwary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono uppercase border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            Close (Esc)
          </button>
        </div>

      </div>
    </div>
  );
};
