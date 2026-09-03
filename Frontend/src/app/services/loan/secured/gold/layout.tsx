import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Loan in India | Interest Rate, Eligibility & Documents | Money King",
  description:
    "Get a gold loan against eligible gold jewellery or coins. Compare low interest rates, check per gram rate, loan eligibility, required documents, and instant sanction terms.",
  alternates: {
    canonical: "/services/loan/secured/gold",
  },
};

export default function GoldLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}