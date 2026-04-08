"use client";

import { useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink, TrendingUp, CheckCircle2, FlaskConical, Stethoscope } from "lucide-react";
import Link from 'next/link';

const CLIENTS_DATA = [
    {
        id: "01",
        name: "St. Mary's Integrated Health",
        category: "Hospital Network",
        description: "A comprehensive digital transformation project involving the integration of multi-departmental patient records and real-time monitoring systems across 15+ locations.",
        impact: "45% faster patient wait times",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
        icon: <Stethoscope className="w-14 h-14" />,
        color: "#60C6B1"
    },
    {
        id: "02",
        name: "Global Biotech Diagnostics",
        category: "Laboratory & Research",
        description: "Implementing advanced AI-driven diagnostic tools to automate lab testing workflows and improve accuracy in early disease detection protocols.",
        impact: "99.2% Accuracy Rate",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
        icon: <FlaskConical className="w-14 h-14" />,
        color: "#3b82f6"
    },
    {
        id: "03",
        name: "Nexus Health Insurance",
        category: "Insurance Provider",
        description: "Development of a unified claims processing platform that utilizes blockchain for secure data handling and instant claim settlements for policyholders.",
        impact: "Instant Settlement Enabled",
        image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200",
        icon: <CheckCircle2 className="w-14 h-14" />,
        color: "#60C6B1"
    }
];

export default function ClientList() {
    const listRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-20');
                }
            });
        }, { threshold: 0.1 });

        listRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full py-10 lg:py-25 relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60C6B1] rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid md:grid-cols-[1fr_1.8fr] gap-16 lg:gap-32 items-start">

                    {/* Left Sticky Column */}
                    <div className="md:sticky md:top-25 md:self-start z-20">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span> Success Stories</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-8">
                            Empowering <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Industry Leaders</span> to innovate.
                        </h2>
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 lg:max-w-[500px]">
                            We partner with the world's most innovative healthcare institutions to build scalable, secure, and future-ready digital ecosytems.
                        </p>

                        <div className="grid grid-cols-2 gap-6 animate-slide-up [animation-delay:600ms]">
                            <div className="p-4 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                                <h4 className="text-4xl font-bold text-[#1a2b3c]">50+</h4>
                                <p className="text-slate-400 text-[16px] mt-1">Active Clients</p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                                <h4 className="text-4xl font-bold text-[#60C6B1]">98%</h4>
                                <p className="text-slate-400 text-[16px] mt-1">Retention Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Scrollable Column */}
                    <div className="flex flex-col gap-20 lg:gap-30">
                        {CLIENTS_DATA.map((client, index) => (
                            <div
                                key={client.id}
                                ref={el => { listRefs.current[index] = el; }}
                                className="opacity-0 translate-y-20 transition-all duration-700 ease-out group"
                            >
                                <div className="flex flex-col gap-8">
                                    {/* Item Header */}
                                    <div className="flex items-center justify-between border-b border-slate-200 pb-8 relative">
                                        {/* Vertical line connector - only visible on LG */}
                                        <div className="absolute top-0 -left-[64px] w-px h-full bg-slate-200 hidden lg:block group-hover:bg-[#60C6B1] transition-colors duration-500"></div>

                                        <div className="flex items-center gap-6">
                                            <span className="text-5xl lg:text-7xl font-[800] text-[#60C6B1]/20 group-hover:text-[#60C6B1] transition-all duration-500 tabular-nums">
                                                {client.id}
                                            </span>
                                            <div>
                                                <h3 className="text-2xl lg:text-4xl font-[700] text-[#1a2b3c] group-hover:translate-x-2 transition-transform duration-500">{client.name}</h3>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[12px] font-bold uppercase tracking-wider">{client.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden sm:flex w-14 h-14 rounded-full border border-slate-200 items-center justify-center text-slate-400 group-hover:bg-[#60C6B1] group-hover:text-white group-hover:border-[#60C6B1] group-hover:rotate-45 transition-all duration-500 cursor-pointer shadow-sm">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Item Body */}
                                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center pt-4">
                                        <div className="flex flex-col gap-6 order-2 md:order-1">
                                            <p className="text-gray-500 text-base font-regular leading-relaxed">
                                                {client.description}
                                            </p>

                                            <div className="flex flex-wrap gap-4">
                                                <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                                                    <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                                        <TrendingUp className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[12px] text-slate-400 uppercase font-semibold">Outcome</span>
                                                        <span className="text-slate-700 font-semibold text-[16px] leading-tight">{client.impact}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <Link href="#" className="px-5 py-3 rounded-full border border-[#1a2b3c] text-[#fff] bg-[#1a2b3c] hover:bg-[#fff] hover:text-[#1a2b3c] cursor-pointer transition flex items-center gap-2 font-medium">
                                                    View Case Study
                                                    <ExternalLink size={20} />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="order-1 md:order-2 relative">
                                            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card shadow-2xl relative z-10">
                                                <img
                                                    src={client.image}
                                                    alt={client.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                            {/* Decorative circle behind image */}
                                            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-[8px] border-white z-20 hidden lg:block overflow-hidden shadow-xl">
                                                <div className="w-full h-full bg-[#60C6B1]/70 backdrop-blur-md flex items-center justify-center text-[#fff]">
                                                    {client.icon}
                                                </div>
                                            </div>
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