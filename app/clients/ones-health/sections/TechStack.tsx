"use client";

import {
    MonitorCheck,
} from 'lucide-react';

const techData = [
    {
        category: "Web App",
        icon: <MonitorCheck className="w-6 h-6" />,
        color: "#60C6B1",
        lightColor: "rgba(96, 198, 177, 0.1)",
        headers: ["Layer", "Technology", "Why"],
        rows: [
            ["Web App", "React js", "Build interactive user interfaces with a rich ecosystem of libraries"],
            ["Backend", "Node.js", "Ensure high performance and scalability for real-time data processing"],
            ["Database", "PostgreSQL", "Ensure data integrity and scalability for complex healthcare workflows"],
            ["Other", "AWS, OpenAI, REST APIs, OAuth, Analytics", "Provides AI-powered insights, secure authentication, seamless integrations, and data-driven analytics to optimize healthcare operations"],
        ]
    },
];

export default function TechStack() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden bg-[#f7fbfe]">
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
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-6xl">
                        Built on a <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Modern Foundation</span>
                    </h2>
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
