"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function ServicesBanner() {
    return (
        <div className="max-w-[1400px] mx-auto px-4 w-full pt-20 pb-24 text-center relative z-10 flex flex-col justify-center items-center gap-6">
            <h5 className="flex items-center justify-center gap-2 mx-auto font-[500] text-[18px] text-[#fff] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
                <BookOpen /> Our Story
            </h5>
            <h1 className="text-shadow-lg/20 font-[700] text-[50px] lg:text-[60px] text-[#fff] max-w-7xl leading-[60px] lg:leading-[70px] mx-auto text-center">
                We Built Fornex Health Because <span className="text-[#60C6B1]">Healthcare Deserves Better Technology</span>
            </h1>
            <p className="text-white/70 text-base font-regular leading-relaxed max-w-6xl mx-auto">
                We are not a general software agency that took on a healthcare client. We are a healthcare technology company - exclusively. Every system we design, every integration we build, every team member we hire is focused on one industry healthcare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[#fff] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium"
                >
                    Meet Our Team
                </Link> */}
                <Link
                    href="/clients"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#fff] text-[#fff] bg-transparent hover:bg-[#60C6B1] hover:text-[#fff] hover:border-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium"
                >
                    See Our Work
                </Link>
            </div>
        </div >
    )
}