import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, X, Copy, Check, ExternalLink } from 'lucide-react';

interface FooterProps {
  isContactModalOpen: boolean;
  onCloseContactModal: () => void;
  onOpenContactModal: () => void;
}

export const FooterSection: React.FC<FooterProps> = ({ 
  isContactModalOpen, 
  onCloseContactModal, 
  onOpenContactModal 
}) => {
  const { socials, personal } = PORTFOLIO_CONFIG;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct real mailto link and trigger
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Aashish,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoLink = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    
    // Trigger user mail client
    window.location.href = mailtoLink;
    setFormSubmitted(true);
  };

  return (
    <footer 
      id="contact" 
      className="my-8 sm:my-14 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#050505] text-[#F3F3F1] pt-20 sm:pt-32 pb-12 px-6 sm:px-14 border border-white/10 select-none shadow-2xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[70vh]">
        
        {/* Top: Diagonal Arrow + "LET'S WORK TOGETHER" + Connected Email Actions (video 00:16) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 border-b border-white/15">
          <div className="flex items-start gap-6 sm:gap-10">
            <ArrowUpRight className="w-16 h-16 sm:w-28 sm:h-28 text-white stroke-[1.2] shrink-0" />
            <div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-condensed font-extrabold tracking-tight uppercase leading-none">
                LET'S WORK<br />TOGETHER
              </h2>
              
              {/* Connected Direct Email Row */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a 
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all font-mono text-xs font-bold"
                  title="Open mail app to send email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personal.email}</span>
                </a>

                <button
                  onClick={() => handleCopyEmail()}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white transition-all text-xs font-mono"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-neutral-400 mt-2.5 font-mono">
                {personal.location} · Available for Freelance &amp; Internships
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenContactModal}
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-center"
            >
              SEND ME A MESSAGE
            </button>
          </div>
        </div>

        {/* Center: Normal Monumental Condensed Typography "AASHISH TIWARI" (As in Reference Video) */}
        <div className="my-auto py-12 sm:py-24 text-center overflow-hidden select-none">
          <h1 className="text-[14vw] sm:text-[15.5vw] md:text-[16.5vw] lg:text-[17vw] font-condensed font-black tracking-[-0.04em] uppercase leading-none text-white whitespace-nowrap hover:opacity-90 transition-opacity">
            AASHISH TIWARI
          </h1>
        </div>

        {/* Bottom Bar: Copyright & Exact Social Links (as requested at bottom) */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} DESIGN BY AASHISH. ALL RIGHT RESERVED.
          </div>

          {/* Social links at the bottom */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 font-semibold uppercase tracking-wider">
            <a 
              href={socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              INSTAGRAM
            </a>
            <span aria-hidden="true" className="text-white/20">·</span>
            <a 
              href={socials.instagramPhotography} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              PHOTOGRAPHY
            </a>
            <span aria-hidden="true" className="text-white/20">·</span>
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <span aria-hidden="true" className="text-white/20">·</span>
            <a 
              href={`mailto:${personal.email}`}
              className="hover:text-white transition-colors text-white font-bold"
            >
              EMAIL
            </a>
          </div>
        </div>

      </div>

      {/* Clean Interactive Contact Modal */}
      {isContactModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0" onClick={onCloseContactModal} aria-hidden="true" />
          
          <div className="relative z-10 w-full max-w-lg rounded-3xl bg-[#0c0d12] border border-white/20 p-6 sm:p-10 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <h3 className="text-3xl font-condensed font-bold uppercase">Send a Message</h3>
                <p className="text-xs text-neutral-400 font-mono">Aashish Tiwari · Direct Inquiry</p>
              </div>
              <button 
                onClick={onCloseContactModal}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-white hover:text-black transition-colors"
                aria-label="Close contact modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-2xl font-condensed font-bold uppercase text-white">Opening Email Client...</h4>
                <p className="text-xs text-neutral-300 font-sans max-w-sm mx-auto">
                  Your message has been pre-formatted for <strong className="text-white">{personal.email}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`mailto:${personal.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                    className="px-6 py-3 rounded-full bg-white text-black font-condensed font-bold text-xs uppercase hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Click to Send Email</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                      onCloseContactModal();
                    }}
                    className="px-6 py-3 rounded-full border border-white/20 text-white font-condensed font-bold text-xs uppercase hover:bg-white/10 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-neutral-400 uppercase mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 uppercase mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 uppercase mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white focus:outline-none focus:border-white resize-none font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-condensed font-bold text-sm tracking-wider uppercase bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  SEND DIRECT MESSAGE
                </button>
              </form>
            )}

            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>+91 8240256596</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kolkata, West Bengal, India</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
