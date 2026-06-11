import { Check, Activity, HeartPulse, Bone, Baby, Smile, Scan, Sparkles, Dna, Brain, Stethoscope, Video, Receipt } from 'lucide-react';

export default function Specialties() {
    const specialties = [
        { name: "Physical Therapy", icon: Activity },
        { name: "Cardiology", icon: HeartPulse },
        { name: "Orthopedics", icon: Bone },
        { name: "Pediatrics", icon: Baby },
        { name: "Dentistry", icon: Smile },
        { name: "Radiology", icon: Scan },
        { name: "Dermatology", icon: Sparkles },
        { name: "Oncology", icon: Dna },
        { name: "Psychiatry", icon: Brain },
        { name: "Urgent Care", icon: Stethoscope },
        { name: "Telehealth", icon: Video },
        { name: "Medical Billing", icon: Receipt }
    ];

    const clientTypes = [
        "Hospitals & Large Health Systems",
        "Private Clinics & Multi-Specialty Practices",
        "Telehealth Providers",
        "Healthcare Startups",
        "Medical Billing Companies",
        "Digital Health Platforms & SaaS Providers",
        "Diagnostic Centers"
    ];

    return (
        <section className="py-10 lg:py-15 bg-[#f7fbfe] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[#60C6B1]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-[#90c7e5]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header Content */}
                <div className="flex flex-col items-center text-center mb-14">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Who We Serve</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-6xl mb-5">
                        <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">12+ Medical Specialties.</span> 100+ Healthcare Organizations.
                    </h2>
                    <p className="text-gray-500 text-base font-regular leading-relaxed text-center max-w-4xl">
                        From cardiology to psychiatry, from solo practices to enterprise health systems - we have built compliant, scalable technology across the full spectrum of healthcare.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                    {/* Left Side: Client Type List */}
                    <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7fbfe] rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                        <h3 className="text-3xl font-bold text-[#1a2b3c] mb-8 relative z-10">Client Types</h3>

                        <div className="flex flex-col gap-2 relative z-10 mb-8">
                            {clientTypes.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-0.5 min-w-[24px] w-6 h-6 rounded-full bg-[#f7fbfe] shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center border border-[#90c7e5]/20">
                                        <Check className="w-3.5 h-3.5 text-[#90c7e5] stroke-[4]" />
                                    </div>
                                    <span className="text-gray-500 font-medium text-base leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Image Block to fill space */}
                        <div className="mt-auto relative w-full h-48 rounded-xl overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                                alt="Healthcare Innovation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c]/80 via-[#1a2b3c]/20 to-transparent"></div>
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <p className="font-semibold text-lg leading-tight mb-1">Empowering Care</p>
                                <p className="text-white/80 text-sm">Through seamless digital solutions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Specialty Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {specialties.map((spec, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center items-center text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="mb-4 w-12 h-12 rounded-xl bg-[#f7fbfe] flex items-center justify-center border border-[#90c7e5]/30 group-hover:scale-110 transition-transform duration-300">
                                    <spec.icon className="w-6 h-6 text-[#60C6B1]" />
                                </div>
                                <h3 className="text-sm md:text-base font-bold bg-gradient-to-br from-[#1a2b3c] to-[#2D2D2D] bg-clip-text text-transparent">
                                    {spec.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}