export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="w-full">
            <div className="container mx-auto">
                {children}
            </div>
        </main>
    )
}