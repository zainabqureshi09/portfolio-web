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
  title: "Zainab Ayaz — The Mind Hacker | AI Developer & System Designer",
  description: "Passionate Next.js & React developer skilled in AI, automation, and system design. Builds intelligent systems that think and influence.",
  keywords: "Zainab Ayaz, Mind Hacker, AI Developer, Next.js, React, TensorFlow, System Design, Automation",
  authors: [{ name: "Zainab Ayaz" }],
  creator: "Zainab Ayaz",
  openGraph: {
    title: "Zainab Ayaz — The Mind Hacker",
    description: "Transforming ideas into reality through intelligent systems",
    url: "https://zainabs-portfolio-website.vercel.app",
    siteName: "Zainab Ayaz Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zainab Ayaz - The Mind Hacker"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zainab Ayaz — The Mind Hacker",
    description: "AI Developer & System Designer | Building the future with intelligent systems",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <body suppressHydrationWarning={true} className="bg-cyber-gradient min-h-screen text-white antialiased">
        
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Navbar (Fixed for Better Positioning) */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {/* Background Effects */}
          <div className="fixed inset-0 bg-cyber-grid bg-cyber-grid opacity-5 pointer-events-none" />
          <div className="fixed inset-0 bg-gradient-to-br from-cyber-green-500/5 via-transparent to-cyber-purple-500/5 pointer-events-none" />
          
          {children}
        </main>

        <Footer/>

      </body>
    </html>
  );
}
