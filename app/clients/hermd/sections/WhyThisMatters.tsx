"use client";

import { Activity, Beaker, FileCode2, Network, ShieldAlert } from "lucide-react";

export default function WhyThisMatters() {
    const capabilities = [
        {
            title: "Train & Test AI Models",
            desc: "Train and test models on real clinical data safely.",
            icon: Activity
        },
        {
            title: "Longitudinal Research",
            desc: "Prepare longitudinal datasets for approved medical research.",
            icon: Beaker
        },
        {
            title: "Development & QA",
            desc: "Hand representative data to development and QA teams.",
            icon: FileCode2
        },
        {
            title: "Partner Collaboration",
            desc: "Bring in engineering or analytics partners without breach liability.",
            icon: Network
        }
    ];

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#f7fbfe] overflow-hidden">
            {/* Soft decorative background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60C6B1]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Text Context */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 text-blue-500 font-medium text-sm lg:text-base mb-4 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                <span className="uppercase tracking-wider">Industry Impact</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2b3c] leading-[1.2]">
                                Why This Matters For <br />
                                <span className="text-[#60C6B1]">Healthcare Organizations</span>
                            </h2>
                        </div>
                        
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Healthcare organizations increasingly need to use data beyond the clinical workflow it was collected in: for analytics, research, AI development, product testing and collaboration with technology partners. All of those require real-world healthcare data. <strong className="text-[#1a2b3c] font-semibold">None of them require patient identities.</strong>
                        </p>
                        
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
                            <ShieldAlert className="text-red-500 w-8 h-8 shrink-0 mt-1" />
                            <p className="text-red-900/80 leading-relaxed">
                                <strong className="text-red-700 font-semibold">Handled badly,</strong> organizations tend to find out late, either through an audit finding or through a re-identification risk nobody knew was there.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: The "Handled Properly" Grid */}
                    <div className="flex-1 w-full">
                        <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_20px_60px_rgb(0,0,0,0.05)] relative overflow-hidden group hover:shadow-[0_20px_60px_rgb(96,198,177,0.1)] transition-shadow duration-500">
                            {/* Decorative top border */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-[#60C6B1]" />
                            
                            <h3 className="text-2xl font-bold text-[#1a2b3c] mb-4">
                                Handled Properly...
                            </h3>
                            <p className="text-gray-500 mb-8 text-base">
                                De-identification is what makes modern healthcare data work possible. It lets teams safely:
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {capabilities.map((cap, idx) => (
                                    <div key={idx} className="flex flex-col gap-3 p-5 rounded-2xl bg-[#f7fbfe] border border-blue-50/50 hover:bg-white hover:border-[#60C6B1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
                                            <cap.icon size={24} />
                                        </div>
                                        <h4 className="font-bold text-[#1a2b3c]">{cap.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
