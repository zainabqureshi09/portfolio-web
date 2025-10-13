"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiTerminal, FiCode, FiUser } from "react-icons/fi";
import { BiChip } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "~/home", icon: FiTerminal, shortLabel: "home" },
    { href: "/about", label: "./about", icon: FiUser, shortLabel: "about" },
    { href: "/projects", label: "./projects", icon: FiCode, shortLabel: "projects" },
    { href: "/skills", label: "./skills", icon: BiChip, shortLabel: "skills" },
    { href: "/contact", label: "./contact", icon: FiTerminal, shortLabel: "contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-2 xs:top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-[95%] xs:w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] z-50 transition-all duration-300 ${
          isScrolled 
            ? "backdrop-blur-xl bg-black/30 shadow-2xl" 
            : "backdrop-blur-lg bg-black/20 shadow-lg"
        }`}
        style={{
          border: "1px solid rgba(0, 255, 136, 0.2)",
          borderRadius: "16px",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-3 sm:py-4">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="group flex-shrink-0">
            <motion.div 
              className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <FiTerminal className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-green-300 transition-colors" />
                <div className="absolute inset-0 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-green-300 opacity-50 blur-sm transition-all" />
              </div>
              <span className="font-mono text-base xs:text-lg sm:text-xl font-bold">
                <span className="text-green-400 group-hover:text-green-300 transition-colors">
                  Mind
                </span>
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Hacker
                </span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Enhanced responsive behavior */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link key={item.href} href={item.href} className="group">
                  <motion.div
                    className={`relative flex items-center space-x-1 lg:space-x-2 px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 rounded-lg font-mono transition-all duration-300 ${
                      active 
                        ? "bg-green-400/10 text-green-400 border border-green-400/20" 
                        : "text-gray-300 hover:text-green-400 hover:bg-green-400/5 border border-transparent"
                    }`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${active ? "text-green-400" : "text-gray-400 group-hover:text-green-400"} transition-colors`} />
                    
                    {/* Full label for large screens */}
                    <span className="hidden xl:inline relative">
                      {item.label}
                      {active && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </span>
                    
                    {/* Short label for medium screens */}
                    <span className="xl:hidden text-xs lg:text-sm">
                      {item.shortLabel}
                    </span>
                    
                    {active && (
                      <div className="absolute inset-0 rounded-lg bg-green-400/5 blur-sm" />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Tablet Navigation (icons only) */}
          <div className="hidden sm:flex md:hidden items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link key={item.href} href={item.href} className="group">
                  <motion.div
                    className={`relative p-2 rounded-lg transition-all duration-300 ${
                      active 
                        ? "bg-green-400/10 text-green-400 border border-green-400/20" 
                        : "text-gray-300 hover:text-green-400 hover:bg-green-400/5"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={item.label}
                  >
                    <Icon className="w-4 h-4" />
                    {active && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-green-400" />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="sm:hidden relative p-2 text-green-400 hover:text-green-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FiX className="w-5 h-5 xs:w-6 xs:h-6" /> : <FiMenu className="w-5 h-5 xs:w-6 xs:h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sm:hidden border-t border-green-400/20 bg-black/60 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 xs:px-5 py-3 space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href}>
                        <motion.div
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-mono text-sm transition-all ${
                            active
                              ? "bg-green-400/10 text-green-400 border border-green-400/20"
                              : "text-gray-300 hover:text-green-400 hover:bg-green-400/5 border border-transparent"
                          }`}
                          whileHover={{ x: 4, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon
                            className={`w-4 h-4 xs:w-5 xs:h-5 ${active ? "text-green-400" : "text-gray-400"}`}
                          />
                          <span className="flex-1">{item.label}</span>
                          {active && (
                            <motion.div 
                              className="w-2 h-2 rounded-full bg-green-400"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.2 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Terminal Status Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 z-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;