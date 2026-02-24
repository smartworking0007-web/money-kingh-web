import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-xl border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
          PRIVACY POLICY (DETAILED VERSION)
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy outlines how Money King Financial Services Pvt. Ltd. (Company) collects, 
              processes, stores, shares, and protects personal and financial information in compliance with the 
              Information Technology Act, 2000, Digital Personal Data Protection Act, 2023, and applicable RBI guidelines..
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. Regulatory & RBI Compliance</h2>
            <p>
              The Company operates as a financial services intermediary/DSA facilitating loans from 
              RBI-regulated Banks and NBFCs. The Company adheres to RBI Fair Practices Code, KYC Master 
              Directions, AML standards, and outsourcing guidelines. Final loan decisions are solely taken by the 
              respective lending institutions.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. Categories of Data Collected</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Personal Identification Information:</strong> Name, DOB, Address, PAN, Aadhaar</li>
              <li><strong>Financial Information:</strong> Bank Statements, ITR, GST Returns, Salary Slips</li>
              <li><strong>Credit Information:</strong> CIBIL, Experian Reports</li>
              <li><strong>Technical Information:</strong> IP Address, Cookies, Device Data</li>
              <li><strong>Communication Records:</strong> Call recordings, Emails, SMS logs</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. Lawful Basis of Processing</h2>
            <p>
              Data is processed based on customer consent, contractual necessity, legal obligation, and 
              legitimate business interests including fraud prevention and compliance monitoring.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">5. Purpose of Data Usage</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Loan processing and documentation</li>
              <li>KYC and AML verification</li>
              <li>Risk assessment and underwriting coordination</li>
              <li>Regulatory reporting and audit compliance</li>
              <li>Customer communication and grievance handling</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">6. Data Sharing & Disclosure</h2>
            <p>
              Customer information may be shared with RBI-regulated Banks/NBFCs, Credit Bureaus, legal 
              authorities, recovery agencies (if applicable), and internal authorized personnel. The Company 
              does not sell personal data.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">7. Data Security Measures</h2>
            <p>
              The Company implements administrative, technical, and physical safeguards including: restricted 
              access control, password protection, encrypted storage systems, confidentiality agreements, and 
              regular compliance reviews.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">8. Data Retention Policy</h2>
            <p>
              Customer data is retained as per RBI KYC Master Directions and applicable Indian laws. Records 
              may be maintained even after loan closure for audit, regulatory, and compliance purposes.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">9. Customer Rights</h2>
            <p>
              Customers may request correction, updating, or withdrawal of marketing consent by submitting a 
              written application to the registered office address.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">10. Grievance Redressal Mechanism</h2>
            <p>
              Any complaints regarding data privacy or misuse can be submitted in writing. The Company will 
              respond within a reasonable time frame as per applicable laws.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">11. Limitation of Liability</h2>
            <p>
              The Company shall not be liable for loan rejection, delays, policy changes by RBI, technical 
              disruptions, or decisions taken by lending institutions.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">12. Amendments</h2>
            <p>
              The Company reserves the right to update this Privacy Policy in response to regulatory changes or 
              operational requirements without prior notice.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">13. Governing Law & Jurisdiction</h2>
            <p>
              This Policy shall be governed by the laws of India. Jurisdiction: Courts of Uttar Pradesh.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">14. Privacy and Policy or Terms and conditions page - that communicates :</h2>
            <p>
              When you voluntarily send us electronic mail / fillup the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it..
            </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-12 pt-6 border-t text-center">
          <Link href="/" className="text-blue-600 font-semibold hover:underline flex items-center justify-center gap-2">
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}