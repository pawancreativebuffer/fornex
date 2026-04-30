"use client";

import {
    Megaphone,
    BetweenHorizontalEnd,
} from 'lucide-react';

const coreModules = [
    {
        id: "1",
        title: "Google Ads for Healthcare Providers",
        icon: <Megaphone className="w-12 h-12" />,
        color: "#E3ACC8",
        bullets: [
            "Google Ads for healthcare providers comes with specific policies that limit what you can advertise and how - particularly for sensitive health conditions, addiction treatment services, and certain pharmaceutical categories. Navigating these restrictions requires healthcare-specific PPC expertise, not just Google Ads certification.",
            "We build and manage Google Search, Performance Max, and Display campaigns for healthcare providers - with HIPAA-compliant conversion tracking that does not expose PHI through your analytics tags, audiences built on non-PHI behavioral signals, and ad copy that complies with medical advertising regulations while still being compelling enough to drive clicks.",
            "Our healthcare PPC campaigns target high-intent search terms that indicate active care-seeking - not just condition curiosity - which is the key to driving actual appointment bookings rather than website traffic.",
        ]
    },
    {
        id: "2",
        title: "Meta Advertising for Healthcare (Facebook and Instagram)",
        icon: <BetweenHorizontalEnd className="w-12 h-12" />,
        color: "#FF9900",
        bullets: [
            "Meta's advertising platform offers powerful patient acquisition capabilities for healthcare - particularly for elective and specialty services where patients have more choice and longer consideration periods. Cosmetic dermatology, elective orthopedic procedures, fertility services, concierge medicine, and behavioral health services are all excellent candidates for Meta advertising.",
            "We implement Meta campaigns in full compliance with HHS guidance on tracking technologies - using server-side conversion APIs rather than pixel-based tracking, and carefully configured audiences that do not rely on health condition targeting that Meta has restricted for healthcare advertisers."
        ]
    }
];

export default function ResultsData() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden  bg-[#f7fbfe]">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col gap-10 items-center">

                    {/* Left Column: Header + Strategic Points (Sticky) */}
                    <div className="w-full flex flex-col items-center text-center">
                        <div className="flex items-center justify-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Advertise</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] max-w-[700px]">
                            Healthcare Paid <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Advertising (PPC)</span>
                        </h2>
                    </div>

                    {/* Right Column: Core Modules (One by One) */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {coreModules.map((module, index) => (
                            <div
                                key={module.id}
                                className="relative flex flex-col h-full"
                                style={{ zIndex: index + 1 }}
                            >
                                <div
                                    className="rounded-[40px] p-5 lg:p-10 shadow-xl flex flex-col text-white overflow-hidden h-full"
                                    style={{ backgroundColor: module.color }}
                                >
                                    {/* Large Background Icon */}
                                    <div className="absolute -bottom-0 -right-0 opacity-15 pointer-events-none scale-[4.5] rotate-[-15deg]">
                                        {module.icon}
                                    </div>

                                    <div className="relative z-10 w-full">
                                        {/* Module Header */}
                                        <div className="flex flex-col gap-6">
                                            <div className="w-20 h-20 bg-white/20 rounded-[20px] flex items-center justify-center shadow-lg backdrop-blur-sm">
                                                <div className="text-white">
                                                    {module.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-semibold tracking-[0.1em] uppercase opacity-60 block mb-2">Paid Advertisement {module.id}</span>
                                                <h4 className="text-4xl font-bold leading-tight">
                                                    {module.title}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Module Content - Single Line Points */}
                                        <div className="space-y-2 max-w-[800px] mt-8">
                                            {module.bullets.map((bullet, i) => (
                                                <div key={i} className="flex items-start gap-5 group/item">
                                                    <div className="w-2 h-2 rounded-full mt-2.5 shrink-0 bg-white/40 group-hover/item:bg-white group-hover/item:scale-150 transition-all duration-300" />
                                                    <p className="text-white text-[16px] leading-relaxed group-hover/item:text-white transition-colors duration-300 font-medium">
                                                        {bullet}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}