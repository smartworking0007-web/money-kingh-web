"use client";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import Image from "next/image";
import CarLoanContent from "./CarLoanContent";
import MachineryLoanFeatures from "./MachineryLoanFeatures";
import CarLoanEligibility from "./CarLoanEligibility";
import CarLoanApplySteps from "./CarLoanApplySteps";
import CarLoanInterestCTA from "./CarLoanInterestCTA";
import CarLoanFAQs from "./CarLoanFAQs";

export default function CarLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile: h-[500px] (Tall height for mobile banner)
            Desktop: aspect-ratio preserved as per original design
        */}
        <div className="relative w-full h-[500px] md:h-auto md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/bt/car5.jpeg"
            alt="Car Loan BT"
            fill
            // object-[70%] mobile par image ko thoda right shift karega taki main part dikhe
            className="object-cover object-[70%_center] md:object-center transition-all duration-500"
            priority
          />

          {/* --- TEXT OVERLAY --- */}
          {/* Mobile: Linear gradient from bottom for readability 
              Desktop: Balanced overlay
          */}
          <div className="absolute inset-0 flex items-center bg-linear-to-t from-black/80 via-black/40 to-transparent md:bg-black/30">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-lg text-left text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                  Car Loan Balance Transfer <br />
                  <span className="text-yellow-400">& Top-up</span>
                </h1>
                <p className="mt-4 text-base md:text-xl font-medium drop-shadow-md opacity-90 leading-relaxed max-w-[280px] md:max-w-full">
                  Apne maujooda car loan ko transfer karein aur payein behtar
                  interest rates aur extra top-up fund.
                </p>

                {/* Mobile specific Apply Button (Optional but recommended) */}
                <div className="mt-6 md:hidden">
                  <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full text-sm shadow-lg active:scale-95 transition-transform">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-45 mt-30 md:-mt-15">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 mt-30 md:-mt-24">
        <CarLoanContent />
      </div>
      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-10 -mt-10 md:-mt-30">
        <MachineryLoanFeatures />
      </div>
      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <CarLoanEligibility />
      </div>
      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-40">
        <CarLoanApplySteps />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <CarLoanInterestCTA />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-30">
        <CarLoanFAQs />
      </div>
    </main>
  );
}
