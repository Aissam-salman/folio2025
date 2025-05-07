import type { Metadata } from "next";
import { Zen_Tokyo_Zoo, Zen_Kaku_Gothic_New, Noto_Sans_JP} from "next/font/google";
import "./globals.css";
import React from "react";

const zenK = Zen_Kaku_Gothic_New({
    weight: ['300','400','500', '700', '900'],
  variable: "--font-zenk",
  subsets: ["latin"],
});
const zenT = Zen_Tokyo_Zoo({
    weight: '400',
    variable: "--font-zent",
    subsets: ["latin"]
})

const Noto = Noto_Sans_JP({
    weight: ['400', '700'],
    variable: '--font-noto',
    display: 'swap',
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Aissam Lamjadab 🚀",
  description: "My personal folio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zenK.variable} ${zenT.variable} ${Noto.variable} antialiased`}
      >
      <div className="relative h-screen w-full overflow-hidden text-white bg-black">
          {/* Contenu principal avec bordure stylisée */}
          <div className="h-screen w-full py-6 px-4 sm:px-10 relative">
              {/* Bordure manga animée (utilisation de arbitrary values) */}
              <div className="absolute inset-0 border-2 border-red-500/30 rounded-lg
                                shadow-[0_0_30px_#FF1A1A30] shonen-overlay">
              <div className="absolute inset-0">
                <img
                  src="/background.jpg"
                  alt="Photo by ayumi kubo"
                  className="w-full h-full object-cover opacity-25 grayscale contrast-150 blur-[1px]"
                />
              </div>
              </div>
              <main className="h-full relative z-20">
                  {children}
              </main>

              {/* Décorations manga avec police arbitraire */}
              <div className="absolute top-4 right-4 text-red-500 text-xl
                                opacity-40 rotate-12 font-[Noto_Sans_JP]">武</div>
              <div className="absolute bottom-4 left-4 text-blue-500 text-xl
                                opacity-40 -rotate-12 font-[Noto_Sans_JP]">闘</div>


          </div>

              <div className="absolute shonen-overlay inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,transparent_50%,rgba(0,0,0,0.8)_100%)]">

                  <div className="absolute inset-0 opacity-20 bg-[length:40px_40px] bg-repeat bg-[linear-gradient(45deg,transparent_49%,#FF1A1A_50%,transparent_51%)]">
                  </div>


                  <div className="absolute inset-0 opacity-10 mix-blend-overlay
  bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cGF0aCBkPSJNLTEgMWwyIC0yTTAgOGw4IC04TTcgOWwyIC0yIiBzdHJva2U9InJnYmEoMjU1LDI2LDI2LDAuMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]">
</div>
                </div>


      </div>
      </body>
    </html>
  );
}
