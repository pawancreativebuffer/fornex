export default function HomeBannerImages() {
    return (
        <section className="w-full mt-[-150px] md:mt-[-340px] pb-15 overflow-hidden lg:overflow-visible">
            <div className="relative max-w-[1400px] mx-auto px-4">

                {/* LEFT CARD */}
                <div className="max-w-[900px] absolute top-1/2 -translate-y-1/2 -left-10 rotate-[-8deg] scale-80 z-10 transition-all duration-500 hover:rotate-0 hover:scale-95 bg-white rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src="/images/biling.png"
                        alt="Left Dashboard"
                    />
                </div>

                {/* RIGHT CARD */}
                <div className="max-w-[900px] absolute top-1/2 -translate-y-1/2 -right-10 rotate-[8deg] scale-80 z-10 transition-all duration-500 hover:rotate-0 hover:scale-95 bg-white rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src="/images/profile.png"
                        alt="Right Dashboard"
                    />
                </div>

                {/* CENTER CARD */}
                <div className="max-w-[900px] relative z-20 m-auto hover:scale-110 transition-all duration-500 bg-white rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src="/images/dashboard.png"
                        alt="Main Dashboard"
                    />
                </div>
            </div>
        </section>
    );
}