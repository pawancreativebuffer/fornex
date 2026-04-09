'use client';

import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import { ArrowRight } from 'lucide-react';
import BlogBanner from '@/component/sections/BlogBanner';
import Link from 'next/link';

export default function BlogPage() {
    const blogs = [
        {
            id: 1,
            title: "The Future of Healthcare Technology",
            desc: "Digital innovation is transforming the healthcare industry with smarter systems and connected data.",
            image: "/images/one.jpg",
            link: '#'
        },
        {
            id: 2,
            title: "Why EHR Integration Matters for Healthcare",
            desc: "Seamless EHR integration helps healthcare organizations manage patient data more efficiently.",
            image: "/images/two.jpg",
            link: '#'
        },
        {
            id: 3,
            title: "How Medical Billing Optimization Improves",
            desc: "Efficient medical billing processes reduce claim denials and speed up reimbursements.",
            image: "/images/three.jpg",
            link: '#'
        },
        {
            id: 4,
            title: "The Role of Telehealth in Healthcare Solutions",
            desc: "Building compliant telehealth solutions that scale and provide better patient outreach.",
            image: "/images/four.jpg",
            link: '#'
        },
        {
            id: 5,
            title: "Advancing Patient Care Through Smarter Systems",
            desc: "Discover how smart infrastructure is redefining the patient experience and improving outcomes.",
            image: "/images/five.png",
            link: '#'
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
                                    <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1D2128] leading-tight group-hover:text-[#60C6B1] transition-colors duration-300">
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
