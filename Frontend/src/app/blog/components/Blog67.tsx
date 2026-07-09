"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog67 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The Microfinance Debate Is Missing the Point: A Look at Sustainable Financial Inclusion"
            category="FINANCIAL INCLUSION"
            author="Sumit Mishra"
            date="July 09, 2026"
            image="/images/blog/blog-67.jpeg"
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
                  src="/images/blog/blog-67.jpeg"
                  alt="A financial infographic showing credit, savings, insurance, and education"
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
                  The Microfinance Debate Is Missing the Point: A Look at
                  Sustainable Financial Inclusion
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 09, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    The ongoing microfinance debate is often binary, pitting the
                    promise of poverty alleviation against the risk of predatory
                    debt. However, this narrow focus misses the true objective:{" "}
                    <strong>sustainable financial inclusion</strong>.
                    Microfinance is neither a panacea for poverty nor an
                    inherent exploit; it is a tool that requires a holistic
                    ecosystem to function effectively.
                  </p>

                  <h2>1. The Evolution of Microfinance</h2>
                  <p>
                    Microfinance began with a simple premise: provide small
                    capital to the marginalized to spark entrepreneurship. While
                    early success stories were legendary, the industry s rapid
                    scaling shifted many institutions from mission-driven to
                    profit-driven models. This led to over-lending—where
                    multiple institutions would lend to the same household
                    simultaneously—and aggressive collection practices that
                    prioritized repayment over borrower welfare.
                  </p>

                  <h2>2. Beyond Credit: The Four Pillars of Empowerment</h2>
                  <p>
                    To move the needle, we must stop viewing microfinance as an
                    isolated intervention and start viewing it as one component
                    of a holistic architecture:
                  </p>
                  <ul>
                    <li>
                      <strong>Integrated Financial Education:</strong> Credit
                      access must be paired with mandatory modules on cash-flow
                      management and understanding the true cost of compounding
                      interest.
                    </li>
                    <li>
                      <strong>Digital Infrastructure:</strong> Mobile money has
                      the potential to slash high operational costs, allowing
                      institutions to pass savings on to borrowers through lower
                      interest rates.
                    </li>
                    <li>
                      <strong>Risk Mitigation:</strong> Savings accounts and
                      micro-insurance are critical. They provide a cushion
                      during medical or economic emergencies, preventing
                      borrowers from falling into a debt spiral.
                    </li>
                    <li>
                      <strong>Market Linkages:</strong> Financial inclusion is
                      incomplete without connecting rural borrowers to broader
                      economic marketplaces and reliable supply chains.
                    </li>
                  </ul>

                  <h2>3. The Path to Sustainable Financial Inclusion</h2>
                  <p>
                    Predatory debt is a feature of an unregulated, opaque
                    system. The path forward requires:
                  </p>
                  <ul>
                    <li>
                      <strong>Credit Bureaus for the Unbanked:</strong> Robust
                      data-sharing mechanisms are essential to prevent
                      over-leverage and multiple-lending traps.
                    </li>
                    <li>
                      <strong>Transparent APR Disclosures:</strong> Regulators
                      must mandate all-inclusive, transparent Annual Percentage
                      Rate (APR) disclosures.
                    </li>
                    <li>
                      <strong>Measuring Resilience:</strong> Success shouldn t
                      just be measured by repayment rates, but by financial
                      resilience—how many households have built a savings buffer
                      or successfully pivoted during economic downturns.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Does microfinance actually reduce poverty?
                        </strong>
                        <br />
                        It is excellent at reducing vulnerability by providing a
                        safety net, but it is rarely a silver bullet for
                        extreme poverty without accompanying healthcare and
                        education.
                      </li>
                      <li>
                        <strong>
                          Q: Why are microfinance interest rates so high?
                        </strong>
                        <br />
                        The cost of servicing thousands of tiny, unsecured loans
                        is extremely high. Infrastructure gaps and the risk
                        premium associated with lending to those with no
                        collateral keep these rates high.
                      </li>
                      <li>
                        <strong>Q: How can we prevent the debt trap?</strong>
                        <br />
                        The best prevention is a combination of robust bureau
                        reporting and shifting focus fromcredit-first to
                        savings-first financial models.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Toward True Financial Mobility
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Microfinance is a gateway to economic mobility, but only
                    when integrated with digital literacy and robust risk
                    management. Contact us to learn how we are building
                    sustainable financial pathways.
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
