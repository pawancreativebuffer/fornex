export default function HomeBlog() {
    return (
        <section className="w-full py-10 lg:py-15">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="w-full flex flex-col items-center text-center gap-6 relative z-10">
                    <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Blogs</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                        Insight &amp; Resources from Our <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare Experts</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}