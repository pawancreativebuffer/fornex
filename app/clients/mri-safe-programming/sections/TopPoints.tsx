import { Activity, Stethoscope, Microscope, HeartPulse } from 'lucide-react';

export default function TopPoints() {
    const points = [
        {
            title: "12 Months",
            description: "Zero to beta launch",
            icon: Activity,
            featured: true
        },
        {
            title: "5 Modules",
            description: "Built & delivered",
            icon: Stethoscope,
            featured: false
        },
        {
            title: "2 Platforms",
            description: "iOS & Android",
            icon: Microscope,
            featured: false
        },
        {
            title: "1 CareSpace",
            description: "Unified care workspace",
            icon: HeartPulse,
            featured: false
        }
    ];

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                    {/* Left Column: Heading & Intro */}
                    <div className="max-w-xl animate-slide-right">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-4 lg:mb-8">
                            From Idea to <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Launch</span>
                        </h2>
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 lg:max-w-[500px]">
                            At Fornex, our core pillars guide everything we do. They shape our protocols, decisions, and the way we build our safety solutions.
                        </p>
                    </div>

                    {/* Right Column: Grid of Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 animate-slide-left">

                        {points.map((point, index) => (
                            <div
                                key={index}
                                className={`
                                    border border-gray-100 rounded-[20px] p-6 flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500
                                    ${point.featured ? 'bg-gradient-to-r from-[#60c6b1] to-[#90c7e5]' : 'bg-[#fff]'}
                                `}
                            >
                                <div>
                                    <div className={`mb-4 inline-flex items-center justify-center rounded-2xl`}>
                                        <point.icon className={`w-10 h-10 ${point.featured ? 'text-white' : 'text-[#FF4D00]'}`} />
                                    </div>
                                </div>
                                <h2 className={`text-[22px] lg:text-[24px] font-bold ${point.featured ? 'text-white' : 'text-[#1a2b3c]'}`}>
                                    {point.title}
                                </h2>
                                <p className={`text-base leading-relaxed ${point.featured ? 'text-white' : 'text-[#64748B]'}`}>
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}