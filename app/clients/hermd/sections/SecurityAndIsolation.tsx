"use client";

import { ShieldCheck, Lock, FileKey2, Network, Box, Fingerprint } from "lucide-react";

const securityPoints = [
    {
        title: "Separate Mapping",
        text: "Re-identification mapping stored separately from deliverable data.",
        icon: FileKey2
    },
    {
        title: "Access Boundaries",
        text: "Mapping data and deliverables maintained different access boundaries.",
        icon: Network
    },
    {
        title: "Source Hygiene",
        text: "Controls excluded real identifiers & secrets from shared copies.",
        icon: Lock
    },
    {
        title: "Synthetic Fixtures",
        text: "Test fixtures were completely synthetic to prevent leakage.",
        icon: Fingerprint
    },
    {
        title: "Container Isolation",
        text: "Containerized processing & permissioned storage locations.",
        icon: Box
    }
];

const tableData = [
    {
        category: "Direct identifiers — names, SSNs, contact details",
        treatment: "Removed, or replaced with synthetic values where a populated field was needed for the data to remain usable"
    },
    {
        category: "Record, account and member numbers",
        treatment: "Replaced with stable surrogates from the pseudonym store"
    },
    {
        category: "Dates",
        treatment: "Year only; ages 90 and over aggregated"
    },
    {
        category: "Geographic data",
        treatment: "Generalized to three-digit ZIP, with the population-threshold exception"
    },
    {
        category: "Free text",
        treatment: "Passed to layered detection in Stage 3"
    },
    {
        category: "Clinical content",
        treatment: "Preserved"
    }
];

export default function SecurityAndIsolation() {
    const Icon0 = securityPoints[0].icon;
    const Icon1 = securityPoints[1].icon;
    const Icon2 = securityPoints[2].icon;
    const Icon3 = securityPoints[3].icon;
    const Icon4 = securityPoints[4].icon;

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#0a1526] overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60C6B1]/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-32">
                    <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)] animate-pulse" />
                        <span className="uppercase tracking-wider">Security Architecture</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-white max-w-4xl mx-auto">
                        Security & <span className="text-[#60C6B1]">Isolation</span>
                    </h2>
                </div>

                {/* DIAGRAM SECTION */}
                <div className="relative w-full max-w-[1000px] mx-auto h-[800px] hidden lg:block mb-40 mt-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#0a1526] border-2 border-[#60C6B1] rounded-full z-20 flex items-center justify-center shadow-[0_0_50px_rgba(96,198,177,0.2)]">
                        <ShieldCheck size={56} className="text-[#60C6B1]" />
                    </div>

                    {/* SVG Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <circle cx="50%" cy="50%" r="160" fill="none" stroke="#60C6B1" strokeWidth="1" strokeDasharray="6 6" opacity="0.15" />
                        {/* Lines connecting to cards */}
                        <line x1="50%" y1="50%" x2="calc(50% + 0px)" y2="calc(50% - 280px)" stroke="#60C6B1" strokeWidth="2" opacity="0.3" />
                        <line x1="50%" y1="50%" x2="calc(50% + 330px)" y2="calc(50% - 100px)" stroke="#60C6B1" strokeWidth="2" opacity="0.3" />
                        <line x1="50%" y1="50%" x2="calc(50% + 250px)" y2="calc(50% + 260px)" stroke="#60C6B1" strokeWidth="2" opacity="0.3" />
                        <line x1="50%" y1="50%" x2="calc(50% - 250px)" y2="calc(50% + 260px)" stroke="#60C6B1" strokeWidth="2" opacity="0.3" />
                        <line x1="50%" y1="50%" x2="calc(50% - 330px)" y2="calc(50% - 100px)" stroke="#60C6B1" strokeWidth="2" opacity="0.3" />
                    </svg>

                    {/* 1. Top */}
                    <div className="absolute w-64 bg-[#0a1526] border border-[#60C6B1]/20 p-5 rounded-3xl z-10 text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#60C6B1]/50 transition-colors duration-300" style={{ left: '50%', top: '50%', transform: 'translate(calc(-50% + 0px), calc(-50% - 280px))' }}>
                        <Icon0 className="mx-auto text-[#60C6B1] w-8 h-8 mb-3" />
                        <h4 className="text-white font-bold mb-2">{securityPoints[0].title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{securityPoints[0].text}</p>
                    </div>

                    {/* 2. Right Top */}
                    <div className="absolute w-64 bg-[#0a1526] border border-[#60C6B1]/20 p-5 rounded-3xl z-10 text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#60C6B1]/50 transition-colors duration-300" style={{ left: '50%', top: '50%', transform: 'translate(calc(-50% + 330px), calc(-50% - 100px))' }}>
                        <Icon1 className="mx-auto text-[#60C6B1] w-8 h-8 mb-3" />
                        <h4 className="text-white font-bold mb-2">{securityPoints[1].title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{securityPoints[1].text}</p>
                    </div>

                    {/* 3. Right Bottom */}
                    <div className="absolute w-64 bg-[#0a1526] border border-[#60C6B1]/20 p-5 rounded-3xl z-10 text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#60C6B1]/50 transition-colors duration-300" style={{ left: '50%', top: '50%', transform: 'translate(calc(-50% + 250px), calc(-50% + 260px))' }}>
                        <Icon2 className="mx-auto text-[#60C6B1] w-8 h-8 mb-3" />
                        <h4 className="text-white font-bold mb-2">{securityPoints[2].title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{securityPoints[2].text}</p>
                    </div>

                    {/* 4. Left Bottom */}
                    <div className="absolute w-64 bg-[#0a1526] border border-[#60C6B1]/20 p-5 rounded-3xl z-10 text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#60C6B1]/50 transition-colors duration-300" style={{ left: '50%', top: '50%', transform: 'translate(calc(-50% - 250px), calc(-50% + 260px))' }}>
                        <Icon3 className="mx-auto text-[#60C6B1] w-8 h-8 mb-3" />
                        <h4 className="text-white font-bold mb-2">{securityPoints[3].title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{securityPoints[3].text}</p>
                    </div>

                    {/* 5. Left Top */}
                    <div className="absolute w-64 bg-[#0a1526] border border-[#60C6B1]/20 p-5 rounded-3xl z-10 text-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#60C6B1]/50 transition-colors duration-300" style={{ left: '50%', top: '50%', transform: 'translate(calc(-50% - 330px), calc(-50% - 100px))' }}>
                        <Icon4 className="mx-auto text-[#60C6B1] w-8 h-8 mb-3" />
                        <h4 className="text-white font-bold mb-2">{securityPoints[4].title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{securityPoints[4].text}</p>
                    </div>
                </div>

                {/* Mobile Fallback for Diagram */}
                <div className="lg:hidden flex flex-col gap-6 mb-20">
                    <div className="w-20 h-20 bg-[#0a1526] border-2 border-[#60C6B1] rounded-full mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(96,198,177,0.2)]">
                        <ShieldCheck size={36} className="text-[#60C6B1]" />
                    </div>
                    {securityPoints.map((point, idx) => {
                        const Icon = point.icon;
                        return (
                            <div key={idx} className="bg-white/[0.02] border border-[#60C6B1]/20 p-5 rounded-2xl text-center">
                                <Icon className="mx-auto text-[#60C6B1] w-8 h-8 mb-3" />
                                <h4 className="text-white font-bold mb-2">{point.title}</h4>
                                <p className="text-gray-400 text-sm">{point.text}</p>
                            </div>
                        )
                    })}
                </div>

                {/* TABLE SECTION (Next Line, Full Width or Central) */}
                <div className="max-w-[1000px] mx-auto">
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#60C6B1] to-blue-500" />
                        
                        <div className="mb-10 text-center">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Classification and Treatment Decisions
                            </h3>
                            <p className="text-gray-400 text-[16px] leading-relaxed max-w-3xl mx-auto">
                                Alongside the roster build, every field in the source environment was catalogued and classified, and a treatment was fixed per category before any transformation ran. Misclassification at this point either leaks PHI or destroys clinical data downstream, so the classification was reviewed before processing began.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="p-4 px-6 text-[14px] font-semibold uppercase tracking-wider text-white rounded-tl-2xl w-2/5">
                                            Field Category
                                        </th>
                                        <th className="p-4 px-6 text-[14px] font-semibold uppercase tracking-wider text-white rounded-tr-2xl">
                                            Treatment
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {tableData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/5 transition-colors duration-200">
                                            <td className="p-4 px-6 text-[15px] font-medium text-white/90 align-top">
                                                {row.category}
                                            </td>
                                            <td className="p-4 px-6 text-[15px] text-gray-400 leading-relaxed align-top">
                                                {row.treatment}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
