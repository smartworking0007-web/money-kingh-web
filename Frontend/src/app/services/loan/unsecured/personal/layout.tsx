import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan in India | Compare Low Interest Rates & Apply | Money King",
  description:
    "Compare and apply for personal loans from RBI-regulated banks and NBFCs. Minimal documentation, transparent processing fees, and quick approval support.",
  alternates: {
    canonical: "/services/loan/unsecured/personal",
  },
};

export default function PersonalLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}