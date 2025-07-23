import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";
import Projects from "./projects";

export const revalidate = 10;

const page = async () => {
  let projects;

  try {
    projects = await client.fetch(groq`*[_type == "shreeram"]{
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      githubUrl,
      projectUrl,
      
    }`);
  } catch (error) {
    console.error("Error fetching projects:", error);
    projects = [];
  }

  // Transform data to match expected format
  const transformedProjects =
    projects?.map((project: any) => ({
      _id: project._id || Math.random().toString(),
      title: project.title,
      subtitle: project.description,
      img: project.imageUrl,
      githubUrl: project.githubUrl,
      url: project.projectUrl,
      stack: project.stack || [],
    })) || [];

  return (
    <div className="min-h-screen ">
      <div className="relative ">
        <Projects projects={transformedProjects} />
      </div>
    </div>
  );
};
export default page;
