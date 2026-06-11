import { Check, Users, Clock, Stethoscope, Layers } from 'lucide-react';

export default function OurTeam() {
    const stats = [
        { number: "40+", label: "Full-time professionals", icon: Users },
        { number: "15+", label: "Years combined expertise", icon: Clock },
        { number: "12+", label: "Medical specialties served", icon: Stethoscope },
        { number: "5", label: "Core service lines", icon: Layers }
    ];

    const teamComposition = [
        "Software Engineers & Architects",
        "Healthcare Domain Specialists",
        "AI & Automation Engineers",
        "EHR Integration Experts",
        "Compliance & Security Engineers",
        "UI/UX Designers",
        "Project & Delivery Managers",
        "Digital Marketing Specialists"
    ];

    return (
        <section className="py-10 lg:py-15 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[#60C6B1]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-[#90c7e5]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Header Content */}
                <div className="flex flex-col items-center text-center mb-14">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Team</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-7xl mb-5">
                        40+ Healthcare Technology Professionals, <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">One Focus</span>
                    </h2>
                    <p className="text-gray-500 text-base font-regular leading-relaxed text-center max-w-5xl">
                        Our team spans software development, healthcare domain expertise, compliance engineering, AI and machine learning, UI/UX design, project management, and digital marketing - all organized around healthcare as our single vertical.
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* Left Side: Stats Grid (2 blocks per row) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center items-center text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="mb-4 w-12 h-12 rounded-xl bg-[#f7fbfe] flex items-center justify-center border border-[#90c7e5]/30 group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-6 h-6 text-[#60C6B1]" />
                                </div>
                                <h3 className="text-4xl font-bold mb-3 bg-gradient-to-br from-[#1a2b3c] to-[#2D2D2D] bg-clip-text text-transparent">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-500 font-regular leading-relaxed">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Team Composition */}
                    <div className="bg-[#f7fbfe] p-8 rounded-2xl border border-[#90c7e5]/20 h-full flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                        <h3 className="text-3xl font-bold text-[#1a2b3c] mb-8 relative z-10">Team Composition</h3>

                        <div className="grid grid-cols-1 gap-2 relative z-10">
                            {teamComposition.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-0.5 min-w-[24px] w-6 h-6 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center border border-[#60C6B1]/20">
                                        <Check className="w-3.5 h-3.5 text-[#60C6B1] stroke-[4]" />
                                    </div>
                                    <span className="text-gray-500 font-medium text-base leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}