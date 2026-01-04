"use client";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function MStockPage() {
  const data = {
    title: "mStock – Online Stock Broking",
    description:
      "Trade smarter with mStock by Mirae Asset – India's revolutionary zero brokerage platform. Pay a one-time fee and enjoy lifetime ₹0 brokerage across delivery, intraday, F&O, currency, IPOs, mutual funds & more. Powered by advanced tools, seamless app, and backed by global expertise.",
    features: [
      "Lifetime Zero Brokerage across all segments (one-time ₹999)",
      "Advanced trading app with real-time data & smart tools",
      "Free Demat account opening & zero AMC",
      "Margin Trading Facility (MTF) & Margin Pledge",
      "Invest in Stocks, F&O, Currency, IPOs & Direct Mutual Funds",
      "MIRA – AI-powered virtual assistant for guidance",
      "Fast & secure platform from Mirae Asset",
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
                src="/images/mstock/mstock.png" 
                alt="mStock trading app – Zero brokerage stock trading with Money King"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Common Sections */}
      <FinancialPartners />
      <WhyChoose />
      <LoanCalculator />
    </main>
  );
}