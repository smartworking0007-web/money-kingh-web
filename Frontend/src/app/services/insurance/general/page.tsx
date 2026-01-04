"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function GeneralInsurancePage() {
  const data = {
    title: "General Insurance",
    description:
      "Protect your assets and loved ones with comprehensive general insurance solutions. Get instant coverage for car, bike, home, travel, shop, and commercial risks from top insurers like ICICI Lombard, Bajaj Allianz, HDFC Ergo, and more.",
    features: [
      "Car & Bike Insurance with cashless garages",
      "Home Insurance – structure & contents coverage",
      "Travel Insurance (domestic & international)",
      "Shopkeeper & Commercial Insurance",
      "Zero depreciation & roadside assistance add-ons",
      "Instant policy issuance & renewal",
      "Wide network for cashless claims",
      "Customized plans for businesses",
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

            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <Typography variant="s2" as="span" className="text-black font-medium">
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
           
            </div>
          </div>

          {/* Right: Image Sidebar */}
          <div className="lg:col-span-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/insurance/g.jpg"
                alt="General Insurance – Car, Home, Travel & Commercial Protection"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-4 font-medium">
              Complete protection for all your assets
            </p>
          </div>
          
        </div>
      </section>

      <FinancialPartners />
      <WhyChoose />
      <LoanCalculator />
    </main>
  );
}