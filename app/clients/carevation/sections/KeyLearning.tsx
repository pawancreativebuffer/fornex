"use client";

import React from 'react';
import {
    Users,
    Activity,
    HeartPulse,
    FileText,
    CheckCircle2,
} from 'lucide-react';

const processData = [
    {
        title: "Founder market fit is a competitive moat no research can replicate.",
        icon: <Users className="w-10 h-10" />,
        color: "#60C6B1",
        before: "Adrian's decade of lived caregiving experience provided product intuition that would have taken years of user research to approximate. The best digital health products are built by people who've experienced the gap themselves - and who bring a technical partner who can execute on that vision with precision.",
    },
    {
        title: "Multi generational UX demands accessibility discipline from the very first wireframe.",
        icon: <Activity className="w-10 h-10" />,
        color: "#90c7e5",
        before: "Carevation's users range from 30-something professionals to 70-something retirees. Designing for this range means eliminating all unnecessary friction so the platform's value is obvious within the first two minutes of use, regardless of technical familiarity.",
    },
    {
        title: "Community first building creates a warmer, faster product launch.",
        icon: <HeartPulse className="w-10 h-10" />,
        color: "#ff9900",
        before: "The blog and newsletter strategy built an engaged, mission-aligned audience before the app launched. Early access sign-ups came from people who already believed in the mission - not cold conversions needing convincing.",
    },
    {
        title: "In consumer health, security is brand value not just a technical checkbox.",
        icon: <FileText className="w-10 h-10" />,
        color: "#E3ACC8",
        before: "Caregivers are handling sensitive information about their families. Positioning data ethics and the no-data-selling commitment as core brand values - not just privacy policy footnotes - drove trust in ways that feature lists alone never could.",
    },
    {
        title: "Scope discipline in MVP definition is a competitive advantage.",
        icon: <CheckCircle2 className="w-10 h-10" />,
        color: "#c66060",
        before: "The caregiving problem space is enormous. Building a focused, high-quality platform for the five highest-impact use cases rather than a sprawling one that does twenty things adequately - is what created the product quality beta users immediately noticed.",
    },
    {
        title: "The wellness feature was the biggest insight.",
        icon: <Activity className="w-10 h-10" />,
        color: "#60C6B1",
        before: "Every competitor ignored caregiver emotional wellbeing. Building mood tracking and self-care support into the same workflow as appointment management wasn't just a differentiator - it told caregivers that this platform was built by someone who truly understood what caregiving feels like.",
    }
];

export default function KeyLearnings() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60C6B1]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#90c7e5]/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-15">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Key Learnings</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-5xl">
                        What Building Carevation Taught the <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent"> ForNex Health</span> Team
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-24">
                    {/* Left Side: Interactive Diagnostic Hub */}
                    <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[540px] lg:h-[540px] flex-shrink-0 scale-90 sm:scale-100 mb-12 lg:mb-0">

                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Outer Scan Ring (Slow Rotation) */}
                            <div className="absolute w-[92%] h-[92%] animate-[spin_20s_linear_infinite] opacity-20">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <circle cx="50" cy="50" r="48" fill="none" stroke="#2D2D2D" strokeWidth="0.2" strokeDasharray="1 3" />
                                    {/* Medical tick marks */}
                                    {[...Array(36)].map((_, i) => (
                                        <line
                                            key={i}
                                            x1="50" y1="2" x2="50" y2="5"
                                            stroke="#2D2D2D" strokeWidth="0.5"
                                            transform={`rotate(${i * 10} 50 50)`}
                                        />
                                    ))}
                                </svg>
                            </div>

                            {/* Main Diagnostic Scanner Frame */}
                            <div
                                className="absolute w-[78%] h-[78%] transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
                                style={{ transform: `rotate(${activeIndex * 60}deg)` }}
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,0,0,0.05)]">
                                    <defs>
                                        <linearGradient id="scannerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#1A1A1A" />
                                            <stop offset="100%" stopColor="#333333" />
                                        </linearGradient>
                                        <mask id="ringMask">
                                            <circle cx="50" cy="50" r="48" fill="white" />
                                            <circle cx="50" cy="50" r="38" fill="black" />
                                        </mask>
                                    </defs>

                                    {/* Main Scanner Ring (Dark Theme) */}
                                    <circle
                                        cx="50" cy="50" r="44"
                                        fill="none"
                                        stroke="url(#scannerGradient)"
                                        strokeWidth="8"
                                        mask="url(#ringMask)"
                                    />

                                    {/* Corrected 6 Scan Markers (Synced with Items) */}
                                    <g>
                                        {processData.map((item, index) => {
                                            const angle = index * 60 - 90;
                                            const rx = 50 + 44 * Math.cos((angle * Math.PI) / 180);
                                            const ry = 50 + 44 * Math.sin((angle * Math.PI) / 180);
                                            return (
                                                <circle
                                                    key={index}
                                                    cx={rx} cy={ry} r="1.5"
                                                    fill={item.color}
                                                />
                                            );
                                        })}
                                    </g>

                                    {/* Inner medical grid */}
                                    <circle cx="50" cy="50" r="32" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="0.5 2" className="opacity-30" />
                                    <line x1="50" y1="18" x2="50" y2="82" stroke="white" strokeWidth="0.1" className="opacity-20" />
                                    <line x1="18" y1="50" x2="82" y2="50" stroke="white" strokeWidth="0.1" className="opacity-20" />
                                </svg>
                            </div>

                            {/* Strategic Target Marker (The Arrow Replacement) */}
                            <div
                                className="absolute w-[45%] h-[45%] flex items-center justify-center transition-all duration-[800ms] cubic-bezier(0.34, 1.56, 0.64, 1) z-10"
                                style={{ transform: `rotate(${activeIndex * 60}deg)` }}
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* The Scan Beam */}
                                    <div
                                        className="absolute top-0 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-current to-current transition-colors duration-500"
                                        style={{ color: processData[activeIndex].color }}
                                    >
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full blur-md opacity-50" style={{ backgroundColor: 'currentColor' }} />
                                    </div>

                                    {/* Central Medical Core (EKG Monitor Style) */}
                                    <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center overflow-hidden">
                                        {/* Pulsating Background */}
                                        <div
                                            className="absolute inset-0 opacity-10 transition-colors duration-500"
                                            style={{ backgroundColor: processData[activeIndex].color }}
                                        />

                                        {/* Central Medical Icon */}
                                        <div
                                            className="relative transition-colors duration-500"
                                            style={{ color: processData[activeIndex].color }}
                                        >
                                            <HeartPulse className="w-10 h-10 lg:w-14 lg:h-14 drop-shadow-sm" strokeWidth={1.5} />
                                        </div>

                                        {/* Scanning Line overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#90c7e5]/10 to-transparent h-4 w-full animate-[scan_2s_linear_infinite]" />
                                    </div>


                                    {/* High-tech Cursor Head */}
                                    <div className="absolute top-0 -translate-y-4 px-2 py-0.5 lg:px-3 lg:py-1 bg-white border border-gray-100 shadow-xl rounded-lg flex items-center gap-1 lg:gap-2">
                                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full animate-ping" style={{ backgroundColor: processData[activeIndex].color }} />
                                        <span className="text-[8px] lg:text-[10px] font-black tracking-tighter text-gray-800 uppercase">Targeting</span>
                                    </div>
                                </div>
                            </div>

                            {/* Point Buttons */}
                            {processData.map((item, index) => {
                                const angle = index * 60 - 90;
                                const radius = 45;
                                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                                const isActive = activeIndex === index;

                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 rounded-full transition-all duration-500 z-20 group cursor-pointer
                                            ${isActive
                                                ? 'bg-white scale-110 shadow-2xl'
                                                : 'bg-[#F9FAFB] hover:bg-white hover:scale-105 border border-gray-100 shadow-sm'
                                            }`}
                                        style={{
                                            left: `${x}%`, top: `${y}%`,
                                            transform: 'translate(-50%, -50%)',
                                            boxShadow: isActive ? `0 0 30px ${item.color}33` : ''
                                        }}
                                    >
                                        <span className={`text-base sm:text-xl lg:text-2xl font-black transition-colors duration-300
                                            ${isActive ? 'text-[#1A1A1A]' : 'text-gray-400 group-hover:text-gray-700'}
                                        `}>
                                            0{index + 1}
                                        </span>
                                        {/* Minimal Pointer */}
                                        {isActive && (
                                            <div className="absolute -inset-1 lg:-inset-2 border-2 rounded-full animate-ping opacity-20" style={{ borderColor: item.color }} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side: Narrative Content */}
                    <div className="flex-1 max-w-2xl min-h-[460px] flex flex-col justify-center text-center lg:text-left">
                        <div
                            key={activeIndex}
                            className="transition-all duration-700 animate-[fadeIn_0.6s_ease-out,slideInRight_0.6s_ease-out]"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
                                <div
                                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-[15px] flex items-center justify-center shadow-inner transition-transform duration-700 hover:rotate-[15deg]"
                                    style={{ backgroundColor: `${processData[activeIndex].color}15`, color: processData[activeIndex].color }}
                                >
                                    {processData[activeIndex].icon}
                                </div>
                                <div>
                                    <div className="text-[14px] font-black uppercase tracking-[.1em] opacity-40 mb-2">Product Insights</div>
                                    <div className="h-1 w-24 rounded-full bg-gray-100 overflow-hidden mx-auto lg:mx-0">
                                        <div
                                            className="h-full transition-all duration-1000 ease-out"
                                            style={{ width: `${(activeIndex + 1) * 16.6}%`, backgroundColor: processData[activeIndex].color }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-4xl font-bold leading-tight mb-8">
                                {processData[activeIndex].title}
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed">
                                "{processData[activeIndex].before}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Keyframes for Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideInRight { from { transform: translateX(40px); } to { transform: translateX(0); } }
                @keyframes scan { 
                    0% { transform: translateY(-100%); opacity: 0; } 
                    50% { opacity: 0.5; } 
                    100% { transform: translateY(100%); opacity: 0; } 
                }
            `}} />
        </section>
    );
}


