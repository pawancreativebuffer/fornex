"use client";
import React from "react";
import { Shield, Database, Smartphone, Brain } from "lucide-react";


const IDEAL_CARDS = [
    {
        title: "You are building a digital health platform that requires genuine HIPAA compliance from day one - not patched on after launch.",
        description: "The most impactful clinical tools are built by people who understand the regulatory environment before they write the first line of code. ForNex provides full technical execution - from architecture to app store - with a team that understands healthcare at a clinical level.",
        color: "#90c7e5",
        icon: Shield
    },
    {
        title: "You need FHIR R4 integration with major EHR systems and understand that interoperability is not optional in modern healthcare.",
        description: "Apollo's conditionality rules engine - encoding multiple EHR datasets into a precise, clinically validated decision system - is exactly the kind of rule-based medical architecture ForNex specializes in.",
        color: "#ff9900",
        icon: Database
    },
    {
        title: "You need a mobile-first product on both platforms with an enterprise-grade backend built for clinical reliability.",
        description: "Apollo was built in React Native for cross-platform mobile with a Node.js backend on AWS HIPAA architecture - selected specifically for clinical-grade reliability, structured data integrity, and compatibility with existing healthcare IT environments.",
        color: "#E3ACC8",
        icon: Smartphone
    },
    {
        title: "You are integrating AI into a clinical workflow where speed and accuracy are both non-negotiable constraints.",
        description: "Apollo's Phase 2 uses Groq AI as its intelligence layer. ForNex integrates AI into medical workflows with accuracy as the non-negotiable constraint - not an afterthought bolted on after the core product ships.",
        color: "#c66060",
        icon: Brain
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
                    <div className="grid w-full max-w-7xl relative z-10 items-stretch">
                        {/* RIGHT: 2x2 Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8">
                            {IDEAL_CARDS.map((card, index) => (
                                <InteractiveCard key={index} card={card} />
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}