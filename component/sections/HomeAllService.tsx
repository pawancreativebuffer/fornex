'use client';

import { useState } from 'react';
import {
    Stethoscope,
    Network,
    Layout,
    ReceiptText,
    Megaphone,
    CheckCircle2,
    ChevronRight,
    MonitorSmartphone,
    Database,
    LineChart
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Healthcare Software Development",
        detail: "Custom healthcare software solutions designed to streamline clinical workflows and improve patient care.",
        points: ["Custom healthcare platforms", "Built using FHIR R4 & HL7 standards"],
        icon: Stethoscope,
        largeIcon: MonitorSmartphone,
        color: "#60C6B1" // Green from HomeServices
    },
    {
        id: 2,
        title: "EHR & EMR Integration Solutions",
        detail: "Seamless integration with leading EHR systems to enable secure data exchange and connected healthcare workflows.",
        points: ["Integration with Epic, Cerner & Athenahealth", "Secure bi-directional data exchange"],
        icon: Network,
        largeIcon: Database,
        color: "#90c7e5" // Blue from HomeServices
    },
    {
        id: 3,
        title: "Website & Mobile Apps Development",
        detail: "Modern healthcare websites and mobile apps that improve patient engagement and digital access to services.",
        points: ["Patient portals & appointment booking", "Secure messaging & lab result access"],
        icon: Layout,
        largeIcon: Layout,
        color: "#ff9900" // Yellow from HomeServices
    },
    {
        id: 4,
        title: "Medical Billing & Revenue Cycle Management",
        detail: "Efficient revenue cycle solutions that reduce claim denials and accelerate reimbursements.",
        points: ["End-to-end claims management", "Denial resolution & faster payments"],
        icon: ReceiptText,
        largeIcon: ReceiptText,
        color: "#E3ACC8" // Pink from HomeServices
    },
    {
        id: 5,
        title: "Healthcare Digital Marketing Services",
        detail: "HIPAA-compliant patient acquisition campaigns, local SEO, reputation management, and referral network building.",
        points: ["HIPAA-compliant patient marketing", "Local SEO & reputation growth"],
        icon: Megaphone,
        largeIcon: LineChart,
        color: "#c66060ff"
    }
];

export default function HomeAllService() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="relative w-full bg-[#f7fbfe] overflow-hidden">
            <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-[700px] px-4">

                {/* Left Side: Services List */}
                <div className="w-full lg:w-2/3 py-10 lg:py-24 lg:pr-30 flex flex-col justify-center relative z-10">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-4">
                            <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Core Expertise</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-4">Services</h2>
                        <p className="text-[#64748B] text-base leading-relaxed lg:max-w-md">
                            We provide multiple services from digital production to technology services. Based on understanding your business goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-12 mt-4">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => setActiveService(service)}
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
                            <span className="text-sm font-[500] opacity-80 mb-3 block tracking-[0.3em] uppercase">Service 0{activeService.id}</span>
                            <h3 className="text-4xl font-bold mb-8 leading-tight">
                                {activeService.title}
                            </h3>

                            <p className="text-white/90 text-base leading-relaxed mb-8">
                                {activeService.detail}
                            </p>

                            <div className="space-y-3 mb-8">
                                {activeService.points.map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group/item">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                <CheckCircle2 size={20} className="text-white" />
                                            </div>
                                        </div>
                                        <p className="text-white text-base font-medium leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="px-5 py-3 rounded-full border border-[#fff] text-[#2D2D2D] bg-[#fff] hover:bg-transparent hover:text-[#fff] cursor-pointer transition flex items-center gap-2 font-medium">
                                Get Free Consultation
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
