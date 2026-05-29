import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';

export const metadata = {
  title: "Privacy Policy | Fornex Health",
  description: "Protecting your privacy is our priority. Learn how Fornex Health collects, uses, and secures your information through our Privacy Policy.",
  keywords: ["Fornex", "Privacy Policy", "Fornex Health", "Fornex", "Privacy Policy", "Fornex Health", "Fornex", "Privacy Policy", "Fornex Health", "Fornex", "Privacy Policy", "Fornex Health", "Fornex", "Privacy Policy", "Fornex Health"],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-[#1a2b3c] flex flex-col">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <Header />

        <div className="max-w-[1400px] mx-auto px-4 w-full py-10 lg:py-15 text-center mb-5">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
            Privacy <span className="text-[#60C6B1]">Policy</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-15 relative z-20">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed ">
              <p className="mb-6">Last updated: May 22, 2026</p>
              <p>At FornexHealth, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our website and services.</p>
              <h3 className="text-xl font-bold mt-6 mb-2">Information We Collect</h3>
              <ul className="list-disc ml-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Usage data such as IP address, browser type, and pages visited</li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-2">How We Use Your Information</h3>
              <ul className="list-disc ml-6">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send updates, notifications, or promotional information</li>
                <li>Analyze website usage and performance</li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-2">Cookies</h3>
              <p>Our website may use cookies to improve your browsing experience and remember your preferences. You can disable cookies through your browser settings if you prefer.</p>
              <h3 className="text-xl font-bold mt-6 mb-2">Sharing of Information</h3>
              <p>We do not sell your personal information. We may share your information with trusted service providers who help us operate our website and services.</p>
              <h3 className="text-xl font-bold mt-6 mb-2">Data Security</h3>
              <p>We take reasonable steps to protect your personal data, but no method of online transmission or storage is completely secure.</p>
              <h3 className="text-xl font-bold mt-6 mb-2">Children's Privacy</h3>
              <p>Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children.</p>
              <h3 className="text-xl font-bold mt-6 mb-2">Third-Party Links</h3>
              <p>Our website may contain links to third‑party websites. We are not responsible for their privacy practices or content.</p>
              <h3 className="text-xl font-bold mt-6 mb-2">Changes to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
              <h3 className="text-xl font-bold mt-6 mb-2">Contact Us</h3>
              <p className="mb-6">If you have any questions about this Privacy Policy, contact us at:</p>
              <p>Email: <a href="mailto:info@fornexhealth.com">info@fornexhealth.com</a></p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
