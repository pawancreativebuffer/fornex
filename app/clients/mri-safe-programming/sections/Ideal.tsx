"use client";
import React from "react";
import { User, Network, Smartphone, Rocket, Zap, CheckCircle2 } from "lucide-react";


const IDEAL_CARDS = [
    {
        title: "You're a physician-founder with deep domain expertise and a defined product vision.",
        description: "The most impactful clinical tools are built by people who have experienced the problem firsthand. If you have the clinical knowledge, ForNex provides the full technical execution - from architecture to app store - with a team that understands healthcare at a clinical level, not just a technical one.",
        color: "#60C6B1",
        icon: User,
        large: true
    },
    {
        title: "You're building a clinical decision support tool that requires a complex logic engine, not just a UI.",
        description: "MRI Logic's conditionality rules engine - encoding four manufacturers' datasets into a precise, clinically validated decision system - is exactly the kind of rule-based medical architecture ForNex specializes in. Clinical logic applications demand a fundamentally different level of accuracy than standard consumer apps.",
        color: "#90c7e5",
        icon: Network
    },
    {
        title: "You need a mobile-first product on both platforms with an enterprise-grade backend.",
        description: "MRI Logic was built in React Native for cross-platform mobile with a .NET + MS SQL Server backend on Windows Server - selected specifically for clinical-grade reliability, structured data integrity, and compatibility with existing healthcare IT environments.",
        color: "#ff9900",
        icon: Smartphone
    },
    {
        title: "You're building an MVP with a roadmap that expands significantly in subsequent phases.",
        description: "We architected MRI Logic's database schema and API contracts to be category - agnostic from day one. Adding the MRI Centers module in Phase 2 required no rebuild. Phase 3's AI chatbot and booking system build on the same foundation - not alongside it.",
        color: "#E3ACC8",
        icon: Rocket
    },
    {
        title: "You're integrating AI into a clinical workflow where speed and accuracy both matter.",
        description: "MRI Logic uses Groq AI as its intelligence layer - and Phase 3 will introduce an AI chatbot assistant for clinical queries. ForNex Health integrates AI into medical workflows with accuracy as the non-negotiable constraint, not an afterthought.",
        color: "#c66060",
        icon: Zap
    }
];

function InteractiveCard({ card }: { card: typeof IDEAL_CARDS[0] }) {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`group relative bg-white rounded-3xl p-5 lg:p-8 border border-gray-100 transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-default h-full flex flex-col`}
        >
            {/* Dynamic Background Glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${card.color}, transparent 70%)`
                    // @ts-ignore
                    , '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px`
                } as any}
            />

            <div className={`flex flex-col gap-6 lg:gap-8 relative z-10 h-full`}>
                {/* Icon Container */}
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                        borderColor: `${card.color}30`,
                        backgroundColor: `${card.color}05`,
                        color: card.color
                    }}
                >
                    <card.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                <div className="flex-1 space-y-5">
                    <h3 className={`text-[22px] lg:text-[24px] font-bold text-gray-900 leading-tight`}>
                        {card.title}
                    </h3>
                    <p className={`text-gray-500 text-[16px] leading-relaxed`}>
                        {card.description}
                    </p>
                </div>
            </div>

            {/* Accent Bar */}
            <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ backgroundColor: card.color }}
            />
        </div>
    );
}

export default function Ideal() {
    return (
        <section className="relative w-full mt-7">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-white rounded-[40px] p-6 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center gap-12 overflow-hidden relative">

                    {/* HEADER */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Ideal For Organizations Like Yours</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                            If Any of These Sound Like You, <br />
                            <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">ForNex Health Is the Right Partner</span>
                        </h2>
                    </div>

                    {/* NEW GRID LAYOUT: 3 blocks first row, 2 blocks last row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 w-full max-w-7xl relative z-10 items-stretch">
                        {/* First Row: 3 Blocks */}
                        {IDEAL_CARDS.slice(0, 3).map((card, index) => (
                            <div key={index} className="lg:col-span-2">
                                <InteractiveCard card={card} />
                            </div>
                        ))}

                        {/* Second Row: 2 Blocks (50/50 Width on LG) */}
                        <div className="lg:col-span-3">
                            <InteractiveCard card={IDEAL_CARDS[3]} />
                        </div>
                        <div className="lg:col-span-3">
                            <InteractiveCard card={IDEAL_CARDS[4]} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}