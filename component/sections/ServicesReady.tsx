import { ArrowRight } from "lucide-react";

export default function ServiceReady() {
    return (
        <section className="w-full relative py-10 lg:py-20 overflow-hidden bg-[#000]">
            <video
                src="/images/banner.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            >
            </video>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col justify-center relative z-30">
                    <div className="flex items-center justify-center gap-2 text-[#ffcc00] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#ffcc00] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Are You Ready?</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#fff] mb-4 lg:mb-8 text-center max-w-[900px] mx-auto">
                        Ready to Transform Your Healthcare Operations?
                    </h2>

                    <p className="text-white text-base font-regular leading-relaxed lg:max-w-[700px] mx-auto text-center">
                        Join 100+ healthcare organizations across the US who trust TurboMed to power their clinical and financial workflows.
                    </p>

                    <div className="flex justify-center mt-10">
                        <button className="px-5 py-3 rounded-full border border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                            Talk to an Expert
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}