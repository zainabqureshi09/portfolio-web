"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiFramer, SiTailwindcss, SiTypescript, SiNodedotjs, SiJavascript,
  SiGit, SiGithub, SiPython, SiC, SiVercel, SiFirebase, SiMongodb, SiPostgresql, SiDocker,
  SiExpress, SiGraphql, SiPrisma, SiSupabase, SiVite, SiWebpack, SiEslint, SiPrettier, SiJest, SiCypress
} from "react-icons/si";
import { FaBrain, FaEye, FaShoppingCart, FaMobile } from "react-icons/fa";
import { TbApi, TbBrandOpenai, TbBinaryTree } from "react-icons/tb";
import { MdSpeed, MdAnalytics } from "react-icons/md";

export const dynamic = "force-dynamic";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type SkillItem = { name: string; icon: IconType; color: string; level: string };
type SkillCategories = Record<string, SkillItem[]>;

const skillCategories: SkillCategories = {
  "CORE SYSTEMS": [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "ADVANCED" },
    { name: "Python", icon: SiPython, color: "#3776AB", level: "PROFICIENT" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "ADVANCED" },
    { name: "C", icon: SiC, color: "#A8B9CC", level: "INTERMEDIATE" },
  ],
  "FRONTEND": [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "ADVANCED" },
    { name: "React", icon: SiReact, color: "#61DBFB", level: "ADVANCED" },
    { name: "Framer Motion", icon: SiFramer, color: "#FF0055", level: "INTERMEDIATE" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", level: "ADVANCED" },
  ],
  "BACKEND & API": [
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063", level: "PROFICIENT" },
    { name: "Express.js", icon: SiExpress, color: "#777", level: "PROFICIENT" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: "INTERMEDIATE" },
    { name: "REST APIs", icon: TbApi, color: "#FF6B35", level: "ADVANCED" },
  ],
  "DATABASES": [
    { name: "MongoDB", icon: SiMongodb, color: "#4DB33D", level: "PROFICIENT" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: "INTERMEDIATE" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: "INTERMEDIATE" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", level: "INTERMEDIATE" },
  ],
  "CLOUD & TOOLS": [
    { name: "Vercel", icon: SiVercel, color: "#000000", level: "ADVANCED" },
    { name: "Docker", icon: SiDocker, color: "#0DB7ED", level: "INTERMEDIATE" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: "INTERMEDIATE" },
    { name: "GitHub", icon: SiGithub, color: "#181717", level: "ADVANCED" },
  ],
  "TESTING & STYLING": [
    { name: "ESLint", icon: SiEslint, color: "#4B32FF", level: "PROFICIENT" },
    { name: "Prettier", icon: SiPrettier, color: "#F7B93E", level: "PROFICIENT" },
    { name: "Jest", icon: SiJest, color: "#C21325", level: "INTERMEDIATE" },
    { name: "Cypress", icon: SiCypress, color: "#17202C", level: "BEGINNER" },
  ],
  "AI & LOGIC": [
    { name: "AI Integration", icon: FaBrain, color: "#FF00AA", level: "INTERMEDIATE" },
    { name: "OpenAI API", icon: TbBrandOpenai, color: "#00FFAA", level: "PROFICIENT" },
    { name: "ML Algorithms", icon: TbBinaryTree, color: "#FF8800", level: "INTERMEDIATE" },
    { name: "Computer Vision", icon: FaEye, color: "#00BFFF", level: "INTERMEDIATE" },
  ],
  "SPECIALIZATIONS": [
    { name: "E-commerce", icon: FaShoppingCart, color: "#00FF88", level: "ADVANCED" },
    { name: "Mobile UI", icon: FaMobile, color: "#00AAFF", level: "ADVANCED" },
    { name: "Performance", icon: MdSpeed as any, color: "#FF5500", level: "INTERMEDIATE" },
    { name: "Analytics", icon: MdAnalytics as any, color: "#00FFFF", level: "INTERMEDIATE" },
  ],
};

// Level colors
const getLevelColor = (level: string) => {
  switch (level) {
    case "ADVANCED": return "#16a34a";
    case "PROFICIENT": return "#2563eb";
    case "INTERMEDIATE": return "#facc15";
    case "BEGINNER": return "#dc2626";
    default: return "#a1a1aa";
  }
};

// Skill Card
const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className="p-4 sm:p-5 rounded-xl border border-gray-700 bg-gradient-to-b from-zinc-900 to-black shadow-md hover:shadow-green-400/10 flex flex-col items-center gap-2 text-center transition-all"
    >
      <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: skill.color }} />
      <h4 className="text-sm sm:text-base font-semibold text-gray-100">{skill.name}</h4>
      <span
        className="text-xs font-medium"
        style={{ color: getLevelColor(skill.level) }}
      >
        {skill.level}
      </span>
    </motion.div>
  );
};

// MAIN PAGE
export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const categories = useMemo(() => ["ALL", ...Object.keys(skillCategories)], []);
  const displayedSkills = useMemo<SkillItem[]>(() => {
    if (activeCategory === "ALL")
      return Object.values(skillCategories).flat();
    return skillCategories[activeCategory] ?? [];
  }, [activeCategory]);

  return (
    <section className="min-h-screen w-full bg-zinc-950 text-white px-4 sm:px-8 py-12 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          My Tech Stack
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Technologies & tools I use to build scalable, creative systems.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-green-500 text-black border-green-500"
                : "border-gray-700 text-gray-300 hover:text-white hover:border-green-500"
            }`}
          >
            {cat.replace(/_/g, " ")}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-5 max-w-6xl w-full"
      >
        {displayedSkills.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </motion.div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 text-xs sm:text-sm">
        <span className="text-green-400">$</span> SYSTEM_READY_FOR_DEPLOYMENT
      </div>
    </section>
  );
}
