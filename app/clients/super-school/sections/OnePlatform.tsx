"use client";

import React from 'react';
import {
    Pill,
    FingerprintPattern,
    Users2,
    FileText,
    Calendar,
    LayoutDashboard,
    Check,
    User,
    History
} from 'lucide-react';

const strategicPoints = [
    { title: "Multi-Role Access Control" },
    { title: "Real-Time Parent Messaging" },
    { title: "IEP Goal Monitoring" },
    { title: "Medication Log Generation" }
];

const coreModules = [
    {
        id: "1",
        title: "Splash & Authentication",
        icon: <FingerprintPattern className="w-12 h-12" />,
        color: "#60C6B1",
        bullets: [
            "Full email-based login, signup, and forgot password flow",
            "OTP verification for secure account access",
            "Role-based onboarding for admins, teachers, and parents",
            "Critical for time-sensitive educational environments where speed matters"
        ]
    },
    {
        id: "2",
        title: "Admin Dashboard",
        icon: <LayoutDashboard className="w-12 h-12" />,
        color: "#90c7e5",
        bullets: [
            "Full control to create and manage students, teachers, and parents",
            "Track student progress with assessments, attendance, notes, and media",
            "Review and approve uploaded documents for compliance",
            "Send and receive messages to stay connected with all stakeholders"
        ]
    },
    {
        id: "3",
        title: "Student Management Module",
        icon: <Users2 className="w-12 h-12" />,
        color: "#ff9900",
        bullets: [
            "Add and manage students with complete profile data",
            "Dynamic IEP goal assignment tied to individual student plans",
            "Pickup and drop- off schedule tracking per student",
            "Searchable student roster with instant detail access"
        ]
    },
    {
        id: "4",
        title: "Assessment & Progress Tracking",
        icon: <FileText className="w-12 h-12" />,
        color: "#E3ACC8",
        bullets: [
            "Set goals and record assessments to monitor student progress over time",
            "Color - coded result status visible at a glance per student per goal",
            "Detailed breakdown by domain - academic, behavioral, life skills",
            "Read More screen provides full historical progression for complex cases"
        ]
    },
    {
        id: "5",
        title: "Attendance Calendar",
        icon: <Calendar className="w-12 h-12" />,
        color: "#c66060",
        bullets: [
            "Dedicated attendance calendar view per teacher and per student",
            "Mark present, absent, late arrival, and early pickup with one tap",
            "Attendance data flows directly into student compliance reports",
            "Admin- level view aggregates attendance across all classrooms"
        ]
    },
    {
        id: "6",
        title: "Parent Communication & Media Feed",
        icon: <User className="w-12 h-12" />,
        color: "#60C6B1",
        bullets: [
            "In - app direct messaging between teachers and parents per student",
            "Media upload: photos and videos from daily activities shared with families",
            "Notes and updates from teachers visible to parents in real time",
            "Message reactions, edit support, and group messaging for staf"
        ]
    },
    {
        id: "7",
        title: "Medication Log Module",
        icon: <Pill className="w-12 h-12" />,
        color: "#90c7e5",
        bullets: [
            "Medication logs generated directly from the device - no manual paper forms",
            "Linked to individual student profiles with dosage and schedule data",
            "Shareable via app or exportable to parent records and admin files",
            "Built to satisfy compliance audit and formal documentation requirements"
        ]
    },
    {
        id: "8",
        title: "History & Reporting Module",
        icon: <History className="w-12 h-12" />,
        color: "#ff9900",
        bullets: [
            "Searchable log of all assessments, notes, and attendance in one place",
            "Filter by student name, date range, or goal area for fast retrieval",
            "Detail view for each historical record with stored results and document access",
            "Supports ongoing case tracking across multiple students"
        ]
    },
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
                                A 30+ Screen Special Education App <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Designed for Real Educators</span>
                            </h2>
                            <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-6 lg:max-w-[500px]">
                                ForNex Health designed and developed SuperSchool end-to-end - 8 fully functional modules across iOS and Android, built around a central student data management engine. Every screen gives every role an unambiguous, actionable answer.
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