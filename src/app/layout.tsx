import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  metadataBase: new URL("https://zainabs-portfolio-website.vercel.app"),
  title: {
    default: "Zainab Ayaz — Cybersecurity Student & Intelligent Systems Developer",
    template: "%s | Zainab Ayaz Portfolio"
  },
  description: "Cybersecurity student and full-stack developer specializing in AI integration, secure systems, and modern web applications.",
  keywords: ["Zainab Ayaz", "Cybersecurity", "Full-Stack Developer", "AI Developer", "TypeScript", "React", "Next.js", "Security", "Web Development"],
  authors: [{ name: "Zainab Ayaz", url: "https://zainabs-portfolio-website.vercel.app" }],
  creator: "Zainab Ayaz",
  publisher: "Zainab Ayaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zainabs-portfolio-website.vercel.app",
    title: "Zainab Ayaz — Cybersecurity Student & Intelligent Systems Developer",
    description: "Cybersecurity student and full-stack developer specializing in AI integration, secure systems, and modern web applications.",
    siteName: "Zainab Ayaz Portfolio",
    images: [
      {
        url: "/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Zainab Ayaz - Cybersecurity Developer"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zainab Ayaz — Cybersecurity Student & Intelligent Systems Developer",
    description: "Cybersecurity student and full-stack developer specializing in AI integration, secure systems, and modern web applications.",
    images: ["/profile-pic.jpg"],
    creator: "@zainabayaz_dev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body
        suppressHydrationWarning={true}
        className="bg-slate-900 min-h-screen text-slate-100 antialiased overflow-x-hidden"
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative flex flex-col min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </body>
    </html>
  );
}