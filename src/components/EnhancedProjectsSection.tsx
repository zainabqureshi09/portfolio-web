'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Star, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import projectsData from '@/data/projects.json';

export default function EnhancedProjectsSection() {
  const { featured, projects } = projectsData;
  const allProjects = [...featured, ...projects];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">My Work</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
                Featured Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Innovative solutions combining security, AI, and modern web technologies
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featured.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm h-full hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 border-0 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>

                        {/* Status Badge */}
                        {project.status && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-slate-900/80 backdrop-blur-sm border-emerald-500/50 text-emerald-400">
                              {project.status}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                          {project.year && (
                            <span className="text-slate-500 text-sm font-medium">{project.year}</span>
                          )}
                        </div>

                        {project.category && (
                          <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-400">
                            {project.category}
                          </Badge>
                        )}

                        <p className="text-slate-400 mb-4 leading-relaxed">
                          {project.longDescription || project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-slate-900/50 text-slate-300 border-slate-700 hover:border-emerald-500/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <Button asChild className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0">
                              <Link href={project.liveUrl} target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Link>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button asChild variant="outline" className="flex-1 border-slate-600 hover:border-emerald-500 hover:bg-emerald-500/10">
                              <Link href={project.githubUrl} target="_blank">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-2"
            >
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              More Projects
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm h-full hover:border-emerald-500/50 transition-all duration-300 group">
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                        
                        {project.category && (
                          <div className="absolute bottom-3 left-3">
                            <Badge className="bg-slate-900/80 backdrop-blur-sm border-cyan-500/50 text-cyan-400">
                              {project.category}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors line-clamp-1">
                            {project.title}
                          </h4>
                          {project.year && (
                            <span className="text-slate-500 text-xs font-medium ml-2">{project.year}</span>
                          )}
                        </div>

                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-slate-900/50 text-slate-300 border-slate-700"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-slate-900/50 text-slate-400 border-slate-700">
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Button asChild size="sm" className="flex-1 bg-emerald-500 hover:bg-emerald-600 border-0 text-xs">
                              <Link href={project.liveUrl} target="_blank">
                                <ExternalLink className="mr-1 h-3 w-3" />
                                Demo
                              </Link>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button asChild size="sm" variant="outline" className="flex-1 border-slate-600 hover:border-emerald-500 text-xs">
                              <Link href={project.githubUrl} target="_blank">
                                <Github className="mr-1 h-3 w-3" />
                                Code
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View More CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-emerald-900/30 via-cyan-900/30 to-purple-900/30 border-emerald-500/30 backdrop-blur-sm inline-block">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Award className="w-12 h-12 text-emerald-400" />
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-slate-200 mb-1">
                      Interested in Collaborating?
                    </h4>
                    <p className="text-slate-400 mb-3">
                      Let's build something amazing together
                    </p>
                    <Button asChild className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0">
                      <Link href="#contact">
                        Get In Touch
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
