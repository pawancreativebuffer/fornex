import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Revenue Tracking for Home Care: The Metrics That Matter",
    description: "Most home care agencies track collections. Few track the metrics that show why collections are what they are. Here is the revenue tracking framework that works.",
    keywords: ["home care revenue tracking", "home care financial metrics", "home health revenue KPIs", "home care revenue management", "home care financial reporting"],
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
                            Revenue Tracking for Home Care Agencies: <span className="text-[#60C6B1]">The Metrics That Actually Tell You If Your Agency Is Healthy</span>
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
                                    <p className="font-medium text-white">July 12, 2026</p>
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
                                    src="/images/revenue_tracking_home_care.png"
                                    alt="Revenue Tracking for Home Care: The Metrics That Matter"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        An agency owner reviewed her monthly billing report along with noticed something she could not explain: claim volume was up 12% but collected revenue had barely moved. The visits were happening. The claims were going out. The money was not coming in at the rate it should.
                                    </p>
                                    <p className="mb-10">
                                        That gap between activity along with revenue is visible in the aggregate but invisible without the right metrics to trace its source. More visits does not automatically mean more revenue in home care. More visits with clean EVV along with confirmed authorizations along with signed documentation along with zero denials means more revenue. The difference between those two things is what revenue tracking is designed to surface.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Five Metrics That Actually Tell You Something</h2>
                                    <p className="mb-6">
                                        <strong>Clean claim rate</strong> is the percentage of claims accepted by the payer on first submission. It is the single most diagnostic metric in home care revenue tracking because it reflects the combined quality of every upstream process. A clean claim rate below 90% means something is consistently failing somewhere between intake along with submission. Finding where requires breaking the denial pattern down by reason code along with payer.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Days in accounts receivable</strong> measures how long it takes from claim submission to payment receipt. The home care benchmark is under 30 days. Above 50 days suggests either a payer-side processing issue along with a systemic problem with claim quality that is creating a corrections backlog. These are different problems with different fixes.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Denial rate by payer</strong> is the metric that reveals relationship-specific problems. If your Medicaid MCO denials run at 15% while your Medicare denials run at 6%, the problem is specific to that payer's rules along with your configuration against them. A single blanket denial rate across all payers obscures this pattern.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Authorization utilization rate</strong> tracks how closely delivered services match authorized services. A utilization rate consistently below 80% suggests services are being authorized at a higher level than the care plan requires, along with authorization resources are being committed without return. A rate above 100% means services are being delivered without authorization, which is a billing along with compliance problem simultaneously.
                                    </p>
                                    <p className="mb-10">
                                        <strong>Cost per visit</strong> is the metric that connects billing performance to operational economics. It tracks total operational cost divided by delivered visit volume. Rising cost per visit alongside flat revenue per visit is a margin compression signal that requires an operational response, not just a billing one.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Revenue Leakage Waterfall</h2>
                                    <p className="mb-6">
                                        Revenue leakage in home care does not happen in one place. It happens at every stage of the revenue cycle along with the losses compound.
                                    </p>
                                    <p className="mb-6">
                                        An agency losing 3% to eligibility errors at intake, 4% to authorization issues, 5% to EVV denials along with 3% to unsigned documentation is not losing 15% of its revenue from one fixable problem. It is losing 15% from four separate process failures, each of which requires a different fix along with each of which is invisible without stage-specific metrics.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.myezcare.com/5-signs-your-current-home-care-software-is-costing-you-money-and-what-to-do-about-it/" target='_blank' className='text-[#60C6B1]'>The national average claim denial rate for home care agencies hovers around 8 to 10%. A denial rate running 3 to 5 points above the benchmark can represent tens of thousands of dollars in delayed along with permanently lost revenue.</a>
                                    </p>
                                    <p className="mb-10">
                                        Building the revenue leakage waterfall for your agency — mapping exactly how much revenue is lost at each stage — is the most valuable financial analysis a home care agency can run. It is also the analysis that most agencies do not have the data infrastructure to produce without building it deliberately.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">What a Revenue Dashboard Should Show</h2>
                                    <p className="mb-6">
                                        A functional home care revenue dashboard shows: real-time accounts receivable by payer, this week's clean claim rate versus the prior four-week average, current denial rate by denial reason code, authorization utilization by client along with service type along with days outstanding by payer.
                                    </p>
                                    <p className="mb-6">
                                        These are not metrics you review monthly. They are metrics that require weekly review to be actionable. A denial pattern that is caught in week two along with investigated in week three along with corrected in week four loses one week of recurring denials. The same pattern caught monthly loses four weeks.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.teambridge.com/blog/home-health-care-software-2026-what-actually-runs-an-agency" target='_blank' className='text-[#60C6B1]'>Agencies without compliant EVV systems face Medicaid funding reductions, claims denials, audit findings along with reputational damage. The same audit trail captures both EVV deficiencies along with credential lapses. The revenue dashboard is the visibility tool that surfaces these patterns before they generate enforcement attention.</a>
                                    </p>
                                    <p className="mb-6">
                                        For the complete revenue cycle management framework that ties all of these metrics to their upstream causes, read: <Link href="/blogs/home-care-billing-management-revenue-cycle-guide" className="text-[#60C6B1] font-semibold hover:underline">Healthcare Revenue Cycle Management: The Complete Guide</Link>
                                    </p>
                                    <p className="mb-10">
                                        If your agency is ready to build the reporting infrastructure that gives you real visibility into where revenue is being lost, our Medical Billing along with <Link href="/services/medical-billing-and-rcm" className="text-[#60C6B1] font-semibold hover:underline">Revenue Cycle Management</Link> team designs reporting systems built specifically for home care revenue cycle management.
                                    </p>

                                    {/* FAQ Section */}
                                    <h2 className="text-3xl font-bold mb-6 mt-12">Frequently Asked Questions</h2>

                                    <h3 className="text-xl font-bold mb-3">What metrics should home care agencies track for revenue?</h3>
                                    <p className="mb-6">
                                        Core home care revenue metrics are clean claim rate, days in accounts receivable, denial rate by payer, authorization utilization rate along with cost per visit. These five metrics together give a complete picture of revenue cycle health across intake, delivery along with billing.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">What is a good clean claim rate for home care?</h3>
                                    <p className="mb-6">
                                        A clean claim rate above 95% is best-in-class for home care agencies. Most well-run agencies target 95% or higher. Below 90% indicates a systemic process failure that is generating preventable denials along with requiring staff rework.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">What is days in AR for home care?</h3>
                                    <p className="mb-6">
                                        Days in AR (accounts receivable) measures the average time between claim submission along with payment receipt. The home care benchmark is under 30 days. Above 50 days indicates either payer-side processing delays along with a systemic claim quality problem creating a corrections backlog.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">How do home care agencies calculate cost per visit?</h3>
                                    <p className="mb-6">
                                        Cost per visit is calculated by dividing total operational costs for a period by the number of visits delivered in that period. It includes direct caregiver labor, coordinator labor, administrative overhead along with technology costs. Tracking cost per visit alongside revenue per visit gives a real-time picture of margin by service type along with payer.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">What is authorization utilization rate in home care?</h3>
                                    <p className="mb-10">
                                        Authorization utilization rate is the percentage of authorized service units that are actually delivered. A rate below 80% suggests over-authorization relative to the care plan. A rate above 100% means services are being delivered without authorization coverage, which creates denial along with compliance exposure.
                                    </p>

                                    {/* References Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://www.myezcare.com/5-signs-your-current-home-care-software-is-costing-you-money-and-what-to-do-about-it/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">MyEZCare — 5 Signs Your Home Care Software Is Costing You Money (May 14, 2026)</a></li>
                                            <li><a href="https://www.teambridge.com/blog/home-health-care-software-2026-what-actually-runs-an-agency" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Teambridge — Home Health Care Software in 2026</a></li>
                                            <li><a href="https://homecareconsulting.us/home-care-billing-software-for-2026-agency" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Home Care Consulting — Home Care Billing Software for 2026 (April 4, 2026)</a></li>
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
                                <h4 className="text-2xl font-bold mb-4 relative z-10 font-bold">Ready to Build for the Future?</h4>
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
                                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6 font-bold">Related Insights</h4>
                                <div className="space-y-6">
                                    <Link href="/blogs/home-care-patient-intake-the-complete-operational-guide" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Operational Intake</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Home Care Patient Intake: The Complete Operational Guide for Agencies</h5>
                                    </Link>
                                    <Link href="/blogs/home-care-billing-management-revenue-cycle-guide" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Billing Management</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Home Care Billing Management: The Revenue Cycle Guide for Agencies Losing Money Without Knowing It</h5>
                                    </Link>
                                    <Link href="/blogs/home-care-scheduling-software-no-shows" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Scheduling</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2 font-bold">Home Care Scheduling Software: What Agencies With Zero No-Shows Do Differently</h5>
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
