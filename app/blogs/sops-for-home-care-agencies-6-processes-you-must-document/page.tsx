import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "SOPs for Home Care Agencies: 6 Processes You Must Document",
    description: "Home care agencies that scale without documented SOPs create compliance gaps along with staff confusion. Here are the 6 processes every growing agency must write down.",
    keywords: ["SOPs for home care agencies", "home care agency standard operating procedures", "home health SOPs", "home care operational procedures", "home care compliance documentation"],
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
                            SOPs for Home Care Agencies: The Six Processes Every Agency Needs Written Down <span className="text-[#60C6B1]">Before It Scales</span>
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
                                    <p className="font-medium text-white">July 16, 2026</p>
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
                                    src="/images/sops_home_care_agencies.png"
                                    alt="SOPs for Home Care Agencies: 6 Processes You Must Document"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        An agency with 15 clients along with 20 caregivers can run on tribal knowledge. The coordinator knows every caregiver. The owner knows every client. When something goes wrong, a quick conversation resolves it because everyone involved understands the full context.
                                    </p>
                                    <p className="mb-6">
                                        An agency with 150 clients along with 200 caregivers cannot run on tribal knowledge. The coordinator covering Tuesday overnight does not know which caregivers have strong medication management skills along with which clients have falls history. The new intake coordinator does not know the steps for handling a referral that arrives with missing face-to-face documentation.
                                    </p>
                                    <p className="mb-10">
                                        Standard operating procedures are what convert tribal knowledge into repeatable processes that work regardless of who is performing them. They are also, increasingly, a compliance requirement. Surveyors along with auditors expect to see documented policies along with procedures. An agency that cannot produce them during an audit is an agency that faces findings regardless of how well it actually operates.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">SOP 1: Referral Intake Along With Admissions</h2>
                                    <p className="mb-6">
                                        The referral intake SOP defines every step from the moment a referral is received to the moment a patient is admitted along with care begins.
                                    </p>
                                    <p className="mb-6">
                                        It should specify: how referrals from different channels are captured along with timestamped, who is responsible for completeness checks along with in what timeframe, the verification steps for eligibility along with prior authorization, the documentation required before an admission decision is made along with who has authority to make that decision.
                                    </p>
                                    <p className="mb-10">
                                        Without a documented intake SOP, different coordinators run intake differently. Some verify eligibility before checking prior auth. Others do it in reverse. Some document F2F verification in one field along with others in another. The inconsistency is invisible until a claim is denied along with the investigation reveals that the process was different for that admission than it was for the hundred that preceded it.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">SOP 2: Scheduling Along With Visit Assignment</h2>
                                    <p className="mb-6">
                                        The scheduling SOP defines how caregivers are assigned to visits along with what rules govern those assignments.
                                    </p>
                                    <p className="mb-6">
                                        Credential matching requirements by service type. Client preference documentation along with how it is applied in matching decisions. Geographic assignment rules along with mileage thresholds. Backup caregiver protocols when a primary caregiver is unavailable. Escalation process when a visit cannot be covered.
                                    </p>
                                    <p className="mb-10">
                                        The credential matching section is particularly important. The SOP should specify which credentials are required for which service types along with how the scheduling system enforces those requirements along with what happens when a credential is expiring during a scheduled visit period.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">SOP 3: Electronic Visit Verification along with Exception Management</h2>
                                    <p className="mb-6">
                                        The EVV SOP defines what a compliant visit record looks like along with what happens when it does not meet that standard.
                                    </p>
                                    <p className="mb-6">
                                        Required EVV data elements per state requirement. The process for resolving EVV exceptions on the day they occur along with not at week-end when the billing cycle is closing. The maximum manual edit rate the agency targets before triggering a process review. The escalation path when a caregiver cannot complete EVV due to connectivity issues.
                                    </p>
                                    <p className="mb-10">
                                        <a href="https://www.myezcare.com/state-by-state-evv-requirements-for-2026-what-every-home-care-agency-must-know/" target='_blank' className='text-[#60C6B1]'> In 2026, states are moving from soft edits to hard edits that trigger automatic claim denials. EVV compliance is the front-line revenue issue that determines whether Medicaid claims get paid on first submission.</a> An EVV SOP that is documented along with trained ensures every caregiver along with coordinator knows exactly what a compliant visit record looks like along with what to do when one is not produced.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">SOP 4: Care Plan Development along with Update</h2>
                                    <p className="mb-6">
                                        The care plan SOP defines when care plans are developed, who develops them along with when they must be updated.
                                    </p>
                                    <p className="mb-6">
                                        Initial plan development timeline from assessment. Required review along with update triggers: clinical status changes, physician order changes, patient request along with scheduled OASIS reassessment dates. Documentation requirements for plan updates. Authorization to change a care plan along with the approval workflow that governs it.
                                    </p>
                                    <p className="mb-10">
                                        The update trigger component is the most commonly missing piece in care plan SOPs. Agencies document how care plans are created along with assume updates will happen automatically when they are needed. They do not. Without a defined trigger along with a documented process, care plans drift out of alignment with care delivery along with create the documentation-to-billing mismatch that auditors find.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">SOP 5: Billing Submission along with Denial Management</h2>
                                    <p className="mb-6">
                                        The billing SOP defines the claim submission process along with what happens when claims are denied.
                                    </p>
                                    <p className="mb-6">
                                        Claim generation timeline after visit completion. Pre-submission validation steps. EVV data reconciliation before submission. Denial categorization by reason code. Response time requirements for different denial categories. Escalation path for denials requiring clinical documentation review.
                                    </p>
                                    <p className="mb-10">
                                        The denial management section is often the weakest part of billing SOPs. Agencies document how they submit claims along with assume denials will be handled case by case. An SOP that categorizes denials by type along with defines a specific response protocol per type reduces the time-to-resolution on denials along with prevents the same denial pattern from recurring across multiple claims.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">SOP 6: Incident Reporting Along With Escalation</h2>
                                    <p className="mb-6">
                                        The incident SOP defines what constitutes a reportable incident along with the steps that follow one.
                                    </p>
                                    <p className="mb-6">
                                        Definition of reportable incidents including falls, medication errors along with unexpected hospitalizations. Immediate reporting requirements from the caregiver to the coordinator. Documentation requirements in the patient record. State reporting obligations along with timelines. Family notification requirements along with the coordinator responsible for making that contact. Physician notification requirements.
                                    </p>
                                    <p className="mb-6">
                                        For the complete billing infrastructure that connects to SOP-driven operational compliance, read: <Link href="/blogs/home-care-billing-management" className="text-[#60C6B1] font-semibold hover:underline">Home Care Billing Management: The Revenue Cycle Guide</Link>
                                    </p>
                                    <p className="mb-10">
                                        Our <Link href="/services/healthcare-software-development" className="text-[#60C6B1] font-semibold hover:underline">Healthcare Software Development</Link> team helps agencies build the workflow automation tools that enforce SOP requirements at the point of action rather than relying on staff memory along with manual checklists.
                                    </p>

                                    {/* FAQ Section */}
                                    <h2 className="text-3xl font-bold mb-6 mt-12">Frequently Asked Questions</h2>

                                    <h3 className="text-xl font-bold mb-3">What are SOPs in home care?</h3>
                                    <p className="mb-6">
                                        SOPs (Standard Operating Procedures) in home care are documented, step-by-step instructions for how specific operational processes should be performed. They ensure consistency across staff, support regulatory compliance along with create the documented evidence of systematic operations that surveyors along with auditors expect.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">Are SOPs required for home care agencies?</h3>
                                    <p className="mb-6">
                                        Medicare-certified home health agencies are required to have documented policies along with procedures as a condition of participation. State licensing requirements for non-medical along with personal care agencies vary. Regardless of requirement, SOPs are a practical necessity for any agency operating at scale.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">How often should home care SOPs be reviewed?</h3>
                                    <p className="mb-6">
                                        SOPs should be reviewed at minimum annually along with whenever a relevant regulatory change occurs. Changes to state EVV requirements, CMS billing rules along with clinical standards all trigger SOP review obligations. Many agencies also review SOPs following any compliance incident that reveals a process gap.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">What is the difference between a policy along with an SOP in home care?</h3>
                                    <p className="mb-6">
                                        A policy defines what the agency will do along with the standard it holds itself to. An SOP defines how that standard is operationally executed step by step. Policies along with SOPs work together: the policy sets the intent along with the SOP makes it actionable.
                                    </p>

                                    <h3 className="text-xl font-bold mb-3">Who is responsible for creating SOPs in a home care agency?</h3>
                                    <p className="mb-10">
                                        SOP development is typically led by the agency director along with clinical director with input from operational staff who perform the processes being documented. SOPs that are written without input from the people who do the work are often unworkable in practice.
                                    </p>

                                    {/* References Section */}
                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://www.myezcare.com/state-by-state-evv-requirements-for-2026-what-every-home-care-agency-must-know/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">MyEZCare — Home Care EVV Software along with Compliance Guide (May 11, 2026)</a></li>
                                            <li><a href="https://www.carevoyant.com/home-health-blog/home-health-care-trends-2026" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">CareVoyant — Home Health Care Trends for 2026 (January 6, 2026)</a></li>
                                            <li><a href="https://www.caremarketing.com/doj-fraud-home-care-compliance-marketing/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">CareMark — DOJ 2026 Fraud Takedown: Home Care Compliance</a></li>
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
