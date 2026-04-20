"use client";

import Image from "next/image";
import { Heart, Award, Quote, User } from "lucide-react";

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
                            A Cardiologist Who Built the Infrastructure First - <span className="text-[#60C6B1]">Then Saw What Was Still Missing</span>
                        </h1>

                        <p className="text-white/70 text-base leading-relaxed">
                            Dr. Martin Kloosterman is a specialist in cardiac electrophysiology with deep clinical expertise in cardiac implantable electronic devices (CIEDs) — pacemakers, ICDs, loop recorders, and leadless devices. Over his career, he personally witnessed the coordination failures that occur when a CIED patient is scheduled for an MRI without device compatibility having been verified in advance.
                        </p>
                        <p className="text-white/70 text-base leading-relaxed">
                            To solve this at the coordination level, Dr. Kloosterman built Smart-Praxis — a multi-role healthcare SaaS platform at mrisafemode.com — now serving 243 registered users across hospitals, MRI centers, device manufacturers, and clinical experts. The platform digitizes the full MRI Konditionierung (MK) workflow: pre-scan device programming, multi-party coordination, and post-scan reprogramming.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-[20px] bg-white/5 border border-white/10 hover:border-[#60C6B1]/30 transition-colors group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#60C6B1]/10 flex items-center justify-center text-[#60C6B1] group-hover:scale-110 transition-transform">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-[20px] mb-1">Built Smart-Praxis</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">SaaS platform for MRI workflow management</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-[20px] bg-white/5 border border-white/10 hover:border-[#60C6B1]/30 transition-colors group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#60C6B1]/10 flex items-center justify-center text-[#60C6B1] group-hover:scale-110 transition-transform">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-[20px] mb-1">243+ Active Users</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">Used across hospitals, MRI centers, and experts</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-white/70 text-base leading-relaxed">
                            But one critical gap remained. While Smart-Praxis handled institutional coordination, clinicians at the bedside still had no fast, reliable tool to answer the foundational question before scheduling began: Is this specific cardiac device system actually MRI-conditional? That gap became MRI Logic.
                        </p>
                    </div>

                    {/* Right Column: Image & Personal Note */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/6] rounded-[2rem] overflow-hidden group">
                            <Image
                                src="/dr-2.jpg"
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
                                        <p className="text-[#1a2b3c] font-bold text-lg">Cardiac Electrophysiology Expert</p>
                                        <p className="text-[#1a2b3c] text-sm">CIEDs, pacemakers, ICDs, and leadless devices</p>
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
                                "The manual process for checking MRI conditionality was slow, fragmented, and completely dependent on the individual clinician's knowledge. I needed a tool that gave any clinician the right answer in seconds — regardless of their familiarity with specific device models."
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-1 bg-[#60C6B1] rounded-full mb-6" />
                                <h4 className="text-xl font-semibold text-white uppercase mb-1">Martin Kloosterman, MD</h4>
                                <p className="text-[#60C6B1] font-medium">Founder, MRI Safe Mode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
