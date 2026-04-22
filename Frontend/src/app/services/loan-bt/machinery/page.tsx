"use client";
import Image from "next/image";
import Link from "next/link"; // Link import kiya
import MachineryLoanContent from "./MachineryLoanContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import MachineryLoanBenefits from "./MachineryLoanBenefits";
import MachineryLoanEligibility from "./MachineryLoanEligibility";
import MachineryLoanApplyStep from "./MachineryLoanApplyStep";
import MachineryLoanFAQs from "./MachineryLoanFAQs";
import { Typography } from "@/app/components/ui/Typography"; // Typography agar use kar rahe hain

export default function MachineryLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Aspect ratio container */}
        <div className="relative w-full aspect-4/3 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/bt/ma.jpeg"
            alt="Business Machinery Loan"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay for Text (SEO Friendly) */}
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-xl text-center md:text-left text-white space-y-4 md:space-y-6">
                {/* H1 for SEO */}
                <Typography 
                  variant="h2" 
                  as="h2" 
                  className="text-white font-black text-3xl md:text-5xl lg:text-6xl leading-tight"
                >
                  Machinery Loan to <br />
                Empower Your Business
                </Typography>
                
                <p className="text-white/90 text-sm md:text-lg lg:text-xl font-medium max-w-md">
                  Get fast, flexible funding for high-tech machinery with minimal documentation and attractive interest rates.
                </p>

                {/* Apply Now Button */}
                <div className="pt-4">
                  <Link 
                    href="/contact" // Aapka contact us page ka path
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full text-lg transition-all transform active:scale-95 shadow-lg"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Baki Sections --- */}
      <section className="bg-white py-10 md:py-5">
        <MachineryLoanContent />
      </section>
      <section className="bg-white py-10 md:py-5">
        <LoanCalculator />
      </section>
      <section className="bg-white py-10 md:py-5">
        <MachineryLoanBenefits />
      </section>
      <section className="bg-white py-10 md:py-5">
        <MachineryLoanEligibility />
      </section>
      <section className="bg-white py-0 md:py-5">
        <MachineryLoanApplyStep />
      </section>
      <section className="bg-white py-10 md:py-5">
        <MachineryLoanFAQs />
      </section>
    </main>
  );
}