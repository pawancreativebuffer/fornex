"use client";

import { PlugZap } from "lucide-react";

export default function ContactBanner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-wrap items-center justify-between gap-10 relative z-50">
            <div className="flex flex-col py-20 w-full max-w-[100%] lg:max-w-[600px]">
                <h5 className="flex items-center gap-2 mx-auto lg:mx-0 lg:mb-5 font-[500] text-[18px] text-[#fff] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
                    <PlugZap /> Connect
                </h5>
                <h1 className="text-shadow-lg/20 font-[700] text-[50px] lg:text-[60px] text-[#fff] max-w-[700px] leading-[60px] lg:leading-[70px] mx-auto mt-5 lg:mt-0 text-center lg:text-left lg:mx-0">
                    Get in Touch With Our  <span className="text-[#60C6B1]">Healthcare Experts</span>
                </h1>
            </div>

            <div className="w-full max-w-[480px] mx-auto lg:mx-0 flex items-center justify-center gap-3 relative">
                {/* <img src="/images/contact.png" alt="contact" /> */}
            </div>
        </div >
    )
}