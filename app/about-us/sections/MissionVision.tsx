export default function MissionVision() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 my-10 lg:my-15">
            <div className="rounded-[40px] overflow-hidden relative flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 min-h-[600px]">
                {/* Background Video */}
                <video
                    src="/images/banner.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                ></video>

                {/* Background Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black/50 z-0"></div>

                {/* Vision side (Left) */}
                <div className="relative z-10 w-full lg:w-1/2 p-8 lg:p-14 xl:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="flex items-center gap-2 text-[#60c6b1] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#60c6b1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)]" />
                        <span>Our Vision</span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-semibold leading-[1.3] text-[#fff]">
                        A World Where No Patient Waits Longer Because of a <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Software Problem</span>
                    </h2>

                    <p className="text-gray-200 mt-6 text-base leading-relaxed">
                        Every delay in care, every denied claim, every missed appointment, every fragmented patient record — these are technology failures with human consequences. Our vision is a healthcare system where technology is invisible because it works, where providers trust their software, and where patients receive the care they need without friction.
                    </p>

                    <div className="mt-10 lg:mt-auto self-end">
                        {/* Lightbulb Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#60c6b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                        </svg>
                    </div>
                </div>

                {/* Mission side (Right) */}
                <div className="relative z-10 w-full lg:w-1/2 p-8 lg:p-14 xl:p-16 flex flex-col">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Mission</span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-semibold leading-[1.3] text-[#fff]">
                        Built to Make Healthcare Technology Work <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">For Everyone Who Depends On It</span>
                    </h2>

                    <p className="text-gray-200 mt-6 text-base leading-relaxed">
                        Providers should not spend their days fighting software. Billing teams should not manually process claims that a system should handle automatically. Patients should not wait longer because a software problem slowed down the people caring for them. We build technology that removes these obstacles — so everyone in the healthcare ecosystem can focus on what they are actually there to do.
                    </p>

                    <div className="mt-10 lg:mt-auto self-end">
                        {/* Chart Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#90c7e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="8" y1="17" x2="8" y2="13" />
                            <line x1="12" y1="17" x2="12" y2="9" />
                            <line x1="16" y1="17" x2="16" y2="11" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}