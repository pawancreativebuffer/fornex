"use client";

import { CheckCircle2 } from "lucide-react";

export default function ProjectSnapshots() {

    const flow = [
        { value: "Clinical workflow expertise built over 10 years — we understand how nurses, physicians, and billers actually work" },
        { value: "Dedicated QA team with healthcare-specific testing protocols including PHI data flow testing and penetration testing" },
        { value: "App Store submission support — we handle the healthcare-specific review process for both Apple and Google" },
        { value: "Post-launch analytics and optimization — we monitor engagement metrics, crash rates, and UX friction points and iterate continuously" },
        { value: "Regulatory pathway support for teams pursuing FDA clearance for Software as a Medical Device (SaMD)" }
    ];

    return (
        <>
            <section className="relative w-full overflow-hidden py-10 lg:py-15">
                <div className="max-w-[1400px] mx-auto px-4">

                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Why Choose Us</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-5xl">
                            What Sets Our <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare App</span> Development Apart
                        </h2>
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {flow.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-100 rounded-[20px] shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-6 hover:border-[#60c6b1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center justify-center w-full sm:w-[calc(50%-8px)] lg:w-[calc(33%-12px)]"
                                >
                                    <div className="mb-4">
                                        <span className="bg-[#60c6b1] w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                                            <CheckCircle2 size={24} className="text-white" />
                                        </span>
                                    </div>
                                    <p className="text-[17px] font-medium text-[#2D2D2D] leading-relaxed">
                                        {item.value}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}