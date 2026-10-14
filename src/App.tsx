import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StatementAndGetInTouch } from './components/StatementAndGetInTouch';
import { SelectedWorks } from './components/SelectedWorks';
import { ProcessSection } from './components/ProcessSection';
import { PhotographySection } from './components/PhotographySection';
import { FooterSection } from './components/FooterSection';
import { CustomCursor } from './components/CustomCursor';
import { IntroAnimation } from './components/IntroAnimation';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F1] text-[#111111] font-sans antialiased selection:bg-black selection:text-white px-3 sm:px-6 md:px-8 py-4 sm:py-6 max-w-[1550px] mx-auto">
      {/* 1. Cinematic Page-Load Intro Animation (video 00:00 - 00:02) */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* 2. Floating Navbar (video 00:04) */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="space-y-4 sm:space-y-8">
        {/* 3. HERO SECTION (Editorial Monumental Typography & Cutout Portrait) */}
        <Hero />

        {/* 4. /ABOUT SECTION (video 00:06 - 00:07) */}
        <AboutSection />

        {/* 5. MARQUEE & STATEMENT + CIRCULAR "GET IN TOUCH" (video 00:08 - 00:09) */}
        <StatementAndGetInTouch onOpenContact={handleOpenContact} />

        {/* 6. SELECTED WORKS (video 00:09 - 00:11) */}
        <SelectedWorks />

        {/* 7. METHODOLOGY: DEFINE · DESIGN · DELIVER (video 00:12 - 00:15) */}
        <ProcessSection />

        {/* 8. PHOTOGRAPHY HOBBY: CLOUD'S BEAUTY */}
        <PhotographySection />
      </main>

      {/* 9. FOOTER: LET'S WORK TOGETHER + GIANT ASHISH TIWARI + BOTTOM SOCIALS (video 00:16 - 00:19) */}
      <FooterSection 
        isContactModalOpen={isContactModalOpen}
        onCloseContactModal={handleCloseContact}
        onOpenContactModal={handleOpenContact}
      />
    </div>
  );
}
