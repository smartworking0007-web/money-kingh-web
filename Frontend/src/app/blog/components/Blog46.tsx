"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  Smile,
  Heart,
  TrendingUp,
  ShieldCheck,
  CreditCard,
  ShoppingBag,
  Briefcase,
  Layers,
  Sparkles,
  Gift,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog46 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: How does a good credit score reduce personal and mental stress?",
      a: "A high credit score gives you the ultimate peace of mind that you can quickly access affordable credit options (like home, personal, or business loans) at lower interest rates during critical lifecycle moments. It completely removes the anxiety of financial rejection when you need funds the most.",
    },
    {
      q: "Q2: How much money should I ideally keep in my emergency fund for true peace of mind?",
      a: "Ideally, you should aim to save three to six months' worth of essential living expenses (rent, food, insurance, and utilities). Having this buffer ensures you can comfortably manage sudden emergencies without disrupting your life or borrowing money under pressure.",
    },
    {
      q: "Q3: Can using credit cards actually improve my financial wellness?",
      a: "Yes, absolutely. When paid in full and on time every month, credit cards are powerful financial tools. They build a robust credit history, offer superior security over cash, and provide valuable cashback and rewards that lower your overall living costs.",
    },
    {
      q: "Q4: What is the fastest way to get out of debt-induced anxiety?",
      a: "Start by creating a clear, transparent list of all your current debts. Automate your minimum payments to avoid late fees, prioritize paying off high-interest debts first, or consider a low-interest loan consolidation strategy to simplify your payments.",
    },
    {
      q: "Q5: How can I manage my budget without feeling like I am depriving myself of happiness?",
      a: "Use the 50/30/20 budgeting rule. Allocate 50% of your income to absolute needs, 20% to savings and investments, and a guilt-free 30% to wants. This ensures you are building financial wellness while still enjoying the present moment.",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The Pursuit of Happiness: How Financial Wellness Leads to True Peace of Mind"
            category="FINANCIAL WELLNESS AND HAPPINESS"
            author="Sumit Mishra"
            date="May 25, 2026"
            image="/images/blog/blog-46.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors cursor-pointer tracking-widest gap-1"
              >
                <ArrowLeft size={14} />
                <Typography variant="caption" as="span" className="font-bold uppercase text-inherit">
                  Back to Blogs
                </Typography>
                </button>
            </div> 
            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-46.jpeg"
                  alt="A happy professional reviewing a high credit score, symbolizing financial wellness and happiness"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h4"
                  className="text-[#1e3a8a] uppercase mt-0"
                >
                  The Pursuit of Happiness: How Financial Wellness Leads to True Peace of Mind
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">May 25, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Target size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">Financial Wellness and Happiness</Typography>
                  </div>
                </div>

                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 mb-10">
                  <Typography variant="s1" className="text-gray-800 font-medium block mb-2">
                    Featured Snippet: What is the connection between financial wellness and happiness?
                  </Typography>
                  <Typography variant="b1" className="text-gray-600 block">
                    True happiness is deeply tied to financial wellness because personal stability directly reduces emotional and mental stress. Financial wellness is not about being a billionaire or having unlimited wealth; rather, it is the peace of mind that comes from establishing smart money habits, maintaining a healthy credit score, eliminating high-interest debt, and keeping an emergency fund ready. When you secure your finances, you eliminate a major source of anxiety, making room for lasting joy and well-being.
                  </Typography>
                </div>

                <Typography variant="b1" className="text-gray-600 mb-6 block">
                  We often hear the age-old phrase, &quot;money can’t buy happiness.&quot; While it is true that a massive bank balance doesn’t automatically grant permanent joy, there is an undeniable, scientifically proven connection between your financial wellness and your emotional happiness.
                </Typography>

                <Typography variant="b1" className="text-gray-600 mb-10 block">
                  True peace of mind rarely thrives in an environment of financial uncertainty. When you are constantly worrying about upcoming bills, unexpected medical costs, or mounting debts, your mental health takes a heavy hit. Achieving financial wellness isn&apos;t about hoarding extreme wealth or living an excessively restrictive life; it is about taking control of your financial destiny, making conscious money choices, and setting yourself up for a stress-free future.
                </Typography>

                <section className="space-y-12">
                  {/* Section 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Smile className="text-blue-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        1. Defining Financial Wellness in the Modern Era
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      Before we look at how money impacts our psychological well-being, we must first understand what financial wellness actually means. It is not a fixed number in a bank account. Instead, financial wellness is a dynamic state of living where you:
                    </Typography>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Comfortably meet your current monthly financial obligations.</li>
                      <li>Have the financial cushion to absorb unexpected life emergencies.</li>
                      <li>Are on track to meet your future financial goals (like retirement, buying a home, or starting a business).</li>
                      <li>Possess the financial freedom to make choices that allow you to enjoy life.</li>
                    </ul>
                    <Typography variant="b1" className="text-gray-600 block pt-2">
                      When these four criteria are met, financial anxiety drops significantly, clearing the path for genuine emotional happiness.
                    </Typography>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-green-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        2. The Credit Score as a Happiness Index
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      Many view a credit score as just a boring, three-digit number used exclusively by banks and lenders. In reality, it acts as a functional &quot;happiness index.&quot; A high credit score acts as a major confidence booster and a vital key to long-term financial freedom.
                    </Typography>
                    <Typography variant="b1" className="text-gray-600 block">
                      When your credit score is in excellent shape, it signals stability and trustworthiness to the entire financial ecosystem. It ensures that when you need to make major, exciting life steps—such as applying for a home loan, securing a business loan for your startup, or getting a premium credit card—the process is seamless, affordable, and completely stress-free.
                    </Typography>
                    <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-xl mt-2">
                      <Typography variant="caption" className="font-bold text-blue-900 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-600 block">
                        Make it a habit to check your credit score regularly. Staying informed helps you avoid sudden, unpleasant surprises when applying for credit, lowers interest rates on future loans, and provides incredible peace of mind.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 3 Table */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="text-purple-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        3. Credit Cards: A Mental Stressor vs. A Strategic Tool
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      Can a credit card actually bring joy, or is it a fast track to financial anxiety? The answer entirely depends on how you use it. When used recklessly to fund a lifestyle you cannot afford, credit cards become a heavy source of stress. However, when managed strategically, they transform into excellent tools for building credit, earning rewards, and unlocking lifestyle perks.
                    </Typography>
                    
                    <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-4 font-bold text-sm uppercase">Credit Card Behavior</th>
                            <th className="p-4 font-bold text-sm uppercase">Impact on Mental Health</th>
                            <th className="p-4 font-bold text-sm uppercase">Impact on Financial Wellness</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">Reckless Spending</td>
                            <td className="p-4 text-red-600">High Anxiety, Constant Worry</td>
                            <td className="p-4 text-gray-600">Damaged Credit, Mounting Debt</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">Strategic Usage</td>
                            <td className="p-4 text-green-600">Peace of Mind, Confidence</td>
                            <td className="p-4 text-gray-600">Strong Credit Profile, Free Rewards</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-purple-600 p-4 rounded-r-xl mt-2">
                      <Typography variant="caption" className="font-bold text-purple-900 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-600 block">
                        Align your credit card usage with your lifestyle goals. If you love traveling, look for a rewards card that accumulates air miles. If you want maximum savings on daily necessities, prioritize a reliable cashback card. Treat your credit card as a financial ally, not an extension of your monthly income.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-amber-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        4. The Psychological Power of Paying Bills on Time
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      Nothing dampens your daily mood quite like a late fee notification or an escalating interest penalty text message. Conversely, few things feel as psychologically satisfying as ticking off your financial obligations right on schedule.
                    </Typography>
                    <Typography variant="b1" className="text-gray-600 block">
                      Paying your credit card bills and loan EMIs on time keeps late fees away, continuously pushes your credit score upward, and instantly clears out mental clutter. It creates a sense of order and discipline that spills over into other areas of your life, such as your work performance and personal relationships.
                    </Typography>
                    <div className="bg-slate-50 border-l-4 border-amber-600 p-4 rounded-r-xl mt-2">
                      <Typography variant="caption" className="font-bold text-amber-900 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-600 block">
                        Use modern digital payment innovations like UPI apps or automate your fixed monthly bills via direct debits. Automating your financial responsibilities ensures your credit health is protected while you focus your mental energy on living your life.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="text-rose-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        5. Debunking the Dangerous Myth of &quot;Retail Therapy&quot;
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      We have all turned to &quot;retail therapy&quot; at some point. The sudden rush of dopamine when clicking &quot;buy now&quot; online or walking away from a physical store with a sleek new gadget is very real. However, that instant high is temporary and often followed by a severe financial hangover once the monthly statement arrives.
                    </Typography>
                    <Typography variant="b1" className="text-gray-600 block">
                      To turn retail therapy from a temporary, stressful distraction into sustainable joy, you need a smart spending framework that prioritizes value over impulse.
                    </Typography>
                    <div className="bg-slate-50 border-l-4 border-rose-600 p-4 rounded-r-xl mt-2">
                      <Typography variant="caption" className="font-bold text-rose-900 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-600 block">
                        Implement the strict &quot;24-hour rule&quot; for impulse purchases. If you see something you want, sleep on it for one night. If you still feel it adds genuine value to your life the next day, plan for it in your budget. Furthermore, always look for opportunities to utilize accumulated reward points or cashback to offset your lifestyle expenses rather than dipping into your core savings.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 6 Dark Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Heart size={150} />
                    </div>
                    <Typography
                      variant="h5"
                      className="text-blue-400 mb-4 uppercase relative z-10 mt-0"
                    >
                      6. Emergency Funds: The Ultimate Mental Sleep Aid
                    </Typography>
                    <Typography variant="b1" className="text-gray-300 relative z-10 block mb-6">
                      Life is completely full of unexpected events—from minor vehicle breakdowns and broken laptops to sudden medical emergencies. When you lack a financial safety net, these minor bumps feel like major, life-altering catastrophes. Building a robust emergency fund is arguably the most powerful action you can take to boost your emotional well-being.
                    </Typography>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 border-t border-gray-800 pt-6">
                      <div>
                        <Typography variant="s2" className="text-white font-bold block mb-1">Calculate Baseline</Typography>
                        <Typography variant="caption" className="text-gray-400 block">Find out exactly how much you need for rent, food, utilities, and existing EMIs each month.</Typography>
                      </div>
                      <div>
                        <Typography variant="s2" className="text-white font-bold block mb-1">Start Small</Typography>
                        <Typography variant="caption" className="text-gray-400 block">Don&apos;t get discouraged if you can&apos;t save six months of income immediately. Target a one-month buffer first.</Typography>
                      </div>
                      <div>
                        <Typography variant="s2" className="text-white font-bold block mb-1">Automate Savings</Typography>
                        <Typography variant="caption" className="text-gray-400 block">Move money into your emergency pool automatically every payday to eliminate temptation.</Typography>
                      </div>
                    </div>

                    <div className="mt-6 bg-slate-800 p-4 rounded-xl border border-slate-700">
                      <Typography variant="caption" className="font-bold text-blue-400 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-300 block">
                        Treat your emergency fund as a non-negotiable monthly bill. Automatically route a small percentage of your income into a separate high-yield savings account or a liquid fixed deposit the exact day you get paid so you never have the chance to spend it.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-cyan-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        7. Living Debt-Free is Living Worry-Free
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      Carrying high-interest debt is like carrying a physical weight on your shoulders every single day. It influences your relationships, limits your career choices, prevents you from taking calculated risks, and drains your daily happiness.
                    </Typography>
                    <Typography variant="b1" className="text-gray-600 block">
                      Prioritizing a debt-free lifestyle creates immediate room for joy. By tackling high-interest liabilities first and maintaining strict discipline with your repayments, you give your bank account—and your mind—the breathing room it deserves.
                    </Typography>
                    <div className="bg-slate-50 border-l-4 border-cyan-600 p-4 rounded-r-xl mt-2">
                      <Typography variant="caption" className="font-bold text-cyan-900 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-600 block">
                        If you are managing multiple high-interest debts across different cards or lenders, explore smart consolidation options. You can look into balance transfers or consolidate your debts into a single, structured personal or business loan with a lower, fixed interest rate. Consolidating your liabilities simplifies your monthly tracking and saves significant interest costs over time.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Sparkles className="text-indigo-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        8. Investing in Experiences Over Material Possessions
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      Psychological research from top universities consistently demonstrates that spending money on experiences brings far longer-lasting happiness than purchasing material goods. Material items lose their novelty quickly as we get used to them, but memories from trips, concerts, unique workshops, or family gatherings grow sweeter and more valuable over time.
                    </Typography>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                      <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
                        <Typography variant="s2" className="font-bold text-gray-900 block mb-1">No Comparison Trap</Typography>
                        <Typography variant="caption" className="text-gray-500 block">It is easy to compare your new phone to a neighbor’s better version, but your personal travel memories are completely unique to you.</Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
                        <Typography variant="s2" className="font-bold text-gray-900 block mb-1">Social Connection</Typography>
                        <Typography variant="caption" className="text-gray-500 block">Experiences usually involve other people, strengthening vital social bonds which are critical for true happiness.</Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
                        <Typography variant="s2" className="font-bold text-gray-900 block mb-1">Anticipation Joy</Typography>
                        <Typography variant="caption" className="text-gray-500 block">Planning and looking forward to an upcoming trip provides genuine happiness weeks before the event even occurs.</Typography>
                      </div>
                    </div>

                    <div className="bg-slate-50 border-l-4 border-indigo-600 p-4 rounded-r-xl mt-2">
                      <Typography variant="caption" className="font-bold text-indigo-900 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-600 block">
                        Use your personal finance tools to fund your adventures responsibly. Leverage co-branded travel credit cards to accumulate flight points, hotel discounts, and complimentary lounge access, turning your regular lifestyle expenses into deeply memorable life experiences.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Gift className="text-emerald-600 shrink-0" size={24} />
                      <Typography variant="h5" className="text-gray-900 uppercase my-0">
                        9. Sharing Happiness: The Beautiful Psychology of Giving
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      True financial wellness eventually opens the door to financial kindness. Generosity has a beautiful compounding effect on personal happiness. Contributing to a cause you care about, treating a loved one to a special meal, or supporting a local community business creates a deep sense of purpose and connection.
                    </Typography>
                    <Typography variant="b1" className="text-gray-600 block">
                      When you use your financial stability to lift others up, it reinforces a mindset of abundance rather than scarcity. You stop viewing money as something to be feared or hoarded and start viewing it as a force for positive change.
                    </Typography>
                    <div className="bg-slate-50 border-l-4 border-emerald-600 p-4 rounded-r-xl mt-2">
                      <Typography variant="caption" className="font-bold text-emerald-900 block mb-1">THE WELL-BEING HACK:</Typography>
                      <Typography variant="b2" className="text-gray-600 block">
                        Allocate a small, dedicated portion of your monthly budget as a &quot;giving fund.&quot; Whether it&apos;s tipping extra to a delivery partner, contributing to a registered charity, or helping out a friend in a temporary pinch, small acts of financial kindness multiply your own inner happiness.
                      </Typography>
                    </div>
                  </div>

                  {/* Section 10 Summary Pipeline */}
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 space-y-6">
                    <div className="flex items-center gap-3">
                      <Layers className="text-[#1e3a8a] shrink-0" size={28} />
                      <Typography variant="h5" className="text-blue-900 uppercase my-0">
                        10. The Ultimate Action Plan to Connect Wealth and Well-Being
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700">
                      Achieving financial wellness is a continuous journey that requires small, consistent steps. Here is a quick step-by-step summary checklist to align your finances with your mental peace:
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                      <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900">✓</span>
                        <Typography variant="b2"><strong>Audit Your Finances:</strong> Know exactly what is coming in and going out every month.</Typography>
                      </div>
                      <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900">✓</span>
                        <Typography variant="b2"><strong>Protect Your Credit Score:</strong> Keep track of your score and ensure zero late payments.</Typography>
                      </div>
                      <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900">✓</span>
                        <Typography variant="b2"><strong>Establish an Emergency Fund:</strong> Save consistently until you have a multi-month safety cushion.</Typography>
                      </div>
                      <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900">✓</span>
                        <Typography variant="b2"><strong>Consolidate Bad Debt:</strong> Move high-interest debts into structured, lower-interest options.</Typography>
                      </div>
                      <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900">✓</span>
                        <Typography variant="b2"><strong>Spend Mindfully:</strong> Use the 24-hour rule to curb impulsive retail therapy habits.</Typography>
                      </div>
                      <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900">✓</span>
                        <Typography variant="b2"><strong>Prioritize Experiences:</strong> Budget for memories, education, and relationships over temporary gadgets.</Typography>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="pt-4">
                    <Typography variant="b1" className="text-gray-600 block">
                      Money might not be the direct source of all joy, but financial confidence certainly paves a smooth, secure way toward it. By transforming your everyday money habits, optimizing your credit score, protecting your savings, and reducing unnecessary debt, you build an unshakeable foundation for long-term emotional well-being.
                    </Typography>
                    <Typography variant="b1" className="text-gray-600 block mt-4 font-semibold">
                      Take a moment today to evaluate your financial health, map out a clear budget, and make conscious choices that support both your growing wealth and your ultimate peace of mind.
                    </Typography>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h4"
                      className="text-[#1e3a8a] mb-8 uppercase underline decoration-blue-200 underline-offset-8 mt-0"
                    >
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-all"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-white transition-colors"
                          >
                            <Typography
                              variant="s2"
                              className="font-bold text-gray-900"
                            >
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp size={20} className="text-[#1e3a8a] shrink-0 ml-4" />
                            ) : (
                              <ChevronDown
                                size={20}
                                className="text-gray-400 shrink-0 ml-4"
                              />
                            )}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography
                                variant="b1"
                                className="text-gray-600"
                              >
                                {faq.a}
                              </Typography>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="mt-14">
                  <ShareSection />
                </div>
                <div className="mt-10 flex justify-center border-t pt-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 flex items-center gap-2 hover:text-[#1e3a8a] transition-all group"
                  >
                    <Typography variant="caption" as="span" className="font-bold uppercase tracking-widest text-inherit">
                      ← Back to Articles
                    </Typography>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};