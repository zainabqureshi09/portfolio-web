import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-6 text-center">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <Link href="https://www.facebook.com/profile.php?id=61555901770960" className="hover:text-gray-400 transition duration-300">
          <FaFacebook size={24} />
        </Link>
        <Link href="https://www.instagram.com/zainab.tsx/" className="hover:text-gray-400 transition duration-300">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://x.com/Zainab345690" className="hover:text-gray-400 transition duration-300">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/zainab-ayaz-3081482b5/" className="hover:text-gray-400 transition duration-300">
          <FaLinkedin size={24} />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-center space-x-6 text-sm mb-4">
        <li><Link href="/" className="hover:text-gray-400 transition duration-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-400 transition duration-300">About</Link></li>
        <li><Link href="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link></li>
      </ul>

      {/* Copyright Text */}
      <p className="text-xs border-t border-gray-700 pt-3">
        Copyright © {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
