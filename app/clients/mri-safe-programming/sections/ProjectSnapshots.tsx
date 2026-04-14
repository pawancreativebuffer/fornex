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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
                                className="bg-gradient-to-br from-[#0f172a] to-[#111827] border border-slate-800 rounded-xl p-5 hover:border-teal-400 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon size={18} className="text-teal-400" />
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                                        {item.title}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-white">
                                    {item.value}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Engagement Flow */}
                <div className="bg-gradient-to-r from-[#0f172a] to-[#111827] border border-slate-800 rounded-xl p-6 mb-12">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">
                        Fornex Engagement
                    </p>

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
                                    className="flex items-center gap-2 bg-[#0b1220] border border-slate-700 px-4 py-2 rounded-lg text-sm"
                                >
                                    <Icon size={14} className="text-teal-400" />
                                    {step.label}
                                    {i !== 4 && (
                                        <span className="ml-2 text-slate-500">→</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Timeline */}
                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-6">
                        Project Timeline — 2025
                    </p>

                    <div className="relative border-l border-slate-800 pl-6 space-y-8">

                        {[
                            {
                                title: "Discovery",
                                time: "Q1 2025",
                                desc: "Stakeholder interviews, market research, competitive analysis, user persona development.",
                            },
                            {
                                title: "Architecture",
                                time: "Q1–Q2 2025",
                                desc: "System design, tech stack selection, API contracts, data modeling & infrastructure planning.",
                            },
                            {
                                title: "Design",
                                time: "Q2 2025",
                                current: true,
                                desc: "Wireframes, high-fidelity prototypes, design system creation, usability testing.",
                            },
                            {
                                title: "Development",
                                time: "Q2–Q3 2025",
                                desc: "React Native + Kotlin implementation, backend services, integrations, QA cycles.",
                            },
                            {
                                title: "Beta Launch",
                                time: "Q3–Q4 2025",
                                desc: "Staged rollout, user feedback loops, performance monitoring, iteration before launch.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="relative group">

                                {/* Dot */}
                                <div
                                    className={`absolute -left-[34px] top-2 w-3 h-3 rounded-full ${item.current ? "bg-teal-400" : "bg-slate-600"
                                        }`}
                                />

                                {/* Card */}
                                <div className="bg-gradient-to-br from-[#0f172a] to-[#111827] border border-slate-800 rounded-xl p-5 hover:border-teal-400 transition-all">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs text-teal-400">
                                            {item.time}
                                        </span>
                                        {item.current && (
                                            <span className="text-[10px] bg-teal-400/20 text-teal-300 px-2 py-0.5 rounded">
                                                CURRENT
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-slate-400">
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