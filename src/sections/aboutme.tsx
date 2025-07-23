import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Aboutme = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  const isContainerInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });
  const isTextInView = useInView(textRef, { once: true, margin: "-50px" });
  const isCodeInView = useInView(codeRef, { once: true, margin: "-50px" });

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const codeVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const skillVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    "React",
    "NextJS",
    "TypeScript",
    "Node.js",
    "Express",
    "Python",
    "Java",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  return (
    <motion.div
      ref={containerRef}
      id="about"
      variants={containerVariants}
      initial="initial"
      animate={isContainerInView ? "animate" : "initial"}
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 w-full"
    >
      {/* Section Header */}
      <motion.div
        variants={textVariants}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto w-20 sm:w-24"
          variants={lineVariants}
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          ref={textRef}
          variants={textVariants}
          className="space-y-4 sm:space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-serif text-white">
              Who I Am?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Hey, I'm{" "}
              <span className="text-purple-400 font-semibold">
                Shreeram Mutukundu
              </span>{" "}
              — a passionate developer with a strong foundation in full-stack
              application development, and hands-on experience working with
              Generative AI and agents.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm passionate about building clean, efficient, and user-centered
              applications. Always leveling up, experimenting with new tech, and
              solving real-world problems.
            </p>
          </motion.div>

          {/* Cool one-liner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="p-4 sm:p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl"
          >
            <p className="text-purple-300 font-serif text-sm sm:text-lg text-center">
              🚀{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-serif">
                On the grind to become a cracked dev
              </span>{" "}
              — one build at a time! 💻
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  initial="initial"
                  animate={isTextInView ? "animate" : "initial"}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 transition-colors text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Code Card */}
        <motion.div ref={codeRef} variants={codeVariants} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm"
          >
            {/* Code Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-serif">coder.js</span>
            </div>

            {/* Code Content */}
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="space-y-4 font-serif text-sm"
              >
                <div className="flex items-center">
                  <span className="text-purple-400">const</span>
                  <span className="text-white ml-2">developer</span>
                  <span className="text-purple-400 ml-2">=</span>
                  <span className="text-gray-400 ml-2">{`{`}</span>
                </div>

                <div className="ml-4 space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-400">name:</span>
                    <span className="text-green-400 ml-2">{`'Shreeram Mutukundu'`}</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-blue-400">role:</span>
                    <span className="text-green-400 ml-2">{`'Full Stack Engineer'`}</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-blue-400">passion:</span>
                    <span className="text-green-400 ml-2">{`'Building amazing things'`}</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-blue-400">status:</span>
                    <span className="text-yellow-400 ml-2">{`'Always Learning'`}</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="pt-2">
                    <span className="text-purple-400">hireable</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-purple-400 ml-2">()</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-green-400 ml-2">{`true`}</span>
                  </div>
                </div>

                <div className="text-gray-400">{`}`}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -180],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
