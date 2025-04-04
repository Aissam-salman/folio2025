import type { Metadata } from "next";
import { Zen_Tokyo_Zoo, Zen_Kaku_Gothic_New } from "next/font/google";
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
        className={`${zenK.variable} ${zenT.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
