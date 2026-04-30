'use client';
import { CheckCircle2 } from 'lucide-react';

export default function Collage() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>


            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <div className="lg:col-span-4 animate-slide-right">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#fff] max-w-[1400px]">
                            The Real Cost of <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Disconnected</span> Healthcare Systems
                        </h2>
                    </div>

                    <div className="lg:col-span-8 animate-slide-left">
                        <p className="text-white/70 text-base font-regular leading-relaxed mb-4 lg:mb-8">
                            A 2023 CAQH Index report estimated that the US healthcare industry wastes over $25 billion annually on administrative inefficiencies caused by non-interoperable systems. These are not abstract numbers — they show up in your operations every day:
                        </p>
                        <ul className="space-y-3 text-white/70 text-base font-regular leading-relaxed mb-4 lg:mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#60c6b1] shrink-0 mt-0.5" />
                                <span>Clinicians spending 30 to 45 minutes per patient on manual documentation and data re-entry</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#60c6b1] shrink-0 mt-0.5" />
                                <span>Claim denial rates of 15 to 25 percent in organizations without automated billing integration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#60c6b1] shrink-0 mt-0.5" />
                                <span>Delayed diagnoses caused by lab results not appearing in the treating clinician's EHR</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#60c6b1] shrink-0 mt-0.5" />
                                <span>Duplicate testing ordered because specialists cannot access primary care records</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#60c6b1] shrink-0 mt-0.5" />
                                <span>Compliance exposure from manually transferred PHI that bypasses secure channels</span>
                            </li>
                        </ul>
                        <p className="text-white/70 text-base font-regular leading-relaxed">
                            Every one of these problems is solvable with the right integration architecture. That is what we build.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
