import Image from "next/image";
import Link from "next/link";

interface Project {
  image: string;
  title: string;
  link: string;
  category: string;
  description: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex gap-6 items-start mb-16">

      {/* IMAGE CARD */}
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={350}
          height={200}
          className="rounded-md object-cover border border-[#f3caca]"
        />

        {/* LINK ICON */}
        <Link
          href={project.link}
          target="_blank"
          className="absolute top-3 right-3 bg-[#92A8D1] p-2 rounded-md"
        >
          <Image src="/ArrowUp.png" width={20} height={20} alt="visit" />
        </Link>
      </div>

      {/* TEXT */}
      <div className="max-w-lg">
        <p className="text-sm font-semibold text-gray-700">{project.category}</p>
        <h3 className="text-3xl font-bold mt-1">{project.title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}
