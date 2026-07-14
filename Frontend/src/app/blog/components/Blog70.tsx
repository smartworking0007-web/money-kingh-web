"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog70 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Student Life Insurance: Why Young Adults Need Financial Protection in 2026"
            category="INSURANCE"
            author="Sumit Mishra"
            date="July 13, 2026"
            image="/images/blog/blog-70.png"
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
                  src="/images/blog/blog-70.png"
                  alt="A young professional confidently looking at a digital life Insurance"
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
                  Student Life Insurance: Why Young Adults Need Financial
                  Protection in 2026
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 13, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    For many students, life insurance feels like a distant
                    concern—a topic reserved for middle-aged parents. However,
                    this perception overlooks the profound strategic advantage
                    of securing financial protection early in life. In 2026, as
                    education costs rise and financial independence becomes a
                    priority, student life insurance is a vital tool for
                    building a stable foundation.
                  </p>

                  <h2>1. Why Should Students Consider Life Insurance?</h2>
                  <ul>
                    <li>
                      <strong>Managing Education Loans:</strong> Many students
                      fund education through loans co-signed by parents. Life
                      insurance ensures these debts are cleared, protecting your
                      family’s retirement savings.
                    </li>
                    <li>
                      <strong>Locking in Lower Premiums:</strong> Insurance is
                      priced based on age and health. Purchasing early allows
                      you to lock in significantly lower premiums that remain
                      consistent for decades.
                    </li>
                    <li>
                      <strong>Guaranteed Insurability:</strong> Health is
                      unpredictable. Buying early ensures your insurability is
                      locked in regardless of future lifestyle-related health
                      changes.
                    </li>
                    <li>
                      <strong>Financial Discipline:</strong> Paying a regular
                      premium cultivates early financial planning habits, moving
                      your focus from short-term desires to long-term stability.
                    </li>
                  </ul>

                  <h2>2. Types of Life Insurance for Young Adults</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Plan Type</th>
                          <th className="border p-2">Purpose</th>
                          <th className="border p-2">Key Feature</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Term Insurance</td>
                          <td className="border p-2">Pure Protection</td>
                          <td className="border p-2">
                            High coverage, lowest cost
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Endowment Plan</td>
                          <td className="border p-2">Savings + Protection</td>
                          <td className="border p-2">
                            Guaranteed maturity benefit
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Money-Back</td>
                          <td className="border p-2">Structured Liquidity</td>
                          <td className="border p-2">
                            Regular interval payouts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>3. Strategic Advantages</h2>
                  <p>
                    Beyond protection, these policies offer tax advantages under{" "}
                    <strong>Section 80C</strong> and maturity payouts that are
                    often tax-exempt under <strong>Section 10(10D)</strong>.
                    Furthermore, because young individuals are generally
                    low-risk, many policies offer streamlined underwriting,
                    requiring minimal medical documentation.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Is a medical check-up required?</strong>
                        <br />
                        Often, young individuals are considered low-risk, so
                        many policies provide coverage with minimal
                        documentation, depending on the sum assured.
                      </li>
                      <li>
                        <strong>Q: Can I increase my coverage later?</strong>
                        <br />
                        Yes, many term plans offer Life Stage riders, allowing
                        you to increase your cover upon major events like
                        marriage or starting a career.
                      </li>
                      <li>
                        <strong>
                          Q: What if I can t afford a high premium?
                        </strong>
                        <br />
                        Start small. Even a modest sum assured covering your
                        loan amount and basic responsibilities is a solid
                        starting point that you can upgrade later.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Secure Your Future Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    A small investment today provides a lifetime of security.
                    Contact our advisors to find a term plan that fits your
                    student budget and protects your future earning potential.
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
