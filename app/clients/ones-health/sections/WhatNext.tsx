import { Smartphone, Activity, Heart, BarChart, Brain, Globe } from 'lucide-react';

export default function WhatNext() {
    const stats = [
        {
            icon: <Smartphone className="w-7 h-7 text-[#60C6B1]" />,
            value: "Mobile Application"
        },
        {
            icon: <Activity className="w-7 h-7 text-[#90c7e5]" />,
            value: "Wearable Integrations"
        },
        {
            icon: <Heart className="w-7 h-7 tex t-[#60C6B1]" />,
            value: "Apple Health Integration"
        },
        {
            icon: <BarChart className="w-7 h-7 text-[#90c7e5]" />,
            value: "Predictive Health Analytics"
        },
        {
            icon: <Brain className="w-7 h-7 text-[#60C6B1]" />,
            value: "Advanced AI Insights"
        },
        {
            icon: <Globe className="w-7 h-7 text-[#90c7e5]" />,
            value: "Global Expansion"
        }
    ];

    return (
        <section className="pt-10 lg:pt-15">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-6">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Future Roadmap</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                        What's <span className="bg-gradient-to-r from-[#60C6B1] to-[#90C7E5] bg-clip-text text-transparent">Next</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#60C6B1]/5 to-transparent rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-[#60C6B1]/30 group-hover:bg-white transition-colors relative z-10 shadow-sm">
                                    {stat.icon}
                                </div>
                                <h3 className="text-[20px] font-semibold bg-gradient-to-r from-[#1a2b3c] to-[#2D2D2D] bg-clip-text text-transparent tracking-relaxed">
                                    {stat.value}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}