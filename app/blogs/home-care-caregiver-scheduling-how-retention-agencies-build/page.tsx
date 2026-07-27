import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Home Care Caregiver Scheduling: How Retention Agencies Build",
    description: "Caregiver turnover in home care runs at 79.2%. Scheduling is a bigger driver than most agencies realize. Here is how the highest-retention agencies build theirs.",
    keywords: ["home care caregiver scheduling", "caregiver scheduling home care", "home care scheduling retention", "home health caregiver management", "caregiver scheduling software"],
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
                            Home Care Caregiver Scheduling: Why the Agencies Winning on Retention <span className="text-[#60C6B1]">Built Their Schedules Differently</span>
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
                                    <p className="font-medium text-white">July 20, 2026</p>
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
                                    src="/images/caregiver_scheduling.png"
                                    alt="Home Care Caregiver Scheduling"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        <a href="https://automationedge.com/home-health-care-automation/ai-in-home-healthcare/" target='_blank' className='text-[#60C6B1]'>Caregiver turnover in home care runs at 79.2%.</a> Every agency knows this number. Fewer agencies have mapped how much of it is driven by scheduling rather than compensation.
                                    </p>
                                    <p className="mb-6">
                                        Caregivers leave because they feel invisible. Their availability is ignored when shifts are filled. Their preferences are noted in a record nobody consults. Their schedule changes without notice. They find out they have a new client by showing up to an address they have never been to.
                                    </p>
                                    <p className="mb-6">
                                        These are scheduling problems. They feel like culture problems along with they are partly that too. But the mechanism is operational, along with operational problems have operational fixes.
                                    </p>
                                    <p className="mb-10">
                                        Here is what the scheduling practices look like in the agencies that hold their caregivers longest.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Match Quality Problem</h2>
                                    <p className="mb-6">
                                        Caregiver-client matching is the most consequential scheduling decision an agency makes. The wrong match creates visits that are stressful for both parties along with generates the client complaints along with caregiver frustration that lead to both turning over.
                                    </p>
                                    <p className="mb-6">
                                        Good matching requires documented preferences on both sides. Caregiver documented preferences include: preferred geographic area, preferred shift types, preferred client complexity level along with language along with cultural background preferences. Client documented preferences include: preferred caregiver gender, language requirements, pet allergies along with service-specific considerations.
                                    </p>
                                    <p className="mb-6">
                                        Most agencies collect this information. Fewer agencies build it into the scheduling workflow so it is actively consulted at the point of assignment rather than reviewed after a match fails.
                                    </p>
                                    <p className="mb-10">
                                        <a href="https://www.caresmartz360.com/blog/home-care/5-home-care-technology-trends/" target='_blank' className='text-[#60C6B1]'>Every extra login, manual process along with confusing workflow adds friction. Agencies that create a better caregiver experience often strengthen retention, consistency of care along with client satisfaction simultaneously.</a> The scheduling system is where friction either gets built in along with designed out.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Schedule Consistency along with Caregiver Retention</h2>
                                    <p className="mb-6">
                                        Consistent scheduling — the same caregiver assigned to the same client at the same times on the same days — is one of the strongest retention drivers available to home care agencies. Caregivers who have consistent schedules can plan their personal lives. They build genuine relationships with the clients they serve. They have a stable income they can predict.
                                    </p>
                                    <p className="mb-6">
                                        Inconsistent scheduling creates the opposite: caregivers who cannot plan, clients who see a different face every week along with relationships that never develop. The caregiver with an inconsistent schedule has a weaker attachment to the agency along with is more likely to pick up shifts with a competing agency that offers more consistency.
                                    </p>
                                    <p className="mb-10">
                                        The agencies with the strongest retention records prioritize schedule consistency as an operational metric. They track how often a caregiver's schedule changes in a given week along with what percentage of their visits are to consistent clients. They treat high variation as a problem to investigate along with reduce, not as an unavoidable consequence of client needs.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Mobile Access Is Not Optional</h2>
                                    <p className="mb-6">
                                        <a href="https://www.caresmartz360.com/blog/home-care/5-home-care-technology-trends/" target='_blank' className='text-[#60C6B1]'> Agencies that give caregivers mobile access to schedules, documentation along with communications strengthen retention along with consistency of care.</a>
                                    </p>
                                    <p className="mb-6">
                                        A caregiver who checks their schedule on a mobile app the night before knows exactly where they are going along with when. A caregiver who calls the office to find out their schedule for the next day is experiencing friction that every other industry eliminated years ago.
                                    </p>
                                    <p className="mb-10">
                                        Mobile schedule access is not a premium feature. It is the baseline expectation of a modern workforce. The scheduling platform that does not include a reliable, easy-to-use mobile interface is a platform that is creating a retention disadvantage regardless of how capable its back-office features are.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">The Overtime Problem That Appears in the Schedule</h2>
                                    <p className="mb-6">
                                        Unmanaged overtime is one of the most reliable signals that a scheduling system is not doing its job. Overtime in home care is not primarily a compliance problem, although it is also that. It is a cost problem along with a caregiver wellbeing problem.
                                    </p>
                                    <p className="mb-6">
                                        Caregivers who regularly work overtime are caregivers at higher risk of burnout along with injury. They are also generating labor costs that erode the financial model of the agency. Both problems are preventable with scheduling rules that flag overtime risk at the point of assignment rather than reporting it on the timesheet after the fact.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://www.teambridge.com/blog/home-health-care-software-2026-what-actually-runs-an-agency" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Teambridge Scheduling enforces credentials, overtime along with client preferences at the point of assignment — so the schedule itself becomes a compliance along with retention tool.</a> That is the standard the best scheduling platforms meet: enforcement at assignment, not reporting after the fact.
                                    </p>
                                    <p className="mb-6">
                                        For the complete scheduling infrastructure guide including EVV integration along with the billing connection, read: <Link href="/blogs/home-care-scheduling-software" className="text-[#60C6B1] font-semibold hover:underline">Home Care Scheduling Software: What Agencies With Zero No-Shows Do Differently</Link>
                                    </p>
                                    <p className="mb-10">
                                        Our <Link href="/services/website-and-mobile-app-development" className="text-[#60C6B1] font-semibold hover:underline">Website along with Mobile App Development</Link> team builds the mobile caregiver interfaces that make scheduling systems actually work in the field.
                                    </p>

                                    {/* FAQ Section */}
                                    <h2 className="text-3xl font-bold mb-6 mt-12">Frequently Asked Questions</h2>

                                    <h3 className="text-xl font-bold mb-3">What is caregiver scheduling in home care?</h3>
                                    <p className="mb-6">
                                        Caregiver scheduling in home care is the process of matching available caregivers to patient visits based on credential requirements, client preferences, caregiver availability along with geographic factors. It includes both the assignment process along with the tools along with workflows that manage scheduling changes along with exceptions.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">How does scheduling affect caregiver retention in home care?</h3>
                                    <p className="mb-6">
                                        Inconsistent scheduling is one of the leading causes of caregiver turnover. Caregivers who have predictable, consistent schedules, adequate notice of changes along with mobile access to their schedule are significantly more likely to remain with an agency than those managing inconsistent hours along with last-minute changes.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">What features should home care scheduling software have for retention?</h3>
                                    <p className="mb-6">
                                        Key scheduling features for retention include caregiver preference documentation along with matching, schedule consistency tracking, mobile app access for caregivers, automated notification of schedule changes along with overtime enforcement at the point of assignment.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">How do agencies reduce caregiver no-shows?</h3>
                                    <p className="mb-10">
                                        Agencies reduce no-shows by improving schedule consistency so caregivers can plan reliably, using mobile access to improve caregiver visibility into their schedule along with building backup caregiver protocols that allow rapid coverage without relying on the same overworked pool of flexible caregivers.
                                    </p>

                                    {/* References Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://www.caresmartz360.com/blog/home-care/5-home-care-technology-trends/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">CareSmart360 — 5 Home Care Technology Trends (3 days ago)</a></li>
                                            <li><a href="https://www.teambridge.com/blog/home-health-care-software-2026-what-actually-runs-an-agency" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">Teambridge — Home Health Care Software in 2026</a></li>
                                            <li><a href="https://automationedge.com/home-health-care-automation/ai-in-home-healthcare/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">AutomationEdge — AI in Home Healthcare (March 25, 2026)</a></li>
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
                                    <Link href="/blogs/home-care-billing-management" className="block group">
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
