"use client";
import React from "react";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

const CONTACT_CARDS = [
    {
        title: "Email Us",
        description: "pawanpanwar@creativebuffer.com",
        color: "#60C6B1",
        icon: Mail,
        link: "mailto:pawanpanwar@creativebuffer.com"
    },
    {
        title: "Call Us",
        description: "Get in touch directly to discuss your data needs.",
        color: "#90c7e5",
        icon: Phone,
        // link: "#"
    },
    {
        title: "Visit Website",
        description: "www.creativebuffer.com",
        color: "#ff9900",
        icon: Globe,
        link: "https://www.creativebuffer.com"
    }
];

function InteractiveCard({ card }: { card: typeof CONTACT_CARDS[0] }) {
    const cardRef = React.useRef<HTMLAnchorElement>(null);
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
        <a
            href={card.link}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            target="_blank"
            className="group relative bg-white rounded-3xl p-5 lg:p-8 border border-gray-100 transition-all duration-500 hover:shadow-2xl overflow-hidden h-full flex flex-col no-underline"
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

            <div className="flex flex-col gap-6 lg:gap-8 relative z-10 h-full">
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

                <div className="flex-1 space-y-3">
                    <h3 className="text-[20px] lg:text-[22px] font-bold text-gray-900 leading-tight flex items-center gap-2">
                        {card.title}
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: card.color }} />
                    </h3>
                    <p className="text-gray-500 text-[15px] lg:text-[16px] leading-relaxed font-medium break-words">
                        {card.description}
                    </p>
                </div>
            </div>

            {/* Accent Bar */}
            <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ backgroundColor: card.color }}
            />
        </a>
    );
}

export default function LetsTalk() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#f7fbfe]">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-white rounded-[40px] p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center gap-12 overflow-hidden relative">

                    {/* HEADER */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-4 bg-[#60C6B1]/10 px-4 py-2 rounded-full border border-[#60C6B1]/20">
                            <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)] animate-pulse" />
                            <span className="uppercase tracking-wider">Next Steps</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold leading-[1.2] text-[#1a2b3c] mb-6">
                            Let's Talk About Your <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#60C6B1] to-blue-500 bg-clip-text text-transparent">Healthcare Data</span>
                        </h2>
                        
                        <p className="text-gray-500 text-lg leading-relaxed">
                            If your organization is working with sensitive healthcare data for analytics, AI, research, development, migration or controlled collaboration, we can help assess the data, define an appropriate de-identification approach, and design a repeatable processing and validation workflow around it.
                        </p>
                    </div>

                    {/* INTERACTIVE CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
                        {CONTACT_CARDS.map((card, index) => (
                            <InteractiveCard key={index} card={card} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}