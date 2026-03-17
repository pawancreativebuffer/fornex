import { Brain } from "lucide-react";

export default function HomeBanner() {
    return (


        <div className="w-full max-w-[1400px] mx-auto px-4 flex justify-between gap-10 relative z-50">
            <div className="flex flex-col">
                <h5 className="flex items-center gap-2 mb-5 font-[500] text-[18px] text-[#fff] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
                    <Brain /> AI Innovation for
                </h5>
                <h1 className="text-shadow-lg/20 font-[700] text-[60px] text-[#fff] max-w-[700px] leading-[70px]">Healthcare & Billing Efficiency</h1>
            </div>

            <div>Demo</div>
        </div >
    )
}