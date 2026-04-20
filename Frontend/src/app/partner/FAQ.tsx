"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus} from "lucide-react";

const faqData = [
  {
    question: "How can I become a Channel Partner with Money King?",
    answer: "You can register by clicking on the 'Become Our Partner' option, verifying your mobile number via OTP, submitting your documents, and completing the e-sign agreement.",
  },
  {
    question: "What documents are required for registration?",
    answer: "You need to upload: KYC documents (PAN and address proof), Education certificates, and a Cancelled cheque for payout processing.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, the registration process to become a Channel Partner with Money King is completely free of cost.",
  },
  {
    question: "How long does the onboarding process take?",
    answer: "The process is very quick and usually completed within 24–48 hours, depending on how fast your documents are verified.",
  },
  {
    question: "What is a Channel Partner Code?",
    answer: "It is a unique code generated after successful registration that gives you access to the partner dashboard, services, and all earning opportunities.",
  },
  {
    question: "How will I earn as a Channel Partner?",
    answer: "You earn attractive commissions by referring customers for our wide range of financial products like loans, insurance, and investment services.",
  },
  {
    question: "Is training provided to new partners?",
    answer: "Yes, we provide complete digital training and dedicated relationship manager support to help you grow your business from day one.",
  },
  {
    question: "Can beginners apply for this program?",
    answer: "Absolutely! Even if you are a beginner, our team provides step-by-step guidance and tools to ensure your success in the financial industry.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10 font-lexend">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
          </div>
          <Typography
            variant="h3"
            as="h2"
            className="text-2xl md:text-4xl font-black text-[#1e293b] mb-4 mt-0"
          >
            Frequently Asked Questions
          </Typography>
          <Typography className="text-gray-500 text-sm md:text-base mt-0">
            Have questions? We re here to help you understand the partnership better.
          </Typography>
        </div>

        {/* --- FAQ LIST --- */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index ? "border-blue-200 bg-blue-50/30 shadow-sm" : "border-slate-100 bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <Typography className={`font-bold text-sm md:text-base pr-4 ${
                  openIndex === index ? "text-blue-700" : "text-slate-800"
                }`}>
                  {faq.question}
                </Typography>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 md:p-6 pt-0">
                  <div className="h-px bg-blue-100 mb-4 w-full" />
                  <Typography className="text-gray-600 text-xs md:text-sm leading-relaxed mt-0">
                    {faq.answer}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}