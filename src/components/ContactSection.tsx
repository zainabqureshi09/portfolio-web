'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      // Open email client with pre-filled content
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:zainab.cyber.dev@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-200 dark:text-slate-200">
              Get In Touch
            </h2>
            <p className="text-slate-400 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-slate-200 dark:text-slate-200 mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 text-emerald-400 dark:text-emerald-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-300 dark:text-slate-300">Email</h4>
                        <a
                          href="mailto:zainab.cyber.dev@gmail.com"
                          className="text-slate-400 dark:text-slate-400 hover:text-emerald-400 transition-colors"
                        >
                          zainab.cyber.dev@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 text-emerald-400 dark:text-emerald-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-300 dark:text-slate-300">Location</h4>
                        <p className="text-slate-400 dark:text-slate-400">Karachi, Pakistan</p>
                      </div>
                    </div>

                    <Separator className="my-6 bg-slate-700 dark:bg-slate-700" />

                    <div>
                      <h4 className="font-medium text-slate-300 dark:text-slate-300 mb-4">Follow Me</h4>
                      <div className="flex space-x-4">
                        <a
                          href="https://github.com/zainabqureshi09"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300 dark:text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/zainab-ayaz-3081482b5/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300 dark:text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-slate-200 dark:text-slate-200 mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-slate-200 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-slate-200 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-slate-700/50 border-slate-600 text-slate-200 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <div className="flex items-center justify-center">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>

                    {status === 'success' && (
                      <div className="p-3 bg-emerald-900/30 border border-emerald-700 rounded-md text-emerald-400 dark:text-emerald-400 text-sm">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="p-3 bg-red-900/30 border border-red-700 rounded-md text-red-400 dark:text-red-400 text-sm">
                        Failed to send message. Please try again.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}