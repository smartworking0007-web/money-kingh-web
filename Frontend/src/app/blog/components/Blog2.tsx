"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Folder, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Is there an age limit for a home loan?",
      a: "Generally, anyone between the ages of 21 and 65 can apply. Ideally, the loan tenure should end before your retirement to ensure easy repayments.",
    },
    {
      q: "Q2. Can I save tax on my home loan?",
      a: "Absolutely. Under Section 80C (for principal) and Section 24(b) (for interest), you can claim significant deductions, making your home loan a great tax-saving tool.",
    },
    {
      q: "Q3. How long does the approval process take?",
      a: "With organized documents, a sanction letter can be issued within 5 to 10 working days. The final disbursement happens once the property's legal and technical checks are cleared.",
    },
    {
      q: "Q4. Which is the best platform for home loans in India in 2026?",
      a: (
        <div className="space-y-4 mt-2 text-left">
          <Typography variant="b1" className="text-gray-700">
            • <strong>Money King Financial:</strong> Best for personalized
            matching, end-to-end documentation support, and high approval rates
            for complex profiles.
          </Typography>
          <Typography variant="b1" className="text-gray-700">
            • <strong>SBI Home Loans:</strong> Best for those looking for the
            absolute lowest processing fees and long-term transparency.
          </Typography>
          <Typography variant="b1" className="text-gray-700">
            • <strong>HDFC/ICICI Bank:</strong> Best for tech-savvy borrowers
            looking for a fast, paperless, and fully digital experience.
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
            title="Stop Renting, Start Owning: The 2026 Blueprint to Your First Home Loan"
            category="HOME LOAN"
            author="Sumit Mishra"
            date="April 30, 2026"
            image="/images/blog/blog-2.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6 text-left">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-2.jpeg"
                  alt="dream house so get home loan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase text-left"
                >
                  Stop Renting, Start Owning: The 2026 Blueprint to Your First
                  Home Loan
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">April 30, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Home Loan</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed text-left"
                >
                  Owning a home in 2026 is easier than ever! Discover expert
                  home loan secrets, interest rate hacks, and how Money King
                  Financial can accelerate your approval process for a
                  stress-free journey.
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      The Dream of Home Ownership: More Than Just Four Walls
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      A home isn t just built with bricks and mortar; it’s built
                      with your hard work, sacrifices, and aspirations. In 2026,
                      owning a home is more than just finding a place to live—it
                      is a powerful Financial Statement and a cornerstone of
                      personal security. Securing the right home loan is an art.
                      It requires moving beyond just applying to strategizing.
                      With the right planning, you can save lakhs of rupees in
                      interest over the years and turn a massive liability into
                      a manageable investment.
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      Step 1: Polish Your Credit Profile for VIP Treatment
                    </Typography>
                    <Typography
                      variant="s2"
                      className="font-bold mb-2 text-left"
                    >
                      Lenders look at your Financial Integrity:
                    </Typography>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700 text-left">
                      <li>
                        <Typography variant="b1">
                          <strong>The Magic Number:</strong> While banks accept
                          lower, a CIBIL score of 750+ acts like a VIP pass,
                          unlocking the lowest interest rates.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="b1">
                          <strong>Maintain a Clean History:</strong> Avoid even
                          a single missed EMI or credit card payment for at
                          least 12 months before applying.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="b1">
                          <strong>Debt-to-Income Balance:</strong> Closing small
                          loans boost your eligibility for a larger loan.
                        </Typography>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      Step 2: Strategic Budgeting—Does Your Pocket Match Your
                      Vision?
                    </Typography>
                    <Typography
                      variant="s2"
                      className="font-bold mb-2 text-left"
                    >
                      Account for the Hidden Costs:
                    </Typography>
                    <Typography variant="b1" className="text-gray-700 mb-4">
                      Always account for the hidden 15% like Registration, Stamp
                      Duty, society deposits, and interior work. Paying even 5%
                      extra as a down payment drastically reduces your
                      principal, saving massive interest costs over a 20-year
                      tenure.
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      Step 3: Choosing the Right Interest Rate
                    </Typography>
                    <Typography variant="b1" className="text-gray-700">
                      Most borrowers in 2026 choose Floating Rates linked to
                      external benchmarks. Never settle for the first quote. A
                      tiny 0.1% difference can save you ₹1-2 lakhs over 20
                      years.
                    </Typography>
                  </div>

                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 text-left">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Step 4: Documentation Checklist for Speed
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <Typography variant="s2" className="font-bold">
                          Income Proof:
                        </Typography>
                        <Typography variant="b2" className="text-gray-600">
                          Salaried: Last 3 months slips, Form 16, and 6 months
                          bank statements. Self-Employed: Last 3 years audited
                          ITR.
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="s2" className="font-bold">
                          Property & Legal:
                        </Typography>
                        <Typography variant="b2" className="text-gray-600">
                          Original Title Deeds, NOC from builder, and
                          government-approved building maps.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400 font-bold text-left">
                    Premium Tip: Always secure a Pre-Approved Home Loan before
                    house hunting to give you the upper hand in negotiations!
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      Why is Money King Financial your Best Bet?
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      At Money King Financial, we act as your personal financial
                      concierge. We compare top-tier lenders like SBI, HDFC,
                      ICICI, and Axis to find the specific scheme that fits your
                      unique profile. We handle the paperwork and ensure your
                      journey to homeownership is as smooth as possible.
                    </Typography>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography
                        variant="h5"
                        className="text-white mb-2 font-bold uppercase"
                      >
                        Start Your Home Journey
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-100 opacity-80"
                      >
                        Get expert advice and fast approvals for your dream
                        home.
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
                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-white transition-colors"
                          >
                            <Typography
                              variant="s2"
                              className="font-bold text-gray-900 leading-tight text-left"
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
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300 text-left">
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

                <div className="mt-10 text-left">
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
