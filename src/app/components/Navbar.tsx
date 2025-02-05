"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 font-bold left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl z-30">
      <div className="flex justify-between items-center p-3">
        {/* Logo */}
        <Link href="/" className={` text-2xl font-bold ${merienda.className}`}>
         <span className="text-pink-500">Zaina</span><span className="text-indigo-400">dev</span>
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex gap-6 ${merienda.className}`}>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="/skills" className="text-white hover:text-gray-300">
            Skills
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
