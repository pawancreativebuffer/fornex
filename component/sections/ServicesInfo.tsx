export default function ServiceInfo() {
    const stats = [
        {
            value: "100+",
            label: "Healthcare Clients Served",
            color: "#60C6B1",
        },
        {
            value: "40%",
            label: "Average Revenue Increase",
            color: "#90c7e5",
        },
        {
            value: "3x",
            label: "Faster Claim Processing",
            color: "#60C6B1",
        },
        {
            value: "99%",
            label: "Client Satisfaction Rate",
            color: "#90c7e5",
        },
        {
            value: "15+",
            label: "Years of Industry Experience",
            color: "#60C6B1",
        }
    ];

    return (
        <section className="w-full relative py-10 lg:pt-15 lg:pb-30 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center items-center lg:flex-nowrap lg:-space-x-15">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center justify-center transition-all duration-700 hover:-translate-y-5 hover:z-10 w-full sm:w-1/2 lg:w-1/5 mb-5 lg:mb-0
                                ${index % 2 !== 0 ? 'lg:translate-y-10' : ''}
                            `}
                        >
                            {/* Hexagon Wrapper */}
                            <div className="relative group w-[280px] h-[310px] md:w-[320px] md:h-[350px] lg:w-[280px] lg:h-[310px] flex items-center justify-center">
                                {/* SVG Rounded Hexagon */}
                                <svg
                                    viewBox="0 0 110 125"
                                    className="absolute pl-[25px] inset-0 w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-visible"
                                >
                                    {/* The path is slightly shrunken and padded to prevent clipping */}
                                    <path
                                        d="M55 5 L95 28 Q100 31 100 37 L100 88 Q100 94 95 97 L55 120 Q50 123 45 120 L5 97 Q0 94 0 88 L0 37 Q0 31 5 28 L45 5 Q50 2 55 5 Z"
                                        fill="white"
                                        stroke={stat.color}
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover:stroke-width-[3]"
                                    />
                                    {/* Subtle Gradient fill on hover */}
                                    <path
                                        d="M55 5 L95 28 Q100 31 100 37 L100 88 Q100 94 95 97 L55 120 Q50 123 45 120 L5 97 Q0 94 0 88 L0 37 Q0 31 5 28 L45 5 Q50 2 55 5 Z"
                                        fill={stat.color}
                                        className="opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    />
                                </svg>

                                {/* Content */}
                                <div className="relative flex flex-col items-center p-10 text-center pointer-events-none">
                                    <span
                                        className="text-[44px] lg:text-[50px] font-bold mb-2 tracking-tighter transition-transform duration-500 group-hover:scale-110 flex items-baseline gap-1"
                                        style={{ color: stat.color }}
                                    >
                                        {stat.value}
                                    </span>
                                    <p className="text-gray-500 text-[14px] font-medium leading-tight uppercase tracking-[0.1em] transition-all duration-300">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Badge */}
                                <div
                                    className="absolute top-8 left-10 md:top-8 md:left-12 lg:top-8 lg:left-8 w-12 h-12 rounded-full flex items-center justify-center text-white text-[14px] font-black shadow-xl z-20 border-[4px] border-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"
                                    style={{ backgroundColor: stat.color }}
                                >
                                    0{index + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}