"use client";

import { Handshake } from "lucide-react";

export default function ClientsBanner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-wrap items-center justify-between gap-10 relative z-50">
            <div className="flex flex-col pt-20 lg:py-20 w-full max-w-[100%] lg:max-w-[600px]">
                <h5 className="flex items-center gap-2 mx-auto lg:mx-0 lg:mb-5 font-[500] text-[18px] text-[#fff] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
                    <Handshake /> Partnerships
                </h5>
                <h1 className="text-shadow-lg/20 font-[700] text-[50px] lg:text-[60px] text-[#fff] max-w-[700px] leading-[60px] lg:leading-[70px] mx-auto mt-5 lg:mt-0 text-center lg:text-left lg:mx-0">
                    Our Valued Healthcare  <span className="text-[#60C6B1]">Clients & Partners</span>
                </h1>
            </div>

            <div className="w-full max-w-[600px] h-full flex flex-col justify-center items-center relative py-10 lg:py-0">

            </div>
        </div >
    )
}