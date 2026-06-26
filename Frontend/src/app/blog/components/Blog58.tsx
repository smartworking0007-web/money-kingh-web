"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog58 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="TDS on Salary: How Does Your Employer Calculate It? (FY 2026-27 Guide)"
            category="TAXATION"
            author="Sumit Mishra"
            date="June 26, 2026"
            image="/images/blog/blog-58.jpeg"
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
                  src="/images/blog/blog-58.jpeg"
                  alt="TDS on salary deduction in India for 2026."
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
                  TDS on Salary: How Does Your Employer Calculate It?
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 27, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Every month, when you look at your payslip, one line item
                    often catches the eye: <strong>TDS</strong>. While it stands
                    for Tax Deducted at Source, the actual calculation behind
                    that number can feel like a black box. Understanding this
                    process under Section 192 of the Income Tax Act is vital for
                    managing your cash flow.
                  </p>

                  <h2>1. What is TDS on Salary?</h2>
                  <p>
                    TDS on salary is a pay-as-you-earn mechanism. Instead of
                    paying your entire annual tax liability in one lump sum, the
                    government mandates your employer to deduct a portion
                    monthly. Under Section 192, your employer must estimate your
                    annual income, apply the tax rates of your chosen regime,
                    and deduct tax proportionately.
                  </p>

                  <h2>2. The 6-Step Calculation Process</h2>
                  <ol>
                    <li>
                      <strong>Estimating Gross Annual Income:</strong> HR
                      computes your CTC, including Basic Salary, Bonuses,
                      Incentives, and perquisites (like car facilities).
                    </li>
                    <li>
                      <strong>Applying Exemptions:</strong> Subtracting Section
                      10 exemptions such as HRA, Leave Travel Allowance (LTA),
                      and the standard deduction of ₹75,000.
                    </li>
                    <li>
                      <strong>Considering Tax-Saving Declarations:</strong> If
                      you choose the Old Regime, investment declarations (80C,
                      80D) are factored in.
                    </li>
                    <li>
                      <strong>Determining Taxable Income:</strong> Choosing
                      between Old or New Regime based on your preference.
                    </li>
                    <li>
                      <strong>Applying Slabs & Cess:</strong> Applying FY
                      2026-27 tax rates plus the 4% Health and Education Cess.
                    </li>
                    <li>
                      <strong>Monthly Deduction:</strong> The annual liability
                      is divided by the remaining months of the fiscal year.
                    </li>
                  </ol>

                  <h2>3. FY 2026-27 Income Tax Slabs (New Regime)</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Income Range</th>
                          <th className="border p-2">Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Up to ₹4,00,000</td>
                          <td className="border p-2">Nil</td>
                        </tr>
                        <tr>
                          <td className="border p-2">₹4L – ₹8L</td>
                          <td className="border p-2">5%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">₹8L – ₹12L</td>
                          <td className="border p-2">10%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">₹12L – ₹16L</td>
                          <td className="border p-2">15%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">₹16L – ₹20L</td>
                          <td className="border p-2">20%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">₹20L – ₹24L</td>
                          <td className="border p-2">25%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Above ₹24,00,000</td>
                          <td className="border p-2">30%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>4. Why Does My TDS Change Mid-Year?</h2>
                  <ul>
                    <li>
                      <strong>Bonuses/Increments:</strong> Sudden income spikes
                      require the payroll system to adjust the remaining tax
                      burden.
                    </li>
                    <li>
                      <strong>Proof Submission:</strong> Failing to submit
                      investment proofs on time may lead the system to ignore
                      deductions, causing a higher monthly tax spike.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: What if too much TDS is deducted?</strong>
                        <br />
                        TDS is an estimate. If you overpay, you will receive the
                        excess amount as a tax refund when you file your ITR at
                        year-end.
                      </li>
                      <li>
                        <strong>Q: How do I verify my TDS?</strong>
                        <br />
                        Check your Form 26AS or the Annual Information Statement
                        (AIS) on the Income Tax portal to see exactly what has
                        been deposited for you.
                      </li>
                      <li>
                        <strong>Q: Can I change my tax regime?</strong>
                        <br />
                        Changing within the payroll system depends on your
                        company s policy, but you are always free to choose the
                        most beneficial regime when filing your personal ITR.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Need Professional Tax Guidance?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Confused about which tax regime saves you more? Contact our
                    tax planning desk today for a detailed analysis of your
                    annual liability and investment strategy.
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
