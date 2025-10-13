'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
  icon?: ReactNode;
  glowEffect?: boolean;
}

const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  target,
  disabled = false,
  icon,
  glowEffect = true
}) => {
  const variants = {
    primary: 'bg-cyber-green-600/20 text-cyber-green-400 border-cyber-green-500 hover:bg-cyber-green-500/30 hover:shadow-cyber-green-glow',
    secondary: 'bg-cyber-purple-600/20 text-cyber-purple-400 border-cyber-purple-500 hover:bg-cyber-purple-500/30 hover:shadow-cyber-purple-glow',
    ghost: 'bg-transparent text-cyber-cyan-400 border-cyber-cyan-500/50 hover:bg-cyber-cyan-500/10 hover:shadow-cyber-cyan-glow',
    terminal: 'bg-cyber-dark-300/80 text-cyber-green-400 border-cyber-green-600 font-mono hover:shadow-cyber-green-glow'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target } : { onClick };

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 border rounded-lg font-medium',
        'transition-all duration-200 backdrop-blur-sm',
        'hover:scale-[1.02] active:scale-[0.98]',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={!disabled ? { 
        scale: 1.02,
        textShadow: glowEffect ? '0 0 8px currentColor' : undefined
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="text-current">{icon}</span>}
      {children}
    </Component>
  );
};

export default CyberButton;