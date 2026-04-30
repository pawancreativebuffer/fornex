"use client";

import { channel } from "diagnostics_channel";

export default function Results() {
    const listData = [
        "New patient acquisition volume by channel and campaign",
        "Cost per new patient acquisition by service line",
        "Appointment booking rate from organic and paid traffic",
        "Search ranking positions for target service and condition keywords",
        "Online review volume, average rating, and response rate",
        "Patient lifetime value trends by acquisition source"

    ]

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col justify-center text-center gap-5">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Reporting</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] max-w-5xl m-auto">
                        Our Healthcare  <span className="text-[#60C6B1]">Marketing Reporting</span>
                    </h1>
                </div>

                {/* Early Access Reporting Section */}
                <div className="my-10">
                    <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#60C6B1]/30 hover:bg-white/[0.05]">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#60C6B1]" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-7">We track what actually matters for healthcare marketing - not vanity metrics:</h2>

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

                <p className="text-[#60C6B1] text-[24px] font-semibold leading-relaxed m-auto text-center max-w-[1100px]">
                    Monthly strategy reviews translate these metrics into specific budget allocation recommendations and campaign optimizations for the month ahead.
                </p>
            </div>
        </section>
    );
}
