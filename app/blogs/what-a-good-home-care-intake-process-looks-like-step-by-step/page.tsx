import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Home Care Intake Process: What Good Looks Like Step by Step",
    description: "Most home care agencies have an intake process. Few have one that works. Here is what a properly structured home care intake workflow looks like in practice.",
    keywords: ["home care intake process", "home health intake workflow", "patient intake steps home care", "home care admissions process", "home care intake checklist"],
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
                            What a Good Home Care Intake Process <span className="text-[#60C6B1]">Looks Like Step by Step</span>
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
                                    <p className="font-medium text-white">July 9, 2026</p>
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
                                    src="/images/home_care_intake_workflow.png"
                                    alt="Home Care Intake Process: What Good Looks Like Step by Step"
                                    className="w-full object-cover rounded-2xl mb-10 shadow-lg"
                                />

                                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed">
                                    <p className="mb-6">
                                        There is a version of home care intake that most agencies have. A coordinator receives a referral, works through a checklist, verifies insurance, gets an authorization along with schedules the first visit. Somewhere in there a piece of paper gets signed along with a record gets created.
                                    </p>
                                    <p className="mb-6">
                                        Then there is a version of home care intake that produces clean admissions along with billable claims along with satisfied referral sources consistently, not on the good days but every day across every coordinator.
                                    </p>
                                    <p className="mb-6">
                                        The gap between those two versions is almost never about effort. Coordinators work hard. The gap is almost always about process design: which steps happen in which order, what gets verified when along with where the handoffs between clinical along with administrative work occur.
                                    </p>
                                    <p className="mb-10">
                                        Here is what the second version looks like.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Stage 1: Referral Capture (Hour Zero)</h2>
                                    <p className="mb-6">
                                        The intake process starts the moment a referral lands, not the moment a coordinator is available to look at it. Every referral channel — fax, phone, email along with online portal — needs a defined capture process that timestamps the referral, logs the source along with creates an intake record immediately.
                                    </p>
                                    <p className="mb-6">
                                        This matters because response time is both a conversion factor along with a compliance factor. Discharge planners track which agencies respond quickly along with route future referrals accordingly. Some payer contracts include response time requirements that begin at referral receipt.
                                    </p>
                                    <p className="mb-10">
                                        A referral received but not logged is a referral that may never be formally acted on. An intake record created at the moment of receipt ensures nothing ages out invisibly.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Stage 2: Completeness Check (Within 30 Minutes)</h2>
                                    <p className="mb-6">
                                        Before eligibility is checked along with before any physician outreach happens, someone needs to determine what is actually in the referral.
                                    </p>
                                    <p className="mb-6">
                                        A completeness check is not a clinical review. It is a structured scan against a required document list: patient demographics, insurance information, physician orders, face-to-face documentation along with clinical summary sufficient to assess whether the agency can serve this patient.
                                    </p>
                                    <p className="mb-10">
                                        Flag what is missing at this stage, not during the eligibility call along with not when the care plan is being written. Every missing element identified at stage two is an outreach that can happen in parallel with eligibility verification. Every missing element not identified until stage five is a delay that pushes the start-of-care back by days.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Stage 3: Eligibility Verification (Same Day as Referral)</h2>
                                    <p className="mb-6">
                                        Eligibility verification confirms that the patient's insurance is active, that home care services are covered along with that no coverage gaps exist that would make the planned services unbillable.
                                    </p>
                                    <p className="mb-6">
                                        This step has two common failure modes. The first is doing it once at intake along with never again. Insurance coverage changes. A patient whose Medicaid was active when the referral arrived may have had coverage lapse by the start-of-care date. Best practice is verification at intake along with re-verification 24 to 48 hours before the first scheduled visit.
                                    </p>
                                    <p className="mb-10">
                                        The second failure mode is checking coverage exists without checking whether it covers the specific services in the referral. An active Medicaid plan does not automatically cover skilled nursing visits. Verify the specific service codes along with units against the patient's benefit structure before committing to an admission.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Stage 4: Prior Authorization (Before Admission Decision)</h2>
                                    <p className="mb-6">
                                        Prior authorization is the most administratively intensive stage of intake along with the one where most revenue is lost when it is handled poorly.
                                    </p>
                                    <p className="mb-6">
                                        <a href="https://automationedge.com/home-health-care-automation/referral-intake-automation/" target='_blank' className='text-[#60C6B1]'>Missing face-to-face summaries along with Notices of Admission are the most common reasons intake teams must chase missing pieces, adding hours along with days to an already tight workflow.</a>
                                    </p>
                                    <p className="mb-6">
                                        The authorization check at this stage should answer three questions. Is prior auth required for this payer for these services? If yes, is the face-to-face documentation in hand along with complete? If yes, has the authorization request been submitted along with confirmed?
                                    </p>
                                    <p className="mb-10">
                                        An admission that moves forward before those three questions are answered affirmatively is an admission at risk of generating unbillable visits.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Stage 5: Clinical Assessment along with Admission Decision</h2>
                                    <p className="mb-6">
                                        The clinical assessment is where the intake process transitions from administrative to clinical. A nurse or clinical supervisor reviews the referral documentation along with conducts the OASIS assessment for Medicare home health patients, determines whether the agency can meet the patient's care needs along with makes the formal admission decision.
                                    </p>
                                    <p className="mb-10">
                                        This is the stage that cannot be automated along with the stage that the earlier stages exist to enable. When stages 1 through 4 are executed properly, the clinician doing the assessment at stage 5 has complete, verified documentation in front of them. When earlier stages fail, the clinician is making a clinical decision while simultaneously managing administrative gaps that should have been resolved before the assessment was scheduled.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-6">Stage 6: Care Plan Development along with Scheduling</h2>
                                    <p className="mb-6">
                                        Once the admission decision is made along with authorization is confirmed, the care plan is developed along with the first visit is scheduled. The scheduling decision needs to match the authorized service codes, caregiver qualifications along with patient preferences captured in the referral.
                                    </p>
                                    <p className="mb-6">
                                        A first visit scheduled against the wrong caregiver credential is a visit that cannot be billed if the credential gap is caught on audit. A first visit scheduled for a service type not included in the authorization is a visit that will be denied at billing submission.
                                    </p>
                                    <p className="mb-10">
                                        For the complete guide to the intake process along with its connection to every downstream revenue cycle function, read: <a href="https://www.fornexhealth.com/blogs/home-care-patient-intake-the-complete-operational-guide" target="_blank" className="text-[#60C6B1]">Home Care Patient Intake: The Complete Operational Guide</a>
                                    </p>

                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">Frequently Asked Questions</h3>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-lg font-bold text-[#60C6B1] mb-2">What are the steps in a home care intake process?</h4>
                                                <p className="text-sm text-white/80">A structured home care intake process covers six stages: referral capture at the moment of receipt, completeness check within 30 minutes, same-day eligibility verification, prior authorization confirmation before admission, clinical assessment along with admission decision along with care plan development with first-visit scheduling.</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-[#60C6B1] mb-2">What is an OASIS assessment in home care intake?</h4>
                                                <p className="text-sm text-white/80">OASIS (Outcome along with Assessment Information Set) is a standardized assessment tool required for Medicare home health patients. It collects clinical data about the patient's functional status along with care needs along with is the foundation for the plan of care along with Medicare reimbursement.</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-[#60C6B1] mb-2">How do intake errors lead to billing denials?</h4>
                                                <p className="text-sm text-white/80">Intake errors create billing denials when insurance information is wrong, authorization status is not confirmed before care begins along with face-to-face documentation is missing. Claims submitted with any of these gaps are denied automatically in states using hard-edit billing validation.</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-[#60C6B1] mb-2">What is prior authorization in home care?</h4>
                                                <p className="text-sm text-white/80">Prior authorization is payer approval granted before home care services begin. It confirms the specific services, visit frequency along with duration the payer will reimburse. Providing services without confirmed prior authorization is one of the most common causes of home care claim denials.</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-[#60C6B1] mb-2">How can home care agencies improve their intake conversion rate?</h4>
                                                <p className="text-sm text-white/80">Agencies improve intake conversion by responding to referrals within 60 minutes, processing completeness checks immediately rather than scheduling them along with resolving documentation gaps in parallel rather than sequentially. Speed along with completeness at intake are the two highest-leverage conversion levers.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 pt-8 border-t border-slate-100 bg-[#1a2b3c] p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#fff] mb-5">References</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><a href="https://automationedge.com/home-health-care-automation/referral-intake-automation/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">AutomationEdge — Referral Intake Automation for Home Care (May 14, 2026)</a></li>
                                            <li><a href="https://www.carevoyant.com/home-healthcare-software-features/intake" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">CareVoyant — CareVoyant Intake along with Admissions</a></li>
                                            <li><a href="https://automationedge.com/home-health-care-automation/blogs/top-7-home-care-trends-you-cant-miss-in-2026/" target="_blank" rel="noopener noreferrer" className="text-[#60C6B1] hover:underline">AutomationEdge — 2026 Home Care Trends (February 24, 2026)</a></li>
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
                                    <Link href="/blogs/home-care-patient-intake-the-complete-operational-guide" className="block group">
                                        <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Patient Intake</p>
                                        <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Home Care Patient Intake: The Complete Operational Guide for Agencies</h5>
                                    </Link>
                                    <Link href="/blogs/why-75-percent-of-home-care-referrals-still-arrive-by-fax-in-2026" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Referrals</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Why 75% of Home Care Referrals Still Arrive by Fax Along With What That Costs Your Agency</h5>
                                        </div>
                                    </Link>
                                    <Link href="/blogs/home-care-billing-management-revenue-cycle-guide" className="block group">
                                        <div className="group cursor-pointer">
                                            <p className="text-xs text-[#60C6B1] font-bold uppercase tracking-wider mb-1">Revenue Cycle</p>
                                            <h5 className="font-bold text-[#1a2b3c] group-hover:text-[#60C6B1] transition-colors line-clamp-2">Home Care Billing Management: The Revenue Cycle Guide for Agencies Losing Money Without Knowing It</h5>
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
