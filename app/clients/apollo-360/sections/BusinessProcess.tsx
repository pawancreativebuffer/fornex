"use client";

import React from 'react';
import {
    Activity,
    FilePen,
    File,
    Users,
    CheckCircle2,
    XCircle
} from 'lucide-react';

const processData = [
    {
        title: "Chronic Care Check-in",
        icon: <Activity className="w-10 h-10" />,
        color: "#60C6B1",
        before: "Quarterly or annual clinic visit. No structured support between appointments. Lifestyle guidance given with no follow-up mechanism or accountability structure.",
        after: "Daily care team check-ins via platform. Wearable data monitored continuously. Protocol-driven coaching delivered between clinical touchpoints with documented outcomes."
    },
    {
        title: "Clinical Documentation",
        icon: <FilePen className="w-10 h-10" />,
        color: "#90c7e5",
        before: "Inconsistent or absent care coordination notes. Minimal formal documentation of decisions made between visits. Incomplete audit trails and no formal evidence of care coordination.",
        after: "Every interaction documented in structured formats satisfying clinical and billing requirements. FHIR R4 integration pushes summaries to the patient's primary EHR automatically."
    },
    {
        title: "Insurance Billing",
        icon: <File className="w-10 h-10" />,
        color: "#ff9900",
        before: "Billing limited to in-person visit codes. Chronic care management reimbursement pathways were underutilized due to the documentation burden they required.",
        after: "Automated time-tracking and care coordination documentation. CMS chronic care management codes captured at scale without manual overhead on the care team."
    },
    {
        title: "Care Coordination",
        icon: <Users className="w-10 h-10" />,
        color: "#E3ACC8",
        before: "Primary care physician unaware of patient's chronic condition progress between visits. No structured data sharing with care programs or specialists.",
        after: "Referring physicians have real-time read access to Apollo care journey. Bidirectional EHR integration keeps the full care team aligned without duplicating entry."
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
                        We Didn't Digitize the Old Process. <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent"> We Replaced It.</span>
                    </h2>
                </div>

                {/* Process List */}
                <div className="space-y-4 lg:space-y-1">
                    {/* Header for the table-like layout on desktop */}
                    <div className="hidden lg:grid grid-cols-12 gap-0 items-end mb-4">
                        <div className="col-span-3 text-[18px] font-semibold uppercase text-gray-500">Process Area</div>
                        <div className="col-span-4 text-[18px] font-semibold uppercase text-gray-500 pl-20">Historical Approach (Before)</div>
                        <div className="col-span-5 text-[18px] font-semibold uppercase text-[#60C6B1] pl-20">The Apollo Standard (After)</div>
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

                                    <div className="flex items-center gap-4">
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