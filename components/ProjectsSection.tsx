"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectsList from "./ProjectsList";
import Image from "next/image";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="w-full flex justify-center mt-32 px-4">
      <div className="w-[1200px]">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>

        {/* LIST */}
        <ProjectsList items={displayedProjects} />

        {/* SEE MORE / SEE LESS BUTTON */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 bg-[#D0E4F5] px-4 py-2 rounded-lg shadow mt-6"
        >
          <Image src="/ViewList.svg" width={16} height={16} alt="list" />
          {showAll ? "See Less" : "See More"}
        </button>

      </div>
    </section>
  );
}
