"use client";

import {
    User,
    Layers,
    Smartphone,
    Rocket,
    MapPin,
    DollarSign,
    Cpu,
    Search,
    Diamond,
    Palette,
    Code,
    MessageSquare,
    Binoculars,
    DoorOpen,
    Settings,
} from "lucide-react";

export default function ProjectTimeline() {

    const timeline = [
        {
            title: "Discovery",
            time: "Step 1",
            desc: "Stakeholder interviews, market research, and persona development.",
            color: "#9297a5", // Gray
            icon: Binoculars,
        },
        {
            title: "Architecture",
            time: "Step 2",
            desc: "System design, tech stack, and API infrastructure planning.",
            color: "#3491f7", // Blue
            icon: Layers,
        },
        {
            title: "Design",
            time: "Step 3",
            desc: "Wireframes, high-fidelity prototypes, and design systems.",
            color: "#45c79b", // Green
            icon: Diamond,
        },
        {
            title: "Development",
            time: "Step 4",
            desc: "Full-stack implementation and quality assurance cycles.",
            color: "#f3a126", // Orange
            icon: DoorOpen,
        },
        {
            title: "Beta Launch",
            time: "Step 5",
            desc: "Staged rollout and performance monitoring.",
            color: "#e74c7c", // Pink
            icon: MessageSquare,
        },
        {
            title: "Optimization",
            time: "Step 6",
            desc: "Data-driven improvements and scaling strategies.",
            color: "#8234c5", // Purple
            icon: Settings,
        },
    ]

    const Cube = ({ color, icon: Icon, isTop }: { color: string, icon: any, isTop: boolean }) => {
        // Simple color manipulation for 3D effect
        const baseColor = color;
        const darker = `brightness(0.8)`;
        const lighter = `brightness(1.2)`;

        return (
            <div className="relative w-24 h-28 lg:w-32 lg:h-36 flex items-center justify-center group pointer-events-auto">
                {/* SVG Cube */}
                <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full drop-shadow-xl transition-transform duration-500 group-hover:scale-110 z-[10]">
                    {/* Top Face */}
                    <path
                        d="M50 5 L90 25 L50 45 L10 25 Z"
                        fill={baseColor}
                        style={{ filter: lighter }}
                    />
                    {/* Left Face */}
                    <path
                        d="M10 25 L50 45 L50 95 L10 75 Z"
                        fill={baseColor}
                    />
                    {/* Right Face */}
                    <path
                        d="M50 45 L90 25 L90 75 L50 95 Z"
                        fill={baseColor}
                        style={{ filter: darker }}
                    />

                    {/* Icon Container */}
                    <foreignObject x="25" y="35" width="50" height="50">
                        <div className="w-full h-full flex items-center justify-center">
                            <Icon className="text-white w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                    </foreignObject>
                </svg>

                {/* Connecting Line (Only for Desktop) */}
                <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-300 ${isTop ? 'top-[-20px] h-5' : 'bottom-[-1px] h-5'}`} />
            </div>
        )
    }

    return (
        <>

            <section className="relative w-full overflow-hidden py-10 lg:py-15">
                <div className="max-w-[1400px] mx-auto px-4">

                    {/* Timeline */}
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-center text-[#2D2D2D] mb-10 lg:mb-8">
                        Project <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Timeline - 2025</span>
                    </h2>

                    <div className="relative lg:pt-65 lg:pb-50">
                        {/* Timeline Container */}
                        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:gap-0 z-10 max-w-6xl mx-auto">
                            {timeline.map((item, i) => {
                                const isEven = i % 2 === 0;
                                const textBelow = isEven;

                                return (
                                    <div key={i} className={`flex flex-col items-center w-full lg:w-[200px] relative`}>
                                        {/* Text Block - Above */}
                                        {!textBelow && (
                                            <div className="hidden lg:flex flex-col items-center text-center absolute bottom-[calc(100%+70px)] left-1/2 -translate-x-1/2 w-[240px]">
                                                <h3 className="mb-2 text-[#1a2b3c] font-[600] text-center text-[24px] leading-tight">{item.title}</h3>
                                                <p className="text-gray-500 text-base font-regular leading-relaxed">{item.desc}</p>
                                                <span className="text-[12px] font-semibold text-gray-500 uppercase mt-4 px-3 py-0.5 rounded-full border border-gray-100 bg-white shadow-sm">{item.time}</span>
                                            </div>
                                        )}

                                        {/* The Cube - Desktop (Hidden on Mobile) */}
                                        <div className={`relative z-[10] hidden lg:block ${!isEven && 'lg:-translate-y-10'} transition-transform duration-500`}>
                                            <Cube color={item.color} icon={item.icon} isTop={!textBelow} />
                                        </div>

                                        {/* Text Block - Below */}
                                        {textBelow && (
                                            <div className="hidden lg:flex flex-col items-center text-center absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[240px]">
                                                <span className="text-[12px] font-semibold text-gray-500 uppercase mb-4 px-3 py-0.5 rounded-full border border-gray-100 bg-white shadow-sm">{item.time}</span>
                                                <h3 className="mb-2 text-[#1a2b3c] font-[600] text-center text-[24px] leading-tight">{item.title}</h3>
                                                <p className="text-gray-500 text-base font-regular leading-relaxed">{item.desc}</p>
                                            </div>
                                        )}

                                        {/* Mobile View Layout (Simple Vertical) */}
                                        <div className="flex lg:hidden flex-row items-end gap-6 w-full px-4 mb-8">
                                            <div className="flex-shrink-0">
                                                <Cube color={item.color} icon={item.icon} isTop={false} />
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <span className="text-[12px] w-fit font-semibold text-gray-500 uppercase mb-4 px-3 py-0.5 rounded-full border border-gray-100 bg-white shadow-sm">{item.time}</span>
                                                <h3 className="mb-2 text-[#1a2b3c] font-[600] text-left text-[24px] leading-tight">{item.title}</h3>
                                                <p className="text-gray-500 text-base font-regular leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}