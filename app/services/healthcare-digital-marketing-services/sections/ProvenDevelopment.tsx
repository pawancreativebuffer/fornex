'use client';

import { useState, useEffect, useRef } from 'react';
import {
    ChevronRight,
    ShieldCheck,
    Star,
    Mail,
    TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: "Healthcare Reputation Management",
        detail: "Online reviews heavily influence patient decisions. We help you consistently generate authentic positive reviews across key platforms and manage negative feedback with a fully HIPAA-compliant response process.",
        icon: Star,
        largeIcon: Star,
        color: "#60C6B1"
    },
    {
        id: 2,
        title: "Email Marketing & Patient Retention",
        detail: "Retaining patients is more cost-effective than acquiring new ones. We build HIPAA-compliant email campaigns including reminders, education, and updates to keep patients engaged and improve long-term value.",
        icon: Mail,
        largeIcon: Mail,
        color: "#90c7e5"
    },
    {
        id: 3,
        title: "Website Conversion Optimization",
        detail: "We analyze patient behavior using heatmaps and testing to identify drop-offs, then optimize your website to increase appointment bookings without increasing marketing spend.",
        icon: TrendingUp,
        largeIcon: TrendingUp,
        color: "#ff9900"
    },
    {
        id: 4,
        title: "HIPAA-Compliant Marketing Systems",
        detail: "We audit your analytics, tracking tools, and integrations to ensure compliance, reduce risk, and protect patient data while maintaining effective marketing performance.",
        icon: ShieldCheck,
        largeIcon: ShieldCheck,
        color: "#E3ACC8"
    }
];

export default function ProvenDevelopment() {
    const [activeService, setActiveService] = useState(services[0]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isManualScroll = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || isManualScroll.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isDesktop = window.innerWidth >= 1360;

            if (!isDesktop) return;

            // The section starts being "pinned" when its top reaches 0
            // and stays pinned until its bottom reaches windowHeight
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                const scrollRange = rect.height - windowHeight;
                const scrollProgress = -rect.top;
                const progress = Math.max(0, Math.min(1, scrollProgress / scrollRange));

                // Map progress (0-1) to services index
                const index = Math.min(
                    Math.floor(progress * services.length),
                    services.length - 1
                );

                if (services[index].id !== activeService.id) {
                    setActiveService(services[index]);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeService.id]);

    const handleServiceClick = (service: typeof services[0], index: number) => {
        setActiveService(service);

        const isDesktop = window.innerWidth >= 1360;

        if (sectionRef.current && isDesktop) {
            isManualScroll.current = true;
            const scrollRange = sectionRef.current.offsetHeight - window.innerHeight;
            // Calculate target scroll position based on index
            // We want to scroll to the middle of the range for this specific service
            const targetProgress = (index + 0.5) / services.length;
            const targetScroll = sectionRef.current.offsetTop + (targetProgress * scrollRange);

            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });

            // Re-enable scroll tracking after the smooth scroll finishes
            setTimeout(() => {
                isManualScroll.current = false;
            }, 800);
        }
    };

    return (
        <section ref={sectionRef} className="relative w-full xl:h-[350vh] h-auto">
            <div className="relative lg:sticky top-0 w-full xl:h-screen flex items-center overflow-hidden">
                <div className="relative max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row min-h-[600px] xl:min-h-[100vh] px-4">

                    {/* Left Side: Services List */}
                    <div className="w-full lg:w-2/3 py-10 lg:py-12 lg:pr-30 flex flex-col justify-center relative z-10">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-4">
                                <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                                <span>Smart Compliance</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-4 lg:max-w-2xl">Healthcare Growth & Compliance</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-12 mt-4">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    onClick={() => handleServiceClick(service, index)}
                                    className={`group cursor-pointer transition-all duration-300 transform ${activeService.id === service.id ? 'translate-x-2' : 'hover:translate-x-1'}`}
                                >
                                    <div className="flex flex-col gap-2">
                                        <span className={`text-sm font-bold uppercase ${activeService.id === service.id ? 'text-[#60C6B1]' : 'text-gray-300'}`}>
                                            0{service.id}
                                        </span>
                                        <h3 className={`text-[22px] lg:text-[24px] font-bold transition-all duration-300 ${activeService.id === service.id ? 'text-[#1a2b3c] border-l-4 border-[#60C6B1] pl-6' : 'text-gray-400 group-hover:text-gray-600 pl-0'}`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Detail View */}
                    <div
                        className="w-full lg:w-1/3 p-5 px-0 lg:p-12 relative flex flex-col justify-between text-white transition-colors duration-700"
                        style={{ backgroundColor: activeService.color }}
                    >
                        {/* Simplified Background Bleed - extends from column edge to edge of viewport */}
                        <div
                            className="absolute inset-y-0 -left-6 -right-6 lg:left-full lg:right-auto lg:w-[100vw] bg-inherit pointer-events-none"
                        />

                        {/* Decorative Large Icon */}
                        <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none transform rotate-12 overflow-hidden">
                            <activeService.largeIcon size={400} strokeWidth={1} />
                        </div>

                        <div className="relative z-20 h-full flex flex-col">
                            {/* Service Icon Box */}
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-2xl bg-white/20 backdrop-blur-md">
                                <activeService.icon className="text-white w-10 h-10" />
                            </div>

                            <div className="mb-auto">
                                <span className="text-sm font-[500] opacity-80 mb-3 block tracking-[0.3em] uppercase">Process 0{activeService.id}</span>
                                <h3 className="text-4xl font-bold mb-8 leading-tight">
                                    {activeService.title}
                                </h3>

                                <p className="text-white/90 text-base leading-relaxed mb-8">
                                    {activeService.detail}
                                </p>
                            </div>

                            <div className="mt-8 flex">
                                <Link href='/contact' className="px-5 py-3 rounded-full border border-[#fff] text-[#2D2D2D] bg-[#fff] hover:bg-transparent hover:text-[#fff] cursor-pointer transition flex items-center gap-2 font-medium">
                                    Get Free Consultation
                                    <ChevronRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
