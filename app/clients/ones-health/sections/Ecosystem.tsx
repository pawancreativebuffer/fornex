"use client";

import {
    User,
    Users,
    Globe,
    Home,
    HeartHandshake
} from "lucide-react";

export default function Ecosystem() {
    const data = [
        {
            title: "Primary Caregivers",
            icon: User
        },
        {
            title: "Long-Distance Caregivers",
            icon: Globe
        },
        {
            title: "Co-Caregiving Family",
            icon: Users
        },
        {
            title: "Sandwich Generation",
            icon: Home
        },
        {
            title: "Casual Helpers",
            icon: HeartHandshake
        }
    ];

    const colors = [
        "from-[#60c6b1] to-[#90c7e5]",
        "from-[#90c7e5] to-[#90c7e5]",
        "from-[#ff9900] to-[#ff9900]",
        "from-[#E3ACC8] to-[#E3ACC8]",
        "from-[#c66060] to-[#c66060]"
    ];

    const integrations = [
        "FElderly care and aging-in-place",
        "Chronic illness coordination (arthritis, diabetes, heart disease)",
        "Post-surgical recovery",
        "Disability and long-term care",
        "Pediatric and special needs caregiving",
        "Non-traditional family care structures"
    ];

    return (
        <section className="relative w-full">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-white rounded-[40px] p-6 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center gap-8 overflow-hidden relative">

                    {/* HEADER */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Organizational Structure - Who Uses It</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-7">
                            Not One Person.{" "}
                            <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">
                                A Whole Care Ecosystem.
                            </span>
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-3xl">
                            Unlike most apps designed for a single user, Carevation is built around the reality that caregiving is a team effort.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="w-full flex flex-col items-center gap-10">
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


                    <h2 className="text-3xl font-bold text-[#2D2D2D] leading-[1.2] md:mt-10 text-center">
                        Care Scenarios the Platform Supports
                    </h2>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {integrations.map((item, idx) => (
                            <div
                                key={idx}
                                className="px-5 py-2 bg-[#F0F9F8] text-[#4FA895] rounded-full text-[16px] font-medium border border-[#E0F2F0] hover:bg-[#E0F2F0] transition-all cursor-default select-none shadow-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}