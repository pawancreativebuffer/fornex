"use client";
import { ArrowRight } from 'lucide-react';

const specialtiesRow1 = [
    { name: "Physical Therapy", label: "Rehab", image: '/images/physical-therapy.svg' },
    { name: "Cardiology", label: "Heart Care", image: '/images/cardiology.svg' },
    { name: "Orthopedics", label: "Bone & Joint", image: '/images/orthopedics.svg' },
    { name: "Pediatrics", label: "Child Care", image: '/images/pediatrics.svg' },
    { name: "Dentistry", label: "Oral Surgery", image: '/images/dentistry.svg' },
];

const specialtiesRow2 = [
    { name: "Radiology", label: "Imaging", image: '/images/radiology.svg' },
    { name: "Dermatology", label: "Skin Care", image: '/images/dermatology.svg' },
    { name: "Oncology", label: "Cancer Care", image: '/images/oncology.svg' },
    { name: "Psychiatry", label: "Mental Health", image: '/images/psychiatry.svg' },
    { name: "Urgent Care", label: "Emergency Medicine", image: '/images/urgent-care.svg' },
];

export default function HomeBilingAndSoftware() {
    return (
        <section className="relative w-full bg-[#FCFEFF] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-6 text-left relative z-10">
                        <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base">
                            <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Specialty-Specific Solutions</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[1100px]">
                            Billing & Software Built for <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Your Specialty</span>
                        </h2>

                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Medical billing codes, compliance rules, and EHR workflows vary dramatically by specialty. We've built expertise across 12+ medical fields to ensure your practice runs with precision.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <button className="px-5 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[transparent] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                                Explore Our Specialties
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Double Sliding Cards */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-8 relative">

                        {/* Row 1: Left to Right */}
                        <div className="flex overflow-hidden relative group">
                            <div className="flex gap-6 animate-slide-right whitespace-nowrap py-4">
                                {[...specialtiesRow1, ...specialtiesRow1].map((specialty, idx) => (
                                    <div
                                        key={idx}
                                        className="inline-flex flex-col items-center justify-center min-w-[200px] h-[220px] bg-white border border-[#90C7E5]/20 rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(144,199,229,0.1)] hover:shadow-[0_20px_40px_rgba(144,199,229,0.2)] hover:border-[#60C6B1]/40 transition-all duration-300 group/card"
                                    >
                                        <div className="w-20 h-20 bg-[#F0F9FB] rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden">
                                            {/* Image/Icon Placeholder */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#60C6B1]/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                            <img src={specialty.image} alt={specialty.name} className="w-[50px] h-[50px] object-contain" />
                                        </div>
                                        <h3 className="text-[#1a2b3c] font-[600] text-center text-lg leading-tight mb-1">
                                            {specialty.name}
                                        </h3>
                                        <span className="text-[#64748B] text-sm font-medium">
                                            {specialty.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2: Right to Left */}
                        <div className="flex overflow-hidden relative group">
                            <div className="flex gap-6 animate-slide-left whitespace-nowrap py-4">
                                {[...specialtiesRow2, ...specialtiesRow2].map((specialty, idx) => (
                                    <div
                                        key={idx}
                                        className="inline-flex flex-col items-center justify-center min-w-[200px] h-[220px] bg-white border border-[#90C7E5]/20 rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(144,199,229,0.1)] hover:shadow-[0_20px_40px_rgba(144,199,229,0.2)] hover:border-[#60C6B1]/40 transition-all duration-300 group/card"
                                    >
                                        <div className="w-20 h-20 bg-[#F0F9FB] rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden">
                                            {/* Image/Icon Placeholder */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#90C7E5]/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                            <img src={specialty.image} alt={specialty.name} className="w-[50px] h-[50px] object-contain" />
                                        </div>
                                        <h3 className="text-[#1a2b3c] font-[600] text-center text-lg leading-tight mb-1">
                                            {specialty.name}
                                        </h3>
                                        <span className="text-[#64748B] text-sm font-medium">
                                            {specialty.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Faded edges effect */}
                        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#FCFEFF] to-transparent z-20 pointer-events-none" />
                        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#FCFEFF] to-transparent z-20 pointer-events-none" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideRight {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
                @keyframes slideLeft {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-slide-right {
                    animation: slideRight 40s linear infinite;
                }
                .animate-slide-left {
                    animation: slideLeft 40s linear infinite;
                }
                .animate-slide-right:hover, .animate-slide-left:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}