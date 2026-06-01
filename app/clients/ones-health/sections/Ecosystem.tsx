"use client";

import {
    HeartPulse,
    Smile,
    UserCheck,
    Server,
    BarChart2
} from "lucide-react";

export default function Ecosystem() {
    const data = [
        {
            title: "Faster health assessments",
            icon: HeartPulse
        },
        {
            title: "Better user engagement",
            icon: Smile
        },
        {
            title: "Personalized wellness planning",
            icon: UserCheck
        },
        {
            title: "Scalable operations",
            icon: Server
        },
        {
            title: "Data-driven decision making",
            icon: BarChart2
        }
    ];

    const colors = [
        "from-[#60c6b1] to-[#90c7e5]",
        "from-[#90c7e5] to-[#90c7e5]",
        "from-[#ff9900] to-[#ff9900]",
        "from-[#E3ACC8] to-[#E3ACC8]",
        "from-[#c66060] to-[#c66060]"
    ];

    return (
        <section className="relative w-full">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-white rounded-[40px] p-6 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center gap-8 overflow-hidden relative">

                    {/* HEADER */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Results</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-7">
                            A modern platform for <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">
                                proactive healthcare
                            </span>
                        </h2>
                    </div>

                    {/* CARDS */}
                    <div className="w-full flex flex-col items-center mt-5 mb-10">
                        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-10">

                            {data.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`relative w-full p-5 lg:p-0 md:w-40 md:h-40 lg:w-48 lg:-ml-5 lg:h-48 lg:rotate-45 bg-gradient-to-br ${colors[index]} rounded-2xl shadow-xl flex items-center justify-center group hover:scale-105 transition-transform duration-300`}
                                    >
                                        {/* Inner content (un-rotate) */}
                                        <div className="lg:-rotate-45 flex flex-col items-center text-center px-4 gap-3">

                                            {/* ICON */}
                                            <Icon className="w-12 h-12 text-white opacity-90" />

                                            {/* TEXT */}
                                            <p className="text-white font-medium text-[18px] leading-snug">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}