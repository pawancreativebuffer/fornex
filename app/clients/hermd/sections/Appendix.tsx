"use client";

import { FileText } from "lucide-react";

const SAFE_HARBOR_ITEMS = [
    { id: "A", text: "Names." },
    { id: "B", text: "All geographic subdivisions smaller than a state, including street address, city, county, precinct, ZIP code and their equivalent geocodes, except for the initial three digits of the ZIP code if, according to current publicly available Census Bureau data: (1) the geographic unit formed by combining all ZIP codes with the same three initial digits contains more than 20,000 people; and (2) the initial three digits of a ZIP code for all such geographic units containing 20,000 or fewer people is changed to 000." },
    { id: "C", text: "All elements of dates (except year) for dates directly related to an individual, including birth date, admission date, discharge date and death date; and all ages over 89 and all elements of dates (including year) indicative of such age, except that such ages and elements may be aggregated into a single category of age 90 or older." },
    { id: "D", text: "Telephone numbers." },
    { id: "E", text: "Fax numbers." },
    { id: "F", text: "Email addresses." },
    { id: "G", text: "Social Security numbers." },
    { id: "H", text: "Medical record numbers." },
    { id: "I", text: "Health plan beneficiary numbers." },
    { id: "J", text: "Account numbers." },
    { id: "K", text: "Certificate and license numbers." },
    { id: "L", text: "Vehicle identifiers and serial numbers, including license plate numbers." },
    { id: "M", text: "Device identifiers and serial numbers." },
    { id: "N", text: "Web Universal Resource Locators (URLs)." },
    { id: "O", text: "Internet Protocol (IP) addresses." },
    { id: "P", text: "Biometric identifiers, including finger and voice prints." },
    { id: "Q", text: "Full-face photographs and any comparable images." },
    { id: "R", text: "Any other unique identifying number, characteristic or code, except as permitted for re-identification under § 164.514(c)." }
];

export default function Appendix() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#f7fbfe] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#60C6B1]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-[1200px] mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-blue-500 font-medium text-sm lg:text-base mb-6 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                        <FileText className="w-4 h-4" />
                        <span className="uppercase tracking-wider">Appendix</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-[#1a2b3c] max-w-4xl mx-auto mb-10">
                        The HIPAA <span className="text-[#60C6B1]">Safe Harbor</span> Standard
                    </h2>
                    
                    <div className="max-w-4xl mx-auto space-y-5 text-left bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-slate-100 mb-12">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Section 164.514(a) of the HIPAA Privacy Rule sets the standard for de-identification of protected health information. Under it, health information is not individually identifiable if it does not identify an individual and the covered entity has no reasonable basis to believe it can be used to identify one.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            The Privacy Rule allows two methods: the <strong className="text-[#1a2b3c]">Safe Harbor Method</strong> and the <strong className="text-[#1a2b3c]">Expert Determination Method</strong>. Satisfying either demonstrates that a covered entity has met the standard, and information de-identified by either method is no longer protected by the Privacy Rule, because it no longer falls within the definition of PHI.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            This engagement followed the <strong className="text-[#60C6B1]">Safe Harbor Method</strong>, under which the following identifiers of the individual, or of relatives, employers or household members of the individual, are removed:
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.03)] border border-slate-100 relative overflow-hidden">
                    {/* Top gradient border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#60C6B1]/50 to-blue-500/50" />
                    
                    {/* CSS Columns layout for the identifiers */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {SAFE_HARBOR_ITEMS.map((item, idx) => (
                            <div key={idx} className="break-inside-avoid bg-[#f7fbfe] border border-slate-100 rounded-2xl p-5 flex gap-4 hover:border-[#60C6B1]/30 hover:shadow-md transition-all duration-300 group">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-500 font-bold flex items-center justify-center text-sm border border-blue-100 group-hover:bg-[#60C6B1]/10 group-hover:text-[#60C6B1] group-hover:border-[#60C6B1]/30 transition-colors duration-300 mt-0.5">
                                    {item.id}
                                </div>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
