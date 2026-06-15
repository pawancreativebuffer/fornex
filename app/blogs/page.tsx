import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import BlogBanner from '@/component/sections/BlogBanner';
import BlogList from '@/component/sections/BlogList';


export const metadata = {
    title: "Blogs - Fornex",
    description: "Blogs - Fornex",
    keywords: ["Blogs", "Fornex", "Fornex Health", "Fornex Health Blog", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs"],
};


export default function BlogPage() {
    const blogs = [
        {
            id: 18,
            title: "Why 80% of Healthcare Executives Believe AI Will Transform Care, But Most Have Not Deployed It Yet",
            desc: "Healthcare is enthusiastic about AI. Healthcare is not particularly good at shipping it. The gap between those two facts is the most important operational challenge in health IT right now.",
            image: "/images/agentic-ai-healthcare.png",
            link: '/blogs/why-80-percent-of-healthcare-executives-believe-ai-will-transform-care-but-most-have-not-deployed-it-yet',
            date: 'June 10, 2026'
        },
        {
            id: 17,
            title: "The Hospital-at-Home Shift: What It Means for Your Healthcare IT Stack in 2026",
            desc: "In February 2026, Congress extended the Acute Hospital Care at Home program through the end of 2030. The program provides waivers to hospitals to provide inpatient-level care at home to qualified Medicare beneficiaries.",
            image: "/images/hospital_at_home.png",
            link: '/blogs/the-hospital-at-home-shift-what-it-means-for-your-healthcare-it-stack-in-2026',
            date: 'Jun 8, 2026'
        },
        {
            id: 16,
            title: "AI Governance in Healthcare Is No Longer Optional. Here Is What Your Vendor Should Be Able to Prove",
            desc: "Healthcare organizations are deploying AI faster than they are building the governance infrastructure to support it. Here is what proper governance actually looks like - along with the specific questions your vendors should be able to answer before you sign anything.",
            image: "/images/ai_governance_blog.png",
            link: '/blogs/ai-governance-in-healthcare-is-no-longer-optional',
            date: 'Jun 2, 2026'
        },
        {
            id: 15,
            title: "Remote Patient Monitoring in 2026: How to Build a Program That Actually Reduces Readmissions",
            desc: "The readmission numbers for remote patient monitoring programs look remarkable on paper. Here is how to build a program that actually delivers on the readmission reduction promise.",
            image: "/images/dashboard.png",
            link: '/blogs/remote-patient-monitoring-in-2026-how-to-build-a-program-that-actually-reduces-readmissions',
            date: 'May 26, 2026'
        },
        {
            id: 14,
            title: "The 2026 Executive Guide: What Is an EHR System, Why Implementations Fail and How to Optimize",
            desc: "Healthcare technology is at a really important turning point. With hospital procedures getting more complicated and more rules, hospital managers and IT bosses are asking how to stop costly new software systems from collapsing.",
            image: "/images/ehr_guide_2026.png",
            link: '/blogs/the-2026-executive-guide-what-is-an-ehr-system-why-implementations-fail-and-how-to-optimize',
            date: 'May 20, 2026'
        },
        {
            id: 13,
            title: "Ambient AI Scribes Are Everywhere. Here's How to Actually Choose One",
            desc: "Every major health system has an ambient AI scribe vendor in their inbox right now. The market has exploded, but choosing wrong means support nightmares and quiet abandonment. Here is how to actually evaluate them.",
            image: "/images/ambient_scribe_1.png",
            link: '/blogs/ambient-ai-scribes-are-everywhere-how-to-choose-one',
            date: 'May 18, 2026'
        },
        {
            id: 12,
            title: "Agentic AI in Healthcare: What Hospital CTOs Need to Know",
            desc: "43% of health systems are already piloting agentic AI, but only 3% have deployed it. Discover the three hard questions CTOs must answer before starting their first pilot.",
            image: "/images/agent1.png",
            link: '/blogs/agentic-ai-in-healthcare-cto-guide',
            date: 'May 6, 2026'
        },
        {
            id: 11,
            title: "The FHIR Prior Auth Deadline Is January 2027. Is Your Hospital Ready?",
            desc: "Eight months. That is how long hospitals have before the CMS-0057-F API compliance deadline hits on January 1, 2027. ",
            image: "/images/FHIR.png",
            link: '/blogs/the-fhir-prior-auth-deadline-is-january-2027',
            date: 'May 5, 2026'
        },
        {
            id: 10,
            title: "Healthcare Digital Transformation: Why Most Hospitals Are Still Stuck in Planning Mode",
            desc: "49% of healthcare CEOs say digital transformation has not met expectations. Here is why hospitals stall along with the framework that actually moves them forward.",
            image: "/images/digital_transformation.svg",
            link: '/blogs/healthcare-digital-transformation-why-hospitals-get-stuck',
            date: 'December 9, 2025'
        },
        {
            id: 9,
            title: "Medical Billing Automation: How to Stop Revenue Leakage Before It Hits Your P&L",
            desc: "Half of providers still review claims manually despite proven automation benefits. Here is the medical billing automation guide that stops revenue walking out.",
            image: "/images/medical_billing_automation.png",
            link: '/blogs/medical-billing-automation-stop-revenue-leakage-now',
            date: 'November 4, 2025'
        },
        {
            id: 8,
            title: "Patient Portal Development: Why 60% of Patients Never Come Back After the First Login",
            desc: "60% of patients never return after their first login. Here is the patient portal development framework that drives real adoption instead of empty click metrics.",
            image: "/images/patient_portal_fail.png",
            link: '/blogs/patient-portal-development-why-most-portals-fail',
            date: 'October 7, 2025'
        },
        {
            id: 7,
            title: "Telemedicine App Development: What Healthcare Organizations Get Wrong Before They Build",
            desc: "Most telemedicine apps fail before they scale. Here is the complete development guide covering HIPAA compliance, EHR integration along with adoption strategy.",
            image: "/images/telemedicine_app_development.png",
            link: '/blogs/telemedicine-app-development',
            date: 'September 10, 2025'
        },
        {
            id: 6,
            title: "HIPAA Compliant App Development: What Every Healthcare Organization Must Know",
            desc: "Retrofitting compliance costs 3 to 5 times more than building it right from the start. Here is the complete guide to HIPAA compliant app development in healthcare.",
            image: "/images/hipaa_compliant_app.png",
            link: '/blogs/hipaa-compliant-app-development',
            date: 'August 5, 2025'
        },
        {
            id: 5,
            title: "Healthcare Revenue Cycle Management: The Complete Guide for Hospital Administrators",
            desc: "Hospitals lose $262 billion yearly to revenue cycle inefficiency. This complete guide covers every stage of RCM along with the fixes that actually move the numbers.",
            image: "/images/rcm_guide_banner.png",
            link: '/blogs/healthcare-revenue-cycle-management',
            date: 'July 16, 2025'
        },
        {
            id: 4,
            title: "Why EHR Integration Projects Fail Along With How to Stop It Happening to You",
            desc: "More than half of EHR systems either fail outright along with fail to be properly utilized after go-live. Healthcare technology projects fail at a rate of up to 70% when failure is defined as any project resulting in a delay, a cost overrun, a failure to meet intended goals along with complete abandonment.",
            image: "/images/ehr_integration_failure.png",
            link: '/blogs/why-ehr-integration-projects-fail',
            date: 'June 19, 2025'
        },
        {
            id: 3,
            title: "How to Choose a Healthcare Software Development Company",
            desc: "The wrong vendor does not just waste money. It creates compliance exposure, delays your go-live, puts patient data at risk along with leaves your clinical staff with a system nobody actually uses.",
            image: "/images/project_development.png",
            link: '/blogs/how-to-choose-a-healthcare-software-development-company',
            date: 'May 7, 2025'
        },
        {
            id: 2,
            title: "What Most Hospitals Get Wrong When Deploying AI Agents in Revenue Cycle",
            desc: "U.S. healthcare organizations lose over $262 billion annually due to revenue cycle inefficiencies. What gets cited less often is why AI deployments meant to fix this keep failing in practice.",
            image: "/images/hospital_ai_rcm.png",
            link: '/blogs/what-most-hospitals-get-wrong-when-deploying-ai-agents-in-revenue-cycle',
            date: 'April 9, 2025'
        },
        {
            id: 1,
            title: "Why Healthcare Software Fails in the First 90 Days",
            desc: "The first 90 days of a new healthcare software rollout are where everything either clicks or collapses. Excitement gives way to staff frustration. Adoption flatlines.",
            image: "/images/blog-header-1.png",
            link: '/blogs/why-healthcare-software-fails-in-the-first-90-days',
            date: 'March 5, 2025'
        }
    ];

    return (
        <>
            <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c]">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

                <Header />
                <BlogBanner />
            </section>


            <section className="w-full py-10 lg:py-15">
                <div className="relative max-w-[1400px] mx-auto px-4">
                    <BlogList blogs={blogs} />
                </div>
            </section>


            <Footer />
        </>
    );
}
