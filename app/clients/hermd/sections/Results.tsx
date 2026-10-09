"use client";

import { Database, CalendarClock, ShieldCheck } from "lucide-react";

export default function Results() {
    const listData = [
        "Approximately 25,000 patient profiles and 350GB of source data processed.",
        "Structured EHR data, unstructured clinical documentation and scanned documents all addressed within a single pipeline.",
        "Post-processing verification reported accuracy of 99% or higher.",
        "Referential integrity maintained across tables, supporting cohort building and longitudinal analysis on the de-identified data.",
        "De-identified data restructured and loaded into the client's analytics environment.",
        "Validation covering both data integrity and de-identification completed before release."
    ];

    const potential = [
        {
            title: "Unified Handling",
            desc: "Handling structured tables and free-text notes as one problem rather than two, so a patient's identifiers were treated consistently wherever they appeared.",
            color: "#60C6B1",
            icon: Database,
            num: "01"
        },
        {
            title: "Upfront Decisions",
            desc: "Deciding date and identifier handling up front, in a way that protected privacy but kept time-series relationships intact.",
            color: "#90c7e5",
            icon: CalendarClock,
            num: "02"
        },
        {
            title: "Rigorous Validation",
            desc: "Validating output through both automated checks and manual review, since neither on its own catches what the other misses.",
            color: "#ff9900",
            icon: ShieldCheck,
            num: "03"
        }
    ];

    return (
        <section className="relative w-full overflow-hidden py-16 lg:py-24 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col justify-center text-center gap-5">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)]" />
                        <span className="uppercase tracking-wider">Project Outcome</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-3xl sm:text-4xl lg:text-5xl text-[#fff] leading-[1.2] max-w-4xl m-auto">
                        Delivered Data Ready For <span className="text-[#60C6B1]">Analytics & Research</span>
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed max-w-4xl m-auto mt-2">
                        The client received a de-identified and restructured dataset covering approximately 25,000 patient records, prepared for downstream analytics and research while retaining the relationships and structure needed to work with longitudinal healthcare data.
                    </p>
                </div>

                {/* Outcome Reporting Section */}
                <div className="my-16">
                    <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 lg:p-12 transition-all duration-500 hover:border-[#60C6B1]/30 hover:bg-white/[0.05]">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#60C6B1]" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">What We Delivered</h2>

                        <div className="space-y-4">
                            {listData.map((text, index) => (
                                <div key={index} className="flex items-start gap-5 group/item">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-[#60C6B1]/50 flex items-center justify-center bg-[#60C6B1]/10 text-[#60C6B1] transition-transform duration-300 group-hover/item:scale-125">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <p className="text-white/80 text-[16px] leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* What the approach depended on */}
                <div className="text-center mb-16 mt-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">What The Approach Depended On</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Three things mattered more than the tooling to ensure accuracy and compliance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pb-10">
                    {potential.map((card, index) => (
                        <div key={index} className="relative flex flex-col items-center group">
                            {/* Card Content */}
                            <div className="w-full h-full bg-white/[0.03] border-2 rounded-[2rem] pt-12 pb-24 px-8 text-center transition-all duration-500 group-hover:bg-white/[0.06] group-hover:-translate-y-3" style={{ borderColor: `${card.color}40` }}>
                                <div className="mb-8 inline-flex p-5 rounded-full bg-white/[0.05] group-hover:scale-110 transition-transform duration-500 shadow-xl" style={{ color: card.color, border: `1px solid ${card.color}30` }}>
                                    <card.icon size={36} />
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute -left-4 top-1/2 w-8 h-[2px] opacity-30" style={{ backgroundColor: card.color }}></div>
                                    <div className="absolute -right-4 top-1/2 w-8 h-[2px] opacity-30" style={{ backgroundColor: card.color }}></div>
                                    <h3 className="text-[20px] font-bold uppercase tracking-wider" style={{ color: card.color }}>{card.title}</h3>
                                </div>
                                <p className="text-white/70 text-[15px] leading-relaxed group-hover:text-white/90 transition-colors duration-300">{card.desc}</p>
                            </div>

                            {/* Enhanced Decorative Ribbon/Number */}
                            <div className="absolute -bottom-10 flex items-center justify-center w-full">
                                <div className="relative w-28 h-28 flex items-center justify-center">
                                    {/* The X-Shape Ribbon with "Folded" look */}
                                    <div className="absolute w-32 h-10 rotate-[25deg] rounded-sm shadow-2xl transition-transform duration-500 group-hover:rotate-[35deg]" style={{ backgroundColor: card.color }}></div>
                                    <div className="absolute w-32 h-10 -rotate-[25deg] rounded-sm shadow-2xl transition-transform duration-500 group-hover:-rotate-[35deg]" style={{ backgroundColor: card.color, filter: 'brightness(0.8)' }}></div>

                                    {/* Inner Circle for Number */}
                                    <div className="relative w-16 h-16 rounded-full bg-[#1a2b3c] border-2 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110" style={{ borderColor: card.color }}>
                                        <span className="text-white font-black text-2xl tracking-tighter">
                                            {card.num}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
