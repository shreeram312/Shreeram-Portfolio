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
    <div className="relative overflow-hidden py-4 sm:py-8 lg:py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
      <motion.section
        ref={containerRef}
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-8 lg:gap-8 xl:gap-12 w-full"
      >
        {/* Left side - Text content */}
        <motion.div
          ref={textRef}
          variants={staggerContainer}
          initial="initial"
          animate={isTextInView ? "animate" : "initial"}
          className="flex-1 w-full max-w-none lg:max-w-2xl order-2 lg:order-1 px-0"
        >
          <motion.h1
            variants={textVariants}
            className="font-mono text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-2 sm:my-4 lg:my-6 text-gray-300 leading-tight text-center lg:text-left"
          >
            <span className="mr-2 sm:mr-3 lg:mr-4">Hello</span>
          </motion.h1>

          <motion.h1
            variants={textVariants}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl -my-1 sm:-my-2 lg:-my-3 font-bold leading-tight text-white text-center lg:text-left"
          >
            <span className="mr-1 xs:mr-2 sm:mr-3 lg:mr-4">I&apos;m</span>
            <span className="mr-1 xs:mr-2 sm:mr-3 lg:mr-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Shreeram
            </span>
            <span className="mr-1 xs:mr-2 sm:mr-3 lg:mr-4">Mutukundu</span>
          </motion.h1>

          <motion.div variants={textVariants} className="relative">
            <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-2 sm:my-3 lg:my-4 leading-tight tracking-wide sm:tracking-wider text-center lg:text-left">
              <span className="mr-1 xs:mr-2 sm:mr-3 lg:mr-4 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
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
            className="mt-4 sm:mt-6 lg:mt-8 xl:mt-10 space-y-3 sm:space-y-4 lg:space-y-5"
          >
            <Separator className="bg-gradient-to-r from-purple-500 to-blue-500" />

            {/* Cool one-liner */}
            <motion.div
              className="mt-4 sm:mt-6 p-3 sm:p-4 lg:p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <p className="text-gray-300 font-medium text-sm xs:text-base sm:text-base lg:text-lg leading-relaxed break-words text-center lg:text-left">
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
          className="flex justify-center relative group rounded-full flex-1 order-1 lg:order-2 w-full h-[50vh] md:h-auto items-center"
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
              className="rounded-full w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 border-2 sm:border-3 lg:border-4 border-purple-500/30 shadow-lg sm:shadow-xl lg:shadow-2xl shadow-purple-500/20 object-cover"
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
            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
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
