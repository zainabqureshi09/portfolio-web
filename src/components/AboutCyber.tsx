'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CyberCard from './ui/CyberCard';
import TechBadge from './ui/TechBadge';
import { FaBrain, FaCode, FaBolt, FaMicrochip, FaDatabase, FaBullseye } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';

const AboutCyber: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    { name: 'AI/ML Systems', icon: <FaBrain className="w-4 h-4" /> },
    { name: 'Next.js', icon: <FaCode className="w-4 h-4" /> },
    { name: 'React', icon: <FaCode className="w-4 h-4" /> },
    { name: 'TypeScript', icon: <FaCode className="w-4 h-4" /> },
    { name: 'Python', icon: <FaMicrochip className="w-4 h-4" /> },
    { name: 'TensorFlow', icon: <GiArtificialIntelligence className="w-4 h-4" /> },
    { name: 'Three.js', icon: <FaBolt className="w-4 h-4" /> },
    { name: 'MongoDB', icon: <FaDatabase className="w-4 h-4" /> }
  ];

  return (
    <section className="py-12 xs:py-16 md:py-20 px-4 xs:px-6 sm:px-8 bg-cyber-gradient" id="about">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="space-y-8 xs:space-y-10 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center space-y-3 xs:space-y-4"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm" style={{
              background: 'var(--cyber-glow-purple)',
              border: '1px solid var(--cyber-purple)',
              color: 'var(--cyber-purple)'
            }}>
              <FaBrain className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              <span className="font-mono">About.exe</span>
            </div>
            
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: 'var(--foreground)' }}>
              <span style={{ color: 'var(--cyber-green)' }}>The Mind</span> Behind{' '}
              <span style={{ color: 'var(--cyber-cyan)' }}>The Code</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 md:gap-12 items-start">
            {/* Left Column - About Text */}
            <motion.div 
              className="space-y-4 xs:space-y-6"
              variants={itemVariants}
            >
              <CyberCard variant="default" className="space-y-4 xs:space-y-6">
                <div className="space-y-3 xs:space-y-4">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold flex items-center gap-1.5 xs:gap-2" style={{ color: 'var(--cyber-green)' }}>
                    <FaBullseye className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    <span className="hidden xs:inline">Mission Statement</span>
                    <span className="xs:hidden">Mission</span>
                  </h3>
                  
                  <p style={{ color: 'var(--foreground-secondary)' }} className="leading-relaxed text-sm xs:text-base">
                    I am a passionate Full-Stack TypeScript Developer specializing in large-scale 
                    applications and AI integration. With 30+ projects including 13MB codebases, 
                    I transform complex ideas into production-ready systems that scale.
                  </p>

                  <p style={{ color: 'var(--foreground-secondary)' }} className="leading-relaxed text-sm xs:text-base">
                    My expertise spans <span style={{ color: 'var(--cyber-cyan)' }}>Next.js & TypeScript</span>, 
                    <span style={{ color: 'var(--cyber-purple)' }}> AI/ML Integration</span>, and 
                    <span style={{ color: 'var(--cyber-green)' }}> E-commerce Platforms</span>. Every 
                    project I build is crafted for performance, scalability, and real-world impact.
                  </p>
                </div>

                {/* AI Specializations */}
                <div className="border-t pt-3 xs:pt-4" style={{ borderColor: 'rgba(0, 255, 136, 0.2)' }}>
                  <h4 className="text-base xs:text-lg font-semibold mb-2 xs:mb-3" style={{ color: 'var(--cyber-cyan)' }}>
                    <span className="hidden sm:inline">AI Specializations:</span>
                    <span className="sm:hidden">AI Skills:</span>
                  </h4>
                  <ul className="space-y-1.5 xs:space-y-2 text-sm xs:text-base" style={{ color: 'var(--foreground-secondary)' }}>
                    <li className="flex items-start gap-1.5 xs:gap-2">
                      <span className="mt-0.5 xs:mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span><span className="hidden sm:inline">Virtual Try-On Systems & Computer Vision</span><span className="sm:hidden">Virtual Try-On Systems</span></span>
                    </li>
                    <li className="flex items-start gap-1.5 xs:gap-2">
                      <span className="mt-0.5 xs:mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span><span className="hidden sm:inline">AI Agent Frameworks & Automation</span><span className="sm:hidden">AI Agent Frameworks</span></span>
                    </li>
                    <li className="flex items-start gap-1.5 xs:gap-2">
                      <span className="mt-0.5 xs:mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span>Machine Learning Integration</span>
                    </li>
                    <li className="flex items-start gap-1.5 xs:gap-2">
                      <span className="mt-0.5 xs:mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span><span className="hidden sm:inline">Intelligent System Architecture</span><span className="sm:hidden">System Architecture</span></span>
                    </li>
                  </ul>
                </div>
              </CyberCard>
            </motion.div>

            {/* Right Column - Skills & Stats */}
            <motion.div 
              className="space-y-4 xs:space-y-6"
              variants={itemVariants}
            >
              {/* Skills Cloud */}
              <CyberCard variant="skill" className="space-y-3 xs:space-y-4">
                <h3 className="text-lg xs:text-xl font-bold flex items-center gap-1.5 xs:gap-2" style={{ color: 'var(--cyber-cyan)' }}>
                  <FaBolt className="w-4 h-4 xs:w-5 xs:h-5" />
                  <span className="hidden sm:inline">Core Technologies</span>
                  <span className="sm:hidden">Technologies</span>
                </h3>
                
                <div className="flex flex-wrap gap-1.5 xs:gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                    >
                      <TechBadge 
                        tech={skill.name} 
                        variant="skill" 
                        icon={skill.icon}
                      />
                    </motion.div>
                  ))}
                </div>
              </CyberCard>

              {/* Statistics */}
              <CyberCard variant="project" className="space-y-3 xs:space-y-4">
                <h3 className="text-lg xs:text-xl font-bold" style={{ color: 'var(--cyber-purple)' }}>
                  <span className="hidden sm:inline">System Statistics</span>
                  <span className="sm:hidden">Statistics</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-2 xs:gap-3 md:gap-4">
                  <div className="text-center p-2 xs:p-3 md:p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-green)' }}>
                    <div className="text-lg xs:text-xl md:text-2xl font-bold" style={{ color: 'var(--cyber-green)' }}>30+</div>
                    <div className="text-xs xs:text-sm" style={{ color: 'var(--foreground-muted)' }}><span className="hidden xs:inline">Projects Deployed</span><span className="xs:hidden">Projects</span></div>
                  </div>
                  
                  <div className="text-center p-2 xs:p-3 md:p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-cyan)' }}>
                    <div className="text-lg xs:text-xl md:text-2xl font-bold" style={{ color: 'var(--cyber-cyan)' }}>13MB</div>
                    <div className="text-xs xs:text-sm" style={{ color: 'var(--foreground-muted)' }}><span className="hidden xs:inline">Largest Codebase</span><span className="xs:hidden">Codebase</span></div>
                  </div>
                  
                  <div className="text-center p-2 xs:p-3 md:p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-purple)' }}>
                    <div className="text-lg xs:text-xl md:text-2xl font-bold" style={{ color: 'var(--cyber-purple)' }}>6+</div>
                    <div className="text-xs xs:text-sm" style={{ color: 'var(--foreground-muted)' }}>Live Apps</div>
                  </div>
                  
                  <div className="text-center p-2 xs:p-3 md:p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-orange)' }}>
                    <div className="text-lg xs:text-xl md:text-2xl font-bold" style={{ color: 'var(--cyber-orange)' }}>8</div>
                    <div className="text-xs xs:text-sm" style={{ color: 'var(--foreground-muted)' }}><span className="hidden xs:inline">Advanced Skills</span><span className="xs:hidden">Skills</span></div>
                  </div>
                </div>
              </CyberCard>

              {/* Current Status */}
              <CyberCard variant="terminal" className="font-mono text-xs xs:text-sm terminal-window">
                <div className="space-y-1.5 xs:space-y-2 mt-6 xs:mt-8">
                  <div style={{ color: 'var(--cyber-cyan)' }}>
                    <span className="hidden xs:inline">// Current Status</span>
                    <span className="xs:hidden">// Status</span>
                  </div>
                  <div style={{ color: 'var(--foreground-secondary)' }} className="break-words">
                    <span style={{ color: 'var(--cyber-green)' }}>status:</span> <span className="hidden sm:inline">"Available for Projects"</span><span className="sm:hidden">"Available"</span>
                  </div>
                  <div style={{ color: 'var(--foreground-secondary)' }} className="break-words">
                    <span style={{ color: 'var(--cyber-green)' }}>location:</span> <span className="hidden sm:inline">"Remote + Karachi, Pakistan"</span><span className="sm:hidden">"Remote"</span>
                  </div>
                  <div style={{ color: 'var(--foreground-secondary)' }} className="break-words">
                    <span style={{ color: 'var(--cyber-green)' }}>focus:</span> <span className="hidden sm:inline">"TypeScript + AI Systems"</span><span className="sm:hidden">"TypeScript + AI"</span>
                  </div>
                  <div style={{ color: 'var(--foreground-secondary)' }} className="break-words">
                    <span style={{ color: 'var(--cyber-green)' }}>motto:</span> <span className="hidden sm:inline">"Build Smart, Scale Fast"</span><span className="sm:hidden">"Build Smart"</span>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCyber;