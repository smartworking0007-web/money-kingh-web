"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog80 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Essential Guidelines to Follow Before Buying Health Insurance in 2026"
            category="INSURANCE"
            author="Sumit Mishra"
            date="August 13, 2026"
            image="/images/blog/blog-80.jpeg"
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
                  src="/images/blog/blog-80.jpeg"
                  alt="health insurance benefits"
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
                  Essential Guidelines to Follow Before Buying Health Insurance
                  in 2026
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">August 13, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    With rising medical inflation and healthcare expenses,
                    having a robust health insurance policy is no longer
                    optional—it is an essential pillar of financial security.
                    However, buying the right policy can be overwhelming due to
                    complex terms, policy exclusions, and varying coverage
                    structures.
                  </p>

                  <p>
                    Choosing a policy based purely on the lowest premium often
                    leads to claim rejections or partial payouts during medical
                    emergencies. In urgent situations, people often turn to
                    liquidating assets or opting for emergency loans like{" "}
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      personal loans
                    </NextLink>{" "}
                    if insurance falls short.
                  </p>

                  <p>
                    To help you make an informed decision, here is a
                    step-by-step guide outlining the most critical health
                    insurance guidelines you should evaluate before choosing a
                    policy.
                  </p>

                  <h2>1. Guideline on Choosing the Right Sum Insured</h2>
                  <p>
                    The primary purpose of health insurance is to cushion you
                    against major financial shocks. Selecting an inadequate sum
                    insured leaves you vulnerable during high-cost treatments.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Account for Medical Inflation:</strong> Healthcare
                      costs rise faster than general inflation. A coverage
                      amount that seems sufficient today may be inadequate 5 to
                      10 years down the line.
                    </li>
                    <li>
                      <strong>Family Size Consideration:</strong> If opting for
                      a Family Floater Policy, ensure the total sum insured
                      covers potential medical needs for all family members
                      simultaneously.
                    </li>
                    <li>
                      <strong>Rule of Thumb:</strong> A recommended baseline
                      guideline is to secure coverage equivalent to at least 50%
                      to 100% of your annual income or a minimum base cover of
                      ₹10 Lakhs to ₹15 Lakhs for urban healthcare needs.
                    </li>
                  </ul>

                  <h2>
                    2. Evaluate Waiting Periods for Pre-Existing Diseases (PED)
                  </h2>
                  <p>
                    A pre-existing disease (PED) refers to any health condition
                    (such as diabetes, hypertension, or asthma) diagnosed before
                    buying the policy.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Check the Duration:</strong> Most insurers enforce
                      a waiting period ranging between 12 months to 48 months
                      before covering pre-existing conditions.
                    </li>
                    <li>
                      <strong>Choose Shorter Waiting Periods:</strong> Select
                      policies offering shorter waiting periods or opt for
                      waiting period waiver add-ons if available.
                    </li>
                    <li>
                      <strong>Full Disclosure:</strong> Always declare existing
                      medical history accurately on your application form.
                      Concealing health issues can lead to permanent policy
                      cancellation and claim denial.
                    </li>
                  </ul>

                  <h2>3. Understand Co-Payment, Deductibles, and Sub-Limits</h2>
                  <p>
                    Always read the fine print regarding out-of-pocket clauses
                    that limit insurer payout during hospitalization:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Co-Payment Clause:</strong> A mandate where you
                      agree to pay a fixed percentage (e.g., 10% or 20%) of the
                      total bill amount out of pocket. Guideline: Prefer
                      policies with 0% co-pay unless buying for senior citizens
                      where it may be mandatory.
                    </li>
                    <li>
                      <strong>Room Rent Capping:</strong> Insurers often cap
                      daily room rent (e.g., 1% of sum insured per day).
                      Exceeding this cap results in proportionate deduction
                      across the overall bill. Opt for policies with no room
                      rent cap.
                    </li>
                    <li>
                      <strong>Disease-Specific Sub-Limits:</strong> Certain
                      surgeries (like cataract or joint replacement) may have
                      fixed payout limits. Ensure sub-limits do not severely cap
                      your claims.
                    </li>
                  </ul>

                  <h2>4. Check Cashless Network Hospital Coverage</h2>
                  <p>
                    The main advantage of modern health insurance is the
                    cashless claim facility, where the insurer settles bills
                    directly with the hospital.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Verify Local Network:</strong> Confirm that
                      top-tier hospitals near your residential area or city are
                      part of the insurer’s active network.
                    </li>
                    <li>
                      <strong>Cashless Everywhere Guidelines:</strong> Check if
                      your insurer supports standardized &quot;Cashless
                      Everywhere&quot; initiatives, allowing cashless treatment
                      even at non-network hospitals under specified emergency
                      terms.
                    </li>
                  </ul>

                  <h2>
                    5. Prioritize Restoration Benefits &amp; No Claim Bonus
                    (NCB)
                  </h2>
                  <p>
                    To maximize coverage value without exponentially increasing
                    premiums, ensure your policy includes these two features:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Restoration / Reinstatement Benefit:</strong>{" "}
                      Automatically reloads your sum insured if it is exhausted
                      due to previous hospitalizations in the same policy year.
                    </li>
                    <li>
                      <strong>No Claim Bonus (NCB):</strong> Rewards claim-free
                      years by increasing your sum insured (often 10% to 50% per
                      year up to a 100% cap) without increasing your premium.
                    </li>
                  </ul>

                  <h2>
                    Quick Comparison: Ideal vs. Restrictive Health Insurance
                    Features
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Feature Parameter</th>
                          <th className="border p-2">
                            Ideal Guidelines (What to Choose)
                          </th>
                          <th className="border p-2">
                            Restrictive Terms (What to Avoid)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">
                            Room Rent Cap
                          </td>
                          <td className="border p-2">
                            No capping / Single Private AC Room
                          </td>
                          <td className="border p-2">
                            1% of Sum Insured per day
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Co-Pay Requirement
                          </td>
                          <td className="border p-2">0% Co-payment</td>
                          <td className="border p-2">
                            10%–30% mandatory co-pay
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            PED Waiting Period
                          </td>
                          <td className="border p-2">1 to 2 Years</td>
                          <td className="border p-2">3 to 4 Years</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Day Care Treatments
                          </td>
                          <td className="border p-2">
                            All daycare procedures covered
                          </td>
                          <td className="border p-2">
                            Restricted to a small list
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Pre/Post Hospitalization
                          </td>
                          <td className="border p-2">
                            60 Days Pre / 90–180 Days Post
                          </td>
                          <td className="border p-2">
                            30 Days Pre / 60 Days Post
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>Step-by-Step Process for Health Insurance Purchase</h2>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center space-y-3 font-semibold text-gray-700 my-6">
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Assess Health Needs &amp; Family Size ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Determine Required Sum Insured ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Compare Waiting Periods &amp; Room Rent Rules ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Check Insurer Claim Settlement Ratio (CSR) ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Complete Accurate Medical Disclosure &amp; KYC ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Policy Issuance &amp; Review Free-Look Period ]
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: What is the Free-Look Period in health insurance?
                        </strong>
                        <br />
                        A: Regulatory guidelines provide a 15 to 30-day
                        Free-Look Period starting from the date you receive the
                        policy document. During this window, you can review the
                        terms and cancel the policy for a full refund (minus
                        minimal administrative/medical test costs) if you are
                        unsatisfied.
                      </li>
                      <li>
                        <strong>
                          Q: What is Claim Settlement Ratio (CSR) and why does
                          it matter?
                        </strong>
                        <br />
                        A: CSR indicates the percentage of total claims settled
                        by the insurer against total claims received in a
                        financial year. Look for insurers with a consistent CSR
                        above 95% to 98% alongside a low claim repudiation rate.
                      </li>
                      <li>
                        <strong>
                          Q: Can I buy a health insurance policy if I already
                          have corporate cover from my employer?
                        </strong>
                        <br />
                        A: Yes, relying solely on corporate insurance is risky
                        because coverage ends if you change jobs or retire.
                        Maintaining an independent personal health insurance
                        policy ensures continuous, lifelong renewal coverage
                        without waiting period gaps.
                      </li>
                      <li>
                        <strong>
                          Q: Are day-care procedures covered under health
                          insurance?
                        </strong>
                        <br />
                        A: Modern health insurance policies cover day-care
                        procedures (treatments like chemotherapy, dialysis, or
                        cataract surgery requiring less than 24 hours of
                        hospitalization due to medical technology advances).
                        Always verify that daycare coverage is included. Check
                        your credit and financial profile on our{" "}
                        <NextLink
                          href="/services/credit/hdfc"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        for comprehensive planning.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Secure Your Health &amp; Finances Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Ensure complete peace of mind with tailored insurance and
                    emergency financial solutions designed for you and your
                    family.
                  </Typography>

                  <NextLink
                    href="/services/credit/hdfc"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Check Financial &amp; Credit Profile
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
