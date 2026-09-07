import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systematic Investment Plan (SIP) | Mutual Fund Investments | Money King",
  description:
    "Start your SIP investment journey with top-performing mutual funds. Calculate expected returns, understand compound interest benefits, and grow wealth systematically.",
  alternates: {
    canonical: "https://moneykingfinancial.com/mutual-fund/sip",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SIPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}