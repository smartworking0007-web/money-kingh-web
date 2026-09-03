import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Free Demat Account Online with m.Stock | Zero Brokerage Delivery | Money King",
  description:
    "Open a free Demat account online with m.Stock. Enjoy zero brokerage on delivery, mutual funds, and IPOs with competitive flat ₹5 brokerage on Intraday and F&O trading.",
  alternates: {
    canonical: "/services/stock/mstock",
  },
};

export default function MStockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}