import { Building2, TrendingUp, Zap, Star, Award, Users } from 'lucide-react';

export default function TheNumbers() {
    const stats = [
        {
            icon: <Building2 className="w-7 h-7 text-[#60C6B1]" />,
            value: "100+",
            title: "Healthcare Organizations Served",
            description: "Hospitals, clinics, telehealth platforms, billing companies, and healthtech startups across the US and globally."
        },
        {
            icon: <TrendingUp className="w-7 h-7 text-[#90c7e5]" />,
            value: "40%",
            title: "Average Revenue Increase",
            description: "Delivered through AI-powered billing automation, denial management, and revenue cycle optimization for our clients."
        },
        {
            icon: <Zap className="w-7 h-7 text-[#60C6B1]" />,
            value: "3×",
            title: "Faster Claim Processing",
            description: "Achieved through automated claim scrubbing, predictive denial management, and intelligent workflow automation."
        },
        {
            icon: <Star className="w-7 h-7 text-[#90c7e5]" />,
            value: "99%",
            title: "Client Satisfaction Rate",
            description: "Built on long-term relationships, transparent communication, and a genuine commitment to client outcomes."
        },
        {
            icon: <Award className="w-7 h-7 text-[#60C6B1]" />,
            value: "15+",
            title: "Years of Combined Expertise",
            description: "Across healthcare software development, EHR integration, medical billing, AI solutions, and digital health platforms."
        },
        {
            icon: <Users className="w-7 h-7 text-[#90c7e5]" />,
            value: "40+",
            title: "Professionals on Our Team",
            description: "Developers, architects, healthcare domain experts, designers, and marketing specialists — all focused on healthcare."
        }
    ];

    return (
        <section className="py-10 lg:py-15 bg-[#f7fbfe]">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-14">
                    <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-6">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Impact</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                        Results That <span className="bg-gradient-to-r from-[#60C6B1] to-[#90C7E5] bg-clip-text text-transparent block">Speak for Themselves</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#60C6B1]/5 to-transparent rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="mb-6 w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-[#60C6B1]/30 group-hover:bg-white transition-colors relative z-10 shadow-sm">
                                {stat.icon}
                            </div>

                            <h3 className="text-5xl font-extrabold bg-gradient-to-r from-[#1a2b3c] to-[#2D2D2D] bg-clip-text text-transparent mb-3 tracking-tight">
                                {stat.value}
                            </h3>

                            <h4 className="text-xl font-bold text-[#1a2b3c] mb-3 leading-snug">
                                {stat.title}
                            </h4>

                            <p className="text-gray-500 text-base leading-relaxed mt-auto">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}