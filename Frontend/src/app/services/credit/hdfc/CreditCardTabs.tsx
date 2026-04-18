"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import Image from "next/image";

interface Card {
  name: string;
  image: string;
  tags: string[];
}

interface CardData {
  [key: string]: Card[];
}

const categories: string[] = [
  "In the Spotlight",
  "Travel",
  "Rewards",
  "Lifestyle",
  "Cashback",
  "Fuel & Insurance",
  "Business",
];

const cardData: CardData = {
  "In the Spotlight": [
    { name: "HDFC Card", image: "/images/credit/hdfc.jpg", tags: ["Most Popular", "Premium"] },
  ],
  Travel: [
    { name: "Travel 1", image: "/images/credit/Travel 1.jpeg", tags: ["Premium metal", "1% Forex"] },
    { name: "Travel 2", image: "/images/credit/Travel2.jpeg", tags: ["Premium Metal", "Zero Forex"] },
    { name: "Travel 3", image: "/images/credit/Travel3.jpeg", tags: ["Lifestyle", "Zero Forex"] },
  ],
  Rewards: [
    { name: "Rewards 1", image: "/images/credit/Rewards1.jpeg", tags: ["5X Points", "Rewards"] },
    { name: "Rewards 2", image: "/images/credit/Rewards2.jpeg", tags: ["Global Access", "Points"] },
    { name: "Rewards 3", image: "/images/credit/Rewards3.jpeg", tags: ["Dining", "10X Points"] },
  ],
  Lifestyle: [
    { name: "Lifestyle 1", image: "/images/credit/Lifestyle1.jpeg", tags: ["Luxury", "Golf"] },
    { name: "Lifestyle 2", image: "/images/credit/Lifestyle2.jpeg", tags: ["Movie", "Shopping"] },
    { name: "Lifestyle 3", image: "/images/credit/Lifestyle3.jpeg", tags: ["Premium", "Lounge"] },
  ],
  Cashback: [
    { name: "Cashback 1", image: "/images/credit/Cashback1.jpeg", tags: ["5% Cashback", "Online"] },
    { name: "Cashback 2", image: "/images/credit/Cashback2.jpeg", tags: ["Unlimited", "Shopping"] },
    { name: "Cashback 3", image: "/images/credit/Cashback3.jpeg", tags: ["Grocery", "Utility"] },
  ],
  "Fuel & Insurance": [
    { name: "Fuel 1", image: "/images/credit/Fuel1.jpeg", tags: ["Surcharge Waiver", "Fuel"] },
    { name: "Fuel 2", image: "/images/credit/Fuel2.jpeg", tags: ["Insurance", "Safe"] },
    { name: "Fuel 3", image: "/images/credit/Fuel3.jpeg", tags: ["Turbo", "Points"] },
  ],
  Business: [
    { name: "Business 1", image: "/images/credit/Business1.jpeg", tags: ["Corporate", "GST"] },
    { name: "Business 2", image: "/images/credit/Business2.jpeg", tags: ["Travel", "Business"] },
    { name: "Business 3", image: "/images/credit/Business3.jpeg", tags: ["Low Interest", "Elite"] },
  ],
};

export default function CreditCardTabs() {
  const [activeTab, setActiveTab] = useState<string>("Travel");

  return (
    /* -mt-32 (mobile par) aur -mt-40 (desktop par) taaki ye upar shift ho jaye. 
       pt-0 ensures koi extra padding na ho. */
    <section className="w-full bg-white text-slate-900 pt-0 pb-12 md:pb-20 px-4 md:px-6 font-lexend -mt-80 md:-mt-60 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-8 md:mb-12">
          {/* pt-2 mobile par halka gap rakhta hai headline ke liye */}
          <Typography variant="h2" className="text-2xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 pt-2 md:pt-4">
            Explore our range of credit cards
          </Typography>

          {/* --- TABS NAVIGATION (Mobile Friendly Horizontal Scroll) --- */}
          <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-3 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-sm font-semibold transition-all duration-300 border whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#111111] text-white border-[#111111] shadow-md"
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-xl md:text-4xl font-bold text-slate-800">
            {activeTab} Credit Cards
          </Typography>
          <p className="text-slate-500 text-xs md:text-lg max-w-2xl leading-relaxed">
            {activeTab === "Travel" 
              ? "Travel in comfort with airport lounge access, booking discounts and more."
              : `Best-in-class benefits for your ${activeTab.toLowerCase()} needs.`}
          </p>

          {/* --- CARDS GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-4 md:pt-6">
            {cardData[activeTab]?.map((card, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-xl mb-4 transition-transform duration-500 md:group-hover:scale-[1.03] shadow-sm bg-slate-50 border border-slate-100">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-contain p-2 md:p-4"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[9px] md:text-xs font-bold text-slate-600 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}