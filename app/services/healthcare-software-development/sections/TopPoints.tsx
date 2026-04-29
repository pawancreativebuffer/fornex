
export default function TopPoints() {
    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Column: Heading & Intro */}
                    <div className="animate-slide-right">
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 text-center lg:text-left">
                            Healthcare organizations across the United States are under more pressure than ever. Rising patient volumes, complex compliance mandates, outdated legacy systems, and the growing demand for digital care delivery are reshaping how every hospital, clinic, and healthtech company operates. Off-the-shelf software was never built to keep up.
                        </p>
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8 text-center lg:text-left">
                            At ForNex Health, we build healthcare software from the ground up - designed around your workflows, your compliance requirements, and your patients. With over 10 years of exclusive experience in healthcare technology, our team has built and deployed clinical platforms for 100+ healthcare organizations across the US, UK, and beyond.
                        </p>
                        <p className="text-gray-500 text-base font-regular leading-relaxed text-center lg:text-left">
                            Whether you need a custom patient portal, an AI-powered clinical decision support tool, an automated RCM platform, or a full EHR system - we build it secure, scalable, and ready for the way healthcare is actually practiced.
                        </p>
                    </div>

                    {/* Right Column: Grid of Cards */}
                    <div className="animate-slide-left">
                        <img
                            src="/images/healthcare_software_dev.jpg"
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