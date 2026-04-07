import type { Metadata } from "next";
import { 
  Inter, 
  Lexend, 
  Plus_Jakarta_Sans, 
  Manrope, 
  Outfit, 
  Urbanist 
} from "next/font/google"; 
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import Popup from "./components/layout/Popup";

// 1. Inter (Standard Professional)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 2. Lexend (Friendly & Modern)
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", weight: ["300", "400", "500", "600", "700"] });

// 3. Plus Jakarta Sans (Fintech Special - Highly Recommended)
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

// 4. Manrope (Clean & Techy)
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// 5. Outfit (Premium & Geometric)
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

// 6. Urbanist (Elegant & Sharp)
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "Money King",
  description: "Learn in-demand skills with industry experts",
  metadataBase: new URL('https://moneykingfinancial.com'),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`
        ${inter.variable} 
        ${lexend.variable} 
        ${plusJakarta.variable} 
        ${manrope.variable} 
        ${outfit.variable} 
        ${urbanist.variable} 
        ${inter.className}  /* Default font abhi Inter rakha hai */
        antialiased bg-white
      `}>
        <Navbar />
        <main className="pt-0 lg:pt-0">
          {children}
          <Popup/>
        </main>
        <Footer/>
        <GoogleAnalytics gaId="G-V97R5DZ17S" />
      </body>
    </html>
  );
}