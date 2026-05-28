"use client";

import { Search, Briefcase, Flag, FileText, DoorClosed } from 'lucide-react';

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
                    Three operational realities converged to make SuperSchool both urgent and necessary:
                </p>


                {/* Infographic - Carbon Copy of the Zig-Zag Layout */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-16 relative mt-10 lg:mt-15">

                    {/* Card 1 */}
                    <div
                        className="relative w-full lg:w-[500px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#60c6b1' }}
                    >
                        <div className="flex justify-center mb-6">
                            <Search className="w-10 h-10" style={{ color: '#60c6b1' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Student Progress Was Invisible Between Shifts</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Staff routinely discovered mid-session that critical updates about a student's behavioral goals or health conditions were not communicated across shift changes. A 10-second check in the app would have prevented hours of misaligned instruction and avoidable incidents.
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
                        className="relative w-full lg:w-[500px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#90c7e5' }}
                    >
                        <div className="flex justify-center mb-6">
                            <FileText className="w-10 h-10" style={{ color: '#90c7e5' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Manual Multi-Source Documentation Was Creating Compliance Risks</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Staff relied on paper forms across binders - each with different formats and update schedules. Accuracy depended entirely on individual knowledge. For a life-critical care decision, that was not acceptable under IDEA compliance standards.
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
                        className="relative w-full lg:w-[500px] bg-white border-[3px] rounded-[40px] p-8 py-12 text-center shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.08)] z-10"
                        style={{ borderColor: '#ff9900' }}
                    >
                        <div className="flex justify-center mb-6">
                            <DoorClosed className="w-10 h-10" style={{ color: '#ff9900' }} />
                        </div>
                        <h4 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-4">Parents Had No Real-Time Window Into Their Child's Day</h4>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            The existing system could coordinate internal scheduling but could not answer the foundational question that triggered the whole project. Parents needed live visibility into attendance, progress notes, media uploads, and behavioral records - all in one place.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

