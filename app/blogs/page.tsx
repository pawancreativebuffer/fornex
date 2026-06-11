import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { ArrowRight } from 'lucide-react';
import BlogBanner from '@/component/sections/BlogBanner';
import Link from 'next/link';


export const metadata = {
    title: "Blogs - Fornex",
    description: "Blogs - Fornex",
    keywords: ["Blogs", "Fornex", "Fornex Health", "Fornex Health Blog", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs", "Fornex Blogs", "Fornex Health Blogs"],
};


export default function BlogPage() {
    const blogs = [
        {
            id: 11,
            title: "How to Choose a Healthcare Software Development Company",
            desc: "The wrong vendor does not just waste money. It creates compliance exposure, delays your go-live, puts patient data at risk along with leaves your clinical staff with a system nobody actually uses.",
            image: "/images/project_development.png",
            link: '/blogs/how-to-choose-a-healthcare-software-development-company'
        },
        {
            id: 10,
            title: "Why 80% of Healthcare Executives Believe AI Will Transform Care, But Most Have Not Deployed It Yet",
            desc: "Healthcare is enthusiastic about AI. Healthcare is not particularly good at shipping it. The gap between those two facts is the most important operational challenge in health IT right now.",
            image: "/images/agentic-ai-healthcare.png",
            link: '/blogs/why-80-percent-of-healthcare-executives-believe-ai-will-transform-care-but-most-have-not-deployed-it-yet'
        },
        {
            id: 9,
            title: "The Hospital-at-Home Shift: What It Means for Your Healthcare IT Stack in 2026",
            desc: "In February 2026, Congress extended the Acute Hospital Care at Home program through the end of 2030. The program provides waivers to hospitals to provide inpatient-level care at home to qualified Medicare beneficiaries.",
            image: "/images/hospital_at_home.png",
            link: '/blogs/the-hospital-at-home-shift-what-it-means-for-your-healthcare-it-stack-in-2026'
        },
        {
            id: 8,
            title: "AI Governance in Healthcare Is No Longer Optional. Here Is What Your Vendor Should Be Able to Prove",
            desc: "Healthcare organizations are deploying AI faster than they are building the governance infrastructure to support it. Here is what proper governance actually looks like — along with the specific questions your vendors should be able to answer before you sign anything.",
            image: "/images/ai_governance_blog.png",
            link: '/blogs/ai-governance-in-healthcare-is-no-longer-optional'
        },
        {
            id: 7,
            title: "What Most Hospitals Get Wrong When Deploying AI Agents in Revenue Cycle",
            desc: "U.S. healthcare organizations lose over $262 billion annually due to revenue cycle inefficiencies. What gets cited less often is why AI deployments meant to fix this keep failing in practice.",
            image: "/images/hospital_ai_rcm.png",
            link: '/blogs/what-most-hospitals-get-wrong-when-deploying-ai-agents-in-revenue-cycle'
        },
        {
            id: 6,
            title: "Remote Patient Monitoring in 2026: How to Build a Program That Actually Reduces Readmissions",
            desc: "The readmission numbers for remote patient monitoring programs look remarkable on paper. Here is how to build a program that actually delivers on the readmission reduction promise.",
            image: "/images/dashboard.png",
            link: '/blogs/remote-patient-monitoring-in-2026-how-to-build-a-program-that-actually-reduces-readmissions'
        },
        {
            id: 5,
            title: "The 2026 Executive Guide: What Is an EHR System, Why Implementations Fail and How to Optimize",
            desc: "Healthcare technology is at a really important turning point. With hospital procedures getting more complicated and more rules, hospital managers and IT bosses are asking how to stop costly new software systems from collapsing.",
            image: "/images/ehr_guide_2026.png",
            link: '/blogs/the-2026-executive-guide-what-is-an-ehr-system-why-implementations-fail-and-how-to-optimize'
        },
        {
            id: 1,
            title: "Ambient AI Scribes Are Everywhere. Here's How to Actually Choose One",
            desc: "Every major health system has an ambient AI scribe vendor in their inbox right now. The market has exploded, but choosing wrong means support nightmares and quiet abandonment. Here is how to actually evaluate them.",
            image: "/images/ambient_scribe_1.png",
            link: '/blogs/ambient-ai-scribes-are-everywhere-how-to-choose-one'
        },
        {
            id: 2,
            title: "The FHIR Prior Auth Deadline Is January 2027. Is Your Hospital Ready?",
            desc: "Eight months. That is how long hospitals have before the CMS-0057-F API compliance deadline hits on January 1, 2027. ",
            image: "/images/FHIR.png",
            link: '/blogs/the-fhir-prior-auth-deadline-is-january-2027'
        },
        {
            id: 3,
            title: "Why Healthcare Software Fails in the First 90 Days",
            desc: "The first 90 days of a new healthcare software rollout are where everything either clicks or collapses. Excitement gives way to staff frustration. Adoption flatlines.",
            image: "/images/blog-header-1.png",
            link: '/blogs/why-healthcare-software-fails-in-the-first-90-days'
        },
        {
            id: 4,
            title: "Agentic AI in Healthcare: What Hospital CTOs Need to Know",
            desc: "43% of health systems are already piloting agentic AI, but only 3% have deployed it. Discover the three hard questions CTOs must answer before starting their first pilot.",
            image: "/images/agent1.png",
            link: '/blogs/agentic-ai-in-healthcare-cto-guide'
        },


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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {blogs.map((blog, index) => (
                            <div
                                key={`${blog.id}-${index}`}
                                className="flex-shrink-0 w-full bg-white rounded-[1.5rem] border border-[#f2f4f7] overflow-hidden group hover:border-[#60C6B1]/30 hover:shadow-[0_40px_60px_-40px_rgba(0,0,0,0.12)] transition-all duration-500 snap-center"
                            >
                                {/* Card Image */}
                                <div className="h-56 w-full relative overflow-hidden">
                                    <div className="w-full h-full overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-5 pb-6 flex flex-col items-start gap-4">
                                    <h3 className="text-[22px] lg:text-[24px] font-bold line-clamp-2 text-[#1D2128] leading-tight group-hover:text-[#60C6B1] transition-colors duration-300">
                                        {blog.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-[#64748B] leading-relaxed line-clamp-2">
                                        {blog.desc}
                                    </p>

                                    <div className="flex items-center justify-between w-full mt-4">
                                        <Link href={blog.link} className='flex w-full items-center justify-between'>
                                            <button className="text-[#60C6B1] font-medium text-sm lg:text-[15px] group/btn flex items-center gap-1 transition-all duration-300">
                                                Learn more
                                                <span className="w-0 group-hover/btn:w-4 overflow-hidden transition-all duration-300 ease-in-out border-b border-[#60C6B1]"></span>
                                            </button>
                                            <div className="w-12 h-12 bg-[#60C6B1]/10 text-[#60C6B1] rounded-full flex items-center justify-center group-hover:bg-[#60C6B1] group-hover:text-white transition-all duration-500 shadow-sm">
                                                <ArrowRight size={22} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}
