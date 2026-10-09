import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-20 flex flex-col flex-wrap items-center justify-center gap-6 relative z-50">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#60C6B1]/10 border border-[#60C6B1]/30 text-[#60C6B1] text-xs md:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#60C6B1] animate-pulse" />
                Case Study &bull; Data Privacy & Compliance
            </div>
            <h1 className="text-shadow-lg/20 max-w-[1200px] font-[700] text-[42px] sm:text-[50px] lg:text-[60px] text-[#fff] leading-[50px] sm:leading-[60px] lg:leading-[70px] mx-auto text-center">
                De-identifying <span className="text-[#60C6B1]">25,000 Patient Records</span> for Analytics and Research
            </h1>
            <p className="text-gray-300 italic max-w-[1000px] text-[16px] sm:text-[18px] lg:text-[19px] font-normal leading-relaxed text-center">
                HIPAA Safe Harbor de-identification, clinical text redaction and data restructuring across 350GB of healthcare data
            </p>
            <div className="flex w-full justify-center mt-2">
                <Link href='/contact' className="px-6 py-3.5 mx-auto rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-transparent hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium shadow-lg shadow-[#60C6B1]/20">
                    Get in Touch
                    <ChevronRight size={20} />
                </Link>
            </div>
        </div>
    )
}