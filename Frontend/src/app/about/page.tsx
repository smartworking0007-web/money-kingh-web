// src/app/about/page.tsx

import React from "react";
import { Typography } from "../components/ui/Typography"; // Import Typography component
import CompanyIntro from "../components/stats/CompanyIntro";
import ServiceGrid from "../components/Service/ServiceGrid";
import LoanCalculator from "../components/LoanCalculator/LoanCalculator";
import FinancialPartners from "../components/FinancialPartners/FinancialPartners";

export default function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Title */}
      <Typography variant="h1" className="text-center text-4xl font-semibold mb-8">
        About Us
      </Typography>

      {/* About Content */}
      <CompanyIntro/>
      <ServiceGrid/>
      <LoanCalculator/>
      <FinancialPartners/>
    </div>
  );
}
