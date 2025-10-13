'use client';

import React, { useState } from 'react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import BootLoader from '@/components/BootLoader';
import HeroTerminal from '@/components/HeroTerminal';
import AboutCyber from '@/components/AboutCyber';
import ProjectsPage from './projects/page';
import SkillsPage from './skills/page';
import ContactPage from './contact/page';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleBootComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <BootLoader onComplete={handleBootComplete} />}
      
      {isLoaded && (
        <div className="min-h-screen">
          <HeroTerminal />
          <AboutCyber />
          <SkillsPage />
          <ProjectsPage />
          <ContactPage />
        </div>
      )}
    </>
  );
};

export default HomePage;
