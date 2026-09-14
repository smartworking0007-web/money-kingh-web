import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HealthInsuranceContent from "./HealthInsuranceContent";
import WhyHealthInsurance from "./WhyHealthInsurance";
import WhyChooseUsHealth from "./WhyChooseUsHealth";
import HealthPlanGuide from "./HealthPlanGuide";
import Niva from "./nivay";
import HealthInsuranceFAQ from "./HealthInsuranceFAQ";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  title: "Best Health Insurance Plans | Money King India",
  description:
    "Protect your family with comprehensive health insurance plans. Get high sum insured, cashless claims at network hospitals, and instant policy approval.",
  keywords: [
    "Best Health Insurance Plans in India",
    "Key Benefits of Health Insurance",
    "family health insurance",
    "cashless claims health insurance",
    "critical illness insurance",
    "medical insurance policies",
    "health coverage India",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
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
    title: "Best Health Insurance Plans in India | Money King",
    description:
      "Protect your loved ones with the best-in-class medical coverage and cashless hospital benefits.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Health Insurance Plans in India | Money King",
    description:
      "Protect your loved ones with the best-in-class medical coverage and cashless hospital benefits.",
  },
};

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white font-lexend">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[55vh] md:h-[75vh] lg:h-[85vh] bg-[#89d4f0] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/helt/helt1.jpg"
            alt="Family Health Insurance - Money King Financial Services"
            fill
            className="object-cover object-center md:object-[center_20%] transition-transform duration-1000"
            priority
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-black/10 md:bg-transparent z-1" />
        </div>

        {/* --- CONTENT SECTION (H1) --- */}
        <div className="relative z-10 container mx-auto h-full px-6 md:px-12 md:pr-32 lg:pr-48 flex items-center justify-center md:justify-end">
          <div className="max-w-md lg:max-w-lg flex flex-col items-center md:items-end text-center md:text-right">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-4 drop-shadow-2xl uppercase">
              Health <br />
              <span className="text-[#d73a32]">Insurance</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-800 mb-8 font-bold max-w-sm drop-shadow-md">
              Protect your loved ones with the best-in-class medical coverage
              and cashless hospital benefits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-end">
              <Link
                href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                className="w-full sm:w-auto"
              >
                <button className="w-full bg-[#0f0e0e] text-white hover:bg-slate-900 px-10 py-3.5 md:px-12 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-2xl active:scale-95 cursor-pointer">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- H2 SECTION --- */}
      <section className="w-full pt-10 md:pt-14 pb-4 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Key Benefits of <span className="text-[#d73a32]">Health Insurance</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Get complete financial protection against medical emergencies with high sum insured and cashless hospitalization.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section className="bg-white py-8 md:py-5">
        <HealthInsuranceContent />
      </section>
      <section className="bg-white py-8 md:py-5">
        <WhyHealthInsurance />
      </section>
      <section className="bg-white py-8 md:py-5">
        <WhyChooseUsHealth />
      </section>
      <section className="bg-white py-8 md:py-5">
        <HealthPlanGuide />
      </section>
      <section className="bg-white py-8 md:py-5">
        <Niva />
      </section>
      <section className="bg-white py-8 md:py-5">
        <HealthInsuranceFAQ />
      </section>
    </main>
  );
}