"use client";

import { motion } from "framer-motion";
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
} from "react-icons/si";

const skills = [

  { name: "React", icon: SiReact, color: "#61DBFB" },
  { name: "Framer Motion", icon: SiFramer, color: "#ff0050" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
];

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
        My Skills
      </motion.h2>

      <p className="mt-4 text-lg text-gray-300 text-center max-w-xl">
        Here are the technologies I use to build modern, scalable, and visually stunning applications.
      </p>

      {/* Skills Grid */}
      <motion.div
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-6  rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 border border-blue-700"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: `0px 0px 20px ${skill.color}`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
         
            <motion.div
              className="absolute inset-0 w-full h-full rounded-lg opacity-0"
              style={{
                background: `radial-gradient(circle, ${skill.color}33, transparent)`,
              }}
              whileHover={{ opacity: 1 }}
            />

            {/* Skill Icon */}
            <motion.div
              className="w-16 h-16 flex items-center justify-center rounded-full transition"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <skill.icon className="w-16 h-16" style={{ color: skill.color }} />
            </motion.div>

            {/* Skill Name */}
            <motion.h3
              className="mt-3 text-xl  font-semibold tracking-wide text-gray-200"
              whileHover={{ scale: 1.1 }}
            >
              {skill.name}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
