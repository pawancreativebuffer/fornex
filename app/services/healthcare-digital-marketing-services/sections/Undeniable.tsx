"use client";

import { MonitorSmartphone, ClipboardList, BrainCircuit, ShieldCheck, Video, RefreshCcw, Search, Dna, Telescope } from 'lucide-react';

export default function Undeniable() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                <div className="flex flex-col items-center text-center mb-4 max-w-[1100px] mx-auto">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span> Our Services</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[1300px]">
                        <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare SEO </span> Get Found When Patients Are Looking for You
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
                            <Search className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Local Search Optimization</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            When a patient in Chicago searches 'cardiologist near me' or 'urgent care open now Chicago,' Google returns a local pack of three results above the organic listings. Getting into that local pack — and showing up on the first page for local service searches — is the single highest-ROI digital marketing investment most US healthcare practices can make.<br /><br />
                            We optimize your Google Business Profile, build your local citation profile across health-specific directories (Healthgrades, Zocdoc, Vitals, US News Health, WebMD), manage your online review strategy, and optimize your website's local landing pages for every service and location you operate. Our local SEO clients typically see a 40 to 80 percent increase in local search visibility within 90 days.
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
                            <Dna className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Medical Content Marketing and SEO</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Patients now research symptoms, conditions, and treatment options online before they ever call a provider's office. If your website provides authoritative, clinically accurate answers to the questions your patients are asking, you earn their trust before they even walk through the door. And Google rewards healthcare content that demonstrates genuine medical expertise — following its E-E-A-T guidelines (Experience, Expertise, Authoritativeness, Trustworthiness) for health-related search results.<br /><br />
                            We build healthcare content strategies around the specific conditions, procedures, and services your organization offers — creating physician-reviewed blog posts, condition explainer pages, FAQ content, and procedure guides that rank for the terms your target patients are actually searching. Our content team includes medical writers with clinical backgrounds, not general freelancers who research conditions on Wikipedia.
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
                            <Telescope className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Technical Healthcare SEO</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Beyond content, the technical foundation of your website has a significant impact on search ranking — particularly for healthcare sites, where Google applies extra scrutiny. We audit and optimize site speed (critical for mobile healthcare searches), crawlability, schema markup implementation for medical practices and healthcare services, HTTPS security, Core Web Vitals performance, and structured data for physician profiles and locations.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

