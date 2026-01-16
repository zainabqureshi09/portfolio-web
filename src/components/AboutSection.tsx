'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 dark:text-slate-300 text-lg mb-4">
                    I'm a passionate cybersecurity student and full-stack developer with a strong focus on building intelligent, secure systems.
                    My journey in technology began with a curiosity about how systems work and evolved into a passion for creating solutions that make a difference.
                  </p>

                  <p className="text-slate-300 dark:text-slate-300 text-lg mb-6">
                    Currently pursuing my studies in cybersecurity while developing innovative applications that leverage artificial intelligence and machine learning.
                    I specialize in creating robust, scalable systems that prioritize both functionality and security.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 dark:text-emerald-400 mb-3">My Approach</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-emerald-400 dark:text-emerald-400 mr-2">•</span>
                          <span className="text-slate-300 dark:text-slate-300">Security-first mindset in all development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 dark:text-emerald-400 mr-2">•</span>
                          <span className="text-slate-300 dark:text-slate-300">AI-driven solutions for complex problems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 dark:text-emerald-400 mr-2">•</span>
                          <span className="text-slate-300 dark:text-slate-300">Continuous learning and adaptation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 mb-3">Focus Areas</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-cyan-400 dark:text-cyan-400 mr-2">•</span>
                          <span className="text-slate-300 dark:text-slate-300">Secure application architecture</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 dark:text-cyan-400 mr-2">•</span>
                          <span className="text-slate-300 dark:text-slate-300">AI/ML integration in web applications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 dark:text-cyan-400 mr-2">•</span>
                          <span className="text-slate-300 dark:text-slate-300">Full-stack development with modern frameworks</span>
                        </li>
                      </ul>
                    </div>
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