"use client";

import { CheckCircle2 } from "lucide-react";

export default function ProjectSnapshots() {

    const flow = [
        { value: "10+ years of exclusive healthcare technology experience — no generalist agency learning curve" },
        { value: "100+ healthcare organizations served across the US, UK, Canada, and the Middle East" },
        { value: "Dedicated healthcare compliance team — not shared with non-healthcare projects" },
        { value: "Native integration capability with Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, and Kareo" },
        { value: "Full AI/ML capability purpose-built for healthcare data and clinical workflows" },
        { value: "Fixed-price project options available — no surprise overruns" },
        { value: "US-based project management with offshore development efficiency" },
    ];

    return (
        <>
            <section className="relative w-full overflow-hidden py-10 lg:py-15">
                <div className="max-w-[1400px] mx-auto px-4">

                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Why Choose</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                            Why Healthcare Organizations Choose <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">ForNex Health</span>
                        </h2>
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {flow.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-100 rounded-[20px] shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-6 hover:border-[#60c6b1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center justify-center w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
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