"use client";

import { About } from "@/sections/about";
import Aboutme from "@/sections/aboutme";
import GitHubCalendar from "react-github-calendar";
import "../../../app/globals.css";
import ProjectsSection from "@/sections/projectsection";
import { motion } from "framer-motion";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Apply Framer Motion effect to About section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full"
      >
        {/* Background Effect - Responsive Small Balls */}
        <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden">
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "5%", top: "10%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "20%", top: "25%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "40%", top: "40%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "60%", top: "15%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "80%", top: "35%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "25%", top: "50%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "55%", top: "60%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "70%", top: "80%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "90%", top: "60%" }}
          />
          <div
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "50%", top: "90%" }}
          />
        </div>
        <About />
      </motion.div>

      {/* GitHub Calendar - Responsive Container */}
      <div className="w-screen  example sm:w-full sm:mx-36 ">
        <GitHubCalendar username="shreeram312" />
      </div>
    </div>
  );
}
