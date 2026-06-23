"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog54 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Surrendering Life Insurance Policy in India: What You Need to Know After the New IRDAI Rules"
            category="INSURANCE"
            author="Sumit Mishra"
            date="June 21, 2026"
            image="/images/blog/blog-54.jpeg"
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
                  src="/images/blog/blog-54.jpeg"                     
                  alt="An analytical document review highlighting the process of surrendering life insurance policy in India on a clean office desk background."                          
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
                  Surrendering Life Insurance Policy in India: What You Need to
                  Know After the New IRDAI Rules
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 21, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Terminating a life insurance policy before its maturity is a            
                    major financial decision. Before you walk into an insurance                 
                    branch to submit a surrender form, it is absolutely crucial                    
                    to understand the new regulatory rules, tax traps, and                     
                    absolute loss parameters.                    
                  </p>

                  <h2>1. The Core Concept: What is Surrender Value?</h2>
                  <p>
                    When you voluntarily terminate a savings-linked policy
                    before maturity, the insurer returns a lump-sum amount
                    called the <strong>Surrender Value</strong>. Note: This
                    applies strictly to traditional products; Pure Term
                    Insurance plans offer no surrender value.
                  </p>

                  <ul>
                    <li>
                      <strong>Guaranteed Surrender Value (GSV):</strong> A fixed
                      minimum percentage based on premiums paid. It is very low
                      in early years.
                    </li>
                    <li>
                      <strong>Special Surrender Value (SSV):</strong> Calculated
                      based on paid-up sum assured, accumulated bonuses, and
                      market factors; usually yields a higher payout than GSV.
                    </li>
                  </ul>

                  <h2>2. Deconstructing the New IRDAI Rules</h2>
                  <p>
                    Regulatory authorities have introduced massive relief
                    regarding early exits. Under the new 1-year exit norms, if a
                    policyholder pays just{" "}
                    <strong>1 full year s premium</strong>, they become eligible
                    to claim a Special Surrender Value (SSV). While early
                    surrender still attracts charges, the zero refund trap for
                    policies exited before 2 years has been eliminated.
                  </p>

                  <h2>3. The Big Tax Traps</h2>
                  <ul>
                    <li>
                      <strong>Section 80C Reversal Trap:</strong> If you
                      surrender before the minimum lock-in (2 years for
                      traditional plans, 5 years for ULIPs), the tax deductions
                      claimed in previous years will be added to your current
                      income and taxed at your slab rate.
                    </li>
                    <li>
                      <strong>The ₹5 Lakh Premium Limit:</strong> For policies
                      issued after April 1, 2023, if your annual premium exceeds
                      ₹5 Lakh (or ₹2.5 Lakh for ULIPs), the payout is not
                      entirely tax-free under Section 10(10D).
                    </li>
                  </ul>

                  <h2>4. Policy Surrender Process</h2>
                  <ol>
                    <li>
                      <strong>Collect Documents:</strong> Gather original policy
                      bond, cancelled cheque, [Aadhaar Redacted] copy, and PAN
                      card.
                    </li>
                    <li>
                      <strong>Fill Form:</strong> Download the official
                      Surrender Discharge Voucher from your insurer s portal.
                    </li>
                    <li>
                      <strong>Submission:</strong> Physical submission of the
                      original bond at the home branch is mandatory.
                    </li>
                    <li>
                      <strong>Settlement:</strong> Funds are credited via NEFT
                      within 7 to 10 working days.
                    </li>
                  </ol>

                  <h2>5. The Verdict: Alternatives to Surrendering</h2>
                  <p>
                    Surrendering should be a last resort. Consider these
                    alternatives:
                  </p>
                  <ul>
                    <li>
                      <strong>Convert to Paid-Up:</strong> Stop paying premiums,
                      but keep the insurance alive with reduced death and
                      maturity benefits.
                    </li>
                    <li>
                      <strong>Loan Against Policy:</strong> Take a low-interest
                      loan against your accumulated surrender value if you need
                      temporary cash, keeping your life cover intact.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Is TDS deducted on surrender value?</strong>
                        <br />
                        Yes, if the payout doesn t qualify for tax-free
                        exemption and exceeds ₹1 Lakh, insurers may deduct 5%
                        TDS on the income portion.
                      </li>
                      <li>
                        <strong>Q: Can I surrender entirely online?</strong>
                        <br />
                        Most insurers require a physical visit to the home
                        branch to submit the original policy bond for security
                        reasons.
                      </li>
                      <li>
                        <strong>Q: Paid-up vs. Surrender?</strong>
                        <br />
                        Paid-up is usually better if you want to stop the
                        financial burden of premiums while keeping your
                        insurance protection and bonuses secure.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Optimize Your Wealth Portfolio
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Are your old insurance policies slowing down your wealth
                    creation goals? Connect with our wealth optimization desk
                    today for a personalized financial audit.
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
