'use client';

export default function Collage() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>


            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="animate-slide-right">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#fff] max-w-[1400px]">
                            Why Generic Software Is <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Costing Healthcare Organizations</span> Money
                        </h2>
                    </div>

                    <div className="animate-slide-left">
                        <p className="text-white/70 text-base font-regular leading-relaxed mb-4 lg:mb-8">
                            Every year, hospitals and clinics spend millions trying to make generic software fit clinical realities it was never designed for. The result? Fragmented workflows. Staff spending hours on manual data entry. Claim denials from poor billing integration. Compliance gaps that create legal exposure. Patient experience that falls short.
                        </p>
                        <p className="text-white/70 text-base font-regular leading-relaxed">
                            The organizations that are pulling ahead are the ones investing in purpose-built healthcare software - platforms that integrate with their existing systems, automate the right workflows, and keep patient data safe by design. That is exactly what ForNex Health delivers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
