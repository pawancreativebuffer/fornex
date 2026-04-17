'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const THEME_COLORS = [
    { name: 'Teal', hex: '#60C6B1', gradient: 'from-[#60C6B1] to-[#4da896]' },
    { name: 'Blue', hex: '#90c7e5', gradient: 'from-[#90c7e5] to-[#76abc8]' },
    { name: 'Orange', hex: '#ff9900', gradient: 'from-[#ff9900] to-[#e68a00]' },
    { name: 'Pink', hex: '#E3ACC8', gradient: 'from-[#E3ACC8] to-[#c991ae]' },
    { name: 'Red', hex: '#c66060', gradient: 'from-[#c66060] to-[#ac4d4d]' },
];

const STORY_PAGES = [
    {
        title: "Paper Medication Log",
        description: "Handwritten medicine schedules tracked doses, timings, and refill notes daily.",
        image: "/images/project1.jpg",
        color: THEME_COLORS[0].gradient,
        accent: THEME_COLORS[0].hex,
        info: 'before'
    },
    {
        title: "Smart Medication Tracking",
        description: "Automatic reminders, dosage schedules, refill alerts, and shared updates.",
        image: "/images/shot1.png",
        color: THEME_COLORS[0].gradient,
        accent: THEME_COLORS[0].hex,
        info: 'after'
    },
    {
        title: "Printable Caregiver Logs",
        description: "Printed sheets recorded appointments, symptoms, routines, and caregiving tasks.",
        image: "/images/project2.png",
        color: THEME_COLORS[1].gradient,
        accent: THEME_COLORS[1].hex,
        info: 'before'
    },
    {
        title: "Digital Care Logs",
        description: "Track appointments, symptoms, tasks, and daily notes instantly.",
        image: "/images/shot2.png",
        color: THEME_COLORS[1].gradient,
        accent: THEME_COLORS[1].hex,
        info: 'after'
    },
    {
        title: "Caregiver Binders",
        description: "Organized folders stored reports, contacts, prescriptions, and care notes.",
        image: "/images/project3.jpg",
        color: THEME_COLORS[2].gradient,
        accent: THEME_COLORS[2].hex,
        info: 'before'
    },
    {
        title: "Secure Document Vault",
        description: "Store reports, prescriptions, contacts, and records digitally.",
        image: "/images/shot3.png",
        color: THEME_COLORS[2].gradient,
        accent: THEME_COLORS[2].hex,
        info: 'after'
    },
    {
        title: "Physical Medication Organizers",
        description: "Pill boxes separated medicines by day and dosage timing.",
        image: "/images/project4.jpg",
        color: THEME_COLORS[3].gradient,
        accent: THEME_COLORS[3].hex,
        info: 'before'
    },
    {
        title: "Guided Medication Management",
        description: "Organize medicines with reminders, instructions, and adherence tracking.",
        image: "/images/shot4.png",
        color: THEME_COLORS[3].gradient,
        accent: THEME_COLORS[3].hex,
        info: 'after'
    },
    {
        title: "Spreadsheet Manual Tracking",
        description: "Spreadsheets managed medications, expenses, appointments, and progress updates manually.",
        image: "/images/project5.jpg",
        color: THEME_COLORS[4].gradient,
        accent: THEME_COLORS[4].hex,
        info: 'before'
    },
    {
        title: "Centralized Care Dashboard",
        description: "Manage tasks, expenses, schedules, and updates in one place.",
        image: "/images/shot5.png",
        color: THEME_COLORS[4].gradient,
        accent: THEME_COLORS[4].hex,
        info: 'after'
    },
    {
        title: "Phone Messaging Coordination",
        description: "Calls and chats handled reminders, updates, and family coordination.",
        image: "/images/project6.png",
        color: THEME_COLORS[0].gradient,
        accent: THEME_COLORS[0].hex,
        info: 'before'
    },
    {
        title: "Shared Collaboration",
        description: "Assign tasks, share updates, and coordinate caregivers easily.",
        image: "/images/shot6.png",
        color: THEME_COLORS[0].gradient,
        accent: THEME_COLORS[0].hex,
        info: 'after'
    },
];

export default function Collage() {
    const [activePage, setActivePage] = useState(0);

    const nextPage = () => setActivePage((prev) => (prev + 1) % STORY_PAGES.length);
    const prevPage = () => setActivePage((prev) => (prev - 1 + STORY_PAGES.length) % STORY_PAGES.length);

    const currentAccent = STORY_PAGES[activePage].accent;

    return (
        <section className="relative w-full py-10 lg:py-15 bg-white overflow-hidden">
            {/* Soft Ambient Background elements using theme colors */}
            <div className={`absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-10 transition-all duration-1000`} style={{ backgroundColor: currentAccent }}></div>
            <div className={`absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-10 transition-all duration-1000`} style={{ backgroundColor: STORY_PAGES[(activePage + 1) % STORY_PAGES.length].accent }}></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Narrative */}
                    <div className="space-y-8 lg:space-y-10">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-4 max-w-[800px] mx-auto">
                            <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                                <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                                <span>Our Evolution</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[1100px]">
                                Engineering The <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Extraordinary</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-base font-regular leading-relaxed text-center lg:text-left">
                            Flip through our story to see how we transformed a bold vision into an industry-shifting reality through relentless innovation.
                        </p>

                        <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 lg:pt-6">
                            <div className="flex gap-3">
                                <button
                                    onClick={prevPage}
                                    className="cursor-pointer group w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-300 active:scale-95 shadow-sm"
                                    aria-label="Previous Page"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-1 transition-transform text-slate-600">
                                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextPage}
                                    className="cursor-pointer group w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-300 active:scale-95 shadow-sm"
                                    aria-label="Next Page"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform text-slate-600">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className="hidden sm:block h-px w-8 lg:w-10 bg-gradient-to-r from-slate-200 to-transparent"></div>

                            <div className="text-sm font-medium text-slate-400 tracking-widest uppercase">
                                Page {activePage + 1} of {STORY_PAGES.length}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Flip Book Visual */}
                    <div className="relative h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2" style={{ perspective: '2000px' }}>
                        <div className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] aspect-[1/1.2] transition-all duration-1000 transform-gpu" style={{ transformStyle: 'preserve-3d' }}>

                            {/* Book Base/Shadow */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-slate-200/50 blur-3xl rounded-[100%]"></div>

                            {STORY_PAGES.map((page, index) => {
                                const isCurrent = index === activePage;
                                const isPrev = index < activePage;

                                return (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left transform-gpu ${isCurrent ? 'z-30 opacity-100 scale-100 rotate-y-0' :
                                            isPrev ? 'z-10 opacity-0 -rotate-y-[120deg] scale-95' :
                                                'z-20 opacity-0 rotate-y-[20deg] translate-x-8 lg:translate-x-12 scale-90 blur-[1px]'
                                            }`}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl lg:shadow-2xl bg-white group ring-1 ring-slate-900/5">
                                            {/* Page Image Content */}
                                            <div className="relative h-3/5 lg:h-2/3 w-full overflow-hidden bg-slate-50">
                                                <Image
                                                    src={page.image}
                                                    alt={page.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent"></div>
                                            </div>

                                            {/* Page Details */}
                                            <div className="h-2/5 lg:h-1/3 p-6 lg:p-10 flex flex-col justify-end bg-white">
                                                <div className="flex items-center gap-3 mb-2 lg:mb-4">
                                                    <span className={`w-10 lg:w-12 h-[2px] rounded-full bg-gradient-to-r transition-all duration-1000 ${page.color}`}></span>
                                                    <span className={`text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r transition-all duration-1000 ${page.color} bg-clip-text text-transparent`}>
                                                        {page.info}
                                                    </span>
                                                </div>
                                                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-2">{page.title}</h3>
                                                <p className="text-base text-slate-500 leading-relaxed font-regular">
                                                    {page.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="absolute top-0 bottom-0 -left-px w-4 lg:w-6 bg-gradient-to-r from-slate-200/40 to-transparent rounded-l-[2rem] lg:rounded-l-[2.5rem] z-40"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .rotate-y-0 { transform: rotateY(0deg); }
                .-rotate-y-\[120deg\] { transform: rotateY(-120deg); }
                .rotate-y-\[20deg\] { transform: rotateY(20deg); }
            `}</style>
        </section>
    );
}
