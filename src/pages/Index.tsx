
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import GitProjectsListSection from '@/components/GitProjectsListSection';
import SkillsSection from '@/components/SkillsSection';
import ThoughtsSection from '@/components/ThoughtsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-t-2 border-r-2 border-neon-blue rounded-full animate-spin mb-4"></div>
          <p className="text-white/80 animate-pulse">Entering the Futureverse...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GitProjectsListSection />
      <SkillsSection />
      <ThoughtsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
