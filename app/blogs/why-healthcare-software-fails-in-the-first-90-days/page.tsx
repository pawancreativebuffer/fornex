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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] max-w-4xl mx-auto">
                            Why Healthcare Software <span className="text-[#60C6B1]">Fails</span> in the First 90 Days
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
                                    <p className="font-medium text-white">May 1, 2026</p>
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
                                    src="/images/blog-header-1.png"
                                    alt="Healthcare Software Implementation"
                                    className="w-full h-[400px] object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed ">
                                    <p className="text-[20px] font-medium text-[#1a2b3c] mb-10">
                                        The first 90 days of a new healthcare software rollout are where everything either clicks or collapses. Excitement gives way to staff frustration. Adoption flatlines. The operations team is fielding complaints they weren't prepared for.
                                    </p>

                                    <p className="mb-10">
                                        This happens even when hospitals spend millions. Top-tier billing systems. Patient portals. Enterprise EHR integrations. They still fail. Not because the code is bad. Because the workflow gets blown up.
                                    </p>

                                    <div className="bg-[#60C6B1]/5 border-l-4 border-[#60C6B1] p-8 rounded-r-2xl mb-10">
                                        <h2 className="text-2xl font-bold mb-4 mt-0 text-[#1a2b3c]">The feature trap</h2>
                                        <p className="mb-0">
                                            Most healthcare software purchases start with a demo. Demos are good at one thing: making features look essential.
                                            A vendor shows your practice manager a dashboard with 50 widgets. She needs three. Specifically the ones that verify insurance eligibility before a patient walks in. The other 47 become visual clutter she scrolls past eight times a day.
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-6">Click fatigue is a clinical problem</h2>
                                    <p className="mb-6">
                                        Clinicians don't resist technology because they're technophobes. They resist it because bad software steals time they don't have.
                                    </p>
                                    <p className="mb-10">
                                        Add five extra clicks per patient encounter and it sounds trivial. For a physician seeing 30 patients a day, that's 150 extra clicks. Multiply that across a week and you've created what clinical staff call "pajama time." Finishing charts at home after a full shift because the system wasn't fast enough during it.
                                    </p>

                                    <div className="relative my-10 p-10 bg-[#1a2b3c] rounded-3xl overflow-hidden text-white">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#60C6B1] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
                                        <h3 className="text-2xl font-bold mb-6 relative z-10">Where most implementations actually die</h3>
                                        <p className="text-white/60 relative z-10 text-base leading-relaxed mb-0">
                                            A standalone app that doesn't talk to your existing systems isn't a solution. It's a new problem.
                                            When a new tool can't connect cleanly with Epic, Cerner, Athenahealth, data fragments. Front-desk staff do double entry. Errors appear. Scheduling conflicts accumulate. Real interoperability requires understanding HL7 and FHIR at an architectural level.
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-6">Vendors vs. partners</h2>
                                    <p className="mb-6">
                                        Here's the pattern: a hospital signs a contract, gets login credentials, attends an onboarding webinar, then gets left alone with software that doesn't quite fit. That's a vendor relationship. It's also the single most common reason implementations fail in the first quarter.
                                    </p>
                                    <p className="mb-10">
                                        What actually works is someone who audits your workflows before anything gets built. Who maps the bottlenecks. Who treats implementation as a process rather than a handoff.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-8 text-[#60C6B1]">What to do differently</h2>
                                    <ul className="space-y-6 list-none pl-0">
                                        <li className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#60C6B1] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">1</div>
                                            <p className="mt-0"><strong>Watch the work before you build:</strong> Shadow nurses, front-desk staff, and physicians through a real shift. The gaps you find will surprise you.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#60C6B1] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">2</div>
                                            <p className="mt-0"><strong>UI is a clinical requirement:</strong> A confusing interface isn't an aesthetic problem. It's a patient safety problem.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#60C6B1] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">3</div>
                                            <p className="mt-0"><strong>Push on interoperability:</strong> Ask your tech partner to show you, concretely, how data will sync with your existing systems in real time.</p>
                                        </li>
                                    </ul>

                                    <p className="mt-10 text-lg italic border-t border-slate-100 pt-10 text-slate-500">
                                        The software that works best is the kind nobody notices during a patient visit. Getting there takes more than good code. It takes someone who actually understands what the day looks like before they try to improve it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* CTA Card */}
                            <div className="bg-[#60C6B1] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Need a partner, not just a vendor?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    We audit your workflows before writing a single line of code. Let's build something your staff will actually use.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block w-full py-4 bg-white text-[#60C6B1] rounded-xl font-medium text-center hover:bg-[#1a2b3c] hover:text-white transition-all duration-300 relative z-10 shadow-lg"
                                >
                                    Get a Workflow Audit
                                </Link>
                            </div>

                            {/* Related Posts Placeholder */}
                            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100">
                                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6">Related Insights</h4>
                                <div className="space-y-6">
                                    <div className="group cursor-pointer">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Integration</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Why EHR Integration Matters for Healthcare</h5>
                                    </div>
                                    <div className="group cursor-pointer">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Billing</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">How Medical Billing Optimization Improves Revenue</h5>
                                    </div>
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
