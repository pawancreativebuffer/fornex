"use client";

import { Database, FileText, CalendarClock, ShieldAlert, Target, Check } from "lucide-react";

const challenges = [
    {
        icon: <Database className="w-12 h-12" />,
        id: "01",
        title: "Relational integrity across connected tables",
        description: [
            "The dataset consisted of interconnected tables with primary keys, foreign keys and relationships spanning different parts of a patient’s healthcare journey. Anonymizing those tables independently breaks the links between them. Once broken, there is no reliable way to connect a patient’s encounters to their medications, diagnoses or claims, and the dataset loses most of its research value.",
            "What was needed was a single identifier transformation strategy, applied consistently across the whole dataset, that preserved referential integrity while ensuring the original identifiers were never exposed downstream."
        ],
        color: "#F87171"
    },
    {
        icon: <FileText className="w-12 h-12" />,
        id: "02",
        title: "PHI buried in unstructured clinical documentation",
        description: [
            "Structured fields are predictable. You know where the MRN lives. Clinical notes are not predictable: names, family relationships, locations, employers and contact details appear inside free text, in the middle of clinically meaningful sentences.",
            "Detection therefore had to work on context, not only on patterns. Notes routinely contain indirect identifiers that no field-level rule will catch, such as a reference to a daughter acting as primary caregiver, or a mention of the local plant where a patient works. Both identify a person; neither looks like an identifier to a regular expression."
        ],
        color: "#60C6B1"
    },
    {
        icon: <CalendarClock className="w-12 h-12" />,
        id: "03",
        title: "Dates and longitudinal analysis",
        description: [
            "Much of the analytical value in healthcare data comes from the intervals between events. Strip or randomize dates carelessly and researchers lose the ability to study treatment timelines, gaps between encounters, medication patterns and readmissions.",
            "Dates had to be handled consistently across all of a patient’s records rather than field by field, so that temporal relationships survived even where absolute dates could not."
        ],
        color: "#90c7e5"
    },
    {
        icon: <ShieldAlert className="w-12 h-12" />,
        id: "04",
        title: "Safe Harbor edge cases",
        description: [
            "Safe Harbor extends well past names and Social Security numbers. Ages above 89 have to be aggregated. Geographic data has to be cut back to three-digit ZIP, with an exception for sparsely populated areas. Dates other than year are out. Free-text identifiers of any kind are out.",
            "Applying all eighteen categories consistently across thousands of profiles and millions of records is not something manual review can do reliably at this scale, which is why the rules had to be encoded into the pipeline itself."
        ],
        color: "#E3ACC8"
    },
    {
        icon: <Target className="w-12 h-12" />,
        id: "05",
        title: "The balance between redaction and usability",
        description: [
            "This was the constraint that shaped most of the tuning work. Untuned pattern matching and NLP models tend to over-redact, and a note reading “Administered 50mg of [REDACTED]” is compliant and useless at the same time.",
            "The target was a dataset with minimal residual re-identification risk that still retained its clinical, relational and temporal value. Reaching it required automated processing, structured transformation, contextual handling of free text and quality assurance throughout, rather than a single pass of any one technique."
        ],
        color: "#ff9900"
    }
];

export default function WhatMadeThisDifficult() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-[#f7fbfe]">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Column: Header + Strategic Points (Sticky) */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-15">
                        <div className="mb-10">
                            <div className="flex items-center gap-2 text-[#60c6b1] font-medium text-sm lg:text-base mb-4">
                                <div className="w-2.5 h-2.5 bg-[#60c6b1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)]" />
                                <span>What Made This Difficult</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-6">
                                Five issues drove most of the <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">design decisions.</span>
                            </h2>
                            <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-6 lg:max-w-[500px]">
                                The engagement covered around 25,000 patient profiles, but the underlying dataset ran to millions of individual records and relational events: demographics, encounters, diagnostic and billing data, pharmacy histories and unstructured clinical documentation including images & handwritten notes.
                                <br/><br/>
                                Removing obvious identifiers was the straightforward part. The harder problem was doing so without destroying the relationships, clinical meaning and analytical value of the data underneath.
                            </p>
                        </div>

                        {/* Strategic Points as White Checkmark Cards */}
                        <div className="space-y-2">
                            {challenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-5 bg-white p-2 rounded-[20px] shadow-[0_8px_10px_rgb(0,0,0,0.04)] border border-gray-50/50 group transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#60C6B1]/10 flex items-center justify-center shrink-0">
                                        <Check className="w-5 h-5 text-[#60C6B1]" strokeWidth={3} />
                                    </div>
                                    <h4 className="text-[18px] font-semibold text-[#1a2b3c]">
                                        {item.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Core Modules (One by One) */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-10 overflow-hidden mt-10 lg:mt-0">
                        {challenges.map((module, index) => (
                            <div
                                key={module.id}
                                className="relative flex flex-col"
                                style={{ zIndex: index + 1 }}
                            >
                                <div
                                    className="rounded-[40px] p-5 lg:p-10 shadow-xl flex flex-col justify-center text-white overflow-hidden"
                                    style={{ backgroundColor: module.color }}
                                >
                                    {/* Large Background Icon */}
                                    <div className="absolute -bottom-0 -right-0 opacity-15 pointer-events-none scale-[4.5] rotate-[-15deg]">
                                        {module.icon}
                                    </div>

                                    <div className="relative z-10 w-full">
                                        {/* Module Header */}
                                        <div className="flex flex-col gap-6">
                                            <div className="w-20 h-20 bg-white/20 rounded-[20px] flex items-center justify-center shadow-lg backdrop-blur-sm">
                                                <div className="text-white">
                                                    {module.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-semibold tracking-[0.1em] uppercase opacity-60 block mb-2">Issue {module.id}</span>
                                                <h4 className="text-4xl font-bold leading-tight">
                                                    {module.title}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Module Content - Single Line Points */}
                                        <div className="space-y-4 max-w-[800px] mt-8">
                                            {module.description.map((bullet, i) => (
                                                <div key={i} className="flex items-start gap-5 group/item">
                                                    <div className="w-2 h-2 rounded-full mt-2.5 shrink-0 bg-white/40 group-hover/item:bg-white group-hover/item:scale-150 transition-all duration-300" />
                                                    <p className="text-white text-[16px] leading-relaxed group-hover/item:text-white transition-colors duration-300 font-medium">
                                                        {bullet}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
