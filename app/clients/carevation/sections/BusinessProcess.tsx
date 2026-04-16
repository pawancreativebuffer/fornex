"use client";

import React from 'react';
import {
    Pill,
    Calendar,
    Users,
    Activity,
    HeartPulse,
    FileText,
    CheckCircle2,
    XCircle
} from 'lucide-react';

const processData = [
    {
        title: "Medication Management: From Risk to Reliability",
        icon: <Pill className="w-10 h-10" />,
        color: "#60C6B1",
        before: "Paper lists that became outdated. Generic reminder apps with no medical context. No tracking of prescribing providers or refill schedules. Medication history reconstructed from memory at every appointment.",
        after: "A centralized medication module tracks every drug, dose, instruction, and refill date. Smart reminders fire at the right time. Complete history always ready to share."
    },
    {
        title: "Visit Coordination: From Reactive to Proactive",
        icon: <Calendar className="w-10 h-10" />,
        color: "#90c7e5",
        before: "Caregivers arrived at appointments without a complete picture of the care history. Providers re-asked the same questions every visit. Follow-up items forgotten or lost in a notes app.",
        after: "Structured pre-visit planning prepares caregivers before every appointment. Follow-up items are captured and tracked. The right provider contact is always one tap away."
    },
    {
        title: "Family Collaboration: From Text Thread Chaos to Structured Teamwork",
        icon: <Users className="w-10 h-10" />,
        color: "#ff9900",
        before: "Group texts as the coordination layer for complex medical decisions. Messages buried under noise. No task tracking, no file sharing, no accountability.",
        after: "The CareSpace replaces the text thread entirely. Each family member has a clear role. Tasks are assigned explicitly. Progress is visible to everyone in real time."
    },
    {
        title: "Symptom & Condition Tracking: From Memory to Data",
        icon: <Activity className="w-10 h-10" />,
        color: "#E3ACC8",
        before: "Symptoms described from memory at appointments. No longitudinal record. No ability to identify patterns or share structured information with providers.",
        after: "Simple, structured symptom logging with tracking over time. Patterns surface naturally. Shareable records ready for any medical visit."
    },
    {
        title: "Caregiver Wellbeing: From Afterthought to First-Class Feature",
        icon: <HeartPulse className="w-10 h-10" />,
        color: "#c66060",
        before: "Every tool ignored the emotional dimension of caregiving entirely. Burnout was treated as inevitable.",
        after: "Daily wellness check-ins integrated into the same workflow as care logistics. Mood tracking. Personalized self-care recommendations. The platform acknowledges that a burned-out caregiver cannot sustain quality care."
    },
    {
        title: "Document Management: From Paper Crisis to Digital Access",
        icon: <FileText className="w-10 h-10" />,
        color: "#60C6B1",
        before: "Medical records in binders. PDFs scattered across email. Insurance documents on different devices. Nothing findable in an emergency.",
        after: "Secure, categorized document storage organized by type. Searchable, accessible from any device, shareable with providers in seconds."
    }
];

export default function BusinessProcess() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60C6B1]/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#90c7e5]/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span> Business Process Reengineering</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-7 max-w-6xl">
                        We Didn't Digitize the Old Way of Caregiving. <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">We Replaced It.</span>
                    </h2>
                </div>

                {/* Process List */}
                <div className="space-y-4 lg:space-y-1">
                    {/* Header for the table-like layout on desktop */}
                    <div className="hidden lg:grid grid-cols-12 gap-0 items-end mb-4">
                        <div className="col-span-3 text-[18px] font-semibold uppercase text-gray-500">Process Area</div>
                        <div className="col-span-4 text-[18px] font-semibold uppercase text-gray-500 pl-20">Historical Approach (Before)</div>
                        <div className="col-span-5 text-[18px] font-semibold uppercase text-[#60C6B1] pl-20">The Fornex Standard (Target)</div>
                    </div>

                    {processData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#f9fafb] rounded-2xl lg:rounded-none lg:bg-transparent overflow-hidden lg:overflow-visible"
                        >
                            <div className="lg:grid lg:grid-cols-12 lg:gap-0 items-stretch min-h-[140px]">
                                {/* Left Section: Category with Arrow Effect */}
                                <div
                                    className="col-span-3 relative p-4 lg:p-6 text-white flex flex-col justify-center transition-transform duration-500 lg:group-hover:translate-x-2"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {/* Arrow Pointing Shape (Desktop only) */}
                                    <div
                                        className="hidden lg:block absolute top-0 -right-[28px] h-full w-[30px] z-20"
                                        style={{
                                            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                                            backgroundColor: item.color
                                        }}
                                    />

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-[20px] font-semibold leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>

                                </div>

                                {/* Middle Section: Before */}
                                <div className="col-span-4 p-6 lg:p-8 lg:px-10 flex flex-col justify-center bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                        <p className="text-gray-500 text-base leading-relaxed">
                                            {item.before}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Section: After */}
                                <div className="col-span-5 p-6 lg:p-8 lg:px-10 flex flex-col justify-center bg-white">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-1 bg-[#60C6B1]/10 rounded-full shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-[#60C6B1]" />
                                        </div>
                                        <div>
                                            <p className="text-[#1a1a1a] font-regular text-base leading-relaxed">
                                                {item.after}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual connector (Desktop only) */}
                            <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[1px] bg-gray-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}