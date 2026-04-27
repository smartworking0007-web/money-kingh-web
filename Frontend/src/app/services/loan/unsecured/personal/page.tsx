"use client";
import React from "react";
import Image from "next/image";
import { Shield, Clock, Headphones, Megaphone } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import TrustBar from "./TrustBar";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import LoanOffers from "./LoanOffers";
import LoanFeatures from "./LoanFeatures";
import LoanSlider from "./LoanSlider";
import Financial from "./Financial";
import Eligibility from "./Eligibility";
import LoanTypes from "./LoanTypes";
import LoanCharges from "./LoanCharges";
import LoanFAQ from "./LoanFAQ";
import { AboutTestimonialCard } from "@/app/about/AboutTestimonialCard";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function PersonalLoanPage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-slate-400 stroke-[1.5]" />,
      title: "100% End-to-End Digital Process",
      desc: "Minimal Documentation Required",
    },
    {
      icon: <Clock className="w-8 h-8 text-slate-500 stroke-[1.5]" />,
      title: "Quick Approval & Faster Disbursal",
      desc: "No Collaterals or Hidden Charges",
    },
    {
      icon: <Headphones className="w-8 h-8 text-slate-500 stroke-[1.5]" />,
      title: "Relationship Manager",
      desc: "End-to-end support from Money King Financial Services",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-slate-500 stroke-[1.5]" />,
      title: "100% Secure & Confidential",
      desc: "No Spam Calls",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-5 pb-20 md:pt-2 min-h-[500px]">
        {/* --- Background Shading --- */}
        <div className="absolute inset-0 bg-linear-to-br from-[#dce8f7] via-white to-white -z-20" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none -z-10"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/silk.png')`,
          }}
        />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* --- LEFT CONTENT AREA --- */}
          <div className="lg:col-span-7 z-10">
            <div className="max-w-2xl">
              <Typography
                variant="d1"
                as="h1"
                className="text-[#002e5b] mb-6! mt-0! leading-tight font-black"
              >
                Personal Loan
              </Typography>

              <div className="space-y-6">
                <Typography
                  variant="h4"
                  as="p"
                  className="text-slate-800 font-medium m-0! leading-snug"
                >
                  Compare & choose best personal loan with interest rates
                  starting at
                  <span className="text-slate-900 font-bold ml-2">
                    9.98% p.a.
                  </span>{" "}
                  only.
                </Typography>

                <Typography variant="b1" className="text-slate-600 m-0!">
                  A personal loan offers a quick and flexible financial solution
                  for all your immediate needs, whether its for travel, medical
                  emergencies, or debt consolidation.
                </Typography>
              </div>

              {/* Vertical Features List */}
              <div className="space-y-10 mt-12">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <Typography
                        variant="h5"
                        as="h3"
                        className="text-slate-900 m-0! leading-tight font-bold"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-slate-500 m-0! mt-1"
                      >
                        {item.desc}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE GRAPHIC AREA --- */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[500px] lg:h-[700px]">
            <div className="absolute w-[115%] h-[115%] border border-yellow-400/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[95%] h-[95%] border border-blue-400/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute top-[25%] -left-12 z-20 animate-pulse">
              <span className="text-green-400 text-7xl font-bold opacity-30 rotate-12 drop-shadow-md">
                ₹
              </span>
            </div>

            <div className="relative z-10 drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/Loan/pmss.png"
                alt="Personal Loan App Dashboard"
                width={400}
                height={750}
                className="w-full max-w-[360px] h-auto rounded-[3.5rem]"
                priority
              />
            </div>
            <div className="absolute top-[65%] -right-16 z-10">
              <span className="text-green-500 text-5xl font-bold opacity-20 -rotate-12">
                ₹
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT COMPONENTS AREA --- */}
      {/* Yahan 'space-y-16' ya 'space-y-24' ka use karke components ke beech gap add kiya gaya hai.
          'mb-20' ensure karega ki page ke end mein bhi thodi jagah rahe.
      */}

      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <TrustBar />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-40 md:py-40 -mt-10 md:-mt-10">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-45 md:-mt-40">
        <LoanOffers />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-20">
        <LoanFeatures />
      </div>
      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-45">
        <LoanSlider />
      </div>
      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-28 md:-mt-45">
        <Financial />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <Eligibility />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-15 md:-mt-40">
        <LoanTypes />
      </div>
      <div className="relative z-20 bg-white space-y-0 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-40">
        <LoanCharges />
      </div>
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-30 md:-mt-45">
        <AboutTestimonialCard />
      </div>
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-35">
        <FinancialPartners />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-25 md:-mt-35">
        <LoanFAQ />
      </div>
    </main>
  );
}
