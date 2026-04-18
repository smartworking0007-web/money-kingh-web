"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2, XCircle, Clock4, ThumbsUp } from "lucide-react";

const contentData = {
  inclusions: [
    {
      title: "Hospitalisation Expenses",
      desc: "Covers room rents, ICU charges, surgery expenses, and doctor consultations.",
    },
    {
      title: "Pre & Post-Hospitalisation",
      desc: "Covers medical expenses incurred before and after hospitalisation for a fixed period.",
    },
    {
      title: "Road Traffic Accident",
      desc: "Accidents are unpredictable. Most plans cover in-patient hospitalisations due to road accidents.",
    },
    {
      title: "AYUSH Cover",
      desc: "Covers alternative treatments like Ayurveda, Yoga, Unani, Siddha, and Homeopathy.",
    },
    {
      title: "Health Check-up",
      desc: "Policies often cover the expenses incurred for annual or periodic preventive health check-ups.",
    },
    {
      title: "Automatic Restoration",
      desc: "Restores 100% of Sum Insured automatically after it's exhausted during the policy year.",
    },
  ],
  exclusions: [
    {
      title: "Self-Inflicted Injuries",
      desc: "Any form of intentional self-inflicted injuries will not be covered.",
    },
    {
      title: "Obesity/Weight Control",
      desc: "Expenses incurred for the treatment of obesity or weight control are not covered.",
    },
    {
      title: "Cosmetic Surgery",
      desc: "Plastic or cosmetic surgery performed to enhance appearance is generally excluded.",
    },
    {
      title: "Hazardous Sports",
      desc: "Health complications due to indulging in hazardous or adventure sports are not covered.",
    },
    {
      title: "Dental Treatments",
      desc: "Excluded unless necessitated by accidental injuries requiring hospitalisation.",
    },
    {
      title: "Medical Aid",
      desc: "Cost of spectacles, hearing aids, wheelchairs, and crutches are usually not covered.",
    },
  ],
  waiting: [
    {
      title: "Specific Diseases",
      desc: "Certain ailments have a fixed waiting period before they are covered by the insurer.",
    },
    {
      title: "Maternity Benefit",
      desc: "Maternity and newborn cover can be availed only after completing the specified waiting period.",
    },
    {
      title: "Initial Waiting Period",
      desc: "A 30-day wait applies from day 1, except for hospitalisation due to accidental injuries.",
    },
    {
      title: "Pre-Existing Diseases",
      desc: "Existing health conditions are covered only after the completion of the PED waiting period.",
    },
  ],
};

export default function HealthPlanGuide() {
  const [activeTab, setActiveTab] = useState<
    "inclusions" | "exclusions" | "waiting"
  >("inclusions");

  const icons = {
    inclusions: <CheckCircle2 className="w-4 h-4 text-blue-600" />,
    exclusions: <XCircle className="w-4 h-4 text-red-500" />,
    waiting: <Clock4 className="w-4 h-4 text-orange-500" />,
  };

  return (
    <section className="w-full bg-slate-50 py-10 md:py-16 px-4 font-lexend -mt-20 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-none">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Typography
            variant="h3"
            className="text-xl md:text-3xl font-black text-slate-900 mb-4 mt-0"
          >
            How to choose the best health insurance plan?
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 text-[11px] md:text-sm leading-relaxed mt-0"
          >
            Knowing the inclusions and exclusions help you choose the best
            medical insurance plan. Here is a guide to help you through the
            process.
          </Typography>
        </div>

        {/* --- TABS --- */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-200/50 p-1 rounded-xl flex items-center gap-1 border border-slate-200 overflow-x-auto no-scrollbar">
            {(["inclusions", "exclusions", "waiting"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-8 py-2 md:py-2.5 rounded-lg font-bold text-[10px] md:text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab === "waiting" ? "Waiting Period" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID CARDS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 animate-in fade-in duration-500">
          {contentData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors">
                {activeTab === "inclusions" ? (
                  <ThumbsUp className="w-4 h-4" />
                ) : (
                  icons[activeTab]
                )}
              </div>
              <Typography
                variant="h5"
                className="text-[12px] md:text-base font-bold  mb-2 mt-0 leading-tight"
              >
                {item.title}
              </Typography>
              <Typography
                variant="b2"
                className="text-slate-500 text-[10px] md:text-[13px] leading-snug mt-0 line-clamp-3 md:line-clamp-none"
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
