'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23334155%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block text-slate-200 dark:text-slate-200">Cybersecurity Student &</span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 mt-2 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Intelligent Systems Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 dark:text-slate-400 max-w-2xl mx-auto mb-8"
          >
            Passionate about building secure, intelligent systems that solve real-world problems.
            Specializing in AI integration, cybersecurity solutions, and full-stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="group">
              <a href="https://github.com/zainabqureshi09" target="_blank" rel="noopener noreferrer">
                GitHub Profile
                <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}