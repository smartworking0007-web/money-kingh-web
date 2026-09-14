import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import CreditCardIndiaPage from "./CreditCardIndiaPage";
import CreditCardTabs from "./CreditCardTabs";
import ApplyStepSection from "./ApplyStepSection";
import CreditCardDocuments from "./CreditCardDocuments";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Apply for HDFC Bank Credit Cards | Money King Financial",
  description:
    "Apply online for HDFC credit cards with Money King. Enjoy cashback, travel rewards, welcome points, and exclusive discounts on everyday spends.",
  keywords: [
    "HDFC Bank Credit Cards",
    "Apply Online for HDFC Bank Credit Cards",
    "apply credit card online",
    "cashback credit card",
    "travel rewards credit card",
    "welcome points credit card",
    "exclusive credit card discounts",
    "Money King Financial Services",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Apply for HDFC Bank Credit Cards | Money King Financial",
    description:
      "Apply online for HDFC credit cards with Money King. Enjoy cashback, travel rewards, welcome points, and exclusive discounts on everyday spends.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for HDFC Bank Credit Cards | Money King Financial",
    description:
      "Apply online for HDFC credit cards with Money King. Enjoy cashback, travel rewards, welcome points, and exclusive discounts on everyday spends.",
  },
};

export default function HDFCCreditCardPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/credit/cre.jpeg"
            alt="Apply Online for HDFC Bank Credit Cards"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent md:via-white/40" />
        </div>

        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-[90%] md:max-w-2xl">
            <Typography
              variant="h2"
              as="h1"
              className="text-[#004687]! text-4xl! md:text-6xl! font-bold! mb-4! mt-0! leading-tight!"
            >
              Apply Online for HDFC Bank Credit Cards
            </Typography>

            <Typography
              variant="s1"
              as="p"
              className="text-slate-700! text-lg! md:text-xl! mb-8! mt-0! font-medium!"
            >
              Apply online for HDFC credit cards with Money King. Enjoy cashback, travel rewards, welcome points, and exclusive discounts on everyday spends.
            </Typography>

            <Link href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply">
              <Button
                size="lg"
                className="bg-[#004687]! rounded-xl! h-12! md:h-14! px-8! md:px-10! shadow-lg! cursor-pointer text-white"
              >
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section className="bg-white py-10 md:py-5">
        <CreditCardIndiaPage />
      </section>

      <section className="bg-white py-10 md:py-5">
        <CreditCardTabs />
      </section>

      <section className="bg-white py-10 md:py-5">
        <ApplyStepSection />
      </section>

      <section className="bg-white py-0 md:py-5">
        <CreditCardDocuments />
      </section>

      <section className="bg-white py-10 md:py-5">
        <FAQSection />
      </section>
    </main>
  );
}