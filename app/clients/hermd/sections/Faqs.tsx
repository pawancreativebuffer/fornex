"use client";
import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const FAQ_DATA = [
    {
        question: "How do you know you caught everything?",
        answer: "We don't claim certainty, we claim measurement. A verification scanner re-reads the output and reports residual matches; that number is delivered with the dataset. Claiming zero leakage without a verifier is the answer that should worry you."
    },
    {
        question: "Why not just use a commercial de-identification product?",
        answer: "Format fidelity and join stability. Most tools either flatten documents or generate per-file surrogates, both of which destroy the dataset's value. The per-patient roster layer — using the patient's own structured record to find their identifiers in free text — is also not something generic tooling does."
    },
    {
        question: "Isn't NER unreliable?",
        answer: "Yes, alone. That's why it's one of three layers and not the primary one. Deterministic patterns and the roster carry the high-confidence load; NER covers the residual free-text surface."
    },
    {
        question: "Black boxes on a PDF can be removed.",
        answer: "Correct, which is why we don't draw them. Text-layer redaction removes content from the stream, and form-field values are cleared at the annotation layer, not painted over."
    },
    {
        question: "Why random codes rather than a keyed hash?",
        answer: "§164.514(c). A derived code is a code derived from the identifier, which is disallowed under Safe Harbor regardless of key strength. It also means the mapping store is the sole source of stability, which we treat as an operational requirement."
    },
    {
        question: "What did you get wrong?",
        answer: "Three things, all instructive: the parallelism boundary didn't match the real data layout and cost hours before it was caught; targeted XPath-only XML handling leaked identifiers in unenumerated elements until the full-tree sweep was added; and a zero-valued shift parameter in an early configuration was a no-op that left dates intact — caught by the verifier, which is precisely the argument for having one."
    }
];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#0a1526] overflow-hidden">
            {/* Dark background subtle glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60C6B1]/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[900px] mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-4 bg-[#60C6B1]/10 px-4 py-2 rounded-full border border-[#60C6B1]/20">
                        <MessageCircleQuestion className="w-4 h-4" />
                        <span className="uppercase tracking-wider">Project Questions</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-white">
                        Frequently Asked <span className="text-[#60C6B1]">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`border rounded-2xl transition-colors duration-300 overflow-hidden ${
                                    isOpen ? 'border-[#60C6B1]/40 bg-[#60C6B1]/5 shadow-[0_0_20px_rgba(96,198,177,0.05)]' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                                }`}
                            >
                                <button 
                                    className="w-full text-left px-6 py-5 lg:py-6 flex items-start justify-between gap-4 focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                >
                                    <span className={`font-bold text-lg lg:text-[19px] transition-colors leading-tight ${isOpen ? 'text-[#60C6B1]' : 'text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#60C6B1]/20 text-[#60C6B1]' : 'bg-white/5 text-gray-400'}`}>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>
                                
                                <div 
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen ? 'max-h-[500px] pb-6 lg:pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'
                                    }`}
                                >
                                    <div className="w-full h-px bg-white/10 mb-5" />
                                    <p className="text-gray-400 leading-relaxed text-[15px] lg:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
