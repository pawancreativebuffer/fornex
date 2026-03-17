"use client";

import { Brain, Play, X } from "lucide-react";
import { useState } from "react";

export default function HomeBanner() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const imagesData = [
        { name: "/images/soc.png" },
        { name: "/images/hippa.png" },
        { name: "/images/hl7.png" },
    ];

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-wrap justify-between gap-10 relative z-50">
            <div className="flex flex-col w-full max-w-[100%] lg:max-w-[620px] mt-20 lg:mt-0">
                <h5 className="flex items-center gap-2 mx-auto lg:mx-0 lg:mb-5 font-[500] text-[18px] text-[#fff] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
                    <Brain /> AI Innovation for
                </h5>
                <h1 className="text-shadow-lg/20 font-[700] text-[50px] lg:text-[60px] text-[#fff] max-w-[700px] leading-[60px] lg:leading-[70px] mx-auto mt-5 lg:mt-0 text-center lg:text-left lg:mx-0">Healthcare & Billing Efficiency</h1>

                <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                    <div className="relative flex items-center justify-center w-[80px] h-[80px]">
                        {/* Glowing ring animations */}
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        <div className="absolute inset-2 rounded-full bg-white/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-500"></div>

                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="relative z-10 w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform duration-300 group cursor-pointer"
                        >
                            <Play className="text-[#60C6B1] w-6 h-6 ml-1 group-hover:text-[#45a390] transition-colors" fill="currentColor" />
                        </button>
                    </div>
                    <span className="text-white font-medium text-lg cursor-pointer hover:underline" onClick={() => setIsVideoOpen(true)}>Watch Demo</span>
                </div>
            </div>

            <div className="w-full max-w-[300px] mx-auto lg:mx-0 flex flex-col justify-center">
                <p className="w-full max-w-[170px] mx-auto text-[#fff] font-[400] text-[16px] text-center">Trusted by 500+ Healthcare Providers</p>
                <div className="flex flex-row mt-6 justify-center">
                    {imagesData.map((item, i) => (
                        <span key={i} className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-[110px] h-[110px] flex items-center justify-center relative shadow-lg transition-transform hover:-translate-y-2 hover:z-20 ${i !== 0 ? "-ml-8" : ""}`} style={{ zIndex: 10 - i }}>
                            <img src={item.name} alt={item.name} className="w-[85px] h-[85px] object-contain" />
                        </span>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-[fadeIn_0.3s_ease-out]">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Product Demo Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div >
    )
}