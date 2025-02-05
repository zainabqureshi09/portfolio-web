"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "My first web application",
    description: "A Quiz Application just for practice.",
    image: "/quiz-app.jpeg",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/zainabqureshi09/html-quiz-application",
    live: "https://html-quiz-application.vercel.app/",
  },
  {
    id: 2,
    title: "College website",
    description: "A College website just for fun code.",
    image: "/college.png",
    techStack: ["Next.js", "tailwindCSS"],
    github: "https://github.com/zainabqureshi09/fkwc-college-web",
    live: "https://my-college-website-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Finance Tracker",
    description: "A personal finance tracker to handle finance and expenses.",
    image: "/finance.jpeg",
    techStack: ["TailwindCSS", "TypeScript", "Next.js"],
    github: "https://github.com/zainabqureshi09/Personal-Finance-Tracker",
    live: "https://personal-finance-tracker-woad.vercel.app/",
  },
  {
    id: 4,
    title: "E Commerce UI/UX",
    description: "An E commerce website for a hackathon just a design.",
    image: "/e-com.jpg",
    techStack: ["TailwindCSS", "TypeScript", "Next.js"],
    github: "https://github.com/zainabqureshi09/hackathon-templ-8",
    live: "https://hackathon-templ-8.vercel.app/",
  },
  {
    id: 5,
    title: "Resume Builder",
    description: "A simple resume builder just to improve my skills.",
    image: "/resume-builder.jpg",
    techStack: ["HTML", "CSS", "Typescript"],
    github: "https://github.com/zainabqureshi09/shareable-resume-builder",
    live: "https://shareable-resume-builder-six.vercel.app/",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "An expense tracker to manage expenses.",
    image: "/expense.jpeg",
    techStack: ["HTML", "CSS", "Typescript"],
    github: "https://github.com/zainabqureshi09/expenses-tracker",
    live: "https://expenses-tracker-phi.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
        {/* Heading */}
        <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Explore our most innovative creations
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 py-12 w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-md dark:shadow-lg border border-gray-300 dark:border-gray-700 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & Live Links */}
                <div className="flex justify-start items-center space-x-4 mt-6">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </a>

                  {/* Live Preview Link */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    <span>Live Preview</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
