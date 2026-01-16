import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import EnhancedAboutSection from '@/components/EnhancedAboutSection';
import EnhancedSkillsSection from '@/components/EnhancedSkillsSection';
import EnhancedProjectsSection from '@/components/EnhancedProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EnhancedContactSection from '@/components/EnhancedContactSection';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <ParticlesBackground />
      <EnhancedHeroSection />
      <EnhancedAboutSection />
      <EnhancedSkillsSection />
      <EnhancedProjectsSection />
      <ExperienceSection />
      <EnhancedContactSection />
      <FloatingActionButtons />
    </div>
  );
}