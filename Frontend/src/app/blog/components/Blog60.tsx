"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog60 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="9 Major Credit Card Rule Changes in India (2026): What You Need to Know"
            category="REGULATORY UPDATES"
            author="Sumit Mishra"      
            date="June 29, 2026"          
            image="/images/blog/blog-60.jpeg"
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
                  src="/images/blog/blog-60.jpeg"
                  alt="A summary infographic of the 9 key credit card changes"
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
                  9 Major Credit Card Rule Changes in India (2026)
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 29, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    As of April 2026, the Indian credit card industry has
                    undergone significant regulatory updates to enhance
                    security, tax transparency, and consumer protection. These
                    updates aim to digitize financial accountability and
                    safeguard cardholders.
                  </p>

                  <h2>The 9 Key Regulatory Changes</h2>
                  <ol className="space-y-4">
                    <li>
                      <strong>Mandatory 2FA:</strong> Every transaction, online
                      or POS, now requires two-factor authentication (PIN,
                      biometrics, or dynamic OTP) to prevent unauthorized use.
                    </li>
                    <li>
                      <strong>Income Tax Scrutiny:</strong> Annual credit card
                      spending disproportionately higher than your reported ITR
                      income will now automatically trigger automated flags and
                      potential tax inquiries.
                    </li>
                    <li>
                      <strong>Mandatory PAN:</strong> A valid PAN is now a
                      non-negotiable requirement for all new applications,
                      preventing identity fraud.
                    </li>
                    <li>
                      <strong>Statements as Address Proof:</strong> Credit card
                      statements (less than 3 months old) from scheduled banks
                      are now officially recognized for government
                      documentation.
                    </li>
                    <li>
                      <strong>Corporate Card Tax:</strong> Personal expenses
                      charged to corporate credit cards are categorized as
                      taxable perquisites and will be added to your gross
                      salary, increasing tax liability.
                    </li>
                    <li>
                      <strong>Weekly Bureau Reporting:</strong> Reporting to
                      credit bureaus is now weekly, meaning payment misses hit
                      your score in days rather than weeks.
                    </li>
                    <li>
                      <strong>Fraud Compensation:</strong> The Zero Liability
                      framework mandates banks to provide provisional credit
                      within 5 working days for reported fraud during
                      investigations.
                    </li>
                    <li>
                      <strong>Explicit Consent for Limit Increases:</strong>{" "}
                      Banks can no longer auto-upgrade your credit limit without
                      your positive, recorded digital or written consent.
                    </li>
                    <li>
                      <strong>Transparency in Charges:</strong> Penalties cannot
                      be compounded, and banks must close accounts within 7
                      working days, failing which they face a penalty of
                      ₹500/day.
                    </li>
                  </ol>

                  <h2>Why These Changes Matter</h2>
                  <p>
                    These regulations shift India toward a more transparent and
                    safer digital economy. While these changes may seem like
                    hurdles, they significantly reduce the risk of identity
                    theft and predatory lending.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Do these rules apply to my existing cards?
                        </strong>
                        <br />
                        Yes, most rules—especially 2FA and billing
                        transparency—apply to all active credit cards.
                      </li>
                      <li>
                        <strong>Q: Can I refuse a limit increase?</strong>
                        <br />
                        Yes, banks must obtain your explicit consent. You can
                        decline any offered increase in your banking app.
                      </li>
                      <li>
                        <strong>
                          Q: What is the benefit of weekly reporting?
                        </strong>
                        <br />
                        It forces better financial discipline and allows for
                        faster recovery of your credit score once you clear your
                        high-interest balances.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Stay Financially Compliant
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Confused about your new tax liabilities or credit card
                    hygiene? Contact our team today to ensure your financial
                    habits remain compliant and optimized for 2026.
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
