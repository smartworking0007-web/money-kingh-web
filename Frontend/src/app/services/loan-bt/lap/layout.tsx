import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) Balance Transfer & Top-Up | Money King",
  description:
    "Transfer your Loan Against Property (LAP) to leading banks at lower interest rates. Reduce your EMI burdens and secure instant high-value top-up loans.",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/loan-bt/lap",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LAPBTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}