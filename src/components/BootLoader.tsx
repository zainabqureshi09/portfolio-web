'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootLoaderProps {
  onComplete: () => void;
}

const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const steps = [
    'Initializing Ghost Network...',
    'Loading AI Modules...',
    'Establishing Secure Connection...',
    'Activating Neural Pathways...',
    'Calibrating Cyber Interface...',
    'System Ready.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Glitch effects at 33% and 77%
        if ((prev < 33 && newProgress >= 33) || (prev < 77 && newProgress >= 77)) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 200);
        }

        // Update current step
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        if (stepIndex < steps.length) {
          setCurrentStep(steps[stepIndex]);
        }

        if (newProgress >= 100) {
          setProgress(100);
          setCurrentStep('System Ready.');
          setShowComplete(true);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }

        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-cyber-dark-400 z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-8">
          {/* Logo/Title */}
          <motion.div
            className={`text-4xl font-bold font-mono ${isGlitching ? 'animate-glitch' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-cyber-green-400 text-shadow-glow">GHOST</span>
            <span className="text-cyber-cyan-400">MIND</span>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="bg-cyber-dark-200 rounded-full h-2 mb-4 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 h-full rounded-full"
                style={{
                  background: isGlitching 
                    ? 'linear-gradient(90deg, #ff0066, #00ff88, #00ffff)'
                    : 'linear-gradient(90deg, #00ff88, #00ffff)'
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            {/* Progress Text */}
            <div className="flex justify-between text-xs font-mono">
              <motion.span 
                className={`text-cyber-green-400 ${isGlitching ? 'animate-pulse' : ''}`}
                animate={{ opacity: isGlitching ? [1, 0.3, 1] : 1 }}
              >
                {Math.floor(progress)}%
              </motion.span>
              <span className="text-cyber-cyan-400">LOADING...</span>
            </div>
          </div>

          {/* Current Step */}
          <motion.div
            className="h-16 flex items-center justify-center"
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <span className={`font-mono text-cyber-green-400 ${isGlitching ? 'animate-pulse' : ''}`}>
              {currentStep}
              {!showComplete && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="ml-1"
                >
                  |
                </motion.span>
              )}
            </span>
          </motion.div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-cyber-green-400 opacity-30 animate-scanline" />
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-cyber-cyan-500 opacity-50" />
          <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-cyber-cyan-500 opacity-50" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-cyber-cyan-500 opacity-50" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-cyber-cyan-500 opacity-50" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootLoader;