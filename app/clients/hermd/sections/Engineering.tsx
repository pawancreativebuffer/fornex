"use client";

import { FolderTree, RefreshCw, Skull, AlertOctagon, DownloadCloud, ShieldMinus, SlidersHorizontal } from "lucide-react";

export default function Engineering() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#f7fbfe] overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#60C6B1]/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                    <div className="flex items-center gap-2 text-blue-500 font-medium text-sm lg:text-base mb-4">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse" />
                        <span className="uppercase tracking-wider">Engineering Architecture</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-[#1a2b3c] max-w-4xl mx-auto mb-6">
                        Engineering for Scale, <span className="text-blue-500">Fault Tolerance</span> & Delivery
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                            <FolderTree size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-4">Patient-level process isolation</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The patient folder was the unit of work, with no shared mutable state across workers.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-[#60C6B1]/10 flex items-center justify-center text-[#60C6B1] mb-6 group-hover:scale-110 transition-transform">
                            <RefreshCw size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-4">Checkpointed, idempotent resume</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Per-patient completion state was persisted so restarts could skip completed work; expensive profile preparation could be reused.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                            <Skull size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-4">Worker-death handling</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The orchestration layer detected process-pool failures and exited deterministically so the supervising process could restart from checkpoint.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                            <AlertOctagon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-4">Poison-pill quarantine</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Patients that repeatedly failed or contained unrecoverable file errors were moved to an explicit remainder list rather than silently dropped.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                            <DownloadCloud size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-4">Model preloading</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The NER model was packaged with the container image to prevent large worker fleets from simultaneously downloading the model.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                            <ShieldMinus size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-4">Unsafe logging removed</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            A serial classification/logging pre-pass was made optional, reducing both a throughput bottleneck and the risk of writing raw identifiers into output-adjacent logs.
                        </p>
                    </div>

                    {/* Card 7 (Full Width) */}
                    <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 group md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="w-16 h-16 shrink-0 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                            <SlidersHorizontal size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a2b3c] mb-4">Performance Trade-offs</h3>
                            <p className="text-gray-500 text-base leading-relaxed mb-4">
                                The technical material describes a full-fidelity configuration with NER and OCR and an accelerated configuration that disabled statistical NER and handled image-only pages more conservatively.
                            </p>
                            <p className="text-gray-500 text-base leading-relaxed">
                                The important engineering lesson is that performance modes were treated as explicit, documented trade-offs, with a remainder list and the ability to reprocess against the same pseudonym store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
