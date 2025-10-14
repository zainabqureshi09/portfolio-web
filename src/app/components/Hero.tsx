"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const words = ["Web Developer", "UI/UX Designer", "Next.js Expert"];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;
  const pauseTime = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, wordIndex, speed, pauseTime]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 xs:px-6 sm:px-8 text-center mt-16 xs:mt-18 sm:mt-20 md:mt-24 lg:mt-28">
      {/* Floating Circular Image */}
      <motion.div
className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 rounded-full overflow-hidden border-2 xs:border-[3px] sm:border-4 border-white shadow-xl mb-4 xs:mb-6 md:mb-8"
        initial={{ y: 12 }}
        animate={{ y: [17] }}
        transition={{ repeat: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/profile-pic.jpg"
          alt="Profile Picture"
          width={208}
          height={208}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="block xs:inline">Transforming Ideas</span>
        <span className="block xs:inline xs:ml-2">Into Reality</span>
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.div
        className="mt-2 xs:mt-3 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[2rem] xs:min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {text}
        </span>
        <span className="text-blue-500 animate-blink">|</span>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-sm xs:text-base sm:text-lg md:text-xl mt-3 xs:mt-4 text-gray-400 max-w-xs xs:max-w-md sm:max-w-lg md:max-w-2xl px-2 xs:px-4 md:px-0 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Creating modern, fast & interactive web experiences using{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Next.js, TailwindCSS & Framer Motion.
        </span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-4 xs:mt-6 flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 w-full xs:w-auto px-4 xs:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Link
          href="https://drive.google.com/file/d/1AKnQEJLZoE8GLV3LiDucOzkVd4yGeBRo/view?usp=sharing"
          target="_blank"
          className="w-full xs:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full xs:w-auto relative px-4 xs:px-6 py-2.5 xs:py-3 text-base xs:text-lg sm:text-xl text-purple-500 font-semibold rounded-lg border border-purple-500 bg-transparent transition-all duration-300 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.3)] before:absolute before:inset-0 before:rounded-lg before:border-4 before:border-transparent before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none"
          >
            Resume
          </motion.button>
        </Link>
        <Link href="/contact" className="w-full xs:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full xs:w-auto relative px-4 xs:px-6 py-2.5 xs:py-3 text-base xs:text-lg sm:text-xl text-purple-500 font-semibold rounded-lg border border-purple-500 bg-transparent transition-all duration-300 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.3)] before:absolute before:inset-0 before:rounded-lg before:border-4 before:border-transparent before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
