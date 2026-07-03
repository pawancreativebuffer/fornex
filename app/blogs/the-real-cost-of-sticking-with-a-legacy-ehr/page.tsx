import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft, CheckCircle, Linkedin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "The Real Cost of Sticking with a Legacy EHR (Hidden Fees, Workarounds, Lost Productivity) - ForNex Health",
    description: "Legacy EHR systems like Epic, Cerner, and Athena carry hidden costs beyond licensing, implementation, workarounds, and lost productivity. Here's the real total cost.",
    keywords: ["legacy EHR hidden costs", "EHR total cost of ownership", "custom EHR development", "healthcare IT budget", "EHR migration costs", "ForNex Health"],
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
                            The Real Cost of Sticking with a <span className="text-[#60C6B1]">Legacy EHR</span> (Hidden Fees, Workarounds, Lost Productivity)
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
                                    <p className="font-medium text-white">July 2, 2026</p>
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
                                    src="/images/legacy_ehr_hidden_costs.png"
                                    alt="The Real Cost of Sticking with a Legacy EHR"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">

                                    {/* Quick Answer Callout */}
                                    <div className="bg-[#60C6B1]/10 border-l-4 border-[#60C6B1] p-6 rounded-r-2xl mb-10">
                                        <p className="font-semibold text-[#1a2b3c] m-0">
                                            Quick answer: The sticker price of a legacy EHR, Epic, Oracle Health (Cerner), or Athenahealth, is rarely the real cost. Implementation, annual maintenance, staff training, workaround time, and clinician burnout stack on top of licensing fees, often doubling or tripling the number an organization budgeted for. For large deployments, total cost of ownership has run into the tens of millions; even mid-sized implementations routinely exceed $500,000 before ongoing support is factored in.
                                        </p>
                                    </div>

                                    <p className="mb-6">
                                        If your team is frustrated with your current EHR and wondering whether switching is &quot;worth it,&quot; the honest answer starts with understanding what staying is already costing you.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The licensing number is just the entry fee</h2>
                                    <p className="mb-6">
                                        Published pricing for the major legacy platforms varies widely by vendor:
                                    </p>
                                    <ul className="space-y-4 mb-6 pl-6 list-disc">
                                        <li><strong>Epic</strong> typically starts around $1,200 per user, or a minimum of roughly $500,000 for larger deployments, and large health system rollouts have run well past that. One well-known hospital system's recent Epic rollout reportedly exceeded $1 billion.</li>
                                        <li><strong>Oracle Health (Cerner)</strong> offers more predictable cloud-based pricing, often starting around $25 per user monthly, which makes it more approachable for mid-sized organizations, though Cerner customers are currently navigating a disruptive migration of the legacy Millennium platform to Oracle Cloud Infrastructure, and some organizations report spending more on that migration than they spent on the original implementation.</li>
                                        <li><strong>Athenahealth</strong> and other ambulatory-focused platforms generally land in a lower band, but still carry substantial implementation and integration costs for anything beyond a basic single-location deployment.</li>
                                    </ul>
                                    <p className="mb-10">
                                        None of these numbers include what happens after go-live.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Implementation and annual maintenance add up fast</h2>
                                    <p className="mb-6">
                                        For Epic specifically, implementation projects often exceed $500,000 even for mid-sized organizations, and annual support/maintenance typically runs 15–20% of licensing fees, which can mean hundreds of thousands of dollars a year for a large hospital, indefinitely. Oracle Health's Cerner tends to run lower, often around $100,000 annually for an average-sized hospital, but &quot;lower than Epic&quot; is not the same as &quot;affordable.&quot;
                                    </p>
                                    <p className="mb-6">
                                        For organizations evaluating whether to keep investing in a legacy platform, the honest math includes:
                                    </p>
                                    <ul className="space-y-4 mb-6 pl-6 list-disc">
                                        <li>Enterprise licensing</li>
                                        <li>Infrastructure (servers, network equipment)</li>
                                        <li>Implementation and integration services</li>
                                        <li>Organization-wide training programs</li>
                                        <li>Data migration from whatever came before</li>
                                        <li>Annual maintenance and support, recurring every year the system is in use</li>
                                    </ul>
                                    <p className="mb-10">
                                        Large practices commonly land in the $2M–$5M range for a comprehensive implementation over 18–24 months. Enterprise hospital systems with 200+ physicians can see $10M–$30M or more, spanning 24–36 months, with $1.5M–$3M in ongoing annual costs after that.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The costs that never show up on an invoice</h2>
                                    <p className="mb-6">
                                        The line items above are the visible costs. The ones that actually erode a practice's day-to-day operations rarely make it into a vendor contract:
                                    </p>
                                    <ul className="space-y-4 mb-6 pl-6 list-disc">
                                        <li><strong>Workarounds.</strong> When a legacy system doesn't fit how a specialty actually documents care, staff build informal workarounds, extra clicks, side spreadsheets, sticky-note reminders, that quietly become part of the daily workflow. Every workaround is unpaid, unmeasured labor that a purpose-built system wouldn't require.</li>
                                        <li><strong>Clinician time and burnout.</strong> Physician burnout tied to EHR usability isn't a fringe complaint, it's a documented, widespread factor in clinical staff turnover. Time spent fighting a system that wasn't built for a specific specialty's workflow is time not spent with patients, and it compounds across every provider, every day, for years.</li>
                                        <li><strong>Vendor lock-in and integration fees.</strong> Connecting a legacy platform to a new tool, a patient logistics system, a specialty charting add-on, a lab interface, routinely costs $25,000–$100,000 per interface. That's a recurring tax on every improvement a practice wants to make, on top of the platform's base cost.</li>
                                        <li><strong>Platform uncertainty.</strong> Some legacy vendors are mid-transition themselves. Oracle Health's move from Cerner Millennium to a cloud-native platform is still in limited deployment as of early 2026, which means organizations on that platform are absorbing risk and disruption on a timeline they don't control.</li>
                                    </ul>

                                    <h2 className="text-3xl font-bold mb-6 mt-10">A more honest way to compare &quot;keep it&quot; vs. &quot;replace it&quot;</h2>
                                    <p className="mb-6">
                                        Before renewing or expanding a legacy contract, it's worth building out total cost of ownership (TCO) rather than comparing sticker prices:
                                    </p>

                                    {/* Side-by-side TCO Table */}
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-slate-100 shadow-sm">
                                        <table className="w-full text-left border-collapse bg-white">
                                            <thead>
                                                <tr className="bg-[#1a2b3c] text-white">
                                                    <th className="p-4 font-semibold text-sm rounded-tl-2xl">Cost category</th>
                                                    <th className="p-4 font-semibold text-sm rounded-tr-2xl">Often visible in the contract?</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm">
                                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-[#1a2b3c]">Base licensing</td>
                                                    <td className="p-4">Yes</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-[#1a2b3c]">Implementation</td>
                                                    <td className="p-4 bg-[#60C6B1]/5 font-medium text-[#1a2b3c]">Usually, but frequently underestimated</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-[#1a2b3c]">Annual maintenance</td>
                                                    <td className="p-4">Yes</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-[#1a2b3c]">Per-interface integration fees</td>
                                                    <td className="p-4 bg-[#60C6B1]/5 font-medium text-[#1a2b3c]">Rarely quoted upfront</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-[#1a2b3c]">Staff overtime from workarounds</td>
                                                    <td className="p-4 text-red-500 font-semibold">Never</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-[#1a2b3c]">Clinician turnover tied to usability</td>
                                                    <td className="p-4 text-red-500 font-semibold">Never</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-[#1a2b3c]">Delayed care from system friction</td>
                                                    <td className="p-4 text-red-500 font-semibold">Never</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="mb-10">
                                        The categories that never show up on an invoice are frequently the largest ones over a multi-year horizon, they're just harder to attach a dollar figure to, which is exactly why they get ignored in renewal decisions.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Why some organizations are moving to custom-built alternatives instead</h2>
                                    <p className="mb-6">
                                        Custom EHR development isn't the right call for every organization, for a large IDN with existing Epic infrastructure and Epic-to-Epic data exchange relationships, ripping and replacing rarely makes sense. But for specialty practices, growing multi-location groups, or organizations that have spent years accumulating workarounds around a generic platform, a system built around the actual workflow, rather than one the workflow has to be bent to fit, often changes the cost equation entirely: fewer workarounds, less integration-fee bleed, and no dependency on someone else's migration timeline. If you do decide to switch, the risk isn't the decision itself, it's <a href="/blogs/how-to-migrate-from-your-current-ehr-without-losing-patient-data" target='_blank' className='text-[#60C6B1]'>how the data moves</a> from the old system to the new one.
                                    </p>

                                    {/* FAQ Section */}
                                    <h2 className="text-3xl font-bold mb-6 mt-12">Frequently Asked Questions</h2>

                                    <h3 className="text-xl font-bold mb-3">Is switching away from a legacy EHR ever cheaper than staying?</h3>
                                    <p className="mb-6">
                                        It depends on scale and how deep the workaround problem already runs. For large IDNs deeply embedded in an Epic or Cerner ecosystem, switching costs can dwarf staying. For smaller or specialty practices paying enterprise-platform overhead for features they don't use, staying can be the more expensive path over a 3–5 year horizon.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">What's the biggest hidden cost people underestimate?</h3>
                                    <p className="mb-6">
                                        Per-interface integration fees. Every new tool a practice wants to connect to a legacy EHR can cost tens of thousands of dollars, and that adds up fast for organizations that are actively trying to modernize piece by piece.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">How do I calculate my organization's real TCO on our current EHR?</h3>
                                    <p className="mb-10">
                                        Start with the visible numbers (licensing, maintenance, implementation amortized over its lifespan), then add a conservative estimate of staff overtime from known workarounds and per-interface costs from the last 12 months of integration work. That number is almost always higher than what's in the original contract.
                                    </p>


                                    {/* References Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://topflightapps.com/ideas/epic-ehr-cost/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Epic EHR Pricing 2026: Costs, Fees, and AI Optimization</a></li>
                                            <li><a href="https://www.tactionsoft.com/blog/epic-ehr-cost/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Epic EHR Cost 2026: Pricing Per User, Per Month & By Hospital Size</a></li>
                                            <li><a href="https://www.tactionsoft.com/epic-vs-cerner-vs-athenahealth-comparison/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Epic vs Cerner vs athenahealth - 2026 EHR Comparison</a></li>
                                            <li><a href="https://www.ehrsource.com/compare/epic-vs-oracle-health/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Epic vs Oracle Health (Cerner): Full EHR Comparison for 2026</a></li>
                                            <li><a href="https://www.mindbowser.com/best-ehr-vendors-to-consider/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Best EHR Vendors 2026: Epic, Canvas, Athena & Custom Builds</a></li>
                                            <li><a href="https://www.314e.com/muspell/blog/a-practical-guide-to-reducing-risk-during-cerner-to-epic-conversion/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Reducing Risk in Cerner to Epic Data Conversion</a></li>
                                            <li><a href="https://citrusbits.com/cerner-vs-epic/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Cerner vs Epic: EHR Comparison, Costs & Key Differences</a></li>
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
                                    <Link href="/blogs/ehr-vs-emr-whats-the-difference-and-which-does-your-practice-need" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">EHR & EMR</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">EHR vs. EMR: What's the Difference and Which Does Your Practice Need?</h5>
                                    </Link>
                                    <Link href="/blogs/healthcare-interoperability-2026" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Interoperability</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Healthcare Interoperability in 2026: The Rules Changed. Most Hospitals Have Not Caught Up.</h5>
                                    </Link>
                                    <Link href="/blogs/ai-governance-in-healthcare-is-no-longer-optional" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">AI Governance</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">AI Governance in Healthcare Is No Longer Optional. Here Is What Your Vendor Should Be Able to Prove</h5>
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
