import { cache } from 'react';

// Define TypeScript interfaces for GitHub API responses
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string | null;
  topics: string[];
  homepage?: string | null;
}

export interface Project extends GitHubRepo {
  liveUrl?: string;
}

// Cached function to fetch GitHub repositories with enhanced performance
export const fetchGitHubRepos = cache(async (): Promise<Project[]> => {
  try {
    // Using GitHub REST API v3 to fetch user's repositories
    const response = await fetch(
      `https://api.github.com/users/zainabqureshi09/repos?sort=updated&direction=desc&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Zainab-Portfolio-App',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        // Cache for 1 hour (3600 seconds) - this helps with performance
        next: {
          revalidate: 3600, // Revalidate every hour
          tags: ['github-repos'] // Add cache tags for manual revalidation if needed
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and return only public repositories
    return repos
      .filter(repo => !(repo as any).fork && (repo as any).private === false)
      .map(repo => ({
        ...repo,
        // Extract live URL from homepage if available
        liveUrl: repo.homepage || undefined,
      }))
      .sort((a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      ); // Explicitly sort by most recently updated
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
});

// Function to get tech stack from repository topics
export function getTechStackFromTopics(topics: string[]): string[] {
  // Common tech stack keywords
  const techKeywords = [
    'javascript', 'typescript', 'react', 'nextjs', 'nodejs', 'python',
    'java', 'c++', 'c', 'html', 'css', 'tailwind', 'mongodb', 'postgresql',
    'mysql', 'firebase', 'aws', 'docker', 'kubernetes', 'graphql', 'rest',
    'ai', 'ml', 'tensorflow', 'pytorch', 'express', 'nestjs', 'prisma',
    'supabase', 'redis', 'sass', 'scss', 'redux', 'mobx', 'vue', 'angular',
    'flutter', 'react-native', 'electron', 'threejs', 'webgl', 'canvas',
    'cybersecurity', 'security', 'blockchain', 'ethereum', 'solidity',
    'openai', 'chatgpt', 'gpt', 'api', 'microservices', 'serverless'
  ];

  // Create a set to avoid duplicate tech stack items
  const uniqueTechSet = new Set<string>();

  topics.forEach(topic => {
    const matchedKeyword = techKeywords.find(keyword =>
      topic.toLowerCase().includes(keyword)
    );

    if (matchedKeyword) {
      // Capitalize the first letter of each word
      const capitalized = matchedKeyword
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-');

      uniqueTechSet.add(capitalized);
    }
  });

  return Array.from(uniqueTechSet);
}

// Function to format date in a human-readable way
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Function to get a readable description of time elapsed
export function getTimeSinceUpdate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}