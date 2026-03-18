export default function HomeSmartHealthcare() {
    const stats = [
        {
            number: "100+",
            description: "Healthcare Providers Served",
        },
        {
            number: "40%",
            description: "Average Revenue Increase",
        },
        {
            number: "3X",
            description: "Faster Claim Processing",
        },
        {
            number: "99%",
            description: "User Satisfaction Rate",
        }
    ];

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 my-10">
            <div className="bg-white rounded-[40px] p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col lg:flex-row items-center gap-12 min-h-[600px] overflow-hidden relative">

                {/* Left Side: Content & Stats */}
                <div className="w-full lg:w-1/2 space-y-8 relative z-[10]">
                    {/* Badge */}
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Health support</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                        Understand <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">and improve your health</span>
                    </h2>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 pt-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-3 group border-l-2 border-gray-100 pl-6 hover:border-[#60c6b1] transition-colors duration-300">
                                <div className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
                                    {stat.number}
                                </div>
                                <p className="text-gray-500 text-sm lg:text-base font-medium leading-snug">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="relative lg:absolute scale-125 h-[400px] lg:h-full w-full">
                    <iframe
                        className="absolute h-full w-full"
                        src="https://app.spline.design/file/5030c9d9-2853-4aba-8a86-ee31fba0afd9?view=preview"
                        width="100%"
                        height="100%">
                    </iframe>
                </div>
            </div>
        </section>
    );
}
