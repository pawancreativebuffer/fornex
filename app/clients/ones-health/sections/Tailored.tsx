"use client";

import { Heart, Stethoscope, Users } from "lucide-react";

export default function Tailored() {

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col justify-center text-center gap-5 mb-10">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Dashboards</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] max-w-5xl m-auto">
                        A Tailored Cockpit For <span className="text-[#60C6B1]">Every Role</span>
                    </h1>
                </div>

                <div>tab</div>
            </div>
        </section>
    );
}
