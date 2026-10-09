"use client";

import React, { useRef, useState } from "react";
import { Scale, Code2, ListChecks } from "lucide-react";

const team = [
    {
        name: "Pawan Panwar",
        role: "HIPAA Specialist",
        icon: Scale,
        description: "Set the de-identification guidelines and framework for the engagement, and confirmed that the approach taken aligned with applicable privacy and de-identification requirements.",
        color: "#60C6B1"
    },
    {
        name: "Himanshu Sharma",
        role: "Technical Lead",
        icon: Code2,
        description: "Led the technical implementation, covering data architecture, tokenization, relational integrity, and the detection and redaction of PHI within unstructured clinical text.",
        color: "#3491f7"
    },
    {
        name: "Chinmay Pandit",
        role: "Data Quality & Project Coordination",
        icon: ListChecks,
        description: "Led validation and quality assurance, including data integrity checks, de-identification validation, sampling and privacy-control verification with client communication.",
        color: "#f3a126"
    }
];

function TeamCard({ member }: { member: typeof team[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const Icon = member.icon;

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="group relative bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] h-full flex flex-col cursor-default"
        >
            {/* Dynamic Background Glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${member.color}, transparent 70%)`,
                    // @ts-ignore
                    '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px`
                } as any}
            />

            {/* Top gradient border */}
            <div 
                className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ backgroundImage: `linear-gradient(to right, transparent, ${member.color}80, transparent)` }} 
            />
            
            <div className="relative z-10 flex flex-col h-full">
                <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-transparent group-hover:border-solid"
                    style={{ backgroundColor: `${member.color}15`, color: member.color, borderColor: `${member.color}30` }}
                >
                    <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-[#1a2b3c] mb-1">{member.name}</h3>
                <p className="font-bold text-[13px] mb-5 uppercase tracking-wider" style={{ color: member.color }}>{member.role}</p>
                
                <div className="h-px w-full bg-slate-100 mb-5 group-hover:bg-opacity-50 transition-colors" />
                
                <p className="text-gray-500 leading-relaxed text-[15px]">
                    {member.description}
                </p>
            </div>
        </div>
    );
}

export default function TeamAndExpertise() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#f7fbfe] overflow-hidden">
             {/* Glow Backgrounds */}
             <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#60C6B1]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
             <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

             <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                 <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 text-blue-500 font-medium text-sm lg:text-base mb-4 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                         <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                         <span className="uppercase tracking-wider">The People Behind The Project</span>
                     </div>
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2b3c] mb-6">
                         Team & <span className="text-[#60C6B1]">Expertise</span>
                     </h2>
                     <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                         The work was delivered by a small multidisciplinary team covering HIPAA interpretation, healthcare data engineering, clinical text processing and data quality assurance.
                     </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                     {team.map((member, idx) => (
                         <TeamCard key={idx} member={member} />
                     ))}
                 </div>
             </div>
        </section>
    );
}
