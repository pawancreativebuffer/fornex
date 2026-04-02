export default function HomeAutomation() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4">
            <div className="bg-[#000] h-[600px] rounded-[40px] p-6 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex justify-between flex-col overflow-hidden relative">
                <video
                    src="/images/banner.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-70 lg:opacity-100"
                >
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/100 via-transparent to-black"></div>

                <div className="relative z-[1] max-w-[400px]">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Mission</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold leading-[1.3] text-[#fff] mt-4">
                        Built to Make Healthcare Technology Work <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">For Everyone Who Depends On It</span>
                    </h2>
                </div>

                <div className="relative z-[1] max-w-[380px] self-end text-right">
                    <div className="flex items-center justify-end gap-2 text-[#60c6b1] font-medium text-sm lg:text-base">
                        <div className="w-2.5 h-2.5 bg-[#60c6b1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)]" />
                        <span>Our Vision</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold leading-[1.3] text-[#fff] mt-4">
                        A World Where No Patient Waits Longer Because of a <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Software Problem</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}