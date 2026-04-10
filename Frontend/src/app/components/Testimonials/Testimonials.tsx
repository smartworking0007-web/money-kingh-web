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
  nameClass: string;
}

const marqueeItems: TestimonialItem[] = [
  {
    type: "text",
    content:
      "Money King Financial Services helped me secure a business loan within 48 hours. The process was transparent and the team was extremely helpful throughout.",
    avatar: "/images/Testimonial/1.jpeg",
    name: "Rajesh Khanna",
    role: "SME Business Owner",
    nameClass: "font-sans",
  },
  {
    type: "text",
    content:
      "Best experience with personal loans! Minimal documentation and very competitive interest rates. Highly recommend them for any financial needs.",
    avatar: "/images/Testimonial/2.jpeg",
    name: "Sandeep Verma",
    role: "Former",
    nameClass: "font-sans",
  },
  {
    type: "text",
    content:
      "I was struggling with home loan approvals until I met the team at Money King. They managed everything professionally and got it sanctioned quickly.",
    avatar: "/images/Testimonial/3.jpeg",
    name: "Maneesh Shingh",
    role: "Property Investor",
    nameClass: "font-sans",
  },
  {
    type: "text",
    content:
      "Excellent service and honest advice. They don't just sell loans; they provide the right financial solution according to your capacity.",
    avatar: "/images/Testimonial/4.png",
    name: "Anil Patel",
    role: "Retailer",
    nameClass: "font-sans",
  },
  {
    type: "text",
    content:
      "Getting a gold loan was never this easy. The staff is polite and the valuation process is very fair. Thank you Money King team!",
    avatar: "/images/Testimonial/5.jpeg",
    name: "Ajay Sharma",
    role: "Entrepreneur",
    nameClass: "font-sans",
  },
];

const TestimonialsMarquee = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Smooth infinite loop ke liye items duplicate kiye
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
            duration: 40,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, containerWidth]);

  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-[#1A1A37] font-bold mb-4">
            What My Clients Say?
          </Typography>
          <p className="text-gray-500 max-w-2xl mx-auto">
            See how Money King Financial Services is helping people achieve
            their dreams with easy and affordable loan solutions.
          </p>
        </div>

        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-8"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() =>
              controls.start({
                x: [null, -containerWidth],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                },
              })
            }
          >
            {doubledItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between shrink-0 rounded-32px w-[380px] min-h-[380px] p-10 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all hover:shadow-lg border border-gray-50"
              >
                <div>
                  {/* Quote Icon */}
                  <div className="mb-6 text-blue-600 opacity-20">
                    <svg
                      width="40"
                      height={30}
                      viewBox="0 0 40 30"
                      fill="currentColor"
                    >
                      <path d="M0 18.2V0h16.4v18.2L10.9 30H1.8L8.2 18.2H0zm23.6 0V0H40v18.2L34.5 30h-9.1L31.8 18.2H23.6z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <p className="text-[#4F4F6B] leading-relaxed text-[17px] font-normal">
                    {item.content}
                  </p>
                </div>

                {/* User Info - Image Circle Fix Yahan Hai */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink:0 border border-gray-100 relative">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[18px] text-[#1A1A37] m-0 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[14px] m-0 mt-1 font-semibold text-blue-600 uppercase tracking-wider">
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