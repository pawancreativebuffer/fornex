import { ArrowRight } from "lucide-react";

export default function ReadyToBuilt() {
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

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#fff] mb-4 lg:mb-8 text-center max-w-[1100px] mx-auto">
                        Ready to Build Healthcare Software That Actually Works?
                    </h2>

                    <p className="text-white text-base font-regular leading-relaxed lg:max-w-[1100px] mx-auto text-center mb-4">
                        Tell us about your project. Our healthcare technology consultants will review your requirements and provide an honest assessment of scope, timeline, and investment — with no sales pressure and no obligation.
                    </p>
                    <p className="text-white text-base font-regular leading-relaxed lg:max-w-[1100px] mx-auto text-center">
                        Book a free 30-minute consultation at fornexhealth.com/contact<br />
                        Email us at <a href="mailto:info@fornexhealth.com">info@fornexhealth.com</a> | Call <a href="tel:+91-8528835744">+91-8528835744</a> for inquiries

                    </p>
                </div>
            </div>
        </section>
    )
}