"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog65 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="5 Everyday Ways to Manage Your Money for Financial Freedom"
            category="PERSONAL FINANCE"
            author="Sumit Mishra"
            date="July 06, 2026"
            image="/images/blog/blog-65.jpg"
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
                  src="/images/blog/blog-65.jpg"
                  alt="How to save money with money king guidance"
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
                  5 Everyday Ways to Manage Your Money for Financial Freedom
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 06, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Effective money management is often misunderstood as a
                    complex, numbers-heavy discipline reserved for accountants
                    and high-net-worth individuals. In reality, financial
                    wellness is not about being a math genius; it is about
                    building small, consistent habits that create long-term
                    stability and security.
                  </p>

                  <h2>1. Track Every Expense: The Power of Mindful Spending</h2>
                  <p>
                    The first and most critical rule of money management is
                    absolute awareness. Many operate on a balance check
                    system, spending based on what is available in their bank
                    account—a recipe for financial leakage. By tracking every
                    transaction, you create a psychological feedback loop called
                    mindful spending, revealing hidden leaks where small,
                    mindless purchases compound into thousands lost each year.
                  </p>

                  <h2>
                    2. Automate Your Savings: Paying Your Future Self First
                  </h2>
                  <p>
                    Human willpower is a finite resource. If you rely on
                    discipline to save at month-end, you will likely fail. Set
                    up an automatic standing instruction that moves a fixed
                    percentage of your paycheck directly into a high-yield
                    savings account the moment your salary hits. This Pay
                    Yourself First principle is the bedrock of wealth creation.
                  </p>

                  <h2>3. The 24-Hour Rule: Mastering the Impulse</h2>
                  <p>
                    Impulse spending is the silent enemy of financial freedom.
                    Implement the 24-Hour Rule: whenever you feel the urge to
                    buy a non-essential item, force yourself to wait a full day.
                    Often, the emotional urge is fleeting. By creating this time
                    buffer, you distinguish between true needs and temporary
                    wants, avoiding buyers remorse.
                  </p>

                  <h2>
                    4. Prioritize High-Interest Debt: The Avalanche Method
                  </h2>
                  <p>
                    Debt, especially high-interest credit card debt, works
                    against you every single day. The Debt Avalanche strategy
                    involves aggressively throwing all your extra funds at the
                    balance with the highest interest rate while paying minimums
                    elsewhere. This minimizes the total interest you pay to the
                    bank and accelerates your journey to liberating your cash
                    flow.
                  </p>

                  <h2>5. Conduct a Weekly Money Review</h2>
                  <p>
                    Money management is not set it and forget it.Take 15 to
                    20 minutes every Sunday to look back at your past week s
                    spending and reconcile it against your budget. This serves
                    as an early-warning system, allowing you to adjust your
                    spending before the month-end surprise occurs.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: How much should I save from my monthly income?
                        </strong>
                        <br />
                        Aim for the 50/30/20 rule: 50% for needs, 30% for wants,
                        and 20% for savings and debt repayment.
                      </li>
                      <li>
                        <strong>
                          Q: Is tracking small expenses really worth the time?
                        </strong>
                        <br />
                        Yes. It creates mindful spending, which is the most
                        effective way to change your relationship with money.
                      </li>
                      <li>
                        <strong>Q: What if I have a variable income?</strong>
                        <br />
                        For variable income, prioritize building a larger
                        emergency fund (minimum 6 months of expenses) to provide
                        a buffer for low-income months.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Start Your Wealth Journey Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    At Money King Financial Services, we help you transform your
                    everyday habits into long-term financial freedom. Connect
                    with our advisors to build a personalized money management
                    system.
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
