"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Wrench, Mail } from "lucide-react";
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
    { href: "/" as const, label: "Home", icon: Home, shortLabel: "Home" },
    { href: "/#about" as const, label: "About", icon: User, shortLabel: "About" },
    { href: "/#skills" as const, label: "Skills", icon: Wrench, shortLabel: "Skills" },
    { href: "/#projects" as const, label: "Projects", icon: Code, shortLabel: "Projects" },
    { href: "/#contact" as const, label: "Contact", icon: Mail, shortLabel: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg"
            : "bg-slate-900/70 backdrop-blur-sm"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-bold text-lg">
                <span className="text-emerald-400">Zainab</span>
                <span className="text-slate-200">Ayaz</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link key={item.href} href={item.href} className="group">
                  <motion.div
                    className={`relative flex items-center space-x-1 lg:space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                      active
                        ? "text-emerald-400 bg-emerald-400/10"
                        : "text-slate-300 hover:text-emerald-400 hover:bg-emerald-400/5"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className={`w-4 h-4 ${active ? "text-emerald-400" : "text-slate-400 group-hover:text-emerald-400"}`} />
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-3 space-y-1">
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
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all ${
                            active
                              ? "text-emerald-400 bg-emerald-400/10"
                              : "text-slate-300 hover:text-emerald-400 hover:bg-emerald-400/5"
                          }`}
                          whileHover={{ x: 4, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon
                            className={`w-4 h-4 ${active ? "text-emerald-400" : "text-slate-400"}`}
                          />
                          <span className="flex-1">{item.label}</span>
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
    </>
  );
};

export default Navbar;