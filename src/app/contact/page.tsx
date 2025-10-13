"use client";

import { motion, AnimatePresence } from "framer-motion";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import { JSX, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiTerminal, FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { BiChip } from "react-icons/bi";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"success" | "error" | "loading" | "">("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const formspreeEndpoint = "https://formspree.io/f/mvgzqopd";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const socialLinks = [
    { 
      href: "https://github.com/zainabqureshi09", 
      icon: FaGithub, 
      label: "GitHub",
      color: "var(--cyber-green)"
    },
    { 
      href: "https://www.linkedin.com/in/zainab-ayaz-3081482b5/", 
      icon: FaLinkedin, 
      label: "LinkedIn",
      color: "var(--cyber-blue)"
    },
    { 
      href: "https://x.com/Zainab345690", 
      icon: FaTwitter, 
      label: "Twitter",
      color: "var(--cyber-cyan)"
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-cyber-gradient">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
            background: 'var(--cyber-glow-cyan)',
            border: '1px solid var(--cyber-cyan)',
            color: 'var(--cyber-cyan)'
          }}>
            <FiTerminal className="w-5 h-5" />
            <span className="font-mono">./contact --init</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            <span style={{ color: 'var(--cyber-green)' }}>Let's</span>{' '}
            <span style={{ color: 'var(--cyber-cyan)' }}>Connect</span>
          </h1>
          
          <p className="text-xl font-mono mb-8" style={{ color: 'var(--foreground-secondary)' }}>
            Ready to build something amazing together?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Terminal Status */}
            <div className="terminal-window p-6">
              <div className="space-y-3 font-mono text-sm">
                <div style={{ color: 'var(--cyber-cyan)' }}>// System Status</div>
                <div style={{ color: 'var(--foreground-secondary)' }}>
                  <span style={{ color: 'var(--cyber-green)' }}>status:</span> "Available for Projects"
                </div>
                <div style={{ color: 'var(--foreground-secondary)' }}>
                  <span style={{ color: 'var(--cyber-green)' }}>response_time:</span> "&lt; 24 hours"
                </div>
                <div style={{ color: 'var(--foreground-secondary)' }}>
                  <span style={{ color: 'var(--cyber-green)' }}>timezone:</span> "UTC+5 (PKT)"
                </div>
                <div style={{ color: 'var(--foreground-secondary)' }}>
                  <span style={{ color: 'var(--cyber-green)' }}>preferred_contact:</span> "email || linkedin"
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <ContactBox
                icon={<FaEnvelope />}
                title="Email"
                info={<a href="mailto:zainab.cyber.dev@gmail.com" style={{ color: 'var(--cyber-cyan)' }} className="hover:underline">zainab.cyber.dev@gmail.com</a>}
                color="var(--cyber-cyan)"
              />
              <ContactBox
                icon={<FaMapMarkerAlt />}
                title="Location"
                info="Remote + Karachi, Pakistan"
                color="var(--cyber-green)"
              />
              <ContactBox
                icon={<BiChip />}
                title="Specialization"
                info="TypeScript • AI/ML • E-commerce"
                color="var(--cyber-purple)"
              />
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4 font-mono" style={{ color: 'var(--cyber-green)' }}>
                <span style={{ color: 'var(--cyber-cyan)' }}>&gt;</span> find_me --social
              </h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-lg bg-cyber-card border transition-all cyber-hover-effect"
                      style={{
                        border: '1px solid var(--border-muted)',
                        background: 'var(--background-secondary)'
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: `0 10px 20px ${social.color}20`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-6 h-6 transition-colors" style={{ color: social.color }} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-cyber-card rounded-xl p-8 border" style={{
              border: '1px solid var(--border-muted)',
              background: 'var(--background-secondary)'
            }}>
              {/* Form Header */}
              <div className="flex items-center gap-2 mb-6">
                <FiMail className="w-5 h-5" style={{ color: 'var(--cyber-cyan)' }} />
                <h2 className="text-2xl font-bold font-mono" style={{ color: 'var(--cyber-cyan)' }}>
                  send_message()
                </h2>
                {isTyping && (
                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: 'var(--cyber-green)' }} />
                    <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: 'var(--cyber-green)', animationDelay: '0.2s' }} />
                    <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: 'var(--cyber-green)', animationDelay: '0.4s' }} />
                  </motion.div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-mono text-sm" style={{ color: 'var(--cyber-green)' }}>
                    <FiUser className="w-4 h-4" />
                    <span>name:</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full p-4 rounded-lg font-mono bg-transparent border transition-all focus:outline-none"
                    style={{
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--background-tertiary)',
                      border: '1px solid var(--border-muted)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--cyber-green)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-muted)'}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-mono text-sm" style={{ color: 'var(--cyber-cyan)' }}>
                    <FiMail className="w-4 h-4" />
                    <span>email:</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    required
                    className="w-full p-4 rounded-lg font-mono bg-transparent border transition-all focus:outline-none"
                    style={{
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--background-tertiary)',
                      border: '1px solid var(--border-muted)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--cyber-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-muted)'}
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-mono text-sm" style={{ color: 'var(--cyber-purple)' }}>
                    <FiMessageSquare className="w-4 h-4" />
                    <span>message:</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project idea..."
                    required
                    rows={5}
                    className="w-full p-4 rounded-lg font-mono bg-transparent border transition-all focus:outline-none resize-none"
                    style={{
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--background-tertiary)',
                      border: '1px solid var(--border-muted)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--cyber-purple)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-muted)'}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-mono font-bold transition-all cyber-button ${
                    status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  style={{
                    background: status === "loading" ? 'var(--background-tertiary)' : 'transparent',
                    color: 'var(--cyber-green)',
                    border: '2px solid var(--cyber-green)'
                  }}
                  whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                >
                  {status === "loading" ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-t-transparent rounded-full"
                        style={{ borderColor: 'var(--cyber-green)' }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg terminal-window"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="font-mono text-sm" style={{ color: 'var(--cyber-green)' }}>
                      <span style={{ color: 'var(--cyber-cyan)' }}>&gt;</span> Message sent successfully!
                      <br />
                      <span style={{ color: 'var(--foreground-secondary)' }}>I'll get back to you within 24 hours.</span>
                    </div>
                  </motion.div>
                )}
                
                {status === "error" && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg" 
                    style={{ 
                      background: 'var(--background-tertiary)',
                      border: '1px solid var(--cyber-pink)'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="font-mono text-sm" style={{ color: 'var(--cyber-pink)' }}>
                      <span style={{ color: 'var(--cyber-cyan)' }}>&gt;</span> Error: Message failed to send
                      <br />
                      <span style={{ color: 'var(--foreground-secondary)' }}>Please try again or contact me directly via email.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Terminal Footer */}
        <motion.div
          className="mt-16 text-center font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="terminal-window p-4 inline-block">
            <div style={{ color: 'var(--cyber-green)' }}>
              <span style={{ color: 'var(--cyber-cyan)' }}>zainab@mindhacker</span>
              <span style={{ color: 'var(--foreground-muted)' }}>:</span>
              <span style={{ color: 'var(--cyber-purple)' }}>~/contact</span>
              <span style={{ color: 'var(--foreground-muted)' }}>$ </span>
              echo "Looking forward to your message!"
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Box Component
interface ContactBoxProps {
  icon: JSX.Element;
  title: string;
  info: string | JSX.Element;
  color: string;
}

const ContactBox = ({ icon, title, info, color }: ContactBoxProps) => (
  <motion.div 
    className="p-6 rounded-lg bg-cyber-card border transition-all duration-300 cyber-hover-effect"
    style={{
      border: '1px solid var(--border-muted)',
      background: 'var(--background-secondary)'
    }}
    whileHover={{ 
      scale: 1.02, 
      boxShadow: `0 10px 20px ${color}20` 
    }}
  >
    <div className="flex items-start gap-4">
      <div className="text-2xl mt-1" style={{ color }}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold font-mono mb-2" style={{ color: 'var(--foreground)' }}>
          {title}
        </h3>
        <div className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
          {info}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ContactPage;
