"use client";

import {
    Link,
    MessageSquare,
    Stethoscope,
    User
} from "lucide-react";

export default function Ecosystem() {
    const data = [
        {
            title: "Patients",
            desc: "Adults managing chronic conditions - cardiovascular disease, obesity, diabetes, hypertension. Typically Medicare-eligible or major insurance covered.",
            icon: User
        },
        {
            title: "Care Coaches",
            desc: "Monitor patient progress daily, deliver behavioral health and lifestyle coaching, escalate concerns to physicians within protocol-defined guidelines.",
            icon: MessageSquare
        },
        {
            title: "Supervising Physicians",
            desc: "Review patient data, adjust care protocols, manage prescriptions, and document clinical decisions aligned to billing compliance requirements.",
            icon: Stethoscope
        },
        {
            title: "Referring Physicians",
            desc: "Read-access layer to stay informed of their patient's Apollo care journey without adopting a new system or duplicate any data entry.",
            icon: Link
        },
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
                            <span>Organizational Structure - Who Uses It</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-7">
                            Not One Type of User.{" "}
                            <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">
                                An Entire Clinical Ecosystem.
                            </span>
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-5xl">
                            Apollo 360 Health is designed for clinical professionals across the full chronic care and referral workflow - from the patient managing daily health metrics to the referring physician monitoring progress from their own EHR.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6">
                        {data.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className={`relative w-full p-8 bg-gradient-to-br ${colors[index]} rounded-2xl shadow-xl flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300`}
                                >
                                    <div className="flex flex-col items-center gap-4">

                                        {/* ICON */}
                                        <Icon className="w-12 h-12 text-white opacity-90 mx-auto" />

                                        {/* TEXT */}
                                        <p className="text-white font-bold text-2xl text-center">
                                            {item.title}
                                        </p>

                                        <p className="text-white/70 font-regular text-[16px] leading-relaxed text-center">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section >
    );
}