'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Shield, 
  Wrench,
  Brain,
  Database,
  Globe,
  Lock,
  Zap,
  Palette,
  GitBranch,
  Terminal
} from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTensorflow,
  SiFigma
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', icon: SiReact, level: 95, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, level: 95, color: 'text-white' },
      { name: 'TypeScript', icon: SiTypescript, level: 90, color: 'text-blue-400' },
      { name: 'JavaScript', icon: SiJavascript, level: 95, color: 'text-yellow-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'text-cyan-400' },
      { name: 'UI/UX Design', icon: SiFigma, level: 85, color: 'text-purple-400' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-emerald-500 to-green-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85, color: 'text-green-400' },
      { name: 'Python', icon: SiPython, level: 85, color: 'text-yellow-400' },
      { name: 'Express.js', icon: Terminal, level: 85, color: 'text-slate-400' },
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: 'text-green-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: 'text-blue-400' },
      { name: 'REST APIs', icon: Code2, level: 90, color: 'text-emerald-400' },
    ]
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    skills: [
      { name: 'Security Practices', icon: Lock, level: 88, color: 'text-red-400' },
      { name: 'Network Security', icon: Shield, level: 82, color: 'text-orange-400' },
      { name: 'Secure Coding', icon: Code2, level: 90, color: 'text-pink-400' },
      { name: 'Penetration Testing', icon: Terminal, level: 75, color: 'text-purple-400' },
      { name: 'OWASP Top 10', icon: Shield, level: 85, color: 'text-red-400' },
      { name: 'Encryption', icon: Lock, level: 80, color: 'text-yellow-400' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, level: 75, color: 'text-orange-400' },
      { name: 'OpenAI APIs', icon: Brain, level: 85, color: 'text-green-400' },
      { name: 'Computer Vision', icon: Brain, level: 70, color: 'text-purple-400' },
      { name: 'NLP', icon: Brain, level: 75, color: 'text-blue-400' },
      { name: 'ML Integration', icon: Zap, level: 80, color: 'text-yellow-400' },
      { name: 'AI Automation', icon: Brain, level: 85, color: 'text-pink-400' },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Git', icon: SiGit, level: 90, color: 'text-orange-400' },
      { name: 'GitHub', icon: GitBranch, level: 90, color: 'text-purple-400' },
      { name: 'Docker', icon: SiDocker, level: 75, color: 'text-blue-400' },
      { name: 'AWS', icon: Database, level: 70, color: 'text-orange-400' },
      { name: 'CI/CD', icon: GitBranch, level: 80, color: 'text-green-400' },
      { name: 'Linux', icon: Terminal, level: 85, color: 'text-yellow-400' },
    ]
  },
];

export default function EnhancedSkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">My Expertise</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
                Technical Skills
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning frontend, backend, security, AI, and DevOps
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm h-full hover:border-emerald-500/30 transition-all duration-300 group">
                  <CardContent className="p-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-200">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <skill.icon className={`w-5 h-5 ${skill.color}`} />
                              <span className="text-slate-300 font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-slate-400 font-semibold">{skill.level}%</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-emerald-900/30 via-cyan-900/30 to-purple-900/30 border-emerald-500/30 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-300">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                    <span>Clean Code Advocate</span>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-slate-600" />
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-cyan-400" />
                    <span>Continuous Learner</span>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-slate-600" />
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-purple-400" />
                    <span>Fast Adapter</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
