import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <div className="mt-16">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
