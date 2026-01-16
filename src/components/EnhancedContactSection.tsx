'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Check, AlertCircle, MessageSquare, Phone } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function EnhancedContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const contactMethods: Array<{
    icon: any;
    label: string;
    value: string;
    href: string | null;
    color: string;
    description: string;
  }> = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zainab.cyber.dev@gmail.com',
      href: 'mailto:zainab.cyber.dev@gmail.com',
      color: 'from-emerald-500 to-cyan-500',
      description: 'Send me an email'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+92 341 2270393',
      href: 'https://wa.me/923412270393',
      color: 'from-green-500 to-emerald-500',
      description: 'Chat on WhatsApp'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: null,
      color: 'from-purple-500 to-pink-500',
      description: 'Based in Pakistan'
    },
  ];

  const socialLinks: Array<{
    icon: any;
    href: string;
    label: string;
    color: string;
    gradient: string;
  }> = [
    { 
      icon: Github, 
      href: 'https://github.com/zainabqureshi09', 
      label: 'GitHub',
      color: 'hover:text-purple-400',
      gradient: 'from-purple-500 to-indigo-500'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/zainab-ayaz-3081482b5/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: FaInstagram, 
      href: 'https://instagram.com/zainab.tsx', 
      label: 'Instagram',
      color: 'hover:text-pink-400',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      icon: FaTwitter, 
      href: 'https://x.com/Zainab345690', 
      label: 'Twitter',
      color: 'hover:text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500'
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:zainab.cyber.dev@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      }, 1000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
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
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Let's Connect</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
                Get In Touch
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {method.href ? (
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className={`bg-gradient-to-br ${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <method.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-200 mb-2">{method.label}</h3>
                        <p className="text-emerald-400 mb-1 font-medium">{method.value}</p>
                        <p className="text-slate-400 text-sm">{method.description}</p>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`bg-gradient-to-br ${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-2">{method.label}</h3>
                      <p className="text-emerald-400 mb-1 font-medium">{method.value}</p>
                      <p className="text-slate-400 text-sm">{method.description}</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Social Links */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-200 mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder-slate-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder-slate-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder-slate-400 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0"
                    >
                      {status === 'loading' && <span className="mr-2">Sending...</span>}
                      {status === 'success' && (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          <span>Message Sent!</span>
                        </>
                      )}
                      {status === 'error' && (
                        <>
                          <AlertCircle className="mr-2 h-4 w-4" />
                          <span>Please fill all fields</span>
                        </>
                      )}
                      {status === 'idle' && (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Social Links Card */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-200 mb-6">Connect on Social Media</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all group"
                        >
                          <div className={`bg-gradient-to-br ${social.gradient} w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <social.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm font-medium">{social.label}</span>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border-emerald-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-200 mb-4">Prefer instant messaging?</h3>
                  <p className="text-slate-300 mb-6">
                    Reach out directly via WhatsApp for a faster response!
                  </p>
                  <a
                    href="https://wa.me/923412270393"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white border-0 group">
                      <FaWhatsapp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span>Chat on WhatsApp</span>
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
