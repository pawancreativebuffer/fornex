"use client";

import {
    Hospital,
    Activity,
} from 'lucide-react';

const coreModules = [
    {
        id: "1",
        title: "Manhattan Cardiovascular Associates",
        icon: <Hospital className="w-12 h-12" />,
        color: "#E3ACC8",
        bullets: [
            "Challenge: 22% claim denial rate costing $180,000/month",
            "Solution: Custom denial management and automated claim scrubbing",
            "Result: Denial rate reduced to under 5% within 90 days",
        ]
    },
    {
        id: "2",
        title: "Apollo 360 Health",
        icon: <Activity className="w-12 h-12" />,
        color: "#FF9900",
        bullets: [
            "Challenge: Needed HIPAA-compliant telehealth platform from scratch in 6 months",
            "Solution: Custom patient portal, video consultation, FHIR R4 integration",
            "Result: Launched on schedule on AWS HIPAA architecture",
        ]
    }
];

export default function ResultsData() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col gap-10 items-center">

                    {/* Left Column: Header + Strategic Points (Sticky) */}
                    <div className="w-full flex flex-col items-center text-center">
                        <div className="flex items-center justify-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Results</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] max-w-[900px]">
                            Results Our Clients Have <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Achieved</span>
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
                                    className="rounded-[40px] p-5 lg:p-10 shadow-xl flex flex-col justify-center text-white overflow-hidden h-full"
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
                                                <span className="text-sm font-semibold tracking-[0.1em] uppercase opacity-60 block mb-2">We Serve {module.id}</span>
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