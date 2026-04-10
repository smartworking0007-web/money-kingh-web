"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import LoanAgainstPropertyContent from "./LoanAgainstPropertyContent";
import LAPFeaturesBenefits from "./LAPFeaturesBenefits";
import TypesOfLAPLoans from "./TypesOfLAPLoans";
import LAPLoanBanner from "./LAPLoanBanner";
import LAPLoanCharges from "./LAPLoanCharges";
import LAPLoanEligibility from "./LAPLoanEligibility";
import LAPLoanDocuments from "./LAPLoanDocuments";
import ApplyLAPLoan from "./ApplyLAPLoan";
import LAPLoanConsiderations from "./LAPLoanConsiderations";
import LAPLoanFAQ from "./LAPLoanFAQ";

export default function LoanAgainstPropertyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/laplon/lapa.jpeg"
            alt="Loan Against Property"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent md:via-white/40" />
        </div>

        <div className="container mx-auto px-10 md:px-20 relative z-10">
          <div className="max-w-[85%] md:max-w-2xl">
            <Typography
              variant="h1"
              as="h1"
              className="text-[#004687]! text-3xl! md:text-7xl! font-extrabold! mb-4! mt-0! leading-tight!"
            >
              Loan Against <br className="md:hidden" /> Property
            </Typography>

            <Typography
              variant="s1"
              as="p"
              className="text-slate-700! text-lg! md:text-2xl! mb-8! mt-0! font-medium!"
            >
              Enjoy long tenures up to 20 years.
            </Typography>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#004687]! rounded-xl! h-12! md:h-14! px-8! md:px-10! shadow-lg! cursor-pointer"
              >
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="py-15">
        <LoanAgainstPropertyContent />
      </div>

      <div className="-mt-25 md:-mt-15 relative z-20">
        <LAPFeaturesBenefits />
      </div>

      <div className="py-40">
        <LoanCalculator />
      </div>

      <div className="-mt-35 md:-mt-40 relative z-20">
        <TypesOfLAPLoans />
      </div>

      <div className="-mt-35 md:-mt-40 relative z-20">
        <LAPLoanBanner />
      </div>

      <div className="mt-0! relative z-20">
        <LAPLoanCharges />
      </div>
      <div className="mt-0! relative z-20">
        <LAPLoanEligibility />
      </div>
      <div className="mt-0! relative z-20">
        <LAPLoanDocuments />
      </div>

      <div className="mt-0! relative z-20">
        <ApplyLAPLoan />
      </div>

      <div className="mt-0! relative z-20">
        <LAPLoanConsiderations />
      </div>

      <div className="mt-0! relative z-20">
        <LAPLoanFAQ />
      </div>

     
    </main>
  );
}
