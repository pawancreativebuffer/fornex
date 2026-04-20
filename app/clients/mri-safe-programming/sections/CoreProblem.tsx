"use client";

import React, { useState } from 'react';
import {
    MessageSquare,
    ChevronRight,
    Globe,
    Phone,
    Folder,
    X
} from 'lucide-react';

const problems = [
    {
        id: "Manufacturer",
        title: "Manufacturer Websites",
        description: "Four separate portals, different formats, no cross-reference capability",
        icon: Globe,
        accent: "#F87171"
    },
    {
        id: "Device",
        title: "Device Rep Phone Calls",
        description: "Slow, unavailable after hours, no documentation generated",
        icon: Phone,
        accent: "#60C6B1"
    },
    {
        id: "Printed",
        title: "Printed Reference Binders",
        description: "Quickly outdated, not searchable, inconsistently updated",
        icon: Folder,
        accent: "#90c7e5"
    }
];


const realCons = [
    "Last-minute scan cancellations after patient prep - wasted clinical time every single day",
    "Incomplete audit trails - no formal documentation of compatibility decisions",
    "Knowledge-dependent accuracy - no standardized logic across different clinicians",
    "Cross-manufacturer combinations handled inconsistently with no defined protocol",
    "Delayed diagnosis for patients genuinely needing MRI imaging"
]

export default function CoreProblem() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProblem = problems[activeIndex];

    return (
        <section className="relative w-full py-10 lg:py-15 bg-[#1a2b3c] overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Subtitles / Selectable Tiles */}
                    <div className="lg:col-span-12 xl:col-span-4">
                        <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-5">
                            <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Core Problem</span>
                        </div>
                        <h3 className="text-white text-[22px] lg:text-[24px] font-bold mb-2">
                            The Old Reality
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed">
                            What clinicians were actually using before MRI Logic:
                        </p>

                        <div className="flex flex-col gap-3 mt-5">
                            {problems.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = activeIndex === index;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`group relative flex items-center justify-between p-2 cursor-pointer rounded-2xl transition-all duration-300 text-left border-2 ${isActive
                                            ? 'bg-white/10 border-[#60C6B1] shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
                                            : 'bg-white/5 border-transparent hover:bg-white/8 hover:border-[#60C6B1]/30'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-[#60C6B1] text-white' : 'bg-white/10 text-white/50 group-hover:bg-white/20'
                                                }`}>
                                                <Icon size={24} />
                                            </div>
                                            <span className={`text-[16px] font-medium transition-colors ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                                                }`}>
                                                {item.title}
                                            </span>
                                        </div>

                                        {/* Reference to Image 2 arrow style */}
                                        {isActive && (
                                            <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden xl:block">
                                                <div className="w-6 h-6 bg-[#60C6B1] rotate-45 transform" />
                                            </div>
                                        )}

                                        {!isActive && (
                                            <ChevronRight className="text-white/20 group-hover:text-[#60C6B1] transition-colors" size={20} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>


                        <h3 className="text-white text-[22px] lg:text-[24px] font-bold mb-2 mt-8">
                            The real consequences of this fragmentation:
                        </h3>
                        <div className="flex flex-col gap-4 mt-6">
                            {realCons.map((text, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-[#F87171] rounded-full shadow-[0_2px_10px_rgba(239,68,68,0.3)] transition-transform group-hover:scale-110">
                                        <X size={14} className="text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-white/70 text-base leading-relaxed group-hover:text-white transition-colors">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Main Content + Dynamic Info */}
                    <div className="lg:col-span-12 xl:col-span-8 flex flex-col justify-start">
                        {/* Persistent Main Content */}
                        <div className="mt-12 lg:mt-0 lg:mb-12 order-1 lg:order-0">
                            <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] mb-5">
                                MRI Safety Checks Were Slow, Manual, <span className="text-[#60C6B1]">and Clinically Fragmented</span>
                            </h1>
                            <p className="text-white/70 text-base leading-relaxed">
                                Before MRI Logic, there was no single tool to verify cardiac device MRI compatibility at the point of care. The consequences were not minor inconveniences they were clinical risks and significant operational waste happening daily across every MRI center in the country.
                            </p>
                        </div>

                        {/* Dynamic Content: The "Info Change" area */}
                        <div className="relative flex flex-col">
                            {/* Animated Container */}
                            <div
                                key={activeProblem.id}
                                className="bg-white/5 border border-white/10 p-6 rounded-[2rem] relative overflow-hidden flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-10 flex-grow transition-all duration-500"
                                style={{
                                    animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                                }}
                            >
                                {/* Large background icon motif */}
                                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none transform rotate-12 scale-150">
                                    <activeProblem.icon size={300} style={{ color: activeProblem.accent }} />
                                </div>

                                {/* Icon Container (Left) */}
                                <div
                                    className="flex-shrink-0 p-4 rounded-[20px] shadow-2xl relative z-10"
                                    style={{ backgroundColor: `${activeProblem.accent}20`, border: `1px solid ${activeProblem.accent}40` }}
                                >
                                    <activeProblem.icon size={50} style={{ color: activeProblem.accent }} />
                                </div>

                                {/* Text Content (Right) */}
                                <div className="flex flex-col relative z-10">
                                    <h1 className="text-shadow-lg/20 font-[700] text-2xl lg:text-3xl text-[#fff] leading-[1.1] mb-5">
                                        {activeProblem.title}
                                    </h1>

                                    <p className="text-white/70 text-base leading-relaxed">
                                        {activeProblem.description}
                                    </p>
                                </div>
                            </div>

                        </div>


                        <div className='mt-8'>
                            <h1 className="text-shadow-lg/20 font-[700] text-2xl lg:text-3xl text-[#fff] leading-[1.1] mb-5">
                                MRI Compatibility Check: <span className="text-[#60C6B1]">Before vs. After</span> MRI Logic
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
                                {/* Before Section */}
                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F87171]" />
                                    <span className="text-[#F87171] font-bold text-[18px] mb-4 block uppercase font-mono">
                                        Before
                                    </span>
                                    <p className="text-white/70 text-base leading-relaxed">
                                        Manual website lookups across four manufacturer portals. 20-45 minutes per patient. No structured documentation. Scans cancelled after patient prep. Accuracy entirely dependent on individual knowledge. Cross-manufacturer cases handled with no defined process.
                                    </p>
                                </div>

                                {/* After Section */}
                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#60C6B1]" />
                                    <span className="text-[#60C6B1] font-bold text-[18px] mb-4 block uppercase font-mono">
                                        After
                                    </span>
                                    <p className="text-white/70 text-base leading-relaxed">
                                        Single OCR scan or manual entry in the app. Color-coded result in under 10 seconds. Instant PDF report generated automatically. Compatibility confirmed before scheduling begins. Standardized logic ensures consistent decisions regardless of who performs the check.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px) scale(0.98);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}