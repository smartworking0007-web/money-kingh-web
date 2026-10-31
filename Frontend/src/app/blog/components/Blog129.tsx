"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FloatingvsFixedItem {
  parameter: string;
  floating: string;
  fixed: string;
}

export const Blog129: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Inputs for interactive calculator simulation inside blog
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  // EMI Calculations
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate > 0
      ? Math.round(
          (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : Math.round(loanAmount / totalMonths);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const rateComparison: FloatingvsFixedItem[] = [
    {
      parameter: "Mechanism",
      floating:
        "Benchmark-linked (Repo Rate Linked Rate - RLR). Rate moves up or down based on central bank policy changes.",
      fixed:
        "Interest rate remains constant for the entire tenure or an agreed initial period.",
    },
    {
      parameter: "Initial Rate",
      floating: "Typically lower than fixed rates at the time of origination.",
      fixed: "Usually 1% to 2% higher than prevailing floating rates.",
    },
    {
      parameter: "Prepayment Penalty",
      floating:
        "Zero prepayment penalty for individual borrowers under RBI guidelines.",
      fixed: "Lenders may charge a 2% to 4% prepayment penalty.",
    },
    {
      parameter: "Best Suited For",
      floating:
        "Borrowers comfortable with rate cycles who want to make lump-sum prepayments.",
      fixed:
        "Borrowers seeking strict monthly budget predictability who expect interest rates to rise significantly.",
    },
  ];

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Comprehensive Guide to Home Loans: How to Calculate EMIs, Select the Right Tenure, and Save Lakhs on Interest"
            category="HOME LOAN"
            author="Kishan Baranwal"
            date="October 31, 2026"
            image="/images/blog/Blog-129.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={handleClose}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
              type="button"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Professional Image Preview Section */}
              <div className="w-full flex justify-center bg-slate-50 py-4 px-4 border-b border-gray-100">
                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/blog/Blog-129.jpeg"
                    alt="home loan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/secured/home"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Home Loan Calculator
                  </NextLink>
                  : How to Calculate EMIs, Select Tenure &amp; Save Lakhs on
                  Interest
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 31, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Buying a home is one of the most significant financial
                      milestones in a person&apos;s life. Whether you are purchasing
                      your first residential apartment, constructing a custom
                      house, or buying a plot of land, securing a home loan
                      turns a major financial dream into an achievable reality.
                      Using an online{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/secured/home"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        home loan calculator
                      </NextLink>{" "}
                      helps you plan your housing loan EMI calculation and total
                      interest payout before applying.
                    </p>
                  </div>

                  <p>
                    However, a home loan is typically a long-term financial
                    commitment spanning 15 to 30 years. A small difference of
                    0.5% in interest rates or a slight shift in loan tenure can
                    cost or save you lakhs of rupees over the lifecycle of your
                    debt.
                  </p>

                  <p>
                    This detailed guide by{" "}
                    <strong>Money King Financial Services</strong> breaks down
                    everything you need to know about home loans: how monthly
                    EMIs are calculated, the math behind principal versus
                    interest repayment, the impact of down payments, and
                    actionable strategies to reduce your overall interest
                    burden.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. What is a Home Loan EMI and How Does It Work?
                  </h2>
                  <p>
                    An Equated Monthly Installment (EMI) is a fixed dollar or
                    rupee amount paid by a borrower to a financial institution
                    on a specified date every month until the loan is fully
                    repaid.
                  </p>
                  <p>Each home loan EMI consists of two distinct parts:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Principal Component:</strong> The portion of the
                      EMI that directly reduces the outstanding loan balance.
                    </li>
                    <li>
                      <strong>Interest Component:</strong> The cost charged by
                      the lender for borrowing the money.
                    </li>
                  </ul>

                  <div className="bg-slate-100 p-5 rounded-lg border border-slate-200 text-xs md:text-sm font-mono text-slate-800 space-y-2">
                    <p className="font-bold text-center border-b pb-2">
                      HOME LOAN EMI STRUCTURE
                    </p>
                    <p className="text-center font-semibold text-[#1e3a8a]">
                      Total EMI Amount = Principal Portion + Interest Portion
                    </p>
                    <div className="pt-2 space-y-1">
                      <p>Early Years: [=================== Interest][Principal]</p>
                      <p>Middle Years: [============== Interest][============ Principal]</p>
                      <p>Later Years: [Interest][=================== Principal]</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    The Concept of Loan Amortization
                  </h3>
                  <p>
                    During the initial years of a long-term home loan, a massive
                    percentage of your monthly EMI goes exclusively toward
                    paying off interest. As the outstanding principal gradually
                    decreases over time, the interest component shrinks, and a
                    larger portion of your EMI goes directly toward clearing the
                    principal balance. This progression is known as loan
                    amortization.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Interactive Home Loan EMI &amp; Repayment Calculator
                  </h2>
                  <p>
                    Use the dynamic simulator below to calculate your estimated
                    monthly EMI, visualize your total interest payout, and
                    evaluate how adjusting the loan tenure or interest rate
                    impacts your long-term debt trajectory:
                  </p>

                  {/* Dynamic Embedded Calculator UI */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-6 space-y-6">
                    <h3 className="text-lg font-bold text-[#1e3a8a] m-0">
                      Home Loan EMI Calculator Simulator
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Loan Amount (₹): {loanAmount.toLocaleString("en-IN")}
                        </label>
                        <input
                          type="range"
                          min="500000"
                          max="20000000"
                          step="100000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Interest Rate (% p.a.): {interestRate}%
                        </label>
                        <input
                          type="range"
                          min="6.5"
                          max="15"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Loan Tenure (Years): {tenureYears} Years
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="30"
                          step="1"
                          value={tenureYears}
                          onChange={(e) => setTenureYears(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Monthly EMI
                        </span>
                        <span className="text-xl font-extrabold text-[#1e3a8a]">
                          ₹{emi.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Total Interest Payable
                        </span>
                        <span className="text-xl font-extrabold text-amber-600">
                          ₹{totalInterest.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Total Amount Payable
                        </span>
                        <span className="text-xl font-extrabold text-slate-800">
                          ₹{totalPayment.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. The Mathematical Formula Behind Home Loan EMIs
                  </h2>
                  <p>
                    Home loan EMIs are computed using the standard monthly
                    reducing balance formula accepted by financial institutions
                    worldwide:
                  </p>

                  {/* Formula Display Box */}
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-gray-800 text-center text-sm md:text-base my-4">
                    {"EMI = P × r × (1 + r)^n / [(1 + r)^n - 1]"}
                  </div>

                  <p className="text-sm font-medium">Where:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      <strong>P</strong> = Principal Loan Amount (the total sum
                      borrowed from the bank)
                    </li>
                    <li>
                      <strong>r</strong> = Monthly Interest Rate
                      [AnnualInterestRate / 12 / 100]
                    </li>
                    <li>
                      <strong>n</strong> = Total Number of Monthly Installments
                      [TenureinYears × 12]
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Worked Practical Example
                  </h3>
                  <p>
                    Let&apos;s assume you take a home loan with the following
                    specifications:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Principal Amount (P): ₹50,00,000 (₹50 Lakhs)</li>
                    <li>Annual Interest Rate: 8.5% p.a.</li>
                    <li>Tenure (n): 20 Years (240 Months)</li>
                  </ul>

                  <p>
                    Converting the annual rate to monthly rate gives{" "}
                    <code>r = 8.5 / 12 / 100 = 0.0070833</code>.
                  </p>

                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-gray-800 text-center text-sm md:text-base my-2 font-bold">
                    {"EMI = ₹43,391 per month"}
                  </div>

                  <p>
                    Over 20 years (240 months), your financial outlay looks as
                    follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Total Amount Repaid: ₹43,391 × 240 = ₹1,04,13,840</li>
                    <li>Total Principal Borrowed: ₹50,00,000</li>
                    <li>Total Interest Paid: ₹54,13,840</li>
                  </ul>
                  <p>
                    In this standard scenario, the total interest paid exceeds the
                    original principal borrowed. This underscores why
                    understanding loan math and applying repayment optimization
                    strategies early is critical.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4. Key Factors That Influence Your Home Loan Eligibility &amp; EMI
                  </h2>
                  <p>
                    Lenders evaluate your financial stability, repayment history, and
                    property values based on four core criteria:
                  </p>

                  <div className="bg-slate-100 p-5 rounded-lg border border-slate-200 text-xs md:text-sm font-mono text-slate-800 space-y-2 my-4">
                    <p className="font-bold text-center border-b pb-2">
                      HOME LOAN ELIGIBILITY PILLARS
                    </p>
                    <div className="space-y-1 pt-1">
                      <p>1. FOIR (Fixed Obligation to Income Ratio) --&gt; Max 50% of Income</p>
                      <p>2. LTV (Loan-to-Value Ratio) --&gt; Max 75% to 90% Value</p>
                      <p>3. CIBIL / Credit Score --&gt; Ideal Score: 750+</p>
                      <p>4. Property Documentation --&gt; Clear Legal Title</p>
                    </div>
                  </div>

                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Fixed Obligation to Income Ratio (FOIR):</strong>{" "}
                      Most financial institutions cap your total monthly debt
                      payments (existing car loans, personal loans, plus the new
                      home loan EMI) at 45% to 50% of your net monthly take-home
                      salary.
                    </li>
                    <li>
                      <strong>Loan-to-Value (LTV) Ratio:</strong> For properties
                      up to ₹30 Lakhs, LTV is up to 90%; between ₹30 Lakhs to ₹75
                      Lakhs, LTV is up to 80%; and above ₹75 Lakhs, LTV is up to
                      75%. The remaining amount must be paid as a down payment.
                    </li>
                    <li>
                      <strong>Credit / CIBIL Score:</strong> A CIBIL score of 750
                      or higher demonstrates a low-risk profile, helping you
                      qualify for discounted interest rates and waived processing
                      fees.
                    </li>
                    <li>
                      <strong>Property Title &amp; Clearances:</strong> The bank
                      evaluates clear legal titles, approved building plans, and
                      no encumbrances.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    5. Floating vs. Fixed Interest Rates: Which One Should You Choose?
                  </h2>
                  <p>
                    When structuring a home loan in India, choose between these
                    two rate options:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Parameter</th>
                          <th className="border border-gray-200 p-3">Floating Interest Rate</th>
                          <th className="border border-gray-200 p-3">Fixed Interest Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rateComparison.map(
                          (item: FloatingvsFixedItem, index: number) => (
                            <tr key={index}>
                              <td className="border border-gray-200 p-3 font-semibold">
                                {item.parameter}
                              </td>
                              <td className="border border-gray-200 p-3">
                                {item.floating}
                              </td>
                              <td className="border border-gray-200 p-3">
                                {item.fixed}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    6. How to Reduce Home Loan EMI: Actionable Prepayment Strategies
                  </h2>
                  <p>
                    Implementing simple prepayment strategies early in your loan
                    tenure can slash your interest burden dramatically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Strategy 1: Make One Extra EMI Payment Every Year:</strong>{" "}
                      Paying just 1 additional EMI every calendar year reduces
                      your effective tenure by nearly 4 years and saves over ₹12
                      Lakhs in interest on a ₹50 Lakh loan.
                    </li>
                    <li>
                      <strong>Strategy 2: Increase Your EMI by 5% Annually (Step-Up):</strong>{" "}
                      Increasing your EMI by 5% annually reduces your tenure
                      from 20 years down to ~12 years, saving over ₹21 Lakhs in
                      total interest.
                    </li>
                    <li>
                      <strong>Strategy 3: Maximize Your Initial Down Payment:</strong>{" "}
                      Putting down 25% to 30% upfront instead of 10% directly
                      lowers your starting principal and subsequent interest
                      compounding.
                    </li>
                    <li>
                      <strong>Strategy 4: Opt for a Home Loan Balance Transfer (HLBT):</strong>{" "}
                      Transferring your active balance to another lender offering
                      a lower interest rate can yield substantial savings over
                      a long tenure.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    7. Tax Benefits Associated with Home Loans in India
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Section 80C (Principal Repayment):</strong> Deduct
                      up to ₹1,50,000 (₹1.5 Lakhs) annually against principal
                      repayment, including stamp duty and registration fees paid
                      during purchase.
                    </li>
                    <li>
                      <strong>Section 24(b) (Interest Repayment):</strong> Deduct
                      up to ₹2,00,000 (₹2 Lakhs) per financial year for
                      self-occupied residential properties.
                    </li>
                    <li>
                      <strong>Joint Home Loans:</strong> If taken jointly with a
                      spouse or parent who is a co-owner, both co-borrowers can
                      claim tax deductions separately, effectively doubling the
                      household tax benefit.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    8. Step-by-Step Guide: How to Apply for a Home Loan
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Assess Your Budget &amp; EMI Capacity:</strong> Use
                      our <strong>home loan eligibility calculator</strong> to determine an EMI level that fits comfortably.
                    </li>
                    <li>
                      <strong>Check Your Credit Report:</strong> Ensure your CIBIL score is 750 or higher.
                    </li>
                    <li>
                      <strong>Organize Key Financial Documents:</strong> Keep PAN, Aadhaar, salary slips/ITR, and property legal title deeds ready.
                    </li>
                    <li>
                      <strong>Compare Offers &amp; Submit Application:</strong> Compare home loan interest rate India benchmarks across banks before submitting your application.
                    </li>
                    <li>
                      <strong>Technical Evaluation &amp; Disbursal:</strong> The lender executes legal verification and disburses funds directly to the seller or builder.
                    </li>
                  </ol>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4 text-sm leading-relaxed">
                      <li>
                        <strong>Q1. Home Loan EMI Calculator kaise kaam karta hai?</strong>
                        <br />
                        Ans: Home Loan EMI Calculator aapke Principal Loan Amount, Interest Rate, aur Loan Tenure ke aadhar par monthly repayment figure compute karta hai. Yeh standard reducing balance formula ka upayog karke seconds mein exact monthly installment aur total interest payout batata hai.
                      </li>
                      <li>
                        <strong>Q2. Kya main apne home loan ka tenure badha kar EMI kam kar sakta hoon?</strong>
                        <br />
                        Ans: Haan, tenure badhane se aapki monthly EMI zarur kam ho jati hai, lekin isse aapka total interest payout kafi badh jata hai. Jaise hi aapki income badhe, prepayments karke loan jaldi khatam karne ki koshish karein.
                      </li>
                      <li>
                        <strong>Q3. Home Loan lene ke liye kitna CIBIL Score hona chahiye?</strong>
                        <br />
                        Ans: Home loan approval aur sabse kam interest rate pane ke liye 750 ya usse adhik CIBIL score sabse achha mana jata hai.
                      </li>
                      <li>
                        <strong>Q4. Home Loan par Prepayment karne se kya fayda hota hai?</strong>
                        <br />
                        Ans: Prepayment karne se aapka direct principal amount kam ho jata hai. Isse aapka overall loan tenure saalon tak ghat jata hai, jisse aap lakhs rupaye ka interest bacha sakte hain.
                      </li>
                      <li>
                        <strong>Q5. Floating aur Fixed Interest Rate mein kya antar hai?</strong>
                        <br />
                        Ans: Fixed Interest Rate poore tenure ke dauran ek samaan rehta hai, jabki Floating Interest Rate RBI ke repo rate changes ke hisab se upar-niche hota rehta hai.
                      </li>
                      <li>
                        <strong>Q6. Joint Home Loan lene ke kya tax benefits hain?</strong>
                        <br />
                        Ans: Joint home loan lene par dono co-owners Section 80C ke tehat up to ₹1.5 Lakhs aur Section 24(b) ke tehat up to ₹2 Lakhs ki tax deduction alag-alag claim kar sakte hain.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Call To Action Banner */}
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3 font-bold"
                  >
                    Calculate EMI &amp; Apply For Your Home Loan Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Get the lowest home loan interest rates and hassle-free processing with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Calculate &amp; Apply Now
                    </NextLink>
                  </div>
                </div>

                <div className="mt-14">
                  <ShareSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog129;