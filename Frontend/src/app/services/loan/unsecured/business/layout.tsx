import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsecured Business Loan in India | Apply Online Without Collateral | Money King",
  description:
    "Apply for unsecured business loans in India without collateral. Fast application processing, customized EMI options, and tailored MSME business support.",
  alternates: {
    canonical: "/services/loan/unsecured/business",
  },
};

export default function BusinessLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}