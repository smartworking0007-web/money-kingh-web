import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) in India | Interest Rates & Eligibility | Money King",
  description:
    "Apply for a Loan Against Property (LAP) in India with flexible repayment tenure and competitive interest rates. Check eligibility criteria, required documents, charges, and online application process.",
  alternates: {
    canonical: "/services/loan/secured/property",
  },
};

export default function LoanAgainstPropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}