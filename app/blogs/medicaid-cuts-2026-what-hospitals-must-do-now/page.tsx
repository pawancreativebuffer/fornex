import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Medicaid Cuts 2026: What Hospitals Must Do Now",
    description: "$1 trillion in Medicaid cuts is hitting hospital margins now. Here is the technology strategy that separates hospitals that survive from the ones that close.",
    keywords: ["Medicaid cuts hospitals 2026", "hospital revenue cycle management", "healthcare AI automation 2026", "hospital technology strategy", "healthcare IT cost reduction"],
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
                            Medicaid Cuts 2026: <span className="text-[#60C6B1]">What Hospitals Must Do Now</span>
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
                                    <p className="font-medium text-white">June 19, 2026</p>
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
                                    src="/images/medicaid_cuts_2026.png"
                                    alt="Medicaid Cuts 2026"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        The numbers coming out of Washington in June 2026 are not abstract policy figures. They are operational reality for hospital leadership right now.
                                    </p>
                                    <p className="mb-6">
                                        A new analysis from <a href="https://www.usnews.com/news/health-news/articles/2026-04-01/hundreds-of-u-s-hospitals-at-risk-of-shutting-down-from-medicaid-cuts" target="_blank" className="text-[#60C6B1]">Public Citizen found that 446 hospitals are at high risk of closing or cutting services</a> due to planned Medicaid cuts under President Donald Trump. Medicaid covers approximately one-fifth of all hospital spending in the United States.
                                    </p>
                                    <p className="mb-6">
                                        The "One Big Beautiful Bill" <a href="https://www.modiohealth.com/life/credentialing/with-medicaid-cuts-ahead-what-can-we-expect-to-see-in-2026" target="_blank" className="text-[#60C6B1]">is expected to cut federal Medicaid spending by $1 trillion</a> over the next 10 years. A KFF analysis confirms that rural communities will feel the hit especially hard since Medicaid covers 1 in 4 adults in rural areas - a higher share than in urban regions.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.usnews.com/news/health-news/articles/2026-04-01/hundreds-of-u-s-hospitals-at-risk-of-shutting-down-from-medicaid-cuts" target="_blank" className="text-[#60C6B1]">Trinity Health, a Michigan-based system, already expects to lose $1.5 billion</a> due to recent government policy changes. It has already cut 10.5% of its workforce.
                                    </p>
                                    <p className="mb-10">
                                        This is not a future problem. The financial pressure is hitting balance sheets now. The decisions hospital leadership makes about technology investment in the next 90 days will determine which side of the closure risk line they end up on.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Why Traditional Cost-Cutting Will Not Be Enough</h2>
                                    <p className="mb-6">
                                        <a href="https://www.qventus.com/resources/blog/medicaid-cuts-2026-what-every-health-system-cfo-needs-to-know/" target="_blank" className="text-[#60C6B1]">Federal spending cuts to Medicaid taking full effect in 2026 are set to create unprecedented financial pressure on health systems nationwide</a>. Commercial medical costs are projected to jump 8.5% while Medicaid dollars tighten at the same time.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.qventus.com/resources/blog/medicaid-cuts-2026-what-every-health-system-cfo-needs-to-know/" target="_blank" className="text-[#60C6B1]">Traditional responses like reducing staff or eliminating services will not be enough to weather this storm.</a> Those options may bring short-term relief but bring long-term pain as the potential for future revenue shrinks.
                                    </p>
                                    <p className="mb-6">
                                        The math hospitals are running like this. More patients arriving uninsured because they lost Medicaid coverage. Higher uncompensated care costs on the same fixed infrastructure. Declining reimbursement per patient on the Medicaid population that remains covered. Simultaneously rising operating costs from wage inflation along with supply chain pressure.
                                    </p>
                                    <p className="mb-6">
                                        The only exit from that equation is structural operational efficiency. Not at the margins. The organizations that survive this cycle will be the ones that reduced their cost to deliver care per patient - not the ones that cut their way to a smaller version of the same inefficient model.
                                    </p>
                                    <p className="mb-10">
                                        Technology is how you do that. But not every technology investment delivers in a compressed timeline. This is where prioritization matters.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Revenue Cycle Is the Highest-Priority Area Right Now</h2>
                                    <p className="mb-6">
                                        When a hospital is under acute financial pressure, the wrong move is pausing technology investment. The right move is being ruthless about which investments return value in 12 months rather than 36.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.combinehealth.ai/blog/ai-tools-for-revenue-cycle-management" target="_blank" className="text-[#60C6B1]">U.S. healthcare organizations lose over $262 billion annually due to revenue cycle inefficiencies</a> including denials, undercoding, delayed follow-ups along with manual workflows. Every dollar of that is recoverable without adding a single new patient. In a Medicaid-constrained environment where new revenue is harder to generate, fixing leakage from existing revenue is the fastest path to margin improvement.
                                    </p>
                                    <p className="mb-6">
                                        The specific places to look: eligibility verification at registration, denial prevention before claims are submitted, prior authorization processing time along with appeal rates. <a href="https://www.combinehealth.ai/blog/ai-tools-for-revenue-cycle-management" target="_blank" className="text-[#60C6B1]">AI systems automating eligibility verification reach 99% accuracy while freeing staff for more complex tasks. Organizations typically see positive ROI within 6 to 12 months along with improved clean claim rates moving from 75-85% up to 95%.</a>
                                    </p>
                                    <p className="mb-10">
                                        For the specific mistakes hospitals make when deploying AI in revenue cycle along with how to avoid them, read our full guide: <a href="https://www.fornexhealth.com/blogs/what-most-hospitals-get-wrong-when-deploying-ai-agents-in-revenue-cycle" target="_blank" className="text-[#60C6B1]">What Most Hospitals Get Wrong When Deploying AI Agents in Revenue Cycle</a>.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The FHIR Prior Auth Deadline Becomes a Cost-Saving Opportunity</h2>
                                    <p className="mb-6">
                                        <a href="https://www.hfma.org/finance-and-business-strategy/hospitals-brace-for-looming-federal-cuts-in-medicaid-and-elsewhere/" target="_blank" className="text-[#60C6B1]">CMS regulatory guidance to states on Medicaid work requirements is due June 2026, leaving only six months before the December 31, 2026 start date.</a> Some doubt the Trump administration will routinely approve delays.
                                    </p>
                                    <p className="mb-6">
                                        Hospitals building FHIR-compliant prior authorization workflows right now are not just achieving compliance. They are building the infrastructure that eliminates manual prior auth labor. In a cost-reduction environment, that labor savings is material.
                                    </p>
                                    <p className="mb-10">
                                        Read our full breakdown: <a href="https://www.fornexhealth.com/blogs/the-fhir-prior-auth-deadline-is-january-2027" target="_blank" className="text-[#60C6B1]">The FHIR Prior Auth Deadline Is January 2027 - Is Your Hospital Ready?</a>
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What Separates the 446 At-Risk Hospitals From the Rest</h2>
                                    <p className="mb-6">
                                        Hospitals were considered at high risk if at least 20% of their revenue comes from Medicaid along with other low-income government programs while already operating at a loss. Two variables. Revenue concentration in Medicaid. Operating losses already on the books.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.fiercehealthcare.com/payers/2026-outlook-domino-effect-medicaid-cuts-and-hidden-costs-healthcare" target="_blank" className="text-[#60C6B1]">Urban safety-net hospitals will be hardest hit by the Medicaid cuts</a>, in part because of significant reductions to disproportionate share hospital payments. Safety-net hospitals typically have the least technology investment. They are about to face the most severe financial pressure.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.modiohealth.com/life/credentialing/with-medicaid-cuts-ahead-what-can-we-expect-to-see-in-2026" target="_blank" className="text-[#60C6B1]">Rural communities will face $137 billion in reduced federal Medicaid spending over 10 years</a>. For rural hospitals where Medicaid is the dominant payer, the math gets difficult fast.
                                    </p>
                                    <p className="mb-6">
                                        The technology implication is direct. A hospital with 25% Medicaid revenue concentration needs to do two things simultaneously. Protect every dollar of that Medicaid revenue through clean billing, tight prior auth processes along with minimal claim denials. Grow the non-Medicaid revenue share by improving patient experience along with operational efficiency enough to attract commercially-insured patients.
                                    </p>
                                    <p className="mb-10">
                                        Both of those are technology problems.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The AI Deployment Gap Hospitals Cannot Afford in 2026</h2>
                                    <p className="mb-6">
                                        <a href="https://www.pixelbrainy.com/blog/ai-adoption-statistics" target="_blank" className="text-[#60C6B1]">More than 80% of health system executives believe generative AI along with agentic AI will deliver moderate-to-significant value across clinical and business operations in 2026.</a>
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://ventionteams.com/solutions/ai/adoption-statistics" target="_blank" className="text-[#60C6B1]">Only 25% of organizations have moved at least 40% of their AI experiments into production environments.</a> In a normal financial environment, slow AI deployment is a missed opportunity. Under Medicaid-cut pressure, it is an operational risk.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://ventionteams.com/solutions/ai/adoption-statistics" target="_blank" className="text-[#60C6B1]">Gartner predicts organizations will abandon 60% of AI projects unsupported by AI-ready data.</a> In healthcare, data quality problems are structural. Patient data exists in EHRs, in payer systems, in imaging platforms, in RPM devices along with patient-reported outcomes tools. Most of those systems do not share data in real time.
                                    </p>
                                    <p className="mb-6">
                                        The organizations closing this gap fastest are picking one workflow, deploying it properly, measuring the result, then expanding. Not piloting broadly. Deploying narrowly.
                                    </p>
                                    <p className="mb-10">
                                        For the full picture on why this gap exists along with how to close it: <strong>Why 80% of Healthcare Executives Believe AI Will Transform Care But Most Have Not Deployed It Yet</strong>
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Your 12-Month Technology Roadmap Under Financial Pressure</h2>
                                    <h3 className="text-2xl font-bold mb-4">Months 1 to 3 - Revenue Protection</h3>
                                    <p className="mb-6">
                                        Audit your current denial rate by payer. Identify the top three denial reason codes. Deploy AI eligibility verification if not already live. Implement automated prior auth processing for your highest-volume service lines. These are 90-day ROI items.
                                    </p>
                                    <h3 className="text-2xl font-bold mb-4">Months 3 to 6 - Cost Structure</h3>
                                    <p className="mb-6">
                                        <a href="https://www.hfma.org/finance-and-business-strategy/hospitals-brace-for-looming-federal-cuts-in-medicaid-and-elsewhere/" target="_blank" className="text-[#60C6B1]">Organizations are questioning how to fundamentally change their cost structure to prepare for significant reimbursement reductions.</a>
                                    </p>
                                    <p className="mb-6">
                                        Ambient AI documentation tools that reduce physician documentation time by 2 to 3 hours per day are a direct labor cost reduction. They also reduce burnout along with improve physician retention, which at $300,000 to $500,000 per physician replaced is itself a major cost item.
                                    </p>
                                    <p className="mb-6">
                                        Evaluating ambient scribes for your organization? Read: <a href="https://www.fornexhealth.com/blogs/ambient-ai-scribes-are-everywhere-how-to-choose-one" target="_blank" className="text-[#60C6B1]">Ambient AI Scribes Are Everywhere - Here's How to Actually Choose One</a>.
                                    </p>
                                    <h3 className="text-2xl font-bold mb-4">Months 6 to 12 - Care Model Shift</h3>
                                    <p className="mb-6">
                                        <a href="https://www.healthcareittoday.com/2026/04/30/leading-hospital-at-home-programs/" target="_blank" className="text-[#60C6B1]">The Acute Hospital Care at Home program was extended through 2030. Mayo Clinic Arizona reported a 35% decrease in readmission rates for hospital-at-home patients.</a> The program gives hospitals five years of reimbursement certainty to justify real infrastructure investment.
                                    </p>
                                    <p className="mb-6">
                                        The hospital-at-home model delivers inpatient-level care in a home setting at the same DRG reimbursement rate with lower overhead. It is the only model that changes the fundamental economics of high-acuity care delivery.
                                    </p>
                                    <p className="mb-10">
                                        Full infrastructure guide: <strong>The Hospital-at-Home Shift - What It Means for Your Healthcare IT Stack in 2026</strong>
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Do Not Cut Your AI Governance Program</h2>
                                    <p className="mb-6">
                                        When CFOs are cutting budgets, governance programs are often the first thing to go. This is the wrong call.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.epcgroup.net/ai-governance-framework-healthcare-hipaa-guide" target="_blank" className="text-[#60C6B1]">The HHS Office for Civil Rights issued over $2.1 billion in HIPAA enforcement fines between 2003 and 2025. AI systems that process PHI without proper safeguards represent one of the fastest-growing categories of compliance risk.</a>
                                    </p>
                                    <p className="mb-6">
                                        A HIPAA enforcement action on top of Medicaid-cut pressure is not survivable for a hospital already operating with thin margins. The governance investment is cheap relative to the enforcement exposure. Keep it.
                                    </p>
                                    <p className="mb-10">
                                        Full guide on what your vendors need to prove: <a href="https://www.fornexhealth.com/blogs/ai-governance-in-healthcare-is-no-longer-optional" target="_blank" className="text-[#60C6B1]">AI Governance in Healthcare Is No Longer Optional - Here's What Your Vendor Should Prove</a>.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Hospitals That Will Still Be Open in 2030</h2>
                                    <p className="mb-6">
                                        They are not the ones that waited for the Medicaid situation to stabilize. The policy is enacted. The timeline is set. Major changes start in 2027 along with 2028. That is not a reason to wait. It is a reason to build operational efficiency while there is still time to absorb the transition.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.usnews.com/news/health-news/articles/2026-04-01/hundreds-of-u-s-hospitals-at-risk-of-shutting-down-from-medicaid-cuts" target="_blank" className="text-[#60C6B1]">Closure is the worst-case scenario, but it also does not preclude hospitals from having to make really tough decisions about cutting services that might be essential to those communities but are just no longer financially viable.</a>
                                    </p>
                                    <p className="mb-6">
                                        The hospitals that make it through this cycle will have used 2026 to fix their revenue cycle operations, deploy AI in administrative workflows along with clinical documentation, shift high-acuity patients to lower-cost care settings along with build the governance infrastructure that lets them scale technology without creating new compliance risk.
                                    </p>
                                    <p className="mb-6">
                                        None of that happens by watching. It happens by deciding that operational transformation is not optional - along with starting this quarter.
                                    </p>
                                    <p className="mb-10">
                                        446 hospitals are at high risk. Financial margins are shrinking. The technology decisions made in the next 90 days will define which side of that line your organization ends up on. <a href="https://www.fornexhealth.com/" target="_blank" className="text-[#60C6B1]">Fornex Health</a> helps hospitals move fast on the right things - revenue cycle automation, AI deployment along with care delivery infrastructure built for financial pressure. <a href="https://calendly.com/pawan_panwar/letstalk" target="_blank" className="text-[#60C6B1]">Book a 30-minute strategy call with our team today.</a> We will map out exactly where your organization should start.
                                    </p>

                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://www.usnews.com/news/health-news/articles/2026-04-01/hundreds-of-u-s-hospitals-at-risk-of-shutting-down-from-medicaid-cuts" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">U.S. News - Hundreds of U.S. Hospitals at Risk of Shutting Down From Medicaid Cuts (April 1, 2026)</a></li>
                                            <li><a href="https://www.modiohealth.com/life/credentialing/with-medicaid-cuts-ahead-what-can-we-expect-to-see-in-2026" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Modio Health - With Medicaid Cuts Ahead, What Can We Expect to See in 2026?</a></li>
                                            <li><a href="https://www.qventus.com/resources/blog/medicaid-cuts-2026-what-every-health-system-cfo-needs-to-know/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Qventus - Medicaid Cuts 2026: What Every Health System CFO Needs to Know</a></li>
                                            <li><a href="https://www.fiercehealthcare.com/payers/2026-outlook-domino-effect-medicaid-cuts-and-hidden-costs-healthcare" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Fierce Healthcare - 2026 Outlook: The Domino Effect of Medicaid Cuts</a></li>
                                            <li><a href="https://www.hfma.org/finance-and-business-strategy/hospitals-brace-for-looming-federal-cuts-in-medicaid-and-elsewhere/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">HFMA - Hospitals Brace for Looming Federal Cuts in Medicaid</a></li>
                                            <li><a href="https://www.combinehealth.ai/blog/ai-tools-for-revenue-cycle-management" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">CombineHealth AI - Top AI Solutions for Healthcare Revenue Cycle Management 2026</a></li>
                                            <li><a href="https://healos.ai/blog/ai-revenue-cycle-management-the-complete-guide-to-transforming-healthcare-rcm-in-2026" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Healos AI - AI Revenue Cycle Management: The Complete Guide 2026</a></li>
                                            <li><a href="https://www.pixelbrainy.com/blog/ai-adoption-statistics" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">PixelBrainy - AI Adoption Statistics 2026</a></li>
                                            <li><a href="https://ventionteams.com/solutions/ai/adoption-statistics" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Vention Teams - AI Adoption Statistics Q1 2026</a></li>
                                            <li><a href="https://www.healthcareittoday.com/2026/04/30/leading-hospital-at-home-programs/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Healthcare IT Today - Leading Hospital at Home Programs (April 30, 2026)</a></li>
                                            <li><a href="https://www.epcgroup.net/ai-governance-framework-healthcare-hipaa-guide" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">EPC Group - AI Governance Framework for Healthcare: HIPAA Compliance Guide</a></li>
                                            <li><a href="https://www.commonwealthfund.org/publications/issue-briefs/2025/may/federal-cuts-medicaid-could-end-medicaid-expansion-affect-hospitals" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Commonwealth Fund - Federal Cuts to Medicaid Could End Medicaid Expansion</a></li>
                                            <li><a href="https://www.mckinsey.com/industries/healthcare/our-insights/agentic-ai-and-the-race-to-a-touchless-revenue-cycle" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">McKinsey - Agentic AI and the Race to a Touchless Revenue Cycle (January 2026)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-10 h-fit">
                            {/* CTA Card */}
                            <div className="bg-[#60C6B1] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Ready to Build for the Future?</h4>
                                <p className="text-white/90 mb-8 relative z-10">
                                    Don't let legacy architecture limit your potential. Connect with us to build a flexible, AI-ready healthcare application.
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
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">AI Governance in Healthcare Is No Longer Optional. Here Is What Your Vendor Should Be Able to Prove</h5>
                                    </Link>
                                    <Link href="/blogs/agentic-ai-in-healthcare-cto-guide" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">AI Readiness</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Agentic AI in Healthcare: What Hospital CTOs Need to Know</h5>
                                        </div>
                                    </Link>
                                    <Link href="/blogs/what-most-hospitals-get-wrong-when-deploying-ai-agents-in-revenue-cycle" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Deployment</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">What Most Hospitals Get Wrong When Deploying AI Agents in Revenue Cycle</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
