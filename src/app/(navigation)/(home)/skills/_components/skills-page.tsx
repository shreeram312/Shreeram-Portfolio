"use client";

import React from "react";
import Skills from "./skills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Tech {
  name: string;
  iconUrl: string;
}

interface SkillSet {
  category: string;
  tech: Tech[];
}

interface SkillsPageProps {
  skillsData: SkillSet[];
}

export const SkillsPage = ({ skillsData }: SkillsPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4 max-w-7xlo"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Technical{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          A curated collection of technologies and tools I use to build
          innovative solutions
        </p>
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto w-32 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 0.4, duration: 1.5 }}
        />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillsData.map((skillSet, index) => (
          <motion.div
            key={skillSet.category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {skillSet.category}
                </h2>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto w-16 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ delay: 1 + index * 0.1, duration: 1 }}
                />
              </div>
              <Skills skills={skillSet.tech} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
