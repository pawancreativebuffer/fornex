export default function ServiceHowWeDeliver() {
    const steps = [
        {
            id: "01",
            title: "Discovery & Analysis",
            description: "We review your workflows, uncover gaps, and define a clear solution strategy."
        },
        {
            id: "02",
            title: "Design & Architecture",
            description: "We craft scalable, compliant systems with a strong focus on user experience."
        },
        {
            id: "03",
            title: "Development & Testing",
            description: "We build in agile cycles with continuous testing for a stable, high-quality product."
        },
        {
            id: "04",
            title: "Launch & Support",
            description: "We ensure a smooth launch with ongoing support, training, and maintenance."
        }
    ];

    return (
        <section className="w-full relative py-15 bg-[#f7fbfe] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                {/* Header Section */}

                <div className="flex flex-col justify-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-[#60c6b1] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#60c6b1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Process</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-8 text-center max-w-[900px] mx-auto">
                        How We <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Deliver</span> Results
                    </h2>

                    <p className="text-gray-500 text-base font-regular leading-relaxed lg:max-w-[700px] mx-auto text-center">
                        A proven four-step delivery framework that ensures every project launches on time, on budget, and built for scale.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-[#60c6b1]" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center group animate-slide-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Circle Icon/Number */}
                                <div className="relative mb-8 transition-transform duration-500 group-hover:scale-110">
                                    <div className="w-[88px] h-[88px] rounded-full border-2 border-[#60C6B1] flex items-center justify-center bg-white shadow-xl shadow-[#60C6B1]/10 relative z-20 overflow-hidden">
                                        {/* Hover filling effect */}
                                        <div className="absolute inset-0 bg-[#60C6B1] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full opacity-10" />
                                        <span className="text-[#60C6B1] text-2xl font-black tracking-tighter transition-colors duration-300">
                                            {step.id}
                                        </span>
                                    </div>
                                    {/* Pulse effect */}
                                    <div className="absolute inset-0 rounded-full bg-[#60c6b1]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-[22px] font-bold text-[#1a2b3c] mb-3 group-hover:text-[#60C6B1] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-[16px] font-regular leading-relaxed text-center">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}