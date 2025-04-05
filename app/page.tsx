import HoverImageEffect from "@/components/ImageRevealHoverEffects";

export default function Home() {
    return (
        <>
                <header className={""}>
                    <div className="flex z-10 justify-between items-center">
                        <img src={"/logoaissam.png"} alt="logo" className="h-22 opacity-75 object-cover"/>
                    </div>
                    <h2 className={"text-lg text-foreground font-sans font-normal"}>Software developer</h2>
                </header>
                {/*Body*/}
                <main className="flex flex-col py-28">
                    <h1 className={"font-sans font-medium text-7xl leading-lg"}>
                        My journey’s just begun. <br/> But I’m ready to build anything.
                    </h1>
                    <div className={"flex flex-col items-end gap-6"}>
                       <HoverImageEffect link={"/projects/minkey-app"} className={"text-3xl"} text={"Projet 1"} img={"/200104.jpg"} />
                       <HoverImageEffect className={"text-3xl"} text={"Projet 2"} img={"/200104.jpg"} />
                       <HoverImageEffect className={"text-3xl"} text={"Projet 3"} img={"/200104.jpg"} />
                       <HoverImageEffect className={"text-3xl"} text={"Projet 4"} img={"/200104.jpg"} />
                    </div>
                </main>
        </>
    );
}
