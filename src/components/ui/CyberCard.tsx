'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glowEffect?: boolean;
  hoverScale?: boolean;
  variant?: 'default' | 'terminal' | 'project' | 'skill';
  onClick?: () => void;
}

const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className,
  glowEffect = true,
  hoverScale = true,
  variant = 'default',
  onClick
}) => {
  const variants = {
    default: 'bg-cyber-dark-200/50 border-cyber-green-500',
    terminal: 'bg-cyber-dark-300/80 border-cyber-cyan-500',
    project: 'bg-cyber-dark-200/30 border-cyber-purple-500',
    skill: 'bg-cyber-dark-200/40 border-cyber-green-400'
  };

  const glowVariants = {
    default: 'shadow-[0_0_20px_rgba(0,255,136,0.3)]',
    terminal: 'shadow-[0_0_20px_rgba(0,255,255,0.3)]',
    project: 'shadow-[0_0_20px_rgba(187,134,252,0.3)]',
    skill: 'shadow-[0_0_15px_rgba(0,255,136,0.2)]'
  };

  return (
    <motion.div
      className={cn(
        'border rounded-lg p-6 backdrop-blur-sm transition-all duration-300',
        variants[variant],
        glowEffect && glowVariants[variant],
        hoverScale && 'hover:scale-[1.02]',
        'hover:brightness-110',
        onClick && 'cursor-pointer',
        className
      )}
      whileHover={hoverScale ? { 
        scale: 1.02,
        boxShadow: glowEffect ? 
          variant === 'terminal' ? '0 0 30px rgba(0,255,255,0.5)' :
          variant === 'project' ? '0 0 30px rgba(187,134,252,0.5)' :
          variant === 'skill' ? '0 0 25px rgba(0,255,136,0.4)' :
          '0 0 30px rgba(0,255,136,0.5)'
          : undefined
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default CyberCard;