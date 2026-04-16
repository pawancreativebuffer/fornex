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

export default function KeyLearnings() {
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
                        <span>Key Learnings</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-7 max-w-5xl">
                        What Building Carevation Taught the <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent"> ForNex Health</span> Team
                    </h2>
                </div>

                <div></div>
            </div>
        </section>
    );
}