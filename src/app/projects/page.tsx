"use client";

import { motion } from "framer-motion";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiCode, FiDatabase, FiCpu, FiZap } from "react-icons/fi";
import { BiChip } from "react-icons/bi";

const projects = [
  {
    id: 1,
    title: "Smart Mart - Enterprise E-Commerce",
    description: "Large-scale enterprise e-commerce platform with advanced inventory management, real-time analytics, and intelligent product recommendations. Built with modern TypeScript architecture.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "React", "E-commerce", "Analytics"],
    github: "https://github.com/zainabqureshi09/Smart-Mart",
    live: null,
    category: "Enterprise",
    size: "138MB",
    status: "In Development",
    featured: true,
    stars: 0
  },
  {
    id: 2,
    title: "College Website Platform",
    description: "Comprehensive college management system with student portals, course management, interactive campus tours, and administrative dashboards. Full-featured educational platform.",
    image: "/college.png",
    techStack: ["TypeScript", "Next.js", "React", "Education Tech", "CMS"],
    github: "https://github.com/zainabqureshi09/college-website",
    live: null,
    category: "Education",
    size: "56MB",
    status: "Production Ready",
    featured: true,
    stars: 0
  },
  {
    id: 3,
    title: "FKWC College Web Portal",
    description: "Advanced educational web portal with integrated learning management system, student information system, and interactive features for modern education.",
    image: "/college.png",
    techStack: ["TypeScript", "Next.js", "LMS", "Student Portal"],
    github: "https://github.com/zainabqureshi09/fkwc-college-web",
    live: "https://my-college-website-ten.vercel.app",
    category: "Education",
    size: "55MB",
    status: "Live",
    featured: true,
    stars: 0
  },
  {
    id: 4,
    title: "Quarter-4 Book Hackathon",
    description: "Innovative book discovery and management platform built during hackathon. Features advanced search, personalized recommendations, and interactive reading experience.",
    image: "/e-com.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "Book API", "UI/UX"],
    github: "https://github.com/zainabqureshi09/Quarter-4-book-hackathon",
    live: null,
    category: "Hackathon",
    size: "44MB",
    status: "Complete",
    featured: true,
    stars: 0
  },
  {
    id: 5,
    title: "Hackathon E-Commerce Template",
    description: "Professional e-commerce template with modern design patterns and best practices. Built during competitive hackathon with focus on user experience.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "E-commerce", "Template"],
    github: "https://github.com/zainabqureshi09/Hackathon-3",
    live: "https://hackathon-3-dusky-two.vercel.app",
    category: "E-commerce",
    size: "21MB",
    status: "Live",
    featured: true,
    stars: 0
  },
  {
    id: 6,
    title: "Virtual Try-On AI System",
    description: "AI-powered virtual try-on system using advanced computer vision and machine learning. Enables real-time clothing visualization with cutting-edge technology.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "AI/ML", "Computer Vision", "Next.js", "TensorFlow"],
    github: "https://github.com/zainabqureshi09/Next-TryOn",
    live: "https://virtual-tryon-chi.vercel.app",
    category: "AI/ML",
    size: "13MB",
    status: "Live & Active",
    featured: true,
    stars: 0
  },
  {
    id: 7,
    title: "Word Skilled - Language Platform",
    description: "Interactive language learning and skill development platform with gamification, progress tracking, and personalized learning paths.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "Education", "Gamification"],
    github: "https://github.com/zainabqureshi09/word-skilled",
    live: null,
    category: "Education",
    size: "7MB",
    status: "In Development",
    featured: false,
    stars: 0
  },
  {
    id: 8,
    title: "Wood-N-Share Marketplace",
    description: "Modern woodworking marketplace connecting artisans with customers. Features real-time inventory management and interactive product catalogs.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "React", "E-commerce"],
    github: "https://github.com/zainabqureshi09/wood-n-share",
    live: "https://wood-n-share.vercel.app",
    category: "E-commerce",
    size: "4MB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 9,
    title: "Hackathon Template 8",
    description: "Professional web template built for hackathon competition with modern design patterns and responsive layout.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "Template Design"],
    github: "https://github.com/zainabqureshi09/hackathon-templ-8",
    live: "https://hackathon-templ-8.vercel.app",
    category: "Templates",
    size: "2MB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 10,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills. Built with modern web technologies and interactive animations.",
    image: "/profile-pic.jpg",
    techStack: ["TypeScript", "Next.js", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/zainabqureshi09/portfolio-web",
    live: "https://zainabs-portfolio-website.vercel.app",
    category: "Portfolio",
    size: "1.6MB",
    status: "Live & Active",
    featured: false,
    stars: 0
  },
  {
    id: 11,
    title: "Pizza Stop Restaurant",
    description: "Modern restaurant website with online ordering system and interactive menu. Clean design with smooth animations.",
    image: "/food.png",
    techStack: ["TypeScript", "Next.js", "Restaurant Tech"],
    github: "https://github.com/zainabqureshi09/Pizza-Stop-",
    live: "https://pizza-stop-zeta.vercel.app",
    category: "Restaurant",
    size: "886KB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 12,
    title: "Hajj & Umrah Sanctuary",
    description: "Comprehensive Islamic pilgrimage planning and information platform with guides, booking systems, and travel assistance.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "Travel Tech"],
    github: "https://github.com/zainabqureshi09/hajj-umrah-sanctuary",
    live: null,
    category: "Travel",
    size: "689KB",
    status: "In Development",
    featured: false,
    stars: 0
  },
  {
    id: 13,
    title: "Chef Cheese Parlour",
    description: "Sophisticated restaurant website with modern design and interactive features. Premium user experience with smooth animations.",
    image: "/food.png",
    techStack: ["TypeScript", "Next.js", "CSS Animations"],
    github: "https://github.com/zainabqureshi09/chef-cheese-parlour-",
    live: "https://chef-cheese-parlour.vercel.app",
    category: "Restaurant",
    size: "639KB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 14,
    title: "Fresh Green Red Mart",
    description: "Modern fresh produce marketplace with intelligent shopping features and inventory management for grocery shopping.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "E-commerce"],
    github: "https://github.com/zainabqureshi09/fresh-green-red-mart",
    live: "https://fresh-green-red-mart.vercel.app",
    category: "E-commerce",
    size: "629KB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 15,
    title: "Business Website Template",
    description: "Professional business website template with modern design and responsive layout for corporate needs.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "Business"],
    github: "https://github.com/zainabqureshi09/business-website",
    live: "https://business-website-inky.vercel.app",
    category: "Business",
    size: "627KB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 16,
    title: "Smart Mart Platform",
    description: "Intelligent shopping platform with modern features and clean TypeScript architecture.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "E-commerce"],
    github: "https://github.com/zainabqureshi09/Project-00",
    live: "https://smart-mart-iota.vercel.app",
    category: "E-commerce",
    size: "531KB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 17,
    title: "Zyntelligence Documentation",
    description: "Technical documentation platform with modern design and comprehensive guides for developers.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "Documentation"],
    github: "https://github.com/zainabqureshi09/zyntelligence-docs",
    live: "https://zyntelligence-docs.vercel.app",
    category: "Documentation",
    size: "514KB",
    status: "Live",
    featured: false,
    stars: 0
  },
  {
    id: 18,
    title: "Atelier Weave Suite",
    description: "Creative design suite for textile and fashion professionals with modern tools and workflows.",
    image: "/e-com.jpg",
    techStack: ["TypeScript", "Next.js", "Design Tools"],
    github: "https://github.com/zainabqureshi09/atelier-weave-suite",
    live: null,
    category: "Design",
    size: "503KB",
    status: "In Development",
    featured: false,
    stars: 0
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
    <section className="min-h-screen px-4 xs:px-6 sm:px-8 md:px-12 py-16 xs:py-20 md:py-24 bg-cyber-gradient mt-16 xs:mt-20 md:mt-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 xs:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full mb-4 xs:mb-6 text-xs xs:text-sm" style={{
            background: 'var(--cyber-glow-green)',
            border: '1px solid var(--cyber-green)',
            color: 'var(--cyber-green)'
          }}>
            <FiCode className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            <span className="font-mono">projects.list()</span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 xs:mb-6 leading-tight" style={{ color: 'var(--foreground)' }}>
            <span style={{ color: 'var(--cyber-green)' }}>Production</span>{' '}
            <span style={{ color: 'var(--cyber-cyan)' }}>Portfolio</span>
          </h1>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl font-mono px-4 sm:px-0" style={{ color: 'var(--foreground-secondary)' }}>
            <span className="hidden sm:inline">18 major projects • 138MB largest codebase • 12+ live applications</span>
            <span className="sm:hidden">18 projects • 12+ live apps</span>
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-8 xs:mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-6 xs:mb-8 font-mono" style={{ color: 'var(--cyber-green)' }}>
            <FiZap className="inline w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mr-1.5 xs:mr-2" />
            <span className="hidden sm:inline">featured --production-ready</span>
            <span className="sm:hidden">featured</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 md:gap-8">
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
                <div className="relative w-full h-32 xs:h-40 sm:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10" />
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-20"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${getCategoryColor(project.category)}, transparent)` 
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 z-20">
                    <div 
                      className="px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm"
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
                  <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 z-20">
                    <div className="px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm" style={{
                      background: 'rgba(0, 255, 136, 0.2)',
                      color: 'var(--cyber-green)',
                      border: '1px solid var(--cyber-green)40'
                    }}>
                      {project.size}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-3 xs:p-4 sm:p-6">
                  {/* Category */}
                  <div className="flex items-center gap-1.5 xs:gap-2 mb-2 xs:mb-3">
                    <div style={{ color: getCategoryColor(project.category) }}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <span 
                      className="text-xs xs:text-sm font-mono"
                      style={{ color: getCategoryColor(project.category) }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 line-clamp-2" style={{ color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-3 xs:mb-4 leading-relaxed text-sm xs:text-base line-clamp-3" style={{ color: 'var(--foreground-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-6">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 xs:px-3 py-0.5 xs:py-1 rounded-md text-xs font-mono bg-cyber-card"
                        style={{
                          color: 'var(--cyber-cyan)',
                          border: '1px solid var(--border-muted)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-mono" style={{ color: 'var(--foreground-muted)' }}>
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg font-mono text-xs xs:text-sm transition-all cyber-button relative overflow-hidden group"
                      style={{
                        color: 'var(--cyber-green)',
                        border: '1px solid var(--cyber-green)'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <FaGithub className="w-3 h-3 xs:w-4 xs:h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                      <span className="relative z-10">Code</span>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg font-mono text-xs xs:text-sm transition-all relative overflow-hidden group shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, var(--cyber-cyan), var(--cyber-purple))',
                          color: 'white',
                          border: '1px solid var(--cyber-cyan)'
                        }}
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)' }}
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
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-6 xs:mb-8 font-mono" style={{ color: 'var(--cyber-purple)' }}>
            <FiDatabase className="inline w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mr-1.5 xs:mr-2" />
            <span className="hidden sm:inline">additional --projects</span>
            <span className="sm:hidden">more projects</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 md:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-cyber-card rounded-lg p-3 xs:p-4 sm:p-6 cyber-hover-effect"
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
                <div className="flex items-start justify-between mb-3 xs:mb-4">
                  <div className="flex items-center gap-1.5 xs:gap-2 flex-1 min-w-0">
                    <div style={{ color: getCategoryColor(project.category) }} className="flex-shrink-0">
                      {getCategoryIcon(project.category)}
                    </div>
                    <h3 className="font-bold text-sm xs:text-base truncate" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                  </div>
                  <span 
                    className="text-xs font-mono px-1.5 xs:px-2 py-0.5 xs:py-1 rounded flex-shrink-0 ml-2"
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
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 transition-all hover:gap-2 group"
                    style={{ color: 'var(--cyber-green)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="group-hover:underline">Code</span>
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 transition-all hover:gap-2 group"
                      style={{ color: 'var(--cyber-cyan)' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span className="group-hover:underline">Live</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal Footer */}
        <motion.div
          className="mt-8 xs:mt-12 md:mt-16 text-center font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="terminal-window p-3 xs:p-4 sm:p-6 inline-block">
            <div style={{ color: 'var(--cyber-green)' }} className="text-xs xs:text-sm break-words">
              <span style={{ color: 'var(--cyber-cyan)' }} className="hidden sm:inline">zainab@portfolio</span>
              <span style={{ color: 'var(--cyber-cyan)' }} className="sm:hidden">zainab</span>
              <span style={{ color: 'var(--foreground-muted)' }}>:</span>
              <span style={{ color: 'var(--cyber-purple)' }}>~/projects</span>
              <span style={{ color: 'var(--foreground-muted)' }}>$ </span>
              <span className="hidden xs:inline">git log --stat --all</span>
              <span className="xs:hidden">git log</span>
            </div>
            <div className="mt-2 text-xs xs:text-sm break-words" style={{ color: 'var(--foreground-secondary)' }}>
              <span style={{ color: 'var(--cyber-orange)' }}>commit</span> <span className="hidden sm:inline">latest: Ready for production deployment</span><span className="sm:hidden">latest: Ready for production</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
