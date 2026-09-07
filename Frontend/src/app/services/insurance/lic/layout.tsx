import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Insurance Plans & Term Cover | Secure Your Family | Money King",
  description:
    "Secure your family's future with comprehensive life insurance and term insurance policies. Compare plans, check premiums, and get coverage with high claim settlement ratios.",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/insurance/life",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LifeInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}