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
        <div className="relative w-full aspect-6/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/bt/car5.jpeg"
            alt="Car Loan BT"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />
          
          {/* --- TEXT OVERLAY LEFT SIDE --- */}
          <div className="absolute inset-0 flex items-center bg-black/20"> {/* bg-black/20 se text ki readability badh jayegi */}
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-lg text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                  Car Loan Balance Transfer <br /> 
                  <span className="text-yellow-400">& Top-up</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl font-medium drop-shadow-md">
                  Apne maujooda car loan ko transfer karein aur payein behtar interest rates aur extra top-up fund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALCULATOR SECTION --- */}
      <section className="bg-white py-40 md:py-40"> {/* Padding adjust ki gayi hai taaki gap natural lage */}
        <LoanCalculator />
      </section>
      
      {/* Rest of the sections */}
      <section className="bg-white py-10 md:py-0">
        <CarLoanContent />
      </section>
      <section className="bg-white py-10 md:py-0">
        <MachineryLoanFeatures />
      </section>
      <section className="bg-white py-10 md:py-0">
        <CarLoanEligibility />
      </section>
      <section className="bg-white py-0 md:py-0">
        <CarLoanApplySteps />
      </section>
      <section className="bg-white py-0 md:py-0">
        <CarLoanInterestCTA />
      </section>
      <section className="bg-white py-0 md:py-0">
        <CarLoanFAQs />
      </section>
    </main>
  );
}