"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { motion, useAnimation } from "framer-motion";

interface TestimonialItem {
  type: "text";
  content: string;
  avatar: string;
  name: string;
  role: string;
}

const marqueeItems: TestimonialItem[] = [
  {
    type: "text",
    content: "Money King Financial Services helped me secure a business loan within 48 hours. The process was transparent and the team was extremely helpful.",
    avatar: "/images/Testimonial/1.jpeg",
    name: "Rajesh Khanna",
    role: "SME Business Owner",
  },
  {
    type: "text",
    content: "Best experience with personal loans! Minimal documentation and very competitive interest rates. Highly recommend them for financial needs.",
    avatar: "/images/Testimonial/2.jpeg",
    name: "Sandeep Verma",
    role: "Professional",
  },
  {
    type: "text",
    content: "I was struggling with home loan approvals until I met the team at Money King. They managed everything professionally and got it sanctioned quickly.",
    avatar: "/images/Testimonial/3.jpeg",
    name: "Maneesh Singh",
    role: "Property Investor",
  },
  {
    type: "text",
    content: "Excellent service and honest advice. They don't just sell loans; they provide the right financial solution according to your capacity.",
    avatar: "/images/Testimonial/4.png",
    name: "Anil Patel",
    role: "Retailer",
  },
  {
    type: "text",
    content: "Getting a gold loan was never this easy. The staff is polite and the valuation process is very fair. Thank you Money King team!",
    avatar: "/images/Testimonial/5.jpeg",
    name: "Ajay Sharma",
    role: "Entrepreneur",
  },
];

const TestimonialsMarquee = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const doubledItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 3);
    }
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: [0, -containerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // Thoda fast marquee
            ease: "linear",
          },
        },
      });
    }
  }, [controls, containerWidth]);

  return (
    <section className="py-12 md:py-20 overflow-hidden bg-[#FBFBFF] font-lexend">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <Typography variant="h3" className="text-[#1A1A37] font-bold mb-3">
            What Our Clients Say
          </Typography>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Trusted by thousands for simple and affordable financial solutions.
          </p>
        </div>

        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-5 md:gap-6"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() =>
              controls.start({
                x: [null, -containerWidth],
                transition: {
                  x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
                },
              })
            }
          >
            {doubledItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between shrink-0 rounded-2xl w-[280px] md:w-[320px] p-6 md:p-8 bg-white border border-gray-100 shadow-[0_8px_20px_-12px_rgba(0,0,0,0.08)] hover:border-blue-200 transition-all duration-300"
              >
                <div>
                  <div className="mb-4 text-blue-500 opacity-20">
                    <svg width="30" height="22" viewBox="0 0 40 30" fill="currentColor">
                      <path d="M0 18.2V0h16.4v18.2L10.9 30H1.8L8.2 18.2H0zm23.6 0V0H40v18.2L34.5 30h-9.1L31.8 18.2H23.6z" />
                    </svg>
                  </div>

                  <p className="text-[#4F4F6B] leading-relaxed text-[15px] md:text-[16px] font-medium">
                    {item.content}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-gray-50 pt-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 relative shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-[15px] md:text-[16px] text-[#1A1A37] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] md:text-[12px] font-bold text-blue-600 uppercase tracking-tight">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;