// app/projects/[slug]/page.tsx
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) return notFound()

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-500 mb-2">{project.techno.join(', ')}</p>
            <p className="text-gray-400">{project.date} — {project.company}</p>
            <img src={project.cover} alt={project.title} className="my-6 w-52 rounded-lg shadow" />
            <p>{project.content}</p>
            <img src={project.illustration[0]} alt=""/>
        </div>
    )
}
