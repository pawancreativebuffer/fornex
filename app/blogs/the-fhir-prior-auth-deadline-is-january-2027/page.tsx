'use client';

import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* Header Section */}
            <section className="relative overflow-hidden bg-[#1a2b3c] min-h-[60vh] flex flex-col">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <Header />

                <div className="flex-1 flex items-center relative z-10">
                    <div className="max-w-[1400px] mx-auto px-4 w-full py-10 lg:py-15 text-center">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-[#60C6B1] mb-8 hover:gap-3 transition-all duration-300 font-medium group mx-auto"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] max-w-7xl mx-auto">
                            The FHIR Prior Auth Deadline Is January 2027. Is Your Hospital Ready?
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <User size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Author</p>
                                    <p className="font-medium text-white">Fornex Health Team</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <Calendar size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Published</p>
                                    <p className="font-medium text-white">May 5, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-15 relative z-20">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Article */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                                <img
                                    src="/images/FHIR.png"
                                    alt="Prior Auth Deadline"
                                    className="w-full rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed ">
                                    <p className="text-[20px] font-medium text-[#1a2b3c] mb-6">
                                        Eight months. That is how long hospitals have before the CMS-0057-F API compliance deadline hits on January 1, 2027.
                                    </p>

                                    <p className="mb-6">
                                        Most hospital IT teams are aware of it. Fewer are actually ready for it. The gap between those two things is where the real problem lives.
                                    </p>
                                    <p className="mb-10">
                                        This blog breaks down exactly what the deadline requires, what it means for your workflows, why most organizations are further behind than they think. Then what to do about it right now.

                                    </p>

                                    <div className="bg-[#60C6B1]/5 border-l-4 border-[#60C6B1] p-8 rounded-r-2xl mb-10">
                                        <h2 className="text-2xl font-bold mb-4 mt-0 text-[#1a2b3c]">What CMS-0057-F Actually Requires </h2>
                                        <p className="mb-4">
                                            The rule forces standardized FHIR-based APIs into prior authorization workflows. Before this regulation, prior auth was mostly manual. Phone calls between providers and payers. Faxed documentation. Multi-day approval timelines. Denied requests that triggered repeat appeals. For patients that meant delayed care. For providers that meant administrative staff spending hours on tasks that should take minutes.
                                        </p>
                                        <p className="mb-4">
                                            CMS expects approximately $15 billion in savings over 10 years as prior authorization goes digital. CAQH data shows around 14 minutes saved per authorization with electronic standards. Yet physicians still handle roughly 43 prior authorizations per week while spending around 12 hours on them. <a className='text-[#60C6B1] hover:underline' href='https://edenlab.io/blog/cms-0057-f-interoperability' target='_blank'>(Edenlab)</a>
                                        </p>
                                        <p className="mb-4">
                                            The rule fixes this by forcing the infrastructure that makes automation possible.
                                        </p>
                                        <p className="mb-4">
                                            By January 1, 2027, payers must comply with a sweeping set of mandates including support for FHIR-based APIs covering Patient Access, Provider Access, Payer-to-Payer Data Exchange. The Prior Authorization API must also be live in production by that date. <a className='text-[#60C6B1] hover:underline' href='http://Pilotfishtechnology' target='_blank'>(Pilotfishtechnology)</a>
                                        </p>
                                        <p className="mb-0">
                                            For providers the Prior Authorization API is the one that matters most day-to-day. It must support checking whether prior auth is required, surfacing documentation needs, electronic submission, then electronic decisions. <a className='text-[#60C6B1] hover:underline' href='https://fire.ly/blog/cms-0057-f-decoded-must-have-apis-vs-nice-to-have-igs-for-2026-2027/' target='_blank'>(Firely)</a>
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-6">The Deadlines That Already Passed </h2>
                                    <p className="mb-6">
                                        Here is where many hospitals get confused. January 2027 is not the only date that matters. Some of this is already in effect.
                                        January 1, 2026 required payers to report Patient Access API metrics, implement faster prior authorization response timeframes of seven calendar days for standard requests with 72 hours for urgent requests, provide specific denial reasons, then publicly report prior authorization metrics.

                                    </p>
                                    <p className="mb-6">
                                        The first public prior authorization performance metrics were due March 31, 2026.

                                    </p>
                                    <p className="mb-10">
                                        If your payer partners have not already updated their turnaround timeframes they are operating out of compliance right now. That matters for your organization because it affects how you build workflows around payer responses. If you are still designing processes around old turnaround expectations you are building on a broken assumption.
                                    </p>

                                    <div className="relative my-10 p-10 bg-[#1a2b3c] rounded-3xl overflow-hidden text-white">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#60C6B1] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
                                        <h3 className="text-2xl font-bold mb-6 relative z-10">Why "January 2027 Is Far Away" Is the Wrong Frame</h3>
                                        <p className="text-white/60 relative z-10 text-base leading-relaxed mb-4">
                                            The most common mistake organizations make is assuming January 2027 means they have plenty of time.
                                        </p>
                                        <p className="text-white/60 relative z-10 text-base leading-relaxed mb-4">
                                            They do not. Here is why.
                                        </p>
                                        <p className="text-white/60 relative z-10 text-base leading-relaxed mb-4">
                                            Building FHIR-compliant API integrations takes longer than most IT teams estimate. You need to map your existing data to FHIR R4 standards. You need to connect your EHR to payer systems that are themselves still building their APIs. You need to test against real payer sandboxes. You need to train staff on the new workflows before you go live.
                                        </p>
                                        <p className="text-white/60 relative z-10 text-base leading-relaxed mb-4">
                                            None of that happens in a sprint. Organizations that start in October 2026 are going to be in real trouble.
                                        </p>
                                        <p className="text-white/60 relative z-10 text-base leading-relaxed mb-4">
                                            The practical timeline for a hospital that has not started yet: your technical groundwork needs to be finished by Q3 2026. That gives you Q4 for testing, training, then remediation before the January 1 hard date.
                                        </p>
                                        <p className="text-white/60 relative z-10 text-base leading-relaxed mb-0">
                                            You are already in Q2 2026. Do the math.

                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-6">What Your Systems Need to Actually Support</h2>
                                    <p className="mb-6">
                                        There are four APIs in this rule. Most conversations focus on the Prior Authorization API. The others get less attention but they are equally mandatory.
                                    </p>
                                    <p className="mb-6">
                                        The Provider Access API lets in-network providers retrieve patient data for patients they have a treatment relationship with. This one has significant implications for care coordination workflows.
                                    </p>
                                    <p className="mb-6">
                                        The Payer-to-Payer API requires data exchange when a member switches health plans. This closes the gap where patient history effectively disappears when someone changes insurance.
                                    </p>
                                    <p className="mb-6">
                                        The Prior Authorization API is the centerpiece. It automates the entire workflow from requirement checking through submission through decision.
                                    </p>
                                    <p className="mb-6">
                                        The technical stack requires HL7 FHIR R4, SMART on FHIR for authorization, then the Da Vinci implementation guides - Coverage Requirements Discovery, Documentation Templates, Prior Authorization Support - for the actual workflow execution. If those terms are unfamiliar to your IT team that is important information. It means your readiness assessment needs to start with a skills gap review, not a project plan. <a className='text-[#60C6B1] hover:underline' href='https://fire.ly/blog/cms-0057-f-decoded-must-have-apis-vs-nice-to-have-igs-for-2026-2027/' target='_blank'>Firely</a>
                                    </p>
                                    <p className="mb-10">
                                        If you want to understand how agentic AI connects to revenue cycle operations more broadly, our blog on <a className='text-[#60C6B1] hover:underline' href='https://www.fornexhealth.com/blogs/agentic-ai-in-healthcare-cto-guide' target='_blank'>what hospital CTOs need to know before piloting agentic AI</a>” walks through exactly where the technology is working right now.
                                    </p>
                                    <img
                                        src="/images/timeline.png"
                                        alt="Prior Auth Deadline"
                                        className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                    />

                                    <h2 className="text-3xl font-bold mb-6">What to Do This Week </h2>
                                    <p className="mb-6">
                                        Map your payer landscape first. Identify which of your top payers are impacted by CMS-0057-F. Not all payers are covered. Medicare Advantage, Medicaid, CHIP, along with Qualified Health Plans on the Federally Facilitated Exchange are all in scope. Commercial payers operating outside those programs are not mandated yet.
                                    </p>
                                    <p className="mb-6">
                                        Check your EHR vendor's roadmap. Your EHR vendor is a critical dependency. If they have not published a clear CMS-0057-F integration roadmap, ask them directly. A vendor without a clear answer by May 2026 is a red flag.
                                    </p>
                                    <p className="mb-6">
                                        Audit your current prior auth workflows. Before you automate anything, document how prior auth actually works in your organization today. Which specialties generate the most volume? Where are the delays concentrated? What percentage of requests get denied on first submission? This data shapes your implementation priorities.
                                    </p>
                                    <p className="mb-10">
                                        Start payer sandbox access now. Most impacted payers are publishing developer portals with sandbox access as they prepare for compliance. Getting registered in those developer programs takes time - often more time than the technical work itself.
                                    </p>
                                    <h2 className="text-3xl font-bold mb-6 text-[#60C6B1]">The Bottom Line</h2>
                                    <p className="mb-6">
                                        January 1, 2027 sounds far away in the abstract. When you account for integration timelines, testing cycles, staff training, then payer-side delays, eight months is genuinely tight for organizations that have not started.
                                    </p>
                                    <p className="mb-6">
                                        The hospitals that treat this deadline as urgent right now will go live in November 2026 with time to fix problems. The ones treating it as a 2027 problem will be scrambling in December.
                                    </p>
                                    <p className="mb-10">
                                        Which category your organization falls into is a choice being made today, even if it does not feel like one.
                                    </p>
                                    <p className="mt-10 text-lg italic border-t border-slate-100 pt-10 text-slate-500">
                                        Fornex Health supports hospitals with FHIR integration, EHR connectivity, then CMS compliance readiness. If your team needs a clear-eyed assessment of where you stand against the January 2027 deadline, reach out to our team.
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-10 h-fit">
                            {/* CTA Card */}
                            <div className="bg-[#60C6B1] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Ready for January 2027?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    Don’t wait until compliance deadlines create operational bottlenecks. Assess your FHIR readiness, identify workflow gaps, and prepare your hospital for scalable prior authorization automation.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block w-full py-4 bg-white text-[#60C6B1] rounded-xl font-medium text-center hover:bg-[#1a2b3c] hover:text-white transition-all duration-300 relative z-10 shadow-lg"
                                >
                                    Get Your FHIR Compliance Assessment
                                </Link>
                            </div>

                            {/* Related Posts Placeholder */}
                            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100">
                                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6">Related Insights</h4>
                                <div className="space-y-6">
                                    <Link href="/blogs/why-healthcare-software-fails-in-the-first-90-days" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Implementation</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Why Healthcare Software Fails in the First 90 Days</h5>
                                    </Link>
                                    <Link href="/blogs/agentic-ai-in-healthcare-cto-guide" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">AI readiness</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Agentic AI in Healthcare: What Hospital CTOs Need to Know</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
