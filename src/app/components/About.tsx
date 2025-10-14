"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

export default function AboutPage() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-12 xs:py-16 md:py-20 lg:py-24 mt-16 xs:mt-20 md:mt-24">

      {/* Profile Image */}
      <motion.div
className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-2 xs:border-[3px] sm:border-4 border-white shadow-xl mb-6 xs:mb-8 lg:mb-0 lg:mr-8 xl:mr-12 flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/profile-pic.jpg" 
          alt="Profile Picture"
          width={288}
          height={288}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>

      {/* About Content */}
      <motion.div
        className="flex-1 text-center lg:text-left max-w-none lg:max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-3 xs:mb-4 sm:mb-6 leading-tight">
          About Me
        </h2>
    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2 xs:px-4 lg:px-0">
  I am{" "}
  <span className={`text-green-400 font-bold ${merienda.className} text-base xs:text-lg sm:text-xl md:text-2xl`}>
    Zainab Ayaz
  </span>
  , a developer who builds <span className="text-cyan-400 font-semibold">intelligent systems</span> — not just websites.
  <br className="hidden sm:block" />
  <span className="block sm:inline mt-2 sm:mt-0">
    My world blends{" "}
    <span className="text-green-400 font-semibold">AI automation</span>,{" "}
    <span className="text-pink-400 font-semibold">psychological design</span>, and{" "}
    <span className="text-cyan-400 font-semibold">Next.js architecture</span>{" "}
    to create digital ecosystems that think, adapt, and influence.
  </span>
  <br className="hidden sm:block" />
  <span className="block sm:inline mt-2 sm:mt-0">
    I specialize in{" "}
    <span className="text-green-400 font-semibold">AI tools</span>,{" "}
    <span className="text-cyan-400 font-semibold">automation bots</span>, and{" "}
    <span className="text-pink-400 font-semibold">influence-based UI/UX</span>{" "}
    — all powered by <span className="text-green-400 font-semibold">Next.js</span>,{" "}
    <span className="text-cyan-400 font-semibold">Framer Motion</span>, and{" "}
    <span className="text-pink-400 font-semibold">TailwindCSS</span>.
  </span>
  <br className="hidden sm:block" />
  <span className="block sm:inline mt-2 sm:mt-0">
    My mission: <span className="text-green-400 font-bold">Build minds, not machines.</span>
  </span>
</p>

        
        {/* Additional info for larger screens */}
        <motion.div 
          className="mt-4 xs:mt-6 md:mt-8 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
            {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 text-purple-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
