"use client";
import React from "react";
import { User, BrainCircuit, Users, Smartphone, Rocket, ShieldCheck, CheckCircle2 } from "lucide-react";


const IDEAL_CARDS = [
    {
        title: "You're a founder with a health problem. You've lived by yourself.",
        description: "Deep domain knowledge and a clear vision, ForNex Health brings the technical execution to make it real.",
        color: "#60C6B1",
        icon: User,
        large: true
    },
    {
        title: "You want AI doing real clinical work, not surface features.",
        description: "Production AI pipelines that read structured health data and return consistent, reasoned outputs at scale.",
        color: "#90c7e5",
        icon: BrainCircuit
    },
    {
        title: "Your platform needs multiple roles in one system.",
        description: "Consumers, admins and operations each with separate access, all coordinated through a single codebase.",
        color: "#ff9900",
        icon: Users
    },
    {
        title: "You have a tight timeline and can't afford a rebuild.",
        description: "Ones launched in 3 months fully architected for scale from day one, no technical debt left behind.",
        color: "#E3ACC8",
        icon: Rocket
    },
    {
        title: "You're building mobile-ready from the start.",
        description: "Backend and data layer designed to support React Native and Apple Health expansion without rework.",
        color: "#c66060",
        icon: Smartphone
    },
    {
        title: "You're handling sensitive health data and need it right.",
        description: "Encryption at rest, TLS in transit, role-level access control built in from the architecture stage.",
        color: "#60C6B1",
        icon: ShieldCheck
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
                <div className="bg-white rounded-[40px] p-6 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center gap-12 overflow-hidden relative">

                    {/* HEADER */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Ideal For Organizations Like Yours</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-5xl">
                            Built for Health Founders Who Need More Than <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Just Software</span>
                        </h2>
                    </div>

                    {/* NEW GRID LAYOUT: 3 blocks first row, 2 blocks last row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 w-full max-w-7xl relative z-10 items-stretch">
                        {/* First Row: 3 Blocks */}
                        {IDEAL_CARDS.map((card, index) => (
                            <div key={index} className="lg:col-span-2">
                                <InteractiveCard card={card} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}