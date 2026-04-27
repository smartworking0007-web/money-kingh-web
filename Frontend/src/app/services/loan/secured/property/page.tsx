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
      <section className="relative w-full overflow-hidden">
        {/* Mobile: aspect-square (1:1) ya [4/5] use karne se image ki height achhi dikhegi aur bande nahi katenge */}
        <div className="relative w-full aspect-5/5 md:aspect-none md:h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/laplon/lapa.jpeg"
              alt="Loan Against Property"
              fill
              // object-[75%] mobile par image ko thoda right khiskayega taki log frame mein aayein
              className="object-cover object-[97%_center] md:object-right transition-all duration-500"
              priority
            />
            {/* Mobile Gradient: Niche se upar black shadow taki white text dikhe */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent md:bg-linear-to-r md:from-black/60 md:via-transparent md:to-transparent" />
          </div>

          <div className="container mx-auto px-6 md:px-20 relative z-10 mt-auto pb-12 md:pb-0 md:mt-0">
            <div className="max-w-full md:max-w-2xl">
              <Typography
                variant="h1"
                as="h1"
                className="text-white! text-4xl! md:text-7xl! font-extrabold! mb-3! mt-0! leading-[1.1]! drop-shadow-lg"
              >
                Loan Against <br /> Property
              </Typography>

              <Typography
                variant="s1"
                as="p"
                className="text-white! text-lg! md:text-2xl! mb-8! mt-0! font-medium! drop-shadow-md"
              >
                Enjoy long tenures up to 20 years.
              </Typography>

              <Link href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply">
                <Button
                  size="lg"
                  className="bg-[#004687]! hover:bg-[#003566]! rounded-xl! h-12! md:h-14! px-10! shadow-xl! cursor-pointer border-none!"
                >
                  APPLY NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}

      <div className="py-10 md:py-10">
        <LoanAgainstPropertyContent />
      </div>

      {/* Spacing adjustments to prevent overlapping on mobile */}
      <div className="-mt-15 md:-mt-10 pb-10 md:pb-10 relative z-20">
        <LAPFeaturesBenefits />
      </div>

      <div className="py-16 md:py-32 bg-gray-50/50">
        <LoanCalculator />
      </div>

      <div className="-mt-15 md:-mt-30 pb-16 md:pb-28 relative z-20">
        <TypesOfLAPLoans />
      </div>

      <div className="-mt-20 md:-mt-40 pb-16 md:pb-28 relative z-20">
        <LAPLoanBanner />
      </div>

      <div className="-mt-15 md:-mt-30 pb-16 md:pb-28 relative z-20">
        <LAPLoanCharges />
      </div>

      <div className="-mt-15 md:-mt-30 pb-16 md:pb-28 relative z-20">
        <LAPLoanEligibility />
      </div>

      <div className="-mt-15 md:-mt-30 pb-16 md:pb-28 relative z-20">
        <LAPLoanDocuments />
      </div>

      <div className="-mt-15 md:-mt-30 pb-16 md:pb-28 relative z-20">
        <ApplyLAPLoan />
      </div>

      <div className="-mt-15 md:-mt-30 pb-16 md:pb-28 relative z-20">
        <LAPLoanConsiderations />
      </div>

      <div className="-mt-20 md:-mt-45 pb-16 md:pb-28 relative z-20">
        <LAPLoanFAQ />
      </div>
    </main>
  );
}
