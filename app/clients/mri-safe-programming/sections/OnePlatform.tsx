"use client";

import React from 'react';
import {
    Pill,
    Calendar,
    Users2,
    FileText,
    Heart,
    ArrowRight,
    Check,
    Activity
} from 'lucide-react';

const strategicPoints = [
    { title: "Simplify Medication Management" },
    { title: "Never Miss a Care Visit" },
    { title: "Enable Coordinated Family Caregiving" },
    { title: "Track Symptoms and Conditions Over Time" },
    { title: "Build for Scale From Day One" }
];

const coreModules = [
    {
        id: "1",
        title: "Appointment & Task Management",
        icon: <Calendar className="w-12 h-12" />,
        color: "#60C6B1",
        bullets: [
            "Real-time visibility into upcoming appointments, overdue tasks, and follow-up items across the entire care team",
            "Calendar integration prevents scheduling conflicts",
            "Structured pre-visit planning prepares caregivers for every medical conversation",
            "Nothing falls through the cracks"
        ]
    },
    {
        id: "2",
        title: "Medication Management",
        icon: <Pill className="w-12 h-12" />,
        color: "#90c7e5",
        bullets: [
            "Comprehensive medication tracking — dosage, instructions, refill schedules, and prescribing provider",
            "A complete medication history is always available for specialist visits",
            "Smart reminders ensure no dose is ever missed",
            "Designed to eliminate one of the highest-risk areas in home-based care"
        ]
    },
    {
        id: "3",
        title: "CareSpace — Shared Collaborative Workspace",
        icon: <Users2 className="w-12 h-12" />,
        color: "#ff9900",
        bullets: [
            "The central hub where all care information lives",
            "Shared task assignments with clear ownership",
            "Role-based invitations with configurable permissions for every family member",
            "Real-time synchronization across all devices — replaces fragmented group text threads entirely"
        ]
    },
    {
        id: "4",
        title: "Document & Records Storage",
        icon: <FileText className="w-12 h-12" />,
        color: "#E3ACC8",
        bullets: [
            "Secure storage for medical records, test results, insurance documents, and care plans",
            "Shareable with providers in seconds",
            "Organized by category for fast retrieval",
            "Accessible from any device"
        ]
    },
    {
        id: "5",
        title: "Caregiver Wellness & Self-Care",
        icon: <Heart className="w-12 h-12" />,
        color: "#c66060",
        bullets: [
            "Built-in mood and stress check-ins",
            "Energy tracking over time",
            "Reflection tools and journaling prompts",
            "The feature category every competitor has overlooked — because caregiver health is inseparable from care quality"
        ]
    }
];

export default function OnePlatform() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-[#f7fbfe] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Column: Header + Strategic Points (Sticky) */}
                    <div className="lg:w-[45%]">
                        <div className="mb-10">
                            <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                                <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                                <span>The Solution</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-6">
                                A Mobile-First Care Command Center - <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Designed for Real Families</span>
                            </h2>
                            <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-6 lg:max-w-[500px]">
                                ForNex Health designed and developed Carevation as a native mobile application for iOS and Android, built around a central concept: the <span className="font-semibold text-[#1a2b3c]">CareSpace</span> — a shared, role-based digital workspace where all of a loved one's care information lives, every family member stays synchronized.
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
                    <div className="lg:w-[55%] flex flex-col gap-10">
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