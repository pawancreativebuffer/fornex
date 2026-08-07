import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "FERPA, COPPA & HIPAA Checklist for Children’s Health Platforms (2026 Guide)",
    description: "Learn how FERPA, COPPA, and HIPAA apply to children’s health platforms. This practical 2026 checklist helps healthcare product teams manage consent, retention, security, vendor compliance, and parental rights.",
    keywords: [
        "FERPA COPPA HIPAA checklist",
        "children's health platforms compliance",
        "pediatric healthcare software compliance",
        "COPPA verifiable parental consent healthcare",
        "FERPA school health records",
        "pediatric data retention HIPAA FERPA COPPA 2026",
        "healthcare product team compliance checklist"
    ],
};

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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] max-w-6xl mx-auto">
                            Compliance for Children's Health Platforms: A{' '}
                            <span className="text-[#60C6B1]">FERPA, COPPA &amp; HIPAA Checklist for Product Teams</span>
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <User size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Author</p>
                                    <p className="font-medium text-white">ForNex Health</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#60C6B1]/20 flex items-center justify-center border border-[#60C6B1]/30">
                                    <Calendar size={18} className="text-[#60C6B1]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium text-left">Published</p>
                                    <p className="font-medium text-white">August 7, 2026</p>
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
                                    src="/images/compliance_isnt_one_size_fits_all.png"
                                    alt="Compliance Isn't One-Size-Fits-All: Different laws apply in different contexts"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <div className="bg-slate-50 border-l-4 border-[#60C6B1] p-5 rounded-r-2xl mb-8">
                                        <p className="font-semibold text-[#1a2b3c] mb-1">
                                            <b>Quick answer:</b> If your healthcare software touches a minor's data, being HIPAA-compliant is not enough. COPPA applies the moment a child under 13 uses your product, and FERPA applies the moment a school is part of the data flow. This guide gives product teams a working checklist across all three, plus what we learned building a K-12 platform where all three applied at once.
                                        </p>
                                    </div>

                                    <p className="text-sm text-gray-400 italic mb-6">
                                        By ForNex Health. 10+ years building compliant healthcare software for pediatric and school-connected platforms.
                                    </p>

                                    <p className="mb-6">
                                        At ForNex Health, we spend most of our time thinking about HIPAA. It's the law our clients ask about first, the one baked into every architecture review, the one that shows up in nearly every RFP. And for most healthcare software, that instinct is right. HIPAA is the floor.
                                    </p>

                                    <p className="mb-6">
                                        But every so often, we get a project where HIPAA isn't the floor. It's just one of three floors stacked on top of each other.
                                    </p>

                                    <p className="mb-6">
                                        That happens the moment a child is involved.
                                    </p>

                                    <p className="mb-6">
                                        The instant your platform touches a minor's data, you're not just a "covered entity" anymore. You're also, potentially, subject to COPPA, because a child under 13 is using your product. And if a school is anywhere in the picture (a district referral, a school-based therapy program, a classroom integration), FERPA enters the room too. Suddenly the compliance conversation your team has had a hundred times needs to happen three more times, with three different regulators, three different definitions of "consent," and three different answers to a question as simple as "how long can we keep this?"
                                    </p>

                                    <p className="mb-10">
                                        We learned this the practical way, not from a legal brief, but from actually building for it. This checklist is the version of that lesson we wish we'd had on day one.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Why one child's data can trigger three different laws</h2>
                                    <div className="bg-slate-50 border-l-4 border-[#60C6B1] p-5 rounded-r-2xl mb-6">
                                        <p className="font-semibold text-[#1a2b3c] mb-0">
                                            <b>Quick answer:</b> A child holds three separate legal identities at once, patient, student, and app user, and each one is governed by a different law with its own rules.
                                        </p>
                                    </div>

                                    <p className="mb-6">
                                        Think about what a child is to different institutions at the same time.
                                    </p>

                                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-500">
                                        <li>To a clinician, they're a patient → HIPAA</li>
                                        <li>To a school, they're a student → FERPA</li>
                                        <li>To your app, they're a user under 13 → COPPA</li>
                                    </ul>

                                    <p className="mb-6">
                                        Same child, same data. Three separate legal identities, three separate rulebooks, all active simultaneously. A platform can be fully HIPAA-compliant and still be in violation the moment it ignores the other two.
                                    </p>

                                    <p className="mb-6">
                                        This is exactly the situation we ran into on a recent K-12 platform build. Internally, we call it the Super School project. It started as what looked like a standard student-data platform. It didn't take long to realize that "standard" doesn't really exist once minors and health-adjacent data mix. More on what that taught us below.
                                    </p>

                                    <div className="bg-[#1a2b3c] text-white p-6 rounded-2xl mb-10 border border-slate-700 shadow-md">
                                        <blockquote className="text-lg italic text-[#60C6B1] font-medium mb-3">
                                            "The mistake isn't ignoring compliance, it's assuming one compliance framework covers you. On a school-connected health platform, HIPAA gets you maybe a third of the way there."
                                        </blockquote>
                                        <p className="text-sm text-white/80 font-medium mb-0">
                                            — Said by [Name], [Title], ForNex Health
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-6">The checklist</h2>
                                    <div className="bg-slate-50 border-l-4 border-[#60C6B1] p-5 rounded-r-2xl mb-6">
                                        <p className="font-semibold text-[#1a2b3c] mb-0">
                                            <b>Quick answer:</b> Seven areas to check before shipping any feature that touches a minor's health or education data: consent, data minimization, retention, security, vendor agreements, marketing, and parental rights.
                                        </p>
                                    </div>

                                    <p className="mb-6">
                                        We built this the way we wish compliance guidance usually came: scannable, actionable, and organized by what you're actually deciding as a product team, not by which statute number governs it.
                                    </p>

                                    <h3 className="text-xl font-bold mb-4">Age-gating &amp; consent</h3>
                                    <p className="mb-4">
                                        Get consent before collection, not after, and know who is legally allowed to give it.
                                    </p>
                                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-500">
                                        <li>Age screens should be neutral. A plain date-of-birth field, not a "Are you over 13?" checkbox that quietly invites a lie</li>
                                        <li>Verifiable parental consent is required before collecting any personal information from a child under 13</li>
                                        <li>If a school is the customer, consent may run through the school (the "school-official" exception), but only for the educational purpose the school authorized, never for marketing or ad use</li>
                                        <li>Document who's legally allowed to consent: a parent, a legal guardian, or in custody situations, whoever holds legal authority. Keep a record of it</li>
                                    </ul>

                                    <h3 className="text-xl font-bold mb-4">Data minimization</h3>
                                    <p className="mb-4">
                                        Collect only what a feature needs, and treat every media type as regulated data.
                                    </p>
                                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-500">
                                        <li>Collect only what a feature actually needs. No optional fields "for later"</li>
                                        <li>Treat voice recordings, photos, and video the same as names and emails. They're all regulated personal information the moment they're captured</li>
                                        <li>If you're extracting biometric data (like a voiceprint) from audio, that's its own protected category. Don't assume general audio consent covers it</li>
                                    </ul>

                                    <h3 className="text-xl font-bold mb-4">Retention limits, by data type, not by default</h3>
                                    <p className="mb-4">
                                        There is no single retention number. Each data type follows a different rule.
                                    </p>
                                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-500">
                                        <li><b>General account data:</b> COPPA requires "reasonably necessary," written into policy. Not indefinite, not undefined</li>
                                        <li><b>Education records:</b> FERPA sets no federal number. It's governed by the school's state records schedule</li>
                                        <li><b>Health/therapy records for minors:</b> HIPAA doesn't set the clinical retention period either. State medical-record law does, and for minors it's typically age of majority plus several more years</li>
                                        <li><b>Compliance documentation (consent forms, agreements, audit logs):</b> HIPAA does set a number here. Six years, fixed</li>
                                    </ul>
                                    <p className="mb-8">
                                        Four data types, four different retention logics, sitting in the same database. That's the trap.
                                    </p>

                                    {/* Middle Image */}
                                    <img
                                        src="/images/hipaa_isnt_enough_childrens_health.png"
                                        alt="HIPAA Isn't Enough: What every healthcare product team needs to know before collecting a child's data"
                                        className="w-full object-cover rounded-2xl my-10 shadow-lg"
                                    />

                                    <h3 className="text-xl font-bold mb-4">Security &amp; access control</h3>
                                    <p className="mb-4">
                                        Encrypt everywhere, scope access tightly, and have a tested breach plan ready before you need it.
                                    </p>
                                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-500">
                                        <li>Encrypt everywhere: in transit and at rest</li>
                                        <li>Role-based access. A clinician sees their assigned patients, not the whole roster</li>
                                        <li>Audit logging on every access to a record touching a minor's data</li>
                                        <li>A documented, tested breach response plan, with state notification deadlines already mapped. Not something you write for the first time during an actual incident</li>
                                    </ul>

                                    <h3 className="text-xl font-bold mb-4">Vendor &amp; subprocessor management</h3>
                                    <p className="mb-4">
                                        Every third-party tool inherits your compliance obligations, so vet it before it ships.
                                    </p>
                                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-500">
                                        <li>Every SDK, analytics tool, or embedded widget inherits your compliance obligations. Regulators have pursued companies for third-party trackers they never personally vetted</li>
                                        <li>Every subprocessor (your cloud host, your transcription service, your email tool) needs a signed data-processing agreement with the relevant obligations flowing down to them</li>
                                        <li>Don't assume a vendor's general privacy policy covers children's or health data specifically. Check</li>
                                    </ul>

                                    <h3 className="text-xl font-bold mb-4">Marketing &amp; advertising</h3>
                                    <p className="mb-4">
                                        No behavioral ads on child-facing screens, and any promotional use of a child's data needs its own separate consent.
                                    </p>
                                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-500">
                                        <li>No behavioral or targeted advertising on any child-facing surface. Full stop</li>
                                        <li>Using a child's data (or image) for marketing purposes requires its own separate, explicit consent. Your general sign-up consent doesn't cover it</li>
                                        <li>Even with consent, most major ad networks restrict targeting under-13 users regardless of what you've collected. This is rarely worth building toward anyway</li>
                                    </ul>

                                    <h3 className="text-xl font-bold mb-4">Parental &amp; guardian rights</h3>
                                    <p className="mb-4">
                                        Parents can review, correct, or delete their child's data, and you need a real process for all three.
                                    </p>
                                    <ul className="list-disc pl-6 mb-10 space-y-2 text-gray-500">
                                        <li>Parents can request to review, correct, or delete their child's data. Build a working process for this, even if it's not fully self-serve</li>
                                        <li>If consent is withdrawn, the data already collected generally needs to go too. Not just future collection halted</li>
                                        <li>Direct notice to parents before collection begins is required. A general privacy policy on your website isn't a substitute</li>
                                    </ul>

                                    <h2 className="text-3xl font-bold mb-6">What building Super School actually taught us</h2>
                                    <div className="bg-slate-50 border-l-4 border-[#60C6B1] p-5 rounded-r-2xl mb-6">
                                        <p className="font-semibold text-[#1a2b3c] mb-0">
                                            <b>Quick answer:</b> The hardest part wasn't any single rule, it was that the same piece of data (a therapy session recording) needed three different retention clocks and three different consent rules depending on which "hat" it was wearing.
                                        </p>
                                    </div>

                                    <p className="mb-6">
                                        The checklist above reads clean. The real project didn't.
                                    </p>

                                    <p className="mb-6">
                                        The thing that caught us off guard wasn't any single requirement. It was how differently the same kind of data had to be treated depending on which "hat" it was wearing at that moment. A recording of a child's voice during a school-referred therapy session wasn't one data point with one rule. It was health data (HIPAA), a student record (FERPA, because the referral came through the school), and a child's personal information (COPPA), all at once, all with different retention clocks, different consent requirements, and different people who were allowed to ask for it to be deleted.
                                    </p>

                                    <p className="mb-6">
                                        We also learned that the biggest risk usually isn't the obvious stuff. Teams generally get consent and age-gating right because it's the first thing anyone checks. The risk hides in the boring infrastructure decisions: an analytics SDK added for a totally reasonable reason, configured with default settings that quietly collect a persistent identifier from a child. A retention policy that technically exists but was written once, in general terms, and never mapped against the four different data types actually living in the database.
                                    </p>

                                    <p className="mb-10">
                                        The fix wasn't more legal review. It was building compliance into the same checklist a product team already runs through before shipping, so it stops being a special project and starts being a normal Tuesday.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Where this leaves your team</h2>
                                    <div className="bg-slate-50 border-l-4 border-[#60C6B1] p-5 rounded-r-2xl mb-6">
                                        <p className="font-semibold text-[#1a2b3c] mb-0">
                                            <b>Quick answer:</b> The right question isn't "are we compliant," it's "compliant with which of the three." Map your data against HIPAA, FERPA, and COPPA separately before you assume one covers you.
                                        </p>
                                    </div>

                                    <p className="mb-6">
                                        If your platform is HIPAA-compliant today and a school, a minor, or pediatric data is anywhere on your roadmap, the honest question to ask isn't "are we compliant." It's "compliant with which of the three."
                                    </p>

                                    <p className="mb-6">
                                        That's usually the gap. Not bad intentions, just three rulebooks that were never designed to be read together, applied to a product roadmap that has to move fast anyway.
                                    </p>

                                    <p className="mb-10">
                                        If you're building health software that touches minors and haven't mapped this yet, that's exactly the kind of audit we help teams run, before it becomes a support ticket, a parent complaint, or a regulator's letter. Reach out to ForNex Health and we'll walk through your specific data flows against this checklist together.
                                    </p>

                                    {/* Related Reading Section */}
                                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10 border border-slate-100">
                                        <h3 className="text-2xl font-bold text-[#1a2b3c] mb-2">Related reading on this topic</h3>
                                        <p className="text-sm text-gray-500 mb-6 italic">
                                            (Internal links to build out as a content cluster around this pillar page)
                                        </p>
                                        <ul className="space-y-3 text-base">
                                            <li className="flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#60C6B1]"></span>
                                                <Link href="/blogs/hipaa-compliance-checklist-custom-ehr-systems-2026" className="text-[#1a2b3c] hover:text-[#60C6B1] font-semibold transition-colors">
                                                    HIPAA Basics for Health-Tech Product Teams
                                                </Link>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#60C6B1]"></span>
                                                <span className="text-[#1a2b3c] font-semibold">
                                                    COPPA Consent, Explained for Non-Lawyers
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#60C6B1]"></span>
                                                <span className="text-[#1a2b3c] font-semibold">
                                                    FERPA for Vendors: What "School Official" Actually Means
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#60C6B1]"></span>
                                                <span className="text-[#1a2b3c] font-semibold">
                                                    Data Retention Rules for Pediatric Health Platforms
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Citations Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">Citations</h3>
                                        <ol className="space-y-3 text-sm list-decimal pl-5 text-gray-300">
                                            <li>
                                                FTC, Children's Online Privacy Protection Rule (COPPA), 16 CFR Part 312 —{' '}
                                                <a href="https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312
                                                </a>
                                            </li>
                                            <li>
                                                FTC, "Complying with COPPA: Frequently Asked Questions" —{' '}
                                                <a href="https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
                                                </a>
                                            </li>
                                            <li>
                                                FTC, "FTC Finalizes Changes to Children's Privacy Rule Limiting Companies' Ability to Monetize Kids' Data," press release, Jan 16, 2025 —{' '}
                                                <a href="https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data
                                                </a>
                                            </li>
                                            <li>
                                                U.S. Department of Education, FERPA hub —{' '}
                                                <a href="https://studentprivacy.ed.gov/ferpa" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://studentprivacy.ed.gov/ferpa
                                                </a>
                                            </li>
                                            <li>
                                                U.S. Department of Education, FERPA Frequently Asked Questions —{' '}
                                                <a href="https://studentprivacy.ed.gov/frequently-asked-questions" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://studentprivacy.ed.gov/frequently-asked-questions
                                                </a>
                                            </li>
                                            <li>
                                                U.S. Department of Education, "Who is a 'school official' under FERPA?" —{' '}
                                                <a href="https://studentprivacy.ed.gov" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://studentprivacy.ed.gov
                                                </a>
                                            </li>
                                            <li>
                                                HHS, HIPAA Privacy Rule and Security Rule, 45 CFR §164.316 and §164.530 —{' '}
                                                <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://www.hhs.gov/hipaa/for-professionals/privacy/index.html
                                                </a>
                                            </li>
                                            <li>
                                                American Academy of Pediatrics, "Medical Record Retention" —{' '}
                                                <a href="https://www.aap.org" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://www.aap.org
                                                </a>
                                            </li>
                                            <li>
                                                Congressional Research Service, FERPA and Its Exceptions —{' '}
                                                <a href="https://www.congress.gov/crs-product/IF13155" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    https://www.congress.gov/crs-product/IF13155
                                                </a>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-10 h-fit">
                            {/* CTA Card */}
                            <div className="bg-[#60C6B1] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10 font-bold">Ready to Build Compliant Health Software?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    Whether you're developing pediatric digital health, school-connected tools, or AI platforms, let our engineering team guide your compliance architecture.
                                </p>
                                <a
                                    href="https://calendly.com/pawan_panwar/letstalk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full py-4 bg-white text-[#60C6B1] rounded-xl font-medium text-center hover:bg-[#1a2b3c] hover:text-white transition-all duration-300 relative z-10 shadow-lg"
                                >
                                    Talk to Our Experts
                                </a>
                            </div>

                            {/* Other Blogs */}
                            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100">
                                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6 font-bold">Related Insights</h4>
                                <div className="space-y-6">
                                    <Link href="/blogs/hipaa-compliant-llms-which-ai-can-touch-patient-data-in-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">AI &amp; HIPAA</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">HIPAA Compliant LLMs: Which AI Can Touch Patient Data in 2026</h5>
                                    </Link>
                                    <Link href="/blogs/hipaa-compliance-checklist-custom-ehr-systems-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">EHR Compliance</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">HIPAA Compliance Checklist for Custom EHR Systems (2026 Guide)</h5>
                                    </Link>
                                    <Link href="/blogs/healthcare-software-development-what-to-build-in-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Healthcare Development</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2 font-bold">Healthcare Software Development: What to Build in 2026</h5>
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
