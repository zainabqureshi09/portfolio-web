'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  live?: string | null;
  category: string;
  size: string;
  status: string;
  index: number;
  getCategoryColor: (category: string) => string;
  getCategoryIcon: (category: string) => React.ReactElement;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  github,
  live,
  category,
  size,
  status,
  index,
  getCategoryColor,
  getCategoryIcon,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-cyber-card rounded-xl overflow-hidden cyber-hover-effect"
      style={{
        border: '1px solid var(--border-muted)',
        background: 'var(--background-secondary)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 20px 40px ${getCategoryColor(category)}20`,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative w-full h-32 xs:h-40 sm:h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10"
          animate={{ opacity: isHovered ? 0.3 : 1 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-20"
          style={{
            backgroundImage: `linear-gradient(135deg, ${getCategoryColor(category)}, transparent)`,
          }}
          animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        />

        {/* Status Badge */}
        <motion.div
          className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 z-20"
          whileHover={{ scale: 1.1 }}
        >
          <div
            className="px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              color: getCategoryColor(category),
              border: `1px solid ${getCategoryColor(category)}40`,
            }}
          >
            {status}
          </div>
        </motion.div>

        {/* Size Badge */}
        <motion.div
          className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 z-20"
          whileHover={{ scale: 1.1 }}
        >
          <div
            className="px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm"
            style={{
              background: 'rgba(0, 255, 136, 0.2)',
              color: 'var(--cyber-green)',
              border: '1px solid var(--cyber-green)40',
            }}
          >
            {size}
          </div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-3 xs:p-4 sm:p-6">
        {/* Category */}
        <motion.div
          className="flex items-center gap-1.5 xs:gap-2 mb-2 xs:mb-3"
          whileHover={{ x: 5 }}
        >
          <div style={{ color: getCategoryColor(category) }}>
            {getCategoryIcon(category)}
          </div>
          <span
            className="text-xs xs:text-sm font-mono"
            style={{ color: getCategoryColor(category) }}
          >
            {category}
          </span>
        </motion.div>

        {/* Title */}
        <h3
          className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 line-clamp-2"
          style={{ color: 'var(--foreground)' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="mb-3 xs:mb-4 leading-relaxed text-sm xs:text-base line-clamp-3"
          style={{ color: 'var(--foreground-secondary)' }}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-6">
          {techStack.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-2 xs:px-3 py-0.5 xs:py-1 rounded-md text-xs font-mono bg-cyber-card"
              style={{
                color: 'var(--cyber-cyan)',
                border: '1px solid var(--border-muted)',
              }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
          {techStack.length > 4 && (
            <span
              className="px-2 py-0.5 text-xs font-mono"
              style={{ color: 'var(--foreground-muted)' }}
            >
              +{techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg font-mono text-xs xs:text-sm transition-all cyber-button relative overflow-hidden group"
            style={{
              color: 'var(--cyber-green)',
              border: '1px solid var(--cyber-green)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <FaGithub className="w-3 h-3 xs:w-4 xs:h-4 relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Code</span>
          </motion.a>

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg font-mono text-xs xs:text-sm transition-all relative overflow-hidden group shadow-lg"
              style={{
                background:
                  'linear-gradient(135deg, var(--cyber-cyan), var(--cyber-purple))',
                color: 'white',
                border: '1px solid var(--cyber-cyan)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FaExternalLinkAlt className="w-3 h-3 xs:w-4 xs:h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10 font-bold">Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
