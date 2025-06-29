import React from "react";
import { SkillsPage } from "./_components/skills-page";

interface Tech {
  name: string;
  iconUrl: string;
}

interface SkillSet {
  category: string;
  tech: Tech[];
}

export const revalidate = 600;

// SSG: Fetch data at build time
export async function generateStaticParams() {
  return [];
}

async function getSkillsData(): Promise<SkillSet[]> {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/skills.json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch skills data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching skills data:", error);
    return [];
  }
}

const SkillsPageWrapper = async () => {
  const skillsData = await getSkillsData();

  return (
    <div className="bg-black min-h-screen sm:mx-32">
      <SkillsPage skillsData={skillsData} />
    </div>
  );
};

export default SkillsPageWrapper;
