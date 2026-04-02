export default function HomeFaq() {
    return (
        <section className="w-full bg-[#f7fbfe] py-10 lg:py-15">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Can' find what you are looking for?</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[850px]">
                        Frequently Asked <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Questions</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}