import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-20 flex flex-col flex-wrap items-center justify-center gap-5 relative z-50">
            <h1 className="text-shadow-lg/20 max-w-[1200px] font-[700] text-[50px] lg:text-[60px] text-[#fff] leading-[60px] lg:leading-[70px] mx-auto text-center">
                How ForNex Health Built a <span className="text-[#60C6B1]">0-Second MRI Safety Check</span> for Cardiac Device Patients
            </h1>
            <p className="text-gray-400 max-w-[1200px] text-[16px] font-regular leading-relaxed text-center">
                MRI Logic needed more than a developer — it needed a clinical technology team that understood the life-critical stakes of cardiac device safety. ForNex Health designed and delivered the full product, from discovery to app store, in 2025.
            </p>
            <div className="flex w-full justify-center">
                <Link href='/contact' className="px-5 py-3 mx-auto rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[transparent] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                    Get in Touch
                    <ChevronRight size={20} />
                </Link>
            </div>
        </div>
    )
}