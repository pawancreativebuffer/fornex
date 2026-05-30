import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Ready() {
    return (
        <section className="w-full relative pt-10 lg:pt-15 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col justify-center relative z-30">
                    <div className="flex items-center justify-center gap-2 text-[#90c7e5] font-medium text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Are You Ready?</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-4 lg:mb-8 text-center max-w-6xl mx-auto">
                        Ready to Work With a Team That Actually <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Understands Healthcare?</span>
                    </h2>

                    <p className="text-gray-500 text-base font-regular leading-relaxed max-w-5xl mx-auto text-center">
                        Whether you are a hospital modernizing legacy systems, a startup building your first compliant platform, or a billing company looking to automate your revenue cycle — we have done it before, and we can do it for you.
                    </p>

                    <div className="flex justify-center mt-10">
                        <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[#fff] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                            Book a Free Consultation
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}