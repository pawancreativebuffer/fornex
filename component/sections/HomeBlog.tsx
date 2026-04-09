'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const blogs = [
    {
        id: 1,
        title: "The Future of Healthcare Technology",
        desc: "Digital innovation is transforming the healthcare industry with smarter systems and connected data.",
        image: "/images/one.jpg",
    },
    {
        id: 2,
        title: "Why EHR Integration Matters for Healthcare",
        desc: "Seamless EHR integration helps healthcare organizations manage patient data more efficiently.",
        image: "/images/two.jpg",
    },
    {
        id: 3,
        title: "How Medical Billing Optimization Improves",
        desc: "Efficient medical billing processes reduce claim denials and speed up reimbursements.",
        image: "/images/three.jpg",
    },
    {
        id: 4,
        title: "The Role of Telehealth in Healthcare Solutions",
        desc: "Building compliant telehealth solutions that scale and provide better patient outreach.",
        image: "/images/four.jpg",
    },
    {
        id: 5,
        title: "Advancing Patient Care Through Smarter Systems",
        desc: "Discover how smart infrastructure is redefining the patient experience and improving outcomes.",
        image: "/images/five.png",
    }
];

export default function HomeBlog() {
    const [extendedBlogs, setExtendedBlogs] = useState([...blogs, ...blogs, ...blogs]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);

    // Initial scroll to middle set
    useEffect(() => {
        if (scrollRef.current) {
            const { scrollWidth } = scrollRef.current;
            scrollRef.current.scrollLeft = scrollWidth / 3;
        }
    }, []);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        if (scrollWidth === 0) return;
        const singleSetWidth = scrollWidth / 3;

        // Seamless Infinite Jump
        if (scrollLeft >= singleSetWidth * 2) {
            // If we've scrolled past the second set, jump back to the middle set
            scrollRef.current.scrollLeft -= singleSetWidth;
        } else if (scrollLeft <= 0) {
            // If we've scrolled before the second set, jump forward to the middle set
            scrollRef.current.scrollLeft += singleSetWidth;
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.firstElementChild as HTMLElement;
        if (!card) return;
        const cardWidth = card.clientWidth;
        const gap = 24; // Consistent with gap-6
        const scrollAmount = cardWidth + gap;

        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScroll);
            // checkScroll(); // Initial check not needed if we set scrollLeft in another useEffect
        }
        return () => currentRef?.removeEventListener('scroll', checkScroll);
    }, []);

    // Autoplay "moving" effect - Infinite
    useEffect(() => {
        const interval = setInterval(() => {
            if (!scrollRef.current) return;
            scroll('right');
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full pt-10 pb-8 lg:pt-15">
            <div className="relative max-w-[1200px] mx-auto px-4">
                <div className="w-full flex flex-col text-left gap-6 relative mb-5 lg:mb-16">
                    <div className="flex items-center gap-2 text-[#60C6B1] font-medium text-sm lg:text-base">
                        <div className="w-2.5 h-2.5 bg-[#60C6B1] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                        <span>Our Blogs</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#2D2D2D]">
                        Insight &amp; Resources from Our <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">Healthcare Experts</span>
                    </h2>
                </div>


                {/* Navigation Buttons - Kept within container width */}
                <div className="relative lg:absolute right-0 bottom-0 z-10 max-w-[1200px] mx-auto px-4 flex justify-center lg:justify-end gap-3 mt-8 mb-10 lg:mb-0">
                    <button
                        onClick={() => scroll('left')}
                        className={`w-10 h-10 rounded-full border border-[#60C6B1] cursor-pointer flex items-center justify-center transition-all hover:bg-[#60C6B1] hover:text-white text-[#60C6B1] bg-white shadow-sm hover:shadow-md`}
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className={`w-10 h-10 rounded-full border border-[#60C6B1] cursor-pointer flex items-center justify-center transition-all hover:bg-[#60C6B1] hover:text-white text-[#60C6B1] bg-white shadow-sm hover:shadow-md`}
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            <div className="relative w-full">
                {/* Slider Container - Full Width with Mask/Fade */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-10 scroll-smooth snap-x snap-mandatory px-4 md:px-12 lg:px-[calc((100vw-1200px)/2+1rem)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {extendedBlogs.map((blog, index) => (
                        <div
                            key={`${blog.id}-${index}`}
                            className="flex-shrink-0 w-[calc(100vw-32px)] md:w-[340px] lg:w-[385px] bg-white rounded-[1.5rem] border border-[#f2f4f7] overflow-hidden group hover:border-[#60C6B1]/30 hover:shadow-[0_40px_60px_-40px_rgba(0,0,0,0.12)] transition-all duration-500 snap-center"
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
                                    <button className="text-[#60C6B1] font-medium text-sm lg:text-[15px] group/btn flex items-center gap-1 transition-all duration-300">
                                        Learn more
                                        <span className="w-0 group-hover/btn:w-4 overflow-hidden transition-all duration-300 ease-in-out border-b border-[#60C6B1]"></span>
                                    </button>
                                    <div className="w-12 h-12 bg-[#60C6B1]/10 text-[#60C6B1] rounded-full flex items-center justify-center group-hover:bg-[#60C6B1] group-hover:text-white transition-all duration-500 shadow-sm">
                                        <ArrowRight size={22} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}