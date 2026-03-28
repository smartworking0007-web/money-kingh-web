import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google"; // Inter add kiya
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import Popup from "./components/layout/Popup";

// DigiSME wala font (Primary)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Aapka purana font (Secondary/Variable)
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
      {/* 1. inter.className ko body pe lagaya hai taaki poori site Inter font mein dikhe.
          2. lexend.variable ko bhi rakha hai taaki aap specific jagah par Lexend use kar sakein.
      */}
      <body className={`${inter.className} ${lexend.variable} antialiased bg-white`}>
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