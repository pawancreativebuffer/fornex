import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Epic Prescription Marketplace: What Drug Price Transparency Changes",
    description: "Epic launched a prescription price comparison tool with Amazon Pharmacy on October 16. Here is what it means for patient portals, drug costs along with your IT strategy.",
    keywords: [
        "Epic Prescription Marketplace 2026",
        "Epic drug price transparency",
        "prescription price comparison EHR",
        "Epic Amazon Pharmacy",
        "patient medication cost transparency"
    ],
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* Header Section */}
            <section className="relative overflow-hidden bg-[#1a2b3c] min-h-[60vh] flex flex-col">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <Header />

                <div className="flex-1 flex items-center relative z-10">
                    <div className="max-w-[1400px] mx-auto px-4 w-full py-10 lg:py-15 text-center">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-[#60C6B1] mb-8 hover:gap-3 transition-all duration-300 font-medium group mx-auto"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] max-w-6xl mx-auto">
                            Epic Just Launched Prescription Price Shopping Inside the EHR. <span className="text-[#60C6B1]">Here Is What Changes.</span>
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <User size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Author</p>
                                    <p className="font-medium text-white">ForNex Health</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <Calendar size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Published</p>
                                    <p className="font-medium text-white">November 12, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-15 relative z-20">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Article */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                                <img
                                    src="/images/epic-prescription-marketplace-drug-price-transparency.webp"
                                    alt="Doctor reviewing Epic's Prescription Marketplace dashboard to compare prescription prices across pharmacies and help patients choose affordable medications."
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="text-sm text-slate-400 mb-6 font-medium">
                                        Last reviewed: October 26, 2026. Fornex Health.
                                    </p>

                                    <p className="mb-6">
                                        Patients have been able to compare hotel prices, airline fares along with Amazon listings in real time for twenty years. Comparing the cost of a prescription at different pharmacies in their own EHR portal? That’s been impossible until October 16, 2026.
                                    </p>

                                    <p className="mb-6">
                                        Epic launched its new Prescription Marketplace price transparency tool that day. The technology helps patients more easily comparison shop along with pick the most affordable medications. It was developed with input from Amazon Pharmacy along with is being praised by companies including Costco, Eli Lilly along with Mark Cuban’s Cost Plus Drugs.
                                    </p>

                                    <p className="mb-10">
                                        That’s a notable combination of endorsers. Amazon Pharmacy along with Cost Plus Drugs have been the loudest advocates for drug price transparency in the consumer market. The fact that both are supporting Epic’s implementation signals this isn’t a superficial add-on feature. It’s an integration with real pricing data behind it.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What Does Epic’s Prescription Marketplace Actually Do?</h2>

                                    <p className="mb-6">
                                        Epic’s Prescription Marketplace is a price transparency tool integrated into Epic’s patient-facing EHR interface that allows patients to compare medication prices across pharmacies at the point of prescription. It shows real-time pricing from participating pharmacy networks so patients can choose the lowest-cost option before filling a prescription.
                                    </p>

                                    <p className="mb-6">
                                        The tool surfaces at a specific moment in the clinical workflow: when a physician issues a prescription. Instead of the patient discovering the price at the pharmacy counter along with potentially abandoning the prescription along with or filling it without knowing cheaper options exist, the comparison happens during the clinical visit or immediately after through the patient portal.
                                    </p>

                                    <p className="mb-10">
                                        That timing matters clinically. Patients who abandon prescriptions because of cost create medication adherence gaps that generate downstream clinical problems along with readmissions along with complications that cost the healthcare system far more than the price difference would have. Getting price comparison in front of the patient before the abandonment decision is a clinical intervention as much as a financial one.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Why Cost Plus Drugs Along With Amazon Pharmacy Support This</h2>

                                    <p className="mb-6">
                                        Mark Cuban’s Cost Plus Drugs was built on a single premise: pharmaceutical supply chains are opaque along with the opacity allows enormous price markup that bears no relationship to manufacturing cost. Cost Plus publishes its pricing formula publicly. Its support for Epic’s Prescription Marketplace reflects the same premise applied to the EHR context.
                                    </p>

                                    <p className="mb-6">
                                        Amazon Pharmacy brought infrastructure. Their pharmacy network, Prime member pricing along with same-day delivery capability in major markets provides the real-time pricing data that makes the comparison tool functional rather than theoretical. Without a pharmacy network willing to publish real prices through the EHR API, the tool would show patients list prices that don’t reflect what they’d actually pay.
                                    </p>

                                    <p className="mb-10">
                                        Costco’s participation signals the tool isn’t just covering digital-native pharmacies. Costco Pharmacy has long been known among price-conscious consumers for significantly below-market drug prices. Including Costco makes the comparison meaningful for patients in markets where Costco operates.
                                    </p>

                                    <img
                                        src="/images/epic-prescription-marketplace-patient-portal.webp"
                                        alt="Healthcare patient portal displaying a prescription price comparison dashboard with pharmacy options and benefits of medication cost transparency."
                                        className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                    />

                                    <h2 className="text-3xl font-bold mb-6">What This Changes for Patient Portal Strategy</h2>

                                    <p className="mb-6">
                                        Every health system running Epic is now in a position to offer patients real-time prescription price comparison inside the portal. That’s not a future feature. It’s available now.
                                    </p>

                                    <p className="mb-6">
                                        The patient portal development challenge for most health systems hasn’t been technical capability — it’s been the gap between what the portal could theoretically do along with what patients actually found useful when they logged in. Prescription price comparison is exactly the kind of immediately useful, friction-reducing feature that drives portal adoption.
                                    </p>

                                    <p className="mb-6">
                                        Patients who know their portal shows them how to save money on their medications have a concrete reason to log in regularly along with not just to check lab results. That regular engagement is what drives the portal from “compliance checkbox” to actual patient engagement tool.
                                    </p>

                                    <p className="mb-6">
                                        For health systems not yet on Epic or whose portals aren’t surfacing this capability, the competitive pressure is real. Patients who discover their portal doesn’t help them comparison shop medications along with their friend’s portal at a different health system does, notice.
                                    </p>

                                    <p className="mb-6">
                                        For the framework on building patient portals that drive sustained engagement rather than first-login dropout, read:{' '}
                                        <Link href="/blogs/patient-portal-development-why-most-portals-fail" className="text-[#60C6B1] hover:underline font-semibold">
                                            Patient Portal Development: Why Most Portals Fail
                                        </Link>
                                    </p>

                                    <p className="mb-10">
                                        Our{' '}
                                        <Link href="/services/website-and-mobile-app-development" className="text-[#60C6B1] hover:underline font-semibold">
                                            Website along with Mobile App Development
                                        </Link>{' '}
                                        team builds patient-facing healthcare applications with the EHR integration along with UX design that turns portal logins into regular patient engagement.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

                                    <h3 className="text-xl font-bold mb-2">What is Epic’s Prescription Marketplace?</h3>
                                    <p className="mb-6">
                                        Epic’s Prescription Marketplace is a price transparency tool launched October 16, 2026 that integrates into Epic’s EHR to allow patients to compare medication prices across pharmacies at the point of prescription. It was developed with Amazon Pharmacy input along with is supported by Cost Plus Drugs, Costco along with Eli Lilly.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">How does Epic’s drug price comparison tool work?</h3>
                                    <p className="mb-6">
                                        When a physician issues a prescription through Epic, the Prescription Marketplace surfaces real-time pricing from participating pharmacy networks, allowing patients to compare costs along with choose the most affordable option before filling the prescription.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">Is Cost Plus Drugs part of Epic’s Prescription Marketplace?</h3>
                                    <p className="mb-6">
                                        Yes. Mark Cuban’s Cost Plus Drugs along with Amazon Pharmacy, Costco along with Eli Lilly are among the companies praising along with participating in the Epic Prescription Marketplace launch. Cost Plus is known for transparent pharmaceutical pricing that significantly undercuts traditional pharmacy prices.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">Does prescription price transparency affect medication adherence?</h3>
                                    <p className="mb-6">
                                        Yes. Patients who abandon prescriptions due to cost create medication adherence gaps that generate downstream clinical complications along with readmissions. Surfacing price comparison during the clinical encounter before the abandonment decision reduces cost-related abandonment.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">Which health systems can use Epic’s Prescription Marketplace?</h3>
                                    <p className="mb-10">
                                        Any health system running Epic’s EHR can potentially activate the Prescription Marketplace feature. Epic holds approximately 40% of the US hospital EHR market, meaning the feature is accessible to a large portion of US hospitals along with ambulatory practices.
                                    </p>

                                    {/* Citations Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ol className="space-y-3 text-sm list-decimal pl-5 text-gray-300">
                                            <li>
                                                <a href="https://www.healthcareitnews.com/news" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    Healthcare IT News — Epic Launches New Prescription Marketplace Price Transparency Tool (October 16, 2026)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.healthcareitnews.com/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    Healthcare IT News — Artificial Intelligence News (October 2026)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://openloophealth.com/blog/digital-health-trends-and-news-october-2026/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    Open Loop Health — Digital Health Trends October 2026 (October 8, 2026)
                                                </a>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-10 h-fit">
                            {/* CTA Card */}
                            <div className="bg-[#60C6B1] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Deploying Patient Portals &amp; EHR Integrations?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    Whether you are looking to integrate real-time prescription pricing, modernize patient portals, or connect pharmacy APIs into clinical workflows, let our team guide your implementation.
                                </p>
                                <a
                                    href="https://calendly.com/pawan_panwar/letstalk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full py-4 bg-white text-[#60C6B1] rounded-xl font-medium text-center hover:bg-[#1a2b3c] hover:text-white transition-all duration-300 relative z-10 shadow-lg"
                                >
                                    Talk to Our Experts
                                </a>
                            </div>

                            {/* Other Blogs */}
                            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100">
                                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6">Related Insights</h4>
                                <div className="space-y-6">
                                    <Link href="/blogs/patient-portal-development-why-most-portals-fail" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Patient Portals</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Patient Portal Development: Why Most Portals Fail (Along With How to Build One That Succeeds)</h5>
                                    </Link>
                                    <Link href="/blogs/ai-agents-healthcare-paperwork-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Healthcare AI</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">AI Agents Are Doing Hospital Paperwork Now. Here Is What That Actually Looks Like.</h5>
                                    </Link>
                                    <Link href="/blogs/epic-oracle-health-embedding-ai-ehrs" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">EHR Technology</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Epic and Oracle Health Are Embedding AI Directly Into EHRs: What It Means for Hospitals</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

