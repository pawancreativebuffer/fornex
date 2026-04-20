"use client";

import React from 'react';
import {
    FileText,
    Check,
    Lock,
    House,
    Radar,
    Pencil,
    ListCheck,
    Ratio,
    ClipboardClock,
    Pin,
    Cog
} from 'lucide-react';

const strategicPoints = [
    { title: "Fully MRI Safe" },
    { title: "Safe with Restrictions" },
    { title: "Special Protocol" },
    { title: "Not MRI Conditional" },
];

const coreModules = [
    {
        id: "1",
        title: "Splash & Authentication",
        icon: <Lock className="w-12 h-12" />,
        color: "#60C6B1",
        bullets: [
            "Full email-based login, signup, and forgot password flow",
            "Guest Mode allows immediate use without account creation",
            "OTP verification for secure account access",
            "Critical for time-sensitive clinical environments where speed matters"
        ]
    },
    {
        id: "2",
        title: "Home Dashboard",
        icon: <House className="w-12 h-12" />,
        color: "#90c7e5",
        bullets: [
            "Central hub with single-tap 'Start New Device Check' action",
            "Designed for one-handed use with minimum taps to core functions",
            "Recent scans list visible immediately on load",
            "Quick access to history, manual entry, and OCR scanning"
        ]
    },
    {
        id: "3",
        title: "OCR Device Scanning",
        icon: <Radar className="w-12 h-12" />,
        color: "#ff9900",
        bullets: [
            "Camera opens with guided rectangular overlay for card alignment",
            "Confirmation screen lets the clinician review and correct extracted data",
            "Automatically extracts device name, model number, lead info, and manufacturer",
            "Eliminates manual typing errors in high-pressure clinical settings"
        ]
    },
    {
        id: "4",
        title: "Manual Entry Module",
        icon: <Pencil className="w-12 h-12" />,
        color: "#E3ACC8",
        bullets: [
            "Manufacturer dropdown: Medtronic, Abbott, Boston Scientific, Biotronik",
            "Dynamic lead count detection based on device type (1, 2, or 3 leads)",
            "Autocomplete for device model names and numbers - blocks invalid entries",
            "Fields turn green on valid match, red on unrecognized entry"
        ]
    },
    {
        id: "5",
        title: "Final Review",
        icon: <ListCheck className="w-12 h-12" />,
        color: "#c66060",
        bullets: [
            "Combined view of all entered device and MRI machine details before submitting",
            "Prevents errors from reaching the conditionality logic engine",
            "Full edit capability - nothing is locked until the clinician confirms",
            "Clean, distraction-free layout built for clinical decision moments"
        ]
    },

    {
        id: "6",
        title: "MRI Conditionality Result Engine",
        icon: <Ratio className="w-12 h-12" />,
        color: "#60C6B1",
        bullets: [
            "Color-coded result: Green, Yellow, Orange, or Red - visible in one glance",
            "Body region restrictions, exclusion zones, and manufacturer-specific warnings",
            "Detailed analysis: SAR limits, B1+RMS values, field strength (1.5T / 3T)",
            "'Read More' screen provides full technical breakdown for complex cases"
        ]
    },
    {
        id: "7",
        title: "PDF Report Generation",
        icon: <FileText className="w-12 h-12" />,
        color: "#90c7e5",
        bullets: [
            "Generates structured clinical report: patient details, device models, and result",
            "Shareable via email or exportable directly into patient records",
            "Includes restrictions, special notes, timestamp, and doctor/MRI center info",
            "Built to satisfy clinical audit and formal documentation requirements"
        ]
    },
    {
        id: "8",
        title: "History Module",
        icon: <ClipboardClock className="w-12 h-12" />,
        color: "#ff9900",
        bullets: [
            "Searchable log of all previous MRI checks in one place",
            "Filter by patient name or device model for fast retrieval",
            "Detail view for each past check with stored result and PDF access",
            "Supports ongoing case tracking across multiple patients"
        ]
    },
    {
        id: "9",
        title: "MRI Centers Near You",
        icon: <Pin className="w-12 h-12" />,
        color: "#E3ACC8",
        bullets: [
            "Search and filter all MRI centers and hospitals across the entire United States",
            "List view and map view with center pins and distance markers",
            "Website, map directions, and social media info for every listed center",
            "GPS-based location detection or manual city / ZIP code entry",
            "Full center profiles: address, machine type (1.5T / 3T), working hours",
            "Future Phase 3: direct appointment booking and center contact / chat"
        ]
    },
    {
        id: "10",
        title: "Support, Information & Settings",
        icon: <Cog className="w-12 h-12" />,
        color: "#c66060",
        bullets: [
            "About page, clinical disclaimer, and version information always accessible",
            "Notification preferences, language options, and profile settings",
            "Contact support built in for issue reporting and clinical queries",
            "Guest / logged-in mode toggle - all preferences stored locally on device"
        ]
    }
];

export default function OnePlatform() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-[#f7fbfe]">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Column: Header + Strategic Points (Sticky) */}
                    <div className="lg:w-[45%] lg:sticky lg:top-15">
                        <div className="mb-10">
                            <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                                <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                                <span>The Build</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-6">
                                A 26 Screen Clinical Mobile App <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Designed for Real Clinicians</span>
                            </h2>
                            <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-6 lg:max-w-[500px]">
                                ForNex Health designed and developed MRI Logic end-to-end 10 fully functional modules across iOS and Android, built around a central conditionality rules engine. The four-color result system gives every clinician an unambiguous, actionable answer.
                            </p>
                        </div>

                        {/* Strategic Points as White Checkmark Cards */}
                        <div className="space-y-2">
                            {strategicPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-5 bg-white p-2 rounded-[20px] shadow-[0_8px_10px_rgb(0,0,0,0.04)] border border-gray-50/50 group transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#60C6B1]/10 flex items-center justify-center shrink-0">
                                        <Check className="w-5 h-5 text-[#60C6B1]" strokeWidth={3} />
                                    </div>
                                    <h4 className="text-[18px] font-semibold text-[#1a2b3c]">
                                        {point.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Core Modules (One by One) */}
                    <div className="lg:w-[55%] flex flex-col gap-10 overflow-hidden">
                        {coreModules.map((module, index) => (
                            <div
                                key={module.id}
                                className="relative flex flex-col"
                                style={{ zIndex: index + 1 }}
                            >
                                <div
                                    className="rounded-[40px] p-5 lg:p-10 shadow-xl flex flex-col justify-center text-white overflow-hidden"
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
                                                <span className="text-sm font-semibold tracking-[0.1em] uppercase opacity-60 block mb-2">Module {module.id}</span>
                                                <h4 className="text-4xl font-bold leading-tight">
                                                    {module.title}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Module Content - Single Line Points */}
                                        <div className="space-y-4 max-w-[800px] mt-8">
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