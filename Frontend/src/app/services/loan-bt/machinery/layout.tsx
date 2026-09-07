import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machinery Loan Balance Transfer & Top-Up | Money King",
  description:
    "Transfer your business machinery loan to top lenders at competitive interest rates. Reduce machinery EMIs and unlock quick top-up funding for business growth.",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/loan-bt/machinery",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MachineryLoanBTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}