"use client";

import {
    User,
    Layers,
    Smartphone,
    Rocket,
    MapPin,
    DollarSign,
    Cpu,
    Code,
} from "lucide-react";

export default function ProjectSnapshots() {

    const flow = [
        { icon: User, title: "Client", value: "Apollo 360 Health · apollo360health.com" },
        { icon: Layers, title: "Industry", value: "Digital Health / Chronic Disease Management / Telehealth" },
        { icon: Smartphone, title: "Project Type", value: "HIPAA-Compliant Telehealth Platform with EHR Integration" },
        { icon: Rocket, title: "Stage", value: "Growth - Active Deployment with Real Patient Population" },
        { icon: MapPin, title: "Geography", value: "United States (National)" },
        { icon: DollarSign, title: "Business Model", value: "Insurance-Covered Digital Care (Medicare + Major Insurers)" },
        { icon: Cpu, title: "Platforms", value: "Web · iOS · Android" },
        { icon: Code, title: "Tech Stack", value: "React · Node.js · AWS HIPAA · FHIR R4 · Athenahealth" },
    ]

    return (
        <>
            <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#f7fbfe]">
                <div className="max-w-[1400px] mx-auto px-4">

                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Project Snapshot</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-4">
                            Apollo 360 Health
                        </h2>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            A specialized digital health platform delivering medically supervised chronic care - covering cardiovascular disease, obesity, diabetes, hypertension, high cholesterol, and depression - built on HIPAA-compliant infrastructure and integrated with Athenahealth via FHIR R4.
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {flow.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-100 rounded-[20px] shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-5 hover:border-[#60c6b1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-500"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-[#60c6b1] p-2 rounded-[0_10px_10px_10px]"><Icon size={24} className="text-white" /></span>
                                        <p className="text-base text-gray-500 font-regular leading-snug">
                                            {item.title}
                                        </p>
                                    </div>
                                    <p className="text-[18px] font-medium text-[#2D2D2D]">
                                        {item.value}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}