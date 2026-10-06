"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog115: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Credit Card Guide 2026: How to Choose, Apply & Build Your CIBIL Score"
            category="CREDIT CARDS"
            author="Kishan Baranwal"
            date="October 1, 2026"
            image="/images/blog/Blog-115.jpg"
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
                    src="/images/blog/Blog-115.jpg"
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
                    Credit Card Guide 2026
                  </NextLink>
                  : How to Choose, Apply &amp; Build Your CIBIL Score
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 6, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Optimized Intro */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A credit card is a financial instrument issued by banks and financial institutions that allows cardholders to borrow funds up to a pre-approved credit limit for daily transactions, bill payments, and shopping. Credit cards offer an interest-free repayment window ranging from 45 to 50 days, reward points on spending, and an effective opportunity to build a strong credit history when used responsibly.
                    </p>
                  </div>

                  <p>
                    Credit cards have evolved from luxury payment tools into essential daily financial assets in India. Whether you want to earn cashback on groceries, access complimentary airport lounges, cover emergency medical expenses, or build a strong CIBIL score for future home loans, choosing the right credit card makes a significant difference.
                  </p>

                  <p>
                    However, using a credit card without understanding interest structures, billing cycles, and credit utilization can lead to high interest debt traps. Here is everything you need to know to maximize your card benefits while keeping your credit score healthy.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Features of Modern Credit Cards
                  </h2>
                  <p>
                    Understanding these core credit card mechanics ensures maximum savings and smart financial management:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Parameter</th>
                          <th className="border border-gray-200 p-3">Key Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Interest-Free Period</td>
                          <td className="border border-gray-200 p-3">Up to 45 to 50 days (from transaction date to billing due date)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Annual Interest Rate (APR)</td>
                          <td className="border border-gray-200 p-3">30% to 42% per annum (applicable if full balance is not paid)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Credit Limit</td>
                          <td className="border border-gray-200 p-3">Pre-approved limit based on income, employment, and CIBIL score</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Minimum Amount Due</td>
                          <td className="border border-gray-200 p-3">Usually 5% of total bill (clears late fees, but interest applies on remaining)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Core Benefits of Using a Credit Card
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Instant Short-Term Liquidity:</strong> Get up to 50 days of zero-interest credit for personal expenses, travel bookings, and utility bill payments.
                    </li>
                    <li>
                      <strong>Accelerated CIBIL Score Growth:</strong> Regular credit card usage followed by 100% on-time bill payments is the fastest way to boost your credit score above 750.
                    </li>
                    <li>
                      <strong>Rewards, Cashback &amp; Fuel Waivers:</strong> Earn cashback, reward points, air miles, and 1% fuel surcharge waivers on every purchase.
                    </li>
                    <li>
                      <strong>Fraud Protection &amp; Card Control:</strong> Modern credit cards offer instant online locks, transaction limits, and zero-liability protection against unauthorized transactions.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Essential Eligibility Criteria for Credit Card Approval
                  </h2>
                  <p>
                    Banks evaluate key financial and background parameters before issuing a card:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Age Requirement:</strong> Primary applicant must be between 21 and 65 years old.
                    </li>
                    <li>
                      <strong>Income Criteria:</strong> Minimum monthly net income of ₹15,000 to ₹25,000 for salaried employees, or minimum ITR of ₹3 Lakhs for self-employed individuals.
                    </li>
                    <li>
                      <strong>Credit Score:</strong> A CIBIL score of 750 or higher guarantees instant digital approval and higher credit limits. First-time borrowers can apply for FD-backed (secured) credit cards to build credit from scratch.
                    </li>
                    <li>
                      <strong>Document Checklist:</strong> PAN Card, Aadhaar Card, last 3 months&apos; salary slips, and latest 6 months&apos; bank statements.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4 Rules to Avoid Credit Card Debt &amp; Boost Credit Score
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Always Pay the &quot;Total Amount Due&quot;:</strong> Never settle for paying only the &quot;Minimum Amount Due.&quot; Paying less than the full statement balance attracts heavy finance charges (3%–3.5% per month) on the remaining amount.
                    </li>
                    <li>
                      <strong>Keep Credit Utilization Below 30%:</strong> If your credit limit is ₹1,00,000, try to keep your monthly spending under ₹30,000. High credit utilization signals credit hunger to rating bureaus.
                    </li>
                    <li>
                      <strong>Set Up Auto-Debit Reminders:</strong> Avoid missed payment penalties and late fee charges by setting up automated bill payments through your net banking account.
                    </li>
                    <li>
                      <strong>Avoid ATM Cash Withdrawals:</strong> Cash advances from credit card ATMs incur immediate interest charges from day one, along with high cash withdrawal fees.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: What happens if I only pay the Minimum Amount Due on my credit card?</strong>
                        <br />
                        Paying the minimum amount due prevents late payment fees and keeps your card active, but the remaining balance accrues interest rates of 3%–3.5% per month (up to 42% annually) starting from the purchase date.
                      </li>
                      <li>
                        <strong>Q2: Can I get a credit card without a CIBIL score or salary slip?</strong>
                        <br />
                        Yes. You can apply for a Secured Credit Card, which is issued against a Fixed Deposit (FD) pledged with the bank. Secured cards require no income proof and help build a new CIBIL score quickly.
                      </li>
                      <li>
                        <strong>Q3: How does applying for multiple credit cards affect my credit score?</strong>
                        <br />
                        Submitting multiple credit card applications within a short period triggers multiple hard inquiries on your credit report, which can temporarily lower your CIBIL score.
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
                    Apply for HDFC Credit Cards
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Compare the best rewards cards and apply seamlessly with{" "}
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
                      Apply Now
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