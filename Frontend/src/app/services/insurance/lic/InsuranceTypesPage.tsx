"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import Image from "next/image";
import { Star } from "lucide-react";

// --- Data for Table ---
const planTypes = [
  { type: "Term Insurance", bestFor: "Death Benefit + Income replacement" },
  { type: "Endowment Plan", bestFor: "Investors seeking stable returns" },
  {
    type: "ULIP (Unit Linked Insurance Plan)",
    bestFor: "Market-linked growth",
  },
  { type: "Money Back Plan", bestFor: "Regular payouts" },
  { type: "Whole Life Plan", bestFor: "Lifelong protection" },
  { type: "Child Plan", bestFor: "Parents" },
  { type: "Pension/Retirement Plan", bestFor: "Retirement savers" },
];

export default function InsuranceTypesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 font-lexend">
      {/* --- TOP SECTION --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h3"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-3xl mt-0"
        >
          What are the Different Types of Life Insurance?
        </Typography>
        <p className="text-gray-500 max-w-5xl mx-auto text-sm md:text-base leading-relaxed">
          There are only two types of life insurance plans: term insurance
          (protection plans) and investment plans. While Term Insurance provides
          pure risk coverage with a death benefit, investment plans offer
          protection and wealth creation. Let s explore the different{" "}
          <span className="text-blue-600 font-medium">
            types of life insurance plans
          </span>{" "}
          as per your financial needs:
        </p>
      </div>

      {/* --- COMPARISON TABLE --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-20">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#2d3e50] text-white">
            <tr>
              <th className="p-4 font-bold text-sm md:text-base">Plan Type</th>
              <th className="p-4 font-bold text-sm md:text-base">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {planTypes.map((plan, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-gray-700 text-sm md:text-base">
                  {plan.type}
                </td>
                <td className="p-4 text-gray-500 text-sm md:text-base">
                  {plan.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- DETAILED CARDS SECTION --- */}
      <div className="space-y-12">
        {/* --- GROUP 1: TERM INSURANCE (BLUE THEME) --- */}
        <div className="bg-blue-50/50 p-4 md:p-8 rounded-3xl border border-blue-100">
          <div className="flex items-center space-x-2 mb-6 border-b border-blue-200 pb-2">
            <Star className="text-blue-600 fill-blue-600 w-5 h-5" />
            <h2 className="text-blue-600 font-bold text-xl md:text-2xl">
              Term Insurance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailCard
              title="Term Insurance plan"
              img="/images/life/Term Insurance plan.png" 
              points={[
                "It is an affordable type of life insurance",
                "These plans offer financial protection for your family after your death",
                "You have to pay fixed premiums for a chosen policy term",
              ]}
            />
            <DetailCard
              title="Term Return of Premium (TROP)"
              img="/images/life/Term Return of Premium.png"
              points={[
                "Under this type of policy, all your paid premiums are refunded upon survival till the policy term",
                "These plans offer both protection and a survival benefit",
                "Life coverage provided by these plans is similar to that offered by basic term plans",
              ]}
            />
            <DetailCard
              title="No-Cost Term Insurance (Refund of Premium)"
              img="/images/life/No-Cost Term Insurance.jpeg"
              points={[
                "With ROP plans, you will get a full refund of the paid premium on early exit",
                "If you do not exit, the plan continues as a standard term policy",
                "The plan allows the policyholder to tailor it to their specific needs",
              ]}
            />
            <DetailCard
              title="Whole Life Insurance"
              img="/images/life/Whole Life Insurance.jpeg"
              points={[
                "Whole Life Insurance plans provide life cover till the age of 100",
                "These plans ensure that your family gets lifelong financial protection",
                "Such plans are ideal for those who want to leave a lasting legacy",
              ]}
            />
          </div>
        </div>

        {/* --- GROUP 2: INVESTMENT PLANS (GREEN THEME) --- */}
        <div className="bg-green-50/50 p-4 md:p-8 rounded-3xl border border-green-100">
          <div className="flex items-center space-x-2 mb-6 border-b border-green-200 pb-2">
            <Star className="text-green-600 fill-green-600 w-5 h-5" />
            <h2 className="text-green-600 font-bold text-xl md:text-2xl">
              Investment Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailCard
              title="Unit Linked Insurance Plan (ULIP)"
              img="/images/life/Unit Linked Insurance Plan (ULIP).jpeg"
              theme="green"
              points={[
                "ULIP plans combine insurance and market-linked investments",
                "In these plans, part of the premium goes to life cover, and the remaining is invested in funds",
                "The amount you receive depends on market performance",
              ]}
            />
            <DetailCard
              title="Endowment Policies"
              img="/images/life/Endowment Policies.jpeg"
              theme="green"
              points={[
                "Dual Benefit of insurance with savings",
                "Offers a lump-sum payout on survival and death",
                "Encourages disciplined savings",
              ]}
            />
            <DetailCard
              title="Pension Plans"
              img="/images/life/Pension Plans.jpeg"
              theme="green"
              points={[
                "Designed for financial security after retirement",
                "Regular income through an immediate or deferred annuity",
                "Ensures steady cash flow in your post-retirement",
              ]}
            />
            <DetailCard
              title="Child Plan"
              img="/images/life/Child Plan.png"
              theme="green"
              points={[
                "Best for securing your child's education and life goals",
                "Future premiums will be waived off if the parent passes away",
                "Guarantees funds for the child's future needs",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT FOR CARDS ---
function DetailCard({
  title,
  img,
  points,
  theme = "blue",
}: {
  title: string;
  img: string;
  points: string[];
  theme?: "blue" | "green";
}) {
  const bulletColor = theme === "blue" ? "text-blue-500" : "text-green-500";

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 hover:shadow-md transition-shadow">
      <div className="relative w-full md:w-32 h-32 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-2 border-b border-gray-100 pb-1 underline underline-offset-4 decoration-gray-300">
          {title}
        </h3>
        <ul className="space-y-1">
          {points.map((p, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-2 text-[12px] md:text-[13px] text-gray-600 leading-snug"
            >
              <span className={`${bulletColor} mt-1`}>✦</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
