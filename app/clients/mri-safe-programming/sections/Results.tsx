"use client";

import { HeartPulse, Stethoscope, Building } from "lucide-react";

export default function Results() {
    const listData = [
        "Clinicians report feeling significantly more confident about MRI conditionality decisions - the guesswork has been removed entirely",
        "MRI center staff describe the compatibility check as faster and more reliable than any manual method they had previously used",
        "The OCR scanning feature is consistently rated the highest-value interaction - eliminating the most error-prone step in the workflow",
        "Having a formal PDF report generated automatically is described as the single biggest improvement to the documentation process",
        "The color-coded result system is immediately intuitive — no training required to interpret and act on the result with confidence"
    ]

    const potential = [
        {
            title: "FOR MRI CENTERS",
            desc: "Fewer cancelled scans, faster patient throughput, and a standardized safety process that no longer depends on individual staff knowledge or availability",
            color: "#60C6B1",
            icon: Stethoscope,
            num: "01"
        },
        {
            title: "FOR CARDIAC PATIENTS",
            desc: "Faster access to MRI imaging they previously waited weeks for — simply because device compatibility could not be confirmed quickly enough",
            color: "#90c7e5",
            icon: HeartPulse,
            num: "02"
        },
        {
            title: "FOR HEALTHCARE SYSTEMS",
            desc: "Reduced clinical waste, stronger audit trails, and a consistent safety protocol that scales across every unit, every clinician, and every shift",
            color: "#ff9900",
            icon: Building,
            num: "03"
        }
    ]

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col justify-center text-center gap-5">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Results</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] max-w-4xl m-auto">
                        Early Access Validated <span className="text-[#60C6B1]">Real Clinicians. Real Impact.</span>
                    </h1>
                    <p className="text-white/70 text-base leading-relaxed max-w-5xl m-auto">
                        MRI Logic is currently in active deployment with its initial clinical user base providing structured feedback. Qualitative outcomes from early use have validated the platform's design against the most critical pain points in cardiac MRI safety workflows.
                    </p>
                </div>

                {/* Early Access Reporting Section */}
                <div className="my-12">
                    <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#60C6B1]/30 hover:bg-white/[0.05]">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#60C6B1]" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-7">What Early Access Users Are Reporting</h2>

                        <div className="space-y-2">
                            {listData.map((text, index) => (
                                <div key={index} className="flex items-start gap-5 group/item">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[#60C6B1]/50 flex items-center justify-center bg-[#60C6B1]/10 text-[#60C6B1] transition-transform duration-300 group-hover/item:scale-120">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <p className="text-white/70 text-base leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Impact Potential Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5">Social Impact Potential at Scale</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pb-15">
                    {potential.map((card, index) => (
                        <div key={index} className="relative flex flex-col items-center group">
                            {/* Card Content inspired by Ref Image 2 */}
                            <div className="w-full h-full bg-white/[0.03] border-2 rounded-3xl pt-12 pb-24 px-8 text-center transition-all duration-500 group-hover:bg-white/[0.06] group-hover:-translate-y-3" style={{ borderColor: `${card.color}40` }}>
                                <div className="mb-8 inline-flex p-5 rounded-full bg-white/[0.05] group-hover:scale-110 transition-transform duration-500 shadow-xl" style={{ color: card.color, border: `1px solid ${card.color}30` }}>
                                    <card.icon size={36} />
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute -left-4 top-1/2 w-8 h-[2px] opacity-30" style={{ backgroundColor: card.color }}></div>
                                    <div className="absolute -right-4 top-1/2 w-8 h-[2px] opacity-30" style={{ backgroundColor: card.color }}></div>
                                    <h3 className="text-[22px] font-bold uppercase" style={{ color: card.color }}>{card.title}</h3>
                                </div>
                                <p className="text-white/70 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{card.desc}</p>
                            </div>

                            {/* Enhanced Decorative Ribbon/Number from Ref Image 2 */}
                            <div className="absolute -bottom-10 flex items-center justify-center w-full">
                                <div className="relative w-28 h-28 flex items-center justify-center">
                                    {/* The X-Shape Ribbon with "Folded" look */}
                                    <div className="absolute w-32 h-10 rotate-[25deg] rounded-sm shadow-2xl transition-transform duration-500 group-hover:rotate-[35deg]" style={{ backgroundColor: card.color }}></div>
                                    <div className="absolute w-32 h-10 -rotate-[25deg] rounded-sm shadow-2xl transition-transform duration-500 group-hover:-rotate-[35deg]" style={{ backgroundColor: card.color, filter: 'brightness(0.8)' }}></div>

                                    {/* Inner Circle for Number */}
                                    <div className="relative w-16 h-16 rounded-full bg-[#1a2b3c] border-2 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110" style={{ borderColor: card.color }}>
                                        <span className="text-white font-black text-2xl tracking-tighter">
                                            {card.num}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
