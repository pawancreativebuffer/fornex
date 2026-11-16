import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Google's Healthcare AI Vision Along With Kaiser's ROI Framework",
    description: "Google's Aashima Gupta along with Kaiser's VP of AI just defined what purposeful healthcare AI looks like at HIMSS. Here is the framework every hospital needs right now.",
    keywords: [
        "healthcare AI ROI framework 2026",
        "Google healthcare AI purpose 2026",
        "Kaiser Permanente AI ROI",
        "HIMSS AI Healthcare Forum 2026",
        "AI with purpose healthcare"
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
                            Google Calls It “AI with Purpose.” Kaiser Says It Requires Four P’s. <span className="text-[#60C6B1]">Both Are Right.</span>
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
                                    <p className="font-medium text-white">November 16, 2026</p>
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
                                    src="/images/healthcare-ai-roi-framework-2026.webp"
                                    alt="Healthcare professionals reviewing an AI-powered clinical workflow dashboard illustrating Google's AI with Purpose vision and Kaiser's Four P's framework."
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="text-sm text-slate-400 mb-6 font-medium">
                                        Last reviewed: October 26, 2026. Fornex Health.
                                    </p>

                                    <p className="mb-6">
                                        The HIMSS AI in Healthcare Forum ran October 22-23 in San Diego. It’s the closest thing healthcare has to a consensus-building moment on where AI is actually going. Not the vendor demos. The people running AI at scale inside real health systems talking honestly about what works.
                                    </p>

                                    <p className="mb-6">
                                        Two ideas came out of this week’s forum that deserve more attention than they’ll get in the typical conference recap.
                                    </p>

                                    <p className="mb-6">
                                        Aashima Gupta, Google’s healthcare leader, described agentic AI as representing “a big move from data to action that didn’t exist before.” Her framing for what makes healthcare AI valuable: AI with purpose. Not AI for its own sake, not AI because the board wants an AI strategy, but AI deployed against a specific problem with a clear reason to exist.
                                    </p>

                                    <p className="mb-6">
                                        Kaiser Permanente’s VP of AI along with emerging technology said something quieter along with equally important. For AI to truly show ROI in healthcare, it’s essential to focus resources on people, priorities, processes along with policies. Beyond technology spending.
                                    </p>

                                    <p className="mb-10">
                                        Those two ideas are connected. And together they describe the framework that separates healthcare organizations generating measurable AI value from those generating impressive demos.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What Is “AI with Purpose” in Healthcare?</h2>

                                    <p className="mb-6">
                                        “AI with purpose” is Google’s framing for healthcare AI deployments grounded in a specific operational problem — not AI deployed broadly to signal technological sophistication. Purposeful AI starts from the patient need or operational inefficiency being solved, then asks whether AI is the right tool along with what governance is required before deployment begins.
                                    </p>

                                    <p className="mb-6">
                                        The contrast with purposeless AI deployment is visible in the statistics. The Healthcare AI Readiness Index from Cotiviti along with MedCity News found that healthcare organizations are adopting AI faster than building governance. Only 25% of organizations have moved at least 40% of their AI experiments to production. The pilots that never ship are almost always the ones that started with the technology rather than the problem.
                                    </p>

                                    <p className="mb-10">
                                        Starting with the problem sounds trivially obvious. In practice, healthcare AI procurement often starts with a vendor demo that’s impressive along with then tries to find the problem it solves afterward. That inversion is what produces pilots that generate interest along with never generate outcomes.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Kaiser’s Four P’s for Healthcare AI ROI</h2>

                                    <p className="mb-6">
                                        Kaiser Permanente’s VP of AI along with emerging tech laid out what AI ROI actually requires at the HIMSS forum. The framework is People, Priorities, Processes along with Policies.
                                    </p>

                                    <p className="mb-6">
                                        <b>People</b> means the workforce that will use the AI tool needs to be involved in deploying it, not just trained on it after the fact. Clinicians along with billing staff along with coordinators who were part of defining the tool’s workflow are significantly more likely to use it along with provide the feedback loop that makes the AI improve. Those who weren’t involved don’t trust it.
                                    </p>

                                    <p className="mb-6">
                                        <b> Priorities</b> means knowing which problem you’re actually solving along with why it matters more than the other problems you could be solving. Healthcare organizations that deploy AI without a priority framework end up with eight pilots running simultaneously, none getting enough attention to reach production quality, all consuming resources without generating return.
                                    </p>

                                    <p className="mb-6">
                                        <b> Processes</b> is the one that Kaiser’s VP specifically emphasized as underrated. For AI to truly show ROI it’s essential to focus resources on processes. AI layered on top of a broken process makes a broken process run faster. The process work has to come before the AI. This appears in every successful healthcare AI case study along with gets underweighted in almost every procurement conversation.
                                    </p>

                                    <p className="mb-10">
                                        <b>Policies</b> means governance. Who owns the AI outputs, what happens when the AI is wrong, how access is controlled along with what the audit trail looks like. Policies aren’t the exciting part of AI deployment. They’re what makes AI deployment durable.
                                    </p>

                                    <img
                                        src="/images/google-ai-purpose-kaiser-four-ps-framework.webp"
                                        alt="Infographic comparing Google's AI with Purpose approach with Kaiser Permanente's Four P's for healthcare AI ROI."
                                        className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                    />

                                    <h2 className="text-3xl font-bold mb-6">What Google’s Agentic AI Claim Actually Means</h2>

                                    <p className="mb-6">
                                        Gupta’s description of agentic AI as “a big move from data to action that didn’t exist before” is worth sitting with.
                                    </p>

                                    <p className="mb-6">
                                        The previous generation of healthcare AI was primarily analytical. AI that reads imaging, identifies patterns along with surfaces a finding for a clinician to act on. AI that processes billing data, identifies denial risk along with flags a claim for review. Data to insight.
                                    </p>

                                    <p className="mb-6">
                                        Agentic AI is data to action. The AI doesn’t just identify a prior authorization requirement — it initiates the request. It doesn’t just flag a medication adherence gap — it sends the patient a message. It doesn’t just surface a diagnostic finding — it prioritizes the radiologist’s worklist.
                                    </p>

                                    <p className="mb-6">
                                        That’s genuinely new capability. It’s also genuinely new risk. The liability question that the healthcare industry is actively working through right now — who is accountable when an AI agent takes an action that causes harm — doesn’t have settled answers yet.
                                    </p>

                                    <p className="mb-10">
                                        Google’s “AI with purpose” framing is partly a response to that risk. An AI agent deployed purposefully, against a specific problem, with clear governance along with named human oversight, has a defined accountability structure. An AI agent deployed because it was technically impressive along with somebody thought it might be useful doesn’t.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">How to Apply Both Frameworks Before Your Next AI Decision</h2>

                                    <p className="mb-6">
                                        Before your next healthcare AI procurement, run it through both lenses.
                                    </p>

                                    <p className="mb-6">
                                        Google’s purposeful AI question: what specific problem does this solve, who experiences that problem, along with what does a successful outcome look like in measurable terms? If you can’t answer all three, the deployment isn’t purposeful yet.
                                    </p>

                                    <p className="mb-6">
                                        Kaiser’s four P’s: who on our team will use this along with have they been involved in defining how it should work? What priority does this solve relative to other priorities we have? What process changes need to happen before this AI goes live? What policies govern this tool’s use along with its outputs along with its error handling?
                                    </p>

                                    <p className="mb-6">
                                        These aren’t bureaucratic gatekeeping questions. They’re the questions that separate deployments that generate ROI from deployments that generate slide decks.
                                    </p>

                                    <p className="mb-6">
                                        For the governance framework your organization needs to answer Kaiser’s Policies question before any AI deployment, read:{' '}
                                        <Link href="/blogs/ai-governance-in-healthcare-is-no-longer-optional" className="text-[#60C6B1] hover:underline font-semibold">
                                            AI Governance in Healthcare Is No Longer Optional
                                        </Link>
                                    </p>

                                    <p className="mb-10">
                                        Our{' '}
                                        <Link href="/services/healthcare-software-development" className="text-[#60C6B1] hover:underline font-semibold">
                                            Healthcare Software Development
                                        </Link>{' '}
                                        team builds healthcare AI deployments that start from the operational problem, not the technology — the purposeful AI approach that actually generates measurable clinical along with financial outcomes.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

                                    <h3 className="text-xl font-bold mb-2">What is “AI with purpose” in healthcare?</h3>
                                    <p className="mb-6">
                                        “AI with purpose” is Google healthcare leader Aashima Gupta’s framework from the HIMSS AI in Healthcare Forum in October 2026. It describes AI deployed against a specific operational problem with clear governance, rather than AI adopted for technological sophistication or competitive optics.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">What is Kaiser Permanente’s four P’s framework for healthcare AI ROI?</h3>
                                    <p className="mb-6">
                                        Kaiser Permanente’s VP of AI along with emerging technology presented a framework at the HIMSS AI Forum stating that healthcare AI ROI requires focus on four elements beyond technology spending: People (workforce involvement), Priorities (specific problem definition), Processes (workflow redesign before AI deployment) along with Policies (governance structure).
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">What did Google’s healthcare leader say at the HIMSS AI Forum 2026?</h3>
                                    <p className="mb-6">
                                        Google’s Aashima Gupta said agentic AI represents “a big move from data to action that didn’t exist before” along with framed the key requirement for valuable healthcare AI as having purpose — being deployed against a specific problem rather than broadly for technology’s sake.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">What is the difference between analytical AI along with agentic AI in healthcare?</h3>
                                    <p className="mb-6">
                                        Analytical AI identifies patterns along with surfaces insights for humans to act on — imaging AI, denial risk scoring along with predictive analytics. Agentic AI takes action — initiating prior authorization requests, contacting patients, prioritizing clinical worklists. The difference is data to insight versus data to action.
                                    </p>

                                    <h3 className="text-xl font-bold mb-2">How should hospitals evaluate healthcare AI before procurement?</h3>
                                    <p className="mb-10">
                                        Apply two frameworks: Google’s purposeful AI test (what specific problem, who experiences it along with what’s a measurable successful outcome) along with Kaiser’s four P’s (People involved in design, Priority definition, Process redesign before deployment along with Policy governance structure). Deployments that can’t answer these questions clearly are likely to generate pilots rather than production outcomes.
                                    </p>

                                    {/* Citations Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ol className="space-y-3 text-sm list-decimal pl-5 text-gray-300">
                                            <li>
                                                <a href="https://www.healthcareitnews.com/news/google-healthcare-leader-offers-vision-ai-purpose" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    Healthcare IT News — Google Healthcare Leader Offers a Vision of ‘AI with Purpose’ (October 23, 2026)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.healthcareitnews.com/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    Healthcare IT News — Artificial Intelligence News along with HIMSS AI Forum Coverage (October 22-23, 2026)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.chiefhealthcareexecutive.com/view/hospitals-in-2026-predictions-for-patient-care-technology-and-more" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    Chief Healthcare Executive — Hospitals in 2026: AI along with Patient Care (October 2026)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.aha.org/topics/artificial-intelligence-ai" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline break-all">
                                                    AHA — AI Topics along with Training Roadmap for Hospital Staff (October 15, 2026)
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
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Planning Your Healthcare AI Deployment?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    Whether you are establishing AI governance, redesigning clinical workflows, or building purposeful agentic AI systems that deliver measurable ROI, let our team guide your strategy.
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
                                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6">Related Insights</h4>
                                <div className="space-y-6">
                                    <Link href="/blogs/ai-governance-in-healthcare-is-no-longer-optional" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">AI Governance</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">AI Governance in Healthcare Is No Longer Optional: What Hospital Leaders Must Put in Place</h5>
                                    </Link>
                                    <Link href="/blogs/ai-agents-healthcare-paperwork-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Healthcare AI</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">AI Agents Are Doing Hospital Paperwork Now. Here Is What That Actually Looks Like.</h5>
                                    </Link>
                                    <Link href="/blogs/big-tech-healthcare-ai-investment-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Big Tech in Healthcare</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Big Tech Is Betting $700 Billion on AI. Hospitals Are Where the Return Gets Proven — But the Window Is Narrowing.</h5>
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
