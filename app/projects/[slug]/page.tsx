import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div className="p-10">Project Not Found</div>;

  return (
    <section className="relative w-full flex justify-center px-6 mt-10 pb-32">

      <div className="w-[1200px]">

        {/* BACK BUTTON */}
        <Link 
          href="/#projects"
          className="inline-block bg-[#D6E4F0] text-gray-700 px-5 py-2 rounded-lg shadow-sm hover:bg-[#c9d7e6]"
        >
          Back
        </Link>

        {/* PROJECT TITLE */}
        <h1 className="text-4xl font-bold mt-10">{project.title}</h1>

        {/* MAIN IMAGE */}
        <div className="mt-8 rounded-3xl border border-[#E7E7E7] shadow-md p-6">
          <Image
            src={project.image}
            alt={project.title}
            width={1100}
            height={700}
            className="rounded-xl object-cover mx-auto"
          />

          <p className="text-gray-700 mt-6 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* SOFTWARE & LANGUAGE */}
        <div className="mt-16 rounded-2xl border border-[#D9D9D9] p-8">
          <h2 className="text-xl font-semibold text-[#92A8D1] mb-6">
            Software & Language
          </h2>

          <div className="flex gap-12">
            {/* --- MASUKKAN ICONS DI SINI --- */}
            <div className="w-20 h-20 bg-gray-100 rounded-xl shadow" />
            <div className="w-20 h-20 bg-gray-100 rounded-xl shadow" />
            <div className="w-20 h-20 bg-gray-100 rounded-xl shadow" />
          </div>
        </div>

        {/* SEE REPOSITORY BUTTON */}
        <div className="flex justify-center mt-10">
          <Link
            href={project.repo ?? "#"}
            target="_blank"
            className="px-6 py-3 bg-[#D6E4F0] text-gray-800 rounded-lg shadow hover:bg-[#c4d3e3]"
          >
            See Repository
          </Link>
        </div>

      </div>

      {/* BACKGROUND DOODLES */}
      <Image
        src="/detail-bg-top.png"
        alt="bg top"
        width={600}
        height={600}
        className="absolute top-0 right-0 opacity-30 pointer-events-none"
      />
      <Image
        src="/detail-bg-bottom.png"
        alt="bg bottom"
        width={600}
        height={600}
        className="absolute bottom-0 left-0 opacity-30 pointer-events-none"
      />
    </section>
  );
}
