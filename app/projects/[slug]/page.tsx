"use client";
import { projects } from "@/lib/projects";
import Image from "next/image.js";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    const resolvedParams = use(params);
    const router = useRouter();

  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return notFound();


  return (
    <div className="py-8">
      <header className="flex text-stone-200">
        <button className="cursor-pointer" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-chevron-left-icon lucide-circle-chevron-left "
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m14 16-4-4 4-4" />
          </svg>
        </button>
      </header>
      <div className="max-w-6xl mx-auto px-4">
        {/* Image de couverture */}
        <div className="flex justify-center">
          <Image
            src={project.cover}
            alt={project.title}
            className={
                project.techno.includes('Flutterflow')
                  ? 'w-52 rounded-sm mb-12'
                  : 'max-w-7xl w-full rounded-sm mb-12'
              }
            width={1980}
            height={1080}
          />
        </div>

        {/* En-tête du projet */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-6xl font-bold">{project.title}</h1>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>

          {/* Labels techno */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {project.techno.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-sm text-sm font-medium border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Date et entreprise */}
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <p>{project.date}</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p>{project.company}</p>
          </div>
        </div>

        {/* Cartes en glassmorph */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          <section className="backdrop-blur-md bg-white/10 p-8 rounded-sm border border-white/20 transform hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-white">
                J&#39;aide qui ?
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {project.sections.who}
            </p>
          </section>

          <section className="backdrop-blur-md bg-white/10 p-8 rounded-sm border border-white/20 transform hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Pour quoi ?
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {project.sections.why}
            </p>
          </section>

          <section className="backdrop-blur-md bg-white/10 p-8 rounded-sm border border-white/20 transform hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Comment ?
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {project.sections.how}
            </p>
          </section>
        </div>

        {/* Images d'illustration */}
        <div className="grid grid-cols-2 gap-8">
          {project.illustration.map((img, index) => (
            <div  key={index} className="flex justify-center">
              <Image
                key={index}
                      src={img}
                      width={1980}
                  height={1080}
                alt={`Illustration ${index + 1}`}
                className={
                    project.techno.includes('Flutterflow')
                      ? 'w-52 rounded-sm mb-12'
                      : 'max-w-7xl w-full rounded-sm mb-12'
                  }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
