"use client";

import { Heart, Stethoscope, Users } from "lucide-react";

export default function ThreePortal() {
    const potential = [
        {
            title: "Member Portal",
            listings: [
                "Health dashboard",
                "Lab uploads",
                "AI recommendations",
                "Progress tracking",
                "Health goals"
            ],
            color: "#60C6B1",
            icon: Heart,
            num: "01"
        },
        {
            title: "Health Coach Portal",
            listings: [
                "Client management",
                "Health profile review",
                "Biomarker analysis",
                "Plan adjustments",
                "Communication tools"
            ],
            color: "#90c7e5",
            icon: Stethoscope,
            num: "02"
        },
        {
            title: "Admin Platform",
            listings: [
                "User management",
                "Subscription oversight",
                "Reporting",
                "Analytics",
                "Content administration"
            ],
            color: "#ff9900",
            icon: Users,
            num: "03"
        }
    ]

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col justify-center text-center gap-5 mb-10">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>User Ecosystem</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] max-w-5xl m-auto">
                        Three Portals, <span className="text-[#60C6B1]">One Platform</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pb-15">
                    {potential.map((card, index) => (
                        <div key={index} className="relative flex flex-col items-center group">
                            {/* Card Content inspired by Ref Image 2 */}
                            <div className="w-full h-full bg-white/[0.03] border-2 rounded-3xl pt-12 pb-24 px-8 text-center transition-all duration-500 group-hover:bg-white/[0.06] group-hover:-translate-y-3" style={{ borderColor: `${card.color}40` }}>
                                <div className="mb-8 inline-flex p-5 rounded-full bg-white/[0.05] group-hover:scale-110 transition-transform duration-500 shadow-xl" style={{ color: card.color, border: `1px solid ${card.color}30` }}>
                                    <card.icon size={36} />
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute -left-4 top-1/2 w-8 h-[2px] opacity-30" style={{ backgroundColor: card.color }}></div>
                                    <div className="absolute -right-4 top-1/2 w-8 h-[2px] opacity-30" style={{ backgroundColor: card.color }}></div>
                                    <h3 className="text-[22px] font-bold uppercase" style={{ color: card.color }}>{card.title}</h3>
                                </div>
                                <ul className="flex flex-col gap-2 text-white/70 text-base leading-relaxed group-hover:text-white transition-colors duration-300 text-left">
                                    {card.listings.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: card.color }}></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Enhanced Decorative Ribbon/Number from Ref Image 2 */}
                            <div className="absolute -bottom-10 flex items-center justify-center w-full">
                                <div className="relative w-28 h-28 flex items-center justify-center">
                                    {/* The X-Shape Ribbon with "Folded" look */}
                                    <div className="absolute w-32 h-10 rotate-[25deg] rounded-sm shadow-2xl transition-transform duration-500 group-hover:rotate-[35deg]" style={{ backgroundColor: card.color }}></div>
                                    <div className="absolute w-32 h-10 -rotate-[25deg] rounded-sm shadow-2xl transition-transform duration-500 group-hover:-rotate-[35deg]" style={{ backgroundColor: card.color, filter: 'brightness(0.8)' }}></div>

                                    {/* Inner Circle for Number */}
                                    <div className="relative w-16 h-16 rounded-full bg-[#1a2b3c] border-2 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110" style={{ borderColor: card.color }}>
                                        <span className="text-white font-black text-2xl tracking-tighter">
                                            {card.num}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
