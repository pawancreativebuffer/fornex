import React from 'react';

export default function OurFoundation() {
    const sections = [
        {
            title: "Our Mission",
            text: "Fornex Health was founded by Pawan Panwar, CEO and Managing Director, with one mission: to build technology that actually works for the people who depend on it in healthcare — the providers, the administrators, the billing teams, and ultimately, the patients.",
            image: "/images/about-us/our_mission_health_tech.png",
            imagePosition: "left"
        },
        {
            title: "A Foundation of Expertise",
            text: "With a background spanning software development, AI solutions, healthcare technology, and business strategy, Pawan built Creative Buffer Consultancy into a globally recognized technology company before channeling that expertise specifically into healthcare through Fornex Health.",
            image: "/images/about-us/expertise_ai_healthcare.png",
            imagePosition: "right"
        },
        {
            title: "Healthcare-Exclusive by Design",
            text: "The decision to go healthcare-exclusive was deliberate. Healthcare is not like other industries. The stakes are higher. The compliance requirements are real and consequential. The workflows are deeply specialized. The people using these systems are often under enormous pressure. Getting the software right matters in ways it simply does not in other sectors.",
            image: "/images/about-us/healthcare_exclusive_compliance.png",
            imagePosition: "left"
        },
        {
            title: "Proven Track Record",
            text: "We have built EMR systems used by US hospitals. We have reduced claim denial rates for cardiovascular practices losing hundreds of thousands of dollars per month. We have launched telehealth platforms from zero to production in six months. We have helped healthtech startups get their first compliant MVP in front of investors and enterprise clients. Every one of those engagements taught us something. And every lesson made our next project better.",
            image: "/images/dashboard.png",
            imagePosition: "right"
        }
    ];

    return (
        <section className="py-10 lg:py-15 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-14">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-6">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Foundation</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-5xl">
                        Built by People Who Understand <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare & Technology</span>
                    </h2>
                </div>

                {/* Zig-Zag Sections */}
                <div className="space-y-2">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col md:flex-row items-center gap-8 p-6 transition-all duration-500
                                ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}
                                ${section.imagePosition === 'left'
                                    ? 'bg-gradient-to-r from-[#f4f7fb] to-transparent rounded-full md:rounded-l-full md:rounded-r-full'
                                    : 'bg-gradient-to-l from-[#f4f7fb] to-transparent rounded-full md:rounded-r-full md:rounded-l-full'
                                }
                            `}
                        >
                            {/* Circular Image */}
                            <div className="w-56 h-56 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-[8px] border-white relative z-10 bg-gray-100">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* Text Content */}
                            <div className={`flex-1 py-4 ${section.imagePosition === 'right' ? 'md:text-right' : 'md:text-left'} text-center`}>
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#1a2b3c] mb-4">
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 text-[17px] leading-[1.8]">
                                    {section.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}