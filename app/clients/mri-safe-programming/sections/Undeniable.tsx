"use client";

import { Search, Flag, FileSpreadsheet } from 'lucide-react';

export default function Undeniable() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                <div className="flex flex-col items-center text-center mb-4 max-w-[800px] mx-auto">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span> What Triggered This Project</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[1100px]">
                        The Moment It Became <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Undeniable</span>
                    </h2>
                </div>
                <p className="text-gray-500 text-base font-regular leading-relaxed text-center">
                    Three clinical realities converged to make MRI Logic both urgent and necessary:
                </p>


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
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Scans Were Being Cancelled at the Last Minute</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            MRI centers routinely discovered too late that a patient's cardiac device was not MRI-conditional — after the patient had already been scheduled, prepped, and brought to the suite. A 10-second check before scheduling would prevent hours of wasted clinical time and unnecessary patient distress.
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
                            <FileSpreadsheet className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Manual Multi-Source Lookups Were Creating Accuracy Risks</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Staff relied on manual checks across four separate manufacturer portals — each with different formats and update cadences. Accuracy depended entirely on individual knowledge, not a standardized system. For a life-critical clinical decision, that was not acceptable.
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
                            <Flag className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Smart-Praxis Had the Infrastructure - But Not the Point-of-Care Tool</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            The Smart-Praxis web platform could coordinate the MRI workflow between institutions — but it couldn't answer the pre-scheduling compatibility question that triggered the whole process. MRI Logic was designed as the mobile front door: the instant check that feeds into the broader Smart-Praxis ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

