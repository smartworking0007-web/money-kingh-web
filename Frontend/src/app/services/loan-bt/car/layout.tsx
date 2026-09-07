import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Loan Balance Transfer & Top-Up | Money King",
  description:
    "Transfer your existing car loan to leading banks at lower interest rates. Reduce your EMIs and get quick approvals on top-up funding options.",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/loan-bt/car",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CarLoanBTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}