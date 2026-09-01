"use client";
import React from "react";
import Image from "next/image";
import {
  Shield,
  Clock,
  Headphones,
  Megaphone,
  AlertCircle,
  Info,
  Landmark,
} from "lucide-react";
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
      title: "Digital Processing & Support",
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

  // JSON-LD Schemas for SEO and Google Quality compliance
  const jsonLdFinancialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Money King Financial Services Pvt. Ltd.",
    description:
      "Loan Facilitator and Direct Selling Agent (DSA) connecting customers with RBI regulated banks and NBFCs for personal loans.",
    areaServed: "India",
    serviceType: "Personal Loan Facilitation",
    feesAndCommissionsSpecification:
      "Processing fees range from 1% to 3% of the loan amount depending on the lending partner.",
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Money King Financial Services Pvt. Ltd.",
    url: "https://moneykingfinancial.com",
    logo: "https://moneykingfinancial.com/logo.png",
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Money King Financial Services a direct lender?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Money King Financial Services Pvt. Ltd. is a Loan Facilitator / Direct Selling Agent (DSA) and not a direct lender. We connect customers with RBI-regulated banks and NBFCs.",
        },
      },
      {
        "@type": "Question",
        name: "What are the repayment terms and APR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayment tenures range from 12 to 60 months, with a maximum APR of up to 24% p.a., determined entirely by the respective lending partner.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Structured Data / JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFinancialService),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* Hero Section */}
      <section
        className="relative pt-5 pb-20 md:pt-2 min-h-[500px]"
        aria-label="Hero Section"
      >
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
                  Compare personal loan offers from RBI-regulated partner banks
                  and NBFCs with interest rates starting at
                  <span className="text-slate-900 font-bold ml-2">
                    12.5% p.a. Subject to eligibility.
                  </span>
                </Typography>
                <Typography variant="b1" className="text-slate-600 m-0!">
                  Money King Financial Services Pvt. Ltd. acts as a professional
                  Loan Facilitator and Direct Selling Agent (DSA), helping you
                  discover structured financial solutions for travel, medical
                  emergencies, or debt consolidation through trusted partner
                  banks and NBFCs.
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
                src="/images/Loan/pssssss.jpg"
                alt="Personal Loan App Dashboard Interface"
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

      {/* --- GOOGLE ADS COMPLIANT DISCLOSURE SECTION (IMMEDIATELY BELOW HERO) --- */}
      <section
        className="bg-slate-50 border-y border-slate-200 py-8 px-4 sm:px-6"
        aria-label="Important Regulatory Disclosures"
      >
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Highlighted Important Disclosure Card */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-xs">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-base font-bold text-amber-900 mb-1">
                  Important Disclosure: Loan Facilitator / DSA Status
                </h2>
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Money King Financial Services Pvt. Ltd.</strong> is
                  strictly a{" "}
                  <strong>Loan Facilitator / Direct Selling Agent (DSA)</strong>{" "}
                  and NOT a direct lender. We act as an intermediary platform
                  connecting prospective borrowers with RBI-regulated Banks and
                  Non-Banking Financial Companies (NBFCs). We do not disburse
                  loans directly.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Compliance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-blue-900 font-semibold">
                <Landmark className="w-5 h-5 text-blue-700" />
                <h3>Lender Control & Decision Making</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Loan approval, credit evaluations, interest rates, processing
                fees, loan amounts, APR determinations, and disbursals are
                decided{" "}
                <strong>
                  solely and exclusively by the respective partner Bank or NBFC
                </strong>{" "}
                based on their internal credit policies and applicant
                eligibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-blue-900 font-semibold">
                <Info className="w-5 h-5 text-blue-700" />
                <h3>Representative Loan Example & APR</h3>
              </div>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li>
                  <strong>Loan Amount:</strong> ₹1,00,000
                </li>
                <li>
                  <strong>Tenure:</strong> 12 Months
                </li>
                <li>
                  <strong>Interest Rate:</strong> 12.5% p.a.
                </li>
                <li>
                  <strong>Processing Fee (approx 2%):</strong> ₹2,000 + GST
                </li>
                <li>
                  <strong>Maximum APR:</strong> Up to 24% p.a.
                </li>
                <li>
                  <strong>Approximate Monthly EMI:</strong> ₹8,862
                </li>
                <li>
                  <strong>Total Repayment Cost:</strong> ₹1,11,500
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Regulatory Disclaimers Bullets */}
          <div className="text-xs text-slate-500 space-y-1.5 pt-2">
            <p>
              • <strong>Processing Fee & Charges:</strong> Applicable processing
              fees, documentation charges, and GST are levied directly by the
              lending partner or deducted from the disbursement amount.
            </p>
            <p>
              • <strong>Terms & Conditions:</strong> All applications are
              subject to terms and conditions, KYC verification, and credit
              score evaluations by RBI-regulated institutions.
            </p>
            <p>
              • <strong>Subject to Eligibility:</strong> Offers and interest
              rates vary depending on individual income, credit history, and
              lender criteria. No loan is guaranteed prior to formal
              underwriting approval by the lender.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTENT COMPONENTS AREA --- */}
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

      {/* --- IMPORTANT FINANCIAL DISCLAIMER ABOVE FAQ SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 my-8">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-xs text-slate-600 space-y-2">
          <h3 className="font-bold text-slate-800 text-sm">
            Important Financial & Regulatory Disclosure
          </h3>
          <p>
            Money King Financial Services Pvt. Ltd. operates strictly as an
            authorized DSA/Loan Facilitator connecting borrowers with
            RBI-regulated banks and NBFCs. We do not charge any upfront
            application fees for loan processing. APR ranges from a minimum of
            10.5% to a maximum of 24% p.a. Repayment tenures span between 12
            months and 60 months. Actual loan sanction, interest rates, and
            processing fees are determined solely by the respective lending
            partner based on individual credit profiles.
          </p>
        </div>
      </section>

      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-25 md:-mt-35">
        <LoanFAQ />
      </div>

      {/* --- COMPACT DISCLAIMER ABOVE FOOTER --- */}
      <section className="bg-slate-900 text-slate-300 py-10 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-xs space-y-3 leading-relaxed">
          <p className="font-semibold text-white text-sm">
            Money King Financial Services Pvt. Ltd. - Regulatory Notice:
          </p>
          <p>
            We are a Loan Distribution Platform / DSA partnering with
            RBI-regulated institutions. Minimum repayment period: 12 months;
            Maximum repayment period: 60 months; Maximum Annual Percentage Rate
            (APR): 24%. Representative Example: For a loan of ₹1,00,000 borrowed
            over 12 months at 11.5% APR with a ₹2,000 processing fee, total 
            repayment equals ₹1,11,500. All loans are subject to credit
            appraisal, verification, and sole discretion of partner banks and
            NBFCs.
          </p>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Money King Financial Services Pvt.
            Ltd. All rights reserved. Designed to comply fully with Google Ads
            Personal Loan policies and financial advertising standards.
          </p>
        </div>
      </section>
    </main>
  );
}
