import { ChevronRight, Activity } from "lucide-react";
import Link from "next/link";

const Tile = ({ left, top, width, height }: { left: number, top: number, width: number, height: number }) => {
    return (
        <div
            className="absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}
        >
            <img
                src="/images/web-and-mobile.jpg"
                alt="Healthcare Software"
                className="absolute max-w-none object-cover object-left"
                style={{
                    width: `${100 / (width / 100)}%`,
                    height: `${100 / (height / 100)}%`,
                    left: `-${(left / width) * 100}%`,
                    top: `-${(top / height) * 100}%`
                }}
            />
        </div>
    )
}

export default function Banner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-10 lg:py-15 relative z-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Column: Image Collage and Floating Cards */}
                <div className="relative w-full max-w-[550px] aspect-[4/6] mx-auto animate-slide-right order-2 lg:order-1 mt-10 lg:mt-0">
                    {/* Background glow */}
                    <div className="absolute inset-10 bg-gradient-to-tr from-[#60C6B1]/40 to-blue-500/40 blur-3xl rounded-full"></div>

                    {/* Tiles */}
                    <Tile left={0} top={15} width={31} height={35} />
                    <Tile left={0} top={53} width={31} height={40} />

                    <Tile left={34.5} top={0} width={31} height={25} />
                    <Tile left={34.5} top={28} width={31} height={45} />
                    <Tile left={34.5} top={76} width={31} height={24} />

                    <Tile left={69} top={10} width={31} height={40} />
                    <Tile left={69} top={53} width={31} height={35} />

                    {/* Floating Card 1 (Top Left) */}
                    <div className="absolute top-[20%] -right-[2%] lg:-right-[5%] bg-[#60C6B1]/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-10 hover:scale-105 transition-transform duration-300">
                        <div>
                            <h3 className="text-[#1a2b3c] font-bold text-xl leading-tight">100+</h3>
                            <p className="text-[#1a2b3c]/80 text-xs font-medium">Hospital's</p>
                        </div>
                        <div className="bg-[#1a2b3c] p-2 rounded-xl">
                            <Activity className="text-[#60C6B1] w-6 h-6" />
                        </div>
                    </div>

                    {/* Floating Card 2 (Bottom Left) */}
                    <div className="absolute top-[65%] -left-[2%] lg:-left-[15%] bg-[#0f1923]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 w-[240px] hover:scale-105 transition-transform duration-300">
                        <div className="h-1 w-full bg-gradient-to-r from-[#60C6B1] to-blue-500"></div>
                        <div className="p-4 grid grid-cols-3 gap-2 divide-x divide-white/10">
                            <div className="flex flex-col items-center justify-center text-center">
                                <span className="text-[#60C6B1] font-bold text-lg leading-tight">100+</span>
                                <span className="text-gray-400 text-[9px] uppercase tracking-wider mt-1">Clients</span>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center pl-2">
                                <span className="text-blue-400 font-bold text-lg leading-tight">10y</span>
                                <span className="text-gray-400 text-[9px] uppercase tracking-wider mt-1">Expertise</span>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center pl-2">
                                <span className="text-[#ff9900] font-bold text-lg leading-tight">100%</span>
                                <span className="text-gray-400 text-[9px] uppercase tracking-wider mt-1">HIPAA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Title, Content, Buttons */}
                <div className="flex flex-col gap-6 lg:gap-8 animate-slide-left order-1 lg:order-2">
                    <h1 className="text-shadow-lg/20 font-[700] text-[40px] lg:text-[56px] text-[#fff] leading-[1.1] text-center lg:text-left">
                        Healthcare <span className="text-[#60C6B1]">Website and Mobile App Development</span> Built for How Patients and Providers Actually Work
                    </h1>

                    <div className="flex flex-col">
                        <p className="text-white/70 text-base font-regular leading-relaxed mb-4 lg:mb-6 text-center lg:text-left">
                            Today's patients choose healthcare providers the same way they choose restaurants and hotels — they search online, read reviews, explore the website, and make a judgment in under 10 seconds. If your digital presence does not inspire confidence, they go elsewhere. And for clinicians and staff, a poorly designed mobile app is not just frustrating — it directly impacts patient safety and care quality.
                        </p>
                        <p className="text-white/70 text-base font-regular leading-relaxed mb-4 lg:mb-6 text-center lg:text-left">
                            ForNex Health designs and develops healthcare websites and mobile applications that perform in both dimensions. Patient-facing interfaces that build trust, drive appointments, and make care access easy. Clinician tools that reduce documentation burden, surface the right information at the right moment, and work the way real healthcare workflows work — not the way software engineers imagined they do.
                        </p>
                        <p className="text-white/70 text-base font-regular leading-relaxed text-center lg:text-left">
                            With 10+ years of healthcare-exclusive development experience, our team has built web and mobile solutions for hospitals, specialty practices, telehealth platforms, mental health services, pharmacy chains, and digital health startups across the United States and internationally.
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}