'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdvancedChatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "👋 Hi! I'm Zainab's AI assistant. I can help you learn more about her skills, projects, experience, and how to get in touch. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { text: '💼 Tell me about her experience', query: 'experience' },
    { text: '🚀 What are her top projects?', query: 'projects' },
    { text: '🛠️ What technologies does she use?', query: 'skills' },
    { text: '📧 How can I contact her?', query: 'contact' },
    { text: '🎓 Education background', query: 'education' },
    { text: '🌟 What makes her unique?', query: 'unique' },
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return "Zainab is a passionate cybersecurity student and full-stack developer with hands-on experience in:\n\n🔹 Building 15+ production-ready web applications\n🔹 Developing AI-powered solutions with machine learning integration\n🔹 Creating secure, scalable systems with focus on cybersecurity\n🔹 Full-stack development using modern frameworks like Next.js, React, and TypeScript\n\nShe specializes in combining security best practices with innovative AI technologies to create intelligent, secure applications.";
    }

    // Projects
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "Zainab has built impressive projects including:\n\n🚀 **LensVision AI** - AI-powered virtual try-on system using computer vision and 3D rendering\n🤖 **GhostMind System** - Intelligent automation framework with AI agents\n💰 **Finance Tracker** - Personal finance management with dashboards\n🛒 **E-commerce Solutions** - Multiple e-commerce platforms with modern UI/UX\n🍔 **Ghost Kitchen** - Food delivery platform with payment integration\n\nCheck out her GitHub: github.com/zainabqureshi09";
    }

    // Skills
    if (message.includes('skill') || message.includes('tech') || message.includes('language')) {
      return "Zainab's technical expertise includes:\n\n**Frontend:** React, Next.js, TypeScript, JavaScript, Tailwind CSS\n**Backend:** Node.js, Python, Express, REST APIs\n**Security:** Cybersecurity, Network Security, OWASP Top 10, Secure Coding\n**AI/ML:** TensorFlow, OpenAI APIs, Computer Vision, NLP\n**DevOps:** Git, Docker, AWS, CI/CD\n\nShe's particularly strong in integrating AI capabilities with robust security practices!";
    }

    // Education
    if (message.includes('education') || message.includes('study') || message.includes('learn')) {
      return "Zainab is currently pursuing advanced studies in **Cybersecurity** while actively developing her skills in:\n\n📚 Secure application development\n📚 AI and Machine Learning integration\n📚 Full-stack web development\n📚 Network security and penetration testing\n\nShe's a continuous learner who stays updated with the latest technologies and security practices!";
    }

    // Contact
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('whatsapp')) {
      return "You can reach Zainab through:\n\n📧 **Email:** zainab.cyber.dev@gmail.com\n📱 **WhatsApp:** +92 341 2270393\n💼 **LinkedIn:** linkedin.com/in/zainab-ayaz-3081482b5/\n📷 **Instagram:** @zainab.tsx\n🐙 **GitHub:** github.com/zainabqureshi09\n\nFeel free to connect for collaborations, projects, or just to say hi! 👋";
    }

    // What makes her unique
    if (message.includes('unique') || message.includes('special') || message.includes('different')) {
      return "What makes Zainab stand out:\n\n✨ **Security-First Developer** - Every project is built with cybersecurity in mind\n✨ **AI Integration Expert** - Specializes in adding intelligence to applications\n✨ **Full-Stack Proficiency** - Comfortable with both frontend and backend\n✨ **Passionate Problem Solver** - Loves tackling complex challenges\n✨ **Continuous Innovator** - Always exploring cutting-edge technologies\n\nShe bridges the gap between security and innovation! 🚀";
    }

    // Default response
    return "I can help you learn about:\n\n🔹 Zainab's experience and background\n🔹 Her impressive project portfolio\n🔹 Technical skills and expertise\n🔹 Education and certifications\n🔹 How to get in touch with her\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickAction = (query: string) => {
    setInputValue(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ type: 'spring', damping: 25 }}
        className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Bot className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg">Zainab's AI Assistant</h3>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-300 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-white/90 text-xs">Online & Ready to Help</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-br from-emerald-500 to-cyan-500' 
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-emerald-500 to-cyan-500 text-white'
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                }`}>
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-60 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <motion.div
                    className="w-2 h-2 bg-slate-400 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-slate-400 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-slate-400 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-2 border-t border-slate-800 bg-slate-900/50"
          >
            <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Quick Questions:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.slice(0, 4).map((action, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="text-left text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 p-2 rounded-lg transition-colors border border-slate-700 hover:border-emerald-500/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {action.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-slate-800 bg-slate-900">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus:border-emerald-500"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0 px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Powered by AI • Instant Responses
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
