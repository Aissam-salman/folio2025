import HoverImageEffect from "./components/ImageRevealHoverEffects.js";
function App() {
    return (
        <>
            <div className="relative min-h-screen w-full overflow-auto text-white bg-black">
                <div className="min-h-screen w-full py-6 px-4 sm:px-10 relative">
                    <div
                        className="absolute inset-0 border-2 border-red-500/30 rounded-lg
                                shadow-[0_0_30px_#FF1A1A30] shonen-overlay"
                    >
                        <div className="absolute inset-0">
                            <img
                                src="/background.jpg"
                                alt="Photo by ayumi kubo"
                                className="w-full h-full object-cover opacity-25 grayscale contrast-150 blur-[1px]"
                            />
                        </div>
                    </div>
                    <main className="relative z-20">
                        <header className="py-6 px-4 flex gap-2 flex-col">
                            <div className="flex justify-between items-center">
                                <img
                                    src={"/logoaissam.png"}
                                    alt={"By Salmans"}
                                    className="w-[100px]"
                                />
                            </div>
                            <h2 className="mt-4 text-7xl font-myfont font-normal text-red-500 gradient-text ">
                                Developpeur Full Stack,
                            </h2>
                            <div className="font-kaori text-2xl text-stone-200">
                                Spécialisé PHP & React
                            </div>
                            <div className={"text-[#00A8E8]/80 mb-12 w-1/3 text-xl"}>
                                J&#39;aide les entrepreneurs à transformer leurs idées en applications web
                                sur mesure, en combinant un back-end robuste et un front-end fluide,
                                avec une vraie attention à l&#39;UX et aux besoins du terrain.
                            </div>
                        </header>
                        <main className="flex flex-col gap-16 py-16 px-4">
                            <div className="flex flex-col items-end gap-8">
                                <h3 className="font-myfont text-3xl text-[#00A8E8]/80">
                                    Mes projets recents
                                </h3>
                                <HoverImageEffect
                                    link="/projects/minkey-app"
                                    className="text-3xl font-kaori text-stone-200"
                                    text="Application mobile EdSass"
                                    img="/projects/app-mobile/home_page.png"
                                />
                                <HoverImageEffect
                                    link="/projects/minkey-site"
                                    className="text-3xl font-kaori text-stone-200"
                                    text="minkey.fr"
                                    img="/projects/minkey/1.png"
                                />
                            </div>
                        </main>
                        <footer
                            className="fixed bottom-0 left-0 right-0 px-12 py-8 bg-linear-to-t from-black/10 to-transparent backdrop-blur-xs">
                            <div className="flex flex-row items-center justify-center gap-8 relative">
                                <div className="flex gap-4">
                                    <a href="mailto:aissam.Lamjadab@gmail.com">
                                        <button className="ghost-button">Me contacter</button>
                                    </a>
                                    <a
                                        href="https://cal.com/aissam-n8jhuz/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="ghost-button-variant">Prendre RDV</button>
                                    </a>
                                </div>
                                <div className="absolute right-0 flex gap-4 ">
                                    <a
                                        href="https://www.linkedin.com/in/aissam-salman-webdev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl text-stone-200 hover:text-[#00A8E8] transition-colors duration-300"
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://github.com/Aissam-salman"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl text-stone-200 hover:text-[#00A8E8] transition-colors duration-300"
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </main>
                    <div
                        className="absolute top-4 right-4 text-red-500 text-xl
                                opacity-40 rotate-12 "
                    >
                        武
                    </div>
                    <div
                        className="absolute bottom-4 left-4 text-blue-500 text-xl
                                opacity-40 -rotate-12"
                    >
                        闘
                    </div>
                </div>
                <div className=" shonen-overlay">
                    <div className="background-shonen-overlay"></div>
                    <div className={'background-shonen'}></div>
                </div>
            </div>
        </>
    )
}

export default App