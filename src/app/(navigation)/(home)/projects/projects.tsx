"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-black border border-gray-800 rounded-lg overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <FaGithub size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.url, "_blank")}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <FiExternalLink size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-mono">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="secondary"
              className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 transition-colors text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="min-h-screen bg-black ">
      <div className="max-w-7xl ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            A collection of my work, showcasing various technologies and
            problem-solving approaches
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects &&
            projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
        </div>

        {/* Empty State */}
        {(!projects || projects.length === 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 text-lg font-mono">
              No projects available at the moment.
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
