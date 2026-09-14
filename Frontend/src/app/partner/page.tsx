import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import PartnerBenefits from "./benefitsLeft";
import WhyChooseUs from "./WhyChooseUs";
import PartnerSteps from "./PartnerSteps";
import TestimonialsHub from "./Testimonials";
import FAQSection from "./FAQ";

// --- COMPLETE SEO METADATA (Title, Description, Robots, Author, Publisher) ---
export const metadata: Metadata = {
  title: "Become a Partner | Money King Financial Services",
  description:
    "Partner with Money King Financial Services to grow your business. Offer loans, mutual funds, and insurance with attractive payouts and support.",
  
  // Author & Publisher Tags
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",

  // Robots Meta Tag
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Become a Partner | Money King Financial Services",
    description:
      "Partner with Money King Financial Services to grow your business. Offer loans, mutual funds, and insurance with attractive payouts and support.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | Money King Financial Services",
    description:
      "Partner with Money King Financial Services to grow your business. Offer loans, mutual funds, and insurance with attractive payouts and support.",
  },
};

export default function PartnerPage() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION WITH VISIBLE H1 --- */}
      <section className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[550px] overflow-hidden flex items-center justify-center">
        {/* Background Banner Image */}
        <Image
          src="/images/Become/Become1.jpeg"
          alt="Become a Partner | Money King Financial Services"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/45" />

        {/* --- H1 HEADING --- */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Become a Partner |{" "}
            <span className="text-blue-400">Money King Financial Services</span>
          </h1>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg mt-3 md:mt-4 max-w-2xl mx-auto drop-shadow-md">
            Partner with us to offer loans, mutual funds, and insurance with attractive payouts and growth support.
          </p>
        </div>
      </section>

      {/* --- OTHER SECTIONS --- */}
      <PartnerBenefits />
      <WhyChooseUs />
      <PartnerSteps />
      <TestimonialsHub />
      <FAQSection />
    </main>
  );
}