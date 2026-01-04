"use client";
import React from "react";
import { CheckCircle2, Building2, BarChart3, Clock, Wallet } from "lucide-react";
// Path using absolute alias for Typography
import { Typography } from "@/app/components/ui/Typography";
import CompanyIntro from "@/app/components/stats/CompanyIntro";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function BusinessLoanPage() {
  const data = {
    title: "Business Loan",
    description: "Empower your enterprise with our flexible business loan solutions. Whether you're looking to expand operations, purchase new inventory, or manage cash flow, our quick disbursal and competitive rates help your business reach the next level of success.",
    features: [
      "For Small & Medium Enterprises (SMEs)",
      "No Collateral Required for Unsecured",
      "Flexible Repayment Options",
      "Interest Rate starting @ 13.00% p.a.",
    ],
    // Business specific highlights for better UI
    stats: [
      { icon: Building2, label: "All Business Types" },
      { icon: BarChart3, label: "High Loan Value" },
      { icon: Clock, label: "Quick Approval" },
      { icon: Wallet, label: "Easy EMI" },
    ],
    lastUpdated: "11 December 2025",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8">
            {/* Tagline or Breadcrumb style header could go here */}
            <Typography variant="h1" as="h1" className="text-[#004687] mb-6 mt-0 font-bold leading-tight">
              {data.title}
            </Typography>

            <Typography variant="b1" className="text-gray-600 mb-8 text-lg leading-relaxed">
              {data.description}
            </Typography>

            {/* Visual Stats/Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {data.stats.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                  <item.icon className="w-6 h-6 text-[#004687] mb-2" />
                  <span className="text-xs font-bold text-[#004687] text-center uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Checkmark Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0" />
                  </div>
                  <Typography variant="s2" as="span" className="text-gray-800 font-medium">
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>

          
          </div>
       
          
        </div>
      </section>

      {/* Other Components */}
      <div className="space-y-4">
        <CompanyIntro />
        <LoanCalculator />
        <FinancialPartners />
      </div>
    </main>
  );
}