"use client";

import { Database, FileText, CalendarClock, ShieldAlert, Target } from "lucide-react";

const challenges = [
    {
        icon: Database,
        id: "01",
        title: "Relational integrity across connected tables",
        description: [
            "The dataset consisted of interconnected tables with primary keys, foreign keys and relationships spanning different parts of a patient’s healthcare journey. Anonymizing those tables independently breaks the links between them. Once broken, there is no reliable way to connect a patient’s encounters to their medications, diagnoses or claims, and the dataset loses most of its research value.",
            "What was needed was a single identifier transformation strategy, applied consistently across the whole dataset, that preserved referential integrity while ensuring the original identifiers were never exposed downstream."
        ],
        color: "#F87171"
    },
    {
        icon: FileText,
        id: "02",
        title: "PHI buried in unstructured clinical documentation",
        description: [
            "Structured fields are predictable. You know where the MRN lives. Clinical notes are not predictable: names, family relationships, locations, employers and contact details appear inside free text, in the middle of clinically meaningful sentences.",
            "Detection therefore had to work on context, not only on patterns. Notes routinely contain indirect identifiers that no field-level rule will catch, such as a reference to a daughter acting as primary caregiver, or a mention of the local plant where a patient works. Both identify a person; neither looks like an identifier to a regular expression."
        ],
        color: "#60C6B1"
    },
    {
        icon: CalendarClock,
        id: "03",
        title: "Dates and longitudinal analysis",
        description: [
            "Much of the analytical value in healthcare data comes from the intervals between events. Strip or randomize dates carelessly and researchers lose the ability to study treatment timelines, gaps between encounters, medication patterns and readmissions.",
            "Dates had to be handled consistently across all of a patient’s records rather than field by field, so that temporal relationships survived even where absolute dates could not."
        ],
        color: "#90c7e5"
    },
    {
        icon: ShieldAlert,
        id: "04",
        title: "Safe Harbor edge cases",
        description: [
            "Safe Harbor extends well past names and Social Security numbers. Ages above 89 have to be aggregated. Geographic data has to be cut back to three-digit ZIP, with an exception for sparsely populated areas. Dates other than year are out. Free-text identifiers of any kind are out.",
            "Applying all eighteen categories consistently across thousands of profiles and millions of records is not something manual review can do reliably at this scale, which is why the rules had to be encoded into the pipeline itself."
        ],
        color: "#E3ACC8"
    },
    {
        icon: Target,
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
        <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-[#1a2b3c] max-w-[900px] mx-auto mb-6">
                        What Made This Difficult
                    </h2>
                    <div className="text-left md:text-center text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed space-y-4">
                        <p>
                            The engagement covered around 25,000 patient profiles, but the underlying dataset ran to millions of individual records and relational events: demographics, encounters, diagnostic and billing data, pharmacy histories and unstructured clinical documentation including images & handwritten notes.
                        </p>
                        <p>
                            Removing obvious identifiers was the straightforward part. The harder problem was doing so without destroying the relationships, clinical meaning and analytical value of the data underneath. Five issues drove most of the design decisions.
                        </p>
                    </div>
                </div>

                {/* Vertical Timeline */}
                <div className="relative max-w-5xl mx-auto mt-20">
                    {/* Center Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 z-0" />

                    <div className="space-y-16 lg:space-y-24">
                        {challenges.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 group">
                                    {/* Mobile Line */}
                                    <div className="lg:hidden absolute left-8 top-16 bottom-[-4rem] w-[2px] bg-gray-100 z-0" />

                                    {/* Left Content (or right for mobile) */}
                                    <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:justify-end lg:pr-16' : 'lg:justify-start lg:pl-16 lg:order-3'}`}>
                                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ml-20 lg:ml-0 relative z-10 w-full group-hover:-translate-y-1">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div 
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"
                                                    style={{ backgroundColor: item.color }}
                                                >
                                                    {item.id}
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#1a2b3c] leading-tight">{item.title}</h3>
                                            </div>
                                            <div className="space-y-4">
                                                {item.description.map((paragraph, pIdx) => (
                                                    <p key={pIdx} className="text-gray-600 leading-relaxed text-[15px] lg:text-base">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className={`absolute left-4 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white border-2 flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform duration-500 ${isEven ? 'lg:order-2' : 'lg:order-2'}`}
                                        style={{ borderColor: item.color, color: item.color }}
                                    >
                                        <Icon size={28} />
                                    </div>

                                    {/* Empty space for alternating layout */}
                                    <div className={`hidden lg:block w-1/2 ${isEven ? 'order-3' : 'order-1'}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
