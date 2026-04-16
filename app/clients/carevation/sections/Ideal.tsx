"use client";
import React from "react";
import { User, Network, Smartphone, Rocket, Zap, CheckCircle2 } from "lucide-react";


const IDEAL_CARDS = [
    {
        title: "You're a founder with a problem you've lived yourself.",
        description: "The most powerful digital health products are built by people who've experienced the gap firsthand. If you have deep domain knowledge and a clear vision, ForNex provides the technical execution to bring it to life with precision.",
        color: "#60C6B1",
        icon: User,
        large: true
    },
    {
        title: "Consumer health focus.",
        description: "Complex multi-user coordination and role-based access for family synchronization.",
        color: "#90c7e5",
        icon: Network
    },
    {
        title: "Mobile-first approach.",
        description: "High-quality React Native apps for iOS and Android from a single development cycle.",
        color: "#ff9900",
        icon: Smartphone
    },
    {
        title: "AI-ready roadmap.",
        description: "Architected foundations for AI insights and web expansion without future rebuilds.",
        color: "#E3ACC8",
        icon: Rocket
    },
    {
        title: "Timeline pressure.",
        description: "Rapid delivery from discovery to launch within 2025 without sacrificing quality.",
        color: "#c66060",
        icon: Zap
    }
];

function InteractiveCard({ card, isTall }: { card: typeof IDEAL_CARDS[0], isTall?: boolean }) {
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
                    className={`${isTall ? 'w-20 h-20' : 'w-16 h-16'} rounded-2xl flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    style={{
                        borderColor: `${card.color}30`,
                        backgroundColor: `${card.color}05`,
                        color: card.color
                    }}
                >
                    <card.icon className={isTall ? "w-10 h-10" : "w-8 h-8"} strokeWidth={1.5} />
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

                    {/* NEW GRID LAYOUT: 1 Large Left, 4 Small Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl relative z-10 items-stretch">

                        {/* LEFT: Tall Block */}
                        <div className="lg:col-span-1 h-full">
                            <InteractiveCard card={IDEAL_CARDS[0]} isTall />
                        </div>

                        {/* RIGHT: 2x2 Grid */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8">
                            {IDEAL_CARDS.slice(1).map((card, index) => (
                                <InteractiveCard key={index} card={card} />
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}