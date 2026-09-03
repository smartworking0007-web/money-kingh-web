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
import HowToApplyCarLoan from "./HowToApplyCarLoan";

export default function CarLoanPage() {
  const data = {
    title: "Car loan in india\ninterest rate eligibility & emi",
    description:
      "Get a car loan in india with flexible repayment opitions. check car loan interest rate,eligibility, document & new or use car loan opitions  ",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[450px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Carloan/car.jpeg"
            alt="couple in a car"
            fill
            className="object-cover object-[68%_center] md:object-right transition-all duration-500"
            priority
          />

          {/* Desktop Gradient */}
          <div className="hidden md:block absolute inset-0 bg-linear-to-r to-transparent" />

          {/* Mobile Gradient */}
          <div className="block md:hidden absolute inset-0 bg-linear-to-r" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full">
          <div className="max-w-[280px] md:max-w-2xl">
            <Typography
              variant="h2"
              as="h1"
              className="text-white-900 leading-tight mb-3 whitespace-pre-line text-2xl! md:text-6xl! font-extrabold!"
            >
              {data.title}
            </Typography>
            <Typography
              variant="b1"
              className="text-sm md:text-lg text-gray-800 mb-6 max-w-[240px] md:max-w-lg font-medium!"
            >
              {data.description}
            </Typography>

            <Link
              href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
              passHref
            >
              <Button
                size="lg"
                className="bg-[#96395e] hover:bg-[#831441] text-white border-none shadow-lg cursor-pointer h-10! md:h-14! px-6! md:px-10! rounded-xl!"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="-mt-15 md:-mt-8 pb-16 md:pb-28 relative z-20">
        <CarLoanComparison />
      </div>

      <section className="py-12 md:py-5">
        <div className="max-w-7xl mx-auto px-6">
          <LoanCalculator />
        </div>
      </section>

      <section className="mt-5 md:-mt-20">
        <div className="-mt-15 md:-mt-8 pb-16 md:pb-28 relative z-20">
          <CarLoanFeatures />
        </div>
      </section>

      <section className="mt-10 md:mt-0">
        <div className="-mt-30 md:-mt-55 pb-16 md:pb-35 relative z-20">
          <CarLoanTypes />
        </div>
      </section>

      <section className="-mt-30 md:-mt-55 pb-16 md:pb-35 relative z-20">
        <CarLoanTips />
      </section>

      <section className="-mt-20 md:-mt-55 pb-16 md:pb-35 relative z-20">
        <EligibilityCriteria />
      </section>

      <section className="-mt-30 md:-mt-55 pb-16 md:pb-35 relative z-20">
        <DocumentsRequired />
      </section>

      <section className="-mt-30 md:-mt-55 pb-16 md:pb-35 relative z-20">
        <HowToApplyCarLoan />
      </section>

      <section className="-mt-30 md:-mt-55 pb-16 md:pb-35 relative z-20">
        <FinancialPartners />
      </section>

      <section className="py-12 md:py-20">
        <div className="-mt-25 md:-mt-55 pb-16 md:pb-10 relative z-20">
          <WhyChoose />
        </div>
      </section>

      <section className="-mt-30 md:-mt-30 pb-16 md:pb-35 relative z-20">
        <FAQPage />
      </section>
    </main>
  );
}