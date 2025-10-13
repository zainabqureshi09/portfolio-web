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
    <section className="py-20 px-4 bg-cyber-gradient" id="about">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center space-y-4"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{
              background: 'var(--cyber-glow-purple)',
              border: '1px solid var(--cyber-purple)',
              color: 'var(--cyber-purple)'
            }}>
              <FaBrain className="w-5 h-5" />
              <span className="font-mono">About.exe</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: 'var(--foreground)' }}>
              <span style={{ color: 'var(--cyber-green)' }}>The Mind</span> Behind{' '}
              <span style={{ color: 'var(--cyber-cyan)' }}>The Code</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Text */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <CyberCard variant="default" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--cyber-green)' }}>
                    <FaBullseye className="w-6 h-6" />
                    Mission Statement
                  </h3>
                  
                  <p style={{ color: 'var(--foreground-secondary)' }} className="leading-relaxed">
                    I am a passionate Full-Stack TypeScript Developer specializing in large-scale 
                    applications and AI integration. With 30+ projects including 13MB codebases, 
                    I transform complex ideas into production-ready systems that scale.
                  </p>

                  <p style={{ color: 'var(--foreground-secondary)' }} className="leading-relaxed">
                    My expertise spans <span style={{ color: 'var(--cyber-cyan)' }}>Next.js & TypeScript</span>, 
                    <span style={{ color: 'var(--cyber-purple)' }}> AI/ML Integration</span>, and 
                    <span style={{ color: 'var(--cyber-green)' }}> E-commerce Platforms</span>. Every 
                    project I build is crafted for performance, scalability, and real-world impact.
                  </p>
                </div>

                {/* AI Specializations */}
                <div className="border-t pt-4" style={{ borderColor: 'rgba(0, 255, 136, 0.2)' }}>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--cyber-cyan)' }}>AI Specializations:</h4>
                  <ul className="space-y-2" style={{ color: 'var(--foreground-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span>Virtual Try-On Systems & Computer Vision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span>AI Agent Frameworks & Automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span>Machine Learning Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--cyber-green)' }}>▸</span>
                      <span>Intelligent System Architecture</span>
                    </li>
                  </ul>
                </div>
              </CyberCard>
            </motion.div>

            {/* Right Column - Skills & Stats */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Skills Cloud */}
              <CyberCard variant="skill" className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--cyber-cyan)' }}>
                  <FaBolt className="w-5 h-5" />
                  Core Technologies
                </h3>
                
                <div className="flex flex-wrap gap-2">
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
              <CyberCard variant="project" className="space-y-4">
                <h3 className="text-xl font-bold" style={{ color: 'var(--cyber-purple)' }}>System Statistics</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-green)' }}>
                    <div className="text-2xl font-bold" style={{ color: 'var(--cyber-green)' }}>30+</div>
                    <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Projects Deployed</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-cyan)' }}>
                    <div className="text-2xl font-bold" style={{ color: 'var(--cyber-cyan)' }}>13MB</div>
                    <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Largest Codebase</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-purple)' }}>
                    <div className="text-2xl font-bold" style={{ color: 'var(--cyber-purple)' }}>6+</div>
                    <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Live Apps</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-cyber-card border" style={{ borderColor: 'var(--cyber-orange)' }}>
                    <div className="text-2xl font-bold" style={{ color: 'var(--cyber-orange)' }}>8</div>
                    <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Advanced Skills</div>
                  </div>
                </div>
              </CyberCard>

              {/* Current Status */}
              <CyberCard variant="terminal" className="font-mono text-sm terminal-window">
                <div className="space-y-2 mt-8">
                  <div style={{ color: 'var(--cyber-cyan)' }}>// Current Status</div>
                  <div style={{ color: 'var(--foreground-secondary)' }}>
                    <span style={{ color: 'var(--cyber-green)' }}>status:</span> "Available for Projects"
                  </div>
                  <div style={{ color: 'var(--foreground-secondary)' }}>
                    <span style={{ color: 'var(--cyber-green)' }}>location:</span> "Remote + Karachi, Pakistan"
                  </div>
                  <div style={{ color: 'var(--foreground-secondary)' }}>
                    <span style={{ color: 'var(--cyber-green)' }}>focus:</span> "TypeScript + AI Systems"
                  </div>
                  <div style={{ color: 'var(--foreground-secondary)' }}>
                    <span style={{ color: 'var(--cyber-green)' }}>motto:</span> "Build Smart, Scale Fast"
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