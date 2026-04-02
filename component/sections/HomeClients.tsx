'use client';

import { Stethoscope, UserRound } from 'lucide-react';

const logos = [
    { src: '/images/insta_brans.png', alt: 'insta_brans' },
    { src: '/images/mri.png', alt: 'mri' },
    { src: '/images/oasis.png', alt: 'oasis' },
    { src: '/images/super-school.png', alt: 'super-school' },
    { src: '/images/carevation.png', alt: 'carevation' },
    { src: '/images/apollo.png', alt: 'apollo' },
    { src: '/images/cardiac.png', alt: 'cardiac' },
];

export default function HomeClients() {
    return (
        <section className="relative w-full overflow-hidden my-10 lg:my-15">
            {/* Background Decorative Icons */}
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 opacity-[0.03] text-[#90c7e5] pointer-events-none animate-float hidden lg:block">
                <UserRound size={600} strokeWidth={0.5} />
            </div>

            <div className="absolute -bottom-20 -left-20 opacity-[0.02] text-[#90c7e5] pointer-events-none rotate-12">
                <Stethoscope size={400} strokeWidth={0.5} />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Global Network</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[900px]">
                        Trusted by Leading <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare Organizations</span> Across the US
                    </h2>
                </div>

                {/* Infinite Marquee Container */}
                <div className="relative group select-none">
                    {/* Gradient Overlays for smooth entry/exit */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#fff] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#fff] to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden">
                        <div className="flex items-center gap-5 md:gap-10 py-8 animate-marquee">
                            {/* Duplicate logos list twice for smooth scroll */}
                            {[...logos, ...logos].map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 flex items-center justify-center p-6 md:p-8 rounded-3xl glass-card w-[220px] md:w-[280px] h-[100px] md:h-[130px] group/card hover:shadow-2xl hover:shadow-[#90c7e5]/20 hover:-translate-y-1.5 transition-all duration-500 ease-out"
                                >
                                    <div className="relative group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 transform group-hover/card:scale-105">
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="w-auto h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(-50%) translateX(0); }
                    50% { transform: translateY(-55%) translateX(-10px); }
                }
                .animate-float {
                    animation: float 10s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
