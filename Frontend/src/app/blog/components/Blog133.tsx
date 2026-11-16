"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface PlanTypeRow {
  planType: string;
  bestSuitedFor: string;
  advantage: string;
}

export const Blog133: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Interactive Health Insurance Coverage & Tax Savings Estimator State
  const [cityTier, setCityTier] = useState<"metro" | "tier2">("metro");
  const [familyMembers, setFamilyMembers] = useState<number>(4);
  const [includeSeniorParents, setIncludeSeniorParents] = useState<boolean>(true);

  // Coverage & Section 80D Calculation
  const baseRecommendedCover =
    cityTier === "metro"
      ? 1000000 + Math.max(0, familyMembers - 2) * 250000
      : 500000 + Math.max(0, familyMembers - 2) * 250000;

  const parentsRecommendedCover = includeSeniorParents ? 1000000 : 0;
  const max80DDeduction = includeSeniorParents ? 75000 : 25000;

  const planTypesTable: PlanTypeRow[] = [
    {
      planType: "Individual Health Insurance",
      bestSuitedFor: "Single adults and young working professionals",
      advantage:
        "Dedicated sum insured exclusively for one individual; unaffected by claims made by other family members.",
    },
    {
      planType: "Family Floater Plan",
      bestSuitedFor: "Married couples and nuclear families with dependent children",
      advantage:
        "Single shared sum insured covering the entire family under one policy at a significantly lower combined premium.",
    },
    {
      planType: "Senior Citizen Health Plan",
      bestSuitedFor: "Parents and individuals aged 60 years and above",
      advantage:
        "Tailored specifically for age-related medical conditions, shorter pre-existing disease waiting periods, and annual health check-ups.",
    },
    {
      planType: "Critical Illness Cover",
      bestSuitedFor: "Individuals with a family history of major illnesses",
      advantage:
        "Pays a 100% lump-sum benefit upon first diagnosis of severe illnesses (such as cancer, stroke, heart attack, or kidney failure), usable for treatment or income replacement.",
    },
    {
      planType: "Top-Up & Super Top-Up Plans",
      bestSuitedFor: "Individuals seeking high coverage (₹15 Lakhs–₹50 Lakhs) on a budget",
      advantage:
        "Kicks in once medical bills cross a chosen deductible threshold; super top-ups aggregate multiple claims in a single year.",
    },
  ];

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The Complete Guide to Health Insurance Plans: How to Protect Your Savings and Choose the Right Policy"
            category="HEALTH INSURANCE"
            author="Kishan Baranwal"
            date="November 16, 2026"
            image="/images/blog/Blog-133.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={handleClose}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
              type="button"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Professional Image Preview Section */}
              <div className="w-full flex justify-center bg-slate-50 py-4 px-4 border-b border-gray-100">
                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/blog/Blog-133.jpeg"
                    alt="health insurance"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  <NextLink
                    href="https://moneykingfinancial.com/services/insurance/health"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Health Insurance Plan
                  </NextLink>{" "}
                  Guide: Compare Types, Benefits &amp; Buyer&apos;s Checklist
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">November 16, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Looking for the best{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/insurance/health"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        Health Insurance Plan
                      </NextLink>{" "}
                      in India? A comprehensive mediclaim policy shields your savings against rising hospital bills with cashless treatment, zero room-rent capping, No-Claim Bonus growth, and income tax deductions up to ₹75,000 under Section 80D.
                    </p>
                  </div>

                  <p>
                    Medical costs in India are rising faster than general inflation, driven by advanced diagnostic technologies, specialized treatments, and increasing private hospital charges. A single emergency hospitalization or critical surgery can easily wipe out years of hard-earned savings if you do not have adequate medical coverage.
                  </p>

                  <p>
                    A comprehensive{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      health insurance
                    </NextLink>{" "}
                    plan acts as a financial safety net—covering hospitalization bills, pre- and post-hospitalization expenses, ambulance charges, and modern day-care treatments without forcing you to liquidate investments or borrow money during an emergency. This practical guide by <strong>Money King Financial Services</strong> breaks down how health policies work and how to select the right cover.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. Why a Dedicated Health Insurance Plan Is Essential Today
                  </h2>
                  <p>
                    Many working professionals rely exclusively on employer-provided group health insurance. While corporate policies are a helpful perk, they often have limited coverage amounts (typically ₹2 Lakhs to ₹5 Lakhs), room-rent caps, and cease the moment you switch jobs or retire.
                  </p>

                  <p>
                    Having an independent personal or family floater{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      health insurance plan
                    </NextLink>{" "}
                    offers distinct advantages:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Cashless Hospitalization:</strong> Receive treatment across thousands of network hospitals nationwide where the insurer settles bills directly with the hospital, minimizing out-of-pocket cash stress.
                    </li>
                    <li>
                      <strong>Comprehensive Pre- &amp; Post-Hospitalization Cover:</strong> Covers diagnostic tests, MRI/CT scans, doctor consultations, and prescribed medicines for 30 to 60 days before admission and 60 to 180 days after discharge.
                    </li>
                    <li>
                      <strong>Day-Care Procedures Covered:</strong> Modern medical procedures (such as cataract surgery, dialysis, chemotherapy, or minor orthopedic procedures) that require less than 24 hours of hospitalization due to technological advancements are fully covered.
                    </li>
                    <li>
                      <strong>No-Claim Bonus (NCB) Growth:</strong> For every claim-free policy year, insurers reward you by increasing your base sum insured by 10% to 50% (up to a maximum cap) at no extra premium cost.
                    </li>
                    <li>
                      <strong>Annual Tax Savings (Section 80D):</strong> Premiums paid toward health insurance qualify for income tax deductions under Section 80D of the Income Tax Act—up to ₹25,000 for self, spouse, and children, plus an additional ₹25,000 (or ₹50,000 if parents are senior citizens aged 60+).
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Types of Health Insurance Plans in India
                  </h2>
                  <p>
                    Choosing the right policy structure depends on your age, family size, and specific medical history:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Plan Type</th>
                          <th className="border border-gray-200 p-3">Best Suited For</th>
                          <th className="border border-gray-200 p-3">Key Structural Advantage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {planTypesTable.map((row: PlanTypeRow, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-200 p-3 font-semibold text-[#1e3a8a]">
                              {row.planType}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {row.bestSuitedFor}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {row.advantage}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Interactive Health Coverage & Section 80D Estimator */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-6 space-y-6">
                    <h3 className="text-lg font-bold text-[#1e3a8a] m-0">
                      Health Coverage &amp; Section 80D Tax Benefit Estimator
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          City Category
                        </label>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setCityTier("metro")}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition cursor-pointer ${
                              cityTier === "metro"
                                ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            Metro / Tier-1
                          </button>
                          <button
                            type="button"
                            onClick={() => setCityTier("tier2")}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition cursor-pointer ${
                              cityTier === "tier2"
                                ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            Tier-2 / Tier-3
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Nuclear Family Members: {familyMembers}
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="6"
                          step="1"
                          value={familyMembers}
                          onChange={(e) => setFamilyMembers(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer mt-2"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Senior Citizen Parents (60+)
                        </label>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setIncludeSeniorParents(true)}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition cursor-pointer ${
                              includeSeniorParents
                                ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            Yes (Include)
                          </button>
                          <button
                            type="button"
                            onClick={() => setIncludeSeniorParents(false)}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition cursor-pointer ${
                              !includeSeniorParents
                                ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Recommended Family Cover
                        </span>
                        <span className="text-xl font-extrabold text-[#1e3a8a]">
                          ₹{(baseRecommendedCover / 100000).toFixed(1)} Lakhs
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Separate Parents Policy
                        </span>
                        <span className="text-xl font-extrabold text-amber-600">
                          {includeSeniorParents
                            ? `₹${(parentsRecommendedCover / 100000).toFixed(0)} Lakhs`
                            : "Not Applicable"}
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Max Section 80D Deduction
                        </span>
                        <span className="text-xl font-extrabold text-emerald-600">
                          ₹{max80DDeduction.toLocaleString("en-IN")} / yr
                        </span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. Crucial Policy Features to Check Before Buying
                  </h2>
                  <p>
                    Not all health insurance policies offer the same protection, even if their sum insured looks identical on paper. Evaluate these six critical clauses before finalizing your policy:
                  </p>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>
                      <strong>Room Rent Capping &amp; Sub-Limits:</strong> Avoid policies that cap daily hospital room rent (e.g., 1% of sum insured per day). If you opt for a higher-category room during hospitalization, insurers apply proportionate deductions—meaning you end up paying a percentage of the entire hospital bill (doctor fees, surgery charges, diagnostics) out of pocket. Always choose a plan with <strong>No Room Rent Capping</strong>.
                    </li>
                    <li>
                      <strong>Pre-Existing Disease (PED) Waiting Period:</strong> Any medical condition diagnosed before purchasing the policy (such as diabetes, hypertension, thyroid disorders, or asthma) carries a mandatory waiting period—typically 1 to 3 years—before claims related to that condition are approved. Buying a policy early in life ensures you complete waiting periods while healthy.
                    </li>
                    <li>
                      <strong>Co-Payment Clause:</strong> A co-payment clause requires the policyholder to pay a fixed percentage (e.g., 10% or 20%) of every approved claim amount, while the insurer pays the rest. Opt for <strong>0% co-payment</strong> policies for adults and young families.
                    </li>
                    <li>
                      <strong>Restoration / Refill Benefit:</strong> If a major hospitalization exhausts your entire sum insured during a policy year, an Unlimited or 100% Restoration Benefit automatically refills your coverage amount for subsequent hospitalizations within the same year. Ensure the restoration applies to both unrelated and related illnesses.
                    </li>
                    <li>
                      <strong>Consumables Cover Rider:</strong> Standard policies often exclude non-medical surgical consumables such as PPE kits, gloves, syringes, surgical masks, and gauze—which can account for 10% to 15% of a surgical hospital bill. Adding a Consumables Rider ensures 100% cashless settlement without unexpected deductions.
                    </li>
                    <li>
                      <strong>Claim Settlement Ratio (CSR) &amp; Network Hospitals:</strong> Check the insurer’s Claim Settlement Ratio (ideally 95% or higher) and verify that reputable multi-specialty hospitals in your city are listed on their cashless network.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4. How Much Health Insurance Coverage (Sum Insured) Do You Need?
                  </h2>
                  <p>
                    Selecting an inadequate sum insured leaves you underinsured during major medical emergencies. Use these practical benchmarks:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Metro &amp; Tier-1 Cities (Delhi NCR, Mumbai, Bengaluru, Chennai):</strong> Minimum ₹10 Lakhs to ₹15 Lakhs for a family floater plan, given higher private hospital tariff rates.
                    </li>
                    <li>
                      <strong>Tier-2 &amp; Tier-3 Cities:</strong> Minimum ₹5 Lakhs to ₹10 Lakhs for a nuclear family.
                    </li>
                    <li>
                      <strong>Senior Citizens (60+ Years):</strong> Minimum ₹10 Lakhs individual coverage or a base policy paired with a ₹15 Lakh Super Top-Up to keep premiums affordable.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    5. Step-by-Step Guide: How to Buy and Maintain Your Health Policy
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Assess Family Health Needs:</strong> List the ages and existing medical conditions of every family member to decide between a single family floater or separate policies for parents. <em>(Tip: Never club senior citizen parents into the same family floater as young adults, as premiums are priced based on the eldest member&apos;s age).</em>
                    </li>
                    <li>
                      <strong>Compare Policy Wordings, Not Just Premiums:</strong> Review sub-limits, waiting periods, restoration rules, and exclusions across 3 to 4 top insurers.
                    </li>
                    <li>
                      <strong>Disclose Medical History Honestly:</strong> Declare all existing health conditions, surgeries, and lifestyle habits accurately on the proposal form. Non-disclosure is the #1 cause of claim rejection.
                    </li>
                    <li>
                      <strong>Review During the Free-Look Period:</strong> Every policy comes with a 15-to-30-day free-look period from the date of document receipt. Read the policy schedule carefully and request corrections or cancellations if terms differ from what was promised.
                    </li>
                    <li>
                      <strong>Renew Before the Due Date:</strong> Renew your policy on time every year to preserve accumulated No-Claim Bonuses and avoid restarting waiting periods.
                    </li>
                  </ol>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQs)
                    </h2>
                    <ul className="space-y-4 text-sm leading-relaxed">
                      <li>
                        <strong>
                          Q1: Can I hold two health insurance policies at the same time?
                        </strong>
                        <br />
                        Ans: Yes, you can hold multiple health insurance policies (for example, an employer group plan and an individual retail plan). During a claim, you can utilize one policy first and claim the remaining balance from the second policy under the contribution clause.
                      </li>
                      <li>
                        <strong>
                          Q2: What is the initial 30-day waiting period in health insurance?
                        </strong>
                        <br />
                        Ans: Every new health insurance policy carries an initial 30-day waiting period from the policy start date, during which no illness-related claims are covered. However, hospitalization resulting from an accident is covered from Day 1.
                      </li>
                      <li>
                        <strong>
                          Q3: Does a health insurance plan cover maternity and newborn expenses?
                        </strong>
                        <br />
                        Ans: Standard health plans do not cover maternity by default unless you opt for a policy with an inbuilt Maternity Benefit or add-on rider. Maternity covers typically carry a waiting period of 2 to 4 years and have specific sub-limits for normal and C-section deliveries.
                      </li>
                      <li>
                        <strong>
                          Q4: What happens if I miss my health insurance renewal due date?
                        </strong>
                        <br />
                        Ans: Insurers provide a grace period of 15 to 30 days after the due date to renew your policy without losing continuity benefits. However, any hospitalization occurring during the grace period before the renewal premium is paid will not be covered. If you miss the grace period, the policy lapses and waiting periods reset.
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
                    Compare &amp; Buy the Best Health Insurance Plans Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Protect your family&apos;s health and savings with a cashless{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="text-blue-400 hover:underline"
                    >
                      Health Insurance Plan
                    </NextLink>{" "}
                    featuring zero room-rent capping, high claim settlement ratios, and Section 80D tax benefits through{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>
                    .
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Compare Health Insurance Quotes Now
                    </NextLink>
                  </div>
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

export default Blog133;