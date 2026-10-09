"use client";

import {
    DownloadCloud,
    UserCircle,
    SearchCode,
    FileEdit,
    CheckCircle,
    Cpu,
    KeyRound,
    Clock,
} from "lucide-react";

export default function OurApproach() {
    const pipelineStages = [
        {
            title: "Ingest & Normalize",
            time: "Stage 1",
            desc: "Archives expanded to local scratch storage and source tree normalized so one directory represents one patient. Established a reliable scheduling boundary.",
            color: "#60C6B1",
            icon: DownloadCloud,
        },
        {
            title: "Per-Patient Profile Build",
            time: "Stage 2",
            desc: "Structured records mined to build a per-patient identifier roster (names, addresses, IDs) acting as a patient-specific source of truth.",
            color: "#3491f7",
            icon: UserCircle,
        },
        {
            title: "Layered PHI Detection",
            time: "Stage 3",
            desc: "Three detector families combined: deterministic pattern matching, statistical NER, and known-identifier matching against the roster.",
            color: "#f3a126",
            icon: SearchCode,
        },
        {
            title: "Format-Preserving Transform",
            time: "Stage 4",
            desc: "Clinical XML rewritten, tabular data used column semantics, and text-layer PDFs used true content redaction rather than visual overlay.",
            color: "#e74c7c",
            icon: FileEdit,
        },
        {
            title: "Independent Verification",
            time: "Stage 5",
            desc: "Independent scanner re-read transformed output searching for surviving identifiers, acting as an adversarial second pass.",
            color: "#8234c5",
            icon: CheckCircle,
        },
    ];

    const Cube = ({ color, icon: Icon, isTop }: { color: string, icon: any, isTop: boolean }) => {
        const baseColor = color;
        const darker = `brightness(0.8)`;
        const lighter = `brightness(1.2)`;

        return (
            <div className="relative w-24 h-28 lg:w-32 lg:h-36 flex items-center justify-center group pointer-events-auto">
                {/* SVG Cube */}
                <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110 z-[10]">
                    {/* Top Face */}
                    <path
                        d="M50 5 L90 25 L50 45 L10 25 Z"
                        fill={baseColor}
                        style={{ filter: lighter }}
                    />
                    {/* Left Face */}
                    <path
                        d="M10 25 L50 45 L50 95 L10 75 Z"
                        fill={baseColor}
                    />
                    {/* Right Face */}
                    <path
                        d="M50 45 L90 25 L90 75 L50 95 Z"
                        fill={baseColor}
                        style={{ filter: darker }}
                    />
                    <foreignObject x="25" y="35" width="50" height="50">
                        <div className="w-full h-full flex items-center justify-center">
                            <Icon className="text-white w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                    </foreignObject>
                </svg>
            </div>
        );
    };

    return (
        <section className="relative w-full overflow-hidden py-16 lg:py-24 bg-[#1a2b3c]">
            <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-[#60C6B1] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-blue-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                    <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)] animate-pulse" />
                        <span className="uppercase tracking-wider">Our Approach</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-white max-w-[900px] mx-auto mb-6">
                        A Five-Stage, Containerized <span className="text-[#60C6B1]">Pipeline</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        Creative Buffer implemented a five-stage, containerized pipeline with the patient folder as the atomic unit of work. A separate pseudonym store supported identifier stability, isolated from the deliverable, encrypted, and access-controlled.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative lg:pt-48 lg:pb-48 mb-20 mt-10">
                    <div className="relative flex flex-col lg:flex-row items-center justify-center lg:gap-0 z-10 max-w-[1200px] mx-auto">
                        {/* Connecting dashed line for desktop */}
                        <div className="hidden lg:block absolute top-[55%] left-[5%] right-[5%] h-0.5 border-t-2 border-dashed border-white/20 -translate-y-1/2 z-0"></div>

                        {pipelineStages.map((item, i) => {
                            const isEven = i % 2 === 0;
                            const textBelow = isEven;

                            return (
                                <div key={i} className={`flex flex-col items-center w-full lg:w-[220px] relative`}>
                                    {/* Text Block - Above */}
                                    {!textBelow && (
                                        <div className="hidden lg:flex flex-col items-center text-center absolute bottom-[calc(100%+20px)] left-1/2 -translate-x-1/2 w-[260px]">
                                            <h3 className="mb-3 text-white font-bold text-center text-[20px] leading-tight">{item.title}</h3>
                                            <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                                            <span className="text-[11px] font-bold text-[#60C6B1] uppercase mt-4 px-3 py-1 rounded-full bg-[#60C6B1]/10 border border-[#60C6B1]/20">{item.time}</span>
                                        </div>
                                    )}

                                    {/* The Cube - Desktop */}
                                    <div className={`relative z-[10] hidden lg:block ${!isEven ? 'lg:-translate-y-8' : 'lg:translate-y-8'} transition-transform duration-500`}>
                                        <Cube color={item.color} icon={item.icon} isTop={!textBelow} />
                                    </div>

                                    {/* Text Block - Below */}
                                    {textBelow && (
                                        <div className="hidden lg:flex flex-col items-center text-center absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 w-[260px]">
                                            <span className="text-[11px] font-bold text-[#60C6B1] uppercase mb-4 px-3 py-1 rounded-full bg-[#60C6B1]/10 border border-[#60C6B1]/20">{item.time}</span>
                                            <h3 className="mb-3 text-white font-bold text-center text-[20px] leading-tight">{item.title}</h3>
                                            <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    )}

                                    {/* Mobile View Layout */}
                                    <div className="flex lg:hidden flex-row items-center gap-6 w-full px-4 mb-10">
                                        <div className="flex-shrink-0">
                                            <Cube color={item.color} icon={item.icon} isTop={false} />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-[11px] w-fit font-bold text-[#60C6B1] uppercase mb-2 px-3 py-1 rounded-full bg-[#60C6B1]/10 border border-[#60C6B1]/20">{item.time}</span>
                                            <h3 className="mb-2 text-white font-bold text-left text-[20px] leading-tight">{item.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Additional Engineering Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
                    {/* Detail 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-[#3491f7]/10 flex items-center justify-center text-[#3491f7] mb-6">
                            <Cpu size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Scalable Known-Identifier Matching</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            At corpus scale, the per-patient identifier roster can contain a very large number of strings. Naively comparing every identifier against every document is computationally expensive.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The implementation compiled the roster into a single Aho–Corasick automaton, allowing the corpus to be scanned in time proportional to document length plus the matches found. This moved roster matching from a potential bottleneck into a scalable detection layer.
                        </p>
                    </div>

                    {/* Detail 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-[#e74c7c]/10 flex items-center justify-center text-[#e74c7c] mb-6">
                            <KeyRound size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Pseudonymization & Key Management</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Where deletion would destroy required longitudinal utility, identifiers were replaced with stable surrogates. Surrogate codes were randomly generated and persisted in an isolated mapping store rather than being derived from the original identifier.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The mapping store represented the re-identification key and therefore received stronger operational treatment than ordinary output data: separate access permissions, encryption, and retention controls. It was never packaged with the de-identified deliverable.
                        </p>
                    </div>

                    {/* Detail 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-[#f3a126]/10 flex items-center justify-center text-[#f3a126] mb-6">
                            <Clock size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Compliance Modes & Date Handling</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The technical source describes two configured postures. Safe Harbor mode implements enumerated-identifier removal rules, including year-only dates, the 90+ age treatment, and geographic generalization. A separate limited-dataset/research mode can retain finer temporal resolution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
