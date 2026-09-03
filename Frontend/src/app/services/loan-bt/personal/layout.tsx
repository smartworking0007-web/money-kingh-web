import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan Balance Transfer | Lower Interest Rates & Top-up | Money King",
  description:
    "Transfer your existing personal loan to leading banks at lower interest rates. Reduce monthly EMIs, consolidate debt, and get instant top-up loan options.",
  alternates: {
    canonical: "/services/loan-bt/personal",
  },
};

export default function PersonalLoanBTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}