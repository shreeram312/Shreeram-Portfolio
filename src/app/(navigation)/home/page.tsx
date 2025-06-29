"use client";

import { About } from "@/sections/about";
import Aboutme from "@/sections/aboutme";
import { SkillsPage } from "@/sections/skills";
import GitHubCalendar from "react-github-calendar";
import "../../../app/globals.css";
import ProjectsSection from "@/sections/projectsection";
import { motion } from "framer-motion"; // Import framer motion

export default function CategoriesPage() {
  return (
    <div className="flex flex-wrap md:gap-10 mt-20 flex-col">
      {/* Apply Framer Motion effect to About section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state: hidden, below the screen
        animate={{ opacity: 1, y: 0 }} // Final state: fully visible, in normal position
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition with ease-out
        className="relative" // Added for positioning background balls
      >
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          {/* Background Effect - More Small, Light Rounded Balls */}
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "5%", top: "10%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "20%", top: "25%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "40%", top: "40%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "60%", top: "15%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "80%", top: "35%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "25%", top: "50%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "55%", top: "60%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "70%", top: "80%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "90%", top: "60%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-bounce"
            style={{ left: "50%", top: "90%" }}
          />
        </div>
        <About />
      </motion.div>

      {/* Apply Framer Motion effect to other sections */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Aboutme />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <SkillsPage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ProjectsSection />
      </motion.div>

      <div className="w-screen p-3 example sm:w-full flex justify-center items-center">
        <GitHubCalendar username="shreeram312" />
      </div>
    </div>
  );
}
