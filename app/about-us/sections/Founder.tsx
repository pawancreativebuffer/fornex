"use client";

import Image from "next/image";
import { Heart, Award, Stethoscope, Quote, GraduationCap, Briefcase, Users } from "lucide-react";

export default function Founder() {
    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 space-y-5">
                        <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base">
                            <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Leadership</span>
                        </div>
                        <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1]">
                            The People Behind <span className="text-[#60C6B1]">Fornex Health</span>
                        </h1>

                        <p className="text-white/70 text-base leading-relaxed">
                            Pawan founded Creative Buffer Consultancy and launched Fornex Health as the company's dedicated healthcare technology division. With over 15 years of experience spanning software development, AI solutions, healthcare technology, and business strategy, he leads a team of 40+ professionals serving healthcare clients across the United States and globally.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-[20px] bg-white/5 border border-white/10 hover:border-[#60C6B1]/30 transition-colors group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#60C6B1]/10 flex items-center justify-center text-[#60C6B1] group-hover:scale-110 transition-transform">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-[20px] mb-1">10+ Years Experience</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">Serving clients in the USA, New Zealand & globally</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-[20px] bg-white/5 border border-white/10 hover:border-[#60C6B1]/30 transition-colors group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#60C6B1]/10 flex items-center justify-center text-[#60C6B1] group-hover:scale-110 transition-transform">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-[20px] mb-1">50+ Client</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">Success Rate of 99% in EHR and Medical Billing Integrations</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-white/70 text-base leading-relaxed">
                            His focus has always been the same: build technology that solves real problems for real people, and build it the right way - compliant, scalable, and built to last.
                        </p>
                    </div>

                    {/* Right Column: Image & Personal Note */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/4] rounded-[2rem] overflow-hidden group">
                            <Image
                                src="/images/ceo.jpg"
                                alt="Pawan Panwar"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl border-white/1 backdrop-blur-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#60C6B1] flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                        <Heart size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="text-[#1a2b3c] font-bold text-lg">Pawan Panwar</p>
                                        <p className="text-[#1a2b3c] text-sm">CEO & Managing Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 pointer-events-none" />
                        <div className="absolute top-1/2 -right-12 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
