import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Financial Planning & Advisory Services | Money King",
  description:
    "Expert financial planning and advisory services. Get customized wealth management, risk consulting, and strategic investment guidance tailored to your goals.",
  alternates: {
    canonical: "/services/financial-planning",
  },
};

export default function FinancialPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}