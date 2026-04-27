"use client";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, Briefcase, BarChart3 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import TrustBar from "./TrustBar";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import LoanOffers from "./LoanOffers";
import LoanSlider from "./LoanSlider";
import Financial from "./Financial";
import Eligibility from "./Eligibility";

import LoanFAQ from "./LoanFAQ";
import { AboutTestimonialCard } from "@/app/about/AboutTestimonialCard";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";
import BusinessLoanKnowledgeBase from "./BusinessLoanKnowledgeBase";
import GovtLoanSchemes from "./GovtLoanSchemes";
import AboutBusinessLoan from "./AboutBusinessLoan";
import BusinessLoanFeatures from "./BusinessLoanFeatures";

export default function BusinessLoanPage() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 stroke-[1.5]" />,
      title: "No Collateral Required",
      desc: "Get unsecured business loans without pledging any assets.",
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500 stroke-[1.5]" />,
      title: "Funds in 48 Hours",
      desc: "Capital in your account within 48-72 hours of approval.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-slate-600 stroke-[1.5]" />,
      title: "Dedicated MSME Support",
      desc: "Expert guidance tailored for MSMEs and Large Enterprises.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-600 stroke-[1.5]" />,
      title: "Custom EMI Options",
      desc: "Customize your EMI schedule based on business cash flow.",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-10 pb-10 min-h-[500px]">
        {/* --- Background Shading --- */}
        <div className="absolute inset-0 bg-linear-to-br from-[#f0f4f8] via-white to-white -z-20" />
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
              {/* Main Heading Replacement */}
              <Typography
                variant="h2"
                as="h3"
                className="text-[#002e5b] mb-10! -mt-20 leading-tight font-black"
              >
                Unsecured Business Loan in India
              </Typography>

              <div className="space-y-6">
                <Typography
                  variant="h4"
                  as="p"
                  className="text-slate-800 font-medium m-0! leading-snug"
                >
                  Fast & Affordable Business Loans – Starting
                  <span className="text-blue-500 font-bold ml-2">
                    @ 9.99% p.a.
                  </span>
                </Typography>
                {/* Paragraph description removed as requested */}
              </div>

              {/* Vertical Features List with updated logic */}
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
            <div className="absolute w-[115%] h-[115%] border border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[95%] h-[95%] border border-slate-400/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />

            <div className="absolute top-[25%] -left-12 z-20 animate-pulse">
              <span className="text-blue-600 text-7xl font-bold opacity-30 rotate-12 drop-shadow-md">
                ₹
              </span>
            </div>

            <div className="relative z-10 -mt-15 drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/Loan/pmss.png"
                alt="Business Loan Growth Dashboard"
                width={400}
                height={750}
                className="w-full max-w-[360px] h-auto rounded-[3.5rem]"
                priority
              />
            </div>

            <div className="absolute top-[65%] -right-16 z-10">
              <span className="text-blue-500 text-5xl font-bold opacity-20 -rotate-12">
                ₹
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT COMPONENTS AREA --- */}
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-30 -mt-10 md:-mt-24">
        <TrustBar />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-35 mt-20 md:-mt-10">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-10 -mt-10 md:-mt-30">
        <LoanOffers />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-20">
        <AboutBusinessLoan />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-25 -mt-10 md:-mt-30">
        <BusinessLoanFeatures />
      </div>
      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-10 -mt-30 md:-mt-40">
        <LoanSlider />
      </div>
      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-30">
        <Financial />
      </div>
      <div className="relative z-20  space-y-10 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <Eligibility />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <BusinessLoanKnowledgeBase />
      </div>
      <div className="relative z-20  space-y-10 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-40">
        <GovtLoanSchemes />
      </div>
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-50">
        <AboutTestimonialCard />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <FinancialPartners />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <LoanFAQ />
      </div>
    </main>
  );
}
