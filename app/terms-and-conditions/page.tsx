import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';

export const metadata = {
  title: "Terms & Conditions | Fornex Health",
  description: "Read Fornex Health's Terms and Conditions to understand the terms of service, privacy policy, and guidelines for using our healthcare solutions.",
  keywords: ["Fornex", "Terms & Conditions", "Fornex Health", "Terms of Service", "Privacy Policy", "Healthcare Terms", "Fornex Guidelines"],
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-[#1a2b3c] flex flex-col">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <Header />

        <div className="max-w-[1400px] mx-auto px-4 w-full py-10 lg:py-15 text-center mb-5 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
            Terms & <span className="text-[#60C6B1]">Conditions</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-15 relative z-20">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">

            {/* Section 1: Opening Statement */}
            <div className="mb-10 text-center">
              <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm">Terms of Service</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] mb-6">Please read these terms and conditions carefully before using Our Service.</h3>
            </div>

            {/* Interpretation and Definitions */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#60C6B1] rounded-full blur-[100px] opacity-10 -mr-32 -mt-32 pointer-events-none"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b3c] mb-6 relative z-10">Interpretation and Definitions</h3>

              <div className="mb-8 relative z-10">
                <h4 className="text-xl font-bold text-[#1a2b3c] mb-3">Interpretation</h4>
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-[#1a2b3c] mb-3">Definitions</h4>
                <p className="text-gray-500 text-base font-regular leading-relaxed mb-6">
                  For the purposes of these Terms and Conditions:
                </p>
                <ul className="space-y-4">
                  {[
                    { term: "Affiliate", desc: "means an entity that controls, is controlled by, or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                    { term: "Country", desc: "refers to: Punjab, India" },
                    { term: "Company", desc: "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in these Terms and Conditions) refers to Creativebuffer, C-127, 4th Floor, Phase-8, Industrial Ar." },
                    { term: "Device", desc: "means any device that can access the Service such as a computer, a cell phone or a digital tablet." },
                    { term: "Service", desc: "refers to the Website." },
                    { term: "Terms and Conditions", desc: "(also referred to as \"Terms\") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service." },
                    { term: "Third-Party Social Media Service", desc: "means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service." },
                    { term: "Website", desc: "refers to FornexHealth, accessible from https://www.fornexhealth.com/" },
                    { term: "You", desc: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#60C6B1]"></div>
                      </div>
                      <p className="text-gray-500 text-base font-regular leading-relaxed">
                        <strong className="text-[#1a2b3c] font-semibold">{item.term}</strong> {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b3c] mb-6">Acknowledgment</h3>
              <div className="space-y-4">
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                </p>
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                </p>
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                </p>
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                </p>
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
                </p>
              </div>
            </div>

            {/* Links to Other Websites */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b3c] mb-6">Links to Other Websites</h3>
              <div className="space-y-4">
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
                </p>
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by, or in connection with, the use of or reliance on any such third-party sites.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
