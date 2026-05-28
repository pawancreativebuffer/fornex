'use client';

export default function Collage() {
    return (
        <section className="relative w-full py-10 lg:py-15 overflow-hidden bg-[#f7fbfe]">
            <div
                className="hidden md:block absolute inset-0 bg-no-repeat bg-right"
                style={{
                    backgroundImage: "url('/images/med.jpg')",
                    backgroundSize: "cover",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7fbfe] from-[50%] to-transparent" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center">
                    <div className="animate-slide-left text-left max-w-[900px]">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-8">
                            The Financial Reality Facing US <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare Providers</span> Today
                        </h2>
                        <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 lg:mb-8">
                            The average US physician practice has a claim denial rate between 5 and 25 percent - and only 60 percent of denied claims are ever reworked and resubmitted. The rest become pure revenue loss. For a 10-physician practice billing $5 million annually, a 15 percent denial rate that is not aggressively managed represents $750,000 or more in annual lost revenue.
                        </p>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            Add to that the administrative cost of billing - which the Medical Group Management Association estimates at 14 to 15 percent of total practice revenue - and the financial case for a high-performance RCM partner becomes undeniable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
