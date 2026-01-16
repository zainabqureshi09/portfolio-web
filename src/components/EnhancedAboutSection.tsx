'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Sparkles, Award, Target, Coffee, BookOpen, Code, Shield, Zap, Users, Trophy } from 'lucide-react';

export default function EnhancedAboutSection() {
  const highlights = [
    { icon: Shield, label: 'Cybersecurity Student', desc: 'Specializing in secure systems', color: 'text-emerald-400' },
    { icon: Code, label: 'Full-Stack Developer', desc: 'React, Next.js, TypeScript', color: 'text-cyan-400' },
    { icon: Zap, label: 'AI Integration', desc: 'Machine Learning & AI APIs', color: 'text-purple-400' },
    { icon: Users, label: 'Open Source', desc: 'Active GitHub contributor', color: 'text-pink-400' },
  ];

  const achievements = [
    { icon: Trophy, text: '15+ successful projects deployed', color: 'from-yellow-400 to-orange-400' },
    { icon: Award, text: 'Cybersecurity & AI specialist', color: 'from-emerald-400 to-cyan-400' },
    { icon: BookOpen, text: 'Continuous learner & innovator', color: 'from-purple-400 to-pink-400' },
    { icon: Coffee, text: 'Passionate problem solver', color: 'from-blue-400 to-indigo-400' },
  ];

  const values = [
    { title: 'Security First', description: 'Every line of code is written with security in mind, following industry best practices.', icon: Shield },
    { title: 'Innovation Driven', description: 'Leveraging cutting-edge AI and ML technologies to create intelligent solutions.', icon: Sparkles },
    { title: 'Quality Focused', description: 'Committed to delivering clean, maintainable, and scalable code.', icon: Target },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Get to Know Me</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
                About Me
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A passionate developer bridging the gap between security and innovation
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                <div className="prose prose-invert max-w-none">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      👋 Hello! I'm <span className="text-emerald-400 font-semibold">Zainab Ayaz</span>, a dedicated cybersecurity 
                      student and full-stack developer with a unique blend of security expertise and development skills. 
                      My journey in technology is driven by a passion for creating <span className="text-cyan-400">secure, intelligent systems</span> that 
                      make a real impact.
                    </p>

                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Currently pursuing advanced studies in <span className="text-purple-400 font-semibold">cybersecurity</span> while 
                      actively developing innovative applications that integrate <span className="text-emerald-400">artificial intelligence</span> and 
                      <span className="text-cyan-400"> machine learning</span>. I specialize in building robust, scalable systems where 
                      security isn't an afterthought—it's a foundation.
                    </p>

                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      My expertise spans modern web technologies like <span className="text-cyan-400 font-semibold">React, Next.js, and TypeScript</span>, 
                      combined with backend proficiency in <span className="text-emerald-400">Node.js and Python</span>. I'm particularly 
                      passionate about integrating AI capabilities into applications, creating intelligent solutions that adapt and learn.
                    </p>
                  </motion.div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.03, x: 5 }}
                        className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                      >
                        <div className={`${item.color} bg-slate-900 p-3 rounded-lg`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-1">{item.label}</h4>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/30"
                  >
                    <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Achievements & Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`bg-gradient-to-br ${achievement.color} p-2 rounded-lg`}>
                            <achievement.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm">{achievement.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Values */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">
                      My Core Values
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {values.map((value, index) => (
                        <motion.div
                          key={value.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-700/30 hover:border-emerald-500/50 transition-all"
                        >
                          <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <value.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-slate-200 mb-2">{value.title}</h4>
                          <p className="text-sm text-slate-400">{value.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3">
              <Coffee className="w-5 h-5 text-purple-400" />
              <span className="text-slate-300">
                <span className="text-purple-400 font-semibold">Fun Fact:</span> I turn caffeine into secure, intelligent code! ☕️💻
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
