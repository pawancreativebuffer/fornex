import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "CMS ACCESS Model Expansion 2027: What COPD Along With SUD Add",
    description: "CMS is expanding Medicare's ACCESS model to cover COPD, substance use disorder along with tobacco cessation in 2027. Here is what it means for your care model along with billing.",
    keywords: [
        "CMS ACCESS model expansion 2027",
        "Medicare chronic condition payment model",
        "CMS ACCESS model COPD",
        "value-based care chronic disease 2026",
        "Medicare new technology payment chronic conditions"
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
                            CMS Is Expanding the ACCESS Model. <span className="text-[#60C6B1]">Here Is What COPD Along With Substance Use Disorder Add to Your Billing Picture.</span>
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
                                    <p className="font-medium text-white">October 8, 2026</p>
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
                                    src="/images/cms-access-model-expansion-2027.webp"
                                    alt="CMS ACCESS model expansion in 2027 highlighting COPD, substance use disorder, and tobacco cessation through technology-enabled chronic care management."
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        CMS announced on September 16, 2026 that it&apos;s expanding Medicare&apos;s technology-based payment model — the Advancing Chronic Care through Evidence-Based Support Solutions model, ACCESS — to cover additional chronic conditions in 2027. The additions include COPD, substance use disorder along with tobacco cessation.
                                    </p>

                                    <p className="mb-6">
                                        The original ACCESS model launched with a narrow set of qualifying conditions. Adding COPD along with SUD in 2027 significantly expands the patient population whose technology-enabled care management is eligible for Medicare payment under the model&apos;s framework.
                                    </p>

                                    <p className="mb-6">
                                        This announcement arrived the same week CMS proposed preliminary cuts to Medicare lab reimbursement rates — cuts the American Clinical Laboratory Association warned threaten patient access to critical testing services. The ACCESS expansion along with the lab payment cuts together define the directional tension in 2026 Medicare policy: CMS is simultaneously investing in technology-enabled chronic disease management along with reducing payment for some of the diagnostic testing that chronic disease management depends on.
                                    </p>

                                    <p className="mb-10">
                                        For hospital along with ambulatory care operations teams, the ACCESS expansion is the more immediately actionable story.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What Is the CMS ACCESS Model?</h2>

                                    <p className="mb-6">
                                        The ACCESS model is a Medicare payment demonstration that reimburses technology-enabled care management for patients with qualifying chronic conditions. It covers services delivered through digital health tools along with remote monitoring along with structured care management workflows that wouldn&apos;t be reimbursable under standard Medicare fee-for-service.
                                    </p>

                                    <p className="mb-6">
                                        The underlying logic is that chronic conditions — particularly conditions like COPD along with substance use disorder that generate high acute utilization when poorly managed — respond well to continuous monitoring along with structured interventions. Medicare pays more for the acute care those patients generate when they decompensate than it would pay for the technology-enabled management that could prevent the decompensation.
                                    </p>

                                    <p className="mb-10">
                                        The ACCESS model operationalizes that logic into a payment framework. It reimburses the management infrastructure instead of (or in addition to) waiting to reimburse the acute events.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Why COPD Along With SUD Are Significant Additions</h2>

                                    <p className="mb-6">
                                        COPD is one of the most expensive chronic conditions in Medicare. Approximately 16 million Americans have diagnosed COPD. The condition is the third leading cause of hospital readmission in the US. A single COPD exacerbation that results in a hospitalization costs Medicare somewhere between $7,000 along with $40,000 depending on severity along with complications.
                                    </p>

                                    <p className="mb-6">
                                        Remote monitoring for COPD patients — continuous pulse oximetry along with spirometry tracking along with early exacerbation detection — has demonstrated meaningful readmission reduction in published studies. The technology exists. The clinical evidence supports it. The missing piece has been a payment framework that makes the monitoring economically viable for the practices along with health systems delivering it. ACCESS 2027 provides that framework.
                                    </p>

                                    <p className="mb-6">
                                        Substance use disorder is a different kind of addition. SUD care has historically lived outside the mainstream of hospital-based chronic disease management. Adding it to a Medicare technology-based payment model signals a policy intent to bring SUD management into the same evidence-based, technology-enabled care infrastructure that&apos;s being built for diabetes along with heart failure along with now COPD.
                                    </p>

                                    <p className="mb-10">
                                        The practical implication: practices along with health systems that have been managing SUD patients through separate care management programs that weren&apos;t connected to their chronic disease management infrastructure now have a financial reason to integrate those workflows.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What the Lab Payment Cut Means Alongside This</h2>

                                    <p className="mb-6">
                                        The simultaneous nature of the ACCESS expansion along with the proposed Medicare lab payment cuts is operationally relevant for hospitals.
                                    </p>

                                    <p className="mb-6">
                                        COPD management depends on pulmonary function testing along with arterial blood gas analysis along with lab markers of inflammation. SUD care management depends on drug testing along with liver function monitoring along with metabolic panels. If Medicare lab reimbursement cuts reduce access to those tests — as the American Clinical Laboratory Association warned — the ACCESS model&apos;s value for COPD along with SUD patients is partly contingent on whether the diagnostic testing that supports the care management remains accessible along with financially viable.
                                    </p>

                                    <p className="mb-10">
                                        This is the kind of policy interaction that doesn&apos;t get surfaced in individual announcement coverage but matters enormously for care delivery operations. The technology payment model along with the diagnostic testing payment cuts need to be evaluated together, not separately.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What This Means for Care Model Along With Technology Investment</h2>

                                    <p className="mb-6">
                                        Organizations that have already built remote patient monitoring infrastructure for heart failure along with diabetes along with hypertension have the hardest work already done. Adding COPD patients to an existing RPM program is primarily a clinical protocol along with device configuration exercise rather than a ground-up infrastructure build.
                                    </p>

                                    <p className="mb-6">
                                        Organizations that haven&apos;t yet built RPM infrastructure face a different decision. The ACCESS model&apos;s 2027 expansion creates reimbursement justification for the investment. COPD along with SUD are patient populations where the readmission reduction from good remote monitoring has demonstrated ROI. The payment model along with the clinical evidence along with the chronic disease population are now aligned.
                                    </p>

                                    <p className="mb-6">
                                        The operational prerequisite is the EHR integration layer. RPM data that doesn&apos;t flow automatically into the patient&apos;s clinical record creates the same documentation-to-billing gap that causes prior auth problems along with EVV mismatches. The monitoring platform has to connect to the EHR through a validated integration along with not through manual data transfer.
                                    </p>

                                    <p className="mb-10">
                                        For how remote patient monitoring programs are built to actually reduce readmissions rather than just generate monitoring data, read: <Link href="/blogs/remote-patient-monitoring-in-2026-how-to-build-a-program-that-actually-reduces-readmissions" className="text-[#60C6B1] hover:underline font-semibold">Remote Patient Monitoring in 2026: How to Build a Program That Actually Reduces Readmissions</Link>
                                    </p>

                                    <img
                                        src="/images/cms-access-copd-sud-remote-monitoring.webp"
                                        alt="Healthcare clinician using a ForNex Health remote patient monitoring platform for COPD, substance use disorder, and tobacco cessation care management."
                                        className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                    />

                                    <h2 className="text-3xl font-bold mb-6">FAQs</h2>

                                    <h3 className="text-xl font-bold mb-2">What is the CMS ACCESS model?</h3>
                                    <p className="mb-6">
                                        The Advancing Chronic Care through Evidence-Based Support Solutions model is a Medicare payment demonstration that reimburses technology-enabled care management for patients with qualifying chronic conditions. It pays for the monitoring along with management infrastructure rather than waiting to reimburse acute care events.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">What conditions is CMS adding to the ACCESS model in 2027?</h3>
                                    <p className="mb-6">
                                        COPD, substance use disorder along with tobacco cessation were announced for addition in the 2027 ACCESS model expansion, announced September 16, 2026.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">Why is adding COPD significant?</h3>
                                    <p className="mb-6">
                                        COPD is one of the most expensive chronic conditions in Medicare along with the third leading cause of hospital readmission. Remote monitoring for COPD has demonstrated meaningful readmission reduction. ACCESS 2027 creates a Medicare payment framework that makes COPD remote monitoring economically viable for practices along with health systems.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">How does the Medicare lab payment cut affect the ACCESS model expansion?</h3>
                                    <p className="mb-6">
                                        COPD along with SUD management both depend on diagnostic testing. If the proposed Medicare lab payment cuts reduce access to pulmonary function testing along with drug testing along with metabolic monitoring, the clinical value of the ACCESS model for those conditions is partly contingent on whether that testing remains accessible.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">What technology infrastructure does participating in the ACCESS model require?</h3>
                                    <p className="mb-10">
                                        Remote patient monitoring devices appropriate for the qualifying conditions, a monitoring platform that processes along with alerts on the data along with a validated EHR integration that flows monitoring data directly into the patient&apos;s clinical record without manual data transfer.
                                    </p>

                                    {/* Citations Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ol className="space-y-3 text-sm list-decimal pl-5 text-gray-300">
                                            <li>
                                                <a href="https://www.healthcaredive.com/topic/healthcare-regulation/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">Healthcare Dive — CMS to Add More Chronic Conditions to ACCESS Model in 2027 (September 16, 2026)</a>
                                            </li>
                                            <li>
                                                <a href="https://www.aha.org/news" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">AHA News — New Resources Available from West Health Accelerator (September 18, 2026)</a>
                                            </li>
                                            <li>
                                                <a href="https://kffhealthnews.org/morning-briefing/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">KFF Health News — Morning Briefing September 24, 2026</a>
                                            </li>
                                            <li>
                                                <a href="https://www.healthcaredive.com/topic/healthcare-regulation/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">Healthcare Dive — Trump Administration Sets Preliminary Cuts to Medicare Lab Reimbursement Rates (September 22, 2026)</a>
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
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Ready to Scale Your Remote Care Infrastructure?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    Whether you are expanding RPM protocols for COPD and SUD, navigating the CMS ACCESS model, or integrating remote patient data seamlessly into your EHR, let our team guide your approach.
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
                                    <Link href="/blogs/remote-patient-monitoring-in-2026-how-to-build-a-program-that-actually-reduces-readmissions" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Remote Care</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Remote Patient Monitoring in 2026: How to Build a Program That Actually Reduces Readmissions</h5>
                                    </Link>
                                    <Link href="/blogs/hospital-it-outsourcing-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Hospital Operations</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Hospitals Are Outsourcing Their IT Departments. Four Just Did It in September.</h5>
                                    </Link>
                                    <Link href="/blogs/34-health-systems-drop-medicare-advantage-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Medicare Policy</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">34 Health Systems Are Walking Away From Medicare Advantage. Here Is What&apos;s Behind It.</h5>
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
