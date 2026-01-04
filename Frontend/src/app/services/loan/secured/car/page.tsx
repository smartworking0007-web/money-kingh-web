"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function CarLoanPage() {
  const data = {
    title: "Car Loan",
    description:
      "Drive home your dream car with our fast, flexible, and affordable car loan solutions. Whether it's a brand-new sedan, SUV, or electric vehicle, enjoy quick approval, attractive rates, and hassle-free documentation.",
    features: [
      "Up to 100% on-road price funding",
      "Flexible tenure up to 7–8 years",
      "Quick approval & instant disbursal",
      "Competitive interest rates starting @ 8.25% p.a.",
      "Special lower rates for electric vehicles",
      "Minimal documentation required",
      "Pre-approved offers for existing customers",
    ],
   
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Main Content */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <Typography
              variant="h1"
              as="h1"
              className="text-[#004687] mb-8 mt-0 scroll-mt-20"
            >
              {data.title}
            </Typography>

            <Typography variant="b1" className="text-gray-700 mb-8 leading-relaxed">
              {data.description}
            </Typography>

            {/* Features List */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <Typography
                    variant="s2"
                    as="span"
                    className="text-black font-medium"
                  >
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Last Updated */}
           
          </div>

          {/* Right: Image Sidebar (Desktop only) */}
          <div className="lg:col-span-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/loanpage/car.jpeg"   
                alt="Happy family with their brand new car"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
           
          </div>
          
        </div>
      </section>

      {/* Reusable Sections – same as Home Loan page */}
      <FinancialPartners />
      <WhyChoose />
      <LoanCalculator />
    </main>
  );
}