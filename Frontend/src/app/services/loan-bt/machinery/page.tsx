"use client";
import Image from "next/image";
import Link from "next/link";
import MachineryLoanContent from "./MachineryLoanContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import MachineryLoanBenefits from "./MachineryLoanBenefits";
import MachineryLoanEligibility from "./MachineryLoanEligibility";
import MachineryLoanApplyStep from "./MachineryLoanApplyStep";
import MachineryLoanFAQs from "./MachineryLoanFAQs";
import { Typography } from "@/app/components/ui/Typography";

export default function MachineryLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile: h-[500px] (Fixed height for better image view)
            Desktop: aspect-ratio maintain kiya hai
        */}
        <div className="relative w-full h-[500px] md:h-auto md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/bt/ma.jpeg"
            alt="Business Machinery Loan"
            fill
            // object-[35%] mobile par image ko thoda khiskayega taki main subject dikhe
            className="object-cover object-[35%_center] md:object-center"
            priority
          />

          {/* Overlay: 
              Mobile par bottom-to-top gradient taki text readable ho.
              Desktop par dark overlay.
          */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent md:bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              {/* Mobile par left-align (text-left) zyada premium lagta hai */}
              <div className="max-w-xl text-left text-white space-y-4 md:space-y-6">
                <Typography
                  variant="h2"
                  as="h1"
                  // text-3xl! mobile ke liye balance size hai
                  className="text-white! font-black! text-3xl! md:text-5xl! lg:text-6xl! leading-tight! mt-0!"
                >
                  Machinery Loan to <br />
                  Empower Your Business
                </Typography>

                <p className="text-white/90 text-base md:text-lg lg:text-xl font-medium max-w-md leading-relaxed">
                  Get fast, flexible funding for high-tech machinery with
                  minimal documentation and attractive interest rates.
                </p>

                {/* Apply Now Button */}
                <div className="pt-4">
                  <Link
                    href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-xl text-lg transition-all transform active:scale-95 shadow-xl border-none"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanContent />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 mt-10 md:-mt-24">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-15 md:-mt-24">
        <MachineryLoanBenefits />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanEligibility />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanApplyStep />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanFAQs />
      </div>
    </main>
  );
}
