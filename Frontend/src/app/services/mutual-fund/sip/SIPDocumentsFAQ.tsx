"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus, } from "lucide-react";

const faqData = [
  {
    q: "What documents are required to start a SIP in India?",
    a: "To start a SIP, you need a PAN card, address proof (like Aadhaar), bank account details, and KYC completion.",
  },
  {
    q: "Is PAN card mandatory for SIP investment?",
    a: "Yes, a PAN card is mandatory for investing in mutual funds and starting a SIP in India.",
  },
  {
    q: "Can I start a SIP without Aadhaar card?",
    a: "Yes, you can use other valid address proofs like passport, voter ID, or driving license, though Aadhaar is preferred for faster e-KYC.",
  },
  {
    q: "Is KYC compulsory for SIP?",
    a: "Yes, completing KYC (Know Your Customer) is mandatory before starting any SIP investment.",
  },
  {
    q: "Can I complete SIP KYC online?",
    a: "Yes, you can complete e-KYC online using your PAN and Aadhaar through OTP or video verification.",
  },
  {
    q: "Do I need a bank account for SIP?",
    a: "Yes, a bank account is required to set up auto-debit for SIP installments and for redemption of funds.",
  },
  {
    q: "What is a cancelled cheque required for SIP?",
    a: "A cancelled cheque is used to verify your bank account details like account number and IFSC code.",
  },
  {
    q: "Are documents different for NRI SIP investors?",
    a: "Yes, NRIs need additional documents like passport copy, overseas address proof, and NRE/NRO bank account details.",
  },
  {
    q: "What documents are required for SIP for a minor?",
    a: "For minors, a birth certificate and parent/guardian KYC documents are required.",
  },
  {
    q: "How long does SIP KYC verification take?",
    a: "Online KYC can be completed within a few minutes to 24 hours, while offline KYC may take a few days.",
  },
  {
    q: "Can I start SIP without income proof?",
    a: "Yes, income proof is generally not required for SIP in mutual funds.",
  },
  {
    q: "Is it safe to submit SIP documents online?",
    a: "Yes, it is safe if you use trusted and authorized platforms for SIP investment.",
  },
];

export default function SIPDocumentsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-6 font-lexend -mt-10 md:-mt-16 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-10">
         
          <Typography
            variant="h3"
            className="text-2xl md:text-4xl font-black text-slate-900 mt-0 mb-2"
          >
            SIP Investment FAQs
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 text-sm md:text-base mt-0"
          >
            Frequently Asked Questions about Documents & Process
          </Typography>
        </div>

        {/* --- ACCORDION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === idx
                  ? "border-[#D84B7E] bg-pink-50/20 shadow-sm"
                  : "border-slate-100 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span
                  className={`font-bold text-xs md:text-sm pr-2 ${openIndex === idx ? "text-[#D84B7E]" : "text-slate-700"}`}
                >
                  {faq.q}
                </span>
                <div className="shrink-0">
                  {openIndex === idx ? (
                    <Minus size={16} className="text-[#D84B7E]" />
                  ) : (
                    <Plus size={16} className="text-slate-300" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-[11px] md:text-xs text-slate-500 leading-relaxed border-t border-pink-50/50 pt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
