'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CyberCard from './ui/CyberCard';
import CyberButton from './ui/CyberButton';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { FiTerminal, FiZap } from 'react-icons/fi';

const HeroTerminal: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    // Simulate terminal initialization
    const timer = setTimeout(() => {
      setShowTerminal(true);
      const lines = [
        '> whoami',
        'zainab@hax0r:~$ Full-Stack TypeScript Developer',
        '> ls -la projects/',
        'Wood-N-Share (4MB) • Virtual-TryOn (13MB) • Fresh-Mart',
        '> git log --oneline | head -3',
        'feat: AI integration • fix: performance optimization • deploy: production ready'
      ];
      
      lines.forEach((line, index) => {
        setTimeout(() => {
          setTerminalLines(prev => [...prev, line]);
        }, index * 800);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber-gradient pt-20 xs:pt-24 md:pt-28">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Floating Elements */}
      <div 
        className="absolute top-16 xs:top-20 left-8 xs:left-20 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 rounded-full animate-pulse opacity-60 hidden xs:block" 
        style={{ backgroundColor: 'var(--cyber-green)' }} 
      />
      <div 
        className="absolute top-32 xs:top-40 right-8 xs:right-32 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full animate-pulse opacity-40 hidden sm:block" 
        style={{ 
          backgroundColor: 'var(--cyber-cyan)',
          animationDelay: '1s'
        }} 
      />
      <div 
        className="absolute bottom-32 xs:bottom-40 left-6 xs:left-16 w-2 h-2 xs:w-3 xs:h-3 rounded-full animate-pulse opacity-50 hidden xs:block" 
        style={{ 
          backgroundColor: 'var(--cyber-purple)',
          animationDelay: '2s'
        }} 
      />

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            className="space-y-6 xs:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <div className="space-y-3 xs:space-y-4">
              <motion.div
                className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-mono"
                style={{
                  background: 'var(--cyber-glow-green)',
                  border: '1px solid var(--cyber-green)',
                  color: 'var(--cyber-green)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <FiZap className="w-3 h-3 xs:w-4 xs:h-4" />
                <span>Dreams in to Reality</span>
              </motion.div>

              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ color: 'var(--foreground)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-shadow-cyber block" style={{ color: 'var(--cyber-green)' }}>Full-Stack</span>
                <span className="block" style={{ color: 'var(--cyber-cyan)' }}>TypeScript</span>
                <span className="block" style={{ color: 'var(--cyber-purple)' }}>Developer</span>
              </motion.h1>

              {/* Typing Animation */}
              <motion.div
                className="text-base xs:text-lg sm:text-xl lg:text-2xl font-mono min-h-[2rem] xs:min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start"
                style={{ color: 'var(--foreground-secondary)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <TypeAnimation
                  sequence={[
                    'Building production-scale AI applications.',
                    2000,
                    'Creating intelligent e-commerce platforms.',
                    2000,
                    'Deploying complex TypeScript systems.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  style={{ color: 'var(--cyber-green)' }}
                />
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col xs:flex-row flex-wrap gap-3 xs:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <CyberButton
                variant="primary"
                size="lg"
                href="/projects"
                icon={<FaExternalLinkAlt className="w-4 h-4 xs:w-5 xs:h-5" />}
              >
                <span className="hidden xs:inline">View Projects</span>
                <span className="xs:hidden">Projects</span>
              </CyberButton>
              <CyberButton
                variant="ghost"
                size="lg"
                href="https://drive.google.com/file/d/1wZrdwW6FKK_8u90S2X--Nz6YjF86ZZCO/view?usp=sharing"
                target="_blank"
                icon={<FaDownload className="w-4 h-4 xs:w-5 xs:h-5" />}
              >
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </CyberButton>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-4 xs:gap-6 pt-3 xs:pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              <div className="text-center">
                <div className="text-xl xs:text-2xl font-bold" style={{ color: 'var(--cyber-green)' }}>30+</div>
                <div className="text-xs xs:text-sm" style={{ color: 'var(--foreground-muted)' }}>Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl font-bold" style={{ color: 'var(--cyber-cyan)' }}>13MB</div>
                <div className="text-xs xs:text-sm" style={{ color: 'var(--foreground-muted)' }}><span className="hidden xs:inline">Largest Codebase</span><span className="xs:hidden">Codebase</span></div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl font-bold" style={{ color: 'var(--cyber-purple)' }}>6+</div>
                <div className="text-xs xs:text-sm" style={{ color: 'var(--foreground-muted)' }}><span className="hidden xs:inline">Live Apps</span><span className="xs:hidden">Apps</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Terminal */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CyberCard variant="terminal" className="font-mono text-xs xs:text-sm">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-3 xs:mb-4 pb-2 border-b border-cyber-cyan-500/30">
                <div className="flex items-center gap-1.5 xs:gap-2">
                  <FiTerminal className="w-3 h-3 xs:w-4 xs:h-4" style={{ color: 'var(--cyber-cyan)' }} />
                  <span style={{ color: 'var(--cyber-cyan)' }} className="text-xs xs:text-sm">
                    <span className="hidden sm:inline">ghost-mind-system</span>
                    <span className="sm:hidden">terminal</span>
                  </span>
                </div>
                <div className="flex gap-1.5 xs:gap-2">
                  <div className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-green-500/60"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-1.5 xs:space-y-2 min-h-[200px] xs:min-h-[250px] sm:min-h-[300px]">
                {showTerminal && terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    className={`text-xs xs:text-sm break-words ${
                      line.startsWith('>') 
                        ? 'text-cyber-green-400' 
                        : line.includes('@ghost-mind') 
                        ? 'text-cyber-cyan-400'
                        : 'text-gray-300'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {line}
                    {index === terminalLines.length - 1 && (
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="ml-1 xs:ml-2 text-cyber-green-400"
                      >
                        █
                      </motion.span>
                    )}
                  </motion.div>
                ))}
                
                {/* Blinking cursor when terminal is ready */}
                {terminalLines.length === 6 && (
                  <motion.div
                    className="text-cyber-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    ghost-mind@system:~$ 
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="ml-1"
                    >
                      █
                    </motion.span>
                  </motion.div>
                )}
              </div>
            </CyberCard>

            {/* Floating code snippets */}
            <motion.div
              className="absolute -right-2 xs:-right-4 top-12 xs:top-16 bg-cyber-dark-200/80 backdrop-blur-sm border border-cyber-purple-500/50 rounded px-1.5 xs:px-2 py-1 text-xs font-mono text-cyber-purple-400 hidden sm:block"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              AI.activate()
            </motion.div>

            <motion.div
              className="absolute -left-4 xs:-left-6 bottom-16 xs:bottom-20 bg-cyber-dark-200/80 backdrop-blur-sm border border-cyber-cyan-500/50 rounded px-1.5 xs:px-2 py-1 text-xs font-mono text-cyber-cyan-400 hidden sm:block"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              system.optimize()
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroTerminal;