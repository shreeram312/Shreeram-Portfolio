"use client";
import { About } from "@/sections/about";
import Aboutme from "@/sections/aboutme";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

export default function CategoriesPage() {
  return (
    <div className="overflow-x-hidden relative z-0">
      {/* Apply Framer Motion effect to About section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-0"
      >
        {/* Background Effect - Responsive Small Balls */}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none z-0">
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-blue-400 opacity-30 animate-bounce"
            style={{ left: "5%", top: "10%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-cyan-400 opacity-30 animate-bounce"
            style={{ left: "20%", top: "25%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-blue-400 opacity-30 animate-bounce"
            style={{ left: "40%", top: "40%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-cyan-400 opacity-30 animate-bounce"
            style={{ left: "60%", top: "15%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-blue-400 opacity-30 animate-bounce"
            style={{ left: "80%", top: "35%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-cyan-400 opacity-30 animate-bounce"
            style={{ left: "25%", top: "50%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-blue-400 opacity-30 animate-bounce"
            style={{ left: "55%", top: "60%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-cyan-400 opacity-30 animate-bounce"
            style={{ left: "70%", top: "80%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-blue-400 opacity-30 animate-bounce"
            style={{ left: "90%", top: "60%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-cyan-400 opacity-30 animate-bounce"
            style={{ left: "50%", top: "90%" }}
          />
        </div>

        {/* Content with proper z-index */}
        <div className="relative z-10">
          <About />
        </div>
      </motion.div>

      {/* GitHub Calendar Section - Portfolio Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="min-h-screen relative z-0"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
              className="text-center mb-16"
            >
              {/* Subtitle */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl sm:text-3xl font-serif mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-400">
                  Shipping Daily & Pushing to Prod
                </span>
              </motion.h1>

              {/* Description */}

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-8"
              ></motion.div>
            </motion.div>

            {/* Calendar Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="backdrop-blur-xl sm:mx-14">
                {/* Mobile Header */}

                {/* Calendar with responsive scaling */}
                <div className="w-screen p-2 example">
                  <div className="sm:w-auto">
                    <div className="sm:mx-80">
                      <GitHubCalendar username="shreeram312" />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="block sm:hidden text-center mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-gray-500 text-xs font-serif">
                    Contributions on GitHub
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
