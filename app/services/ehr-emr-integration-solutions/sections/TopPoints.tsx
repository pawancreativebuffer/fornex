
export default function TopPoints() {
    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Column: Heading & Intro */}
                    <div className="animate-slide-right">
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 text-center lg:text-left">
                            Disconnected healthcare systems are one of the most persistent and expensive problems in modern clinical operations. When your EHR does not talk to your billing system, your patient portal does not sync with your lab platform, or your telehealth application cannot pull medication history - clinicians work harder, errors multiply, and patients fall through the gaps.
                        </p>
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 text-center lg:text-left">
                            ForNex Health specializes in EHR and EMR integration - connecting clinical, administrative, and financial systems so data flows seamlessly across your entire organization. We have completed integrations with Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Kareo, Oracle Health, and more than 20 additional healthcare platforms - for over 100 healthcare organizations across the United States.
                        </p>
                        <p className="text-gray-500 text-base font-regular leading-relaxed text-center lg:text-left">
                            Our interoperability engineers do not just build point-to-point connections. We design integration architectures that are scalable, maintainable, and built to evolve as your technology stack grows.
                        </p>
                    </div>

                    {/* Right Column: Grid of Cards */}
                    <div className="animate-slide-left">
                        <img
                            src="/images/emr-ehr.jpg"
                            alt="Healthcare Software Development"
                            width="100%"
                            height="100%"
                            className="rounded-2xl shadow-xl object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}