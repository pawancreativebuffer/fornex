'use client';

import { ArrowRight } from 'lucide-react';

export default function HomeSystemWeWork() {
    const integrations = [
        "FHIR R4 APIs",
        "HL7 v2 & v3",
        "SMART on FHIR",
        "CDA / C-CDA",
        "REST APIs",
        "Webhooks"
    ];

    const partners = [
        {
            name: "/images/athenahealth.png",
            description: "Cloud-based EHR for ambulatory care",
            position: "top-[9%] left-[15%] lg:-translate-x-1/2",
            delay: "0s",
        },
        {
            name: "/images/e-clinic.png",
            description: "Widely used by independent practices",
            position: "top-[10%] right-[0%]",
            delay: "0.1s",
        },
        {
            name: "/images/nextgen.png",
            description: "Multi-specialty group practices",
            position: "top-[45%] right-[-10%]",
            delay: "0.2s",
        },
        {
            name: "/images/kareo.png",
            description: "Built for small to mid-size practices",
            position: "bottom-[0%] right-[0%]",
            delay: "0.3s",
        },
        {
            name: "/images/epic.png",
            description: "Industry standard for large health systems",
            position: "bottom-[0%] left-[20%] lg:-translate-x-1/2",
            delay: "0.4s",
        },
        {
            name: "/images/oracle.png",
            description: "Enterprise EHR for hospitals",
            position: "top-[45%] left-[-15%]",
            delay: "0.5s",
        }
    ];

    return (
        <section className="w-full my-10 lg:my-0 lg:py-16 bg-[#FCFEFF] lg:overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="flex flex-col relative z-30">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Healthcare System We Work With</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-8">
                        Integrated with the Systems You Already Use
                    </h2>

                    <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 lg:max-w-[500px]">
                        ForNex Health connects natively with the industry's leading EHR and
                        practice management platforms — no rip-and-replace required.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
                        {integrations.map((item, idx) => (
                            <div
                                key={idx}
                                className="px-5 py-2 bg-[#F0F9F8] text-[#4FA895] rounded-full text-[16px] font-medium border border-[#E0F2F0] hover:bg-[#E0F2F0] transition-all cursor-default select-none shadow-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div>
                        <button className="px-5 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[#fff] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                            Get Free Consultation
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Visuals */}
                <div className="relative lg:h-[700px] w-full flex justify-center">

                    {/* Main Character Placeholder with Glow */}
                    <div className="flex item-start scale-115 hidden lg:block">
                        <img src="/images/doctor.png" alt='doctor' />
                    </div>

                    {/* Partner Floating Cards (Visible only on lg screens) */}
                    <div className="relative lg:absolute inset-0 z-20 pointer-events-none grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {partners.map((partner, idx) => (
                            <div
                                key={idx}
                                style={{ animationDelay: `${idx * 0.8}s` }}
                                className={`static lg:absolute bg-white/95 backdrop-blur-md p-5 rounded-[1.8rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 w-full lg:w-[240px] pointer-events-auto transition-all hover:scale-110 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:z-30 duration-500 animate-float ${partner.position}`}
                            >
                                <div className="mb-4 flex items-center justify-center">
                                    <img src={partner.name} alt={partner.name} className="w-auto h-[40px] object-contain" />
                                </div>
                                <p className="text-gray-500 text-sm text-center font-regular leading-snug">
                                    {partner.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile optimized partner cards (Simple grid below or stacked) - omitted here for brevity as user usually focuses on the premium look showed in image */}
                </div>
            </div>
        </section>
    );
}
