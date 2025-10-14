import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/customCursor";
import Footer from "./components/Footer";

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
  metadataBase: new URL("https://zainabs-portfolio-website.vercel.app"),
  title: "Zainab Ayaz — The Mind Hacker | AI Developer & System Designer",
  description: "Passionate Next.js & React developer skilled in AI, automation, and system design. Builds intelligent systems that think and influence.",
  keywords: "Zainab Ayaz, Mind Hacker, AI Developer, Next.js, React, TensorFlow, System Design, Automation",
  authors: [{ name: "Zainab Ayaz" }],
  creator: "Zainab Ayaz",
  publisher: "Zainab Ayaz",
  openGraph: {
    title: "Zainab Ayaz — The Mind Hacker",
    description: "Transforming ideas into reality through intelligent systems",
    url: "https://zainabs-portfolio-website.vercel.app",
    siteName: "Zainab Ayaz Portfolio",
    images: [
      {
        url: "/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Zainab Ayaz - The Mind Hacker"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zainab Ayaz — The Mind Hacker",
    description: "AI Developer & System Designer | Building the future with intelligent systems",
    images: ["/profile-pic.jpg"],
    creator: "@zainabayaz", // Add your actual Twitter handle
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
  verification: { // Add for search engine verification if needed
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body 
        suppressHydrationWarning={true} 
        className="bg-cyber-gradient min-h-screen text-white antialiased overflow-x-hidden"
      >
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative flex flex-col min-h-screen">
          {/* Background Effects */}
          <div className="fixed inset-0 bg-cyber-grid opacity-5 pointer-events-none" />
          <div className="fixed inset-0 bg-gradient-to-br from-cyber-green-500/5 via-transparent to-cyber-purple-500/5 pointer-events-none" />
          
          {/* Content Wrapper */}
          <div className="flex-1 relative z-10">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}