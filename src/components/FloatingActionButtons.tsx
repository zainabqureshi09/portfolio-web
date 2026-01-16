'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Bot } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import AdvancedChatbot from './AdvancedChatbot';

export default function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const actions = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/923412270393',
      color: 'bg-green-500 hover:bg-green-600',
      delay: 0.1
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://instagram.com/zainab.tsx',
      color: 'bg-pink-500 hover:bg-pink-600',
      delay: 0.2
    },
    {
      icon: Bot,
      label: 'AI Assistant',
      onClick: () => {
        setShowChatbot(true);
        setIsOpen(false);
      },
      color: 'bg-purple-500 hover:bg-purple-600',
      delay: 0.3
    }
  ];

  return (
    <>
      {/* Main FAB */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2">
              {actions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ delay: action.delay, type: 'spring' }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    className="bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: action.delay + 0.1 }}
                  >
                    {action.label}
                  </motion.span>
                  {action.href ? (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${action.color} p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110`}
                    >
                      <action.icon className="w-5 h-5 text-white" />
                    </a>
                  ) : (
                    <button
                      onClick={action.onClick}
                      className={`${action.color} p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110`}
                    >
                      <action.icon className="w-5 h-5 text-white" />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 rounded-full shadow-lg text-white transition-all duration-300 hover:shadow-2xl hover:scale-110"
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chatbot Component */}
      <AdvancedChatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />
    </>
  );
}
