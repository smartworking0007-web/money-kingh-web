"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog64 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Is Form 16 Enough to File Your ITR? Here’s What Most Salaried Taxpayers Miss"
            category="TAXATION"
            author="Sumit Mishra"
            date="July 03, 2026"
            image="/images/blog/blog-64.jpeg"
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
                  src="/images/blog/blog-64.jpeg"
                  alt="A checklist infographic comparing Form 16"
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
                  Is Form 16 Enough to File Your ITR? Here’s What Most Salaried
                  Taxpayers Miss
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 03, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Every year, millions of salaried employees in India download
                    their Form 16 and assume their tax work is done. This Form
                    16 Trap is the most common reason for receiving scrutiny
                    notices from the Income Tax Department. While your employer
                    does the heavy lifting by deducting TDS, they do not have a
                    full view of your financial life.
                  </p>

                  <h2>1. Why Form 16 is Just the Starting Point</h2>
                  <p>
                    Form 16 is essentially a report card of your salary income.
                    However, the Income Tax Act requires you to report your{" "}
                    <strong>Total Income</strong> from all sources. If you rely
                    solely on Form 16, you are essentially filing a partial
                    tax return.
                  </p>

                  <h2>2. The Big Five Income Sources You Might Be Missing</h2>
                  <ul>
                    <li>
                      <strong>Bank Interest:</strong> Interest earned on savings
                      accounts and Fixed Deposits (FDs) is fully taxable under
                      Income from Other Sources.
                    </li>
                    <li>
                      <strong>Dividend Income:</strong> Any dividends received
                      from stocks or mutual funds are taxable at your applicable
                      slab rate.
                    </li>
                    <li>
                      <strong>Capital Gains:</strong> Profits from selling
                      property, gold, or stocks must be reported as Short-Term
                      or Long-Term Capital Gains.
                    </li>
                    <li>
                      <strong>Rental Income:</strong> If you own a property and
                      rent it out, that income must be disclosed.
                    </li>
                    <li>
                      <strong>Previous Employment Income:</strong> If you
                      switched jobs, your current employer’s Form 16 may not
                      reflect the full picture.
                    </li>
                  </ul>

                  <h2>3. The Vital Role of Form 26AS and AIS</h2>
                  <p>
                    Before you hit submit, verify these two critical documents:
                  </p>
                  <ul>
                    <li>
                      <strong>Form 26AS:</strong> Your annual tax credit
                      statement, showing all taxes deducted against your [PAN
                      Redacted] by various entities.
                    </li>
                    <li>
                      <strong>Annual Information Statement (AIS):</strong> The
                      IT department s all-seeing eye that tracks high-value
                      credit card spends, interest income, and security
                      transactions. Mismatches here are the primary trigger for
                      automated notices.
                    </li>
                  </ul>

                  <h2>4. A Step-by-Step Filing Strategy</h2>
                  <ol>
                    <li>
                      <strong>Reconcile:</strong> Match TDS in your Form 16 with
                      the data in Form 26AS.
                    </li>
                    <li>
                      <strong>Aggregate:</strong> Calculate interest, dividends,
                      and capital gains.
                    </li>
                    <li>
                      <strong>Claim Missed Deductions:</strong> If you missed
                      declaring investments (PPF, LIC, ELSS) to your employer,
                      you can still claim them directly in your ITR.
                    </li>
                    <li>
                      <strong>Verify:</strong> Always complete the
                      E-Verification process within 30 days of filing.
                    </li>
                  </ol>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Can I claim HRA if I missed giving rent receipts to
                          my employer?
                        </strong>
                        <br />
                        Yes, you can claim the HRA exemption directly in your
                        ITR, provided you have valid rent receipts and your
                        landlord s [PAN Redacted].
                      </li>
                      <li>
                        <strong>
                          Q: What happens if there is a mismatch between my ITR
                          and AIS?
                        </strong>
                        <br />
                        The Income Tax Department will likely send a Notice of
                        Mismatch. You will have to file a revised return to
                        correct the data.
                      </li>
                      <li>
                        <strong>
                          Q: Do I need to report small interest amounts?
                        </strong>
                        <br />
                        Yes, all interest income, regardless of the amount, must
                        be reported.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Need Help Filing Your Taxes?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Don t risk a tax notice due to incomplete filings. Contact
                    our tax experts today for a comprehensive review of your ITR
                    and ensure every deduction is accounted for.
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
 