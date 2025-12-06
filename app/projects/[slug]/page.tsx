import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";



interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) return <div className="p-10">Project Not Found</div>;

  return (
    <>
      {/* BACKGROUND DOODLES - moved OUTSIDE the content */}
      <Image
        src="/bg-cat-top-left.svg"
        alt="bg"
        width={450}
        height={450}
        className="pointer-events-none select-none fixed top-10 left-0 opacity-40 -z-10"
      />

      <Image
        src="/bg-cat-middle-left.svg"
        alt="bg"
        width={500}
        height={500}
        className="pointer-events-none select-none fixed top-[450px] left-0 opacity-40 -z-10"
      />

      <Image
        src="/bg-cat-bottom-right.svg"
        alt="bg"
        width={400}
        height={500}
        className="pointer-events-none select-none fixed bottom-10 right-0 opacity-40 -z-10"
      />

      {/* ORIGINAL CONTENT — TIDAK DIUBAH */}
      <section className="relative w-full flex justify-center px-6 mt-10 pb-32">
        <div className="w-[1200px]">

          <Link 
            href="/#projects"
            className="inline-block bg-[#D6E4F0] text-gray-700 px-5 py-2 rounded-lg shadow-sm hover:bg-[#c9d7e6]"
          >
            Back
          </Link>

          <h1 className="text-4xl font-bold mt-10">{project.title}</h1>

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

<div className="mt-16 rounded-2xl border border-[#D9D9D9] p-8">
  <h2 className="text-xl font-semibold text-[#92A8D1] mb-6">
    Software & Language
  </h2>

  <div className="flex gap-8 flex-wrap">
    {project.tech.map((item, index) => (
      <div 
        key={index} 
        className="w-20 h-20 bg-gray-100 rounded-xl shadow flex items-center justify-center overflow-hidden"
      >
        {/* Kalau item adalah path image */}
        {item.startsWith("/") ? (
          <Image 
            src={item}
            alt={item}
            width={60}
            height={60}
            className="object-contain"
          />
        ) : (
          // Kalau item adalah text (contoh: “WPF”)
          <span className="text-gray-700 text-sm font-medium text-center px-2">
            {item}
          </span>
        )}
      </div>
    ))}
  </div>
</div>

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
      </section>
    </>
  );
}
