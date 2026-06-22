import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Healthcare Cybersecurity 2026: What Hospitals Must Do",
    description: "1.8 million records stolen via a vendor. HIPAA rules just changed. Here is the cybersecurity action plan every hospital IT director needs right now in 2026.",
    keywords: ["healthcare cybersecurity 2026", "hospital ransomware attack 2026", "HIPAA security rule update", "healthcare data breach third party vendor", "hospital cybersecurity strategy"],
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
                            Healthcare Cybersecurity 2026: <span className="text-[#60C6B1]">The Breach That Should Change How Every Hospital Thinks About Vendors</span>
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <User size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Author</p>
                                    <p className="font-medium text-white">Fornex Health Team</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <Calendar size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Published</p>
                                    <p className="font-medium text-white">June 21, 2026</p>
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
                                    src="/images/healthcare_cybersecurity_2026.png"
                                    alt="Healthcare Cybersecurity 2026: What Hospitals Must Do"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        The largest public healthcare system in the United States just confirmed one of the biggest breaches of 2026. Not because someone hacked their firewall. Not because a physician clicked a phishing link.
                                    </p>
                                    <p className="mb-6">
                                        Because a vendor had access to their network.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://techcrunch.com/2026/05/18/nyc-health-and-hospitals-says-hackers-stole-medical-data-and-fingerprints-during-breach-affecting-at-least-1-8-million-people/" target="_blank" className="text-[#60C6B1]">NYC Health + Hospitals</a> disclosed that hackers stole medical records, personal data along with biometric information including fingerprints from at least 1.8 million people. The breach ran from November 25, 2025 through February 11, 2026. That is 78 days of undetected access. The entry point was an unnamed third-party vendor with network access.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.pkware.com/blog/2026-data-breaches" target="_blank" className="text-[#60C6B1]">The exposed data includes diagnoses, medications, test results, imaging, health insurance information, Social Security numbers, financial account details, geolocation data along with biometric fingerprints and palm prints.</a>
                                    </p>
                                    <p className="mb-6">
                                        When biometric data gets stolen, there is no password reset. There is no credit monitoring that fixes it. Those fingerprints belong to 1.8 million people permanently. The severity of what was taken is why this breach is being discussed at board level across health systems that were not involved.
                                    </p>
                                    <p className="mb-10">
                                        It should also be a forcing function for every hospital IT director to audit their vendor access list. Today.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Numbers Behind the 2026 Healthcare Cybersecurity Crisis</h2>
                                    <p className="mb-6">
                                        The NYC breach is the headline. The data behind it is the real alarm.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://ordr.net/blog/healthcare-cybersecurity-statistics-2026-report" target="_blank" className="text-[#60C6B1]">In 2024, healthcare experienced 739 breaches affecting over 276 million records — the highest on record. The average cost of a breach reached $7.42 million. 67% of healthcare organizations were hit by ransomware. A striking 99% of hospitals manage devices that contain known exploited vulnerabilities.</a>
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://medicalitg.com/hipaa-compliance/2026-healthcare-ransomware-crisis-hipaa-risk-assessment-guide-3/" target="_blank" className="text-[#60C6B1]">Over 1,174 ransomware attacks hit healthcare in 2025 alone, representing a 49% increase from the prior year. 96% of attacks involve data theft, creating automatic HIPAA violations regardless of whether the ransom is paid. 44% of attacks disrupt patient care, reducing hospital admissions by 17 to 25%.</a>
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://ordr.net/blog/healthcare-cybersecurity-statistics-2026-report" target="_blank" className="text-[#60C6B1]">Response times average 241 days to identify along with contain breaches.</a> That is eight months of attacker access before the breach is even contained. In the NYC case they had 78 days. That is considered fast by 2026 standards.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.healthitanswers.net/healthcare-cybersecurity-now-a-regulatory-issue-not-just-an-it-problem/" target="_blank" className="text-[#60C6B1]">In 2026, a ransomware attack forced the University of Mississippi Medical Center to close 35 outpatient clinics, cancel appointments along with delay procedures during system restoration.</a> The attack compromised the medical center's Epic EHR platform along with its IT network. Every outpatient appointment cancelled is a patient who may go without care. Every delayed procedure is a clinical risk.
                                    </p>
                                    <p className="mb-10">
                                        This is why cybersecurity stopped being an IT problem in 2026. It is a patient safety problem.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The HIPAA Security Rule Just Changed. Here Is What Is New.</h2>
                                    <p className="mb-6">
                                        The current HIPAA Security Rule was written in 2003. It predates cloud computing, telehealth, AI, ransomware as a business model along with connected medical devices. OCR has been signaling updates for years. The finalization target is May 2026.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://medcurity.com/hipaa-security-rule-2026-update/" target="_blank" className="text-[#60C6B1]">The 2026 HIPAA Security Rule update transforms previously "addressable" safeguards into mandatory requirements.</a> That is a fundamental shift. Under the old framework, organizations had discretion to decide which safeguards were practical for their environment. That discretion is going away.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://medicalitg.com/hipaa-compliance/hipaa-risk-assessment-managed-it-support-for-healthcare-healthcare-cybersecurity-15/" target="_blank" className="text-[#60C6B1]">Under the new rule, healthcare organizations must now implement network segmentation to isolate electronic protected health information, multifactor authentication for all system access, encryption for data at rest along with in transit, separate backup along with recovery controls for ePHI along with enhanced monitoring along with access controls.</a>
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://medcurity.com/hipaa-security-rule-2026-update/" target="_blank" className="text-[#60C6B1]">The 72-hour incident notification requirement means organizations need monitoring infrastructure capable of detecting AI-related breaches along with ransomware events in near real-time.</a>
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.elisity.com/blog/hipaa-security-rule-2026-240-days" target="_blank" className="text-[#60C6B1]">OCR civil monetary penalties after the January 28, 2026 inflation adjustment range from $145 per violation at the lowest tier to $2,190,294 at the willful-neglect-uncorrected tier.</a> But the per-violation schedule is not the real exposure.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.elisity.com/blog/hipaa-security-rule-2026-240-days" target="_blank" className="text-[#60C6B1]">For a mid-sized health system, realistic total exposure from one ransomware incident ranges from $25 million to over $2 billion at Ascension scale. That total includes OCR enforcement, state attorney general action, class action litigation along with SEC 8-K exposure.</a>
                                    </p>
                                    <p className="mb-6">
                                        The compliance cost is real.<a href="https://medcurity.com/hipaa-security-rule-2026-update/" target="_blank" className="text-[#60C6B1]"> Small along with mid-sized providers cannot easily absorb the approximately $9 billion year-one cost HHS projected.</a> But the cost of non-compliance is now measured in tens of millions per incident, not fines alone. For a hospital already under Medicaid-cut pressure, a ransomware incident plus an OCR enforcement action is an existential event.
                                    </p>
                                    <p className="mb-10">
                                        For the financial pressure hospitals are already managing, read our blog on <strong>what the $1 trillion Medicaid cut means for your hospital technology strategy.</strong>
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Vendor Problem Is the Real Problem</h2>
                                    <p className="mb-6">
                                        The NYC breach follows a pattern that is now dominant in healthcare cybersecurity. <a href="https://medicalitg.com/hipaa-compliance/2026-healthcare-ransomware-crisis-hipaa-risk-assessment-guide-3/" target="_blank" className="text-[#60C6B1]">Third-party vendors were involved in over 80% of successful healthcare data breaches in 2025.</a>
                                    </p>
                                    <p className="mb-6">
                                        Think about how many vendors have network access to a typical health system. EHR vendors. Revenue cycle vendors. Billing clearinghouses. Pharmacy systems. Medical device manufacturers. Telehealth platforms. Ambient AI scribe providers. RPM monitoring platforms. Lab systems. Imaging vendors.
                                    </p>
                                    <p className="mb-6">
                                        Every one of those vendors is a potential entry point. Every BAA you signed is a compliance document. It is not a security guarantee.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://pitechsol.com/blog/healthcare-ai-compliance-in-2026/" target="_blank" className="text-[#60C6B1]">The BAA covering your EHR vendor does not automatically cover the AI layer on top of it. Many organizations have not mapped that gap.</a>
                                    </p>
                                    <p className="mb-6">
                                        The practical consequence: your security perimeter is as large as the sum of every vendor that has access to your network. Most hospital IT teams have a detailed inventory of their own systems. Far fewer have an accurate real-time inventory of their vendor access landscape.
                                    </p>
                                    <p className="mb-10">
                                        <a href="https://www.censinet.com/blog/ai-adoption-survey-reveals-healthcares-governance-gap-and-drive-toward-agentic-usage/" target="_blank" className="text-[#60C6B1]">Only 10% of healthcare organizations utilize automated monitoring to detect AI capabilities along with vendor access changes. The majority rely on informal ad hoc discovery along with vendor release notes.</a> The same gap that creates shadow AI risk creates third-party access risk.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What a Real Vendor Security Program Looks Like in 2026</h2>
                                    <p className="mb-6">
                                        <strong>Start with an access audit.</strong> List every third-party vendor with active access to your network. Include the type of access, the systems they touch along with the last time that access was reviewed. Most organizations discover vendors on this list that they had forgotten about. Former vendors whose access was never revoked. Contractors whose engagements ended six months ago with active credentials still live.
                                    </p>
                                    <p className="mb-6">
                                        That access audit is where the NYC breach would have been caught earlier. A vendor with network access that no one is monitoring is an open door.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Require security documentation before renewing any vendor contract.</strong> <a href="https://www.getprosper.ai/blog/hipaa-compliant-ai-guide-healthcare" target="_blank" className="text-[#60C6B1]">Look for SOC 2 Type II reports along with HITRUST CSF certification. These show the vendor has undergone a rigorous independent audit.</a> A vendor that cannot produce current SOC 2 Type II documentation should not have access to ePHI. Full stop.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Implement network segmentation before anything else.</strong> <a href="https://medicalitg.com/hipaa-compliance/hipaa-risk-assessment-managed-it-support-for-healthcare-healthcare-cybersecurity-15/" target="_blank" className="text-[#60C6B1]">Network segmentation is now a mandatory requirement under the updated HIPAA Security Rule.</a> It is also the single most effective control for limiting the blast radius of a vendor compromise. If the vendor that breached NYC Health had been confined to a segmented network zone, the 1.8 million record exposure likely becomes a much smaller incident.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Build the 72-hour detection capability.</strong> The new HIPAA requirement is not 72 hours to report — it is 72 hours from discovery to notification. That means your security monitoring needs to surface active threats within a timeframe that allows investigation, containment along with notification to occur inside that window. The 241-day average detection time in healthcare today is not compatible with a 72-hour notification requirement. The infrastructure gap between those two numbers is where most organizations need to invest.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Apply zero-trust principles to all vendor access.</strong> Treat every vendor connection as untrusted until verified. Require MFA for all vendor access to your systems. Audit vendor access logs regularly. Revoke access immediately when vendor engagements end. These are not sophisticated controls. They are basic hygiene that most healthcare organizations are not consistently applying.
                                    </p>
                                    <p className="mb-10">
                                        The AI governance framework questions about vendor authorization, audit trails along with data handling apply directly to cybersecurity vendor management. Our blog on <a href="https://www.fornexhealth.com/blogs/ai-governance-in-healthcare-is-no-longer-optional" target="_blank" className="text-[#60C6B1]">what your AI vendor should be able to prove on governance</a> covers the vendor evaluation framework in detail.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Patient Safety Argument</h2>
                                    <p className="mb-6">
                                        <a href="https://www.healthitanswers.net/healthcare-cybersecurity-now-a-regulatory-issue-not-just-an-it-problem/" target="_blank" className="text-[#60C6B1]">72% of healthcare organizations report delays in patient care along with longer hospital stays following cyberattacks.</a>
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.nextgov.com/cybersecurity/2026/04/former-fbi-official-proposes-terror-designations-ransomware-hackers-targeting-hospitals/413002/" target="_blank" className="text-[#60C6B1]">A former FBI official testified before the House Homeland Security Committee in April 2026 proposing that prosecutors examine whether homicide charges could be pursued under federal felony murder standards in cases where ransomware attacks on health facilities result in documented patient deaths.</a>
                                    </p>
                                    <p className="mb-6">
                                        That is how serious this has become. The argument that cybersecurity investment is a cost center that competes with clinical priorities is no longer defensible. A ransomware attack that closes 35 outpatient clinics for two weeks causes direct patient harm. The clinical along with the technical are the same problem.
                                    </p>
                                    <p className="mb-6">
                                        The hospitals treating cybersecurity as a board-level patient safety issue — not an IT department issue — are the ones building the architecture that actually limits their exposure. That means board involvement in cybersecurity governance, not just IT. It means vendor risk management as a procurement requirement, not an afterthought. It means security posture as a standing agenda item alongside financial performance.
                                    </p>
                                    <p className="mb-10">
                                        The ones still treating it as a technical problem solved by buying another tool are the ones generating the breach headlines.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Where to Start This Week</h2>
                                    <p className="mb-6">
                                        <strong>One. Run the vendor access audit.</strong> Every vendor. Every access type. Every last review date. This takes a week along with it is the most important security work you will do this year.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Two. Check your MFA coverage.</strong> Every system. Every user. Every external access point. Gaps in MFA coverage are how attackers move laterally after initial access. The new HIPAA rule makes MFA mandatory. Most organizations have partial coverage. Partial is not enough.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Three. Test your 72-hour detection capability.</strong> Simulate an incident. How long does it take your team to detect, investigate along with produce a notification? If the answer is longer than 72 hours, you have a compliance gap along with an operational gap. Fix the process before the regulation is final.
                                    </p>
                                    <p className="mb-10">
                                        For organizations integrating new AI tools — ambient scribes, agentic AI platforms, RPM monitoring systems — every one of those platforms is a new vendor with network access. The cybersecurity vendor audit applies to your AI vendors the same way it applies to your billing clearinghouse. Start there.
                                    </p>

                                    <p className="mb-10">
                                        The NYC breach happened through a vendor. 78 days of undetected access. 1.8 million records stolen. The same vulnerability exists in most health systems right now. <a href="https://www.fornexhealth.com/" target="_blank" className="text-[#60C6B1]">Fornex Health</a> helps hospitals audit their vendor access landscape, implement HIPAA-aligned security architecture along with build the monitoring infrastructure that detects threats before they become breaches. <a href="https://calendly.com/pawan_panwar/letstalk" target="_blank" className="text-[#60C6B1]">Book a security readiness call with our team today.</a>
                                    </p>

                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://techcrunch.com/2026/05/18/nyc-health-and-hospitals-says-hackers-stole-medical-data-and-fingerprints-during-breach-affecting-at-least-1-8-million-people/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">TechCrunch — NYC Health + Hospitals Says Hackers Stole Medical Data and Fingerprints (May 18, 2026)</a></li>
                                            <li><a href="https://www.pkware.com/blog/2026-data-breaches" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">PKWARE — 2026 Data Breaches: Cybersecurity Incidents (Updated June 2026)</a></li>
                                            <li><a href="https://ordr.net/blog/healthcare-cybersecurity-statistics-2026-report" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">ORDR — Healthcare Cybersecurity Statistics 2026 Report (April 3, 2026)</a></li>
                                            <li><a href="https://medicalitg.com/hipaa-compliance/2026-healthcare-ransomware-crisis-hipaa-risk-assessment-guide-3/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">MedicalITG — 2026 Healthcare Ransomware Crisis: HIPAA Risk Assessment Guide</a></li>
                                            <li><a href="https://www.healthitanswers.net/healthcare-cybersecurity-now-a-regulatory-issue-not-just-an-it-problem/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Health IT Answers — Healthcare Cybersecurity Now a Regulatory Issue (April 9, 2026)</a></li>
                                            <li><a href="https://medcurity.com/hipaa-security-rule-2026-update/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Medcurity — 2026 HIPAA Security Rule Update: New Requirements (Updated June 2026)</a></li>
                                            <li><a href="https://www.elisity.com/blog/hipaa-security-rule-2026-240-days" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Elisity — The HIPAA Security Rule 2026: What Hospital CISOs Must Do in 240 Days (April 19, 2026)</a></li>
                                            <li><a href="https://medicalitg.com/hipaa-compliance/hipaa-risk-assessment-managed-it-support-for-healthcare-healthcare-cybersecurity-15/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">MedicalITG — HIPAA Risk Assessment: 2026 Cybersecurity Rules You Must Know</a></li>
                                            <li><a href="https://www.nextgov.com/cybersecurity/2026/04/former-fbi-official-proposes-terror-designations-ransomware-hackers-targeting-hospitals/413002/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Nextgov — Former FBI Official Proposes Terror Designations for Ransomware Hackers Targeting Hospitals (April 22, 2026)</a></li>
                                            <li><a href="https://www.nychealthandhospitals.org/pressrelease/notice-of-data-breach/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">NYC Health + Hospitals — Official Notice of Data Breach (March 24, 2026)</a></li>
                                            <li><a href="https://www.malwarebytes.com/blog/news/2026/05/biometrics-diagnoses-and-bank-details-exposed-in-major-healthcare-breach" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Malwarebytes — Biometrics, Diagnoses along with Bank Details Exposed in Major Healthcare Breach (May 2026)</a></li>
                                            <li><a href="https://www.censinet.com/blog/ai-adoption-survey-reveals-healthcares-governance-gap-and-drive-toward-agentic-usage" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Censinet — AI Adoption Survey Reveals Healthcare's Governance Gap</a></li>
                                            <li><a href="https://www.hipaajournal.com/healthcare-data-breach-statistics/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">HIPAA Journal — Healthcare Data Breach Statistics — Updated 2026</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-10 h-fit">
                            {/* CTA Card */}
                            <div className="bg-[#60C6B1] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Ready to Build for the Future?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    Don't let legacy architecture limit your potential. Connect with us to build a flexible, AI-ready healthcare application.
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
                                    <Link href="/blogs/ai-governance-in-healthcare-is-no-longer-optional" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">AI Governance</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">AI Governance in Healthcare Is No Longer Optional. Here Is What Your Vendor Should Be Able to Prove</h5>
                                    </Link>
                                    <Link href="/blogs/agentic-ai-in-healthcare-cto-guide" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">AI Readiness</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Agentic AI in Healthcare: What Hospital CTOs Need to Know</h5>
                                        </div>
                                    </Link>
                                    <Link href="/blogs/what-most-hospitals-get-wrong-when-deploying-ai-agents-in-revenue-cycle" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Deployment</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">What Most Hospitals Get Wrong When Deploying AI Agents in Revenue Cycle</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
