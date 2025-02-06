"use client";
import React, { useState, useRef } from "react";

import { motion, useInView } from "framer-motion";
import ProjectTag from "./projecttag";
import ProjectCard from "./projectcard";
const projectsData = [
  {
    id: 1,
    title: "Twitter-clone",
    description:
      "A full-stack Twitter clone built with Next.js, Express.js Prisma, and PostGreSQL. It features user authentication, posting tweets, follow/unfollow functionality, efficient data handling and a responsive UI",
    image: "/assets/twitter.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreeram312/TwitterClone",
    previewUrl: "https://twitter-clone-ybus.vercel.app/",
  },
  {
    id: 2,
    title: "Delicious-Bites: Food Ordering",
    description:
      "DeliciousBites is a comprehensive MERN stack food delivery app that allows users Signup,Signin and explore, order, and enjoy a wide variety of cuisines. With a user-friendly interface and seamless state management",
    image: "/assets/food.png",
    tag: ["All", "Web"],
    gitUrl: "https://delicious-bites-app.vercel.app/",
    previewUrl: "https://github.com/shreeram312/DeliciousBites-App",
  },
  {
    id: 3,
    title: "Smart Proctoring: AI Exam System",
    description:
      "The AI Proctored Exam System is a web-based application designed to enhance the integrity of online exams using AI techniques. This system uses TensorFlow.js for real-time face, object, mobile detection providing a secure environment.",
    image: "/assets/ai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreeram312/AI-Proctored-System",
    previewUrl: "https://github.com/shreeram312/AI-Proctored-System",
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "A real-time chat application built with the MERN stack, featuring Zustand for state management and DaisyUI for modern UI. Designed for seamless messaging, it offers an intuitive user experience.",
    image: "/assets/chat.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreeram312/Chat-App",
    previewUrl: "https://github.com/shreeram312/Chat-App",
  },
  {
    id: 5,
    title: "D-Strack",
    description:
      "D-Strack – A smart DSA  tracking platform designed to help you save, review, and revise coding solutions efficiently. With a built-in editor preparing for interviews has never been easier",
    image: "/assets/d-strack.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreeram312/DStrAck",
    previewUrl: "https://d-strack.vercel.app/",
  },
  {
    id: 6,
    title: "Duplicate Question Pair",
    description:
      "Duplicate Question Pair is an NLP-driven project designed to identify similar questions. Using advanced text processing techniques, it detects semantically similar queries",
    image: "/assets/quora.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/shreeram312/Email-Sms-Spam-Detection-System",
    previewUrl:
      "https://github.com/shreeram312/Email-Sms-Spam-Detection-System",
  },
  {
    id: 7,
    title: "Email-Spam Detection System",
    description:
      "The Email Spam Detection System project uses machine learning algorithms to classify emails as spam or not spam. By employing natural language processing (NLP) techniques.",
    image: "/assets/email.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/shreeram312/Email-Sms-Spam-Detection-System",
    previewUrl:
      "https://github.com/shreeram312/Email-Sms-Spam-Detection-System",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 p-5   ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
