"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog112: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Credit Card Interest Rates: How It Is Calculated & Tips to Avoid Finance Charges"
            category="CREDIT CARDS"
            author="Kishan Baranwal"
            date="September 26, 2026"
            image="/images/blog/Blog112.jpg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            
            {/* Back Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Professional Image Preview Section */}
              <div className="w-full flex justify-center bg-slate-50 py-4 px-4 border-b border-gray-100">
                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/blog/Blog112.jpg"
                    alt="credit card"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  <NextLink
                    href="https://moneykingfinancial.com/services/credit/hdfc"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Credit Card Interest Rates
                  </NextLink>
                  : How It Is Calculated &amp; Tips to Avoid Finance Charges
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 26, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Optimized Intro */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Credit card interest (also known as finance charges) is applied when you carry a balance past your billing due date, withdraw cash from an ATM, or pay only the minimum amount due. Rates are quoted as a monthly fee (typically 2.5% to 4%) or as an Annual Percentage Rate (APR), which can range between 30% and 48% per year.
                    </p>
                  </div>

                  <p>
                    Credit cards offer unbeatable convenience, rewards, and cashbacks. However, if used without a clear financial strategy, they can quickly turn into high-cost debt traps due to steep interest rates.
                  </p>

                  <p>
                    Understanding how credit card interest works, how banks compute monthly charges, and how to utilize grace periods effectively can save you thousands of rupees every year. Here is a complete guide to mastering credit card interest calculations and keeping your card interest-free.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    What is Credit Card Interest (APR)?
                  </h2>
                  <p>
                    When you swipe a credit card, you are borrowing short-term capital from the issuing bank. If you repay the entire statement balance on or before the due date, you pay zero interest.
                  </p>
                  <p>
                    However, if you revolve the balance (pay less than the total bill), the bank levies finance charges. Interest rates on credit cards are expressed in two ways:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Monthly Interest Rate:</strong> Ranges between 2.5% and 4.0% per month.
                    </li>
                    <li>
                      <strong>Annual Percentage Rate (APR):</strong> The annualized cost of credit, typically ranging from 30% to 48% per annum.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Rules That Trigger Credit Card Interest
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Paying Only the Minimum Amount Due (MAD):</strong> Paying the minimum amount keeps your card active and avoids late payment fees, but interest continues to accrue daily on the remaining unpaid balance.
                    </li>
                    <li>
                      <strong>Cash Advances (ATM Withdrawals):</strong> Cash withdrawals using a credit card do not enjoy a grace period. Interest starts accumulating from the exact day cash is withdrawn until full repayment.
                    </li>
                    <li>
                      <strong>Loss of Interest-Free Period:</strong> If you carry a roll-over balance from a previous month, new purchases made in the current cycle incur daily interest charges immediately.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How Credit Card Interest Is Calculated (Formula &amp; Example)
                  </h2>
                  <p>
                    Banks calculate credit card interest on a daily average balance method using the following statutory formula:
                  </p>
                  
                  <div className="bg-slate-900 text-white p-4 rounded-lg my-4 text-center font-mono text-sm md:text-base overflow-x-auto">
                    Interest Charged = [ (Number of Days × Transaction Amount × Monthly Interest Rate × 12) / 365 ] + 18% GST
                  </div>

                  <p className="font-semibold text-gray-800">Real-Life Calculation Example:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Transaction Amount: ₹50,000 spent on 1st April</li>
                    <li>Statement Date: 30th April | Due Date: 20th May</li>
                    <li>Monthly Interest Rate: 3.5% (42% Annual APR)</li>
                    <li>Payment Made: ₹5,000 paid on 20th May (Carrying ₹45,000 balance for 30 subsequent days)</li>
                  </ul>
                  
                  <p className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <strong>Monthly Interest:</strong> [ (30 × ₹45,000 × 3.5% × 12) / 365 ] $\approx$ ₹1,553 + 18% GST (₹280) = <strong>₹1,833</strong>
                  </p>
                  <p>
                    In addition, new purchases made during this period accrue daily finance charges until the entire outstanding balance is cleared.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4 Proven Tips to Avoid Paying Credit Card Interest
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Always Pay the &quot;Total Amount Due&quot;:</strong> Never settle for the Minimum Amount Due if you have the funds available.
                    </li>
                    <li>
                      <strong>Convert High Purchases to Low-Cost EMIs:</strong> If you cannot pay a big ticket expense in full, convert the spend into merchant or bank EMIs at lower interest rates (12%–16% p.a.) rather than revolving credit at 42% p.a.
                    </li>
                    <li>
                      <strong>Never Cash-Out from ATMs:</strong> Use debit cards or personal loans for cash emergencies instead of credit card cash advances.
                    </li>
                    <li>
                      <strong>Set Up Auto-Debit:</strong> Link your primary savings account to auto-clear your total monthly credit card bill automatically.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: What is the interest-free grace period on a credit card?</strong>
                        <br />
                        The grace period is the duration between the first day of your billing cycle and the payment due date (usually 45 to 50 days). Purchases made during this period incur no interest provided you pay the entire statement balance by the due date.
                      </li>
                      <li>
                        <strong>Q2: Is GST charged on credit card interest?</strong>
                        <br />
                        Yes, under Indian tax regulations, Goods and Services Tax (GST) at a flat rate of 18% is applicable on all credit card finance charges, processing fees, and late payment penalties.
                      </li>
                      <li>
                        <strong>Q3: Does paying the minimum amount due affect my CIBIL score?</strong>
                        <br />
                        Paying the minimum amount due prevents late fees and protects you from a payment default mark on your credit report. However, carrying high revolving balances increases your Credit Utilization Ratio (CUR), which can gradually lower your credit score over time.
                      </li>
                      <li>
                        <strong>Q4: Can I transfer my high-interest credit card balance to another card?</strong>
                        <br />
                        Yes. You can opt for a Balance Transfer (BT) facility to move your outstanding balance to a new credit card offering a lower promotional interest rate or zero-interest period.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Call To Action Banner */}
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3 font-bold"
                  >
                    Manage Your Cards Smarter with Expert Support
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Explore exclusive credit card options and professional financial solutions with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/credit/hdfc"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    today.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/credit/hdfc"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Get Started
                    </NextLink>
                  </div>
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