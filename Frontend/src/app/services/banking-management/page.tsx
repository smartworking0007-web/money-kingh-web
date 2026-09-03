import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import BankingManagementContent from "./BankingManagementContent";
import BankingManagementFeatures from "./BankingManagementFeatures";
import BankingServiceTypes from "./BankingServiceTypes";
import BankingSolutions from "./BankingSolutions";
import RiskManagementProcess from "./RiskManagementProcess";
import ChooseRiskManagement from "./ChooseRiskManagement";
import WhyChooseMoneyKing from "./WhyChooseMoneyKing";
import BankingFAQ from "./BankingFAQ";

export const metadata: Metadata = {
  title: "Banking Management & Corporate Financial Solutions | Money King",
  description:
    "Explore strategic banking management, financial risk mitigation, and corporate banking solutions with Money King Financial Services.",
  alternates: {
    canonical: "/services/banking-management",
  },
};

export default function BankingManagementPage() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-6/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/Banking.jpeg"
            alt="Banking Management"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />
        </div>
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingManagementContent />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingManagementFeatures />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingServiceTypes />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingSolutions />
      </section>

      <section className="bg-white py-0 md:py-0">
        <RiskManagementProcess />
      </section>

      <section className="bg-white py-0 md:py-0">
        <ChooseRiskManagement />
      </section>

      <section className="bg-white py-0 md:py-0">
        <WhyChooseMoneyKing />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingFAQ />
      </section>
    </main>
  );
}