'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Healthcare Software Development",
        description: "Custom-built medical software solutions designed to digitize patient care, streamline clinical operations, and ensure data security across all platforms.",
        image: "/images/one.jpg",
    },
    {
        id: 2,
        title: "EHR / EMR Integration & Development",
        description: "Expert integration services connecting your practice with leading Electronic Health Records systems for seamless data exchange and interoperability.",
        image: "/images/two.jpg",
    },
    {
        id: 3,
        title: "Website & Mobile App Development",
        description: "Creating intuitive, HIPAA-compliant patient portals, telehealth platforms, and mobile apps that enhance user engagement and clinical efficiency.",
        image: "/images/three.jpg",
    },
    {
        id: 4,
        title: "Medical Billing & Revenue Cycle Management",
        description: "Optimizing your revenue cycle with advanced billing software and management tools that reduce denials and accelerate payment cycles.",
        image: "/images/four.jpg",
    },
    {
        id: 5,
        title: "Growth & Digital Marketing Solutions",
        description: "Data-driven marketing strategies specifically tailored for healthcare providers to grow their patient base and strengthen their digital presence.",
        image: "/images/five.png",
    },
];

export default function HomeMajorServices() {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className="w-full px-4 lg:px-2 my-10">
            <div className="flex flex-col md:flex-row w-full h-[700px] md:h-[500px] gap-2">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`relative overflow-hidden rounded-[2rem] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer group ${activeIndex === index ? 'flex-[12] md:flex-[5]' : 'flex-[1.5] md:flex-[1]'
                            }`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                    >
                        {/* Main Image Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: `url(${service.image})` }}
                        />

                        {/* Overlay with dynamic transparency */}
                        <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index
                            ? 'bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-100'
                            : 'bg-black/70 group-hover:bg-black/70'
                            }`} />

                        {/* Content Layout */}
                        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                            {/* Active Content */}
                            <div className={`transition-all duration-700 delay-100 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                                }`}>
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-regular text-white mb-4 tracking-wider uppercase">
                                    Service 0{index + 1}
                                </span>
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight max-w-md">
                                    {service.title}
                                </h3>
                                <p className="text-white/80 text-sm md:text-base max-w-xl mb-8 leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                                <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                                    LEARN MORE <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Collapsed Content (Vertical Title) */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeIndex === index ? 'opacity-0' : 'opacity-100'
                                }`}>
                                <div className="relative h-full w-full flex items-center justify-center">
                                    <h3 className="text-white text-lg md:text-xl font-bold text-center -rotate-90 origin-center tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Static Index Number for Collapsed State */}
                            <div className={`absolute top-6 left-6 md:top-8 md:left-8 transition-all duration-500 ${activeIndex === index ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                                }`}>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-xl">
                                    <span className="text-white font-mono text-base md:text-lg font-[400]">0{index + 1}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

