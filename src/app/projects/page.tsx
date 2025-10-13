"use client";

import { motion } from "framer-motion";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiCode, FiDatabase, FiCpu, FiZap } from "react-icons/fi";
import { BiChip } from "react-icons/bi";

const projects = [
  {
    id: 1,
    title: "Wood-N-Share Marketplace",
    description: "Modern woodworking marketplace connecting artisans with customers. Features real-time inventory management and interactive product catalogs.",
    image: "/projects/wood-n-share.jpg",
    techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/zainabqureshi09/wood-n-share",
    live: "https://wood-n-share.vercel.app",
    category: "E-commerce",
    size: "4MB+",
    status: "Live & Active",
    featured: true
  },
  {
    id: 2,
    title: "Virtual Try-On System",
    description: "AI-powered virtual try-on system using advanced computer vision. Large-scale TypeScript application with cutting-edge technology.",
    image: "/projects/virtual-tryon.jpg",
    techStack: ["TypeScript", "AI/ML", "Computer Vision", "Next.js", "Algorithms"],
    github: "https://github.com/zainabqureshi09/Next-TryOn",
    live: "https://virtual-tryon-chi.vercel.app",
    category: "AI/ML",
    size: "12MB+",
    status: "Live",
    featured: true
  },
  {
    id: 3,
    title: "NewTryOn Platform",
    description: "Enhanced virtual try-on platform with improved features and user experience. Large-scale TypeScript development.",
    image: "/projects/newtryon.jpg",
    techStack: ["TypeScript", "Virtual Reality", "Next.js", "Advanced UI/UX"],
    github: "https://github.com/zainabqureshi09/newtryon",
    live: "https://newtryon.vercel.app",
    category: "Advanced Web Apps",
    size: "13MB+",
    status: "Live",
    featured: true
  },
  {
    id: 4,
    title: "Fresh Green Red Mart",
    description: "Modern fresh produce marketplace with intelligent shopping features. Clean, intuitive interface for grocery shopping experience.",
    image: "/projects/fresh-mart.jpg",
    techStack: ["TypeScript", "Next.js", "E-commerce", "Inventory Management"],
    github: "https://github.com/zainabqureshi09/fresh-green-red-mart",
    live: "https://fresh-green-red-mart.vercel.app",
    category: "E-commerce Platform",
    size: "629KB",
    status: "Live",
    featured: true
  },
  {
    id: 5,
    title: "Chef Cheese Parlour",
    description: "Sophisticated restaurant website with modern design and interactive features. TypeScript-based with premium user experience.",
    image: "/projects/chef-cheese-parlour.jpg",
    techStack: ["TypeScript", "Next.js", "React", "CSS Animations"],
    github: "https://github.com/zainabqureshi09/chef-cheese-parlour-",
    live: "https://chef-cheese-parlour.vercel.app",
    category: "Professional Web Dev",
    size: "639KB",
    status: "Live",
    featured: false
  },
  {
    id: 6,
    title: "Temu E-commerce Clone",
    description: "Full-featured e-commerce platform clone with modern TypeScript architecture.",
    image: "/projects/temu-clone.jpg",
    techStack: ["TypeScript", "Next.js", "E-commerce", "React"],
    github: "https://github.com/zainabqureshi09/temu-clone",
    live: "https://temu-clone-eight.vercel.app",
    category: "E-commerce Development",
    size: "64KB",
    status: "Live",
    featured: false
  },
  {
    id: 7,
    title: "Smart Mart Platform",
    description: "Intelligent shopping platform with TypeScript and modern features.",
    image: "/projects/smart-mart.jpg",
    techStack: ["TypeScript", "Next.js", "Smart Features"],
    github: "https://github.com/zainabqureshi09/Project-00",
    live: "https://smart-mart-iota.vercel.app",
    category: "Web Applications",
    size: "531KB",
    status: "Live",
    featured: false
  },
  {
    id: 8,
    title: "Sudoku Solver Algorithm",
    description: "Efficient Sudoku solving algorithm implemented in C programming language. Demonstrates optimization and mathematical problem-solving.",
    image: "/projects/sudoku-solver.jpg",
    techStack: ["C Programming", "Algorithms", "Data Structures", "Logic"],
    github: "https://github.com/zainabqureshi09/sudoku",
    live: null,
    category: "Algorithms",
    size: "2KB",
    status: "Complete",
    featured: false
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "AI/ML":
      return <BiChip className="w-4 h-4" />;
    case "E-commerce":
    case "E-commerce Platform":
    case "E-commerce Development":
      return <FiDatabase className="w-4 h-4" />;
    case "Algorithms":
      return <FiCpu className="w-4 h-4" />;
    default:
      return <FiCode className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "AI/ML":
      return "var(--cyber-purple)";
    case "E-commerce":
    case "E-commerce Platform":
    case "E-commerce Development":
      return "var(--cyber-green)";
    case "Algorithms":
      return "var(--cyber-orange)";
    default:
      return "var(--cyber-cyan)";
  }
};

const ProjectsPage = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="min-h-screen px-6 py-20 bg-cyber-gradient">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
            background: 'var(--cyber-glow-green)',
            border: '1px solid var(--cyber-green)',
            color: 'var(--cyber-green)'
          }}>
            <FiCode className="w-5 h-5" />
            <span className="font-mono">projects.list()</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            <span style={{ color: 'var(--cyber-green)' }}>Production</span>{' '}
            <span style={{ color: 'var(--cyber-cyan)' }}>Portfolio</span>
          </h1>
          
          <p className="text-xl font-mono" style={{ color: 'var(--foreground-secondary)' }}>
            30+ projects • 13MB largest codebase • 6+ live applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 font-mono" style={{ color: 'var(--cyber-green)' }}>
            <FiZap className="inline w-6 h-6 mr-2" />
            featured --production-ready
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-cyber-card rounded-xl overflow-hidden cyber-hover-effect"
                style={{ 
                  border: '1px solid var(--border-muted)',
                  background: 'var(--background-secondary)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 20px 40px ${getCategoryColor(project.category)}20`
                }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10" />
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-20"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${getCategoryColor(project.category)}, transparent)` 
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm"
                      style={{
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: getCategoryColor(project.category),
                        border: `1px solid ${getCategoryColor(project.category)}40`
                      }}
                    >
                      {project.status}
                    </div>
                  </div>

                  {/* Size Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm" style={{
                      background: 'rgba(0, 255, 136, 0.2)',
                      color: 'var(--cyber-green)',
                      border: '1px solid var(--cyber-green)40'
                    }}>
                      {project.size}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <div style={{ color: getCategoryColor(project.category) }}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <span 
                      className="text-sm font-mono"
                      style={{ color: getCategoryColor(project.category) }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-cyber-card"
                        style={{
                          color: 'var(--cyber-cyan)',
                          border: '1px solid var(--border-muted)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all cyber-button"
                      style={{
                        color: 'var(--cyber-green)',
                        border: '1px solid var(--cyber-green)'
                      }}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all"
                        style={{
                          background: 'var(--cyber-cyan)',
                          color: 'var(--background)',
                          border: '1px solid var(--cyber-cyan)'
                        }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 font-mono" style={{ color: 'var(--cyber-purple)' }}>
            <FiDatabase className="inline w-6 h-6 mr-2" />
            additional --projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-cyber-card rounded-lg p-6 cyber-hover-effect"
                style={{ 
                  border: '1px solid var(--border-muted)',
                  background: 'var(--background-secondary)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 10px 20px ${getCategoryColor(project.category)}15`
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div style={{ color: getCategoryColor(project.category) }}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <h3 className="font-bold" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                  </div>
                  <span 
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{
                      background: `${getCategoryColor(project.category)}20`,
                      color: getCategoryColor(project.category)
                    }}
                  >
                    {project.size}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm mb-4" style={{ color: 'var(--foreground-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded text-xs font-mono"
                      style={{
                        background: 'var(--background-tertiary)',
                        color: 'var(--cyber-cyan)',
                        border: '1px solid var(--border-muted)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 rounded text-xs font-mono" style={{ color: 'var(--foreground-muted)' }}>
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 transition-colors"
                    style={{ color: 'var(--cyber-green)' }}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 transition-colors"
                      style={{ color: 'var(--cyber-cyan)' }}
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal Footer */}
        <motion.div
          className="mt-16 text-center font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="terminal-window p-6 inline-block">
            <div style={{ color: 'var(--cyber-green)' }}>
              <span style={{ color: 'var(--cyber-cyan)' }}>zainab@portfolio</span>
              <span style={{ color: 'var(--foreground-muted)' }}>:</span>
              <span style={{ color: 'var(--cyber-purple)' }}>~/projects</span>
              <span style={{ color: 'var(--foreground-muted)' }}>$ </span>
              git log --stat --all
            </div>
            <div className="mt-2" style={{ color: 'var(--foreground-secondary)' }}>
              <span style={{ color: 'var(--cyber-orange)' }}>commit</span> latest: Ready for production deployment
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
