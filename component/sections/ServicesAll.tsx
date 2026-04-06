'use client';

import { ArrowRight } from 'lucide-react';

export default function ServicesAll() {
    const integrations = [
        "FHIR R4 APIs",
        "HL7 v2 & v3",
        "SMART on FHIR",
        "CDA / C-CDA",
        "REST APIs",
        "Webhooks"
    ];

    return (
        <section className="w-full my-10 lg:my-0 lg:py-16 bg-[#FCFEFF] lg:overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-1 gap-8 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="flex flex-col justify-center relative z-30">
                    <div className="flex items-center justify-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>What We Offer</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-8 text-center max-w-[700px] mx-auto">
                        End-to-End <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare Solutions</span>
                    </h2>

                    <p className="text-gray-500 text-base font-regular leading-relaxed lg:max-w-[900px] mx-auto text-center">
                        From EHR integration to medical billing, our end-to-end services are purpose-built to simplify operations and elevate patient care across every specialty.
                    </p>
                </div>

                {/* Right Visuals */}
                <div className="relative w-full flex justify-center">
                    wf
                </div>
            </div>
        </section>
    );
}
