"use client";

import { Network, MessageSquare, Blocks, Hospital, Database, Cloud, Files, Share2 } from 'lucide-react';

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
                        Our <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">EHR and EMR</span> Integration Services
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
                            <Network className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">FHIR R4 API Integration</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Fast Healthcare Interoperability Resources (FHIR) R4 is the gold standard for modern healthcare data exchange - mandated by CMS for payors and increasingly required by health systems for vendor connectivity. Our team has deep expertise implementing FHIR R4 APIs across all major EHR platforms, enabling real-time bidirectional data exchange for clinical data, scheduling, patient demographics, lab results, medications, and claims.
                            <br /><br />
                            We handle FHIR server configuration, resource mapping, authentication flows, and ongoing maintenance - so your development team does not need to become FHIR experts to benefit from interoperability.
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
                            <MessageSquare className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">HL7 v2 and v3 Messaging Integration</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            HL7 v2 remains the most widely deployed healthcare messaging standard in the United States - powering ADT notifications, lab result delivery, radiology reports, and referral workflows in thousands of hospitals and health systems. Our integration engineers are fluent in HL7 v2 message types including ADT, ORM, ORU, MDM, DFT, and SIU.
                            <br /><br />
                            We build and maintain HL7 integration engines, design message transformation pipelines, and implement error handling and delivery confirmation workflows - ensuring that every clinical message reaches its destination reliably and on time.
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
                            <Blocks className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">SMART on FHIR Application Integration</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            SMART on FHIR is the standard that allows third-party applications to launch securely within an EHR context - giving clinicians access to specialized tools without leaving their primary workflow. We build SMART on FHIR apps that launch inside Epic, Cerner, and other major EHR platforms, as well as SMART authorization servers for organizations building their own app ecosystems.
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-5 lg:mt-10">
                    {/* Card 4 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#ff9900' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Hospital className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Epic Integration</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Epic holds the largest market share among US hospital EHR systems. Our team has completed multiple Epic integrations using Epic's web services, FHIR R4 APIs, and MyChart APIs. We navigate Epic's strict vetting process, manage the App Orchard listing where applicable, and build integrations that pass Epic's technical and security review requirements.
                        </p>

                        {/* Connector 4-5 (Desktop Only) */}
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
                            <Database className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Cerner and Oracle Health Integration</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Cerner (now Oracle Health) is deployed across hundreds of US health systems. We integrate with Cerner's Millennium platform using both HL7 messaging and FHIR R4 APIs - handling everything from patient data synchronization to clinical decision support alerts and revenue cycle integration.
                        </p>

                        {/* Connector 5-6 (Desktop Only) */}
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
                            <Cloud className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Athenahealth Integration</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Athenahealth is the leading cloud-based EHR for ambulatory care practices. We build integrations with the Athenahealth API platform for patient data access, appointment scheduling, clinical document exchange, and billing workflow automation - enabling independent practices and specialty groups to connect their entire ecosystem around Athenahealth's core.
                        </p>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-5 lg:mt-10">
                    {/* Card 7 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#90c7e5' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Files className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">CDA and C-CDA Document Exchange</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Clinical Document Architecture (CDA) and Consolidated CDA (C-CDA) documents are the standard format for exchanging clinical summaries, referral notes, discharge summaries, and care transition records. We build C-CDA generation, parsing, and exchange workflows that work across all major health information exchanges and direct messaging networks.
                        </p>

                        {/* Connector 7-8 (Desktop Only) */}
                        <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-12 translate-y-2 pointer-events-none">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="24" r="4" stroke="#90c7e5" strokeWidth="3" fill="white" />
                                <path d="M8 24 H 36 V 4 Q 36 0 40 0 H 60" stroke="#90c7e5" strokeWidth="3" fill="none" />
                                <path d="M58 -4 L 64 0 L 58 4" stroke="#90c7e5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div
                        className="relative w-full lg:w-[400px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#60c6b1' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Share2 className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Health Information Exchange (HIE) Connectivity</h3>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            State and regional Health Information Exchanges carry critical patient data from emergency visits, specialist consultations, and imaging studies. We connect your systems to relevant HIE networks - including CommonWell, Carequality, and state-specific HIEs - giving your clinicians a more complete picture of every patient's history.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

