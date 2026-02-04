import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// 1. Is line ko import karein
import { GoogleAnalytics } from '@next/third-parties/google';

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Money King",
  description: "Learn in-demand skills with industry experts",
  metadataBase: new URL('https://moneykingfinancial.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased bg-white`}>
        <Navbar />
        <main className="pt-0 lg:pt-0">
          {children}
        </main>
        <Footer/>
      </body>
      {/* 2. Body tag ke niche ya andar ye component add karein */}
      <GoogleAnalytics gaId="G-V97R5DZ17S" />
    </html>
  );
}