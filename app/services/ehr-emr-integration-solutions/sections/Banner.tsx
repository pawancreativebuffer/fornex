import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-20 flex flex-col flex-wrap items-center justify-center gap-5 relative z-50">
            <h1 className="text-shadow-lg/20 max-w-[1200px] font-[700] text-[50px] lg:text-[60px] text-[#fff] leading-[60px] lg:leading-[70px] mx-auto text-center">
                EHR and EMR Integration Services: Connecting Your <span className="text-[#60C6B1]">Healthcare Systems</span> Without the Headaches
            </h1>
        </div>
    )
}