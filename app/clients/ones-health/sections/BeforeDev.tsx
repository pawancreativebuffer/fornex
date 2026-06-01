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
                            <span>The Founder</span>
                        </div>
                        <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1]">
                            Determined to make healthcare <span className="text-[#60C6B1]">proactive</span>, not reactive
                        </h1>

                        <p className="text-white/70 text-base leading-relaxed">
                            The idea behind Ones Health began with a simple observation: people have more health data than ever before, yet very little clarity about what to do with it.
                        </p>
                        <p className="text-white/70 text-base leading-relaxed">
                            Blood tests, wearable devices, health assessments, and lifestyle tracking tools generate valuable information every day. However, most individuals are left to interpret that data on their own or receive generalized recommendations that fail to reflect their unique biology.
                        </p>
                        <p className="text-white/70 text-base leading-relaxed">
                            The founder of Ones Health believed there had to be a better approach—one that combined science, technology, and personalized guidance to help people make informed decisions about their health before problems arise.
                        </p>
                        <p className="text-white/70 text-base leading-relaxed">
                            Rather than waiting for illness to occur, the vision was to create a platform focused on prevention, optimization, and longevity. A platform capable of transforming complex health information into practical actions that individuals could follow with confidence.
                        </p>
                    </div>

                    {/* Right Column: Image & Personal Note */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
                            <Image
                                src="/images/peter.jpg"
                                alt="Founder & CEO"
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
                                        <p className="text-[#1a2b3c] font-bold text-lg">Founder & CEO</p>
                                        <p className="text-[#1a2b3c] text-sm">Ones Health</p>
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
                                "The future of healthcare isn't about collecting more data—it's about helping people understand what that data means and empowering them to take action. Ones Health was created to bridge the gap between information and meaningful health outcomes."
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-1 bg-[#60C6B1] rounded-full mb-6" />
                                <h4 className="text-xl font-semibold text-white uppercase mb-1">Peter S.</h4>
                                <p className="text-[#60C6B1] font-medium">Founder & CEO, Ones Health</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
