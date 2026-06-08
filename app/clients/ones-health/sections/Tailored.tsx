"use client";

import { useState } from "react";
import { Heart, Stethoscope, Users, Activity, TrendingUp, Sparkles, Bell, ClipboardList, Calendar, ShieldCheck, FileText } from "lucide-react";

export default function Tailored() {
    const [activeTab, setActiveTab] = useState("member");

    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-15 bg-[#1a2b3c]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col justify-center text-center gap-5 mb-10">
                    <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Dashboards</span>
                    </div>
                    <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] max-w-5xl m-auto">
                        A Tailored Cockpit For <span className="text-[#60C6B1]">Every Role</span>
                    </h1>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    {/* Tabs */}
                    <div className="flex items-center gap-1 bg-[#13202e] p-2 rounded-full mx-auto border border-white/5 max-w-full overflow-x-auto w-fit">
                        <button
                            onClick={() => setActiveTab("member")}
                            className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm whitespace-nowrap ${activeTab === "member" ? "bg-[#60C6B1] text-[#0f172a]" : "text-white/70 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Heart className="w-4 h-4" />
                            <span>Member Dashboard</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("admin")}
                            className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm whitespace-nowrap ${activeTab === "admin" ? "bg-[#60C6B1] text-[#0f172a]" : "text-white/70 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Users className="w-4 h-4" />
                            <span>Admin Dashboard</span>
                        </button>
                    </div>

                    {/* Dashboard Content */}
                    <div className="bg-[#0b131c] border border-white/5 rounded-3xl p-4 w-full shadow-2xl">
                        {activeTab === "member" && (
                            <div className="flex flex-col gap-6 animate-in fade-in duration-500">
                                <img src="/images/ones-member.png" alt="Member Dashboard" className="w-full h-auto rounded-2xl shadow-lg" />
                            </div>
                        )}

                        {activeTab === "admin" && (
                            <div className="flex flex-col gap-6 animate-in fade-in duration-500">
                                <img src="/images/ones-admin.png" alt="Admin Dashboard" className="w-full h-auto rounded-2xl shadow-lg" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
