"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";
import CarLoanComparison from "./CarLoanComparison";
import CarLoanFeatures from "./CarLoanFeatures";
import CarLoanTypes from "./CarLoanTypes";
import CarLoanTips from "./CarLoanTips";
import EligibilityCriteria from "./EligibilityCriteria";
import DocumentsRequired from "./DocumentsRequired";
import FAQPage from "./FAQPage";

export default function CarLoanPage() {
  const data = {
    title: "Feel the joy of a\nlonger drive",
    description: "Take the next drive in your own car with a car loan.",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[400px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Carloan/car.jpeg"
            alt="blue car on a foggy urban street"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <Typography
              variant="h2"
              as="h1"
              className="text-gray-900 leading-tight mb-4 whitespace-pre-line"
            >
              {data.title}
            </Typography>
            <Typography
              variant="b1"
              className="text-lg text-gray-800 mb-8 max-w-lg"
            >
              {data.description}
            </Typography>

            <Link href="/contact" passHref>
              <Button
                size="lg"
                className="bg-[#96395e] hover:bg-[#831441] text-white border-none shadow-lg cursor-pointer transition-transform hover:scale-105"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Comparison Table */}
      <CarLoanComparison />

      {/* 3. Loan Calculator */}
      <section className="py-20 md:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoanCalculator />
        </div>
      </section>

      <section className="-mt-30 md:-mt-40 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarLoanFeatures />
        </div>
      </section>

      <section className="mt-0 md:-mt-40 py-0 md:py-30">
        <CarLoanTypes />
      </section>

      <section className="relative z-20 -mt-30 md:-mt-60 py-0">
        <CarLoanTips />
      </section>

      <section className=" -mt-10 md:-mt-20 py-0">
        <EligibilityCriteria />
      </section>

      <section className=" -mt-10 md:-mt-20 py-0">
        <DocumentsRequired />
      </section>

      <section className=" -mt-10 md:-mt-20 py-0">
        <FAQPage />
      </section>

      {/* 4. Financial Partners (Ab yeh WhyChoose ke uper hai) */}
      <section className="mt-0 md:-mt-30 py-0 md:py-20">
        <FinancialPartners />
      </section>

      {/* 5. Why Choose Money King */}
      <section className="-mt-5 md:-mt-30 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <WhyChoose />
        </div>
      </section>
    </main>
  );
}
