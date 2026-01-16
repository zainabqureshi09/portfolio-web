'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Shield, 
  Wrench,
  Brain,
  Database,
  Globe,
  Lock
} from 'lucide-react';

const skills = {
  frontend: [
    { name: 'React', level: 'Expert' },
    { name: 'Next.js', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
  ],
  backend: [
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'Express', level: 'Advanced' },
    { name: 'REST APIs', level: 'Advanced' },
    { name: 'GraphQL', level: 'Intermediate' },
    { name: 'Databases', level: 'Intermediate' },
  ],
  security: [
    { name: 'Cybersecurity', level: 'Advanced' },
    { name: 'Network Security', level: 'Advanced' },
    { name: 'Penetration Testing', level: 'Intermediate' },
    { name: 'Encryption', level: 'Intermediate' },
    { name: 'OWASP Top 10', level: 'Advanced' },
    { name: 'Secure Coding', level: 'Advanced' },
  ],
  tools: [
    { name: 'Git', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'CI/CD', level: 'Advanced' },
    { name: 'VS Code', level: 'Expert' },
    { name: 'Linux', level: 'Advanced' },
  ]
};

const skillIcons = {
  frontend: <Globe className="h-5 w-5" />,
  backend: <Server className="h-5 w-5" />,
  security: <Shield className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-200 dark:text-slate-200">
              Technical Expertise
            </h2>
            <p className="text-slate-400 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive skill set spanning frontend, backend, security, and development tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full hover:border-emerald-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-3 text-emerald-400 dark:text-emerald-400">
                        {skillIcons[category as keyof typeof skillIcons]}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-200 dark:text-slate-200 capitalize">
                        {category}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {items.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg"
                        >
                          <span className="text-slate-300 dark:text-slate-300">{skill.name}</span>
                          <Badge
                            variant={skill.level === 'Expert' ? 'default' :
                                    skill.level === 'Advanced' ? 'secondary' :
                                    skill.level === 'Intermediate' ? 'outline' : 'destructive'}
                            className="capitalize"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
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