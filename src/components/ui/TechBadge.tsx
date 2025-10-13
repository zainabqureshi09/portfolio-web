'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  tech: string;
  variant?: 'default' | 'featured' | 'skill';
  className?: string;
  icon?: React.ReactNode;
  glowOnHover?: boolean;
}

const TechBadge: React.FC<TechBadgeProps> = ({
  tech,
  variant = 'default',
  className,
  icon,
  glowOnHover = true
}) => {
  const variants = {
    default: 'bg-cyber-dark-200/60 text-cyber-green-400 border-cyber-green-600/50',
    featured: 'bg-cyber-purple-900/40 text-cyber-purple-400 border-cyber-purple-500/60',
    skill: 'bg-cyber-cyan-900/30 text-cyber-cyan-400 border-cyber-cyan-500/50'
  };

  return (
    <motion.span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border rounded-full',
        'backdrop-blur-sm transition-all duration-200',
        variants[variant],
        glowOnHover && 'hover:shadow-lg hover:shadow-current/30',
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={glowOnHover ? { 
        scale: 1.05,
        textShadow: '0 0 8px currentColor'
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {icon && <span className="text-current">{icon}</span>}
      <span>{tech}</span>
    </motion.span>
  );
};

export default TechBadge;