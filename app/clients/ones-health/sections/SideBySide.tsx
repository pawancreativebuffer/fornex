import { Check, Users, Clock, Stethoscope, Layers, TimerReset, CircleX } from 'lucide-react';

export default function OurTeam() {

    const teamComposition = [
        "Unified health profiles",
        "AI-driven recommendations",
        "Automated analysis",
        "Personalized plans",
        "Continuous optimization"
    ];

    const teamCompositionbefore = [
        "Generic wellness advice",
        "Fragmented data",
        "Manual analysis",
        "Limited personalization",
        "Poor progress visibility"
    ];

    return (
        <section className="py-10 lg:py-15 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[#60C6B1]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-[#90c7e5]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Header Content */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Before vs After</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-7xl">
                        The Transformation, <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Side By Side</span>
                    </h2>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                    {/* Left Side: Stats Grid (2 blocks per row) */}
                    <div className="bg-[#f7fbfe] p-8 rounded-2xl border border-[#90c7e5]/20 h-full flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                        <p className='text-[18px] font-semibold mb-2 text-[#60c6b1]'>Before Ones Health</p>
                        <h3 className="text-3xl font-bold text-[#1a2b3c] mb-8 relative z-10">A Disconnected Experience</h3>

                        <div className="grid grid-cols-1 gap-2 relative z-10">
                            {teamCompositionbefore.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-0.5 min-w-[24px] w-6 h-6 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center border border-[#60C6B1]/20">
                                        <CircleX className="w-3.5 h-3.5 text-[#c66060] stroke-[4]" />
                                    </div>
                                    <span className="text-gray-500 font-medium text-base leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Team Composition */}
                    <div className="bg-[#f7fbfe] p-8 rounded-2xl border border-[#90c7e5]/20 h-full flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                        <p className='text-[18px] font-semibold mb-2 text-[#60c6b1]'>After Ones Health</p>
                        <h3 className="text-3xl font-bold text-[#1a2b3c] mb-8 relative z-10">A Unified, Intelligent Platform</h3>

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