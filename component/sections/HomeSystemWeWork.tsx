'use client';

import { ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeSystemWeWork() {
    const integrations = [
        "FHIR R4 APIs",
        "HL7 v2 & v3",
        "SMART on FHIR",
        "CDA / C-CDA",
        "REST APIs",
        "Webhooks"
    ];

    const partners = [
        {
            name: "/images/epic.png",
            description: "Industry standard for large health systems",
        },
        {
            name: "/images/pcca.png",
            description: "Simple, cloud-based EHR for small practices",
        },
        {
            name: "/images/e-clinic.png",
            description: "Widely used by independent practices",
        },
        {
            name: "/images/nextgen.png",
            description: "Designed for multi-specialty practices",
        },
        {
            name: "/images/oracle.png",
            description: "Enterprise EHR for modern healthcare organizations",
        },
        {
            name: "/images/cerner.png",
            description: "Trusted EHR for hospitals and health networks",
        },
        {
            name: "/images/athenahealth.png",
            description: "Cloud-based EHR for ambulatory care",
        },
        {
            name: "/images/kareo.png",
            description: "Built for small to mid-size practices",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const visibleCards = 6;

    const rowHeight = 234;

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        const step = isMobile ? 1 : 2;
        if (currentIndex + (isMobile ? 3 : visibleCards) < partners.length) {
            setCurrentIndex(prev => prev + step);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        const step = isMobile ? 1 : 2;
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - step);
        } else {
            setCurrentIndex(Math.max(0, partners.length - (isMobile ? 3 : visibleCards)));
        }
    };

    return (
        <section className="w-full my-10 lg:my-0 lg:py-16 bg-[#FCFEFF] lg:overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">

                {/* Left Content */}
                <div className="flex flex-col relative z-30">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Healthcare System We Work With</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-8">
                        <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Integrate</span> with the Systems You Already Use
                    </h2>

                    <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 lg:max-w-[500px]">
                        ForNex Health connects natively with the industry's leading EHR and
                        practice management platforms - no rip-and-replace required.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
                        {integrations.map((item, idx) => (
                            <div
                                key={idx}
                                className="px-5 py-2 bg-[#F0F9F8] text-[#4FA895] rounded-full text-[16px] font-medium border border-[#E0F2F0] hover:bg-[#E0F2F0] transition-all cursor-default select-none shadow-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="flex">
                        <Link href='/contact' className="px-5 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[#fff] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                            Get Free Consultation
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Right Visuals Slider */}
                <div className="relative w-full lg:overflow-hidden h-auto lg:h-[700px] flex items-center">

                    {/* Navigation Arrows (Desktop Only) */}
                    <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
                        <button
                            onClick={prevSlide}
                            className="p-3 cursor-pointer rounded-full bg-white shadow-lg border border-gray-100 text-[#60C6B1] hover:bg-[#60C6B1] hover:text-white transition-all duration-300 group"
                            aria-label="Previous partners"
                        >
                            <ChevronUp size={24} className="group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 cursor-pointer rounded-full bg-white shadow-lg border border-gray-100 text-[#60C6B1] hover:bg-[#60C6B1] hover:text-white transition-all duration-300 group"
                            aria-label="Next partners"
                        >
                            <ChevronDown size={24} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    <div
                        className="w-full lg:pl-5 lg:pr-16 h-full relative"
                    >
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform duration-700 ease-in-out"
                            style={{
                                transform: isMobile ? 'none' : `translateY(-${(currentIndex / 2) * rowHeight}px)`
                            } as any}
                        >
                            {partners.map((partner, idx) => (
                                <div
                                    key={idx}
                                    className={`w-full bg-white/95 backdrop-blur-md p-6 rounded-[1rem] shadow-[0_8px_15px_rgba(0,0,0,0.07)] border border-gray-100 transition-all h-[210px] flex flex-col justify-center items-center`}
                                >
                                    <div className="mb-4 flex items-center justify-center h-[90px] w-full">
                                        <img
                                            src={partner.name}
                                            alt={partner.name}
                                            className="w-auto h-full object-contain transition-all duration-500"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = "https://via.placeholder.com/150?text=" + partner.description.split(' ')[0];
                                            }}
                                        />
                                    </div>
                                    <p className="text-gray-500 text-sm text-center font-regular leading-snug">
                                        {partner.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
