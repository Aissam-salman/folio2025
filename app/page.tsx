import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative h-screen w-full overflow-hidden text-white ">
            {/*wrapper with border*/}
            <div className="border border-gray-200 rounded-sm h-screen w-full px-10">
                {/*Navbar*/}
                <header className={"py-8"}>
                    <div className="flex z-10 items-center justify-between items-center">
                        <img src={"/logoaissam.png"} alt="logo" className="h-22 opacity-75 object-cover"/>
                    </div>
                    <h2 className={"text-lg text-foreground font-sans font-normal"}>Software developer</h2>
                </header>
                {/*Body*/}
                <main className="flex flex-col py-28">
                    <h1 className={"font-title font-medium text-7xl leading-lg"}>
                        My journey’s just begun. <br/> But I’m ready to build anything.
                    </h1>
                    <div className={"flex justify-end"}>
                        <ul>
                            <li className={" font-medium  leading-lg"}>
                                <Link href="/">Projet 1</Link>
                            </li>
                            <li className={"font-medium  leading-lg"}>
                                <Link href="/">Projet 1</Link>
                            </li>
                            <li className={" font-medium  leading-lg"}>
                                <Link href="/">Projet 1</Link>
                            </li>
                            <li className={" font-medium leading-lg"}>
                                <Link href="/">Projet 1</Link>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>

            {/*background*/}
            <div className="absolute -z-10 inset-0 flex justify-center items-center">
                <img
                    src="/49030.jpg"
                    alt="Dojo"
                    className="absolute w-full h-full bg-no-repeat opacity-20"
                />
            </div>

        </div>
    );
}
