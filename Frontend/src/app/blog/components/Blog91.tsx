"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog91: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The Ultimate Life Insurance Guide: Protecting Your Family’s Financial Future"
            category="INSURANCE"
            author="Sumit Mishra"
            date="August 31, 2026"
            image="/images/blog/blog-91.png"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-91.png"
                  alt="life insurance"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  The Ultimate{" "}
                  <NextLink
                    href="https://moneykingfinancial.com/services/insurance/general"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Life Insurance
                  </NextLink>{" "}
                  Guide: Protecting Your Family’s Financial Future
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">August 31, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Life insurance
                    </NextLink>{" "}
                    is a financial contract between an individual and an{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      insurance
                    </NextLink>{" "}
                    provider that guarantees a tax-free lump sum payout (sum assured) to designated
                    beneficiaries in the event of the policyholder&apos;s untimely passing. Beyond
                    replacing lost household income, a well-structured{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      life insurance
                    </NextLink>{" "}
                    plan ensures that family members can pay off ongoing debts, fund children&apos;s
                    higher education, and maintain their standard of living without financial
                    compromise.
                  </p>

                  <p>
                    Building wealth for the future is essential, but protecting that wealth against
                    life&apos;s uncertainties is equally critical. For any family, the sudden loss
                    of a primary earning member can lead to severe financial distress alongside
                    emotional grief.
                  </p>

                  <p>
                    This is where{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Life Insurance
                    </NextLink>{" "}
                    plays a non-negotiable role in personal financial planning. Whether you are
                    starting your career, getting married, or planning for your children&apos;s future,
                    understanding how{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      life insurance
                    </NextLink>{" "}
                    works ensures you build an unbreakable financial safety net for your loved ones.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. Why Life Insurance Is Essential for Everyone
                  </h2>
                  <p>
                    Many people view{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      life insurance
                    </NextLink>{" "}
                    as just a tax-saving instrument, but its core purpose is financial protection
                    and risk mitigation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Income Replacement:</strong> If the primary wage earner passes away,
                      the claim payout compensates for the lost monthly salary, covering day-to-day
                      living expenses.
                    </li>
                    <li>
                      <strong>Debt Protection:</strong> Outstanding home loans, car loans, or
                      personal debts can become a heavy burden on your family.{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/insurance/general"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Life insurance
                      </NextLink>{" "}
                      ensures your liabilities do not fall on your dependents.
                    </li>
                    <li>
                      <strong>Future Goal Fulfillment:</strong> Payouts can be structured to fund
                      major life milestones, such as a child&apos;s higher education or wedding
                      expenses.
                    </li>
                    <li>
                      <strong>Peace of Mind:</strong> Knowing your family is financially secure
                      regardless of what happens brings true mental relief.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Key Types of Life Insurance Policies
                  </h2>
                  <p>
                    Choosing the right policy type depends on whether you need pure risk protection
                    or a combination of protection and savings:
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    A. Term Life Insurance (Pure Protection)
                  </h3>
                  <p>
                    <strong>How It Works:</strong> Offers a high life cover (sum assured) for a
                    specific period at very affordable premiums.
                    <br />
                    <strong>Best For:</strong> Everyone with financial dependents and liabilities. It
                    provides maximum coverage at the lowest cost.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    B. Whole Life Insurance
                  </h3>
                  <p>
                    <strong>How It Works:</strong> Covers the policyholder up to age 99 or 100,
                    ensuring guaranteed payout for legal heirs whenever death occurs.
                    <br />
                    <strong>Best For:</strong> Individuals looking to leave an estate legacy for the
                    next generation.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    C. Unit Linked Insurance Plans (ULIPs)
                  </h3>
                  <p>
                    <strong>How It Works:</strong> Combines{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      life insurance
                    </NextLink>{" "}
                    protection with market-linked investments (equity and debt funds).
                    <br />
                    <strong>Best For:</strong> Investors looking for a dual-benefit product with a
                    long-term investment horizon.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    D. Endowment / Money-Back Plans
                  </h3>
                  <p>
                    <strong>How It Works:</strong> Traditional savings plans that offer guaranteed
                    returns alongside{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      life insurance
                    </NextLink>{" "}
                    cover.
                    <br />
                    <strong>Best For:</strong> Risk-averse investors seeking conservative capital
                    preservation.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. How Much Life Insurance Coverage Do You Need?
                  </h2>
                  <p>
                    A common financial guideline to calculate your ideal Sum Assured is:
                  </p>

                  {/* Formula Box */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-center">
                    <p className="text-sm font-semibold text-blue-900 mb-2">
                      Ideal Sum Assured Benchmark
                    </p>
                    <p className="text-lg font-bold text-blue-950 font-mono">
                      Minimum Sum Assured = (Annual Income &times; 10 to 15) + Total Outstanding Liabilities
                    </p>
                  </div>

                  <p>
                    For example, if your annual income is ₹10 Lakhs and you have an active home
                    loan of ₹30 Lakhs, your recommended term cover should be at least ₹1.3 Cr to
                    ₹1.8 Cr.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Direct Comparison: Term Insurance vs. Traditional Savings Plans
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Feature / Parameter</th>
                          <th className="border p-2">Pure Term Life Insurance</th>
                          <th className="border p-2">Traditional Endowment / Savings Plan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Primary Goal</td>
                          <td className="border p-2">High Risk Cover / Pure Protection</td>
                          <td className="border p-2">Investment + Moderate Risk Cover</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Premium Cost</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Very Low (High coverage at low cost)
                          </td>
                          <td className="border p-2">
                            High (Lower coverage for higher premium)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Maturity Benefit</td>
                          <td className="border p-2">
                            None (Unless Return of Premium rider is chosen)
                          </td>
                          <td className="border p-2">Guaranteed payout + Bonuses</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Coverage Level</td>
                          <td className="border p-2 font-semibold text-green-600">
                            10–20&times; higher cover for the same premium
                          </td>
                          <td className="border p-2">Lower cover relative to premium paid</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: What is the ideal age to buy a{" "}
                          <NextLink
                            href="https://moneykingfinancial.com/services/insurance/general"
                            className="text-blue-600 hover:underline"
                          >
                            life insurance
                          </NextLink>{" "}
                          policy?
                        </strong>
                        <br />
                        A: The best time to buy{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/insurance/general"
                          className="text-blue-600 hover:underline"
                        >
                          life insurance
                        </NextLink>{" "}
                        is as early as possible. Premiums increase significantly as you age and
                        develop medical conditions. Locking in lower premium rates in your 20s or
                        early 30s delivers substantial long-term savings.
                      </li>
                      <li>
                        <strong>
                          Q: What is Claim Settlement Ratio (CSR) and why does it matter?
                        </strong>
                        <br />
                        A: CSR is the percentage of total claims approved and settled by an insurer
                        out of total claims received in a financial year. Always select an{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/insurance/general"
                          className="text-blue-600 hover:underline"
                        >
                          insurance
                        </NextLink>{" "}
                        provider with a consistent CSR above 97% to 98%.
                      </li>
                      <li>
                        <strong>
                          Q: What happens if I stop paying{" "}
                          <NextLink
                            href="https://moneykingfinancial.com/services/insurance/general"
                            className="text-blue-600 hover:underline"
                          >
                            life insurance
                          </NextLink>{" "}
                          premiums?
                        </strong>
                        <br />
                        A: For pure term plans, the policy lapses after the grace period expires, and
                        coverage terminates. For investment-linked or endowment plans, the policy may
                        continue with reduced benefits (paid-up status) depending on terms. Explore
                        our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/insurance/general"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          insurance services portal
                        </NextLink>{" "}
                        to review tailored life and general protection policies.
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
                    Secure Your Family&apos;s Tomorrow, Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Compare comprehensive term plans, calculate your ideal life cover, and secure
                    affordable premiums with Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/insurance/general"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Explore Life Insurance Plans
                  </NextLink>
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