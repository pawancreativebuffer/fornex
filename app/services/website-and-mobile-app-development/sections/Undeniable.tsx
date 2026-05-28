"use client";

import { MonitorSmartphone, SquareActivity, PanelTop } from 'lucide-react';

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
                        Healthcare Website <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Development</span> Services
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
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Medical Practice and Hospital Websites</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Your website is the front door to your practice. We build medically credible, SEO-optimized websites that convert visitors into booked appointments. Every site we build includes online appointment scheduling integrated with your practice management system, provider profiles designed to rank in local search results, patient education content frameworks, insurance and billing information pages, and ADA-compliant accessibility design that meets WCAG 2.1 AA standards.<br /><br />
                            We build on platforms that give your team full content control - including custom WordPress builds, headless CMS implementations, and proprietary web applications - depending on your operational needs and growth plans.
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
                            <SquareActivity className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Patient Portal Development</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            A patient portal is one of the highest-impact digital investments a healthcare organization can make. Patients who use portals have higher engagement rates, better medication adherence, fewer avoidable readmissions, and consistently higher satisfaction scores. We build custom patient portals that go beyond the basics - secure messaging, lab result access, appointment scheduling, care plan management, prescription refill requests, and billing - fully integrated with your EHR and practice management system through FHIR R4 APIs.
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
                            <PanelTop className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Healthcare Landing Pages and Lead Generation</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            For healthcare organizations running paid advertising, specialty service lines, or clinical trial recruitment campaigns, we build high-converting landing pages with integrated CRM capture, HIPAA-compliant lead management, and analytics tracking. Our landing pages are built to load in under 2 seconds on mobile - a critical factor for Google Quality Score and patient conversion rates.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

