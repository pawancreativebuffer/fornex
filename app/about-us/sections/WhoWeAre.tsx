import { Building2 } from 'lucide-react';

export default function WhoWeAre() {
    return (
        <section className="py-10 lg:py-15 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#f7fbfe] opacity-50 pointer-events-none" />
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-[#60C6B1]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">

                    {/* Left Column: Heading */}
                    <div className="flex flex-col justify-start">
                        <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-6">
                            <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Who We Are</span>
                        </div>

                        <div className="flex flex-col justify-start mb-8">
                            <img
                                src="/images/cbc.svg"
                                alt="logo"
                                className="w-100"
                            />
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                            The Technology Partner <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare Organizations</span> Actually Need
                        </h2>
                    </div>

                    {/* Right Column: Body Content */}
                    <div className="flex flex-col text-lg text-gray-600 leading-relaxed justify-center">
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4"><strong className="text-[#1a2b3c] font-semibold">Fornex Health</strong> is the technology arm of Creative Buffer Consultancy Private Limited - a SOC 2 Type II certified company headquartered in Mohali, India, serving healthcare clients across the United States, New Zealand, and globally.</p>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">We were built on a simple observation: healthcare organizations were being failed by technology vendors who did not understand their world. General software companies would take on healthcare projects, underestimate the compliance requirements, misunderstand clinical workflows, and deliver systems that looked good in demos but broke down in practice.</p>

                        <div className="p-8 my-8 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-l-4 border-l-[#60C6B1] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#60C6B1]/10 to-transparent rounded-full blur-2xl -mr-10 -mt-10"></div>
                            <p className="text-xl font-medium text-[#1a2b3c] italic relative z-10 leading-snug">
                                "We decided to do it differently. Healthcare only. Compliance first. Long-term partnerships over quick engagements."
                            </p>
                        </div>
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4">
                            Today, Fornex Health is trusted by <span className="text-[#1a2b3c] font-semibold">100+ hospitals, clinics, telehealth providers, and healthtech startups</span> to build and maintain the digital systems their patients and staff depend on every day.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
