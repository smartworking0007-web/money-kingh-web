"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, HeartPulse, Star } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function HealthInsurancePage() {
  const providers = [
    {
      id: "care",
      title: "Care Health Insurance",
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      description:
        "Care Health (formerly Religare Health) offers innovative health plans with OPD coverage, instant cover for pre-existing diseases, and global coverage options. Known for customer-centric policies and fast claim processing.",
      image: "/images/insurance/care.jpeg",
      features: [
        "Instant cover for pre-existing diseases",
        "OPD coverage & annual health check-ups",
        "Air ambulance & global coverage options",
        "No co-payment clauses",
        "Unlimited automatic recharge of sum insured",
        "Maternity & newborn cover",
        "Wellness benefits & rewards",
      ],
      color: "border-l-blue-500",
    },
    {
      id: "niva",
      title: "Niva Bupa Health Insurance",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      description:
        "Niva Bupa (formerly Max Bupa) brings world-class health insurance with direct claim settlement, refill benefit, health coaching, and international coverage. Known for premium plans with extensive network hospitals.",
      image: "/images/insurance/Health.png",
      features: [
        "Direct claim settlement – no TPA hassle",
        "Sum insured refill even if fully used",
        "Health coaching & wellness programs",
        "International coverage & second opinion",
        "Short waiting period for pre-existing diseases",
        "Maternity & newborn baby cover",
        "Loyalty bonus & no claim multiplier",
      ],
      color: "border-l-emerald-500",
    },
    {
      id: "star",
      title: "Star Health Insurance",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      description:
        "India's leading standalone health insurance specialist. Star Health offers comprehensive coverage with no room rent capping, cashless treatment at 14,000+ network hospitals, and quick claim settlement.",
      image: "/images/insurance/sta.jpeg",
      features: [
        "No room rent capping on most plans",
        "Cashless treatment at 14,000+ hospitals",
        "Daycare procedures & AYUSH coverage",
        "Automatic restoration of sum insured",
        "No-claim bonus up to 100%",
        "Wellness programs & health check-ups",
        "Fast & transparent claim settlement",
      ],
      color: "border-l-yellow-500",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-[#004687] py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Typography variant="h1" className="text-white mb-6">
            Compare Health Insurance Plans
          </Typography>
          <Typography variant="b1" className="text-blue-100 mb-10">
            Compare and choose from India s top health insurance providers. Secure your family s health with plans that offer maximum coverage and hassle-free claims.
          </Typography>

          {/* Quick Scroll Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {providers.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-white/10 hover:bg-white text-white hover:text-[#004687] px-6 py-2 rounded-full border border-white/20 transition-all text-sm font-medium"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Main List Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-20">
          {providers.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-l-8 ${item.color} bg-white p-8 rounded-r-2xl shadow-sm scroll-mt-24`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
              {/* Content Side */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <Typography variant="h2" className="text-[#004687]">
                    {item.title}
                  </Typography>
                </div>
                <Typography variant="b1" className="text-gray-700 mb-6 leading-relaxed">
                  {item.description}
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                      <Typography variant="s2" as="span" className="text-black font-medium leading-tight">
                        {feature}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinancialPartners />
      <WhyChoose />
      <LoanCalculator />
    </main>
  );
}
