import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HDFC Credit Cards | Apply Online, Rewards & Instant Discounts | Money King",
  description:
    "Apply online for HDFC credit cards. Enjoy unmatched cashback, travel rewards, welcome points, and exclusive brand discounts on everyday spends.",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/credit/hdfc",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HDFCCreditCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}