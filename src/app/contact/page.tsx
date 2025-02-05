"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formspreeEndpoint = "https://formspree.io/f/mvgzqopd"; // Replace with your Formspree form ID

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <br />
      <br />
      
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      
      {/* Contact Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <ContactBox icon={<FaMapMarkerAlt />} title="Location" info="Remote + Karachi, Pakistan" />
        <ContactBox icon={<FaPhone />} title="Phone Number" info="03171214703" />
        <ContactBox
          icon={<FaEnvelope />}
          title="Email"
          info={<a href="mailto:zainab.cyber.dev@gmail.com" className="text-blue-400 hover:underline">zainab.cyber.dev@gmail.com</a>}
        />
      </div>

      {/* Contact Form */}
      <div className="shadow-xl rounded-lg p-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            required
            className="p-3 bg-transparent text-white border border-purple-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter a valid email address"
            required
            className="p-3 bg-transparent text-white border border-purple-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            className="p-3 bg-transparent text-white border border-purple-700 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="relative px-6 py-3 text-lg text-white font-semibold rounded-lg border border-purple-500 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-purple-400"
          >
            Submit
          </motion.button>
        </form>

        {/* Status Messages */}
        {status === "success" && <p className="text-green-400 mt-4 text-center">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-400 mt-4 text-center">Something went wrong. Try again.</p>}
      </div>
    </div>
  );
};

// Contact Box Component
interface ContactBoxProps {
  icon: any;
  title: string;
  info: string | any;
}

const ContactBox = ({ icon, title, info }: ContactBoxProps) => (
  <div className="p-6 text-white rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
    <div className="text-4xl text-blue-400 mb-3">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm">{info}</p>
  </div>
);

export default ContactPage;
