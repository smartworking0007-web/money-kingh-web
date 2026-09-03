import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Loan in India: Compare Interest Rates, Eligibility & EMI | Money King",
  description:
    "Get a car loan in India with flexible repayment options. Compare interest rates, check eligibility criteria, required documents, and explore new or used car financing options.",
  alternates: {
    canonical: "/services/loan/secured/car",
  },
};

export default function CarLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}