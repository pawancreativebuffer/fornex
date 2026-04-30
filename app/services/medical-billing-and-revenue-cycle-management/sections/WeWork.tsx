'use client';

export default function WeWork() {
    return (
        <section className="relative w-full py-10 lg:py-25 overflow-hidden bg-[#f7fbfe]">
            <div
                className="hidden md:block absolute inset-0 bg-no-repeat bg-left"
                style={{
                    backgroundImage: "url('/images/money.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
            />
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="absolute inset-0" />

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center lg:p-10 bg-white max-w-[1000px] m-auto rounded-xl">
                    <div className="animate-slide-left text-center">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D] mb-8">
                            <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Payers</span> We Work With
                        </h2>
                        <p className="text-gray-500 text-base font-regular leading-relaxed">
                            We manage claims across the complete US payer landscape - Medicare Part B and Part C (Medicare Advantage), Medicaid (all 50 state programs and managed Medicaid), Blue Cross Blue Shield (all regional plans), United Healthcare, Aetna, Cigna, Humana, Molina Healthcare, Centene, WellCare, and hundreds of regional and specialty payers including Workers' Compensation and No-Fault auto insurance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
