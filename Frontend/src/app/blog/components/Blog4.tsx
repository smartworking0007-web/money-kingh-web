"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. What is the ideal CIBIL score for a loan?",
      a: "A score of 750+ is considered the gold standard. It ensures faster loan processing and competitive interest rates.",
    },
    {
      q: "Q2. How can I build a CIBIL score for the first time?",
      a: "The best way is to take a secured credit card against an FD or a small consumer durable loan for electronics.",
    },
    {
      q: "Q3. Does a low CIBIL score stay forever?",
      a: "No. You can improve it by making timely payments and maintaining a low Credit Utilization Ratio over 6-12 months.",
    },
    {
      q: "Q4. How often should I check my CIBIL report?",
      a: "Checking it once every 3 months is ideal to ensure there are no discrepancies or identity thefts.",
    },
    {
      q: "Q5. Can I get a loan from Money King Financial with a low score?",
      a: "At Money King Financial, we analyze your overall profile. We offer expert guidance to help you improve your score while finding the best financial products for your needs.",
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
            title="7 Common CIBIL Score Myths You Must Ignore in 2026"
            category="CREDIT SCORE"
            author="Sumit Mishra"
            date="May 02, 2026"
            image="/images/blog/blog-4.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100">
              {/* Header Image with SEO Alt Tag */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-4.jpeg"
                  alt="Credit Score Myths stop you from getting a loan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                {/* Meta Title (H-1 style Title) */}
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase"
                >
                  7 Common CIBIL Score Myths You Must Ignore in 2026
                </Typography>

                {/* Meta Info Bar */}
                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 02, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Credit Score</Typography>
                  </div>
                </div>

                {/* Meta Description (H-4 style) */}
                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  New to credit? Don&apos;t let common CIBIL score myths stop
                  you from getting a loan. Discover the truth behind credit
                  score misconceptions in 2026 for faster approvals.
                </Typography>

                <section className="space-y-10">
                  {/* Introduction (H-3 style) */}
                  <div>
                    <Typography
                      variant="s1"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Introduction
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      Starting your financial journey can be overwhelming.
                      Whether you are applying for a Business Loan or your first
                      credit card, your &quot;CIBIL Score&quot; is the most
                      critical factor. However, the internet is full of
                      &quot;advice&quot; that is often more fiction than fact.
                      To maintain a healthy financial profile at Money King
                      Financial, you need to separate reality from rumors.
                    </Typography>
                  </div>

                  {/* Myths Grid */}
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <Typography variant="s1" className="font-bold mb-2">
                        1. Myth: Checking Your Own CIBIL Score Will Lower It
                      </Typography>
                      <Typography variant="b1" className="text-gray-700">
                        <strong>The Truth:</strong> When you check your own
                        score, it is a Soft Inquiry. Soft inquiries have zero
                        impact on your credit score.
                      </Typography>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <Typography variant="s1" className="font-bold mb-2">
                        2. Myth: A High Salary Equals a High CIBIL Score
                      </Typography>
                      <Typography variant="b1" className="text-gray-700">
                        <strong>The Truth:</strong> CIBIL cares about your
                        repayment behavior, not your income. Reliability is more
                        important than your bank balance.
                      </Typography>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <Typography variant="s1" className="font-bold mb-2">
                        3. Myth: Having No Credit History is a Good Thing
                      </Typography>
                      <Typography variant="b1" className="text-gray-700">
                        <strong>The Truth:</strong> Being credit-invisible makes
                        it harder to get big loans. If your report shows 0 or -1,
                        lenders have no data to trust you.
                      </Typography>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <Typography variant="s1" className="font-bold mb-2">
                        4. Myth: Closing Old Credit Cards Boosts Your Score
                      </Typography>
                      <Typography variant="b1" className="text-gray-700">
                        <strong>The Truth:</strong> Closing an old account
                        reduces your credit age. Keep your oldest cards active
                        to maintain a higher score.
                      </Typography>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <Typography variant="s1" className="font-bold mb-2">
                        5. Myth: Paying Off Debt Will Instantly Fix Your Score
                      </Typography>
                      <Typography variant="b1" className="text-gray-700">
                        <strong>The Truth:</strong> CIBIL usually takes 30 to 90
                        days for banks to report cleared dues. Patience and
                        consistency are key.
                      </Typography>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <Typography variant="s1" className="font-bold mb-2">
                        6. Myth: Debit Card Usage Affects Your CIBIL Score
                      </Typography>
                      <Typography variant="b1" className="text-gray-700">
                        <strong>The Truth:</strong> Debit cards use your money.
                        Since there is no credit involved, it has no impact on
                        your credit report.
                      </Typography>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <Typography variant="s1" className="font-bold mb-2">
                        7. Myth: Your Spouse’s Credit Score Can Impact Yours
                      </Typography>
                      <Typography variant="b1" className="text-gray-700">
                        <strong>The Truth:</strong> Credit reports are tied to
                        individual PAN cards. However, in Joint Loans, both
                        scores are checked.
                      </Typography>
                    </div>
                  </div>

                  {/* Apply Now CTA Section */}
                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography
                        variant="h5"
                        className="text-white mb-2 font-bold uppercase"
                      >
                        Boost Your Financial Future
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-100 opacity-80"
                      >
                        Get expert guidance to build your score and unlock the
                        best loan offers.
                      </Typography>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto">
                      <Button
                        size="lg"
                        className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-12 py-6 w-full font-bold text-lg shadow-lg"
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </div>

                  {/* Accordion FAQ Section */}
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
                          className="border border-gray-100 rounded-lg overflow-hidden shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-white transition-colors"
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
                                className="text-gray-600"
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

                <div className="mt-10">
                  <ShareSection />
                </div>
                <div className="mt-8 flex justify-center border-t pt-5">
                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 cursor-pointer hover:text-[#1e3a8a]"
                  >
                    ← Back to Article List
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};