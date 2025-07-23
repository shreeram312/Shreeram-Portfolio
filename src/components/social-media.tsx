import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import { SiLeetcode } from "react-icons/si";

const SocialMedia = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative z-20">
      <motion.div
        variants={textVariants}
        className="flex justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8"
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/shreeram312"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ zIndex: 30 }}
        >
          <FaGithub className="text-white text-xl sm:text-2xl hover:text-green-500 transition-colors duration-300" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/shreeram-mutukundu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ zIndex: 30 }}
        >
          <FaLinkedin className="text-white text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-300" />
        </motion.a>

        {/* LeetCode */}
        <motion.a
          href="https://leetcode.com/shreeram312"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ zIndex: 30 }}
        >
          <SiLeetcode className="text-white text-xl sm:text-2xl hover:text-orange-400 transition-colors duration-300" />
        </motion.a>

        {/* Twitter */}
        <motion.a
          href="https://x.com/realshreeram312"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ zIndex: 30 }}
        >
          <FaTwitter className="text-white text-xl sm:text-2xl hover:text-cyan-400 transition-colors duration-300" />
        </motion.a>

        <motion.a
          href="mailto:shreerammutukundu.2003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ zIndex: 30 }}
        >
          <FaEnvelope className="text-white text-xl sm:text-2xl hover:text-red-500 transition-colors duration-300" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SocialMedia;
