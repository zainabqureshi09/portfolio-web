import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/customCursor";
import Footer from "./components/Footer";
import Head from "next/head";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Zainab's portfolio",
  description: "My portfolio website",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}>
       <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <body suppressHydrationWarning={true} className="bg-gradient-to-r from-black via-purple-950 to-blue-800 min-h-screen">
        
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Navbar (Fixed for Better Positioning) */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        <Footer/>

      </body>
    </html>
  );
}
