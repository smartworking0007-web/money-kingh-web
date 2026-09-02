// data/whyChoose.tsx
import React from "react";
import Link from "next/link";

export interface WhyChooseItem {
  id: number;
  title: React.ReactNode;
  icon: string;
  width: number;
  height: number;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: (
      <span>
        Personalized{" "}
        <Link
          href="/services/loan/unsecured/personal"
          className="text-[#004687] font-semibold hover:underline"
        >
          Personal Loan
        </Link>
      </span>
    ),
    icon: "/images/Choose/adv1.png",
    width: 64,
    height: 64,
  },
  {
    id: 2,
    title: "One-day Approval and Disbursal",
    icon: "/images/Choose/adv2.png",
    width: 64,
    height: 64,
  },
  {
    id: 3,
    title: "Secured Database",
    icon: "/images/Choose/adv3.png",
    width: 64,
    height: 64,
  },
  {
    id: 4,
    title: "Minimal Documents",
    icon: "/images/Choose/adv4.png",
    width: 64,
    height: 64,
  },
  {
    id: 5,
    title: "User-Friendly Experience",
    icon: "/images/Choose/adv5.png",
    width: 64,
    height: 64,
  },
  {
    id: 6,
    title: "Lowest Interest Rate",
    icon: "/images/Choose/adv6.png",
    width: 64,
    height: 64,
  },
];