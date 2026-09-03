import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Management Services | Money King Financial Services",
  description:
    "Customized investment management, strategic portfolio planning, and wealth-building advisory tailored for personal and business goals.",
  alternates: {
    canonical: "/services/investment-management",
  },
};

export default function InvestmentManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}