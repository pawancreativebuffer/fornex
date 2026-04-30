"use client";

export default function Results() {
    const listData = [
        "HIPAA Technical Safeguards: End - to - end encryption, automatic session timeout, audit logging, PHI access controls",
        "Data at Rest: AES - 256 encryption for all PHI stored in mobile device local storage or cloud databases",
        "Data in Transit: TLS 1.3 for all API communications — no exceptions, no unencrypted fallback",
        "Authentication: Multi - factor authentication, biometric login, OAuth 2.0 integration with EHR identity providers",
        "App Store Compliance: Full compliance with Apple App Store and Google Play healthcare application policies",
        "Accessibility: WCAG 2.1 AA compliance for all patient - facing interfaces"
    ]

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col justify-center text-center gap-5">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Healthcare Software Compliance</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] max-w-4xl m-auto">
                        <span className="text-[#60C6B1]">Compliance Architecture</span> for Every App We Build
                    </h1>
                </div>

                {/* Early Access Reporting Section */}
                <div className="mt-12">
                    <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#60C6B1]/30 hover:bg-white/[0.05]">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#60C6B1]" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-7">Every web and mobile application we deliver is built on a compliance-first architecture:</h2>

                        <div className="space-y-2">
                            {listData.map((text, index) => (
                                <div key={index} className="flex items-start gap-5 group/item">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[#60C6B1]/50 flex items-center justify-center bg-[#60C6B1]/10 text-[#60C6B1] transition-transform duration-300 group-hover/item:scale-120">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <p className="text-white/70 text-base leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
