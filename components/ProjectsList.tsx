"use client";

import ProjectCard from "./ProjectCard";
import { Project } from "@/data/projects"; // ⬅️ Import tipe

interface Props {
  items: Project[]; // ⬅️ Kasih tipe untuk props
}

export default function ProjectsList({ items }: Props) {
  return (
    <div className="flex flex-col gap-16 w-full">
      {items.map((p: Project) => (   // ⬅️ p juga dikasih tipe
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
