"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog61 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer w-full flex justify-center px-4">
          <BlogCard1
            title="Discover Your MoneySign®: What Does Your Financial Personality Say About Your Money Habits?"
            category="BEHAVIORAL FINANCE"
            author="Sumit Mishra"
            date="June 30, 2026"
            image="/images/blog/blog-61.jpg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <button onClick={() => setIsOpen(false)} className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] gap-1">
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">Back to Blogs</Typography>
            </button>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image 
                  src="/images/blog/blog-61.jpg" 
                  alt="An infographic showing the various MoneySign" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography variant="h5" className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4">
                  Discover Your MoneySign®: What Does Your Financial Personality Say About Your Money Habits?
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 30, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>Financial success is rarely a matter of raw intelligence or access to secret investment tips; it is almost entirely a matter of behavior. Most people approach their finances through the lens of pure logic—calculating compound interest, tracking expenses, and setting budgets—only to find themselves falling back into the same habits month after month.</p>
                  
                  <p>Your <strong>MoneySign®</strong> is your financial DNA—a unique identity that explains the <em>why</em> behind your actions. By understanding your specific financial personality, you can move from a state of reactive stress to proactive control.</p>

                  <h2>1. The Psychology of Money: Why Logic Isn’t Enough</h2>
                  <p>The MoneySign® framework is built on the foundation of behavioral finance, utilizing the scientifically validated <strong>OCEAN model</strong> (Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism). These five dimensions determine how you perceive risk, value current consumption versus future security, and react to social pressure.</p>

                  <h2>2. Exploring the Eight MoneySign® Archetypes</h2>
                  <p>Every individual displays a primary MoneySign® archetype:</p>
                  <ul>
                    <li><strong>The Persistent Horse:</strong> High conscientiousness; masters of automation and steady, long-term growth.</li>
                    <li><strong>The Tactical Tiger:</strong> High risk-tolerance; thrives on market agility and spotting trends.</li>
                    <li><strong>The Virtuous Elephant:</strong> High stability; brings deep planning and practicality, preferring tried-and-tested assets.</li>
                  </ul>

                  <h2>3. Aligning Your Strategy with Your Nature</h2>
                  <p>The greatest mistake in personal finance is trying to adopt a strategy that contradicts your personality. If you are an <strong>Opportunistic Lion</strong>—someone high in extraversion and motivation—you will never succeed trying to follow a boring, restrictive budget. Instead, lean into your nature: allocate a specific play money bucket for high-energy ventures while automating your core savings.</p>

                  <h2>4. Identifying Your Financial Blind Spots</h2>
                  <p>Every MoneySign® comes with a shadow side. For the Persistent Horse, the danger is familiarity bias—sticking to a strategy simply because it worked in the past. For the Social Spender, the risk is lifestyle inflation. By knowing your MoneySign®, you can proactively install financial guardrails.</p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2"><HelpCircle size={20}/> Frequently Asked Questions</h2>
                    <ul className="space-y-4">
                      <li><strong>Q: Can my MoneySign® change?</strong><br/>While core personality traits are stable, your expression of them evolves through life experience and financial education.</li>
                      <li><strong>Q: What if I have traits from multiple profiles?</strong><br/>Most people are a blend. The goal is to identify your dominant behavioral trait so you can proactively manage your biggest risks.</li>
                      <li><strong>Q: Is knowing my personality enough to get rich?</strong><br/>No, it is the foundation. Strategy and discipline are required, but they work best when they don t clash with your innate temperament.</li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography variant="h5" className="text-blue-400 uppercase mb-3">
                    Ready to stop fighting your natural instincts?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Take the Free MoneySign® Assessment today and get a personalized strategy built specifically for your unique financial personality.
                  </Typography>
                </div>

                <div className="mt-14"><ShareSection /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};