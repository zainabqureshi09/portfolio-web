'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink, Github, Star, Calendar, Code } from 'lucide-react';
import { fetchGitHubRepos, getTechStackFromTopics, formatDate, getTimeSinceUpdate } from '@/lib/github';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const repos = await fetchGitHubRepos();
        setProjects(repos);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-red-400 dark:text-red-400 text-lg">{error}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800" id="projects">
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
              Featured Projects
            </h2>
            <p className="text-slate-400 dark:text-slate-400 max-w-2xl mx-auto">
              A showcase of my latest work, automatically updated from my GitHub repositories
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="h-64 bg-slate-800" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 6).map((project, index) => {
                const techStack = getTechStackFromTopics(project.topics);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full flex flex-col hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                      <CardContent className="p-5 flex-grow">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold text-slate-200 dark:text-slate-200 line-clamp-1">
                            {project.name}
                          </h3>
                          <div className="flex space-x-1">
                            <Github className="h-4 w-4 text-slate-400 dark:text-slate-400" />
                          </div>
                        </div>

                        <p className="text-slate-400 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                          {project.description || 'No description provided'}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {techStack.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {techStack.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{techStack.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-500 mb-4">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            <span>{project.stargazers_count}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span title={formatDate(project.updated_at)}>{getTimeSinceUpdate(project.updated_at)}</span>
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-auto">
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 dark:text-slate-200 py-2 px-3 rounded-md text-sm transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-3 rounded-md text-sm transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}

          {projects.length === 0 && !loading && (
            <div className="text-center py-12">
              <Code className="h-12 w-12 text-slate-600 dark:text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-400 dark:text-slate-400 mb-2">No projects found</h3>
              <p className="text-slate-500 dark:text-slate-500">Check back later for updates from GitHub</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}