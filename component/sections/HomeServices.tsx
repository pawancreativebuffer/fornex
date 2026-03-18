import { ArrowRight, Stethoscope, ShieldCheck, Network, TrendingUp } from "lucide-react";

export default function HomeServices() {
    const services = [
        {
            title: "Health-Focused Development",
            subtitle: "Custom healthcare software",
            icon: Stethoscope,
            bgColor: "bg-[#F4D957]",    // Yellow
            textColor: "text-[#000]",
            subtitleColor: "text-[#8F7D2B]",
            iconColor: "text-[#E6C937]",
        },
        {
            title: "Secure & Compliant Systems",
            subtitle: "HIPAA & SOC2 compliant",
            icon: ShieldCheck,
            bgColor: "bg-[#9BD7B7]",    // Green
            textColor: "text-[#000]",
            subtitleColor: "text-[#58896C]",
            iconColor: "text-[#7FC29E]",
        },
        {
            title: "Integration Expertise",
            subtitle: "Seamless API & EHR connect",
            icon: Network,
            bgColor: "bg-[#E3ACC8]",    // Pink
            textColor: "text-[#000]",
            subtitleColor: "text-[#98617D]",
            iconColor: "text-[#D393B3]",
        },
        {
            title: "Scalable Digital Solutions",
            subtitle: "Built for future growth",
            icon: TrendingUp,
            bgColor: "bg-[#7AA8F1]",    // Blue
            textColor: "text-[#000]",
            subtitleColor: "text-[#3D66A6]",
            iconColor: "text-[#6294E5]",
        }
    ];

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 my-10">
            <div className="bg-white rounded-[30px] p-4 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-[20px] p-6 lg:p-8 h-[240px] cursor-pointer transition-transform hover:-translate-y-2 ${service.bgColor}`}
                            >
                                {/* Text Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    <h3 className={`font-bold text-[22px] lg:text-[24px] leading-tight mb-2 whitespace-pre-line ${service.textColor}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-[14px] font-medium ${service.subtitleColor}`}>
                                        {service.subtitle}
                                    </p>

                                    {/* Bottom Arrow Button */}
                                    <div className="mt-auto">
                                        <span className={`w-10 h-10 rounded-full bg-[#000] flex items-center justify-center transition-transform hover:scale-110`}>
                                            <ArrowRight className="text-white w-5 h-5" />
                                        </span>
                                    </div>
                                </div>

                                {/* Background Faded Icon */}
                                <div className={`absolute -bottom-6 -right-6 ${service.iconColor} opacity-40 transition-transform group-hover:scale-110`}>
                                    <IconComponent size={140} strokeWidth={1.5} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}