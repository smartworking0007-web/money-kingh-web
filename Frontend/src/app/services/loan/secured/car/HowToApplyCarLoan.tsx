"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    UserCheck,
    Car,
    FileText,
    UploadCloud,
    CheckCircle2,
    Banknote
} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const HowToApplyCarLoan = () => {
    const steps = [
        {
            step: "01",
            title: "Check Eligibility",
            desc: "Income, age, credit score etc. check karo.",
            icon: <UserCheck className="w-6 h-6" />,
            color: "bg-blue-50 text-blue-600 border-blue-100",
        },
        {
            step: "02",
            title: "Choose New or Used Car",
            desc: "Vehicle aur loan amount select karo.",
            icon: <Car className="w-6 h-6" />,
            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
        },
        {
            step: "03",
            title: "Submit Application",
            desc: "Personal, employment and vehicle details submit karo.",
            icon: <FileText className="w-6 h-6" />,
            color: "bg-purple-50 text-purple-600 border-purple-100",
        },
        {
            step: "04",
            title: "Submit Documents",
            desc: "KYC, income and bank documents provide karo.",
            icon: <UploadCloud className="w-6 h-6" />,
            color: "bg-amber-50 text-amber-600 border-amber-100",
        },
        {
            step: "05",
            title: "Verification & Approval",
            desc: "Lender application aur eligibility verify karega.",
            icon: <CheckCircle2 className="w-6 h-6" />,
            color: "bg-indigo-50 text-indigo-600 border-indigo-100",
        },
        {
            step: "06",
            title: "Loan Disbursal",
            desc: "Approval ke baad lender/dealer process ke according amount disburse hota hai.",
            icon: <Banknote className="w-6 h-6" />,
            color: "bg-teal-50 text-teal-600 border-teal-100",
        },
    ];

    return (
        <section className="relative w-full py-12 md:py-24 bg-gray-50/50 font-lexend">
            <div className="max-w-7xl mx-auto px-5 md:px-6">

                {/* --- Header Section --- */}
                <div className="max-w-4xl mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            variant="h3"
                            as="h2"
                            className="text-[#004687] font-bold text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight leading-tight"
                        >
                            How to Apply for a Car Loan Online
                        </Typography>

                        <Typography
                            variant="b1"
                            className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl"
                        >
                            Follow these simple, step-by-step instructions to get your car loan approved and disbursed quickly.
                        </Typography>
                    </motion.div>
                </div>

                {/* --- Steps Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="relative p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-2xl font-black text-gray-200 tracking-wider">
                                        {item.step}
                                    </span>
                                </div>

                                <Typography
                                    variant="s1"
                                    className="text-gray-900 font-bold text-lg md:text-xl mb-2"
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="b3"
                                    className="text-gray-500 text-sm leading-relaxed"
                                >
                                    {item.desc}
                                </Typography>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowToApplyCarLoan;