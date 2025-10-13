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
import { FaBrain, FaRobot, FaEye, FaShoppingCart, FaMobile } from "react-icons/fa";
import { TbApi, TbDatabase, TbBrandOpenai } from "react-icons/tb";
import { BiMath } from "react-icons/bi";
import { MdSecurity, MdSpeed, MdAnalytics } from "react-icons/md";

const skillCategories = {
  "Core Languages": [
    { name: "TypeScript", icon: SiTypescript, color: "#007ACC", level: "Advanced" },
    { name: "Python", icon: SiPython, color: "#3776AB", level: "Proficient" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Advanced" },
    { name: "C", icon: SiC, color: "#A8B9CC", level: "Intermediate" },
  ],
  "Frontend Frameworks": [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Advanced" },
    { name: "React", icon: SiReact, color: "#61DBFB", level: "Advanced" },
    { name: "Framer Motion", icon: SiFramer, color: "#ff0050", level: "Intermediate" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", level: "Advanced" },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063", level: "Proficient" },
    { name: "Express.js", icon: SiExpress, color: "#000000", level: "Proficient" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: "Intermediate" },
    { name: "REST APIs", icon: TbApi, color: "#FF6B35", level: "Advanced" },
  ],
  "Databases & Storage": [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Proficient" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: "Intermediate" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: "Intermediate" },
    { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748", level: "Intermediate" },
  ],
  "AI & Machine Learning": [
    { name: "Computer Vision", icon: FaEye, color: "#FF4081", level: "Intermediate" },
    { name: "AI Integration", icon: FaBrain, color: "#9C27B0", level: "Intermediate" },
    { name: "OpenAI APIs", icon: TbBrandOpenai, color: "#00D4AA", level: "Proficient" },
    { name: "ML Algorithms", icon: BiMath, color: "#FF9800", level: "Intermediate" },
  ],
  "Cloud & DevOps": [
    { name: "Vercel", icon: SiVercel, color: "#000000", level: "Advanced" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", level: "Intermediate" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: "Intermediate" },
  ],
  "Development Tools": [
    { name: "Git", icon: SiGit, color: "#F05032", level: "Advanced" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff", level: "Advanced" },
    { name: "Vite", icon: SiVite, color: "#646CFF", level: "Proficient" },
    { name: "Webpack", icon: SiWebpack, color: "#8DD6F9", level: "Intermediate" },
  ],
  "Quality & Testing": [
    { name: "ESLint", icon: SiEslint, color: "#4B32C3", level: "Proficient" },
    { name: "Prettier", icon: SiPrettier, color: "#F7B93E", level: "Proficient" },
    { name: "Jest", icon: SiJest, color: "#C21325", level: "Intermediate" },
    { name: "Cypress", icon: SiCypress, color: "#17202C", level: "Beginner" },
  ],
  "Specializations": [
    { name: "E-commerce", icon: FaShoppingCart, color: "#4CAF50", level: "Advanced" },
    { name: "Responsive Design", icon: FaMobile, color: "#2196F3", level: "Advanced" },
    { name: "Performance", icon: MdSpeed, color: "#FF5722", level: "Intermediate" },
    { name: "Analytics", icon: MdAnalytics, color: "#607D8B", level: "Intermediate" },
  ]
};

// Helper function to get level color
const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced': return '#22C55E'; // Green
    case 'Proficient': return '#3B82F6'; // Blue  
    case 'Intermediate': return '#F59E0B'; // Orange
    case 'Beginner': return '#EF4444'; // Red
    default: return '#6B7280'; // Gray
  }
};

export default function SkillsPage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 text-white">
      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Technical Arsenal
      </motion.h2>

      <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
        A comprehensive toolkit spanning from algorithms to AI, built through 30+ projects including large-scale applications with 12MB+ codebases.
      </p>

      {/* Skills Categories */}
      <div className="mt-12 w-full max-w-7xl space-y-12">
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
              className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
            >
              {category}
            </motion.h3>

            {/* Skills Grid for Category */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
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
                  className="relative group flex flex-col items-center p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 10px 25px -5px ${skill.color}20`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`,
                    }}
                  />

                  {/* Level Indicator */}
                  <div className="absolute top-2 right-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getLevelColor(skill.level) }}
                      title={skill.level}
                    />
                  </div>

                  {/* Skill Icon */}
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon 
                      className="w-10 h-10" 
                      style={{ color: skill.color }} 
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <motion.h4
                    className="text-sm font-medium text-center text-gray-200 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.h4>

                  {/* Level Badge (appears on hover) */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                    style={{
                      backgroundColor: getLevelColor(skill.level),
                      color: 'white'
                    }}
                  >
                    {skill.level}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary Stats */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400">8</div>
          <div className="text-gray-400 text-sm">Advanced Skills</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400">12</div>
          <div className="text-gray-400 text-sm">Proficient Skills</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400">30+</div>
          <div className="text-gray-400 text-sm">Projects Built</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">13MB</div>
          <div className="text-gray-400 text-sm">Largest Codebase</div>
        </div>
      </motion.div>
    </section>
  );
}
