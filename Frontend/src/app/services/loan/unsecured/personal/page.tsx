"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
// Use the '@' alias to point to the correct components folder
import { Typography } from "@/app/components/ui/Typography"; 
import CompanyIntro from "@/app/components/stats/CompanyIntro";
import ServiceGrid from "@/app/components/Service/ServiceGrid";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function PersonalLoanPage() {
  const data = {
    title: "Personal Loan",
    description: "Personal Loan is your go-to solution for managing financial emergencies. Meet all your urgent financial needs with an instant personal loan while improving your credit score.",
    features: [
      "For Salaried & Self-Employed Individuals",
      "No Collateral Required",
      "Disbursal in 24 Hours",
      "Interest Rate @ 9.99% p.a.",
    ],
    lastUpdated: "11 December 2025",
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <Typography variant="h1" as="h1" className="text-[#004687] mb-4 mt-0">
              {data.title}
            </Typography>
            <Typography variant="b1" className="text-gray-700 mb-8 leading-relaxed">
              {data.description}
            </Typography>
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
              {data.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <Typography variant="s2" as="span" className="text-black font-medium">
                    {f}
                  </Typography>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </section>
      <CompanyIntro/>
      <ServiceGrid/>
      <LoanCalculator/>
      <FinancialPartners/>
    </main>
  );
}