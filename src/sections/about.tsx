"use client";
import { ReactTyped } from "react-typed";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
      <motion.section
        ref={containerRef}
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 w-full"
      >
        {/* Left side - Text content */}
        <motion.div
          ref={textRef}
          variants={staggerContainer}
          initial="initial"
          animate={isTextInView ? "animate" : "initial"}
          className="flex-1 max-w-2xl order-2 lg:order-1 w-full "
        >
          <motion.h1
            variants={textVariants}
            className="font-mono text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl my-1 sm:my-6 lg:my-3 xl:my-4 text-gray-300 leading-tight "
          >
            <span className="mr-1 sm:mr-2 lg:mr-4">Hello</span>
          </motion.h1>

          <motion.h1
            variants={textVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl -my-1 sm:-my-1 lg:-my-2 xl:-my-3 font-bold leading-tight text-white"
          >
            <span className="mr-1 sm:mr-2 lg:mr-4">I&apos;m</span>
            <span className="mr-1 sm:mr-2 lg:mr-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Shreeram
            </span>
            <span className="mr-1 sm:mr-2 lg:mr-4">Mutukundu</span>
          </motion.h1>

          <motion.div variants={textVariants} className="relative">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold my-1 sm:my-2 lg:my-3 xl:my-4 leading-tight tracking-wide sm:tracking-wider">
              <span className="mr-1 sm:mr-2 lg:mr-4 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
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
            </h1>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="mt-3 sm:mt-4 lg:mt-6 xl:mt-8 space-y-2 sm:space-y-3 lg:space-y-4"
          >
            <Separator className="bg-gradient-to-r from-purple-500 to-blue-500" />

            {/* Cool one-liner */}
            <motion.div
              className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <p className="text-gray-300 font-medium text-xs sm:text-base leading-relaxed">
                🚀{" "}
                <span className="text-white font-semibold">
                  Trying to become a Cracked Dev
                </span>{" "}
                - One bug at a time! 💻
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          ref={imageRef}
          variants={imageVariants}
          initial="initial"
          animate={isImageInView ? "animate" : "initial"}
          className="flex justify-center relative group rounded-full flex-1 order-1 lg:order-2 w-full"
        >
          {/* Glowing background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
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
            className="relative z-10"
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/126177107?v=4"
              alt="Shreeram Mutukundu"
              className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 border-2 sm:border-3 lg:border-4 border-purple-500/30 shadow-lg sm:shadow-xl lg:shadow-2xl shadow-purple-500/20 object-cover"
            />

            {/* Floating ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border border-purple-400/50 sm:border-2"
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
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
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
