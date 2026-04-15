"use client";

import React, { useState } from 'react';
import {
    Book,
    Table,
    Calendar,
    MessageSquare,
    FileText,
    Layers,
    ChevronRight
} from 'lucide-react';

const problems = [
    {
        id: "notebooks",
        title: "Paper notebooks & binders",
        description: "Physical records that couldn't be shared, were easily lost, and were inaccessible in emergencies.",
        icon: Book,
        accent: "#F87171"
    },
    {
        id: "excel",
        title: "Excel spreadsheets",
        description: "Manual, non-collaborative, and had no alerts or reminders.",
        icon: Table,
        accent: "#60C6B1"
    },
    {
        id: "calendar",
        title: "Consumer calendar apps",
        description: "No medical context and no medication tracking.",
        icon: Calendar,
        accent: "#90c7e5"
    },
    {
        id: "texts",
        title: "Group text threads",
        description: "Chaotic, disorganized, and impossible to search through.",
        icon: MessageSquare,
        accent: "#F87171"
    },
    {
        id: "notes",
        title: "Generic note-taking apps",
        description: "No structure for care data and no sharing permissions.",
        icon: FileText,
        accent: "#60C6B1"
    },
    {
        id: "apps",
        title: "Multiple disconnected apps",
        description: "A separate app for reminders, notes, and documents — with zero integration between them.",
        icon: Layers,
        accent: "#90c7e5"
    }
];

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
                            What caregivers were actually using before Carevation:
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
                    </div>

                    {/* Right Column: Main Content + Dynamic Info */}
                    <div className="lg:col-span-12 xl:col-span-8 flex flex-col justify-start">
                        {/* Persistent Main Content */}
                        <div className="mt-12 lg:mt-0 lg:mb-12 order-1 lg:order-0">
                            <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] mb-5">
                                Millions of caregivers rely on <span className="text-[#60C6B1]">disconnected tools</span> not built for care.
                            </h1>
                            <p className="text-white/70 text-base leading-relaxed">
                                Family caregiving is one of the most demanding and emotionally complex responsibilities a person can take on — yet the tools available to caregivers have always been generic consumer apps never designed for coordinating medical care.
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

                            {/* New Bottom Section: The Impact Quote */}
                            <div className="mt-6 p-5 rounded-[20px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
                                <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10">
                                    <div className="p-3 rounded-[10px] bg-[#60C6B1]/10 text-[#60C6B1]">
                                        <MessageSquare size={24} />
                                    </div>
                                    <p className="text-white/80 text-[16px] font-medium leading-relaxed italic text-center lg:text-left uppercase">
                                        "The result is a fragmented, stressful experience stitched together from tools that were never meant to work together."
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