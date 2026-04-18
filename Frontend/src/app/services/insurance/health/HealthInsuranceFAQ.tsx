"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  { q: "What is health insurance?", a: "Health insurance is a policy that covers medical expenses such as hospitalization, treatments, surgeries, and preventive care, helping you avoid financial burden." },
  { q: "Why is health insurance important?", a: "It protects you from high medical costs, ensures access to quality healthcare, and safeguards your savings during emergencies." },
  { q: "Who should buy health insurance?", a: "Everyone—whether young, old, salaried, or self-employed—should have health insurance to stay financially protected." },
  { q: "What is a cashless facility?", a: "Cashless insurance allows you to receive treatment at network hospitals without paying upfront. The insurer settles the bill directly." },
  { q: "What is a family floater plan?", a: "A family floater plan covers all family members under a single policy with a shared sum insured, making it cost-effective." },
  { q: "What are pre-existing diseases?", a: "These are medical conditions you have before purchasing the policy. They are covered after a specific waiting period." },
  { q: "What is the waiting period?", a: "The waiting period is the time you need to wait before certain benefits, like pre-existing disease coverage, become active." },
  { q: "Does it cover COVID-19?", a: "Yes, most modern health insurance plans include coverage for COVID-19 and other infectious diseases." },
  { q: "Are ambulance charges covered?", a: "Yes, many health insurance policies cover ambulance expenses during medical emergencies." },
  { q: "What are pre & post-hospitalization expenses?", a: "Expenses incurred before hospitalization (tests) and after discharge (medicines, follow-ups) are covered under most plans." },
  { q: "Can I get tax benefits?", a: "Yes, premiums paid are eligible for tax deductions under Section 80D of the Income Tax Act." },
  { q: "How much coverage should I take?", a: "It depends on your lifestyle, but it is generally recommended to have at least ₹5–10 lakh coverage." },
  { q: "What is not covered?", a: "Common exclusions include cosmetic procedures, self-inflicted injuries, and pre-existing conditions during the waiting period." },
  { q: "How to choose the best plan?", a: "Compare plans based on coverage, premium, hospital network, claim settlement ratio, and benefits." },
  { q: "How do I claim health insurance?", a: "You can file a claim either through cashless treatment at network hospitals or via reimbursement by submitting bills." },
];

export default function HealthInsuranceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-12 px-4 font-lexend -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-none">
      <div className="max-w-3xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl mb-3">
            <HelpCircle className="text-[#004687] w-5 h-5" />
          </div>
          <Typography variant="h3" className="text-xl md:text-3xl font-black text-slate-900 mt-0 mb-2">
            Health Insurance FAQs
          </Typography>
          <p className="text-slate-500 text-[11px] md:text-sm font-medium">
            Everything you need to know about protecting your health.
          </p>
        </div>

        {/* --- COMPACT ACCORDION --- */}
        <div className="space-y-2">
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl border transition-all duration-200 ${
                openIndex === idx 
                ? "border-blue-200 bg-blue-50/30" 
                : "border-slate-100 bg-white hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-3.5 md:p-4 text-left"
              >
                <span className={`font-bold text-[12px] md:text-base pr-4 leading-tight ${openIndex === idx ? "text-[#004687]" : "text-slate-700"}`}>
                  {idx + 1}. {faq.q}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-[#004687]" : "text-slate-400"}`} 
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-[11px] md:text-sm text-slate-500 leading-relaxed border-t border-blue-100/50 pt-3 mx-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}