// import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    Icon: FaLinkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/kawsar-ahmed-rahim-b52076335",
  },
  { Icon: FaGithub, label: "Github", href: "" },
  { Icon: FaFacebook, label: "Facebook", href: "" },
  { Icon: FaWhatsapp, label: "Whatsapp", href: "" },
];

const glowVariants = {
  initial: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 70% 35%, rgba(13, 88, 202, 0.35), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 55% at 30% 70%, rgba(16, 145, 129, 0.30), transparent 70%)",
        }}
      />
      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: "clamp(3rem, 5vw, 14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            padding: "0 3vw",
            whiteSpace: "nowrap",
            textShadow: "0 2 18px rgba(0,0,0,0.45)",
          }}
        >
          Kawsar Rahim
        </h1>
        <div className="h-0.75 w-24 md:w-32 rounded-full bg-linear-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />
        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              href={href}
              key={label}
              aria-label={label}
              rel="noopener noreferrer"
              target="_blank"
              variants={glowVariants}
              initial="initial"
              whileTap="tap"
              whileHover="hover"
              className="text-gray-300 hover:text-gray-200 transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-300 italic max-w-xl">
          "Success is when preparation meets opportunity."
        </p>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Kawsar Rahim. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
