"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog53 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="SBI Cashback Credit Card Review 2026: Is It Still Worth It After the April Devaluation?"
            category="CREDIT CARDS"
            author="Kishan Baranwal"
            date="June 20, 2026"
            image="/images/blog/blog-53.jpeg"
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
                  src="/images/blog/blog-53.jpeg"
                  alt="The front face of the blue SBI Cashback credit card"
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
                  SBI Cashback Credit Card Review 2026: Is It Still Worth It
                  After the April Devaluation?
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 20, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    For a very long time, the SBI Cashback Credit Card reigned
                    as the undisputed king of the Indian credit card ecosystem.
                    Its proposition was ridiculously simple and incredibly
                    powerful: an unconditional 5% cashback on almost all online
                    spending across any merchant, without forcing users into
                    brand loyalty. It was the ultimate set-it-and-forget-it card
                    for online shoppers.
                  </p>
                  <p>
                    However, the credit card landscape in 2026 has witnessed
                    aggressive corrections. Following the highly discussed SBI
                    cashback card devaluation implemented this April, State Bank
                    of India has once again restructured the reward ecosystem,
                    capping major benefits and tightening eligibility rules for
                    cash points.
                  </p>

                  <h2>1. The Core Value Proposition: What Remains Intact?</h2>
                  <p>
                    Despite continuous waves of trimming over the years, the
                    fundamental engine that made this card famous is still
                    alive. The primary mechanism of the card continues to offer
                    straightforward cash returns:
                  </p>
                  <ul>
                    <li>
                      <strong>5% Cashback on Online Spending:</strong> You still
                      earn a massive 5% cashback on most online purchases
                      regardless of the merchant.
                    </li>
                    <li>
                      <strong>1% Cashback on Offline Purchases:</strong> For
                      your physical retail swipes, grocery store checkouts, and
                      local store payments.
                    </li>
                    <li>
                      <strong>Automated Statement Credits:</strong> You do not
                      need to manually redeem your points; cashback is
                      automatically credited against your next month’s
                      outstanding balance.
                    </li>
                  </ul>

                  <h2>
                    2. Deconstructing the April Devaluation: What Changed?
                  </h2>
                  <h3>The New Monthly Caps</h3>
                  <p>
                    The April 2026 restructuring introduces a stricter tiered
                    structure:
                  </p>
                  <ul>
                    <li>
                      <strong>Capped Online Earnings:</strong> The 5% cashback
                      is now strictly capped at a maximum of ₹5,000 per billing
                      cycle. Purchases up to ₹1,00,000 fetch the premium rate;
                      anything beyond that drops to the 1% baseline.
                    </li>
                    <li>
                      <strong>The Exclusions List Expands:</strong> Credit card
                      utility bill payments, school fees, rent payments,
                      insurance premiums, and wallet loading transactions have
                      been completely stripped of any cashback.
                    </li>
                  </ul>
                  <h3>Complete Removal of Travel Perks</h3>
                  <p>
                    For those who used this card as a hybrid asset for travel,
                    the April policy has completely eliminated the remaining
                    domestic airport lounge access benefits. It is now strictly
                    an e-commerce transactional tool.
                  </p>

                  <h2>3. The Fee Structure vs. The Break-Even Analysis</h2>
                  <p>
                    <strong>Joining/Annual Fee:</strong> ₹999 + GST. The annual
                    renewal fee is waived if your total annualized retail
                    spending crosses ₹2 Lakhs in the preceding year.
                  </p>
                  <h3>Mathematical Break-Even Check</h3>
                  <p>
                    If you pay the ₹999 fee, by spending just ₹20,000 online
                    over an entire year at the 5% rate, you earn ₹1,000 in
                    statement credits, effectively neutralizing the fixed annual
                    card fee. Any online spending beyond that baseline ₹20,000
                    constitutes direct profit.
                  </p>

                  <h2>
                    4. The Verdict: Who Should Keep It and Who Should Skip It?
                  </h2>
                  <p>
                    <strong>You should keep the card if:</strong> Your online
                    spending is under ₹1 Lakh a month, you prefer direct
                    statement credits, and you easily clear the ₹2 Lakh annual
                    milestone.
                  </p>
                  <p>
                    <strong>You should skip it if:</strong> You rely on the card
                    for high-value rent/utility payments, you require lounge
                    access, or your online spending regularly exceeds ₹1,00,000
                    monthly.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Does the SBI Cashback Card offer reward points on
                          fuel?
                        </strong>
                        <br />
                        No, but it offers a standard 1% fuel surcharge waiver
                        for transactions between ₹500 and ₹3,000, capped at ₹100
                        per cycle.
                      </li>
                      <li>
                        <strong>
                          Q: How does it compare to Amazon Pay or Flipkart
                          cards?
                        </strong>
                        <br />
                        Amazon/Flipkart cards offer unlimited 5% but lock you              
                        into their ecosystem. The SBI card is superior for              
                        general users because the 5% rate applies across almost                
                        all merchant websites.              
                      </li>
                      <li>
                        <strong>Q: Are EMI transactions eligible?</strong>               
                        <br />
                        No, any transaction converted into merchant EMIs or   
                                
                        post-purchase installments is excluded from the cashback            
                        program.
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
