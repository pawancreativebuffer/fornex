"use client";

import { ShieldCheck, Eraser, Key, CheckSquare, FlaskConical, Database, Network } from "lucide-react";

export default function HealthcareDataServices() {
    const services = [
        {
            title: "PHI De-identification",
            desc: "Under HIPAA, including Safe Harbor and support for Expert Determination.",
            icon: ShieldCheck,
            color: "#60C6B1"
        },
        {
            title: "Clinical Text PHI Redaction",
            desc: "Using entity detection, pattern matching, contextual rules and validation.",
            icon: Eraser,
            color: "#90c7e5"
        },
        {
            title: "Tokenization & Pseudonymization",
            desc: "Preserving approved longitudinal linkage without exposing original identifiers.",
            icon: Key,
            color: "#ff9900"
        },
        {
            title: "Data Quality & Validation",
            desc: "Schema, referential integrity, transformation, PHI leakage and downstream utility checks.",
            icon: CheckSquare,
            color: "#60C6B1"
        },
        {
            title: "Synthetic Healthcare Data",
            desc: "For development, testing and demonstration use.",
            icon: FlaskConical,
            color: "#90c7e5"
        },
        {
            title: "Healthcare Data Engineering",
            desc: "ETL and ELT, transformation, normalization, data lakes and warehouses.",
            icon: Database,
            color: "#ff9900"
        },
        {
            title: "Healthcare Interoperability",
            desc: "Work across HL7 / FHIR / EHR integrations.",
            icon: Network,
            color: "#60C6B1"
        }
    ];

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#0a1526] overflow-hidden">
            {/* Dark background elements */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#60C6B1]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base mb-4 bg-[#60C6B1]/10 px-4 py-2 rounded-full border border-[#60C6B1]/20">
                        <span className="w-2 h-2 rounded-full bg-[#60C6B1] animate-pulse" />
                        <span className="uppercase tracking-wider">Capabilities</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-white max-w-4xl mx-auto mb-6">
                        Our Healthcare <span className="text-[#60C6B1]">Data Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        This engagement reflects a capability Creative Buffer offers as part of a broader healthcare data engineering and privacy practice, serving US healthcare providers, payers, health-tech companies and life sciences organizations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {services.map((svc, idx) => (
                        <div 
                            key={idx}
                            className="group relative bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-2xl"
                        >
                            {/* Animated top gradient line based on service color */}
                            <div 
                                className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                                style={{ backgroundImage: `linear-gradient(to right, transparent, ${svc.color}, transparent)` }} 
                            />
                            
                            <div 
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border" 
                                style={{ backgroundColor: `${svc.color}15`, color: svc.color, borderColor: `${svc.color}30` }}
                            >
                                <svc.icon size={26} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                                {svc.title}
                            </h3>
                            <p className="text-gray-400 text-[15px] leading-relaxed">
                                {svc.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
