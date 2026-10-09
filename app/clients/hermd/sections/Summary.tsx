"use client";

import {
    Building2,
    Clock,
    ShieldCheck,
    FileText,
    FileType,
    Database,
    Server,
} from "lucide-react";

export default function Summary() {
    const projectFacts = [
        {
            icon: Building2,
            fact: "Client",
            detail: "Confidential US-based healthcare organization",
        },
        {
            icon: Clock,
            fact: "Duration",
            detail: "4 weeks",
        },
        {
            icon: ShieldCheck,
            fact: "Standard applied",
            detail: "HIPAA Safe Harbor de-identification, § 164.514(b)(2)",
        },
        {
            icon: FileText,
            fact: "Data types",
            detail: "Structured EHR tables, unstructured clinical notes, scanned documents/images, handwritten notes",
        },
        {
            icon: FileType,
            fact: "Formats",
            detail: "Clinical XML (CCDA), delimited/tabular exports, text-layer PDFs, scanned image-only PDFs",
        },
        {
            icon: Database,
            fact: "Scope beyond redaction",
            detail: "Restructuring of the de-identified data for analytics use",
        },
        {
            icon: Server,
            fact: "Architecture",
            detail: "Containerized, patient-folder-based processing with checkpointing and failure isolation",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden py-12 lg:py-20 bg-[#f7fbfe]">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="flex items-center gap-2 text-[#60c6b1] font-semibold text-sm lg:text-base mb-3">
                        <div className="w-2.5 h-2.5 bg-[#60c6b1] rounded-full shadow-[0_0_10px_rgba(96,198,177,0.5)]" />
                        <span>1. Summary</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1a2b3c] max-w-4xl">
                        De-identifying 25,000 Patient Records for Analytics & Research
                    </h2>
                </div>

                {/* Narrative Overview Cards */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 sm:p-10 mb-12 max-w-5xl mx-auto">
                    <div className="flex flex-col gap-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                        <p>
                            A US-based healthcare organization needed to make roughly <strong className="text-[#1a2b3c] font-semibold">25,000 patient records</strong> available for analytics, research and downstream development. Before any of that could happen, the Protected Health Information had to come out, and the data still had to be worth analyzing once it had. The source environment held around <strong className="text-[#1a2b3c] font-semibold">350GB of healthcare data</strong> spread across structured EHR tables, unstructured clinical notes and scanned documents.
                        </p>
                        <p>
                            The engagement had two connected objectives. The first was <span className="text-[#1a2b3c] font-medium">de-identification</span>. The second was <span className="text-[#1a2b3c] font-medium">restructuring the output</span> so it could be loaded into the client’s analytics environment and queried. That combination ruled out simple field-level masking: identifiers had to be transformed consistently across connected tables, PHI buried in free text had to be found and handled, and the result had to be validated for both privacy controls and data integrity before release.
                        </p>
                        <p>
                            We designed and ran an automated processing pipeline combining structured-data transformation, tokenization and pseudonymization, clinical text PHI detection and redaction, and multi-stage quality assurance. Post-processing verification put accuracy at <strong className="text-[#60c6b1] font-semibold">99% or higher</strong>, after which the de-identified and restructured dataset was released for approved downstream use.
                        </p>
                    </div>
                </div>

                {/* Project Facts Table / Cards */}
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1a2b3c]">
                            Project Facts
                        </h3>
                        <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#60c6b1]/10 text-[#2a8775] border border-[#60c6b1]/20">
                            HIPAA Safe Harbor
                        </span>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100/80 border-b border-gray-200 text-[#1a2b3c]">
                                    <th className="py-4 px-6 font-semibold text-sm w-1/3">Project fact</th>
                                    <th className="py-4 px-6 font-semibold text-sm w-2/3">Detail</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {projectFacts.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                                            <td className="py-4 px-6 font-semibold text-[#1a2b3c] flex items-center gap-3">
                                                <span className="w-8 h-8 rounded-lg bg-[#60c6b1]/10 text-[#60c6b1] flex items-center justify-center shrink-0">
                                                    <Icon size={16} />
                                                </span>
                                                {item.fact}
                                            </td>
                                            <td className="py-4 px-6 text-gray-600 font-normal leading-relaxed">
                                                {item.detail}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden flex flex-col gap-3">
                        {projectFacts.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col gap-2">
                                    <div className="flex items-center gap-2.5 text-[#1a2b3c] font-semibold text-sm">
                                        <span className="w-7 h-7 rounded-lg bg-[#60c6b1]/10 text-[#60c6b1] flex items-center justify-center shrink-0">
                                            <Icon size={14} />
                                        </span>
                                        {item.fact}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed pl-9">
                                        {item.detail}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}