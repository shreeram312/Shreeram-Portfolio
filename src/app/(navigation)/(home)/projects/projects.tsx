"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

interface Project {
  _id: string;
  title: string;
  subtitle: string;
  img: string;
  githubUrl: string;
  url: string;
  stack: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.645, 0.045, 0.355, 1.0],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 border-2 border-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

      {/* Main card */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden group-hover:border-gray-700/50 transition-all duration-500">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.githubUrl, "_blank")}
                className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <FaGithub size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.url, "_blank")}
                className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <FiExternalLink size={24} />
              </motion.button>
            </div>
          </div>

          {/* Project number */}
          <div className="absolute top-4 right-4">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
              <span className="text-white text-sm font-serif ">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title and external link */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-serif text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500 ">
              {project.title}
            </h3>
            <motion.div
              whileHover={{ x: 4, y: -4 }}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <FiArrowUpRight
                className="text-gray-400 group-hover:text-white transition-colors duration-300"
                size={20}
              />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {project.subtitle}
          </p>

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-300 text-xs px-3 py-1.5 font-serif backdrop-blur-sm"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="min-h-screen px-6 py-20 mt-20 lg:mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
          className="text-center mb-20"
        >
          {/* Subtitle */}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6 "
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-400">
              My Projects
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-8"
          ></motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects &&
            projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
        </motion.div>

        {/* Empty State */}
        {(!projects || projects.length === 0) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiExternalLink className="text-white" size={24} />
              </div>
              <h3 className="text-xl  text-white mb-4 font-serif">
                No Projects Yet
              </h3>
              <p className="text-gray-400 font-light">
                Projects are currently being added. Check back soon for updates.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
