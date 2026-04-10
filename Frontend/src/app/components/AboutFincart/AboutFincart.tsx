"use client"; // Required for animations in Next.js App Router

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white -mt-12 md:-mt-20 pt-0 pb-10 md:pb-24 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        
        {/* --- LEFT SIDE: IMAGE CONTAINER (Slides from Left) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Main Team Photo */}
          <div className="relative w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] overflow-hidden rounded-full shadow-2xl z-20 border-4 border-white">
            <Image
              src="/images/teame.jpeg"
              alt="Money King Team"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Logo Badge (Slightly delayed pop-in) */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            className="absolute bottom-[-5%] right-[0%] sm:bottom-[5%] sm:right-[5%] w-28 h-28 md:w-44 md:h-44 bg-white rounded-full p-2 shadow-xl z-30 flex items-center justify-center"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/circleee.png"
                alt="Money King Logo"
                fill
                className="object-contain p-2"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT SIDE: CONTENT (Slides from Right) --- */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <Typography
            variant="h5"
            as="h5"
            className="text-xl md:text-3xl lg:text-5xl font-black text-[#111] tracking-tight leading-tight"
          >
            Welcome to Money King
          </Typography>

          <div className="space-y-4">
            <Typography
              variant="b1"
              className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0"
            >
              Money King Financial Services Pvt Ltd is your trusted partner for
              fast loans across PAN India. We offer quick loan approval, minimal
              documentation, and the lowest interest rates from India’s top
              banks & NBFCs.
            </Typography>

            <Typography
              variant="b1"
              className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0"
            >
              Whether you need working capital, machinery loan, invoice
              discounting, or expansion funding, our experts deliver tailored
              MSME loan solutions to help your business grow and thrive.
            </Typography>
          </div>

          <div className="pt-4">
            <Link href="/about">
              <button className="bg-[#770079] text-white font-bold px-8 py-3 md:px-10 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95">
                About us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;