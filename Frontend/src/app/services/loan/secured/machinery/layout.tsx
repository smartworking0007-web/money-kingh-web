import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machinery Loan in India | Low Interest Rates & Fast Approval",
  description:
    "Get a machinery loan in India for new or used equipment. Check machinery finance interest rates, eligibility, required documents, loan amounts, and repayment tenure.",
  alternates: {
    canonical: "/services/loan/secured/machinery",
  },
};

export default function MachineryLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}