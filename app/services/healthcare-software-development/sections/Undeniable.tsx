"use client";

import { MonitorSmartphone, ClipboardList, BrainCircuit, ShieldCheck, Video, RefreshCcw } from 'lucide-react';

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
                        Our Healthcare <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Software Development</span> Services
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
                            <MonitorSmartphone className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Custom Patient & Provider Portals</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            We design and build patient-facing portals and clinician dashboards that are intuitive, HIPAA-compliant, and deeply integrated with your existing workflows. Patients can schedule appointments, access lab results, communicate securely with providers, and manage care plans - all from a single interface. Clinicians get a unified view of patient history, real-time alerts, and documentation tools that reduce charting time by up to 40%.
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
                            <ClipboardList className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Clinical Workflow Automation</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Manual administrative tasks are one of the biggest drains on clinical staff time. We automate intake processes, referral management, care coordination workflows, prior authorization requests, and documentation tasks - using intelligent automation built on AI and machine learning models trained specifically on healthcare data. Our clients consistently report 30 to 50 percent reductions in administrative workload within the first 90 days.
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
                            <BrainCircuit className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">AI-Powered Healthcare Applications</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Artificial intelligence is no longer a future possibility in healthcare - it is a present competitive advantage. Our team builds AI and machine learning solutions specifically for clinical environments. This includes predictive analytics for patient deterioration, NLP-based clinical documentation assistants, automated medical coding, intelligent denial management, and real-time clinical decision support tools. All built on HIPAA-compliant infrastructure using TensorFlow, PyTorch, and OpenAI APIs.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-5 lg:mt-10">
                    {/* Card 1 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#ff9900' }}
                    >
                        <div className="flex justify-center mb-6">
                            <ShieldCheck className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">HIPAA-Compliant Cloud Platforms</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            All software we build is hosted on AWS HIPAA-eligible infrastructure or Google Cloud Healthcare API - never on shared infrastructure that creates PHI exposure risk. We implement end-to-end encryption, role-based access controls, audit logging, and automated threat detection from day one. Our cloud architecture is built to scale - from a 10-provider practice to a 500-provider health system - without architectural rework.
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

                    {/* Card 2 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#60c6b1' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Video className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Telehealth & Virtual Care Platforms</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            The demand for virtual care has permanently changed patient expectations. We build end-to-end telehealth platforms with secure video consultation, e-prescribing, remote patient monitoring, and EHR integration. Our telehealth solutions are built to comply with US state telehealth regulations, CMS billing requirements, and HIPAA technical safeguard rules - so you can launch and scale without legal uncertainty.
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

                    {/* Card 3 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#90c7e5' }}
                    >
                        <div className="flex justify-center mb-6">
                            <RefreshCcw className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Legacy System Modernization</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Replacing a legacy healthcare system does not have to mean months of downtime and disrupted clinical operations. ForNex Health has a proven methodology for modernizing outdated EHR systems, billing platforms, and practice management tools  migrating data securely, rebuilding integrations to FHIR R4 standards, and transitioning staff incrementally. We have completed legacy modernization projects for organizations ranging from independent specialty practices to regional hospital networks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

