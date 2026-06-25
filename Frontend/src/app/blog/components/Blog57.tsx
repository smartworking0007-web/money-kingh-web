"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog57 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The Comprehensive Forensic Audit: How to Avoid Costly Mutual Fund SIP Mistakes"
            category="MUTUAL FUNDS"
            author="Sumit Mishra"
            date="June 25, 2026"
            image="/images/blog/blog-57.jpeg"
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
                  src="/images/blog/blog-57.jpeg"
                  alt="The top mutual fund SIP mistakes to avoid"
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
                  The Comprehensive Forensic Audit: How to Avoid Costly Mutual
                  Fund SIP Mistakes
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 25, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    SIPs are often sold as a set-it-and-forget-it investment,
                    but that is a dangerous narrative. Left unmonitored, your
                    portfolio can develop silent, internal leakages. Over a
                    multi-decade timeline, these microscopic inefficiencies
                    compound in reverse, stripping away tens of lakhs from your
                    net worth.
                  </p>

                  <h2>1. The Legacy Intermediary Trap (Regular vs. Direct)</h2>
                  <p>
                    Running investments through a <strong>Regular Plan</strong>{" "}
                    instead of a <strong>Direct Plan</strong> is the single most
                    destructive error. Regular plans carry built-in commissions
                    for intermediaries, typically 1% to 1.25% annually. On a
                    ₹20,000 monthly SIP over 25 years, this 1.2% leakage can
                    result in a loss of over ₹60 Lakhs due to lost compounding
                    velocity.
                  </p>

                  <h2>2. Portfolio Diworsification</h2>
                  <p>
                    Opening small SIPs across 15-20 different schemes is not
                    diversification—it s diworsification. It increases
                    administrative complexity and active fee costs while
                    diluting your returns. If you hold 4 different Large-Cap
                    funds, they likely hold identical stocks, turning your
                    portfolio into an expensive, inefficient index tracker.
                  </p>

                  <h2>3. The Costly Timing Pitfall</h2>
                  <p>
                    Rupee Cost Averaging only works if you stay the course.
                    Panicked investors who hit Pause SIP during market crashes
                    commit a critical error: they buy at peaks but refuse to
                    accumulate units at the troughs. By stopping during a crash,
                    you eliminate the exact mechanism that makes SIPs effective.
                  </p>

                  <h2>4. The Power of the Step-Up SIP Engine</h2>
                  <p>
                    Keeping your SIP contribution flat for 20 years ignores your
                    career growth and lifestyle inflation. By implementing an{" "}
                    <strong>automated 10% Annual Step-Up</strong>, you can
                    essentially double your final corpus compared to a flat SIP
                    strategy, turning a standard investment habit into an
                    aggressive wealth-generation tool.
                  </p>

                  <h2>5. Dividend (IDCW) vs. Growth</h2>
                  <p>
                    Choosing the IDCW (Dividend) option forces periodic payouts
                    that exit the compounding engine and are taxed at your slab
                    rate. Always opt for the <strong>Growth Option</strong> to
                    keep your returns tax-deferred and compounding internally.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Will I be penalized for switching from Regular to
                          Direct?
                        </strong>
                        <br />
                        Switching is a formal redemption and fresh purchase.
                        Check for exit loads (usually 1% if sold before 365
                        days) and plan the switch in phases to utilize tax
                        exemptions.
                      </li>
                      <li>
                        <strong>Q: How do I identify overlapping funds?</strong>
                        <br />
                        Use online portfolio diagnostic tools to cross-reference
                        the top 10 stock holdings. If overlap exceeds 30-40%,
                        consider consolidating those funds.
                      </li>
                      <li>
                        <strong>
                          Q: Should I pause SIPs during all-time market highs?
                        </strong>
                        <br />
                        No. Trying to time the market defeats the system. Your
                        SIP is engineered to handle cycles—just keep going.
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
                    Are your SIPs slowing down your wealth creation? Connect
                    with our desk today for a personalized financial audit to
                    eliminate structural leakages and maximize your compounding
                    velocity.
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
