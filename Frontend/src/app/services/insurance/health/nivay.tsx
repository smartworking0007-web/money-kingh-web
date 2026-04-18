"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, HeartPulse, Star } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

export default function Niva() {
  const providers = [
    {
      id: "care",
      title: "Care Health Insurance",
      icon: <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
      description:
        "Care Health (formerly Religare Health) offers innovative health plans with OPD coverage, instant cover for pre-existing diseases, and global coverage options. Known for customer-centric policies and fast claim processing.",
      image: "/images/insurance/care.jpeg",
      features: [
        "Instant cover for pre-existing diseases",
        "OPD coverage & health check-ups",
        "Air ambulance & global options",
        "No co-payment clauses",
        "Unlimited automatic recharge",
        "Maternity & newborn cover",
        "Wellness benefits & rewards",
      ],
      color: "border-l-blue-500",
    },
    {
      id: "niva-bupa",
      title: "Niva Bupa Health Insurance",
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
      description:
        "Niva Bupa (formerly Max Bupa) brings world-class health insurance with direct claim settlement, refill benefit, health coaching, and international coverage. Known for premium plans with extensive network hospitals.",
      image: "/images/insurance/Health.png",
      features: [
        "Direct claim settlement - no TPA",
        "Sum insured refill benefit",
        "Health coaching programs",
        "International second opinion",
        "Short waiting period for PED",
        "Maternity & newborn baby cover",
        "Loyalty bonus multiplier",
      ],
      color: "border-l-emerald-500",
    },
    {
      id: "star",
      title: "Star Health Insurance",
      icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />,
      description:
        "India's leading standalone health insurance specialist. Star Health offers comprehensive coverage with no room rent capping, cashless treatment at 14,000+ network hospitals, and quick claim settlement.",
      image: "/images/insurance/sta.jpeg",
      features: [
        "No room rent capping",
        "14,000+ network hospitals",
        "Daycare & AYUSH coverage",
        "Automatic restoration of sum",
        "No-claim bonus up to 100%",
        "Wellness & health check-ups",
        "Transparent claim settlement",
      ],
      color: "border-l-yellow-500",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-lexend">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#004687] py-16 md:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h1" className="text-white text-3xl md:text-5xl font-black mb-6 mt-0">
            Compare Health Insurance Plans
          </Typography>
          <Typography variant="b1" className="text-blue-100 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Compare and choose from India s top health insurance providers. Secure your family s health with plans that offer maximum coverage.
          </Typography>

          {/* Quick Scroll Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {providers.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-white/10 hover:bg-white text-white hover:text-[#004687] px-5 py-2 rounded-full border border-white/20 transition-all text-xs md:text-sm font-bold"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAIN LIST SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20">
        <div className="space-y-10 md:space-y-20">
          {providers.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center border-l-4 md:border-l-8 ${item.color} bg-white p-5 md:p-10 rounded-r-2xl shadow-sm scroll-mt-24`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-50">
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
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <div className="p-2 bg-slate-50 rounded-lg">{item.icon}</div>
                  <Typography variant="h3" className="text-[#004687] text-xl md:text-3xl font-black m-0">
                    {item.title}
                  </Typography>
                </div>
                
                <Typography variant="b1" className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed text-center md:text-left">
                  {item.description}
                </Typography>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 bg-slate-50/50 p-2 rounded-lg border border-slate-100/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <Typography variant="s2" as="span" className="text-slate-800 text-xs md:text-sm font-bold leading-tight">
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
    </main>
  );
}