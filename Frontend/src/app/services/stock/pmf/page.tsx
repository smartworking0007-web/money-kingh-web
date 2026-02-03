"use client";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function PMFPage() {
  const data = {
    title: "Portfolio Management Services (PMS)",
    description:
      "Experience personalized wealth management with our Portfolio Management Services. Designed for high-net-worth individuals, our expert fund managers create customized equity portfolios to deliver superior risk-adjusted returns, outperforming benchmarks over the long term.",
    features: [
      "Dedicated portfolio manager for personalized strategy",
      "Direct equity investments in high-growth stocks",
      "Active management with research-backed decisions",
      "Minimum investment starting from ₹50 lakhs",
      "Transparent reporting & performance tracking",
      "Tax-efficient structure with direct ownership",
      "Diversified across large, mid & small-cap stocks",
      "Regular reviews and rebalancing",
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
          </div>

          {/* Right: Image Sidebar */}
          <div className="lg:col-span-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/mstock/pmf.jpg" 
                alt="Professional portfolio management services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <FinancialPartners />
      <WhyChoose />
      <LoanCalculator />
    </main>
  );
}