"use client";

export default function Results() {
    const integrations = [
        "Blood work",
        "Lifestyle data",
        "Wearable metrics",
        "Health goals"
    ];

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col justify-center text-center gap-5">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>The Moment It Became Clear</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] max-w-5xl m-auto">
                        Data existed. <span className="text-[#60C6B1]">Insights did not.</span>
                    </h1>
                    <p className="text-white/70 text-base leading-relaxed max-w-6xl m-auto">
                        Users could access blood work, lifestyle information, wearable metrics, and health goals — but no centralized platform could transform those inputs into meaningful, personalized recommendations. That became the foundation of Ones Health.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center  mt-10">
                    {integrations.map((item, idx) => (
                        <div
                            key={idx}
                            className="px-5 py-2 bg-[#F0F9F8] text-[#4FA895] rounded-full text-[16px] font-medium border border-[#E0F2F0] hover:bg-[#E0F2F0] transition-all cursor-default select-none shadow-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
