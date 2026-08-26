"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function GoldLoanTypes() {
    const loanTypes = [
        {
            title: "Gold Loan with EMI Repayment",
            desc: "Principal + interest periodic EMI mein.",
        },
        {
            title: "Gold Loan with Interest-Only Repayment",
            desc: "Current page par interest-only option already mentioned hai.",
        },
        {
            title: "Bullet Repayment Gold Loan",
            desc: "Principal/interest repayment structure lender terms ke according.",
        },
        {
            title: "Gold Loan Overdraft",
            desc: "Agar partner lender product offer karta hai, tab include karo.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-12 bg-white font-lexend">
            <div className="mb-10 text-center">
                <Typography
                    variant="h3"
                    as="h3"
                    className="text-[#1e293b] font-bold text-3xl md:text-4xl"
                >
                    Types of Gold Loan
                </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loanTypes.map((item, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                    >
                        <Typography
                            variant="b1"
                            as="h3"
                            className="text-[#1e293b] font-bold text-xl mb-3"
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="b2"
                            as="h4"
                            className="text-slate-600 font-normal text-base leading-relaxed"
                        >
                            {item.desc}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    );
}