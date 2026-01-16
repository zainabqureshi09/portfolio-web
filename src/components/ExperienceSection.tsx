'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Shield, BookOpen } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Cybersecurity Student',
    organization: 'University/College',
    period: '2022 - Present',
    description: 'Studying cybersecurity fundamentals, network security, ethical hacking, and secure development practices.',
    icon: <Shield className="h-5 w-5" />,
    color: 'text-emerald-400'
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    organization: 'Self-Employed',
    period: '2021 - Present',
    description: 'Developing full-stack applications with a focus on security, AI integration, and modern web technologies.',
    icon: <Code className="h-5 w-5" />,
    color: 'text-cyan-400'
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    organization: 'Personal Projects',
    period: '2023 - Present',
    description: 'Exploring AI/ML technologies, implementing neural networks, and integrating AI into web applications.',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'text-violet-400'
  },
  {
    id: 4,
    title: 'Open Source Contributions',
    organization: 'GitHub Community',
    period: '2022 - Present',
    description: 'Contributing to open-source projects, maintaining repositories, and collaborating with the developer community.',
    icon: <GraduationCap className="h-5 w-5" />,
    color: 'text-amber-400'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-200 dark:text-slate-200">
              Learning Journey
            </h2>
            <p className="text-slate-400 dark:text-slate-400 max-w-2xl mx-auto">
              My path of continuous learning and professional development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <div className={`mr-3 ${exp.color}`}>
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-200 dark:text-slate-200">
                          {exp.title}
                        </h3>
                      </div>
                      <Badge variant="secondary" className="self-start">
                        {exp.period}
                      </Badge>
                    </div>

                    <div className="flex items-center text-slate-400 dark:text-slate-400 text-sm mb-3">
                      <span>{exp.organization}</span>
                    </div>

                    <p className="text-slate-300 dark:text-slate-300">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}