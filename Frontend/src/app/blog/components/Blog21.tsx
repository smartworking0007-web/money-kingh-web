"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Briefcase,
  Smartphone,
  Wallet,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog21 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "1. Can I get a personal loan with a CIBIL score of 600?",
      a: "It is difficult with major banks. You might get approval from specialized fintech lenders, but the interest rates will likely be much higher (often 18%–24%) to cover the lender's risk.",
    },
    {
      q: "2. Does my residential address affect my loan?",
      a: "Yes. Lenders prefer applicants who have lived at their current address for at least one year. Frequent changes in residence can sometimes be seen as a lack of stability in your profile.",
    },
    {
      q: "3. Will a 'Buy Now Pay Later' (BNPL) plan affect my eligibility?",
      a: "Yes. Every BNPL purchase is technically a small loan. Too many active BNPL accounts can make you look 'credit-hungry' and significantly lower your loan eligibility.",
    },
    {
      q: "4. Can I add a co-applicant to a personal loan?",
      a: "Yes! Adding a spouse or parent with a good income and credit score can help you secure a higher loan amount and better interest rates by combining your repayment capacities.",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="7 Critical Factors Banks Evaluate Before Approving Your Personal Loan"
            category="PERSONAL LOAN"
            author="Sumit Mishra"
            date="May 08, 2026"
            image="/images/blog/blog-21.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-21.jpeg"
                  alt="CIBIL score above 750 for personal loan approval in 2026."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase"
                >
                  Personal Loan Approval: The Big 7 Factors
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 08, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Personal Loan</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block italic"
                >
                  Getting a personal loan in 2026 is faster than ever, but
                  behind that speed is a sophisticated AI-driven evaluation.
                  Don&apos;t let your application get rejected!
                </Typography>

                <section className="space-y-12">
                  {/* Grid of Factors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* CIBIL Score */}
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                      <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck className="text-blue-600" />
                        <Typography
                          variant="h5"
                          className="font-bold uppercase text-gray-900"
                        >
                          1. CIBIL Score
                        </Typography>
                      </div>
                      <Typography variant="b2" className="text-gray-700">
                        The gold standard is now <strong>750+</strong>. It
                        proves you are a responsible borrower who pays bills on
                        time.
                      </Typography>
                    </div>

                    {/* Income Stability */}
                    <div className="p-6 bg-green-50 rounded-3xl border border-green-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Wallet className="text-green-600" />
                        <Typography
                          variant="h5"
                          className="font-bold uppercase text-gray-900"
                        >
                          2. Income Stability
                        </Typography>
                      </div>
                      <Typography variant="b2" className="text-gray-700">
                        Banks look for regular salary credits. Frequent
                        &quot;cash deposits&quot; can be a major red flag for
                        lenders.
                      </Typography>
                    </div>

                    {/* FOIR Ratio */}
                    <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart3 className="text-orange-600" />
                        <Typography
                          variant="h5"
                          className="font-bold uppercase text-gray-900"
                        >
                          3. FOIR Ratio
                        </Typography>
                      </div>
                      <Typography variant="b2" className="text-gray-700">
                        Your total EMIs should be under <strong>40%–50%</strong>{" "}
                        of your income. Close small loans before applying.
                      </Typography>
                    </div>

                    {/* Employer Category */}
                    <div className="p-6 bg-purple-50 rounded-3xl border border-purple-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="text-purple-600" />
                        <Typography
                          variant="h5"
                          className="font-bold uppercase text-gray-900"
                        >
                          4. Employer Type
                        </Typography>
                      </div>
                      <Typography variant="b2" className="text-gray-700">
                        Employees of Gov departments, PSUs, and MNCs often get
                        lower rates due to perceived job security.
                      </Typography>
                    </div>
                  </div>

                  {/* Account Behavior Section */}
                  <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="shrink-0 p-4 bg-white/10 rounded-2xl">
                        <Smartphone className="text-blue-400" size={48} />
                      </div>
                      <div>
                        <Typography
                          variant="h5"
                          className="text-white mb-4 font-bold uppercase"
                        >
                          7. Digital Footprint & Account Aggregator
                        </Typography>
                        <Typography
                          variant="b1"
                          className="text-blue-100 leading-relaxed mb-4"
                        >
                          In 2026, banks scan your statements digitally. They
                          look for <strong>bounced cheques</strong>, BNPL usage,
                          and average monthly balances.
                        </Typography>
                        <div className="flex items-center gap-2 text-yellow-400 font-bold">
                          <AlertCircle size={18} /> A clean statement is
                          mandatory for approval.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Factors Info */}
                  <div className="border-l-4 border-[#1e3a8a] pl-6 space-y-6">
                    <Typography variant="b1" className="text-gray-700">
                      <strong>5. Tenure:</strong> Banks look for at least 1 year
                      total experience and 6 months in current job.
                    </Typography>
                    <Typography variant="b1" className="text-gray-700">
                      <strong>6. Age:</strong> The sweet spot is 25–45 years for
                      high earning potential and flexible tenure.
                    </Typography>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8"
                    >
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-all"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-white transition-colors"
                          >
                            <Typography
                              variant="s2"
                              className="font-bold text-gray-900 leading-tight"
                            >
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp size={20} className="text-[#1e3a8a]" />
                            ) : (
                              <ChevronDown
                                size={20}
                                className="text-gray-400"
                              />
                            )}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography
                                variant="b1"
                                className="text-gray-600 leading-relaxed"
                              >
                                {faq.a}
                              </Typography>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="mt-14">
                  <ShareSection />
                </div>
                <div className="mt-10 flex justify-center border-t pt-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 flex items-center gap-2 hover:text-[#1e3a8a] font-bold uppercase text-[10px] tracking-widest transition-all"
                  >
                    ← Back to Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
