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
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center mt-20 md:mt-24 lg:mt-28">
      {/* Floating Circular Image */}
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 md:mb-8"
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
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Transforming Ideas Into Reality
      </motion.h1>

      {/* Typewriter Effect (Cursor Wipe Animation) */}
      <motion.div
        className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{text}</span>
        <span className="text-blue-500 animate-blink">|</span>
      </motion.div>


      <motion.p
        className="text-base sm:text-lg md:text-xl mt-4 text-gray-400 max-w-2xl px-4 md:px-0"
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
        className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Link href="https://drive.google.com/file/d/1AKnQEJLZoE8GLV3LiDucOzkVd4yGeBRo/view?usp=sharing" target="_blank">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative px-6 py-3 text-xl text-purple-500 font-semibold rounded-lg border border-purple-500 bg-transparent transition-all duration-300 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.3)] before:absolute before:inset-0 before:rounded-lg before:border-4 before:border-transparent before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
            Resume

          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative px-6 py-3 text-xl text-purple-500 font-semibold rounded-lg border border-purple-500 bg-transparent transition-all duration-300 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.3)] before:absolute before:inset-0 before:rounded-lg before:border-4 before:border-transparent before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
            Contact Me




          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
