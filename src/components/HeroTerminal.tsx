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
        'zainab@mindhacker:~$ Full-Stack TypeScript Developer',
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber-gradient">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }} />
      
      {/* Floating Elements */}
      <div 
        className="absolute top-20 left-20 w-4 h-4 rounded-full animate-pulse opacity-60" 
        style={{ backgroundColor: 'var(--cyber-green)' }} 
      />
      <div 
        className="absolute top-40 right-32 w-2 h-2 rounded-full animate-pulse opacity-40" 
        style={{ 
          backgroundColor: 'var(--cyber-cyan)',
          animationDelay: '1s'
        }} 
      />
      <div 
        className="absolute bottom-40 left-16 w-3 h-3 rounded-full animate-pulse opacity-50" 
        style={{ 
          backgroundColor: 'var(--cyber-purple)',
          animationDelay: '2s'
        }} 
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-mono"
                style={{
                  background: 'var(--cyber-glow-green)',
                  border: '1px solid var(--cyber-green)',
                  color: 'var(--cyber-green)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <FiZap className="w-4 h-4" />
                <span>The Mind Hacker</span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                style={{ color: 'var(--foreground)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-shadow-cyber" style={{ color: 'var(--cyber-green)' }}>Full-Stack</span>
                <br />
                <span style={{ color: 'var(--cyber-cyan)' }}>TypeScript</span>
                <br />
                <span style={{ color: 'var(--cyber-purple)' }}>Developer</span>
              </motion.h1>

              {/* Typing Animation */}
              <motion.div
                className="text-xl lg:text-2xl font-mono min-h-[3rem] flex items-center"
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
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <CyberButton
                variant="primary"
                size="lg"
                href="#projects"
                icon={<FaExternalLinkAlt className="w-5 h-5" />}
              >
                View Projects
              </CyberButton>
              <CyberButton
                variant="ghost"
                size="lg"
                href="https://drive.google.com/file/d/1wZrdwW6FKK_8u90S2X--Nz6YjF86ZZCO/view?usp=sharing"
                target="_blank"
                icon={<FaDownload className="w-5 h-5" />}
              >
                Download Resume
              </CyberButton>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--cyber-green)' }}>30+</div>
                <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--cyber-cyan)' }}>13MB</div>
                <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Largest Codebase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--cyber-purple)' }}>6+</div>
                <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Live Apps</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Terminal */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CyberCard variant="terminal" className="font-mono text-sm">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyber-cyan-500/30">
                <div className="flex items-center gap-2">
                  <FiTerminal className="w-4 h-4" style={{ color: 'var(--cyber-cyan)' }} />
                  <span style={{ color: 'var(--cyber-cyan)' }}>ghost-mind-terminal</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2 min-h-[300px]">
                {showTerminal && terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    className={`${
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
                        className="ml-2 text-cyber-green-400"
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
              className="absolute -right-4 top-16 bg-cyber-dark-200/80 backdrop-blur-sm border border-cyber-purple-500/50 rounded px-2 py-1 text-xs font-mono text-cyber-purple-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              AI.activate()
            </motion.div>

            <motion.div
              className="absolute -left-6 bottom-20 bg-cyber-dark-200/80 backdrop-blur-sm border border-cyber-cyan-500/50 rounded px-2 py-1 text-xs font-mono text-cyber-cyan-400"
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