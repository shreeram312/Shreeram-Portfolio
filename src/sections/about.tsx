"use client";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SocailMedia from "@/components/social-media";

export const About = () => {
  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-4 sm:py-8 lg:py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 w-full z-0">
      <motion.section
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-8 lg:gap-8 xl:gap-12 w-full"
      >
        {/* Left side - Text content */}
        <motion.div
          variants={textVariants}
          className="flex-1 w-full max-w-none lg:max-w-2xl order-2 lg:order-1 px-0 z-10"
        >
          <motion.h1
            variants={textVariants}
            className="font-serif text-xl sm:text-4xl my-2 sm:my-4 lg:my-6 text-gray-300 leading-tight text-center lg:text-left"
          >
            <span className="mr-2 sm:mr-3 lg:mr-4">Hello</span>
          </motion.h1>

          <motion.h1
            variants={textVariants}
            className="text-2xl sm:text-5xl -my-1 sm:-my-2 lg:-my-3 font-serif leading-tight text-white text-center lg:text-left"
          >
            <span className="mr-1 xs:mr-2 sm:mr-3 lg:mr-4">I&apos;m</span>
            <span className="mr-1 xs:mr-2 sm:mr-3 lg:mr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Shreeram
            </span>
            <span className="mr-1 xs:mr-2 sm:mr-3 lg:mr-4">Mutukundu</span>
          </motion.h1>

          <motion.div variants={textVariants} className="relative mt-2">
            <p className="text-2xl sm:text-5xl font-serif my-4 sm:my-3 lg:my-4 leading-tight tracking-wide sm:tracking-wider text-center lg:text-left">
              <span className="mt-4 xs:mr-2 sm:mr-3 lg:mr-4 bg-gradient-to-r my-4 from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                <ReactTyped
                  strings={[
                    "Full Stack Engineer",
                    "Gen-AI & Agentic AI",
                    "DevOps Enthusiast",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={1000}
                  startDelay={50}
                  loop={true}
                />
              </span>
            </p>
          </motion.div>

          {/* Social Media Icons */}
          <SocailMedia />
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center relative group rounded-full flex-1 order-1 lg:order-2 w-full h-[50vh] md:h-auto items-center z-10"
        >
          {/* Glowing background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main image with hover effects */}
          <motion.div
            className="relative z-10 mt-28 sm:mt-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/126177107?v=4"
              alt="Shreeram Mutukundu"
              className="rounded-full w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 border-2 sm:border-3 lg:border-4 border-blue-500/30 shadow-lg sm:shadow-xl lg:shadow-2xl shadow-blue-500/20 object-cover"
            />

            {/* Floating ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-400/50 sm:border-2"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Single floating element */}
          <motion.div
            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};
