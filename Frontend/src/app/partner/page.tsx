import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import PartnerBenefits from "./benefitsLeft";
import WhyChooseUs from "./WhyChooseUs";
import PartnerSteps from "./PartnerSteps";
import TestimonialsHub from "./Testimonials";
import FAQSection from "./FAQ";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  // Fix 1: Title ko H1 se different aur CTR-friendly banaya gaya hai
  title: "Join as a Loan Partner & DSA Agent | Money King Financial Services",
  description:
    "Partner with Money King Financial Services as a DSA or Channel Partner. Offer loans, mutual funds, and insurance with high commission payouts and full support.",

  alternates: {
    canonical: "https://moneykingfinancial.com/partner",
  },
  
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
    title: "Join as a Loan Partner & DSA Agent | Money King Financial Services",
    description:
      "Partner with Money King Financial Services as a DSA or Channel Partner. Offer loans, mutual funds, and insurance with high commission payouts and full support.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join as a Loan Partner & DSA Agent | Money King Financial Services",
    description:
      "Partner with Money King Financial Services as a DSA or Channel Partner. Offer loans, mutual funds, and insurance with high commission payouts and full support.",
  },
};

export default function PartnerPage() {
  // Fix 2: Add JSON-LD Schema for Partner / Organization
  const jsonLdPartnerSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Money King Financial Services Pvt. Ltd.",
    url: "https://moneykingfinancial.com/partner",
    image: "https://moneykingfinancial.com/images/Become/Become1.jpeg",
    telephone: "+91-9876543210", // Apna official contact number dalein
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-39 Sector-63",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    description:
      "Join Money King Financial Services as a Direct Selling Agent (DSA) or Channel Partner to offer credit and loan solutions across India.",
  };

  return (
    <main className="w-full bg-white font-sans">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdPartnerSchema),
        }}
      />

      {/* --- HERO SECTION WITH VISIBLE H1 --- */}
      <section className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden flex items-center justify-center">
        {/* Background Banner Image */}
        <Image
          src="/images/Become/Become1.jpeg"
          alt="Become a Loan Channel Partner & DSA with Money King Financial"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

        {/* --- H1 HEADING (Fix 3: Title se Alag & Keywords Included) --- */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Become a Channel Partner &{" "}
            <span className="text-blue-400">Grow Your Business</span>
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mt-3 md:mt-5 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Partner with Money King Financial Services to offer Personal Loans, Business Loans, Home Loans, Mutual Funds, and Insurance with maximum commission payouts and dedicated support.
          </p>
        </div>
      </section>

      {/* --- SEO TEXT BLOCK (Fix 4: Fixes Low Text-to-HTML Ratio) --- */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Join Money King Financial Services as a DSA Partner?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Money King Financial Services Pvt. Ltd. provides a robust platform for Direct Selling Agents (DSAs), financial advisors, chartered accountants, and loan consultants across India. By partnering with us, you gain direct access to over 40+ leading RBI-regulated banks and NBFCs, allowing you to fulfill your clients' financial needs with competitive interest rates and seamless digital processing.
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