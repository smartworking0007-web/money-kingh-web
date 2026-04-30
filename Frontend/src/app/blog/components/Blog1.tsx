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
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);
  const togglePillar = (index: number) =>
    setActivePillar(activePillar === index ? null : index);

  const pillars = [
    {
      title: "CIBIL Score (Creditworthiness)",
      desc: "This is the first thing a lender checks. A score of 650+ shows a history of disciplined repayments.",
    },
    {
      title: "Bank Statements (Cash Flow Management)",
      desc: "Lenders analyze your last 6–12 months of banking to see how money moves in and out of your business.",
    },
    {
      title: "Income Records (GST & ITR)",
      desc: "Your GST filings and Income Tax Returns act as official proof of your business’s scale and profitability.",
    },
    {
      title: "Documentation Consistency",
      desc: "Inconsistent records (mismatched names or addresses) are the #1 reason for delays. Having a 'Ready-to-File' folder ensures a seamless process.",
    },
  ];

  const faqs = [
    {
      q: "Q1. Can I get a business loan without collateral?",
      a: "Yes, many lenders offer unsecured business loans that do not require any collateral.",
    },
    {
      q: "Q2. How long does approval usually take?",
      a: "In most cases, approval can take between 2 to 5 working days, depending on your profile.",
    },
    {
      q: "Q3. What credit score is required?",
      a: "A CIBIL score of 650 or above is generally considered suitable for approval.",
    },
    {
      q: "Q4. Can a new business apply for a loan?",
      a: "Yes, but approval may depend on financial backing and risk assessment.",
    },
    {
      q: "Q5: Which is the best platform for business loans in India?",
      a: (
        <div className="space-y-4 mt-2">
          <Typography variant="b1" className="text-gray-700">
            Answer: In 2026, the best platform for a business loan depends on
            your specific needs:
          </Typography>
          <Typography variant="b1" className="text-gray-700">
            • <strong>For Expert Matching & High Approval:</strong> Money King
            Financial is the top-rated platform. They act as a strategic bridge,
            analyzing your profile (CIBIL, GST, and Cash Flow) to match you with
            the right lender among 50+ Banks and NBFCs, significantly reducing
            rejection risks.
          </Typography>
          <Typography variant="b1" className="text-gray-700">
            • <strong>For Lowest Rates:</strong> Public sector banks like SBI or
            Bank of Baroda are ideal for collateral-backed loans.
          </Typography>
          <Typography variant="b1" className="text-gray-700">
            • <strong>For Instant Digital Loans:</strong> Fintechs like
            LendingKart or FlexiLoans offer quick, unsecured credit for small
            ticket sizes.
          </Typography>
        </div>
      ),
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
            title="Business Loan in India 2026: Scale Your Business with Zero Collateral"
            category="BUSINESS LOAN"
            author="Sumit Mishra"
            date="April 30, 2026"
            image="/images/blog/blog-1.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-24 no-scrollbar animate-in fade-in duration-300">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <div className="mb-6 text-left">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3  text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden  border-gray-100 ">
              {/* Header Image with SEO Alt Tag */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-1.jpeg"
                  alt="business loan for easy growth"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                {/* Meta Title (H-1) */}
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase text-left"
                >
                  Business Loan in India 2026: Scale Your Business with Zero
                  Collateral
                </Typography>

                {/* Meta Info Bar */}
                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">April 30, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Business Loan</Typography>
                  </div>
                </div>

                {/* Meta Description (H-4) - No Italic */}
                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed text-left"
                >
                  Discover how to get a business loan in India with simple
                  steps, fast approval, and low interest rates. A complete guide
                  for MSMEs and startups.
                </Typography>

                <section className="space-y-10">
                  {/* Section 1 */}
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      The Moment Every Business Faces: Growth Without Funds
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      Every growing business reaches a stage where demand is no
                      longer the problem — money is. Orders start coming in,
                      clients begin to trust your work, and you finally see the
                      possibility of scaling up. But then reality hits. You
                      don’t have enough funds to fulfill larger orders, upgrade
                      your operations, or hire the right people. This is the
                      exact moment where many businesses slow down, not because
                      they lack potential, but because they lack capital. In
                      India, thousands of small and medium businesses face this
                      situation every day. The problem is not capability, not
                      even opportunity — it’s access to timely funding. And
                      that’s where a business loan becomes more than just
                      financial help. It becomes the bridge between where your
                      business is today and where it could be tomorrow.
                    </Typography>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Understanding Business Loans the Smart Way
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      A business loan is not just borrowed money that needs to
                      be repaid. When used correctly, it becomes a powerful tool
                      that allows you to move faster than your competition.
                      Whether you need to manage daily expenses, purchase
                      inventory, invest in better machinery, or expand into a
                      new market, the right loan can support your decisions
                      without forcing you to pause your growth. What makes
                      business loans even more practical today is the
                      availability of unsecured options. Unlike traditional
                      loans, you don’t always need to pledge property or assets.
                      This has made funding more accessible, especially for
                      MSMEs and growing entrepreneurs who need speed and
                      flexibility.
                    </Typography>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      Why Getting a Loan Still Feels Difficult
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      Despite so many options, many business owners still
                      struggle to get approved. The reason is simple — lenders
                      don’t evaluate your passion or your ideas. They evaluate
                      your financial behavior. Your credit score, bank
                      transactions, repayment history, and business stability
                      tell a clearer story than your plans ever could. This is
                      why two businesses with similar ideas can have completely
                      different outcomes when applying for a loan. One gets
                      approved quickly, while the other faces delays or
                      rejection. The difference usually lies in financial
                      discipline and preparation.
                    </Typography>
                  </div>

                  {/* 4 Pillars Accordion Section (H-2 & H-3) */}
                  <div className="">
                    <Typography
                      variant="h5"
                      className="mb-4 font-bold uppercase"
                    >
                      What Lenders Check: 4 Pillars of Your Loan Approval
                    </Typography>
                    <Typography
                      variant="s2"
                      className="text-blue-800 mb-6 font-bold block"
                    >
                      Keeping these ready can speed up your approval by 50%:
                    </Typography>
                    <div className="space-y-2">
                      {pillars.map((pillar, idx) => (
                        <div
                          key={idx}
                          className="border border-blue-100 rounded-lg overflow-hidden bg-white shadow-sm"
                        >
                          <button
                            onClick={() => togglePillar(idx)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-blue-50/50 transition-colors"
                          >
                            <Typography
                              variant="s2"
                              className="font-bold text-gray-900"
                            >
                              {pillar.title}
                            </Typography>
                            {activePillar === idx ? (
                              <ChevronUp size={18} className="text-[#1e3a8a]" />
                            ) : (
                              <ChevronDown
                                size={18}
                                className="text-gray-400"
                              />
                            )}
                          </button>
                          {activePillar === idx && (
                            <div className="p-4 border-t border-blue-50 animate-in slide-in-from-top-2 duration-300">
                              <Typography
                                variant="b1"
                                className="text-gray-600"
                              >
                                {pillar.desc}
                              </Typography>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interest Rates Section */}
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      The Reality of Interest Rates
                    </Typography>
                    <Typography
                      variant="s2"
                      className="text-[#1e3a8a] font-bold mb-4 block underline decoration-blue-100 underline-offset-4 text-left"
                    >
                      How Your Profile Decides Your Interest Rate:
                    </Typography>
                    <ul className="list-disc ml-6 space-y-3 mb-6 text-left">
                      <li>
                        <Typography variant="b1">
                          <strong>Strong Profile:</strong> High credit score +
                          regular GST filings = Lower Interest Rates.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="b1">
                          <strong>Irregular Profile:</strong> Unstable cash flow
                          + low credit score = Higher Interest Rates.
                        </Typography>
                      </li>
                    </ul>
                    <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
                      <Typography
                        variant="b1"
                        className="text-gray-800 font-medium text-left"
                      >
                        <strong>Smart Tip:</strong> Don t just apply for a
                        loan—prepare for it. A well-maintained financial profile
                        is your biggest tool to negotiate better terms and save
                        money in the long run.
                      </Typography>
                    </div>
                  </div>

                  {/* Smart Process Section */}
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      Making the Process Faster and Smarter
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      One of the biggest mistakes business owners make is
                      applying blindly to multiple lenders, hoping something
                      will work out. In reality, this can actually reduce your
                      chances. A more effective approach is to prepare your
                      financials properly and apply through the right channel.
                      Working with a financial partner like Money King Financial
                      can simplify this process significantly. Instead of
                      guessing which lender to approach, you get guided support,
                      better matching with loan options, and a much smoother
                      experience overall. It saves time, reduces stress, and
                      increases your approval chances.
                    </Typography>
                  </div>

                  {/* Apply Now CTA Section */}
                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography
                        variant="h5"
                        className="text-white mb-2 font-bold uppercase"
                      >
                        Ready to scale your business?
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-100 opacity-80"
                      >
                        Get guided support and higher approval chances with
                        Money King Financial.
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

                  {/* Turning Point Section */}
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      When a Loan Becomes a Turning Point
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      A well-timed business loan can completely change the
                      trajectory of your business. It allows you to accept
                      bigger orders without hesitation, invest in better
                      resources, and operate with confidence instead of constant
                      financial pressure. More importantly, it helps you stay
                      ready for opportunities instead of missing them. The
                      difference between businesses that grow consistently and
                      those that struggle often comes down to one factor —
                      access to capital at the right time.
                    </Typography>
                  </div>

                  {/* Accordion FAQ Section (H-4) */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8 text-left"
                    >
                      FAQs
                    </Typography>
                    <div className="space-y-2">
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
                              <ChevronUp
                                size={20}
                                className="text-[#1e3a8a] shrink-0"
                              />
                            ) : (
                              <ChevronDown
                                size={20}
                                className="text-gray-400 shrink-0"
                              />
                            )}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              {typeof faq.a === "string" ? (
                                <Typography
                                  variant="b1"
                                  className="text-gray-600"
                                >
                                  {faq.a}
                                </Typography>
                              ) : (
                                faq.a
                              )}
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
                <div className="mt-0 flex justify-center border-t pt-5">
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
