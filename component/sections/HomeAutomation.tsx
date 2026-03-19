export default function HomeAutomation() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 my-10">
            <div className="bg-white h-[600px] rounded-[40px] p-6 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex justify-between flex-col overflow-hidden relative">
                <iframe
                    className="absolute h-full w-full scale-[1.2] top-[-10px] left-0"
                    src="https://app.spline.design/file/cb764323-8ee7-44af-8cd6-671fbc8f6c39?view=preview"
                    width="100%"
                    height="100%">
                </iframe>

                <div className="relative z-[1] max-w-[450px]">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Mission</span>
                    </div>
                    <h2 className="text-2xl font-medium leading-[1.5] text-[#fff] mt-5">
                        A World Where No Patient Waits Longer Because of a <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Software Problem</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}