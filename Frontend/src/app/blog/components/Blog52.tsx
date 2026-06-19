"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog52 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="What Will Be My Regular Income During Retirement? The Ultimate Blueprint for Passive Paychecks"
            category="RETIREMENT PLANNING"
            author="Shivangi Verma"
            date="June 19, 2026"
            image="/images/blog/blog-52.jpeg"
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
                  src="/images/blog/blog-52.jpeg"
                  alt="A happy senior couple planning their monthly retirement paycheck"
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
                  What Will Be My Regular Income During Retirement? The Ultimate
                  Blueprint for Passive Paychecks
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 19, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    The day you step away from your 9-to-5 job is the day your
                    financial game rules completely change. You stop trading
                    your time for an active salary, but your bills, grocery
                    expenses, medical insurance, and lifestyle desires don t
                    stop. Naturally, the biggest question on everyone s mind is:
                    “What will be my regular income during retirement, and how
                    do I make sure it never runs out?”
                  </p>
                  <p>
                    Many professionals spend decades accumulating wealth without
                    realizing that building a retirement corpus is only half the
                    battle. The real magic lies in transforming that big pile of
                    savings into a smooth, automated, and inflation-protected
                    monthly retirement paycheck.
                  </p>

                  <h2>
                    1. The Retirement Math: How Much Will You Actually Need?
                  </h2>
                  <p>
                    Before calculating what you will receive, you must define
                    what you need to survive comfortably. A very popular
                    baseline in modern financial planning is the 75% Replacement
                    Rule.
                  </p>
                  <h3>Factoring in Silent Enemies: Inflation</h3>
                  <p>
                    Most people assume their post-retirement expenses will match
                    their current lifestyle bills. However, you must account for
                    lifestyle changes and inflation:
                  </p>
                  <ul>
                    <li>
                      <strong>Reduced Overhead:</strong> You won t have daily
                      office commuting costs, professional wardrobe expenses, or
                      children s education fees to manage.
                    </li>
                    <li>
                      <strong>Increased Overhead:</strong> Healthcare, medical
                      insurance premiums, and casual leisure travel costs
                      typically scale upwards as you age.
                    </li>
                    <li>
                      <strong>The Inflation Trap:</strong> If your current
                      household monthly expense is ₹50,000, a conservative 6%
                      annual inflation rate will easily double that requirement
                      in around 12 years.
                    </li>
                  </ul>
                  <p>
                    Therefore, your future target income stream must be built
                    around inflation-adjusted expenses rather than today’s
                    nominal numbers.
                  </p>

                  <h2>2. The 3 Core Regular Income Sources for Retirees</h2>
                  <p>
                    To secure bulletproof financial stability, a robust
                    retirement income planning architecture splits your risk
                    across multiple structural buckets.
                  </p>
                  <h3>Bucket A: Guaranteed Fixed Annuities & Pensions</h3>
                  <p>
                    These are your non-negotiable cash lines. This includes
                    traditional pensions and annuity schemes from insurance
                    providers where you deposit a lump sum in exchange for a
                    guaranteed, lifelong regular paycheck.
                  </p>
                  <h3>
                    Bucket B: Systematic Withdrawal Plans (SWP) from Mutual
                    Funds
                  </h3>
                  <p>
                    An SWP is an absolute game-changer. It automatically
                    liquidates a specific, predefined cash amount from your
                    accumulated mutual fund units every month, while the
                    remaining capital continues to compound, shielding you
                    against long-term inflation.
                  </p>
                  <h3>Bucket C: Low-Risk Fixed Income Vehicles</h3>
                  <p>
                    This includes government-backed Senior Citizen Savings
                    Schemes (SCSS) and high-quality corporate deposits, layered
                    strategically across varying tenures to manage liquidity
                    effectively.
                  </p>

                  <h2>3. How the 4% Safe Withdrawal Rule Works</h2>
                  <p>
                    The 4% Rule states that if you withdraw 4% of your total
                    corpus in your first year of retirement, and then adjust
                    that figure for inflation every year, your funds have an
                    incredibly high probability of lasting a minimum of 30
                    years. For a ₹3 Crore nest egg, this could translate into a
                    steady monthly paycheck of ₹1 Lakh without depleting your
                    primary principal.
                  </p>

                  <h2>
                    4. Pitfalls That Can Destroy Your Post-Retirement Income
                  </h2>
                  <ul>
                    <li>
                      <strong>Dipping into the Nest Egg Too Early:</strong>{" "}
                      Treating retirement accounts as a piggy bank for temporary
                      renovations cripples the power of compounding.
                    </li>
                    <li>
                      <strong>Lacking an Emergency Buffer:</strong> Without a
                      dedicated healthcare reserve, you will be forced to
                      panic-sell investments during market downturns.
                    </li>
                    <li>
                      <strong>Aggressive Cash Hoarding:</strong> Keeping 100% of
                      wealth in low-interest savings accounts guarantees that
                      your purchasing power will erode due to inflation.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Can I rely solely on fixed deposits?</strong>
                        <br />
                        No, relying only on FDs is risky over 30 years as
                        returns rarely beat medical inflation. A blend of FDs
                        and mutual fund SWPs is much healthier.
                      </li>
                      <li>
                        <strong>
                          Q: When should I start retirement planning?
                        </strong>
                        <br />
                        Right now. Starting an SIP at 25 requires only a
                        fraction of the savings needed if you start at 45.
                      </li>
                      <li>
                        <strong>
                          Q: What happens during a stock market crash?
                        </strong>
                        <br />
                        If you keep 3-5 years of expenses in safe, liquid
                        instruments, you can draw your cash flow comfortably
                        without being forced to sell your equity funds while
                        prices are low.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Need Professional Financial Guidance?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    At Money King Financial Services, we specialize in
                    simplifying complex financial decisions. Contact our team
                    today to get a customized roadmap for your financial goals.
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
