import {
    User,
    Globe,
    Layers,
    Smartphone,
    Rocket,
    MapPin,
    DollarSign,
    Cpu,
    Search,
    DraftingCompass,
    PenTool,
    Code,
    FlaskConical,
    ArrowRight,
} from "lucide-react";

export default function ProjectSnapshots() {
    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#f7fbfe]">
            <div className="max-w-[1400px] mx-auto px-4">

                <div className="flex flex-col items-start text-left mb-10">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Project Snapshot</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-4">
                        Carevation
                    </h2>
                    <p className="text-gray-500 text-base font-regular leading-relaxed">
                        Digital Health & Caregiving Technology — Consumer mobile application redefining care coordination.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {[
                        { icon: User, title: "Client", value: "Carevation" },
                        { icon: User, title: "Founder", value: "Adrian Chung" },
                        { icon: Layers, title: "Industry", value: "Digital Health" },
                        { icon: Smartphone, title: "Project Type", value: "Mobile App" },
                        { icon: Rocket, title: "Stage", value: "Early Access / Beta" },
                        { icon: MapPin, title: "Geography", value: "United States" },
                        { icon: DollarSign, title: "Business Model", value: "Freemium" },
                        { icon: Cpu, title: "Platforms", value: "React Native + Kotlin" },
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-[20px] p-5 hover:border-[#60c6b1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon size={22} className="text-[#60c6b1]" />
                                    <p className="text-base text-gray-500 font-regular leading-snug">
                                        {item.title}
                                    </p>
                                </div>
                                <p className="text-[18px] font-medium text-[#2D2D2D]">
                                    {item.value}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Engagement Flow */}
                <div className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] rounded-[20px] p-6 mb-10">
                    <h3 className="text-[22px] lg:text-[24px] font-bold text-[#fff] mb-4">
                        Fornex Engagement
                    </h3>

                    <div className="flex flex-wrap gap-3 items-center">
                        {[
                            { icon: Search, label: "Discovery" },
                            { icon: DraftingCompass, label: "Architecture" },
                            { icon: PenTool, label: "Design" },
                            { icon: Code, label: "Development" },
                            { icon: FlaskConical, label: "Beta Launch" },
                        ].map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 bg-[#fff] p-4 rounded-lg text-[16px] font-medium uppercase"
                                >
                                    <Icon size={24} className="text-[#60c6b1]" />
                                    {step.label}
                                    {i !== 4 && (
                                        <ArrowRight size={24} className="text-[#2D2D2D]" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Timeline */}
                <div>
                    <h2 className="text-2xl lg:text-4xl font-bold leading-[1.1] text-[#2D2D2D] mb-10">
                        Project <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Timeline — 2025</span>
                    </h2>

                    <div className="relative pl-[20px] space-y-4">
                        {[
                            {
                                title: "Discovery",
                                time: "Step 1",
                                desc: "Stakeholder interviews, market research, competitive analysis, user persona development.",
                            },
                            {
                                title: "Architecture",
                                time: "Step 2",
                                desc: "System design, tech stack selection, API contracts, data modeling & infrastructure planning.",
                            },
                            {
                                title: "Design",
                                time: "Step 3",
                                desc: "Wireframes, high-fidelity prototypes, design system creation, usability testing.",
                            },
                            {
                                title: "Development",
                                time: "Step 4",
                                desc: "React Native + Kotlin implementation, backend services, integrations, QA cycles.",
                            },
                            {
                                title: "Beta Launch",
                                time: "Step 5",
                                desc: "Staged rollout, user feedback loops, performance monitoring, iteration before launch.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="relative group">

                                {/* Dot */}
                                <div className={`absolute -left-[34px] top-2 w-3 h-3 rounded-full bg-teal-400`} />

                                {/* Card */}
                                <div className="rounded-[20px] p-5 bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.07)]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs text-teal-400">
                                            {item.time}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-[22px] lg:text-[24px] leading-tight mb-1 text-[#000]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-base font-regular leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}