"use client";

import Image from "next/image";
import Link from "next/link";
import HealthInsuranceContent from "./HealthInsuranceContent";
import WhyHealthInsurance from "./WhyHealthInsurance";
import WhyChooseUsHealth from "./WhyChooseUsHealth";
import HealthPlanGuide from "./HealthPlanGuide";
import Niva from "./nivay";
import HealthInsuranceFAQ from "./HealthInsuranceFAQ";

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white font-lexend">
      {/* --- HERO SECTION --- */}
      {/* h-[50vh] mobile ke liye aur md:h-[75vh] web ke liye */}
      <section className="relative w-full h-[55vh] md:h-[75vh] lg:h-[85vh] bg-[#89d4f0] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/helt/helt1.jpeg"
            alt="Family Health Insurance"
            fill
            // object-cover mobile par bhi full screen fill karega
            className="object-cover object-center md:object-[center_20%] transition-transform duration-1000"
            priority
          />
          {/* Mobile par text visibility ke liye halka overlay */}
          <div className="absolute inset-0 bg-black/10 md:bg-transparent z-1" />
        </div>

        {/* --- CONTENT SECTION --- */}
        {/* 'md:pr-32' se web mein text thoda aur left shift ho gaya hai */}
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
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-[#0f0e0e] text-white hover:bg-slate-900 px-10 py-3.5 md:px-12 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-2xl active:scale-95">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section className="bg-white py-10 md:py-5">
        <HealthInsuranceContent />
      </section>
      <section className="bg-white py-10 md:py-5">
        <WhyHealthInsurance />
      </section>
      <section className="bg-white py-10 md:py-5">
        <WhyChooseUsHealth />
      </section>
      <section className="bg-white py-10 md:py-5">
        <HealthPlanGuide />
      </section>
      <section className="bg-white py-10 md:py-5">
        <Niva />
      </section>
      <section className="bg-white py-10 md:py-5">
        <HealthInsuranceFAQ />
      </section>
    </main>
  );
}
