import Image from "next/image";
import Link from "next/link";

interface Project {
  image: string;
  title: string;
  link: string;
  category: string;
  description: string;
  slug: string;
}


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex gap-6 items-start mb-16">

      {/* WRAP SEMUA CARD, tapi TANPA nested <a> */}
      <Link href={`/projects/${project.slug}`} className="flex gap-6 items-start">

        {/* IMAGE */}
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={280}
            height={180}
            className="rounded-xl object-cover border"
          />
        </div>

      </Link>

      {/* RIGHT CONTENT */}
      <div className="flex-1">

        <p className="text-sm text-gray-400">{project.category}</p>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-500 mt-1">{project.description}</p>

        {/* ICON BUTON — DI LUAR LINK UTAMA!!! */}
        <div className="mt-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="inline-block text-[#92A8D1] hover:underline"
            >
              Visit →
            </a>
          )}
        </div>

      </div>
    </div>
  );
}