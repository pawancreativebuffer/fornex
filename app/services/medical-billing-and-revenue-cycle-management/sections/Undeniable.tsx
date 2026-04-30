"use client";

import { ClipboardList, BrainCircuit, RefreshCcw, FileCheck, ShieldCheck, Wallet, BarChart3 } from 'lucide-react';

export default function Undeniable() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                <div className="flex flex-col items-center text-center mb-4 max-w-[800px] mx-auto">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span> Our Services</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[1200px]">
                        Our <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Medical Billing and RCM</span> Services
                    </h2>
                </div>

                {/* Infographic - Carbon Copy of the Zig-Zag Layout */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-10 lg:mt-15">
                    {/* Card 1 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#60c6b1' }}
                    >
                        <div className="flex justify-center mb-6">
                            <ClipboardList className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">End-to-End Medical Billing</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            We manage the complete billing cycle for your practice or health system - from charge capture through patient collections. Our billers are certified (CPC, CCS, CBCS) and specialize by specialty, which means your cardiology claims are reviewed by someone who understands cardiac electrophysiology billing, not a generalist who handles every specialty the same way.
                            Our billing workflow includes: patient eligibility verification before every appointment, charge capture review and scrubbing, ICD-10 and CPT code validation, claim submission to primary and secondary payors, ERA and EOB posting, patient statement generation, and collections follow-up.
                        </p>

                        {/* Connector 1-2 (Desktop Only) */}
                        <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-12 translate-y-2 pointer-events-none">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="24" r="4" stroke="#60c6b1" strokeWidth="3" fill="white" />
                                <path d="M8 24 H 36 V 4 Q 36 0 40 0 H 60" stroke="#60c6b1" strokeWidth="3" fill="none" />
                                <path d="M58 -4 L 64 0 L 58 4" stroke="#60c6b1" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#90c7e5' }}
                    >
                        <div className="flex justify-center mb-6">
                            <BrainCircuit className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">AI-Powered Claim Scrubbing</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Before any claim leaves our system, it runs through our AI-powered claim scrubbing engine - trained on millions of historical claims and payer-specific editing rules across all major US commercial payors and government programs. The scrubber catches modifier errors, unbundling violations, medical necessity gaps, and payer-specific formatting issues that would cause a denial - before the claim is ever submitted.
                            The result is a clean claim rate consistently above 98 percent - compared to the industry average of 75 to 85 percent. Fewer denials mean faster payments and lower administrative cost per dollar collected.
                        </p>

                        {/* Connector 2-3 (Desktop Only) */}
                        <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-12 translate-y-2 pointer-events-none">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="24" r="4" stroke="#90c7e5" strokeWidth="3" fill="white" />
                                <path d="M8 24 H 36 V 4 Q 36 0 40 0 H 60" stroke="#90c7e5" strokeWidth="3" fill="none" />
                                <path d="M58 -4 L 64 0 L 58 4" stroke="#90c7e5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#ff9900' }}
                    >
                        <div className="flex justify-center mb-6">
                            <RefreshCcw className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Denial Management and Appeals</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Denials are not just rejected - they are opportunities for revenue recovery if pursued correctly and promptly. Our denial management team categorizes every denial by root cause, initiates the appropriate remediation workflow, and tracks appeal status through resolution. We maintain payer-specific appeal templates for the most common denial categories across Medicare, Medicaid, Blue Cross Blue Shield, United Healthcare, Aetna, Cigna, Humana, and hundreds of regional plans.
                            Our average appeal success rate is above 85 percent - compared to an industry average of roughly 60 percent - because we understand that effective appeals require clinical documentation, coding rationale, and payer-specific language, not just a generic cover letter.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-5 lg:mt-10">
                    {/* Card 4 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#ff9900' }}
                    >
                        <div className="flex justify-center mb-6">
                            <FileCheck className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Prior Authorization Management</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Prior authorization is one of the fastest-growing administrative burdens in US healthcare. A 2023 AMA survey found that physicians spend an average of 14 hours per week on prior authorization activities. We manage the complete prior authorization workflow - submission, payer follow-up, peer-to-peer appeals, and documentation management - reducing the time your clinical staff spends on administrative tasks they were not trained to do.
                        </p>

                        {/* Connector 1-2 (Desktop Only) */}
                        <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-12 translate-y-2 pointer-events-none">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="24" r="4" stroke="#ff9900" strokeWidth="3" fill="white" />
                                <path d="M8 24 H 36 V 4 Q 36 0 40 0 H 60" stroke="#ff9900" strokeWidth="3" fill="none" />
                                <path d="M58 -4 L 64 0 L 58 4" stroke="#ff9900" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#60c6b1' }}
                    >
                        <div className="flex justify-center mb-6">
                            <ShieldCheck className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Eligibility Verification and Benefits Analysis</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            A significant percentage of claim denials trace back to eligibility issues identified too late - after the service has been rendered and the claim submitted. We run eligibility verification for every scheduled patient, typically 48 to 72 hours before the appointment, and provide your front desk staff with a benefits summary that includes deductible status, copay amounts, and any service-specific authorization requirements.
                        </p>

                        {/* Connector 2-3 (Desktop Only) */}
                        <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-12 translate-y-2 pointer-events-none">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="24" r="4" stroke="#60c6b1" strokeWidth="3" fill="white" />
                                <path d="M8 24 H 36 V 4 Q 36 0 40 0 H 60" stroke="#60c6b1" strokeWidth="3" fill="none" />
                                <path d="M58 -4 L 64 0 L 58 4" stroke="#60c6b1" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#90c7e5' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Wallet className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Patient Collections and Balance Management</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            As patient financial responsibility has grown with the rise of high-deductible health plans, patient collections have become a critical RCM component. We manage patient balance communications through compliant statement generation, text and email reminders, and payment plan arrangements - with scripts and workflows designed to maximize collection rates while preserving the patient relationship.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-5 lg:mt-10">
                    {/* Card 7 */}
                    <div
                        className="relative w-full lg:w-full bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#60c6b1' }}
                    >
                        <div className="flex justify-center mb-6">
                            <BarChart3 className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">RCM Analytics and Reporting</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            You cannot manage what you cannot measure. Our RCM reporting dashboard gives practice administrators and healthcare CFOs real-time visibility into: gross and net collection rates by provider and payer, denial rates by denial code and payer, days in accounts receivable by aging bucket, charge volume and reimbursement trends, and clean claim rate trends. Monthly executive reports translate these metrics into specific operational recommendations.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

