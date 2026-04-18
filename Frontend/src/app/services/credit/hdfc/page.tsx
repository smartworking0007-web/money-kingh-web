"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import CreditCardIndiaPage from "./CreditCardIndiaPage";
import CreditCardTabs from "./CreditCardTabs";
import ApplyStepSection from "./ApplyStepSection";
import CreditCardDocuments from "./CreditCardDocuments";
import FAQSection from "./FAQSection";

export default function LoanAgainstPropertyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/credit/cre.jpeg"
            alt="Loan Against Property"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Overlay gradient optimized */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent md:via-white/40" />
        </div>

        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-[90%] md:max-w-2xl">
            <Typography
              variant="h2"
              as="h2"
              className="text-[#004687]! text-4xl! md:text-7xl! font-bold! mb-4! mt-0! leading-tight!"
            >
              Save more on everyday
              <br /> expenses.
            </Typography>

            <Typography
              variant="s1"
              as="p"
              className="text-slate-700! text-lg! md:text-2xl! mb-8! mt-0! font-medium!"
            >
              Get better value on daily swipes with rewards, instant discounts,
              and brand offers.
            </Typography>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#004687]! rounded-xl! h-12! md:h-14! px-8! md:px-10! shadow-lg! cursor-pointer"
              >
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <CreditCardIndiaPage />
      </section>

      <section className="bg-white py-10 md:py-5 ">
        <CreditCardTabs />
      </section>

      <section className="bg-white py-10 md:py-5 ">
        <ApplyStepSection />
      </section>

       <section className="bg-white py-10 md:py-5 ">
        <CreditCardDocuments />
      </section>

      <section className="bg-white py-10 md:py-5 ">
        <FAQSection />
      </section>
    </main>
  );
}
