import React from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-lexend">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-xl border border-gray-100">
        
        {/* Header Section */}
        <div className="border-b pb-6 mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TERMS & CONDITIONS
          </h1>
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Money King Financial Services Pvt. Ltd.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Effective Date: 5 May 2022
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          
          {/* Welcome Text */}
          <section className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p>
              Welcome to <strong>Money King Financial Services Pvt. Ltd.</strong> (“Money King”, “Company”, “we”, “our”, or “us”). 
              These Terms & Conditions (“Terms”) govern your use of our website, applications, CRM systems, cloud telephony services, 
              financial distribution platform, partner network, and related services. By accessing or using our services, 
              you agree to comply with and be bound by these Terms.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">1. Company Overview</h2>
            <p>
              Money King Financial Services Pvt. Ltd. operates a technology-enabled B2B financial distribution platform that 
              facilitates the distribution of financial products including:
            </p>
            <ul className="list-disc ml-6 mt-2 grid grid-cols-1 md:grid-cols-2 gap-1 ">
              <li>Personal Loans</li>
              <li>Business Loans</li>
              <li>Home Loans</li>
              <li>Loan Against Property (LAP)</li>
              <li>Car Loans</li>
              <li>Mutual Funds</li>
              <li>Insurance Products</li>
              <li>Credit Cards (future services)</li>
            </ul>
          </section>

          {/* Section 2 & 3 Combined for flow */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">2. Eligibility</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>You are at least 18 years old.</li>
                <li>You are legally capable of entering contracts.</li>
                <li>All provided information is accurate.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">3. Services Provided</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Lead generation & distribution</li>
                <li>CRM & telephony solutions</li>
                <li>Loan application assistance</li>
                <li>Partner onboarding systems</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">4. Partner / DSA Terms</h2>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <p className="mb-3 font-semibold">Partners and channel associates agree to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use the platform only for lawful business purposes.</li>
                <li>Not engage in misleading sales practices or misuse customer info.</li>
                <li>Maintain customer confidentiality and comply with RBI/NBFC regulations.</li>
                <li>Take full responsibility for their own business conduct.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 - Crucial Refusal */}
          <section className="bg-red-50 p-6 rounded-lg border border-red-100">
            <h2 className="text-xl font-bold text-red-800 mb-3 uppercase tracking-tight">5. No Guarantee of Approval</h2>
            <p className="font-medium">
              Money King does not guarantee Loan approval, Credit Card approval, Insurance issuance, or Mutual Fund returns. 
              All approvals are subject to eligibility criteria, banking policies, NBFC policies, and third-party verification.
            </p>
          </section>

          {/* Section 6 & 7 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-bold text-gray-800 mb-2 uppercase">6. Fees & Payments</h2>
              <p className="text-sm">Includes subscription, platform access, CRM, and telephony charges. <strong>All payments are non-refundable</strong> unless agreed in writing.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-bold text-gray-800 mb-2 uppercase">7. Commission & Payouts</h2>
              <p className="text-sm">Subject to successful disbursal. Payouts can be revised or withheld in cases of fraud or policy violations.</p>
            </div>
          </section>

          {/* Section 8 & 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-tight">8. Prohibited Activities</h2>
            <p className="text-sm mb-2">Users shall not misrepresent products, use fake documents, engage in spam/abusive calling, or conduct illegal MLM activities.</p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3 uppercase tracking-tight">9. Intellectual Property</h2>
            <p className="text-sm">All software, branding, and CRM systems remain the exclusive property of Money King. Copying, reselling, or reverse engineering is strictly prohibited.</p>
          </section>

          {/* Section 12 & 15 - Liability and Law */}
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase">12. Limitation of Liability</h2>
              <p className="text-sm text-gray-600 ">
                Money King shall not be liable for business losses, revenue losses, delayed approvals, third-party failures, or technical interruptions.
              </p>
            </div>
            <div className="pt-4 border-t">
              <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase">15. Governing Law</h2>
              <p className="text-sm">
                These Terms shall be governed by the laws of India. Disputes are subject to the jurisdiction of courts located in <strong>Delhi / NCR, India.</strong>
              </p>
            </div>
          </section>

          {/* Section 17 - Contact */}
          <section className="bg-gray-600 text-white p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wider text-blue-400">17. Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold">Money King Financial Services Pvt. Ltd.</p>
                <p>A 39, 2nd Floor, Sector 63, Noida – 201301</p>
              </div>
              <div className="md:text-right">
                <p>Email: info@moneykingfinancial.com</p>
                <p>Phone: +91 76692 91199</p>
                <p>Web: www.moneykingfinancial.com</p>
              </div>
            </div>
          </section>

          {/* Declaration */}
          <div className="mt-10 text-center p-6 border-2 border-dashed border-gray-200 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">DECLARATION</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
              By accessing or using Money King services, platforms, CRM systems, telephony services, or partner programs, 
              you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 pt-6 border-t text-center">
          <Link href="/" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center gap-2 transition-all">
            <span>←</span> Back to Home
          </Link>
        </div> 
      </div>
    </div>
  );
}