"use client";

import { Typography } from "@/app/components/ui/Typography";

export default function CarLoanTypes() {
  const loanTypes = [
    {
      id: "01",
      title: "New Car Loan",
      desc: "A new car loan is designed for individuals looking to purchase a brand-new vehicle directly from the showroom. These loans come with competitive interest rates, flexible repayment tenures, and quick approvals.",
      highlight:
        "Most lenders offer up to 100% financing of the car’s on-road price, reducing the need for a down payment and making it easier to own your dream car.",
    },
    {
      id: "02",
      title: "Used Car Loan",
      desc: "A used car loan helps you finance the purchase of a pre-owned vehicle at affordable terms. Lenders generally offer 80% to 85% of the car’s value as a loan, depending on the vehicle’s age and condition.",
      highlight:
        "The repayment tenure usually goes up to 5 years, and many lenders prefer cars that are not older than 5 years. Interest rates may be slightly higher than new car loans but remain competitive.",
    },
    {
      id: "03",
      title: "Loan Against Car",
      desc: "A loan against car allows you to use your existing vehicle as collateral to secure funds for personal or business needs. This option is ideal when you need quick liquidity without selling your car.",
      highlight:
        "Even individuals with a low credit score may qualify, as the loan is secured against the vehicle. The loan amount depends on the car’s current market value and condition.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 ">
      {/* Meta Header */}
      <div className="mb-5 pb-5">
        <Typography variant="h4" as="h3" className="mb-5">
          Types of Car Loans in India
        </Typography>
        <Typography variant="h5" as="p" className=" max-w-5xl">
          Car loans in India are available in different types to suit various
          financial needs and customer profiles. Whether you are buying a new
          vehicle, a pre-owned car, or need urgent funds, there is a suitable
          car loan option available.
        </Typography>
      </div>

      {/* Vertical Stack Cards */}
      <div className="space-y-6">
        {loanTypes.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col md:flex-row gap-6 p-8 rounded-2xl  bg-white transition-all duration-300"
          >
            {/* Numbering Left - shrink-0 fixed the warning */}
            <div className="shrink-0">
              <span className="text-4xl font-bold text-gray-100 group-hover:text-[#004687]/20 transition-colors">
                {item.id}
              </span>
            </div>

            {/* Content Right - grow fixed the warning */}
            <div className="grow">
              <Typography variant="h4" className=" font-bold mb-4 mt-0">
                {item.title}
              </Typography>
              <Typography
                variant="b1"
                className="text-gray-700 mb-6 leading-relaxed"
              >
                {item.desc}
              </Typography>

              {/* Highlight Point */}
              <div className="pl-5 border-l-2 border-[#004687]/20 py-1">
                <Typography variant="b2" className="text-gray-600 ">
                  {item.highlight}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
