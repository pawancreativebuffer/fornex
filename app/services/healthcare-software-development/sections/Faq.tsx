"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqData = [
    {
        question: "How long does healthcare software development take?",
        answer: "A focused MVP for a healthcare startup typically takes 3 to 4 months from kickoff to launch. A full custom EHR, enterprise RCM platform, or multi-integration telehealth product takes 6 to 12 months depending on integration complexity and compliance scope. We provide a detailed phased timeline after our discovery session."
    },
    {
        question: "Do you work with early-stage healthcare startups?",
        answer: "Yes. We work with healthcare startups from the earliest stage - helping with product architecture, technical co-founder advisory, HIPAA-compliant MVP development, and investor-ready technical documentation. Many of our startup clients have gone on to raise Series A and B rounds after launching their ForNex-built platforms."
    },
    {
        question: "Can you integrate with our existing EHR system?",
        answer: "Absolutely. Our interoperability team has direct experience integrating with Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Kareo, Oracle Health, and most other major EHR systems using FHIR R4 APIs, HL7 v2 and v3 messaging, and SMART on FHIR frameworks. We assess integration complexity in our discovery phase and provide a realistic timeline and cost estimate upfront."
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="relative w-full bg-[#f7fbfe] py-10 lg:py-15">
            <div className="max-w-[1200px] mx-auto px-4">

                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-14">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.6)]" />
                        <span>Clear The Confusion</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-[#2D2D2D] max-w-[800px]">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                </div>

                {/* 2 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-1 items-start gap-3">
                    {faqData.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`group rounded-[24px] border transition-all duration-300
                                    ${isOpen
                                        ? "bg-white shadow-[0_10px_40px_rgba(144,199,229,0.15)] border-[#90c7e5]/30"
                                        : "bg-white/70 backdrop-blur-xl border-white/40 hover:border-[#90c7e5]/40 hover:shadow-[0_8px_30px_rgba(144,199,229,0.12)]"
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left p-6"
                                >
                                    <h3 className="text-[16px] font-[600] text-[#1a2b3c] pr-4">
                                        {faq.question}
                                    </h3>

                                    {/* Icon */}
                                    <div
                                        className={`min-w-[34px] h-[34px] text-2xl flex items-center justify-center rounded-full transition-all duration-300
                                            ${isOpen
                                                ? "bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] text-white rotate-135"
                                                : "bg-[#f1f7fb] text-[#90c7e5] group-hover:bg-[#e6f3fa]"
                                            }`}
                                    >
                                        +
                                    </div>
                                </button>

                                {/* Answer */}
                                <div className={`overflow-hidden transition-all duration-300 px-6 ${isOpen ? "max-h-[500px] pb-6 overflow-auto" : "max-h-0"}`}>
                                    <p className="text-gray-500 text-base font-regular leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <div className="mt-14 text-center">
                    <p className="text-[16px] font-[600] text-[#1a2b3c] mb-2">Still have questions?</p>
                    <p className="text-gray-500 text-base font-regular leading-relaxed">Can't find the answer you're looking for? Let's talk directly.</p>

                    <div className="flex">
                        <Link href='/contact' className="px-5 py-3 mx-auto mt-5 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[transparent] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                            Contact Support
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}