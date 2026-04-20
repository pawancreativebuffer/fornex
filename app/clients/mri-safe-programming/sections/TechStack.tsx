"use client";

import React from 'react';
import {
    Smartphone,
    Server,
    ShieldCheck,
    Zap,
} from 'lucide-react';

const techData = [
    {
        category: "Frontend / Mobile",
        icon: <Smartphone className="w-6 h-6" />,
        color: "#60C6B1",
        lightColor: "rgba(96, 198, 177, 0.1)",
        headers: ["Layer", "Technology", "Why"],
        rows: [
            ["iOS App", "React Native", "Cross-platform consistency, shared codebase with Android, faster iteration cycles"],
            ["Android App", "React Native", "Single codebase delivering consistent clinical UX across both platforms simultaneously"],
            ["State Management", "Redux-style architecture", "Predictable state handling for multi-step device entry and conditionality logic flows"]
        ]
    },
    {
        category: "Backend & Infrastructure",
        icon: <Server className="w-6 h-6" />,
        color: "#90c7e5",
        lightColor: "rgba(144, 199, 229, 0.1)",
        headers: ["Layer", "Technology", "Why"],
        rows: [
            ["Backend API", ".NET (ASP.NET)", "Enterprise-grade, type-safe backend with robust data validation for clinical logic"],
            ["Database", "MS SQL Server", "Structured relational database ideal for complex device dataset queries and conditionality rule mapping"],
            ["Server", "Windows Server", "Consistent with existing Smart-Praxis infrastructure; enterprise hosting reliability"],
            ["AI Layer", "Groq AI", "High-speed AI inference; foundation for Phase 3 intelligent chatbot assistant"],
            ["OCR Engine", "Camera OCR Integration", "Automated device card scanning — extracts model numbers and lead info without manual input"],
            ["PDF Generator", "Structured Report Engine", "Clinical-grade PDF generation with patient data, device details, result, and timestamp"]
        ]
    },
    {
        category: "Device Data - Conditionality Rules Engine",
        icon: <ShieldCheck className="w-6 h-6" />,
        color: "#ff9900",
        lightColor: "rgba(255, 153, 0, 0.1)",
        headers: ["Manufacturer", "Coverage", "Status"],
        rows: [
            ["Medtronic", "Pacemakers, ICDs, loop recorders, leadless devices", "Encoded · Phase 1"],
            ["Abbott / St. Jude", "Pacemakers, ICDs, cardiac monitors", "Encoded · Phase 1"],
            ["Boston Scientific", "Pacemakers, ICDs, CRT devices", "Encoded · Phase 1"],
            ["Biotronik", "Pacemakers, ICDs, loop recorders", "Encoded · Phase 1"],
        ]
    },
];

export default function TechStack() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden bg-[#f7fbfe] mt-10 lg:mt-15">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#60C6B1]/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#90c7e5]/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Technology Stack</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-7 max-w-6xl">
                        Enterprise-Grade Clinical Technology <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Built for Mobile-First Deployment</span>
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed max-w-3xl">
                        A stack selected for OCR accuracy, offline capability, structured data integrity, and logic engine performance the non-negotiables for clinical environments.

                    </p>
                </div>


                {/* Content Grid */}
                <div className="w-full flex flex-col gap-5">
                    {techData.map((section, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] group"
                        >
                            {/* Section Header */}
                            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-80/50">
                                <div className="flex items-center gap-5">
                                    <div
                                        className="w-12 h-12 rounded-[12px] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundColor: section.color, color: '#fff' }}
                                    >
                                        {section.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#2D2D2D] leading-[1.2]">
                                        {section.category}
                                    </h3>
                                </div>
                                <div className="hidden lg:block">
                                    <div className="text-sm font-medium uppercase tracking-[0.1em] text-slate-400">Section 0{idx + 1}</div>
                                </div>
                            </div>

                            {/* Section Content */}
                            <div className="p-5 overflow-x-auto">
                                {/* Desktop Table View */}
                                <table className="w-full text-left border-collapse hidden md:table">
                                    <thead>
                                        <tr className="bg-[#1a2b3c]">
                                            {section.headers.map((header, hIdx) => (
                                                <th
                                                    key={hIdx}
                                                    className="p-3 px-4 text-[14px] font-medium uppercase text-white first:rounded-l-[7px] last:rounded-r-[7px]"
                                                >
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {section.rows.map((row, rIdx) => (
                                            <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors duration-200">
                                                {row.map((cell, cIdx) => (
                                                    <td
                                                        key={cIdx}
                                                        className={`p-2 px-4 text-base ${cIdx === 0 ? 'font-medium text-[#1a2b3c] w-1/4' : cIdx === 1 ? 'text-gray-500 font-regular leading-relaxed w-1/4' : 'text-gray-500 font-regular leading-relaxed'}`}
                                                    >
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Mobile List View */}
                                <div className="md:hidden divide-y divide-slate-100">
                                    {section.rows.map((row, rIdx) => (
                                        <div key={rIdx} className="py-5 space-y-5">
                                            {row.map((cell, cIdx) => (
                                                <div key={cIdx}>
                                                    <span className="text-[12px] font-semibold uppercase text-gray-400 block mb-1">
                                                        {section.headers[cIdx]}
                                                    </span>
                                                    <p className={`text-base ${cIdx === 0 ? 'font-medium text-[#1a2b3c]' : cIdx === 1 ? 'text-gray-500 font-regular leading-relaxed' : 'text-gray-500 font-regular leading-relaxed'}`}>
                                                        {cell}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
