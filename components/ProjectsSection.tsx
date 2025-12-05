"use client";

import ProjectsList from "./ProjectsList";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full flex justify-center mt-32 px-4">
      <div className="w-[1200px]">

        {/* TITLE */}
        <h2 className="text-4xl font-bold">My Projects</h2>

        {/* LIST */}
        <ProjectsList />

        {/* SEE MORE BUTTON */}
        <button className="flex items-center gap-2 bg-[#F7CAC9] px-4 py-2 rounded-lg shadow">
          <Image src="/ViewList.svg" width={16} height={16} alt="list" />
          See More
        </button>

      </div>
    </section>
  );
}
