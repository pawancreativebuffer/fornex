"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const tabs = [
    {
        id: "ehr",
        label: "Custom EHR Dashboard",
        title: "Custom EHR Dashboard",
        description: "A powerful, centralized dashboard designed to give healthcare teams a clear view of patient data and daily operations. Monitor vital signs, patient records, and treatment updates through an intuitive and organized interface.",
        image: "/images/platform/ehr.png",
    },
    {
        id: "billing",
        label: "Medical Billing Dashboard",
        title: "Medical Billing Dashboard",
        description: "Optimize your revenue cycle with our advanced billing platform. Track claims, manage denials, and accelerate payments with real-time analytics and automated workflows.",
        image: "/images/platform/billing.png",
    },
    {
        id: "portal",
        label: "Patient Portal Interface",
        title: "Patient Portal Interface",
        description: "Empower patients with a secure, user-friendly portal. Enable easy appointment scheduling, lab result access, and direct communication with healthcare providers.",
        image: "/images/platform/portal.png",
    }
];

export default function HomePlatform() {
    const [activeTab, setActiveTab] = useState(tabs[1]);

    return (
        <section className="w-full bg-[#fcfeff] py-10 lg:py-20 overflow-hidden">
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-4">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Product Showcase</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[1100px]">
                        See Our Healthcare Software Platform -<span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">EHR, Billing & Beyond</span>
                    </h2>
                </div>

                <p className="text-gray-500 text-base font-regular leading-relaxed mb-8 md:mb-16 text-center">
                    No vague promises. See the actual dashboards and tools our healthcare clients use every day.
                </p>


                {/* Tabbed UI Container */}
                {/* Custom Unique Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-0 relative z-10 mb-4 md:-mb-[1px]">
                    {tabs.map((tab) => {
                        const isActive = activeTab.id === tab.id;
                        return (
                            <div key={tab.id} className="relative group w-full md:w-auto">
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`w-full md:w-auto relative px-10 py-5 text-[16px] font-[600] cursor-pointer whitespace-nowrap
                                        ${isActive
                                            ? "bg-[#1a2b3c] text-white rounded-[10px] md:rounded-[0px] md:rounded-t-3xl"
                                            : "bg-transparent text-[#64748B] hover:text-[#1a2b3c] opacity-70 hover:opacity-100"
                                        }
                                    `}
                                >
                                    {/* Inverse rounded corner - Left */}
                                    {isActive && (
                                        <div className="absolute bottom-[1px] -left-6 w-6 h-6 bg-[#1a2b3c] hidden md:block">
                                            <div className="w-full h-full bg-[#fcfeff] rounded-br-3xl"></div>
                                        </div>
                                    )}

                                    {tab.label}

                                    {/* Inverse rounded corner - Right */}
                                    {isActive && (
                                        <div className="absolute bottom-[1px] -right-6 w-6 h-6 bg-[#1a2b3c] hidden md:block">
                                            <div className="w-full h-full bg-[#fcfeff] rounded-bl-3xl"></div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Main Content Box */}
                <div className="bg-[#1a2b3c] rounded-[1rem] lg:rounded-[3rem] p-6 lg:p-18 text-white relative overflow-hidden group/content">

                    {/* Background Decorative Element */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-18 relative z-10">
                        {/* Image Section */}
                        <div className="w-full lg:w-[58%] order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 aspect-video group-hover/content:scale-[1.02] transition-transform duration-700">
                                <img
                                    key={activeTab.id}
                                    src={activeTab.image}
                                    alt={activeTab.title}
                                    className="w-full h-full object-cover animate-[fadeIn_0.8s_ease-out]"
                                />

                                {/* Overlay Shadow for depth */}
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-[42%] order-1 lg:order-2 flex flex-col gap-7">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 leading-tight">
                                    {activeTab.title}
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed">
                                    {activeTab.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <ul className="space-y-2">
                                    {["HIPAA Compliant & Secure", "Real-time Data Sync", "Scalable Cloud Architecture"].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                            <div className="w-1.5 h-1.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_#60C6B1]"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <button className="px-5 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[transparent] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                                        Get Free Consultation
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
}