"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqData = [
    {
        question: "What industries within healthcare do you specialize in?",
        answer: "ForNex Health works with a wide range of healthcare organizations including hospitals, private clinics, telehealth providers, healthcare startups, medical billing companies, digital health platforms, and healthcare SaaS providers — delivering HIPAA-compliant technology solutions tailored to each organization's specific workflows and compliance requirements."
    },
    {
        question: "How much does healthcare software development cost?",
        answer: "The cost depends on the complexity of the solution, number of integrations required, and compliance depth. A focused healthcare MVP typically starts around $40,000–$80,000. Enterprise EHR platforms, full RCM systems, or multi-integration telehealth platforms range significantly higher depending on scope. We provide a detailed cost breakdown after our discovery session — so you have full transparency before committing to anything."
    },
    {
        question: "Do you work with healthcare startups?",
        answer: "Absolutely. We work extensively with healthcare startups — helping them design, build, and launch HIPAA-compliant MVP platforms in 3–4 months. Our team supports everything from product architecture and UI/UX design to EHR integrations, PHI-secure cloud infrastructure, and investor-ready technical documentation."
    },
    {
        question: "Do you sign Business Associate Agreements (BAA)?",
        answer: "Yes. We sign Business Associate Agreements with all our healthcare clients before any PHI-related work begins. This ensures full HIPAA compliance and clearly defines both parties' responsibilities for handling protected health information — a non-negotiable requirement for any serious healthcare software engagement."
    },
    {
        question: "What healthcare interoperability standards do you support?",
        answer: "We support all major healthcare interoperability standards including FHIR R4, HL7 v2/v3, and SMART on FHIR. These standards allow healthcare systems to exchange patient data securely and seamlessly across platforms — including Epic, Cerner, Athenahealth, eClinicalWorks, and other leading EHR systems."
    },
    {
        question: "What makes ForNex Health different from other healthcare software development companies?",
        answer: "ForNex Health focuses exclusively on healthcare technology. Our team has deep expertise in EHR integrations, HIPAA compliance engineering, AI healthcare solutions, and interoperability standards — built over 10+ years working only in healthcare. This allows us to deliver scalable, compliant digital health platforms significantly faster and more reliably than general software development companies."
    },
    {
        question: "What technologies do you use to build healthcare software?",
        answer: "Our stack includes React, Angular, Vue.js, Node.js, Python, and .NET on the frontend and backend. We build on AWS HIPAA-eligible cloud infrastructure and Google Cloud Healthcare API, with full support for FHIR R4, HL7, and SMART on FHIR interoperability standards. For AI solutions we use TensorFlow, PyTorch, OpenAI APIs, and NLP pipelines."
    },
    {
        question: "Can you upgrade or modernize our existing legacy healthcare system?",
        answer: "Yes. We help healthcare organizations modernize outdated systems by migrating to secure HIPAA-compliant cloud environments, rebuilding integrations to FHIR R4 standards, enhancing security architecture, and adding AI and automation layers — without disrupting your current clinical operations during the transition."
    },
    {
        question: "How long does healthcare software development take?",
        answer: "A focused healthcare MVP typically takes 3–4 months from kickoff to launch. A full custom EHR system, enterprise billing platform, or multi-integration telehealth product takes 6–12 months depending on integrations and compliance requirements. We provide a phased timeline breakdown after discovery so you have complete visibility from day one."
    },
];

export default function HomeFaq() {
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
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
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