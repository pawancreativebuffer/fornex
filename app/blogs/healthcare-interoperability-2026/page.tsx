import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Healthcare Interoperability 2026: What Hospital CIOs Must Do",
    description: "TEFCA is live. Information blocking fines just hit $1M per violation. USCDI v3 is mandatory now. Here is the interoperability action plan every hospital CIO needs.",
    keywords: ["healthcare interoperability 2026", "TEFCA hospital 2026", "information blocking enforcement", "EHR interoperability FHIR", "USCDI v3 compliance hospitals", "healthcare data exchange standards"],
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
                            Healthcare Interoperability in 2026: <span className="text-[#60C6B1]">The Rules Changed. Most Hospitals Have Not Caught Up.</span>
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
                                    <p className="font-medium text-white">June 22, 2026</p>
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
                                    src="/images/healthcare_interoperability_2026.png"
                                    alt="Healthcare Interoperability 2026: What Hospital CIOs Must Do"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        For years, healthcare interoperability was framed as a long-term aspiration. Someday patient data would move freely between systems. Someday a physician could see the complete picture of a patient's history without making three phone calls. Someday the fax machine would retire.
                                    </p>
                                    <p className="mb-6">
                                        2026 is not someday. The rules are in effect. The enforcement is active. The penalties are real.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.hklaw.com/en/insights/publications/2026/02/the-wait-is-over-information-blocking-enforcement-is-officially-here" target="_blank" className="text-[#60C6B1]">Since 2021, the Information Blocking Complaint Portal has been open with nearly 1,600 complaints submitted as of February 2026.</a> For years those complaints sat without consequences. That changed in late 2025. Active enforcement is now underway.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.hklaw.com/en/insights/publications/2026/02/the-wait-is-over-information-blocking-enforcement-is-officially-here" target="_blank" className="text-[#60C6B1]">Health IT developers along with health information exchanges face potential fines of up to $1 million per violation. Violations can stack. Repeat offenders face certification bans along with being removed from the ONC program.</a>
                                    </p>
                                    <p className="mb-10">
                                        For hospital IT leadership, the interoperability agenda shifted from strategic priority to compliance risk. Here is exactly where things stand in June 2026 along with what your organization needs to do about it.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">TEFCA: What It Is Along With Why It Matters Right Now</h2>
                                    <p className="mb-6">
                                        <a href="https://www.beckershospitalreview.com/healthcare-information-technology/ehrs/whats-new-with-tefca-in-2026-3-updates/" target="_blank" className="text-[#60C6B1]">TEFCA, the Trusted Exchange Framework and Common Agreement, is the federally overseen infrastructure designed to help hospitals, clinics, insurers, government agencies along with other healthcare organizations securely share patient records across networks and systems.</a>
                                    </p>
                                    <p className="mb-6">
                                        Think of it as the national highway for health data. Before TEFCA, hospitals connected to other hospitals through individual point-to-point arrangements. Custom interfaces. Proprietary agreements. Each new connection required its own technical work along with its own negotiation. A large health system might maintain dozens of these connections. Each one represents an ongoing maintenance cost along with a potential failure point.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.capminds.com/blog/ehr-interoperability-solutions-comparing-approaches-costs-roi-for-health-systems-in-2026/" target="_blank" className="text-[#60C6B1]">TEFCA's offer is straightforward: join one participating Qualified Health Information Network and you can exchange patient data with any provider connected to any other QHIN across the country.</a>
                                    </p>
                                    <p className="mb-6">
                                        That is a fundamentally different architecture. One connection replaces dozens.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.beckershospitalreview.com/healthcare-information-technology/ehrs/whats-new-with-tefca-in-2026-3-updates/" target="_blank" className="text-[#60C6B1]">In April 2026, health systems using Epic's EHR began electronically sharing patient records with the Social Security Administration through TEFCA, helping accelerate disability determinations by up to 50%. The TEFCA connection expanded the Social Security Administration's reach to an additional 13 hospitals along with 374 clinics.</a>
                                    </p>
                                    <p className="mb-6">
                                        That is not a pilot. That is production-scale government data exchange running on TEFCA today. The network is real along with it is growing.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.capminds.com/blog/ehr-interoperability-solutions-comparing-approaches-costs-roi-for-health-systems-in-2026/" target="_blank" className="text-[#60C6B1]">TEFCA participation is voluntary but rapidly becoming a market expectation. Beginning January 1, 2026, QHINs must adopt HL7 FAST security procedures for all FHIR transactions.</a> Voluntary participation that becomes a market expectation has a way of becoming a practical requirement faster than most hospital planning cycles anticipate.
                                    </p>
                                    <p className="mb-10">
                                        For the connection between TEFCA participation along with prior authorization automation, read our full breakdown: <strong>The FHIR Prior Auth Deadline Is January 2027 - Is Your Hospital Ready?</strong>
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">USCDI v3 Is Mandatory. Today. Not Eventually.</h2>
                                    <p className="mb-6">
                                        <a href="https://aihc-assn.org/privacy-interoperability-and-trust-in-2026/" target="_blank" className="text-[#60C6B1]">As of January 1, 2026, compliance with USCDI Version 3 became mandatory for certified EHR systems along with health IT vendors.</a>
                                    </p>
                                    <p className="mb-6">
                                        USCDI - the United States Core Data for Interoperability - defines the standardized data elements required for exchange across certified health IT systems. Version 3 expanded that scope significantly. It now includes social determinants of health, health equity data along with expanded insurance information.
                                    </p>
                                    <p className="mb-6">
                                        Why does this matter for hospital operations? Two reasons.
                                    </p>
                                    <p className="mb-6">
                                        First, <a href="https://aihc-assn.org/privacy-interoperability-and-trust-in-2026/" target="_blank" className="text-[#60C6B1]">failure to meet USCDI v3 standards may expose organizations to information blocking allegations, certification issues along with contractual noncompliance with payers along with federal programs.</a> If your EHR vendor has not updated to USCDI v3 compliance, you are potentially in violation of federal standards. That is worth a direct conversation with your vendor this week.
                                    </p>
                                    <p className="mb-6">
                                        Second, USCDI v3 data is the substrate that makes population health analytics work properly. AI-driven risk stratification, readmission prediction, along with chronic disease management tools all depend on structured, standardized data. Organizations running on pre-v3 data standards are feeding their analytics tools incomplete inputs. The insights those tools generate are only as good as the data behind them.
                                    </p>
                                    <p className="mb-10">
                                        <a href="https://www.ehrsource.com/articles/ehr-interoperability-guide/" target="_blank" className="text-[#60C6B1]">92% of EHR vendors now support FHIR R4. 90% of health systems have FHIR-enabled APIs.</a> 81% of hospitals have enabled patient access APIs. The infrastructure is largely in place. The gap is in using it properly along with staying current with the standards that sit on top of it.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Information Blocking Enforcement Is Not Theoretical Anymore</h2>
                                    <p className="mb-6">
                                        <a href="https://www.fiercehealthcare.com/health-tech/himss26-hhs-officials-offer-updates-interoperability-efforts-information-blockings" target="_blank" className="text-[#60C6B1]">At the 2026 HIMSS Global Health Conference, HHS officials confirmed that ONC has been sending notices to developers of certified health IT about potential nonconformity issues along with is continuing to issue them.</a>
                                    </p>
                                    <p className="mb-6">
                                        The definition of information blocking under the 21st Century Cures Act is intentionally broad.<a href="https://fillmoretownship.com/interoperability-mandates-in-2026-what-hospital-cios-must-prepare-for/" target="_blank" className="text-[#60C6B1]"> Any practice that interferes with the access, exchange along with use of electronic health information counts.</a> That includes overly restrictive data-sharing policies that your legal team put in place without considering the information blocking implications. It includes technical barriers your IT team built years ago to limit EHR access that nobody has reviewed recently. It includes vendor contracts that restrict your ability to move data to a competing platform.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.alston.com/en/insights/publications/2026/02/information-blocking-enforcement-2026" target="_blank" className="text-[#60C6B1]">OIG has stated that enforcement will prioritize practices that result in patient harm, significantly impair care delivery, persist over time along with cause financial losses to federal healthcare programs.</a>
                                    </p>
                                    <p className="mb-6">
                                        Notice what that list covers. Patient harm means any instance where a clinician could not access records they needed because of a data-sharing restriction. Care delivery impairment means any workflow where a patient's information could not move between systems and clinical decisions were delayed as a result. These are not exotic scenarios. They describe daily operations in most health systems.
                                    </p>
                                    <p className="mb-10">
                                        The enforcement spotlight is currently on EHR vendors along with health IT developers. <a href="https://fillmoretownship.com/interoperability-mandates-in-2026-what-hospital-cios-must-prepare-for/" target="_blank" className="text-[#60C6B1]">But hospital CIOs should not get comfortable. Providers can absolutely get referred to HHS-OIG.</a>
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Three Interoperability Gaps That Create The Most Risk</h2>
                                    <p className="mb-6">
                                        <strong>The vendor contract gap.</strong> Many hospital contracts with EHR vendors include data portability restrictions written years ago. Review every vendor contract for clauses that restrict your ability to extract, share along with migrate your own patient data. Those clauses may constitute information blocking. Getting them renegotiated before enforcement attention reaches providers is significantly easier than addressing them under regulatory scrutiny.
                                    </p>
                                    <p className="mb-6">
                                        <strong>The legacy interface gap.</strong> <a href="https://www.ehrsource.com/articles/ehr-interoperability-guide/" target="_blank" className="text-[#60C6B1]">43% of hospitals now engage in all four domains of interoperable exchange - send, receive, find along with integrate - up from 28% in 2018.</a> That means 57% of hospitals are still not fully functional across all four exchange domains. Most of those organizations have legacy HL7 v2 interfaces that were built in the 1990s along with never modernized. Those interfaces cannot participate in FHIR-based exchange. They cannot connect to TEFCA. They cannot support the prior authorization APIs required by January 2027.
                                    </p>
                                    <p className="mb-6">
                                        A legacy interface audit is not a multi-year project. It is a 30-day discovery exercise that most hospital IT teams can run with existing resources. Do it. What you find will tell you exactly where your FHIR modernization investment needs to go.
                                    </p>
                                    <p className="mb-10">
                                        <strong>The patient identity gap.</strong> Interoperability only works if the receiving system can correctly match the incoming data to the right patient. <a href="https://www.certifyhealth.com/blog/ehr-interoperability-2026-standards-roadmap/" target="_blank" className="text-[#60C6B1]">Without reliable patient identity resolution at the front of data exchange, records get merged incorrectly along with patient safety events follow.</a> As exchange volumes increase through TEFCA, the patient identity problem scales proportionally. Organizations that have not invested in master patient index quality along with identity matching infrastructure will see their error rates rise as their exchange volume grows.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What Interoperability Makes Possible That Nothing Else Can</h2>
                                    <p className="mb-6">
                                        The compliance framing around interoperability is important. It is not the only framing.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://tateeda.com/blog/healthcare-technology-trends" target="_blank" className="text-[#60C6B1]">TEFCA has expanded to nearly 500 million exchanged health records.</a> That is the largest health data exchange infrastructure in human history. The organizations participating in it have access to longitudinal patient data across care settings that was simply not available before.
                                    </p>
                                    <p className="mb-6">
                                        The GLP-1 breast cancer research published at ASCO in June 2026 was built entirely on EHR data from one health system. The clinical research that will come from a properly interoperable national health data network is an order of magnitude larger. The GLP-1 data analysis that took one institution years to assemble becomes something any TEFCA-connected health system can replicate.
                                    </p>
                                    <p className="mb-6">
                                        The AI tools that hospital CEOs are being asked to evaluate - for revenue cycle, for clinical decision support, for population health management - all perform significantly better with access to complete, interoperable patient data. Our blog on <a href="https://www.fornexhealth.com/blogs/agentic-ai-in-healthcare-cto-guide" target="_blank" className="text-[#60C6B1]">what hospital CTOs need to know before piloting agentic AI</a> covers exactly why data infrastructure is the prerequisite that determines whether AI deployments succeed.
                                    </p>
                                    <p className="mb-10">
                                        The interoperability investment is not just compliance protection. It is the infrastructure that makes the entire technology strategy work.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What to Do This Month</h2>
                                    <p className="mb-6">
                                        <strong>Audit your vendor contracts for data portability restrictions.</strong> Identify every clause that limits your ability to access, extract along with share your own patient data. Flag them for legal review against the information blocking definitions.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Review your USCDI v3 compliance status with your EHR vendor.</strong> Ask for written confirmation that your current version is compliant. If it is not, ask for the upgrade timeline along with get it in writing.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Map your legacy interfaces.</strong> Identify every HL7 v2 interface in your environment. Prioritize by volume along with clinical criticality. The ones carrying the highest volume are your first FHIR modernization targets.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Assess your QHIN connection options.</strong> If your EHR vendor participates in TEFCA through a QHIN, you may already have a path to connection that does not require separate infrastructure investment. Find out what that path looks like along with what it costs to activate it.
                                    </p>
                                    <p className="mb-10">
                                        The interoperability rules have been building for years. The enforcement phase has started. The organizations that treat this as an urgent operational priority in the next 90 days will be in a fundamentally better compliance position - along with a fundamentally better data position - than the ones still treating it as a planning-cycle discussion.
                                    </p>

                                    <p className="mb-10">
                                        FHIR compliance, TEFCA readiness, USCDI v3 along with information blocking risk all converge on the same underlying problem: healthcare data that does not move properly. <a href="https://www.fornexhealth.com/" target="_blank" className="text-[#60C6B1] font-medium hover:underline">Fornex Health</a> specializes in EHR integration, FHIR-based API development along with interoperability architecture for hospitals navigating exactly this environment. <a href="https://calendly.com/pawan_panwar/letstalk" target="_blank" className="text-[#60C6B1] font-medium hover:underline">Book a 30-minute interoperability readiness call with our team.</a>
                                    </p>

                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://www.beckershospitalreview.com/healthcare-information-technology/ehrs/whats-new-with-tefca-in-2026-3-updates/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Becker's Hospital Review - What's New With TEFCA in 2026: 3 Updates (April 2026)</a></li>
                                            <li><a href="https://www.hklaw.com/en/insights/publications/2026/02/the-wait-is-over-information-blocking-enforcement-is-officially-here" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Holland & Knight - The Wait Is Over: Information Blocking Enforcement Is Officially Here (February 13, 2026)</a></li>
                                            <li><a href="https://www.alston.com/en/insights/publications/2026/02/information-blocking-enforcement-2026" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Alston - Information Blocking Enforcement Enters a New Phase in 2026 (February 23, 2026)</a></li>
                                            <li><a href="https://www.fiercehealthcare.com/health-tech/himss26-hhs-officials-offer-updates-interoperability-efforts-information-blocking" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Fierce Healthcare - HIMSS26: HHS Officials Offer Updates on Interoperability Efforts (March 12, 2026)</a></li>
                                            <li><a href="https://www.capminds.com/blog/ehr-interoperability-solutions-comparing-approaches-costs-roi-for-health-systems-in-2026/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">CapMinds - EHR Interoperability Solutions for Health Systems in 2026 (May 6, 2026)</a></li>
                                            <li><a href="https://www.ehrsource.com/articles/ehr-interoperability-guide/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">EHR Source - EHR Interoperability in 2026: FHIR, TEFCA Along With What Your Practice Needs to Know (February 18, 2026)</a></li>
                                            <li><a href="https://fillmoretownship.com/interoperability-mandates-in-2026-what-hospital-cios-must-prepare-for/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Fillmore Township - Interoperability Mandates in 2026: What Hospital CIOs Must Prepare For (April 10, 2026)</a></li>
                                            <li><a href="https://aihc-assn.org/privacy-interoperability-and-trust-in-2026/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">AIHC - Privacy, Interoperability Along With Trust in 2026 (February 12, 2026)</a></li>
                                            <li><a href="https://tateeda.com/blog/healthcare-technology-trends" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">TATEEDA - The Top 20 Healthcare Technology Trends 2026 (April 2026)</a></li>
                                            <li><a href="https://www.certifyhealth.com/blog/ehr-interoperability-2026-standards-roadmap/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">CERTIFY Health - EHR Interoperability 2026: Federal Standards Along With Strategic Roadmap</a></li>
                                            <li><a href="https://www.healthcarelawinsights.com/2026/03/hhs-crackdown-on-information-blocking-new-era-of-enforcement-fines-and-compliance-risks-for-healthcare-entities/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Healthcare Law Insights - HHS Crackdown on Information Blocking (March 2, 2026)</a></li>
                                            <li><a href="https://medcurity.com/hipaa-security-rule-2026-update/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Medcurity - 2026 HIPAA Security Rule Update</a></li>
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
