"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import GoldLoanContent from "./GoldLoanContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import GoldLoanFeatures from "./GoldLoanFeatures";
import GoldLoanDetails from "./GoldLoanDetails";
import GoldLoanRates from "./GoldLoanRates";
import GoldLoanEligibility from "./GoldLoanEligibility";
import ApplyGoldLoan from "./ApplyGoldLoan";
import GoldLoanProcess from "./GoldLoanProcess";
import FAQPage from "../car/FAQPage";

export default function GoldLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gold/gold.jpeg"
            alt="Turn your gold into opportunities"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient Overlay using v4 bg-linear syntax */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent md:via-white/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-10 md:px-20 relative z-10">
          <div className="max-w-[85%] md:max-w-2xl">
            <Typography
              variant="h2"
              as="h2"
              className="text-[#004687]! text-3xl! md:text-5xl! font-bold! mb-4! mt-0! leading-tight!"
            >
              Turn your gold <br className="md:hidden" /> into opportunities
            </Typography>

            <Typography
              variant="s1"
              as="p"
              className="text-slate-700! text-lg! md:text-2xl! mb-8! mt-0! font-medium!"
            >
              Safe, secure & quick gold loans for your various needs.
            </Typography>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#004687]! hover:bg-[#003566]! rounded-xl! h-12! md:h-14! px-8! md:px-10! shadow-lg! cursor-pointer transition-colors"
              >
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      {/* py-20 provides a strong visual break, and border-t adds a subtle separation line */}
      <section className="bg-white py-20 md:py-28 ">
        <GoldLoanContent />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <LoanCalculator />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <GoldLoanFeatures />
      </section>

       <section className="bg-white py-10 md:py-5 ">
        <GoldLoanDetails />
      </section>

      <section className="bg-white py-10 md:py-5 ">
        <GoldLoanRates />
      </section>

      
      <section className="bg-white py-10 md:py-5 ">
        <GoldLoanEligibility />
      </section>

       
      <section className="bg-white py-10 md:py-5 ">
        <ApplyGoldLoan />
      </section>

      <section className="bg-white py-10 md:py-5 ">
        <GoldLoanProcess />
      </section>

      <section className="bg-white py-10 md:py-5 ">
        <FAQPage />
      </section>
    </main>
  );
}
