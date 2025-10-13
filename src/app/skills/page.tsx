"use client";

import { motion } from "framer-motion";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import {
  SiNextdotjs,
  SiReact,
  SiFramer,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPython,
  SiC,
  SiVercel,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiExpress,
  SiGraphql,
  SiPrisma,
  SiSupabase,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiJest,
  SiCypress,
  SiStorybook,
  SiFigma,
} from "react-icons/si";
import { FaBrain, FaRobot, FaEye, FaShoppingCart, FaMobile, FaTerminal, FaServer, FaDatabase, FaShieldAlt, FaCode } from "react-icons/fa";
import { TbApi, TbDatabase, TbBrandOpenai, TbBinaryTree } from "react-icons/tb";
import { BiMath } from "react-icons/bi";
import { MdSecurity, MdSpeed, MdAnalytics } from "react-icons/md";

const skillCategories = {
  "CORE SYSTEMS": [
    { name: "TypeScript", icon: SiTypescript, color: "#007ACC", level: "ADVANCED" },
    { name: "Python", icon: SiPython, color: "#3776AB", level: "PROFICIENT" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "ADVANCED" },
    { name: "C", icon: SiC, color: "#A8B9CC", level: "INTERMEDIATE" },
  ],
  "FRONTEND SYSTEMS": [
    { name: "Next.js", icon: SiNextdotjs, color: "#00FF88", level: "ADVANCED" },
    { name: "React", icon: SiReact, color: "#00D8FF", level: "ADVANCED" },
    { name: "Framer Motion", icon: SiFramer, color: "#FF0055", level: "INTERMEDIATE" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#00FFCC", level: "ADVANCED" },
  ],
  "BACKEND & API": [
    { name: "Node.js", icon: SiNodedotjs, color: "#68D063", level: "PROFICIENT" },
    { name: "Express.js", icon: SiExpress, color: "#00FF88", level: "PROFICIENT" },
    { name: "GraphQL", icon: SiGraphql, color: "#FF00AA", level: "INTERMEDIATE" },
    { name: "REST APIs", icon: TbApi, color: "#FF6B35", level: "ADVANCED" },
  ],
  "DATA SYSTEMS": [
    { name: "MongoDB", icon: SiMongodb, color: "#47FF48", level: "PROFICIENT" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#3367FF", level: "INTERMEDIATE" },
    { name: "Supabase", icon: SiSupabase, color: "#00FF8E", level: "INTERMEDIATE" },
    { name: "Prisma ORM", icon: SiPrisma, color: "#00FFCC", level: "INTERMEDIATE" },
  ],
  "AI & NEURAL NETWORKS": [
    { name: "Computer Vision", icon: FaEye, color: "#FF00FF", level: "INTERMEDIATE" },
    { name: "AI Integration", icon: FaBrain, color: "#FF00AA", level: "INTERMEDIATE" },
    { name: "OpenAI APIs", icon: TbBrandOpenai, color: "#00FFAA", level: "PROFICIENT" },
    { name: "ML Algorithms", icon: TbBinaryTree, color: "#FF8800", level: "INTERMEDIATE" },
  ],
  "CLOUD & INFRA": [
    { name: "Vercel", icon: SiVercel, color: "#00FF88", level: "ADVANCED" },
    { name: "Docker", icon: SiDocker, color: "#00AAFF", level: "INTERMEDIATE" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCC00", level: "INTERMEDIATE" },
  ],
  "DEV TOOLS": [
    { name: "Git", icon: SiGit, color: "#FF0055", level: "ADVANCED" },
    { name: "GitHub", icon: SiGithub, color: "#00FF88", level: "ADVANCED" },
    { name: "Vite", icon: SiVite, color: "#646CFF", level: "PROFICIENT" },
    { name: "Webpack", icon: SiWebpack, color: "#8DD6F9", level: "INTERMEDIATE" },
  ],
  "SECURITY & TESTING": [
    { name: "ESLint", icon: SiEslint, color: "#4B32FF", level: "PROFICIENT" },
    { name: "Prettier", icon: SiPrettier, color: "#FFAA00", level: "PROFICIENT" },
    { name: "Jest", icon: SiJest, color: "#FF0033", level: "INTERMEDIATE" },
    { name: "Cypress", icon: SiCypress, color: "#00FFCC", level: "BEGINNER" },
  ],
  "SPECIALIZATIONS": [
    { name: "E-commerce", icon: FaShoppingCart, color: "#00FF88", level: "ADVANCED" },
    { name: "Mobile First", icon: FaMobile, color: "#00AAFF", level: "ADVANCED" },
    { name: "Performance", icon: MdSpeed, color: "#FF5500", level: "INTERMEDIATE" },
    { name: "Analytics", icon: MdAnalytics, color: "#00FFFF", level: "INTERMEDIATE" },
  ]
};

// Helper function to get level color
const getLevelColor = (level: string) => {
  switch (level) {
    case 'ADVANCED': return '#00FF88'; // Green
    case 'PROFICIENT': return '#00AAFF'; // Blue  
    case 'INTERMEDIATE': return '#FFAA00'; // Orange
    case 'BEGINNER': return '#FF0055'; // Red
    default: return '#00FFFF'; // Cyan
  }
};

// Matrix rain background component
const MatrixRain = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black" />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-green-400 text-xs font-mono whitespace-nowrap"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }}
        animate={{
          y: [0, 1000],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Math.random().toString(36).substring(2)}
      </motion.div>
    ))}
  </div>
);

export default function SkillsPage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-3 xs:px-4 sm:px-6 py-8 xs:py-12 sm:py-16 text-white overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none z-0" />

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-6 xs:mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-center"
          style={{
            textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88'
          }}
        >
          <span className="text-green-400">SYSTEM_</span>
          <span className="text-cyan-400">SKILLS</span>
          <span className="text-green-400">.EXE</span>
        </motion.h2>

        <motion.p
          className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-green-300 font-mono text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="hidden sm:inline">> COMPILING TECHNICAL ARSENAL... [32/32 MODULES LOADED]</span>
          <span className="sm:hidden">> TECH ARSENAL [32 MODULES]</span>
        </motion.p>
      </motion.div>

      {/* Skills Categories */}
      <div className="relative z-10 w-full max-w-7xl space-y-6 xs:space-y-8 sm:space-y-10">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            {/* Category Title */}
            <motion.h3
              className="text-sm xs:text-base sm:text-lg md:text-xl font-bold font-mono text-center mb-3 xs:mb-4 sm:mb-6 px-2 py-1 bg-black/50 border border-green-500/30 rounded-lg mx-auto w-fit"
              style={{
                textShadow: '0 0 5px #00ff88',
                background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.1), transparent)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
            >
              <span className="text-green-400">[</span>
              <span className="text-cyan-300 mx-1 xs:mx-2">{category}</span>
              <span className="text-green-400">]</span>
            </motion.h3>

            {/* Skills Grid for Category */}
            <motion.div
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 xs:gap-3 sm:gap-4 px-2 xs:px-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={`${category}-${skillIndex}`}
                  className="relative group flex flex-col items-center p-2 xs:p-3 rounded-lg border border-green-500/20 bg-black/40 backdrop-blur-sm hover:border-green-400/60 transition-all duration-300 overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    borderColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}40`,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(45deg, transparent 40%, ${skill.color}80, transparent 60%)`,
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '200% 200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Level Indicator */}
                  <div className="absolute top-1 right-1 z-10">
                    <motion.div 
                      className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full border border-white/20"
                      style={{ backgroundColor: getLevelColor(skill.level) }}
                      title={skill.level}
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Skill Icon */}
                  <motion.div
                    className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1 xs:mb-2 relative z-5"
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon 
                      className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8" 
                      style={{ 
                        color: skill.color,
                        filter: 'drop-shadow(0 0 2px rgba(0,255,136,0.5))'
                      }} 
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <motion.h4
                    className="text-[10px] xs:text-xs font-mono font-medium text-center text-green-300 group-hover:text-white transition-colors duration-300 line-clamp-2 px-1 relative z-5"
                    whileHover={{ scale: 1.05 }}
                    style={{ textShadow: '0 0 5px currentColor' }}
                  >
                    {skill.name}
                  </motion.h4>

                  {/* Level Badge */}
                  <motion.div
                    className="absolute -bottom-4 xs:-bottom-5 left-1/2 transform -translate-x-1/2 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded text-[8px] xs:text-xs font-mono font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 border border-white/20"
                    style={{
                      backgroundColor: getLevelColor(skill.level),
                      color: 'black',
                      textShadow: 'none'
                    }}
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {skill.level}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* System Stats */}
      <motion.div
        className="relative z-10 mt-6 xs:mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 w-full max-w-2xl xs:max-w-3xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {[
          { value: "8", label: "ADVANCED", color: "text-green-400", sub: "SYSTEMS" },
          { value: "12", label: "PROFICIENT", color: "text-cyan-400", sub: "MODULES" },
          { value: "30+", label: "PROJECTS", color: "text-purple-400", sub: "DEPLOYED" },
          { value: "13MB", label: "CODEBASE", color: "text-yellow-400", sub: "MAX SIZE" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-3 xs:p-4 rounded-lg border border-green-500/20 bg-black/40 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05, 
              borderColor: '#00ff88',
              boxShadow: '0 0 20px rgba(0,255,136,0.3)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`text-lg xs:text-xl sm:text-2xl font-bold font-mono ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-green-300 text-[10px] xs:text-xs font-mono mt-1">
              {stat.label}
            </div>
            <div className="text-green-500 text-[8px] xs:text-[10px] font-mono mt-0.5">
              {stat.sub}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Terminal Footer */}
      <motion.div
        className="relative z-10 mt-8 xs:mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="font-mono text-green-400 text-xs xs:text-sm border border-green-500/30 rounded-lg px-4 py-2 xs:py-3 bg-black/50 inline-block">
          <span className="text-cyan-400">$</span> SYSTEM_READY_FOR_DEPLOYMENT
          <motion.span
            className="ml-1 inline-block w-2 h-4 bg-green-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}