"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-gradient">
      <div className="text-center px-6">
        {/* Terminal Window */}
        <motion.div 
          className="terminal-window p-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 font-mono">
            <div style={{ color: 'var(--cyber-cyan)' }}>
              // System Error
            </div>
            <div style={{ color: 'var(--cyber-green)' }}>
              <span style={{ color: 'var(--cyber-cyan)' }}>status:</span> 404 - Page not found
            </div>
            <div style={{ color: 'var(--foreground-secondary)' }}>
              The requested resource could not be located.
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 
            className="text-6xl font-bold mb-4" 
            style={{ color: 'var(--cyber-green)' }}
          >
            404
          </h1>
          <h2 
            className="text-2xl font-mono mb-6" 
            style={{ color: 'var(--foreground)' }}
          >
            Page Not Found
          </h2>
          <p 
            className="text-lg mb-8 font-mono" 
            style={{ color: 'var(--foreground-secondary)' }}
          >
            The page you are looking for does not exist or has been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-bold transition-all cyber-button"
              style={{
                background: 'var(--cyber-green)',
                color: 'var(--background)',
                border: '2px solid var(--cyber-green)'
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiHome className="w-4 h-4" />
              <span>HOME</span>
            </motion.div>
          </Link>
          
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-bold transition-all cyber-button"
            style={{
              background: 'transparent',
              color: 'var(--cyber-cyan)',
              border: '2px solid var(--cyber-cyan)'
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>GO BACK</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}