"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog66 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Insurance Riders Explained: How These Add-Ons Supercharge Your Coverage"
            category="INSURANCE"
            author="Sumit Mishra"
            date="July 07, 2026"
            image="/images/blog/blog-66.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-66.jpeg"
                  alt="insurance policy with one enhanced by key add-on riders"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4"
                >
                  Insurance Riders Explained: How These Add-Ons Supercharge Your
                  Coverage
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 07, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Most people buy a term insurance plan and believe their job
                    is done. However, a base policy is a one-size-fits-all
                    solution. In the complex landscape of 2026, life is
                    unpredictable. Insurance riders are the architectural
                    adjustments that make your policy robust, ensuring that your
                    family isn t just covered for death, but also for the
                    financial devastation caused by disability or disease.
                  </p>

                  <h2>1. What Exactly is an Insurance Rider?</h2>
                  <p>
                    An insurance rider is a contractual provision that modifies
                    your base policy. Think of your base policy as a smartphone,
                    and riders as the powerful applications you install to make
                    it perform specific tasks. They are relatively inexpensive
                    compared to the base premium but offer disproportionately
                    high protection.
                  </p>

                  <h2>2. The Top 5 Essential Riders</h2>
                  <ul>
                    <li>
                      <strong>Critical Illness Rider:</strong> Pays a lump sum
                      upon the diagnosis of specific illnesses (like cancer or
                      heart disease). This covers medical costs that standard
                      health insurance might miss.
                    </li>
                    <li>
                      <strong>Accidental Death Benefit Rider:</strong> Provides
                      an extra payout on top of the base sum assured if death
                      occurs due to an accident.
                    </li>
                    <li>
                      <strong>
                        Accidental Total & Permanent Disability Rider:
                      </strong>{" "}
                      If you lose the ability to work due to an accident, this
                      provides a payout to replace your lost income.
                    </li>
                    <li>
                      <strong>Waiver of Premium Rider:</strong> Crucial if you
                      are diagnosed with a disability or critical illness; the
                      insurer pays your future premiums, ensuring the policy
                      stays active.
                    </li>
                    <li>
                      <strong>Hospital Cash Rider:</strong> Provides a daily
                      allowance to cover incidental expenses during
                      hospitalization.
                    </li>
                  </ul>

                  <h2>3. How to Choose the Right Riders (Evaluation Matrix)</h2>
                  <p>
                    Don t just add every rider available. Use this framework:
                  </p>
                  <ul>
                    <li>
                      <strong>Gap Analysis:</strong> Does your employer health
                      cover already cover critical illness? If yes, you might
                      not need the rider.
                    </li>
                    <li>
                      <strong>Cost vs. Benefit:</strong> Will the payout cover
                      2–3 years of your salary? If not, consider increasing your
                      base cover instead of buying a rider.
                    </li>
                    <li>
                      <strong>Complexity:</strong> Choose riders that simplify
                      your family s claims experience rather than adding
                      administrative hurdles.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Can I remove a rider later?</strong>
                        <br />
                        Yes, most policies allow you to drop riders at the time
                        of policy renewal.
                      </li>
                      <li>
                        <strong>Q: Do riders affect maturity benefits?</strong>
                        <br />
                        In term plans, there is no maturity benefit. In
                        endowment or ULIPs, riders may impact the final corpus
                        if they have separate charge structures.
                      </li>
                      <li>
                        <strong>Q: Are rider premiums tax-deductible?</strong>
                        <br />
                        Yes, premiums paid for health-related riders often
                        qualify for tax deductions under Section 80D.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Tailor Your Financial Safety Net
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Insurance is about peace of mind. By adding these
                    supercharged add-ons, you guarantee that your financial
                    goals—like your children’s education—remain intact
                    regardless of life’s curveballs. Contact us for a policy
                    audit today.
                  </Typography>
                </div>

                <div className="mt-14">
                  <ShareSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
