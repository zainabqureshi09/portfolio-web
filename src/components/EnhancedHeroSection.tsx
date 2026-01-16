'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Sparkles, ArrowDown, Code2, Shield, Brain } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function EnhancedHeroSection() {
  const socialLinks: Array<{
    icon: any;
    href: string;
    label: string;
    color: string;
  }> = [
    { icon: Github, href: 'https://github.com/zainabqureshi09', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zainab-ayaz-3081482b5/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com/zainab.tsx', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Mail, href: 'mailto:zainab.cyber.dev@gmail.com', label: 'Email', color: 'hover:text-emerald-400' },
  ];

  const stats = [
    { icon: Code2, label: 'Projects', value: '15+', color: 'text-emerald-400' },
    { icon: Shield, label: 'Security Focus', value: '100%', color: 'text-cyan-400' },
    { icon: Brain, label: 'AI Integration', value: 'Expert', color: 'text-purple-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2310b981%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium">Available for Opportunities</span>
                </motion.div>

                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="block text-slate-200">Hi, I'm</span>
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 mt-2"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    Zainab Ayaz
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-6"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-4">
                    Cybersecurity Student & Full-Stack Developer
                  </h2>
                  <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0">
                    Passionate about building secure, intelligent systems with AI integration. 
                    Specializing in cybersecurity solutions, full-stack development, and creating 
                    innovative applications that solve real-world problems.
                  </p>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Button asChild size="lg" className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0">
                  <Link href="#projects">
                    <span>View My Work</span>
                    <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="group border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10">
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Get In Touch</span>
                  </Link>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex gap-4 justify-center lg:justify-start mb-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="grid grid-cols-3 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ padding: '4px' }}
                >
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </motion.div>

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-900">
                  <Image
                    src="/profile-pic.jpg"
                    alt="Zainab Ayaz"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-emerald-500 rounded-full p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code2 className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-cyan-500 rounded-full p-4 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-400"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
