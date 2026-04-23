"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import LAPBTProfiles from "./LAPBTProfiles";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import LAPBTContent from "./LAPBTContent";
import LAPBTComparison from "./LAPBTComparison";
import LAPDocuments from "./LAPDocuments";
import LAPBTJourney from "./LAPBTJourney";
import LAPBTFees from "./LAPBTFees";
import LAPFAQs from "./LAPFAQs";

export default function HomeLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[65vh] md:h-[85vh] lg:h-[90vh] bg-[#d73a32] overflow-hidden font-lexend">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/bt/lap.jpeg"
            alt="Home Loan BT"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-[25%_center] transition-all duration-700 scale-105"
          />
          {/* Mobile Overlay: Takki text read-able rahe */}
          <div className="absolute inset-0 bg-black/20 md:bg-transparent z-1" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center md:items-center">
          <div className="w-full flex justify-center md:justify-end">
            {/* Mobile me -mt-20 se text upar shift hoga */}
            <div className="max-w-[320px] md:max-w-xl flex flex-col items-center md:items-end text-center md:text-right -mt-20 md:-mt-32">
              <Typography
                variant="h2"
                as="h1"
                className="text-white mb-6 leading-[1.2] md:leading-[1.1] font-black drop-shadow-2xl text-3xl sm:text-4xl md:text-[56px] uppercase"
              >
                Lap loan <br className="md:hidden" /> (BT & Top Up)
              </Typography>

              <Link href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-white text-[#d73a32] hover:bg-slate-100 px-8 py-3 md:px-12 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-xl active:scale-95 cursor-pointer">
                  Avail Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- BAAKI SECTIONS (Responsive Py) --- */}
      <section className="bg-white p-0 -mt-8 md:-mt-5 relative z-30">
        <LAPBTProfiles />
      </section>
      <section className="bg-white py-12 md:py-30">
        <LoanCalculator />
      </section>
      <section className="bg-white py-12 md:py-30">
        <LAPBTContent />
      </section>
      <section className="bg-white py-12 md:py-30">
        <LAPBTComparison />
      </section>
      <section className="bg-white py-10 md:py-20">
        <LAPDocuments />
      </section>
      <section className="bg-white py-10 md:py-20">
        <LAPBTJourney />
      </section>
      <section className="bg-white py-10 md:py-20">
        <LAPBTFees />
      </section>
      <section className="bg-white py-10 md:py-20 border-t border-slate-100">
        <LAPFAQs />
      </section>
    </main>
  );
}
