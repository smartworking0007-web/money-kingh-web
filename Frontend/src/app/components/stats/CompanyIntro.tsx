"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock } from "lucide-react";
import { Typography } from "../ui/Typography";

const CompanyIntro: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* --- Dynamic Background Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-[5%] md:left-[10%] w-[60%] md:w-[40%] h-[30%] md:h-[40%] rounded-full bg-blue-50/50 blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-0 right-[5%] md:right-[10%] w-[50%] md:w-[30%] h-[30%] rounded-full bg-emerald-50/50 blur-[80px] md:blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6">
        {/* --- Header Section --- */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Typography
              variant="h1"
              as="h2"
              className="text-gray-900 m-0 leading-tight text-2xl md:text-4xl lg:text-5xl font-bold"
            >
              Fueling Dreams With <span className="text-blue-600">Smart Capital</span>
            </Typography>

            <div className="max-w-xl mx-auto mt-3 md:mt-4">
              <Typography
                variant="b2"
                className="text-gray-500 m-0 leading-relaxed text-sm md:text-base"
              >
                Money King bridges the gap between ambition and execution with
                PAN-India lending and maximum transparency.
              </Typography>
            </div>
          </motion.div>
        </div>

        {/* --- Feature Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <Typography
              variant="h3"
              className="text-gray-900 m-0 leading-tight text-xl md:text-3xl font-semibold"
            >
              Analyze Your <span className="text-blue-600">Wealth</span>
            </Typography>

            <Typography
              variant="b2"
              className="text-gray-600 mt-3 md:mt-4 mb-8 m-0 leading-relaxed text-sm md:text-base"
            >
              Our documentation-light process is built for the speed of modern
              Indian business. We eliminate red tape so you can focus on growth.
            </Typography>

            <div className="grid gap-5 max-w-sm mx-auto lg:mx-0 text-left">
              {[
                {
                  title: "Rapid Approval",
                  desc: "Funds processed within 48 hours.",
                  icon: Clock,
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  title: "Transparent",
                  desc: "Absolute clarity in terms. No hidden fees.",
                  icon: Shield,
                  color: "bg-emerald-50 text-emerald-600",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-gray-50"
                >
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-sm`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Typography
                      variant="s2"
                      className="text-gray-900 m-0 font-bold text-sm md:text-base"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="b3"
                      className="text-gray-500 m-0 text-xs md:text-sm"
                    >
                      {item.desc}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md mx-auto lg:mx-0 order-1 lg:order-2 lg:ml-auto"
          >
            <div className="relative z-10 p-1.5 md:p-2 rounded-[2.5rem] bg-gray-100/50 border border-gray-100">
              <div className="aspect-square sm:aspect-4/3 relative rounded-[2.2rem] flex items-center justify-center overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/23.png')` }}
                />
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-black/40" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;