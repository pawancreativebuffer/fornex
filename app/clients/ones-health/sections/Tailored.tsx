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
                            onClick={() => setActiveTab("coach")}
                            className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm whitespace-nowrap ${activeTab === "coach" ? "bg-[#60C6B1] text-[#0f172a]" : "text-white/70 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Stethoscope className="w-4 h-4" />
                            <span>Health Coach Dashboard</span>
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
                    <div className="bg-[#0b131c] border border-white/5 rounded-3xl p-6 md:p-8 w-full shadow-2xl">
                        {activeTab === "member" && (
                            <div className="flex flex-col gap-6 animate-in fade-in duration-500">
                                {/* Top Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-[#60C6B1] rounded-2xl p-6 text-[#0b131c] shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase opacity-80 mb-2">Health Score</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">82</div>
                                            <p className="text-sm font-medium opacity-80">+6 vs last month</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#142332] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Biomarkers</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">24</div>
                                            <p className="text-sm text-white/50 font-medium">in optimal range</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#142332] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Active Goals</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">5</div>
                                            <p className="text-sm text-white/50 font-medium">3 on track</p>
                                        </div>
                                    </div>
                                </div>

                                {/* List Items */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <Activity className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Vitamin D <span className="opacity-60 font-normal">—</span> Low
                                                </h3>
                                                <p className="text-white/50 text-sm">Recommend 5,000 IU daily</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Sleep Quality Goal
                                                </h3>
                                                <p className="text-white/50 text-sm">78% <span className="opacity-60">—</span> up from 64%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <Sparkles className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Personalized Plan Updated
                                                </h3>
                                                <p className="text-white/50 text-sm">AI refreshed 3 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "coach" && (
                            <div className="flex flex-col gap-6 animate-in fade-in duration-500">
                                {/* Top Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-[#60C6B1] rounded-2xl p-6 text-[#0b131c] shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase opacity-80 mb-2">Active Clients</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">47</div>
                                            <p className="text-sm font-medium opacity-80">12 high priority</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#142332] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Risk Alerts</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">3</div>
                                            <p className="text-sm text-white/50 font-medium">needs review</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#142332] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Reviews Due</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">8</div>
                                            <p className="text-sm text-white/50 font-medium">this week</p>
                                        </div>
                                    </div>
                                </div>

                                {/* List Items */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <Bell className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Sarah K. <span className="opacity-60 font-normal">—</span> Biomarker Review
                                                </h3>
                                                <p className="text-white/50 text-sm">Lipid panel flagged</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <ClipboardList className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    James T. <span className="opacity-60 font-normal">—</span> Plan Adjustment
                                                </h3>
                                                <p className="text-white/50 text-sm">Update nutrition protocol</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Follow-Up Scheduled
                                                </h3>
                                                <p className="text-white/50 text-sm">Maria L. - Tomorrow 2:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "admin" && (
                            <div className="flex flex-col gap-6 animate-in fade-in duration-500">
                                {/* Top Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-[#60C6B1] rounded-2xl p-6 text-[#0b131c] shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase opacity-80 mb-2">Active Members</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">12,840</div>
                                            <p className="text-sm font-medium opacity-80">+18% MoM</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#142332] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">MRR</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">$284K</div>
                                            <p className="text-sm text-white/50 font-medium">+22% MoM</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#142332] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[140px]">
                                        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Engagement</p>
                                        <div>
                                            <div className="text-5xl font-bold mb-1">76%</div>
                                            <p className="text-sm text-white/50 font-medium">Weekly active</p>
                                        </div>
                                    </div>
                                </div>

                                {/* List Items */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <ShieldCheck className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Platform Health
                                                </h3>
                                                <p className="text-white/50 text-sm">All systems operational</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Subscription Growth
                                                </h3>
                                                <p className="text-white/50 text-sm">Premium tier +34%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#142332]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1a2b3c] p-3 rounded-full text-[#60C6B1]">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-[15px] mb-0.5">
                                                    Content Performance
                                                </h3>
                                                <p className="text-white/50 text-sm">27 new resources viewed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
