'use client';

import {
    Stethoscope,
    Layers,
    Smartphone,
    Receipt,
    TrendingUp,
    ArrowUpRight,
    Search,
    Shield
} from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: "Healthcare Software Development",
        description: "Custom medical software solutions purpose-built to digitize patient care and streamline clinical operations with unmatched precision.",
        icon: Stethoscope,
        color: "from-[#60C6B1] to-[#4fa996]",
        size: "lg", // Large card
        highlights: ["Custom Patient Portals", "Clinical Workflow Tools"],
        slug: "/healthcare-software-development"
    },
    {
        id: 2,
        title: "EHR & EMR Integration Solutions",
        description: "Expert connectivity services for seamless data exchange across leading Electronic Health systems.",
        icon: Layers,
        color: "from-[#90c7e5] to-[#6d9fbb]",
        size: "sm",
        highlights: ["FHIR R4 / HL7", "Interoperability"],
        slug: "/ehr-emr-integration"
    },
    {
        id: 3,
        title: "Website & Mobile Apps Development",
        description: "Intuitive, HIPAA-compliant digital experiences designed to enhance patient engagement.",
        icon: Smartphone,
        color: "from-[#ff9900] to-[#ffcc00]",
        size: "sm",
        highlights: ["Telehealth Web", "Native Mobile"],
        slug: "/website-mobile-app-development",
    },
    {
        id: 4,
        title: "Medical Billing & Revenue Cycle Management",
        description: "Advanced billing software and management tools that reduce denials and accelerate payment cycles.",
        icon: Receipt,
        color: "from-[#E3ACC8] to-[#D393B3]",
        size: "sm",
        highlights: ["Denial Management", "Claims Processing"],
        slug: "/medical-billing-rcm"
    },
    {
        id: 5,
        title: "Healthcare Digital Marketing Services",
        description: "Tailored marketing strategies specifically built for healthcare providers to grow their patient base.",
        icon: TrendingUp,
        color: "from-[#c66060] to-[#9b4b4b]",
        size: "sm", // Medium card
        highlights: ["Patient Acquisition", "Brand Strategy"],
        slug: "/healthcare-digital-marketing",
    }
];

export default function ServicesAll() {
    return (
        <section className="w-full py-10 lg:py-15 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col justify-center relative z-30">
                    <div className="flex items-center justify-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>What We Offer</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-8 text-center max-w-[700px] mx-auto">
                        End-to-End <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare Solutions</span>
                    </h2>

                    <p className="text-gray-500 text-base font-regular leading-relaxed lg:max-w-[900px] mx-auto text-center">
                        From EHR integration to medical billing, our end-to-end services are purpose-built to simplify operations and elevate patient care across every specialty.
                    </p>
                </div>

                {/* Services Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mt-16">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`group relative p-6 lg:p-10 rounded-3xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col overflow-hidden ${service.size === 'lg' ? 'lg:col-span-2' : ''
                                    }`}
                            >
                                {/* Hover Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br transition-all duration-700 opacity-0 group-hover:opacity-18 blur-2xl rounded-full ${service.color}`} />

                                <div className="flex justify-between items-start mb-5 relative z-10">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg shadow-current/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <Icon size={28} />
                                    </div>
                                    <span className="text-[16px] font-[600] text-gray-300 group-hover:text-[#000] transition-colors">
                                        0{service.id}
                                    </span>
                                </div>

                                <h3 className={`font-bold text-[#1a2b3c] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.color} transition-all duration-300 ${service.size === 'lg' ? 'text-[22px] lg:text-[32px]' : 'text-[22px] lg:text-[24px]'
                                    }`}>
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 mb-6 text-base font-regular leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-2 mb-8">
                                    {service.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[16px] font-medium text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#60c6b1]" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                                    <Link href={`/services/${service.slug}`} className="text-[16px] font-[600] text-[#1a2b3c] flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-all cursor-pointer">
                                        EXPLORE SERVICE <ArrowUpRight size={16} />
                                    </Link>

                                    {/* Small Decorative Elements for Lg Card */}
                                    {service.size === 'lg' && (
                                        <div className="hidden lg:flex gap-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                            <Shield size={40} className="text-gray-400" />
                                            <Search size={40} className="text-gray-400" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
