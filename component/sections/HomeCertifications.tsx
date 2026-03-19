"use client";

export default function HomeCertifications() {
    const certifications = [
        {
            title: "HIPAA Certified",
            description: "Health Insurance Portability & Accountability Act",
            image: '/images/hippa1.png'
        },
        {
            title: "SOC 2 Type II",
            description: "Independently audited system & organization controls",
            image: '/images/soc2.png'
        },
        {
            title: "PHI Secure",
            description: "Protected health information handled per federal standards",
            image: '/images/phi.png'
        },
        {
            title: "AWS HIPAA Architecture",
            description: "Hosted on Amazon HIPAA-eligible cloud infrastructure",
            image: '/images/aws.png'
        },
        {
            title: "Google Health",
            description: "Google Cloud HIPAA-eligible services where applicable",
            image: '/images/ghealth.png'
        },
        {
            title: "FDA Guidelines",
            description: "Applicable medical device software compliance",
            image: '/images/fda.png'
        }
    ];

    return (
        <section className="w-full my-10 lg:my-20">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Compliance & Security Certifications</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] max-w-[850px]">
                        Built for Healthcare <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Security & Compliance</span>
                    </h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-[2.5rem] p-5 flex flex-col items-center text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 group"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full aspect-[25/10] bg-[#f7fbfe] rounded-[1.8rem] mb-8 flex items-center justify-center border border-gray-100/50 group-hover:bg-[#f1f7fa] transition-colors overflow-hidden">
                                <img src={cert.image} alt={cert.title} className="w-[50%] h-[60%] object-contain" />
                            </div>

                            <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-2">
                                {cert.title}
                            </h3>

                            <p className="text-[#64748B] text-base leading-relaxed max-w-[320px]">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}
