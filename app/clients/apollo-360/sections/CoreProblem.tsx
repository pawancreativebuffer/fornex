"use client";
import {
    Info,
    X
} from 'lucide-react';


const realCons = [
    "Quarterly clinic visits with no between-visit support structure",
    "Verbal lifestyle guidance with no accountability follow-up",
    "Fragmented care notes rarely shared across the care team",
    "No continuous monitoring of blood pressure, glucose, or weight",
    "Insurance billing limited to in-person visit codes only"
]

const realConsequnce = [
    "Chronic conditions worsened between visits due to absence of daily intervention",
    "Medication burdens increased as behavioral factors went unaddressed",
    "Hospital utilization remained high among patients who could have been managed digitally",
    "Patients managing obesity-related comorbidities had no daily accountability structure",
    "Delayed detection for patients whose between-visit deterioration went unnoticed"
]

export default function CoreProblem() {
    return (
        <section className="relative w-full py-10 lg:py-15 bg-[#1a2b3c] overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:gap-20">

                    {/* Right Column: Main Content + Dynamic Info */}
                    <div className="w-full">
                        <div className="flex items-center justify-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-5">
                            <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                            <span>Core Problem</span>
                        </div>

                        {/* Persistent Main Content */}
                        <div className="mb-10 order-1 lg:order-0">
                            <h1 className="text-shadow-lg/20 font-[700] text-4xl lg:text-6xl text-[#fff] leading-[1.1] mb-7 text-center">
                                MRI Safety Checks Were Slow, Manual, <span className="text-[#60C6B1]">and Clinically Fragmented</span>
                            </h1>
                            <p className="text-white/70 text-base leading-relaxed text-center mb-4">
                                Before Apollo, patients managing chronic conditions faced a broken care journey. Their interaction with healthcare was limited to scheduled clinic visits — quarterly or annually for conditions like diabetes or cardiovascular disease — with little or no structured support in between.
                            </p>
                            <p className="text-white/70 text-base leading-relaxed text-center">
                                When problems arose between appointments, patients were left without guidance. When lifestyle changes were needed, there was no infrastructure to support or monitor them.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-white text-[22px] lg:text-[24px] font-bold mb-6">
                                    The real consequences:
                                </h3>
                                <div className="flex flex-col gap-2 mb-10">
                                    {realConsequnce.map((text, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-[#ffd596] rounded-full shadow-[0_2px_10px_rgba(239,68,68,0.3)] transition-transform group-hover:scale-110">
                                                <Info size={14} className="text-black" strokeWidth={3} />
                                            </div>
                                            <p className="text-white/70 text-base leading-relaxed group-hover:text-white transition-colors">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white text-[22px] lg:text-[24px] font-bold mb-6">
                                    What clinicians used before Apollo:
                                </h3>
                                <div className="flex flex-col gap-2 mb-10">
                                    {realCons.map((text, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center bg-[#F87171] rounded-full shadow-[0_2px_10px_rgba(239,68,68,0.3)] transition-transform group-hover:scale-110">
                                                <X size={14} className="text-white" strokeWidth={3} />
                                            </div>
                                            <p className="text-white/70 text-base leading-relaxed group-hover:text-white transition-colors">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#60C6B1]" />
                            <span className="text-[#60C6B1] font-bold text-[18px] mb-4 block uppercase">
                                Most Affected Population
                            </span>
                            <p className="text-white/70 text-base leading-relaxed">
                                Patients over 65 with multiple chronic conditions, adults managing obesity-related comorbidities, and individuals with complex cardiovascular risk profiles — precisely the population that accounts for the largest share of preventable healthcare spending in the United States.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px) scale(0.98);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}