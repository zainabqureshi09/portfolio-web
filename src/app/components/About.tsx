"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

export default function AboutPage() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-16 md:py-24">

      {/* Profile Image */}
      <motion.div
        className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/profile-pic.jpg" 
          alt="Profile Picture"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* About Content */}
      <motion.div
        className="mt-6 md:mt-0 md:ml-12 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          About Me
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-xl leading-relaxed">
          I am a passionate <span className={`text-pink-500 font-bold ${merienda.className}`}>Next.js & React Developer</span> who loves creating fast,  
          modern, and user-friendly web applications. With expertise in Framer Motion
          and TailwindCSS, I ensure smooth UI & UX for every project.
        </p>
      </motion.div>
    </section>
  );
}
