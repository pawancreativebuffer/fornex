"use client";

import { Handshake, ShieldCheck, Award, Verified, CheckCircle, Star } from "lucide-react";

export default function ClientsBanner() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-wrap items-center justify-between gap-10 relative z-50 pt-10 pb-8 lg:pb-10 lg:pt-6">
            <div className="flex flex-col w-full max-w-[100%] lg:max-w-[900px]">
                <h5 className="flex items-center gap-2 mx-auto lg:mx-0 lg:mb-5 font-[500] text-[18px] text-[#fff] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
                    <Handshake /> Partnerships
                </h5>
                <h1 className="text-shadow-lg/20 font-[700] text-[50px] lg:text-[60px] text-[#fff] max-w-[700px] leading-[60px] lg:leading-[70px] mx-auto mt-5 lg:mt-0 text-center lg:text-left lg:mx-0">
                    Our Valued Healthcare  <span className="text-[#60C6B1]">Clients & Partners</span>
                </h1>
            </div>

            <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center mx-auto">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#60C6B1]/20 blur-[100px] rounded-full animate-pulse"></div>

                {/* Trefoil Pattern Container */}
                <div className="relative w-full h-[400px] flex items-start justify-start">
                    {/* Top Circle - Shifted down for more overlap */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-35px)] w-48 h-48 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-white/40 z-30 group shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#60C6B1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <ShieldCheck className="w-12 h-12 text-[#60C6B1] mb-2 group-hover:rotate-12 transition-transform" />
                        <h3 className="text-white font-[600] text-sm group-hover:text-[#60C6B1] transition-colors uppercase tracking-widest leading-none">Certified</h3>
                        <p className="text-white/40 text-[11px] mt-2 leading-tight px-2">ISO 27001 Data Security</p>
                    </div>

                    {/* Bottom Left Circle - Shifted up and right for more overlap */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-[calc(100%-25px)] -translate-y-[15px] w-48 h-48 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-white/40 z-20 group shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Award className="w-12 h-12 text-[#60C6B1] mb-2 group-hover:-rotate-12 transition-transform" />
                        <h3 className="text-white font-[600] text-sm group-hover:text-blue-300 transition-colors uppercase tracking-widest leading-none">Awarded</h3>
                        <p className="text-white/40 text-[11px] mt-2 leading-tight px-2">#1 Health-Tech Solution 2024</p>
                    </div>

                    {/* Bottom Right Circle - Shifted up and left for more overlap */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-[25px] -translate-y-[15px] w-48 h-48 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-white/40 z-10 group shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-bl from-[#60C6B1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Verified className="w-12 h-12 text-[#60C6B1] mb-2 group-hover:scale-110 transition-transform" />
                        <h3 className="text-white font-[600] text-sm group-hover:text-[#60C6B1] transition-colors uppercase tracking-widest leading-none">Verified</h3>
                        <p className="text-white/40 text-[11px] mt-2 leading-tight px-2">HIPAA Compliant Platform</p>
                    </div>
                </div>
            </div>
        </div >
    )
}