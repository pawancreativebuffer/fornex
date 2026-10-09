import { Users, Database, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export default function TopPoints() {
    const points = [
        {
            title: "25,000",
            description: "Patient profiles",
            icon: Users,
            featured: true
        },
        {
            title: "350 GB",
            description: "Source data",
            icon: Database,
            featured: false
        },
        {
            title: "99%+",
            description: "Verified accuracy",
            icon: ShieldCheck,
            featured: false
        },
        {
            title: "5",
            description: "Data formats handled",
            icon: FileSpreadsheet,
            featured: false
        }
    ];

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column: Heading & Intro */}
                    <div className="lg:max-w-xl animate-slide-right">
                        <div className="w-full mb-8 flex justify-center lg:justify-start">
                            <img
                                src="/images/her-md.png"
                                alt="HerMD Logo"
                                className="h-20 w-auto object-contain rounded-2xl shadow-md border border-slate-100"
                            />
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-4 text-center lg:text-left">
                            From Raw Data to <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Compliant Insights</span>
                        </h2>
                    </div>

                    {/* Right Column: Grid of Cards */}
                    <div className="animate-slide-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            {points.map((point, index) => (
                                <div
                                    key={index}
                                    className={`
                                        border border-gray-100 rounded-[20px] text-center p-6 flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500
                                        ${point.featured ? 'bg-gradient-to-r from-[#60c6b1] to-[#90c7e5]' : 'bg-[#fff]'}
                                    `}
                                >
                                    <div>
                                        <div className="mb-4 inline-flex items-center justify-center rounded-2xl">
                                            <point.icon className={`w-10 h-10 ${point.featured ? 'text-white' : 'text-[#60c6b1]'}`} />
                                        </div>
                                    </div>
                                    <h2 className={`text-[26px] lg:text-[28px] font-bold ${point.featured ? 'text-white' : 'text-[#1a2b3c]'}`}>
                                        {point.title}
                                    </h2>
                                    <p className={`text-base leading-relaxed ${point.featured ? 'text-white' : 'text-[#64748B]'}`}>
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center sm:text-right text-xs text-gray-400 italic mt-4">
                            Creative Buffer Consultancy Pvt. Ltd. &bull; July 2026
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}