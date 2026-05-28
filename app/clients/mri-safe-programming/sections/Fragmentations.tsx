"use client";

import { CloudBackup, CircleX, MonitorSmartphone, FileText, Component } from "lucide-react";

const consequences = [
    {
        icon: CloudBackup,
        id: "01",
        title: "Instant MRI Safety Answers",
        description: "Get accurate color coded MRI safety results in under 10 seconds from any device",
        color: "#60C6B1"
    },
    {
        icon: CircleX,
        id: "02",
        title: "Zero Manual Lookup Errors",
        description: "Remove human error by combining all manufacturer rules into one logic system",
        color: "#90c7e5"
    },
    {
        icon: MonitorSmartphone,
        id: "03",
        title: "OCR Based Device Entry",
        description: "Scan device cards to auto fill data and avoid manual input errors",
        color: "#ff9900"
    },
    {
        icon: FileText,
        id: "04",
        title: "Automated PDF Reports",
        description: "Create structured reports for every check that can be shared and stored easily",
        color: "#E3ACC8"
    },
    {
        icon: Component,
        id: "05",
        title: "Scalable System Design",
        description: "Built to expand into advanced features without rebuilding the core system",
        color: "#c66060"
    }
]

export default function Fragmentation() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">


                <div className="flex flex-col items-center text-center mb-5">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Objectives & Goals</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[900px] mx-auto">
                        Five Clear Outcomes. <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">One Clinical Tool.</span>
                    </h2>
                </div>


                {/* Desktop Horizontal Timeline */}
                <div className="hidden lg:flex items-center justify-between relative mt-28 mb-22 h-[340px]">
                    {/* Connecting line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0">
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                    </div>

                    {consequences.map((item, index) => {
                        const Icon = item.icon;
                        const isTop = index % 2 === 0;

                        return (
                            <div key={index} className="flex flex-col items-center justify-center relative z-10 w-[20%] h-full group">
                                {/* Center Node (Pill) - Locked to Horizontal Center */}
                                <div className="absolute top-1/2 -translate-y-1/2 z-20">
                                    <div
                                        className="text-white font-[700] px-5 py-2 rounded-full text-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        {item.id}
                                    </div>
                                </div>

                                {/* Bracket Curve (SVG) */}
                                <div className={`absolute left-1/2 -translate-x-1/2 w-48 h-20 z-0 transition-opacity duration-500 ${isTop ? 'bottom-1/2 mb-6' : 'top-1/2 mt-6'}`}>
                                    <svg className={`w-full h-full ${isTop ? 'rotate-180' : ''}`} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 0C10 40 90 40 100 80C110 40 190 40 190 0"
                                            stroke={item.color}
                                            strokeWidth="2.5"
                                            strokeOpacity="0.4"
                                            className="group-hover:stroke-opacity-100 transition-all duration-500"
                                        />
                                    </svg>
                                </div>

                                {isTop ? (
                                    <>
                                        {/* Icon (Top) */}
                                        <div className="absolute bottom-[calc(50%+115px)] left-1/2 -translate-x-1/2">
                                            <div
                                                className="w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-500 relative z-10 group-hover:scale-110"
                                                style={{
                                                    borderColor: item.color,
                                                    color: item.color,
                                                    boxShadow: `0 10px 30px ${item.color}20`
                                                }}
                                            >
                                                <Icon size={32} />
                                            </div>
                                        </div>

                                        {/* Content (Bottom) */}
                                        <div className="absolute top-[calc(50%+45px)] left-1/2 -translate-x-1/2 text-center w-[220px] group-hover:translate-y-2 transition-transform duration-500">
                                            <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-3">{item.title}</h3>
                                            <p className="text-gray-500 text-base leading-relaxed tracking-tight">{item.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Content (Top) */}
                                        <div className="absolute bottom-[calc(50%+45px)] left-1/2 -translate-x-1/2 text-center w-[220px] group-hover:-translate-y-2 transition-transform duration-500">
                                            <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-3">{item.title}</h3>
                                            <p className="text-gray-500 text-base leading-relaxed tracking-tight">{item.description}</p>
                                        </div>

                                        {/* Icon (Bottom) */}
                                        <div className="absolute top-[calc(50%+115px)] left-1/2 -translate-x-1/2">
                                            <div
                                                className="w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-500 relative z-10 group-hover:scale-110"
                                                style={{
                                                    borderColor: item.color,
                                                    color: item.color,
                                                    boxShadow: `0 10px 30px ${item.color}15`
                                                }}
                                            >
                                                <Icon size={32} />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>


                {/* Mobile View: Vertical Timeline */}
                <div className="lg:hidden space-y-0 mt-15">
                    {consequences.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex gap-6 relative group pb-7">
                                {index !== consequences.length - 1 && (
                                    <div className="absolute left-8 top-16 bottom-0 w-[2px] bg-slate-100"></div>
                                )}
                                <div
                                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border flex items-center justify-center transition-all duration-300 z-10"
                                    style={{ borderColor: `${item.color}40`, color: item.color }}
                                >
                                    <Icon size={28} />
                                </div>
                                <div className="pt-2">
                                    <span className="font-[600] text-xs block mb-1 uppercase mb-2" style={{ color: item.color }}>Consequence {item.id}</span>
                                    <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed tracking-tight">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}



