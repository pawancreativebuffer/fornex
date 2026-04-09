"use client";

import { Globe } from "lucide-react";

export default function BlogBanner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-wrap items-center justify-between gap-10 relative z-50">
            <div className="flex flex-col pt-20 lg:py-20 w-full max-w-[100%] lg:max-w-[600px]">
                <h5 className="flex items-center gap-2 mx-auto lg:mx-0 lg:mb-5 font-[500] text-[18px] text-[#fff] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
                    <Globe /> Blog
                </h5>
                <h1 className="text-shadow-lg/20 font-[700] text-[50px] lg:text-[60px] text-[#fff] max-w-[700px] leading-[60px] lg:leading-[70px] mx-auto mt-5 lg:mt-0 text-center lg:text-left lg:mx-0">
                    ForNex Health <span className="text-[#60C6B1]">Blog & Insights</span>
                </h1>
            </div>

            <div className="w-full max-w-[500px] h-[460px] mx-auto lg:mx-0 relative flex items-end justify-center">
                {/* Visual Glow Layer */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-[#60C6B1]/10 blur-[100px] rounded-full -z-10" />

                {/* Glass Overlay (Half-cut circle touching bottom) */}
                <div className="absolute bottom-0 left-0 w-full h-[90%] bg-white/[0.03] backdrop-blur-[15px] border border-white/20 border-b-0 rounded-t-full z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-start overflow-hidden">
                    {/* Reflection Highlight */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full shadow-[0_0_15px_white]" />

                    {/* Optional Floating Elements or Micro-Animations */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse blur-sm" />
                    <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#60C6B1]/50 rounded-full animate-bounce delay-1000 blur-sm" />

                    {/* Support Content (Optional decoration) */}
                    <div className="relative z-20 flex flex-col items-center gap-4 text-center px-6 pt-15">
                        {/* <img src="/images/contact.png" alt="contact" /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}