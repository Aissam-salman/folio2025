import HoverImageEffect from "@/components/ImageRevealHoverEffects";

export default function Home() {
    return (
        <>
            <header className="py-6 px-4">
                <div className="flex justify-between items-center">
                    <img
                        src="/logoaissam.png"
                        alt="logo"
                        className="h-16 w-auto object-contain hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
                <h2 className="mt-4 text-lg text-white/80 font-zenk font-normal">
                    Développeur d'application
                </h2>
            </header>

            <main className="flex flex-col gap-16 py-16 px-4">
                <h1 className="font-noto text-6xl md:text-7xl leading-tight max-w-4xl">
                    Mon voyage ne fait que commencer.<br/>
                    Mais je suis prêt à tout construire.
                </h1>

                <div className="flex flex-col items-end gap-8">
                    <HoverImageEffect
                        link="/projects/minkey-app"
                        className="text-3xl font-zenk"
                        text="Projet 1"
                        img="/200104.jpg"
                    />
                    <HoverImageEffect
                        className="text-3xl font-zenk"
                        text="Projet 2"
                        img="/200104.jpg"
                    />
                    <HoverImageEffect
                        className="text-3xl font-zenk"
                        text="Projet 3"
                        img="/200104.jpg"
                    />
                    <HoverImageEffect
                        className="text-3xl font-zenk"
                        text="Projet 4"
                        img="/200104.jpg"
                    />
                </div>
            </main>
        </>
    );
}
