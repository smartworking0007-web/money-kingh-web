"use client";

import Image from "next/image";
import BankingManagementContent from "./BankingManagementContent";
import BankingManagementFeatures from "./BankingManagementFeatures";
import BankingServiceTypes from "./BankingServiceTypes";
import BankingSolutions from "./BankingSolutions";
import RiskManagementProcess from "./RiskManagementProcess";
import ChooseRiskManagement from "./ChooseRiskManagement";
import WhyChooseMoneyKing from "./WhyChooseMoneyKing";
import BankingFAQ from "./BankingFAQ";

export default function CarLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile par aspect-[4/3] ya aspect-square use karein taaki height achhi mile.
          'object-right' use kiya hai taaki right side ka part (car) na kate.
        */}
        <div className="relative w-full aspect-6/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/Banking.jpeg"
            alt="Car Loan BT"
            fill
            // object-right: ye right side ko focus mein rakhega
            // md:object-center: desktop par wapis center kar dega
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
