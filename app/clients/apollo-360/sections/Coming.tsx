"use client";

const roadmapItems = {
    topLeft: {
        number: "01",
        phase: "PHASE 1",
        title: "AI-Assisted Care Protocol Recommendations",
        description:
            "Groq AI integration surfaces protocol adjustment suggestions based on patient health metric patterns, and flags patients at elevated risk of condition deterioration before clinical indicators become critical.",
        color: "#60c6b1",
    },
    topRight: {
        number: "02",
        phase: "PHASE 2",
        title: "Expanded Wearable Device Support",
        description:
            "Continuous glucose monitors, advanced cardiac monitoring devices, and emerging remote patient monitoring hardware added to the integration layer with no changes to the core architecture.",
        color: "#e8726a",
    },
    bottomLeft: {
        number: "04",
        phase: "PHASE 4",
        title: "Referring Physician Enrollment Module",
        description:
            "Direct patient enrollment into Apollo's care program from existing physician workflows — eliminating the friction between a referral decision and the patient's first care team interaction.",
        color: "#5b8dc9",
    },
    bottomRight: {
        number: "03",
        phase: "PHASE 3",
        title: "B2B Enterprise Channel",
        description:
            "Health systems, employer health programs, and insurance plan chronic disease management programs deploy Apollo's care model within their existing patient populations at scale — no white-label rebuild required.",
        color: "#f5a623",
    },
};

function BlockSquare({
    number,
    color,
    style = {},
}: {
    number: string;
    color: string;
    style?: React.CSSProperties;
}) {
    return (
        <div
            className="relative flex-shrink-0 flex items-center justify-center transition-transform duration-500 hover:scale-105 h-full p-3"
            style={{
                width: 160,
                backgroundColor: color,
                ...style,
            }}
        >
            <div
                className="flex items-center justify-center bg-white h-full w-full"
            >
                <span className="text-4xl font-bold text-[#2D2D2D] select-none">{number}</span>
            </div>
        </div>
    );
}

function Caption({
    phase,
    title,
    description,
    color,
    align,
}: {
    phase: string;
    title: string;
    description: string;
    color: string;
    align: "left" | "right";
}) {
    return (
        <div
            className={`flex-1 ${align === "left" ? "text-right pr-8 lg:pr-12" : "text-left pl-8 lg:pl-12"}`}
        >
            <p className="text-[16px] font-semibold mb-2 uppercase" style={{ color }}>
                {phase}
            </p>
            <h3 className="text-[22px] lg:text-[24px] font-bold text-gray-900 leading-tight mb-3">{title}</h3>
            <p className="text-gray-500 text-[16px] leading-relaxed">{description}</p>
        </div>
    );
}

export default function Coming() {
    const { topLeft, topRight, bottomLeft, bottomRight } = roadmapItems;

    return (
        <section className="relative w-full mt-10 lg:mt-15">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* HEADER */}
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Roadmap</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-5">
                        What&apos;s{" "}
                        <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">
                            Coming Next
                        </span>
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed max-w-6xl">
                        The platform architecture was designed to be category-agnostic from day one — adding new
                        modules requires no rebuild of the core system. The database schema and API contracts are
                        forward-compatible with everything planned in Phase 2 and Phase 3.
                    </p>
                </div>

                {/* ═══════ FOUR BLOCKS — Desktop ═══════ */}
                <div className="hidden lg:flex flex-col items-center mt-12">
                    {/* Row 1 */}
                    <div className="flex justify-center w-full items-stretch">
                        <Caption align="left" {...topLeft} />
                        <div className="flex-shrink-0 flex gap-4">
                            <BlockSquare number={topLeft.number} color={topLeft.color} style={{ zIndex: 1 }} />
                            <BlockSquare
                                number={topRight.number}
                                color={topRight.color}
                                style={{ zIndex: 2 }}
                            />
                        </div>
                        <Caption align="right" {...topRight} />
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-center w-full mt-8 items-stretch">
                        <Caption align="left" {...bottomLeft} />
                        <div className="flex-shrink-0 flex gap-4">
                            <BlockSquare
                                number={bottomLeft.number}
                                color={bottomLeft.color}
                                style={{ zIndex: 3 }}
                            />
                            <BlockSquare
                                number={bottomRight.number}
                                color={bottomRight.color}
                                style={{ zIndex: 4 }}
                            />
                        </div>
                        <Caption align="right" {...bottomRight} />
                    </div>
                </div>

                {/* ═══════ FOUR BLOCKS — Mobile ═══════ */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 px-4">
                    {Object.values(roadmapItems).map((item) => (
                        <div
                            key={item.number}
                            className="relative rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Colored top accent */}
                            <div
                                className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="flex items-start gap-4 mt-2">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {item.number}
                                </div>
                                <div>
                                    <p
                                        className="text-[16px] font-semibold mb-2 uppercase mb-2"
                                        style={{ color: item.color }}
                                    >
                                        {item.phase}
                                    </p>
                                    <h3 className="text-[22px] lg:text-[24px] font-bold text-gray-900 leading-tight mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-[16px] leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}