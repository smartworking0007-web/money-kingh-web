"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Shield,
  Clock,
  LucideIcon,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Typography } from "../ui/Typography";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Building2,
    value: "9+",
    label: "Years Experience",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Shield,
    value: "10K+",
    label: "Businesses Funded",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Clock,
    value: "48hr",
    label: "Quick Approval",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const CompanyIntro: React.FC = () => {
  return (
    /* pt-24 (mobile) aur md:pt-32 (desktop) header overlap ko rokhne ke liye */
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-32">
      
      {/* --- Background UI Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-blue-50 blur-[100px]" />
        <div className="absolute bottom-[5%] right-[-5%] w-[25%] h-[25%] rounded-full bg-emerald-50 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- Top Hero Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8"
            >
              <Trophy className="w-4 h-4 text-primary" />
              <Typography
                variant="b3"
                as="span"
                className="font-bold uppercase tracking-widest !m-0 text-gray-500"
              >
                Trusted Financial Partner Since 2016
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="d2"
                as="h1"
                className="text-gray-900 !m-0 leading-tight tracking-tight font-bold"
              >
                Fueling Your Dreams With <br />
                <span className="text-primary relative inline-block">
                  Smart Capital
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 25 0 50 5 T 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </Typography>

              <div className="mt-8 max-w-xl">
                <Typography
                  variant="s1"
                  className="text-gray-600 !m-0 leading-relaxed"
                >
                  Money King Financial Services bridges the gap between your
                  ambition and execution. Experience PAN-India lending with zero
                  hurdles and maximum transparency.
                </Typography>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95"
                >
                  <Typography
                    variant="b2"
                    as="span"
                    className="!m-0 text-gray-700 font-semibold"
                  >
                    Apply For Loan
                  </Typography>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Users className="w-5 h-5 text-primary" />
                  <Typography
                    variant="b2"
                    as="span"
                    className="font-semibold text-gray-700 !m-0"
                  >
                    10,000+ Happy Clients
                  </Typography>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- Interactive Stats Grid (Right Side) --- */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <Typography
                    variant="h2"
                    as="h3"
                    className="!m-0 text-gray-900 leading-none font-bold"
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="b2"
                    as="p"
                    className="!m-0 text-gray-500 font-medium uppercase tracking-wide mt-1"
                  >
                    {stat.label}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Story Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gray-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
            <div className="md:w-1/3">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Sparkles className="w-5 h-5" />
                <Typography
                  variant="b2"
                  className="uppercase tracking-widest text-white !m-0"
                >
                  The Money King Legacy
                </Typography>
              </div>
              <Typography
                variant="h3"
                as="h2"
                className="text-white !m-0 font-bold"
              >
                Our Story
              </Typography>
            </div>

            <div className="md:w-2/3 border-l-0 md:border-l border-white/10 md:pl-12">
              <Typography
                variant="b1"
                className="text-gray-300 leading-loose !m-0"
              >
                Founded in 2016 by a group of financial visionaries, Money King
                Financial emerged with a single mission:{" "}
                <span className="text-white font-medium">
                  To democratize business funding.
                </span>{" "}
                From a small Delhi-based team to a PAN-India powerhouse, we have
                consistently delivered transparent, documentation-light, and
                rapid-approval loans that help Indian businesses scale.
              </Typography>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro;