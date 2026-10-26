"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

// Explicit TypeScript Interface for Table Data (Safety check)
interface PlanTypeItem {
  planType: string;
  whoItIsFor: string;
  coreAdvantage: string;
}

export const Blog126: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Strongly typed array data to avoid implicit any errors
  const planTypes: PlanTypeItem[] = [
    {
      planType: "Individual Health Plan",
      whoItIsFor: "Single adults & young professionals",
      coreAdvantage: "Dedicated sum insured exclusively for one person.",
    },
    {
      planType: "Family Floater Plan",
      whoItIsFor: "Nuclear families (Spouse + Children)",
      coreAdvantage:
        "Shared sum insured covering the whole family at a lower combined premium.",
    },
    {
      planType: "Senior Citizen Plan",
      whoItIsFor: "Parents aged 60+",
      coreAdvantage:
        "Specialized coverage for age-related illnesses with shorter waiting periods.",
    },
    {
      planType: "Critical Illness Plan",
      whoItIsFor: "Individuals with family health risks",
      coreAdvantage:
        "Pays a fixed lump-sum amount upon diagnosis of severe illnesses (e.g., cancer, cardiac conditions).",
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
            title="Protecting Your Future: The Ultimate Guide to Choosing the Right Health Insurance Plan"
            category="HEALTH INSURANCE"
            author="Kishan Baranwal"
            date="October 26, 2026"
            image="/images/blog/Blog-126.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button with Typed Click Handler */}
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
                    src="/images/blog/Blog-126.jpeg"
                    alt="health insurance plan guide"
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
                    Protecting Your Future
                  </NextLink>
                  : The Ultimate Guide to Choosing the Right Health Insurance Plan
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 26, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A single medical emergency can derail years of financial planning. With medical inflation rising every year, having a robust health insurance policy is no longer just an option—it is a mandatory pillar of sound financial planning. Whether you are buying coverage for the first time or reviewing your existing policy, securing the right{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/insurance/health"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        health insurance policy
                      </NextLink>{" "}
                      ensures comprehensive protection for you and your family.
                    </p>
                  </div>

                  <p>
                    A common misconception is that health insurance is only needed during old age or for major surgeries. However, modern healthcare costs make insurance vital across all life stages.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. Why Health Insurance is Essential
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Financial Shield Against Inflation:</strong> Protects your hard-earned savings and investments from being wiped out by unexpected hospital bills.
                    </li>
                    <li>
                      <strong>Access to Quality Healthcare:</strong> Network hospitals offer cashless treatment, allowing you to focus on recovery without worrying about immediate cash flow.
                    </li>
                    <li>
                      <strong>Coverage Beyond Hospitalization:</strong> Comprehensive plans cover diagnostic tests, ambulance fees, day-care procedures, and post-discharge recovery care.
                    </li>
                    <li>
                      <strong>Tax Benefits:</strong> Under Section 80D of the Income Tax Act, premiums paid for self, family, and parents offer significant annual tax savings.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Key Types of Health Insurance Plans
                  </h2>
                  <p>
                    Selecting the right type of policy depends on your life stage and family dependencies:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Plan Type</th>
                          <th className="border border-gray-200 p-3">Who It Is For</th>
                          <th className="border border-gray-200 p-3">Core Advantage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {planTypes.map((item: PlanTypeItem, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-200 p-3 font-semibold">
                              {item.planType}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {item.whoItIsFor}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {item.coreAdvantage}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. Important Checklist Before Buying a Plan
                  </h2>
                  <p>
                    Before selecting a policy, evaluate these parameters to ensure maximum coverage with zero unexpected out-of-pocket costs:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Sum Insured (Coverage Amount):</strong> Aim for a sum insured that comfortably covers medical costs in top-tier private hospitals in your city.
                    </li>
                    <li>
                      <strong>Pre-Existing Disease (PED) Waiting Period:</strong> Choose plans with shorter waiting periods (ideally 1 to 2 years) for pre-existing conditions like hypertension or diabetes.
                    </li>
                    <li>
                      <strong>Room Rent Limits &amp; Sub-limits:</strong> Opt for plans with no room rent capping to avoid proportional deduction charges on final hospital bills.
                    </li>
                    <li>
                      <strong>Co-payment Clause:</strong> Avoid policies that enforce co-payment (paying a fixed percentage of every bill out of pocket), unless insuring senior citizens where it may be required.
                    </li>
                    <li>
                      <strong>Restoration Benefit:</strong> Ensure the plan includes an automatic refill/restoration feature if your sum insured gets exhausted during the policy year.
                    </li>
                    <li>
                      <strong>Claim Settlement Ratio (CSR):</strong> Look for insurers with a high Claim Settlement Ratio (95%+) and a hassle-free, fast claim approval process.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4. Key Riders &amp; Add-Ons Worth Considering
                  </h2>
                  <p>
                    Enhance your base coverage by adding these optional riders:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Maternity &amp; Newborn Cover:</strong> Covers delivery expenses and newborn medical care (usually carries a 2–4 year waiting period).
                    </li>
                    <li>
                      <strong>Consumables Cover:</strong> Covers the cost of non-medical surgical disposable items (gloves, masks, PPE kits) during hospital stays.
                    </li>
                    <li>
                      <strong>No-Claim Bonus (NCB) Super Rider:</strong> Increases your total sum insured by 20% to 50% for every claim-free year without increasing your premium.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Why should I buy a personal health policy if I have corporate insurance?</strong>
                        <br />
                        Corporate health insurance coverage ends when you change jobs or retire, and the sum insured is often insufficient for major surgeries. Having an individual or family health insurance plan ensures uninterrupted, lifelong coverage.
                      </li>
                      <li>
                        <strong>Q2: What are pre and post-hospitalization expenses?</strong>
                        <br />
                        Pre-hospitalization covers medical costs incurred before admission (like doctor consultations and diagnostic tests, usually up to 60 days). Post-hospitalization covers recovery expenses, medicines, and follow-ups after discharge (usually up to 90–180 days).
                      </li>
                      <li>
                        <strong>Q3: How does cashless claim settlement work?</strong>
                        <br />
                        In a network hospital, you present your health card at the insurance desk. The hospital sends a pre-authorization request directly to the insurer, and once approved, the medical bill is settled directly between the insurer and the hospital.
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
                    Secure Your Medical Insurance Cover Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Compare top health insurance plans and get cashless medical coverage with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Get Best Health Cover Now
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

export default Blog126;