"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaUser } from "react-icons/fa";
import { FiTerminal, FiCode, FiMail, FiHeart } from "react-icons/fi";
import { BiChip } from "react-icons/bi";
import { motion } from "framer-motion";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      href: "https://github.com/zainabqureshi09", 
      icon: FaGithub, 
      label: "GitHub",
      color: "hover:text-green-400"
    },
    { 
      href: "https://www.linkedin.com/in/zainab-ayaz-3081482b5/", 
      icon: FaLinkedin, 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      href: "https://x.com/Zainab345690", 
      icon: FaTwitter, 
      label: "Twitter",
      color: "hover:text-cyan-400"
    },
    { 
      href: "https://www.instagram.com/zainab.tsx/", 
      icon: FaInstagram, 
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    { 
      href: "https://www.facebook.com/profile.php?id=61555901770960", 
      icon: FaFacebook, 
      label: "Facebook",
      color: "hover:text-blue-500"
    }
  ];

  const quickLinks = [
    { href: "/", label: "~/home", icon: FiTerminal },
    { href: "/about", label: "./about", icon: FaUser },
    { href: "/projects", label: "./projects", icon: FiCode },
    { href: "/skills", label: "./skills", icon: BiChip },
    { href: "/contact", label: "./contact", icon: FiMail },
  ];

  return (
    <motion.footer 
      className="relative mt-20 bg-black/80 backdrop-blur-sm border-t border-green-400/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <FiTerminal className="w-6 h-6 text-green-400" />
              <span className="font-mono text-xl font-bold">
                <span className="text-green-400 text-shadow-glow">Mind</span>
                <span className="text-cyan-400 text-shadow-glow">Hacker</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm font-mono leading-relaxed">
              <span className="text-green-400">$</span> Building the future with intelligent systems<br/>
              <span className="text-cyan-400">&gt;</span> AI • Full-Stack • Innovation
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-400 font-mono font-bold mb-4 text-sm uppercase tracking-wider">
              // Quick Access
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      className="flex items-center space-x-1 px-3 py-1 rounded-md text-gray-400 hover:text-green-400 hover:bg-green-400/10 transition-all font-mono text-xs border border-transparent hover:border-green-400/20"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{link.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-400 font-mono font-bold mb-4 text-sm uppercase tracking-wider">
              // Connect
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link 
                    key={social.label}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <motion.div
                      className={`relative p-2 rounded-lg bg-gray-800/50 text-gray-400 ${social.color} transition-all duration-300 border border-gray-700 hover:border-green-400/20`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                      <div className="absolute inset-0 rounded-lg bg-current opacity-0 group-hover:opacity-10 transition-opacity" />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
            <p className="text-gray-500 font-mono text-xs">
              <span className="text-cyan-400">status:</span> <span className="text-green-400">online</span><br/>
              <span className="text-cyan-400">mode:</span> <span className="text-orange-400">building</span>
            </p>
          </motion.div>
        </div>

        {/* Terminal-style Divider */}
        <motion.div
          className="border-t border-green-400/20 pt-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <motion.div
              className="flex items-center space-x-2 font-mono text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-green-400">©</span>
              <span>{currentYear}</span>
              <span className="text-cyan-400">Zainab Ayaz</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500">All rights reserved</span>
            </motion.div>

            {/* Made With Love */}
            <motion.div
              className="flex items-center space-x-2 font-mono text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-500">Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4 text-pink-400" />
              </motion.div>
              <span className="text-gray-500">and</span>
              <span className="text-green-400">Next.js</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Terminal Prompt */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-gray-600">
            <span className="text-green-400">zainab@mindhacker</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400">~/portfolio</span>
            <span className="text-gray-500">$</span>
            <motion.span
              className="inline-block w-2 h-4 bg-green-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
