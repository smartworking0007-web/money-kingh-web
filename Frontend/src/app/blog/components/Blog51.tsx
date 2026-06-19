"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog51 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Global Markets React to Historic U.S.–Iran Peace Agreement: The 2026 Financial Realignment"
            category="GEOPOLITICS & FINANCE"
            author="Sumit Mishra"
            date="June 18, 2026"
            image="/images/blog/blog-51.jpeg"
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
                  src="/images/blog/blog-51.jpeg"
                  alt="Global stock market graph rising with US and Iran flags"
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
                  Global Markets React to Historic U.S.–Iran Peace Agreement:
                  The 2026 Financial Realignment
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 18, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    The global financial landscape experienced an absolute
                    seismic shift following the sudden, historic signing of the
                    Islamabad Memorandum of Understanding (MoU) between the
                    United States and the Islamic Republic of Iran. Executed
                    digitally and finalized in person by U.S. President Donald
                    Trump during a high-profile dinner with French President
                    Emmanuel Macron at the Palace of Versailles, alongside a
                    simultaneous sign-off from Iranian President Masoud
                    Pezeshkian in Tehran, this 14-point diplomatic breakthrough
                    has successfully brought an immediate, unconditional halt to
                    a brutal 107-day war.
                  </p>

                  <h2>Crude Oil Futures Plummet as Supply Risk Vanishes</h2>
                  <p>
                    The most immediate, volatile, and deeply impactful market
                    reaction occurred where the geopolitical friction was
                    tightest: the global energy sector. The 107-day war had
                    effectively choked off the flow of fossil fuels from West
                    Asia, forcing energy markets to price in an unprecedented
                    war premium.
                  </p>

                  <h3>The Reopening of the Ultimate Energy Chokepoint</h3>
                  <p>
                    The core anchor of the signed MoU is the immediate, absolute
                    reopening of the Strait of Hormuz. With nearly 20% of the
                    world’s petroleum passing through this gateway, the removal
                    of military threats caused crude oil futures to enter a
                    steep correction. Brent crude futures slid to $78.66, while
                    WTI dropped to $75.81 as the structural risk evaporated.
                  </p>

                  <h2>
                    Global Equities Witness an Aggressive, Relief-Driven Surge
                  </h2>
                  <p>
                    Major stock exchanges around the planet celebrated the
                    diplomatic breakthrough with an explosive stock market
                    surge. With the constant shadow of a multi-national war
                    removed, institutional capital rotated back into pro-growth
                    assets.
                  </p>

                  <h3>Erasing the War Premium</h3>
                  <p>
                    Airlines, international logistics corporations, and
                    manufacturing giants emerged as primary beneficiaries. As
                    jet fuel prices stabilized and maritime safety returned to
                    the Persian Gulf, global transport equities rallied, setting
                    a rock-solid foundation for an accelerated global economic
                    recovery.
                  </p>

                  <h2>Safe-Haven Assets Retreat: The Great Rotation</h2>
                  <p>
                    For 100+ days, investors piled into gold and the U.S.
                    Dollar. Now, that defensive trade is experiencing an orderly
                    unwinding. Gold prices faced a sharp correction as capital
                    poured out of non-yielding precious metals and back into
                    dividend-paying equities, while the U.S. Dollar Index (DXY)
                    softened, reflecting a renewed appetite for international
                    commerce.
                  </p>

                  <h2>Deconstructing the 14-Point Framework</h2>
                  <p>
                    Investors must audit the transactional clauses of the MoU,
                    including the removal of naval blockades within 30 days, the
                    $24 billion asset thaw, and the $300 billion post-war
                    reconstruction fund. These mechanisms are the drivers of the
                    next market cycle.
                  </p>

                  <h2>The 60-Day Technical Window</h2>
                  <p>
                    While the reaction is bullish, analysts urge caution. A
                    60-day negotiation window is now open. Key variables to
                    watch include the status of nuclear enrichment stockpiles
                    and conventional ballistic missile infrastructure. Any hitch
                    in these negotiations could instantly re-introduce
                    volatility.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200"> 
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4">
                      Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: How did the peace agreement affect inflation ?
                        </strong>
                        <br />
                        Lower shipping and energy costs are easing supply chain
                        pressure, reducing the need for central banks to keep
                        rates elevated.
                      </li>
                      <li>
                        <strong>Q: What happens to oil supply?</strong> 
                        <br />
                        The dismantling of port blockades and new U.S. Treasury
                        waivers will seamlessly reintegrate Iranian oil into the
                        global marketplace.
                      </li>
                      <li>
                        <strong>Q: Why did gold slide?</strong>
                        <br />
                        Investors liquidating safe-haven hedges to capture
                        yields in a recovering stock market.
                      </li>
                      <li>
                        <strong>Q: What are the primary risks?</strong>
                        <br />
                        Failure to reach consensus on enrichment caps or stalled
                        asset releases during the 60-day technical window.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Need Professional Financial Guidance?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    At Money King Financial Services, we specialize in
                    simplifying complex financial decisions. Contact our team
                    today to get a customized roadmap for your financial goals.
                  </Typography>
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
