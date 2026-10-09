"use client";

import { Info, Building } from "lucide-react";

export default function ClientRequirement() {
    return (
        <section className="relative w-full overflow-hidden py-16 lg:py-24 bg-[#1a2b3c]">
            {/* Background Ambient Glows */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#60C6B1] rounded-full blur-[160px] opacity-20 pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-[160px] opacity-20 pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-4 relative z-10">
                {/* Section Badge */}
                <div className="flex items-center gap-2 text-[#60C6B1] font-semibold text-sm lg:text-base mb-8 justify-center">
                    <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.8)] animate-pulse" />
                    <span className="uppercase tracking-wider">The Client and the Requirement</span>
                </div>

                <div className="space-y-12">
                    {/* Main Content */}
                    <div className="text-center space-y-6">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-[#60C6B1]/10 text-[#60C6B1] flex items-center justify-center">
                                <Building size={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-3xl mx-auto">
                            The Client and the <span className="text-[#60C6B1]">Requirement</span>
                        </h2>
                    </div>

                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#60C6B1] to-blue-500" />
                        
                        <div className="space-y-8 text-gray-300 text-lg sm:text-xl leading-relaxed">
                            <p>
                                The client is a US-based healthcare organization that handles sensitive patient information across its clinical and operational workflows. Like most organizations of its kind, it holds large volumes of data containing PHI.
                            </p>
                            <p>
                                The company wanted to support clinical research, internal analytics and machine learning development using longitudinal patient data, and to share that data with internal teams and third-party engineering partners. Doing so with identifiable records was not an option. What was needed was a systematic de-identification approach rather than ad hoc masking of individual fields, applied across data associated with approximately 25,000 patients.
                            </p>
                            
                            {/* Confidentiality Callout */}
                            <div className="mt-8 p-6 rounded-2xl bg-black/20 border border-white/5 flex items-start gap-4">
                                <Info className="w-6 h-6 text-[#60C6B1] shrink-0 mt-1" />
                                <p className="text-base text-gray-400 italic">
                                    The client’s name and identifying details have been omitted from this case study. Project details have been generalized where necessary, while retaining the challenges, approach and capabilities involved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
