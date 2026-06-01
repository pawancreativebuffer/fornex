"use client";

import { Database, Users, LineChart, Maximize } from 'lucide-react';

export default function Undeniable() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                <div className="flex flex-col items-center text-center mb-10 max-w-[1200px] mx-auto">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>The Problem</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[1300px]">
                        Traditional Healthcare Lacks <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Personalization</span>
                    </h2>
                </div>

                {/* Infographic - Carbon Copy of the Zig-Zag Layout */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative my-5">

                    {/* Card 1 */}
                    <div
                        className="relative w-full lg:w-[600px] bg-white border-[3px] rounded-[40px] p-8 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#60c6b1' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Database className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Fragmented Health Data</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Blood tests, wearable devices, assessments, and medical records exist in separate systems.
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
                        className="relative w-full lg:w-[600px] bg-white border-[3px] rounded-[40px] p-8 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#90c7e5' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Users className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Generic Recommendations</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Most wellness products deliver the same advice to everyone, regardless of biology.
                        </p>
                    </div>
                </div>

                {/* Infographic - Carbon Copy of the Zig-Zag Layout */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-5 lg:mt-10">

                    {/* Card 1 */}
                    <div
                        className="relative w-full lg:w-[600px] bg-white border-[3px] rounded-[40px] p-8 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#ff9900' }}
                    >
                        <div className="flex justify-center mb-6">
                            <LineChart className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Limited Progress Tracking</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Users rarely understand whether interventions are actually improving outcomes.
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
                        className="relative w-full lg:w-[600px] bg-white border-[3px] rounded-[40px] p-8 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#c66060' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Maximize className="w-10 h-10" style={{ color: '#c66060' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Lack of Scalability</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Health coaches cannot manually analyze large volumes of health data.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

