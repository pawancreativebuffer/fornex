"use client";

import Image from "next/image";
import { Heart, Award, Stethoscope, Quote, GraduationCap, Briefcase } from "lucide-react";

export default function BeforeDev() {
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
                            <span>The Background</span>
                        </div>
                        <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1]">
                            A Healthcare Veteran Who <span className="text-[#60C6B1]">Lived the Problem</span> Before He Built the Solution
                        </h1>

                        <p className="text-white/70 text-base leading-relaxed">
                            Carevation is a digital health startup built at the intersection of caregiving, consumer technology, and human-centered design. Its name is a deliberate fusion of <span className="text-white font-medium">"care"</span> and <span className="text-white font-medium">"innovation"</span> — a reflection of its mission to bring modern digital product thinking to one of the most emotionally complex areas of life.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-[20px] bg-white/5 border border-white/10 hover:border-[#60C6B1]/30 transition-colors group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#60C6B1]/10 flex items-center justify-center text-[#60C6B1] group-hover:scale-110 transition-transform">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-[20px] mb-1">15+ Year Veteran</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">Clinical genomics, diagnostics, and consumer health tools.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-[20px] bg-white/5 border border-white/10 hover:border-[#60C6B1]/30 transition-colors group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#60C6B1]/10 flex items-center justify-center text-[#60C6B1] group-hover:scale-110 transition-transform">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-[20px] mb-1">MBA Kellogg</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">Northwestern University's School of Management.</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-white/70 text-base leading-relaxed">
                            But what drove Carevation wasn't a gap in a market model — it was a decade spent caring for his own mother after her arthritis diagnosis. Despite his deep background in healthtech, he found himself stitching together spreadsheets and text threads, constantly afraid of missing something critical.
                        </p>
                    </div>

                    {/* Right Column: Image & Personal Note */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
                            <Image
                                src="/healthcare_founder_adrian_chung_1776171833373.png"
                                alt="Adrian Chung, Founder of Carevation"
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
                                        <p className="text-[#1a2b3c] font-bold text-lg">Foundation of Empathy</p>
                                        <p className="text-[#1a2b3c] text-sm">Built from 10 years of caregiving experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 pointer-events-none" />
                        <div className="absolute top-1/2 -right-12 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl -z-10" />
                    </div>
                </div>

                {/* Bottom Quote Section */}
                <div className="mt-10 lg:mt-15 relative">
                    <div className="relative p-10 lg:p-10 rounded-[1rem] lg:rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden group">
                        <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 group-hover:text-[#60C6B1]/90 transition-colors duration-500" />

                        <div className="max-w-[900px] mx-auto text-center space-y-8">
                            <p className="text-[18px] font-regular leading-relaxed italic text-white">
                                "After a decade as a caregiver and 15 years in healthcare technology, I knew the gap was real. I brought Carevation to ForNex because I needed a team that understood both the human complexity and the product precision required to serve real families."
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-1 bg-[#60C6B1] rounded-full mb-6" />
                                <h4 className="text-xl font-semibold text-white uppercase mb-1">Adrian Chung</h4>
                                <p className="text-[#60C6B1] font-medium">Founder & CEO, Carevation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
