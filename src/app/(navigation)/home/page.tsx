"use client";

import { About } from "@/sections/about";
import Aboutme from "@/sections/aboutme";
import { SkillsPage } from "@/sections/skills";
import GitHubCalendar from "react-github-calendar";
import "../../../app/globals.css";
import ProjectsSection from "@/sections/projectsection";

export default function CategoriesPage() {
  return (
    <div className="flex flex-wrap md:gap-10 mt-20 flex-col">
      <About />

      <Aboutme />

      <SkillsPage />
      <ProjectsSection />

      <div className="w-screen p-3 example sm:w-full flex justify-center items-center">
        <GitHubCalendar username="shreeram312" />
      </div>
    </div>
  );
}
